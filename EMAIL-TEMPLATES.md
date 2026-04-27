# SongGift Email Templates — GHL Ready (Plug & Play)

> **HOW TO PASTE INTO GHL:**
> 1. In the GHL email editor, click the **`</>`** (source code) button in the toolbar
> 2. Delete everything in the source code box
> 3. Paste the HTML below
> 4. Click Save/OK
> The merge tags will auto-populate when emails send.

---
---

# EMAIL 1: Purchase Confirmation — To Customer

**GHL Setup:**
- **Trigger:** Workflow → Pipeline Stage Changed → "Purchased Song" stage
- **Action:** Send Email
- **To:** `{{contact.email}}`
- **Subject Line:** `Your custom song is being created! 🎵`
- **From Name:** SongGift
- **From Email:** support@songgift.app

**Click `</>` in GHL editor and paste this HTML:**

```html
<div style="font-family: Verdana, Geneva, sans-serif; font-size: 16px; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">

  <p>Hi {{contact.first_name}},</p>

  <p>Thank you so much for your order! We're thrilled you chose SongGift to create something truly special.</p>

  <p><b>Here's what happens next:</b></p>

  <ol>
    <li>Our team has received your song details and is already getting to work.</li>
    <li>Your custom song for <b>{{contact.euWDahXw1uAB8YMf0KTj}}</b> is being crafted with care.</li>
    <li>You'll receive your finished song via email within <b>24–48 hours</b>.</li>
  </ol>

  <p><b>Song Details We Have on File:</b></p>

  <table style="width: 100%; border-collapse: collapse; margin: 10px 0 20px 0;">
    <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; width: 40%;">Recipient</td><td style="padding: 8px; border-bottom: 1px solid #eee;">{{contact.euWDahXw1uAB8YMf0KTj}}</td></tr>
    <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Relationship</td><td style="padding: 8px; border-bottom: 1px solid #eee;">{{contact.rvF80ZlwKOG9iNKDcKPk}}</td></tr>
    <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Music Style</td><td style="padding: 8px; border-bottom: 1px solid #eee;">{{contact.n498BJjgMqfSZKRP3ift}}</td></tr>
    <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Emotional Vibe</td><td style="padding: 8px; border-bottom: 1px solid #eee;">{{contact.3CJfMUsSoKTNJyUKKXwc}}</td></tr>
    <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Voice Preference</td><td style="padding: 8px; border-bottom: 1px solid #eee;">{{contact.EbiAY8f0cIPogktv3nzj}}</td></tr>
    <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Language</td><td style="padding: 8px; border-bottom: 1px solid #eee;">{{contact.bgilVJcvq1GYoo6e59pK}}</td></tr>
  </table>

  <p>Need to make any changes? Just reply to this email and we'll update your order right away — no worries at all.</p>

  <p>We put our heart into every single song we create. We can't wait for you to hear yours.</p>

  <br>
  <p>With love,<br><b>The SongGift Team</b></p>

  <p><a href="https://songgift.app" style="color: #e11d48; text-decoration: none;">songgift.app</a></p>

  <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
  <p style="font-size: 13px; color: #999;">Questions? Just reply to this email or reach us at <a href="mailto:support@songgift.app" style="color: #999;">support@songgift.app</a></p>

</div>
```

---
---

# EMAIL 2: New Order Notification — To Owner

**GHL Setup:**
- **Trigger:** Workflow → Pipeline Stage Changed → "Purchased Song" stage
- **Action:** Send Email (Internal Notification)
- **To:** (your personal email address)
- **Subject Line:** `🎉 New Song Order! {{contact.euWDahXw1uAB8YMf0KTj}} — from {{contact.first_name}} {{contact.last_name}}`
- **From Name:** SongGift System
- **From Email:** support@songgift.app

**Click `</>` in GHL editor and paste this HTML:**

```html
<div style="font-family: Verdana, Geneva, sans-serif; font-size: 15px; line-height: 1.6; color: #333; max-width: 650px; margin: 0 auto; padding: 20px;">

  <div style="background: #1a1a2e; color: #fff; padding: 20px 25px; border-radius: 10px 10px 0 0; text-align: center;">
    <h1 style="margin: 0; font-size: 22px;">🎵 NEW SONG ORDER</h1>
  </div>

  <div style="border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px; padding: 25px;">

    <h3 style="margin-top: 0; color: #e11d48; border-bottom: 2px solid #e11d48; padding-bottom: 8px;">👤 Customer Info</h3>
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
      <tr><td style="padding: 6px 8px; font-weight: bold; width: 35%;">Name</td><td style="padding: 6px 8px;">{{contact.first_name}} {{contact.last_name}}</td></tr>
      <tr><td style="padding: 6px 8px; font-weight: bold;">Email</td><td style="padding: 6px 8px;"><a href="mailto:{{contact.email}}">{{contact.email}}</a></td></tr>
      <tr><td style="padding: 6px 8px; font-weight: bold;">Phone</td><td style="padding: 6px 8px;">{{contact.phone}}</td></tr>
    </table>

    <h3 style="color: #e11d48; border-bottom: 2px solid #e11d48; padding-bottom: 8px;">🎶 Song Details</h3>
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
      <tr style="background: #f9fafb;"><td style="padding: 8px; font-weight: bold; width: 35%; border-bottom: 1px solid #eee;">Recipient Name</td><td style="padding: 8px; border-bottom: 1px solid #eee;">{{contact.euWDahXw1uAB8YMf0KTj}}</td></tr>
      <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Relationship</td><td style="padding: 8px; border-bottom: 1px solid #eee;">{{contact.rvF80ZlwKOG9iNKDcKPk}}</td></tr>
      <tr style="background: #f9fafb;"><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Pronunciation</td><td style="padding: 8px; border-bottom: 1px solid #eee;">{{contact.lpVA76tOwC4naYMu1L3B}}</td></tr>
      <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Perspective</td><td style="padding: 8px; border-bottom: 1px solid #eee;">{{contact.sCWsuSpHZjO3uFVEN0aO}}</td></tr>
      <tr style="background: #f9fafb;"><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Gender</td><td style="padding: 8px; border-bottom: 1px solid #eee;">{{contact.UZunf82IQ6nOLjtZoVY3}}</td></tr>
      <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Language</td><td style="padding: 8px; border-bottom: 1px solid #eee;">{{contact.bgilVJcvq1GYoo6e59pK}}</td></tr>
      <tr style="background: #f9fafb;"><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Language Style</td><td style="padding: 8px; border-bottom: 1px solid #eee;">{{contact.FumA2xFSdkB6zpaeparW}}</td></tr>
      <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Music Style</td><td style="padding: 8px; border-bottom: 1px solid #eee;">{{contact.n498BJjgMqfSZKRP3ift}}</td></tr>
      <tr style="background: #f9fafb;"><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Emotional Vibe</td><td style="padding: 8px; border-bottom: 1px solid #eee;">{{contact.3CJfMUsSoKTNJyUKKXwc}}</td></tr>
      <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Voice Preference</td><td style="padding: 8px; border-bottom: 1px solid #eee;">{{contact.EbiAY8f0cIPogktv3nzj}}</td></tr>
      <tr style="background: #f9fafb;"><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Musical Inspiration</td><td style="padding: 8px; border-bottom: 1px solid #eee;">{{contact.UORYvqtuPGzLa1FH5buQ}}</td></tr>
      <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Faith</td><td style="padding: 8px; border-bottom: 1px solid #eee;">{{contact.t9H9GsWnqKwW2I1vpmiv}}</td></tr>
      <tr style="background: #f9fafb;"><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Rephrase OK</td><td style="padding: 8px; border-bottom: 1px solid #eee;">{{contact.BcFgnhSgf0ysvttBLTo2}}</td></tr>
      <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Express Delivery</td><td style="padding: 8px; border-bottom: 1px solid #eee;">{{contact.JwONZHUbpNR7WymhRCvv}}</td></tr>
    </table>

    <h3 style="color: #e11d48; border-bottom: 2px solid #e11d48; padding-bottom: 8px;">💬 Customer's Words</h3>

    <p><b>Qualities They Love:</b></p>
    <div style="background: #f9fafb; padding: 12px 16px; border-radius: 8px; border-left: 4px solid #e11d48; margin-bottom: 15px;">{{contact.vA5aqjzLXnn3aLjtXjev}}</div>

    <p><b>Special Moment/Journey:</b></p>
    <div style="background: #f9fafb; padding: 12px 16px; border-radius: 8px; border-left: 4px solid #e11d48; margin-bottom: 15px;">{{contact.7rCNQXwKqpaGzOz4wRwG}}</div>

    <p><b>Heart's Message:</b></p>
    <div style="background: #f9fafb; padding: 12px 16px; border-radius: 8px; border-left: 4px solid #e11d48; margin-bottom: 15px;">{{contact.1y15REdkoOenZCVLgOdv}}</div>

    <p><b>Special Phrases/Words:</b></p>
    <div style="background: #f9fafb; padding: 12px 16px; border-radius: 8px; border-left: 4px solid #e11d48; margin-bottom: 15px;">{{contact.v4bI7ILViisOJmEqSDQ8}}</div>

    <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
    <p style="font-size: 13px; color: #999; text-align: center;"><em>Full order note with Stripe session ID and amount is attached to this contact's notes in GHL.</em></p>

  </div>
</div>
```

---
---

# EMAIL 3: Email Signup Welcome — To Subscriber (with 10% Off)

**GHL Setup:**
- **Trigger:** Workflow → Pipeline Stage Changed → "Email Notification Sign Up" stage
- **Action:** Send Email
- **To:** `{{contact.email}}`
- **Subject Line:** `Welcome to SongGift! Here's 10% off your first custom song 🎶`
- **From Name:** SongGift
- **From Email:** support@songgift.app

**Click `</>` in GHL editor and paste this HTML:**

```html
<div style="font-family: Verdana, Geneva, sans-serif; font-size: 16px; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">

  <p>Hi there! 👋</p>

  <p>Welcome to the SongGift family! We're so glad you're here.</p>

  <p>We believe every love story, every friendship, every bond deserves its own soundtrack. And we're here to help you create it.</p>

  <p><b>As a thank you for signing up, here's 10% off your first custom song:</b></p>

  <div style="background: #1a1a2e; color: #fff; text-align: center; padding: 30px; border-radius: 12px; margin: 25px 0;">
    <p style="margin: 0 0 8px 0; font-size: 14px; color: #ccc;">YOUR EXCLUSIVE DISCOUNT CODE</p>
    <p style="margin: 0; font-size: 36px; font-weight: bold; letter-spacing: 4px; color: #f9a8d4;">WELCOME10</p>
    <p style="margin: 10px 0 0 0; font-size: 14px; color: #ccc;">Enter this code at checkout to save 10%</p>
  </div>

  <div style="background: #fdf2f8; padding: 20px; border-radius: 10px; margin: 20px 0;">
    <p style="margin: 0 0 8px 0; font-weight: bold; color: #e11d48;">What that looks like:</p>
    <p style="margin: 4px 0;">Custom Song: <s>$79</s> → <b>$71.10</b></p>
    <p style="margin: 4px 0;">Custom Song + Express Delivery: <s>$118</s> → <b>$106.20</b></p>
  </div>

  <p><b>Here's what you get with every SongGift:</b></p>

  <p>
    ✅ A fully original song written from YOUR real story<br>
    ✅ Professional recording, mixing, and mastering<br>
    ✅ Custom cover art designed for your song<br>
    ✅ Unlimited revisions until it's perfect<br>
    ✅ Delivered in just 24–48 hours
  </p>

  <div style="text-align: center; margin: 30px 0;">
    <a href="https://songgift.app/create" style="display: inline-block; background: #e11d48; color: #fff; padding: 16px 40px; border-radius: 50px; text-decoration: none; font-weight: bold; font-size: 18px;">Create Your Custom Song →</a>
  </div>

  <p>Whether it's for a birthday, anniversary, wedding, Mother's Day, or just because — a custom song is the gift they'll never stop playing.</p>

  <p>We'll also keep you in the loop with:</p>
  <ul>
    <li>Exclusive offers and early access to new features</li>
    <li>Heartwarming stories from our community</li>
    <li>Ideas for meaningful, one-of-a-kind gifts</li>
  </ul>

  <p>Welcome aboard! 🎶</p>

  <br>
  <p>With love,<br><b>The SongGift Team</b></p>

  <p><a href="https://songgift.app" style="color: #e11d48; text-decoration: none;">songgift.app</a></p>

  <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
  <p style="font-size: 13px; color: #999; text-align: center;">Want to unsubscribe? Just reply with "unsubscribe" and we'll take care of it.</p>

</div>
```

---
---

# REFERENCE

## Coupon Details
- **Code:** `WELCOME10`
- **Discount:** 10% off entire order
- **Status:** Active in Stripe (live mode), no expiration, unlimited uses
- **How it works:** Customer types `WELCOME10` in the coupon field on the checkout page → Stripe applies 10% off automatically

## Pricing After Discount
| Package | Original | With WELCOME10 |
|---|---|---|
| Custom Song | $79.00 | **$71.10** |
| Custom Song + Express | $118.00 | **$106.20** |

## GHL Workflow Summary
| Email | Trigger | Recipient |
|---|---|---|
| Purchase Confirmation | Pipeline → "Purchased Song" stage | Customer (`{{contact.email}}`) |
| Owner Notification | Pipeline → "Purchased Song" stage | Your personal email |
| Welcome + Coupon | Pipeline → "Email Notification Sign Up" stage | Subscriber (`{{contact.email}}`) |
