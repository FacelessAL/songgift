import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Corporate Song Gift | Custom Business & Team Song | SongGift',
  description: "Create a custom corporate song for team building, company events, employee appreciation, or brand anthems. We, 3–5 day delivery.",
  openGraph: { title: 'Corporate Song Gift | Custom Business & Team Song | SongGift', description: "Elevate your corporate events with a custom business song.", url: 'https://www.songgift.app/corporate-song-gift' },
};

export default function Page() {
  return (
    <LandingPageTemplate
      slug="corporate-song-gift"
      breadcrumbTitle="Corporate Song Gift"
      heroTitle="Create a Custom Song for Your Team, Company Event, or Corporate Celebration"
      heroDescription="Whether it's a team-building event, company anniversary, product launch, or retirement party — a custom song makes your corporate celebration unforgettable. Great quality, guaranteed fun."
      ctaText="Create a Corporate Song"
      stepsTitle="How to Create the Perfect Corporate Song"
      steps={[
        { title: 'Tell Us the Occasion', description: "Share the details — the event, the honoree, the company culture, the inside jokes, and the vibe you're going for (inspirational, funny, or both)." },
        { title: 'We Craft Your Song', description: 'We create a polished, custom song that fits your brand, your team, and your event perfectly.' },
        { title: 'Steal the Show', description: "Play it at the event and watch your team go wild. This becomes the highlight of the celebration and a story people tell for years." },
      ]}
      benefitsTitle="Why a Custom Song Elevates Any Corporate Event"
      benefitsSubtitle="Team Building Has Never Sounded This Good"
      benefits={[
        { title: 'Unforgettable Team Moments', description: "A custom song creates a shared experience that bonds your team in a unique way. It's the moment everyone photographs, shares, and talks about long after the event." },
        { title: 'Fits Any Occasion', description: "From retirement parties to product launches, holiday parties to team milestones — we create songs that match your company culture and celebration perfectly." },
      ]}
      benefitsCta="Make your next corporate event legendary. Create a custom song that celebrates your team, your culture, and your achievements."
      benefitsCtaText="Start Your Corporate Song"
      testimonialsTitle="Corporate Songs That Elevated Events"
      testimonialsLink="Read more stories →"
      readyCta="Ready to Create a Corporate Song?"
      readyDescription="Elevate your next company event with a custom song that celebrates your team and creates an unforgettable moment for everyone."
      relatedTitle="More Event Song Ideas"
      relatedLinks={[
        { href: '/retirement-song-gift', title: 'Retirement Song', description: 'Send them off in style' },
        { href: '/funny-song-gift', title: 'Funny Song Gift', description: 'Add humor to the event' },
        { href: '/thank-you-song-gift', title: 'Thank You Song', description: 'Express corporate gratitude' },
        { href: '/custom-song-for-teacher', title: 'Song for Mentor', description: 'Thank a workplace mentor' },
        { href: '/christmas-song-gift', title: 'Holiday Party Song', description: 'Custom songs for the holiday party' },
        { href: '/reviews', title: 'Customer Reviews', description: "See what others say" },
      ]}
      faqs={[
        { question: "What are corporate songs used for?", answer: "Corporate songs are used for team building events, company anniversaries, product launches, employee appreciation, retirement celebrations, and brand anthems." },
        { question: "Can a whole team contribute to the song?", answer: "Yes! Many companies have team members submit memories, inside jokes, and messages that we weave into the custom song." },
        { question: "Is this appropriate for professional settings?", answer: "Absolutely! We create polished, high-quality songs that are entertaining yet appropriate for any corporate environment." },
      ]}
    />
  );
}
