'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-border rounded-xl overflow-hidden">
          <button
            className="w-full flex items-center justify-between p-6 text-left hover:bg-bg-light transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="text-lg font-semibold text-text-dark pr-4">{faq.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-text-muted flex-shrink-0 transition-transform duration-200 ${
                openIndex === i ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === i && (
            <div className="px-6 pb-6">
              <p className="text-text-muted leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
