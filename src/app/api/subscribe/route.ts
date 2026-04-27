import { NextRequest, NextResponse } from 'next/server';
import { processSubscriber } from '@/lib/ghl';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
    }

    const contactId = await processSubscriber(email.trim().toLowerCase());

    return NextResponse.json({ success: true, contactId });
  } catch (err) {
    console.error('Subscribe error:', err);
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 },
    );
  }
}
