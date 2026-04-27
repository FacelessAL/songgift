import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Custom Song for Daughter | Personalized Song Gift from Parents | SongGift',
  description: "Create a personalized song for your daughter that captures your love and pride. Perfect for birthdays, graduations, weddings, sweet 16, or quinceañeras. We, 24–48 hr delivery.",
  openGraph: { title: 'Custom Song for Daughter | Personalized Song Gift | SongGift', description: 'Give your daughter a custom song that celebrates who she is. We, fast delivery.', url: 'https://www.songgift.app/custom-song-for-daughter' },
};

export default function Page() {
  return (
    <LandingPageTemplate
      slug="custom-song-for-daughter"
      breadcrumbTitle="Custom Song for Daughter"
      heroTitle="Create a Custom Song That Tells Your Daughter How Special She Is"
      heroDescription="She's your little girl, your pride, your joy. Whether she's turning 5 or 50, give your daughter a personalized song that captures the depth of your love and the pride you feel watching her shine."
      ctaText="Create Her Song Now"
      stepsTitle="How to Create the Perfect Song for Your Daughter"
      steps={[
        { title: 'Share Your Love', description: "Tell us about your daughter — her spirit, her dreams, your favorite memories, and the moments that make you burst with pride." },
        { title: 'We Craft Her Song', description: 'We create a beautiful, emotional song that captures the parent-daughter bond in a way words alone never could.' },
        { title: 'Make Her Feel Like a Star', description: "Watch her light up as she hears a song written just for her — a melody that tells her she's loved beyond measure." },
      ]}
      benefitsTitle="Why a Custom Song Is the Perfect Gift for Your Daughter"
      benefitsSubtitle="A Gift As Unique As She Is"
      benefits={[
        { title: 'Celebrates Who She Is', description: "A custom song isn't generic — it's about HER. Her laugh, her dreams, her quirks, and all the things that make her irreplaceable in your life." },
        { title: 'A Treasure for Every Chapter', description: "From daddy-daughter dances to wedding days to becoming a mom herself — this song grows with her and becomes more meaningful at every stage of life." },
      ]}
      benefitsCta="Your daughter deserves to know exactly how much she means to you. Create a song that wraps her in love every time she presses play."
      benefitsCtaText="Start Creating Her Song"
      testimonialsTitle="Daughters Treasure Their Custom Songs"
      testimonialsLink="Read more family stories →"
      readyCta="Ready to Create a Song for Your Daughter?"
      readyDescription="Whether it's for her birthday, graduation, wedding, or just because — give your daughter a song that says everything your heart feels."
      relatedTitle="More Custom Song Gift Ideas"
      relatedLinks={[
        { href: '/custom-song-for-son', title: 'Custom Song for Son', description: 'Create a meaningful song for your son' },
        { href: '/wedding-song-gift', title: 'Wedding Song Gift', description: 'The perfect gift for her special day' },
        { href: '/graduation-song-gift', title: 'Graduation Song Gift', description: 'Celebrate her achievement with a custom song' },
        { href: '/sweet-16-song-gift', title: 'Sweet 16 Song', description: 'Make her sweet 16 unforgettable' },
        { href: '/quinceanera-song-gift', title: 'Quinceañera Song', description: 'Celebrate her quinceañera with a custom song' },
        { href: '/reviews', title: 'Customer Reviews', description: "See what others say about their experiences" },
      ]}
      seoTitle="Give Your Daughter a Gift She Will Treasure for a Lifetime"
      seoContent={`<p>A <strong>custom song for your daughter</strong> is the most meaningful gift a parent can give. Whether she's turning 16, graduating college, walking down the aisle, or you simply want her to know how proud you are, a <strong>personalized song</strong> says everything your heart feels — set to beautiful music.</p>
<p>We take your words — her quirks, her dreams, your favorite memories — and transform them into a song she'll listen to for the rest of her life. Choose from <strong>pop, acoustic, worship, R&B, country</strong>, or cinematic styles. Every song is <strong>delivered in 24–48 hours</strong>.</p>
<p>From <strong>daddy-daughter dance songs</strong> to <strong>birthday anthems</strong> to <strong>wedding day surprises</strong>, a personalized song for your daughter becomes a family heirloom that grows more meaningful with every passing year.</p>`}
      faqs={[
        { question: 'What occasions are custom songs for daughters popular for?', answer: 'Custom songs for daughters are incredibly popular for birthdays, sweet 16 celebrations, quinceañeras, graduations, weddings (especially father-daughter dances), and just-because moments.' },
        { question: 'Can both parents contribute to the song?', answer: 'Absolutely! Many parents collaborate on the details — sharing memories, feelings, and messages they want included. The more personal details, the better the song.' },
        { question: 'Is this appropriate for young daughters too?', answer: 'Yes! We create songs for daughters of all ages — from toddlers to adults. The tone and content are always age-appropriate and tailored to your relationship.' },
      ]}
    />
  );
}
