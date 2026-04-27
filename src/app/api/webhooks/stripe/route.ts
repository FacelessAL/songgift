import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { processOrder } from '@/lib/ghl';

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature');

  if (!sig) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
  }

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    // Only process paid sessions
    if (session.payment_status !== 'paid') {
      return NextResponse.json({ received: true });
    }

    const meta = session.metadata || {};
    const customerEmail = session.customer_email || session.customer_details?.email || '';

    try {
      await processOrder(
        {
          email: customerEmail,
          name: meta.fullName || '',
          phone: meta.phone || '',
        },
        {
          recipientName: meta.recipientName,
          relationship: meta.relationship,
          perspective: meta.perspective,
          gender: meta.gender,
          pronunciation: meta.pronunciation,
          language: meta.language,
          languageStyle: meta.languageStyle,
          specialPhrases: meta.specialPhrases,
          musicStyle: meta.musicStyle ? meta.musicStyle.split(', ') : [],
          emotionalVibe: meta.emotionalVibe ? meta.emotionalVibe.split(', ') : [],
          voicePreference: meta.voicePreference,
          musicalInspiration: meta.musicalInspiration,
          qualities: meta.qualities,
          moment: meta.moment,
          faith: meta.faith,
          heartsMessage: meta.heartsMessage,
          rephraseOk: meta.rephraseOk === 'true',
          express: meta.express === 'true',
          amount: (session.amount_total || 0) / 100,
          stripeSessionId: session.id,
        },
      );

      console.log(`✅ Order processed for ${customerEmail} — session ${session.id}`);
    } catch (err) {
      // Log but don't fail — payment is already captured
      console.error('GHL processing error:', err);
    }
  }

  return NextResponse.json({ received: true });
}
