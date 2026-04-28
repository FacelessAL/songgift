const GHL_API_KEY = process.env.GHL_API_KEY!;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID!;
const GHL_PIPELINE_ID = process.env.GHL_PIPELINE_ID!;
const GHL_BASE = 'https://services.leadconnectorhq.com';

// Pipeline stage IDs
const STAGE_EMAIL_SIGNUP = 'e7359a42-a4dc-4b8b-b985-b1a95eea6a82';
const STAGE_PURCHASED = '58f1fa8d-eed3-4d4f-bd0e-551f8f8577d9';

// Custom field IDs → form field mapping
const CUSTOM_FIELDS = {
  relationship:       'rvF80ZlwKOG9iNKDcKPk',  // What is your relationship to them?
  recipientName:      'euWDahXw1uAB8YMf0KTj',  // What is their name?
  pronunciation:      'lpVA76tOwC4naYMu1L3B',  // How do you pronounce their name?
  perspective:        'sCWsuSpHZjO3uFVEN0aO',  // From whose perspective should the song be written?
  gender:             'UZunf82IQ6nOLjtZoVY3',  // What is their gender?
  language:           'bgilVJcvq1GYoo6e59pK',  // Primary language
  languageStyle:      'FumA2xFSdkB6zpaeparW',  // Language style
  specialPhrases:     'v4bI7ILViisOJmEqSDQ8',  // Special phrases or words
  musicStyle:         'n498BJjgMqfSZKRP3ift',  // Music style
  emotionalVibe:      '3CJfMUsSoKTNJyUKKXwc',  // Emotional vibe
  voicePreference:    'EbiAY8f0cIPogktv3nzj',  // Voice preference
  musicalInspiration: 'UORYvqtuPGzLa1FH5buQ',  // Musical inspiration
  qualities:          'vA5aqjzLXnn3aLjtXjev',  // What qualities do you love most about them?
  moment:             '7rCNQXwKqpaGzOz4wRwG',  // Is there a moment or journey that shaped your bond?
  faith:              't9H9GsWnqKwW2I1vpmiv',  // Would you like faith reflected in a specific way?
  heartsMessage:      '1y15REdkoOenZCVLgOdv',  // Your heart's message
  rephraseOk:         'BcFgnhSgf0ysvttBLTo2',  // It's okay to rephrase this beautifully
  expressDelivery:    'JwONZHUbpNR7WymhRCvv',  // Express Delivery
  albumReferenceImage: 'lEjTkq3EGZ3HWbko0FTw',  // Album Reference Image (FILE_UPLOAD)
  customAlbumArt:      'rH3pvznrCuEITrq3AJwR',  // Custom Album Art (CHECKBOX)
  albumArtDescription: 'lSD8FaPA1P4Jin9YviUB',  // Describe your vision (optional)
} as const;

interface GHLContactInput {
  email: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  tags?: string[];
}

interface SongOrderData {
  recipientName?: string;
  relationship?: string;
  perspective?: string;
  gender?: string;
  pronunciation?: string;
  language?: string;
  languageStyle?: string;
  specialPhrases?: string;
  musicStyle?: string[];
  emotionalVibe?: string[];
  voicePreference?: string;
  musicalInspiration?: string;
  qualities?: string;
  moment?: string;
  faith?: string;
  heartsMessage?: string;
  rephraseOk?: boolean;
  express?: boolean;
  customAlbumArt?: boolean;
  albumArtDescription?: string;
  albumArtFileUploaded?: boolean;
  amount?: number;
  stripeSessionId?: string;
}

async function ghlFetch(path: string, options: RequestInit = {}) {
  const res = await fetch(`${GHL_BASE}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${GHL_API_KEY}`,
      'Content-Type': 'application/json',
      Version: '2021-07-28',
      ...options.headers,
    },
  });

  if (!res.ok) {
    const text = await res.text();
    console.error(`GHL API error [${res.status}] ${path}:`, text);
    throw new Error(`GHL API error: ${res.status}`);
  }

  return res.json();
}

/**
 * Create or update a contact in GoHighLevel.
 * Returns the contact ID.
 */
export async function upsertContact(
  input: GHLContactInput,
  customData?: Record<string, string | string[]>,
): Promise<string> {
  const nameParts = input.name?.trim().split(' ') || [];
  const firstName = input.firstName || nameParts[0] || '';
  const lastName = input.lastName || nameParts.slice(1).join(' ') || '';

  const body: Record<string, unknown> = {
    locationId: GHL_LOCATION_ID,
    email: input.email,
    firstName,
    lastName,
    tags: input.tags || [],
  };

  if (input.phone) body.phone = input.phone;

  // Map custom field IDs to their values
  if (customData) {
    const customFields: { id: string; value: unknown }[] = [];
    for (const [key, value] of Object.entries(customData)) {
      const fieldId = CUSTOM_FIELDS[key as keyof typeof CUSTOM_FIELDS];
      if (fieldId && value !== undefined && value !== '') {
        customFields.push({ id: fieldId, value });
      }
    }
    if (customFields.length > 0) {
      body.customFields = customFields;
    }
  }

  const data = await ghlFetch('/contacts/upsert', {
    method: 'POST',
    body: JSON.stringify(body),
  });

  return data.contact?.id;
}

/**
 * Add a note to a contact.
 */
export async function addContactNote(contactId: string, noteBody: string): Promise<void> {
  await ghlFetch(`/contacts/${contactId}/notes`, {
    method: 'POST',
    body: JSON.stringify({ body: noteBody }),
  });
}

/**
 * Add tags to a contact.
 */
export async function addContactTags(contactId: string, tags: string[]): Promise<void> {
  await ghlFetch(`/contacts/${contactId}/tags`, {
    method: 'POST',
    body: JSON.stringify({ tags }),
  });
}

/**
 * Create an opportunity (pipeline deal) for a contact.
 */
export async function createOpportunity(
  contactId: string,
  name: string,
  monetaryValue: number,
  stageId: string,
): Promise<string> {
  const data = await ghlFetch('/opportunities/', {
    method: 'POST',
    body: JSON.stringify({
      pipelineId: GHL_PIPELINE_ID,
      pipelineStageId: stageId,
      locationId: GHL_LOCATION_ID,
      contactId,
      name,
      status: 'open',
      monetaryValue,
    }),
  });

  return data.opportunity?.id;
}

/**
 * Full purchase flow:
 * 1. Upsert contact with custom fields + tags
 * 2. Add detailed note
 * 3. Create opportunity in "Purchased Song" stage
 */
export async function processOrder(
  contact: GHLContactInput,
  order: SongOrderData,
): Promise<{ contactId: string; opportunityId: string }> {
  // 1. Build tags
  const purchaseTags = ['purchased', ...(contact.tags || [])];
  if (order.express) purchaseTags.push('express-delivery');
  if (order.customAlbumArt) purchaseTags.push('custom-album-art');

  // 2. Build custom field data
  const customData: Record<string, string | string[]> = {
    relationship: order.relationship || '',
    recipientName: order.recipientName || '',
    pronunciation: order.pronunciation || '',
    perspective: order.perspective || '',
    gender: order.gender || '',
    language: order.language || '',
    languageStyle: order.languageStyle || '',
    specialPhrases: order.specialPhrases || '',
    musicStyle: order.musicStyle?.join(', ') || '',
    emotionalVibe: order.emotionalVibe?.join(', ') || '',
    voicePreference: order.voicePreference || '',
    musicalInspiration: order.musicalInspiration || '',
    qualities: order.qualities || '',
    moment: order.moment || '',
    faith: order.faith || '',
    heartsMessage: order.heartsMessage || '',
  };

  // Checkbox fields — GHL expects the option label in an array for CHECKBOX type
  if (order.rephraseOk) {
    customData.rephraseOk = ["It's okay to rephrase this beautifully"];
  }
  if (order.express) {
    customData.expressDelivery = ['Express Delivery'];
  }
  if (order.customAlbumArt) {
    customData.customAlbumArt = ['Custom Album Art'];
    if (order.albumArtDescription) {
      customData.albumArtDescription = order.albumArtDescription;
    }
  }

  // 3. Upsert contact with all data
  const contactId = await upsertContact(
    { ...contact, tags: purchaseTags },
    customData,
  );

  // 4. Add a summary note
  const noteLines = [
    `🎵 NEW SONG ORDER`,
    `━━━━━━━━━━━━━━━━`,
    `Amount: $${order.amount || 79}${order.express ? ' (includes express delivery)' : ''}`,
    `Stripe Session: ${order.stripeSessionId || 'N/A'}`,
    ``,
    `📋 SONG DETAILS`,
    `Recipient: ${order.recipientName || 'N/A'} (${order.relationship || 'N/A'})`,
    `Perspective: ${order.perspective || 'N/A'}`,
    `Gender: ${order.gender || 'N/A'}`,
    `Language: ${order.language || 'N/A'} — ${order.languageStyle || 'N/A'}`,
    `Music Style: ${order.musicStyle?.join(', ') || 'N/A'}`,
    `Emotional Vibe: ${order.emotionalVibe?.join(', ') || 'N/A'}`,
    `Voice Preference: ${order.voicePreference || 'N/A'}`,
    `Musical Inspiration: ${order.musicalInspiration || 'None'}`,
    `Faith: ${order.faith || 'None specified'}`,
    `Rephrase OK: ${order.rephraseOk ? 'Yes' : 'No'}`,
    `Express Delivery: ${order.express ? 'Yes' : 'No'}`,
    `Custom Album Art: ${order.customAlbumArt ? 'Yes (+$20)' : 'No'}`,
    `Album Art Description: ${order.albumArtDescription || 'N/A'}`,
    `Album Art Reference Uploaded: ${order.albumArtFileUploaded ? 'Yes' : 'No'}`,
    ``,
    `💬 QUALITIES LOVED`,
    order.qualities || 'N/A',
    ``,
    `📖 SPECIAL MOMENT/JOURNEY`,
    order.moment || 'N/A',
    ``,
    `❤️ HEART'S MESSAGE`,
    order.heartsMessage || 'N/A',
  ];

  await addContactNote(contactId, noteLines.join('\n'));

  // 5. Create opportunity in "Purchased Song" stage
  const oppName = `Song for ${order.recipientName || 'Custom Song'} — $${order.amount || 79}`;
  const opportunityId = await createOpportunity(
    contactId,
    oppName,
    order.amount || 79,
    STAGE_PURCHASED,
  );

  return { contactId, opportunityId };
}

/**
 * Email popup subscribe flow:
 * 1. Upsert contact with email-subscriber tag
 * 2. Create opportunity in "Email Notification Sign Up" stage
 */
export async function processSubscriber(email: string): Promise<string> {
  const contactId = await upsertContact({
    email,
    tags: ['email-subscriber'],
  });

  // Create opportunity in the email sign-up stage
  await createOpportunity(
    contactId,
    `Email Signup — ${email}`,
    0,
    STAGE_EMAIL_SIGNUP,
  );

  return contactId;
}
