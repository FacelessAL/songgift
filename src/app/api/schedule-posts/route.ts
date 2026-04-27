import { NextResponse } from 'next/server';
import { pickDailyPosts } from '@/lib/posts/index';

const BUFFER_API_KEY = process.env.BUFFER_API_KEY!;
const BUFFER_CHANNEL_ID = process.env.BUFFER_CHANNEL_ID!;
const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL!;
const CRON_SECRET = process.env.CRON_SECRET;

// Post times spread throughout the day (ET): 8am, 10:30am, 12:30pm, 3pm, 5:30pm, 8pm
const POST_HOURS = [8, 10.5, 12.5, 15, 17.5, 20];

async function scheduleToBuffer(text: string, link: string, scheduledAt: Date) {
  const fullText = `${text}\n\n👉 ${link}`;
  const escapedText = fullText.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');

  const query = `
    mutation CreatePost {
      createPost(input: {
        text: "${escapedText}",
        channelId: "${BUFFER_CHANNEL_ID}",
        schedulingType: automatic,
        mode: customScheduled,
        dueAt: "${scheduledAt.toISOString()}",
        metadata: {
          facebook: {
            type: post
          }
        }
      }) {
        ... on PostActionSuccess {
          post { id text }
        }
        ... on MutationError {
          message
        }
      }
    }
  `;

  const res = await fetch('https://api.buffer.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${BUFFER_API_KEY}`,
    },
    body: JSON.stringify({ query }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Buffer API error: ${res.status} ${err}`);
  }

  const data = await res.json();

  if (data.errors) {
    throw new Error(`Buffer GraphQL error: ${JSON.stringify(data.errors)}`);
  }

  const result = data.data?.createPost;
  if (result?.message) {
    throw new Error(`Buffer mutation error: ${result.message}`);
  }

  return result;
}

async function sendDiscordNotification(success: boolean, count: number, errors: string[]) {
  if (!DISCORD_WEBHOOK_URL) return;

  const now = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'America/New_York',
  });

  const color = success ? 0x22c55e : 0xef4444; // green or red
  const title = success
    ? `✅ SongGift — ${count} Posts Scheduled`
    : `⚠️ SongGift — Scheduling Issues`;

  const description = success
    ? `Successfully scheduled **${count} Facebook posts** for today.\n\n📅 **${now}**\n⏰ Posts spread across 8am–8pm ET`
    : `Scheduled **${count}** posts but encountered errors:\n\n${errors.join('\n')}`;

  await fetch(DISCORD_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      embeds: [
        {
          title,
          description,
          color,
          footer: { text: 'SongGift Social Scheduler' },
          timestamp: new Date().toISOString(),
        },
      ],
    }),
  });
}

export async function GET(req: Request) {
  // Verify cron secret if set
  if (CRON_SECRET) {
    const authHeader = req.headers.get('authorization');
    if (authHeader !== `Bearer ${CRON_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  }

  try {
    const posts = pickDailyPosts(6);
    const today = new Date();
    const errors: string[] = [];
    let scheduled = 0;

    for (let i = 0; i < posts.length; i++) {
      const hour = POST_HOURS[i];
      const h = Math.floor(hour);
      const m = (hour - h) * 60;

      // Schedule in ET (UTC-5 / UTC-4 depending on DST)
      const scheduledAt = new Date(today);
      scheduledAt.setUTCHours(h + 5, m, 0, 0); // approximate ET as UTC-5

      // If the time has already passed today, skip it
      if (scheduledAt < new Date()) {
        scheduledAt.setDate(scheduledAt.getDate() + 1);
      }

      try {
        await scheduleToBuffer(posts[i].text, posts[i].link, scheduledAt);
        scheduled++;
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        errors.push(`Post ${i + 1}: ${msg}`);
      }
    }

    const success = errors.length === 0;
    await sendDiscordNotification(success, scheduled, errors);

    return NextResponse.json({
      success,
      scheduled,
      errors: errors.length > 0 ? errors : undefined,
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    await sendDiscordNotification(false, 0, [msg]);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
