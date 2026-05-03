// Helper to encrypt and set a GitHub Actions secret
import sodium from 'libsodium-wrappers';

const TOKEN = process.argv[2];
const REPO = process.argv[3];
const SECRET_NAME = process.argv[4];
const SECRET_VALUE = process.argv[5];

if (!TOKEN || !REPO || !SECRET_NAME || !SECRET_VALUE) {
  console.error('Usage: node set-github-secret.mjs <token> <repo> <name> <value>');
  process.exit(1);
}

async function main() {
  // Get public key
  const res = await fetch(`https://api.github.com/repos/${REPO}/actions/secrets/public-key`, {
    headers: { Authorization: `token ${TOKEN}` },
  });
  const { key, key_id } = await res.json();

  // Encrypt
  await sodium.ready;
  const binKey = sodium.from_base64(key, sodium.base64_variants.ORIGINAL);
  const binSec = sodium.from_string(SECRET_VALUE);
  const encrypted = sodium.crypto_box_seal(binSec, binKey);
  const encryptedB64 = sodium.to_base64(encrypted, sodium.base64_variants.ORIGINAL);

  // Set secret
  const putRes = await fetch(`https://api.github.com/repos/${REPO}/actions/secrets/${SECRET_NAME}`, {
    method: 'PUT',
    headers: { Authorization: `token ${TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ encrypted_value: encryptedB64, key_id }),
  });

  if (putRes.status === 201 || putRes.status === 204) {
    console.log(`✅ Secret ${SECRET_NAME} set successfully`);
  } else {
    console.error(`❌ Failed: ${putRes.status}`, await putRes.text());
  }
}

main();
