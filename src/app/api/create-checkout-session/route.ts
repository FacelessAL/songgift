import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

const BASE_PRICE = 7900; // $79 in cents
const EXPRESS_FEE = 3900; // $39 in cents
const ALBUM_ART_FEE = 2000; // $20 in cents

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { songData, express, customAlbumArt, albumArtDescription, albumArtFileUploaded, coupon } = body;

    if (!songData?.email || !songData?.fullName) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const lineItems = [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Custom Song Package',
            description: `Personalized song for ${songData.recipientName || 'your loved one'}. Includes songwriting, recording, mixing, mastering, standard album cover, lyric sheet, and unlimited revisions.`,
          },
          unit_amount: BASE_PRICE,
        },
        quantity: 1,
      },
    ];

    if (express) {
      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Express Delivery Upgrade',
            description: 'Get your custom song in 24 hours instead of 3-5 business days.',
          },
          unit_amount: EXPRESS_FEE,
        },
        quantity: 1,
      });
    }

    if (customAlbumArt) {
      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Custom Album Art',
            description: 'Hand-designed custom album artwork for your song.',
          },
          unit_amount: ALBUM_ART_FEE,
        },
        quantity: 1,
      });
    }

    // Build metadata (Stripe limits: 500 chars per value, 50 keys)
    const metadata: Record<string, string> = {
      recipientName: (songData.recipientName || '').slice(0, 500),
      relationship: (songData.relationship || '').slice(0, 500),
      language: (songData.language || '').slice(0, 500),
      languageStyle: (songData.languageStyle || '').slice(0, 500),
      musicStyle: (songData.musicStyle?.join(', ') || '').slice(0, 500),
      emotionalVibe: (songData.emotionalVibe?.join(', ') || '').slice(0, 500),
      voicePreference: (songData.voicePreference || '').slice(0, 500),
      faith: (songData.faith || '').slice(0, 500),
      qualities: (songData.qualities || '').slice(0, 500),
      moment: (songData.moment || '').slice(0, 500),
      heartsMessage: (songData.heartsMessage || '').slice(0, 500),
      fullName: (songData.fullName || '').slice(0, 500),
      phone: (songData.phone || '').slice(0, 500),
      express: express ? 'true' : 'false',
      customAlbumArt: customAlbumArt ? 'true' : 'false',
      albumArtDescription: (albumArtDescription || '').slice(0, 500),
      albumArtFileUploaded: albumArtFileUploaded ? 'true' : 'false',
      pronunciation: (songData.pronunciation || '').slice(0, 500),
      specialPhrases: (songData.specialPhrases || '').slice(0, 500),
      musicalInspiration: (songData.musicalInspiration || '').slice(0, 500),
      rephraseOk: songData.rephraseOk ? 'true' : 'false',
      perspective: (songData.perspective || '').slice(0, 500),
      gender: (songData.gender || '').slice(0, 500),
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const params: any = {
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: songData.email,
      line_items: lineItems,
      metadata,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout`,
    };

    // Apply coupon if provided
    if (coupon) {
      try {
        const promotionCodes = await stripe.promotionCodes.list({ code: coupon, active: true, limit: 1 });
        if (promotionCodes.data.length > 0) {
          params.discounts = [{ promotion_code: promotionCodes.data[0].id }];
        }
      } catch {
        // Invalid coupon — proceed without it
      }
    }

    const session = await stripe.checkout.sessions.create(params);

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('Stripe checkout error:', err);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 },
    );
  }
}
