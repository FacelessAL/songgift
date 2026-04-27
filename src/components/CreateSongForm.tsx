'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const relationships = ['Husband', 'Wife', 'Daughter', 'Mother', 'Father', 'Spouse', 'Partner', 'Son', 'Friend', 'Myself', 'Other'];
const perspectives = ['From me', 'From our family', 'From our children', 'Other'];
const genders = ['Male', 'Female', 'Prefer not to say', 'Other'];
const langStyles = ['100% Primary', 'Mostly Primary with Some Secondary', 'Bilingual Blend'];
const musicStyles = ['Worship', 'Acoustic', 'Pop', 'Rap / Spoken Word', 'R&B / Soul', 'Country', 'Cinematic', 'Other'];
const vibes = ['Hopeful', 'Gentle', 'Joyful', 'Reflective', 'Comforting', 'Victorious', 'Other'];
const voiceOptions = ['Male', 'Female', 'No preference'];
const faithOptions = [
  { value: 'Subtle', desc: 'Gentle references that feel natural' },
  { value: 'Clear', desc: 'Obvious but not overwhelming' },
  { value: 'Central', desc: 'Faith as the main theme' },
];

export default function CreateSongForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const totalSteps = 6;

  const [formData, setFormData] = useState({
    relationship: '',
    recipientName: '',
    pronunciation: '',
    perspective: '',
    gender: '',
    language: '',
    languageStyle: '',
    specialPhrases: '',
    musicStyle: [] as string[],
    emotionalVibe: [] as string[],
    voicePreference: '',
    musicalInspiration: '',
    qualities: '',
    moment: '',
    faith: '',
    heartsMessage: '',
    rephraseOk: false,
    fullName: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = (field: string, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => { const n = { ...prev }; delete n[field]; return n; });
  };

  const toggleArray = (field: 'musicStyle' | 'emotionalVibe', value: string) => {
    setFormData(prev => {
      const arr = prev[field];
      return { ...prev, [field]: arr.includes(value) ? arr.filter(v => v !== value) : [...arr, value] };
    });
    if (errors[field]) setErrors(prev => { const n = { ...prev }; delete n[field]; return n; });
  };

  const validateStep = (): boolean => {
    const e: Record<string, string> = {};
    if (step === 1) {
      if (!formData.relationship) e.relationship = 'Please select a relationship.';
      if (!formData.recipientName.trim()) e.recipientName = 'Please enter their name.';
      if (!formData.perspective) e.perspective = 'Please select a perspective.';
      if (!formData.gender) e.gender = 'Please select a gender.';
    } else if (step === 2) {
      if (!formData.language.trim()) e.language = 'Please enter a language.';
      if (!formData.languageStyle) e.languageStyle = 'Please select a language style.';
    } else if (step === 3) {
      if (formData.musicStyle.length === 0) e.musicStyle = 'Please select at least one music style.';
      if (formData.emotionalVibe.length === 0) e.emotionalVibe = 'Please select at least one emotional vibe.';
      if (!formData.voicePreference) e.voicePreference = 'Please select a voice preference.';
    } else if (step === 4) {
      if (!formData.qualities.trim()) e.qualities = 'Please share what you love about them.';
      if (!formData.moment.trim()) e.moment = 'Please share a moment or journey.';
    } else if (step === 5) {
      if (!formData.heartsMessage.trim()) e.heartsMessage = 'Please write your heart\'s message.';
    } else if (step === 6) {
      if (!formData.fullName.trim()) e.fullName = 'Please enter your name.';
      if (!formData.email.trim()) e.email = 'Please enter your email.';
      if (!formData.phone.trim()) e.phone = 'Please enter your phone number.';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => { if (validateStep() && step < totalSteps) setStep(step + 1); };
  const prev = () => { if (step > 1) { setErrors({}); setStep(step - 1); } };
  const pct = Math.round((step / totalSteps) * 100);

  const handleSubmit = () => {
    if (!validateStep()) return;
    if (typeof window !== 'undefined') {
      localStorage.setItem('songFormData', JSON.stringify(formData));
    }
    router.push('/checkout');
  };

  const inputCls = 'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors text-sm';
  const textareaCls = inputCls + ' resize-none';

  const RadioPill = ({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) => (
    <button type="button" onClick={onClick} className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium border transition-all ${selected ? 'border-accent bg-accent/10 text-accent' : 'border-gray-200 bg-white text-text-dark hover:border-accent/30'}`}>
      {label}
      <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selected ? 'border-accent' : 'border-gray-300'}`}>
        {selected && <span className="w-2 h-2 rounded-full bg-accent" />}
      </span>
    </button>
  );

  const CheckPill = ({ label, checked, onClick }: { label: string; checked: boolean; onClick: () => void }) => (
    <button type="button" onClick={onClick} className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium border transition-all ${checked ? 'border-accent bg-accent/10 text-accent' : 'border-gray-200 bg-white text-text-dark hover:border-accent/30'}`}>
      {label}
      <span className={`w-4 h-4 rounded border flex items-center justify-center ${checked ? 'bg-accent border-accent' : 'border-gray-300'}`}>
        {checked && <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
      </span>
    </button>
  );

  return (
    <div>
      {/* Progress */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-accent">Step {step} of {totalSteps}</span>
        <span className="text-sm text-text-muted">{pct}% Complete</span>
      </div>
      <div className="h-1.5 bg-gray-200 rounded-full mb-8">
        <div className="h-1.5 bg-accent rounded-full transition-all duration-300" style={{ width: `${pct}%` }} />
      </div>

      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">

        {/* Step 1: Who is this song meant to move? */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="text-center mb-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-dark" style={{ fontFamily: 'var(--font-serif)' }}>
                Who is this song meant to move?
              </h2>
              <p className="text-text-muted mt-2">Who is this song for — whose heart are you hoping to touch when they hear it?</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-dark mb-3">What is your relationship to them? <span className="text-accent">*</span></label>
              <div className="flex flex-wrap gap-2">
                {relationships.map(r => <RadioPill key={r} label={r} selected={formData.relationship === r} onClick={() => update('relationship', r)} />)}
              </div>
              {errors.relationship && <p className="text-xs text-red-500 mt-1">{errors.relationship}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-dark mb-1">What is their name? <span className="text-accent">*</span></label>
              <input type="text" value={formData.recipientName} onChange={e => update('recipientName', e.target.value)} className={`${inputCls} ${errors.recipientName ? 'border-red-400 focus:ring-red-300' : ''}`} placeholder="Enter their name" />
              {errors.recipientName && <p className="text-xs text-red-500 mt-1">{errors.recipientName}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-dark mb-1">How do you pronounce their name? <span className="text-text-muted font-normal">(optional)</span></label>
              <input type="text" value={formData.pronunciation} onChange={e => update('pronunciation', e.target.value)} className={inputCls} placeholder="e.g., Sarah (SAIR-uh) or leave blank if obvious" />
              <p className="text-xs text-text-muted mt-1">This helps us sing their name correctly in the song.</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-dark mb-3">From whose perspective should the song be written? <span className="text-accent">*</span></label>
              <div className="flex flex-wrap gap-2">
                {perspectives.map(p => <RadioPill key={p} label={p} selected={formData.perspective === p} onClick={() => update('perspective', p)} />)}
              </div>
              {errors.perspective && <p className="text-xs text-red-500 mt-1">{errors.perspective}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-dark mb-3">What is their gender? <span className="text-accent">*</span></label>
              <div className="flex flex-wrap gap-2">
                {genders.map(g => <RadioPill key={g} label={g} selected={formData.gender === g} onClick={() => update('gender', g)} />)}
              </div>
              {errors.gender && <p className="text-xs text-red-500 mt-1">{errors.gender}</p>}
            </div>
          </div>
        )}

        {/* Step 2: Language */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="text-center mb-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-dark" style={{ fontFamily: 'var(--font-serif)' }}>
                What language should their heart hear this in?
              </h2>
              <p className="text-text-muted mt-2">What language would feel most natural and meaningful for them to hear this song in?</p>
            </div>

            {formData.recipientName && (
              <div className="bg-pink-50 rounded-full py-2 px-5 text-center text-sm text-accent font-medium">
                You&apos;re creating something special for your {formData.recipientName}{formData.relationship ? `, ${formData.relationship.toLowerCase()}` : ''}.
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-text-dark mb-1">Primary language <span className="text-accent">*</span></label>
              <input type="text" value={formData.language} onChange={e => update('language', e.target.value)} className={`${inputCls} ${errors.language ? 'border-red-400 focus:ring-red-300' : ''}`} placeholder="e.g., English, Spanish, French, etc." />
              {errors.language && <p className="text-xs text-red-500 mt-1">{errors.language}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-dark mb-3">Language style <span className="text-accent">*</span></label>
              <div className="space-y-2">
                {langStyles.map(s => (
                  <button key={s} type="button" onClick={() => update('languageStyle', s)} className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium border transition-all flex items-center gap-2 ${formData.languageStyle === s ? 'border-accent bg-accent/10 text-accent' : 'border-gray-200 bg-white text-text-dark hover:border-accent/30'}`}>
                    <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${formData.languageStyle === s ? 'border-accent' : 'border-gray-300'}`}>
                      {formData.languageStyle === s && <span className="w-2 h-2 rounded-full bg-accent" />}
                    </span>
                    {s}
                  </button>
                ))}
              </div>
              {errors.languageStyle && <p className="text-xs text-red-500 mt-1">{errors.languageStyle}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-dark mb-1">Special phrases or words <span className="text-text-muted font-normal">(optional)</span></label>
              <textarea rows={3} value={formData.specialPhrases} onChange={e => update('specialPhrases', e.target.value)} className={textareaCls} placeholder="Any specific phrases, nicknames, or words in their language that would make the song more meaningful..." />
              <p className="text-xs text-text-muted mt-1">Include any special terms of endearment, cultural phrases, or meaningful words.</p>
            </div>
          </div>
        )}

        {/* Step 3: Music style & vibe */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="text-center mb-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-dark" style={{ fontFamily: 'var(--font-serif)' }}>
                How should this song feel when it plays?
              </h2>
              <p className="text-text-muted mt-2">When they hear this song, what kind of sound or atmosphere do you imagine?</p>
            </div>

            {formData.recipientName && (
              <div className="bg-pink-50 rounded-full py-2 px-5 text-center text-sm text-accent font-medium">
                {formData.recipientName} is lucky to have someone putting this much thought into a song.
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-text-dark mb-3">Music style <span className="text-accent">*</span> <span className="text-text-muted font-normal">(Select all that apply)</span></label>
              <div className="grid grid-cols-2 gap-2">
                {musicStyles.map(s => <CheckPill key={s} label={s} checked={formData.musicStyle.includes(s)} onClick={() => toggleArray('musicStyle', s)} />)}
              </div>
              {errors.musicStyle && <p className="text-xs text-red-500 mt-1">{errors.musicStyle}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-dark mb-3">Emotional vibe <span className="text-accent">*</span> <span className="text-text-muted font-normal">(Select all that apply)</span></label>
              <div className="grid grid-cols-2 gap-2">
                {vibes.map(v => <CheckPill key={v} label={v} checked={formData.emotionalVibe.includes(v)} onClick={() => toggleArray('emotionalVibe', v)} />)}
              </div>
              {errors.emotionalVibe && <p className="text-xs text-red-500 mt-1">{errors.emotionalVibe}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-dark mb-3">Voice preference <span className="text-accent">*</span></label>
              <div className="space-y-2">
                {voiceOptions.map(v => (
                  <button key={v} type="button" onClick={() => update('voicePreference', v)} className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium border transition-all flex items-center gap-2 ${formData.voicePreference === v ? 'border-accent bg-accent/10 text-accent' : 'border-gray-200 bg-white text-text-dark hover:border-accent/30'}`}>
                    <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${formData.voicePreference === v ? 'border-accent' : 'border-gray-300'}`}>
                      {formData.voicePreference === v && <span className="w-2 h-2 rounded-full bg-accent" />}
                    </span>
                    {v}
                  </button>
                ))}
              </div>
              {errors.voicePreference && <p className="text-xs text-red-500 mt-1">{errors.voicePreference}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-dark mb-1">Musical inspiration <span className="text-text-muted font-normal">(optional)</span></label>
              <textarea rows={3} value={formData.musicalInspiration} onChange={e => update('musicalInspiration', e.target.value)} className={textareaCls} placeholder="Share artists, genres, or styles you enjoy..." />
              <p className="text-xs text-text-muted mt-1">You can share artists, genres, or styles you enjoy. We won&apos;t copy melodies or lyrics — this simply helps us understand the sound you love.</p>
            </div>
          </div>
        )}

        {/* Step 4: What makes them unforgettable */}
        {step === 4 && (
          <div className="space-y-6">
            <div className="text-center mb-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-dark" style={{ fontFamily: 'var(--font-serif)' }}>
                What makes them unforgettable to you?
              </h2>
              <p className="text-text-muted mt-2">Help us capture what makes this person so special in your heart</p>
            </div>

            {formData.recipientName && (
              <div className="bg-pink-50 rounded-full py-2 px-5 text-center text-sm text-accent font-medium">
                Let&apos;s capture what makes {formData.recipientName} so special to you.
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-text-dark mb-1">What qualities do you love most about them? <span className="text-accent">*</span></label>
              <textarea rows={4} value={formData.qualities} onChange={e => update('qualities', e.target.value)} className={`${textareaCls} ${errors.qualities ? 'border-red-400 focus:ring-red-300' : ''}`} />
              {errors.qualities && <p className="text-xs text-red-500 mt-1">{errors.qualities}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-dark mb-1">Is there a moment or journey that shaped your bond? <span className="text-accent">*</span></label>
              <textarea rows={4} value={formData.moment} onChange={e => update('moment', e.target.value)} className={`${textareaCls} ${errors.moment ? 'border-red-400 focus:ring-red-300' : ''}`} />
              {errors.moment && <p className="text-xs text-red-500 mt-1">{errors.moment}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-dark mb-3">Would you like faith reflected in a specific way? <span className="text-text-muted font-normal">(optional)</span></label>
              <div className="space-y-2">
                {faithOptions.map(f => (
                  <button key={f.value} type="button" onClick={() => update('faith', formData.faith === f.value ? '' : f.value)} className={`w-full text-left px-4 py-3 rounded-xl border transition-all flex items-center justify-between ${formData.faith === f.value ? 'border-accent bg-accent/10' : 'border-gray-200 bg-white hover:border-accent/30'}`}>
                    <div>
                      <span className={`text-sm font-semibold ${formData.faith === f.value ? 'text-accent' : 'text-text-dark'}`}>{f.value}</span>
                      <p className="text-xs text-text-muted">{f.desc}</p>
                    </div>
                    <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${formData.faith === f.value ? 'border-accent' : 'border-gray-300'}`}>
                      {formData.faith === f.value && <span className="w-2.5 h-2.5 rounded-full bg-accent" />}
                    </span>
                  </button>
                ))}
              </div>
              <p className="text-xs text-text-muted mt-2">You can skip this if faith isn&apos;t relevant to your song.</p>
            </div>
          </div>
        )}

        {/* Step 5: Heart's message */}
        {step === 5 && (
          <div className="space-y-6">
            <div className="text-center mb-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-dark" style={{ fontFamily: 'var(--font-serif)' }}>
                If this song could say one thing for you...
              </h2>
              <p className="text-text-muted mt-2">If they could only hear one message from your heart, what would you want them to know?</p>
            </div>

            {formData.recipientName && (
              <div className="bg-pink-50 rounded-full py-2 px-5 text-center text-sm text-accent font-medium">
                This is where your heart speaks directly to {formData.recipientName}.
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-text-dark mb-1">Your heart&apos;s message <span className="text-accent">*</span></label>
              <textarea rows={5} value={formData.heartsMessage} onChange={e => update('heartsMessage', e.target.value)} className={`${textareaCls} ${errors.heartsMessage ? 'border-red-400 focus:ring-red-300' : ''}`} />
              {errors.heartsMessage && <p className="text-xs text-red-500 mt-1">{errors.heartsMessage}</p>}
              <p className="text-xs text-text-muted mt-1">This is the heart of your song. Take your time and speak from the soul.</p>
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={formData.rephraseOk} onChange={e => update('rephraseOk', e.target.checked)} className="mt-1 w-4 h-4 accent-accent" />
              <div>
                <span className="text-sm font-semibold text-text-dark">It&apos;s okay to rephrase this beautifully</span>
                <p className="text-xs text-text-muted mt-0.5">We can enhance the flow and poetry while keeping your authentic message intact.</p>
              </div>
            </label>
          </div>
        )}

        {/* Step 6: Delivery details */}
        {step === 6 && (
          <div className="space-y-6">
            <div className="text-center mb-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-dark" style={{ fontFamily: 'var(--font-serif)' }}>
                How can we deliver your song?
              </h2>
              <p className="text-text-muted mt-2">We need your contact details to send you the finished song and keep you updated on progress.</p>
            </div>

            {formData.recipientName && (
              <div className="bg-pink-50 rounded-full py-2 px-5 text-center text-sm text-accent font-medium">
                Almost ready to create {formData.recipientName}&apos;s special song — just need your details.
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-text-dark mb-1">Full Name <span className="text-accent">*</span></label>
              <input type="text" value={formData.fullName} onChange={e => update('fullName', e.target.value)} className={`${inputCls} ${errors.fullName ? 'border-red-400 focus:ring-red-300' : ''}`} />
              {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-dark mb-1">Email Address <span className="text-accent">*</span></label>
              <input type="email" value={formData.email} onChange={e => update('email', e.target.value)} className={`${inputCls} ${errors.email ? 'border-red-400 focus:ring-red-300' : ''}`} />
              {errors.email ? <p className="text-xs text-red-500 mt-1">{errors.email}</p> : <p className="text-xs text-text-muted mt-1">We&apos;ll send your custom song and order updates to this email.</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-dark mb-1">Phone Number <span className="text-accent">*</span></label>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-3 py-3 bg-gray-50 rounded-xl border border-gray-200 text-sm">🇺🇸</span>
                <input type="tel" value={formData.phone} onChange={e => update('phone', e.target.value)} className={`${inputCls} ${errors.phone ? 'border-red-400 focus:ring-red-300' : ''}`} placeholder="+1 (222) 222-2222" />
              </div>
              {errors.phone ? <p className="text-xs text-red-500 mt-1">{errors.phone}</p> : <p className="text-xs text-text-muted mt-1">For important updates about your order (we won&apos;t spam you).</p>}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          {step > 1 ? (
            <button onClick={prev} className="inline-flex items-center gap-2 px-6 py-3 text-accent font-semibold rounded-full border-2 border-accent hover:bg-accent/5 transition-colors text-sm">
              Back
            </button>
          ) : (
            <div />
          )}

          {step < totalSteps ? (
            <button onClick={next} className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover transition-colors text-sm shadow-md shadow-accent/20">
              Next
            </button>
          ) : (
            <button onClick={handleSubmit} className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover transition-colors text-sm shadow-md shadow-accent/20">
              Continue to Checkout
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
