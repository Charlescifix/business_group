import { useState } from "react";

export default function BusinessConnectMobileFormPreview() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [selectedNeeds, setSelectedNeeds] = useState([]);
  const [selectedGrowth, setSelectedGrowth] = useState([]);

  const toggleNeed = (item) =>
    setSelectedNeeds((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );

  const toggleGrowth = (item) =>
    setSelectedGrowth((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );

  const inputClass =
    "w-full rounded-2xl border border-white/70 bg-white/70 backdrop-blur-md px-4 py-3 text-[16px] text-slate-800 placeholder:text-slate-400 shadow-[0_10px_30px_rgba(255,255,255,0.35)] outline-none focus:ring-2 focus:ring-amber-200";

  const needsOptions = [
    "Sales", "Marketing", "Leadership", "Finances",
    "Operations", "Systems & Scaling", "Faith & Purpose", "Other",
  ];

  const growthOptions = [
    "Sales", "Marketing", "Leadership", "Finances",
    "Operations", "Faith & Purpose",
  ];

  const totalSteps = 4;
  const progressWidth = ["w-1/4", "w-2/4", "w-3/4", "w-full"][step];

  const MultiChip = ({ item, selected, onToggle }) => (
    <button
      type="button"
      onClick={() => onToggle(item)}
      aria-pressed={selected}
      className={`px-3 py-2 rounded-full text-sm font-medium border transition active:scale-[0.97] select-none cursor-pointer ${
        selected
          ? "bg-amber-400 border-amber-400 text-white shadow-[0_6px_18px_rgba(251,191,36,0.45)]"
          : "bg-white/65 border-white/60 text-slate-700 backdrop-blur-md shadow-[0_6px_24px_rgba(255,255,255,0.45)] hover:bg-white/80"
      }`}
    >
      {selected && <span className="mr-1 text-xs">✓</span>}{item}
    </button>
  );

  const BackButton = () =>
    step > 0 ? (
      <button
        type="button"
        onClick={() => setStep((s) => s - 1)}
        className="flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-700 transition active:scale-95"
        aria-label="Go back"
      >
        <span className="text-base leading-none">←</span> Back
      </button>
    ) : <div />;

  const Header = () => (
    <div className="shrink-0 px-5 pt-5 pb-3">
      <div className="flex items-center justify-between mb-3">
        <BackButton />
        <div className="rounded-full border border-white/70 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
          Step {step + 1} of {totalSteps}
        </div>
      </div>
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-white/70"
        role="progressbar"
        aria-valuenow={(step + 1) * 25}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className={`h-full ${progressWidth} rounded-full bg-gradient-to-r from-amber-300 via-orange-200 to-rose-200 transition-all duration-500`} />
      </div>
    </div>
  );

  const CTA = ({ label, onPress }) => (
    <div className="shrink-0 px-4 pb-4 pt-2">
      <div className="rounded-[28px] border border-white/70 bg-white/70 p-3 shadow-[0_-10px_30px_rgba(255,230,200,0.35)] backdrop-blur-xl">
        <button
          type="button"
          onClick={onPress ?? (() => setStep((s) => Math.min(s + 1, totalSteps - 1)))}
          className="w-full rounded-[22px] bg-[linear-gradient(180deg,rgba(251,191,36,0.95),rgba(249,115,22,0.9))] px-5 py-4 text-base font-semibold text-white shadow-[0_18px_35px_rgba(249,115,22,0.28)] transition hover:scale-[0.99] active:scale-[0.98]"
        >
          {label}
        </button>
      </div>
    </div>
  );

  /* ── Success Screen ── */
  if (submitted) {
    return (
      <div className="h-[100dvh] w-full overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,237,213,0.95),_rgba(255,255,255,1)_42%,_rgba(254,249,240,1)_100%)] text-slate-800">
        <div className="mx-auto flex h-full max-w-md flex-col px-4 pb-[5vh] pt-[4vh]">
          <div className="relative flex flex-1 flex-col overflow-hidden rounded-[34px] border border-white/70 bg-white/40 shadow-[0_30px_80px_rgba(247,198,123,0.2)] backdrop-blur-2xl">
            <div className="pointer-events-none absolute -left-10 top-10 h-28 w-28 rounded-full bg-amber-200/50 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute right-0 top-0 h-36 w-36 rounded-full bg-rose-100/60 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute bottom-20 left-10 h-24 w-24 rounded-full bg-yellow-100/60 blur-3xl" aria-hidden="true" />

            <div className="relative flex flex-1 flex-col overflow-y-auto px-6 py-8 justify-between">
              {/* Top: icon + heading */}
              <div className="flex flex-col items-center text-center pt-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-orange-400 text-4xl shadow-[0_12px_30px_rgba(249,115,22,0.3)] mb-5">
                  🎉
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700/80 mb-1">
                  You're in!
                </p>
                <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
                  Welcome to the community
                </h1>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  You've taken a great step. We're glad you're here.
                </p>
              </div>

              {/* Middle: what happens next */}
              <div className="mt-6 rounded-[24px] border border-orange-100 bg-white p-5 shadow-sm space-y-3">
                <p className="text-sm font-semibold text-slate-800">What your information helps us do</p>
                <ul className="grid gap-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2 rounded-2xl bg-amber-50 px-3 py-2.5 text-amber-800">
                    <span className="mt-0.5">🤝</span>
                    <span>Match you with the right members, mentors, and resources in the group.</span>
                  </li>
                  <li className="flex items-start gap-2 rounded-2xl bg-slate-50 px-3 py-2.5 text-slate-700">
                    <span className="mt-0.5">🎯</span>
                    <span>Tailor sessions, conversations, and support around your business goals.</span>
                  </li>
                  <li className="flex items-start gap-2 rounded-2xl bg-emerald-50 px-3 py-2.5 text-emerald-800">
                    <span className="mt-0.5">🌱</span>
                    <span>Ensure every member gets the most relevant help, connections, and growth opportunities possible.</span>
                  </li>
                </ul>
              </div>

              {/* Bottom: data rights notice */}
              <p className="mt-5 text-center text-xs text-slate-400 leading-5 px-2">
                Your data is held with care and used only to support you within this community.{" "}
                <span className="text-slate-500 underline underline-offset-2 cursor-pointer hover:text-amber-700 transition">
                  You can ask how your data is being used at any time.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const pages = [
    /* ── Page 0: Group Info ── */
    <>
      <Header />
      <div className="flex-1 overflow-y-auto px-5 pb-2">
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700/80">Business Connect</p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">Join the community</h1>
        </div>
        <div className="rounded-[24px] border border-orange-100 bg-white p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/80 text-xl shadow-md" aria-hidden="true">✨</div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Building Biblical Businesses</h2>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                A faith-centred space for Christian business owners to connect, grow, and support one another.
              </p>
            </div>
          </div>
          <ul className="mt-4 grid gap-2 text-sm">
            <li className="flex items-center gap-2 rounded-2xl bg-amber-50 px-3 py-2.5 text-amber-800 font-medium">
              <span className="text-base">🗓</span>
              <span>Fortnightly on Monday · <strong>7:30pm</strong></span>
            </li>
            <li className="flex items-start gap-2 rounded-2xl bg-slate-50 px-3 py-2.5 text-slate-700">
              <span className="text-base mt-0.5">📍</span>
              <span>Caribbean Dutch Pot, 7 Abington Square, Northampton NN1 4AE</span>
            </li>
            <li className="flex items-center gap-2 rounded-2xl bg-emerald-50 px-3 py-2.5 text-emerald-800 font-medium">
              <span className="text-base">✅</span>
              <span>Leader: Yvett · <strong>Sign up open</strong></span>
            </li>
          </ul>
        </div>
      </div>
      <CTA label="Get Started — Step 1 of 4" />
    </>,

    /* ── Page 1: You & Your Business ── */
    <>
      <Header />
      <div className="flex-1 overflow-y-auto px-5 pb-2">
        <div className="mb-5">
          <p className="text-sm font-medium text-amber-700">👤 You &amp; Your Business</p>
          <h3 className="mt-1 text-xl font-semibold tracking-tight text-slate-900">Who are you &amp; what do you do?</h3>
          <p className="mt-1 text-sm leading-6 text-slate-600">Just enough to make your introductions meaningful.</p>
        </div>
        <div className="space-y-3">
          <input className={inputClass} type="text" placeholder="Full name" autoComplete="name" />
          <input className={inputClass} type="email" placeholder="Email address" autoComplete="email" />
          <input className={inputClass} type="tel" placeholder="Phone number" autoComplete="tel" />
          <input className={inputClass} type="text" placeholder="Business name" autoComplete="organization" />
          <div className="grid grid-cols-2 gap-3">
            <input className={inputClass} type="text" placeholder="Industry" />
            <select className={inputClass} defaultValue="">
              <option value="" disabled>Stage</option>
              <option value="idea">Idea</option>
              <option value="startup">Startup</option>
              <option value="growing">Growing</option>
              <option value="established">Established</option>
            </select>
          </div>
          <textarea className={`${inputClass} min-h-[100px] resize-none`} placeholder="What does your business do? (keep it brief)" />
        </div>
      </div>
      <CTA label="Continue — Step 2 of 4" />
    </>,

    /* ── Page 2: Needs & Goals ── */
    <>
      <Header />
      <div className="flex-1 overflow-y-auto px-5 pb-2">
        <div className="mb-5">
          <p className="text-sm font-medium text-amber-700">🎯 Needs &amp; Goals</p>
          <h3 className="mt-1 text-xl font-semibold tracking-tight text-slate-900">Where do you need the most support?</h3>
          <p className="mt-1 text-sm leading-6 text-slate-600">Select all that apply.</p>
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Select your needs">
          {needsOptions.map((item) => (
            <MultiChip key={item} item={item} selected={selectedNeeds.includes(item)} onToggle={toggleNeed} />
          ))}
        </div>
        {selectedNeeds.length > 0 && (
          <p className="mt-3 text-xs text-amber-700 font-medium">{selectedNeeds.length} selected</p>
        )}
      </div>
      <CTA label="Continue — Step 3 of 4" />
    </>,

    /* ── Page 3: Growth & Direction ── */
    <>
      <Header />
      <div className="flex-1 overflow-y-auto px-5 pb-2">
        <div className="mb-5">
          <p className="text-sm font-medium text-amber-700">🚀 Business Growth &amp; Direction</p>
          <h3 className="mt-1 text-xl font-semibold tracking-tight text-slate-900">Where are you heading?</h3>
          <p className="mt-1 text-sm text-slate-600">So we can connect you with the right people.</p>
        </div>
        <div className="space-y-4">
          <textarea className={`${inputClass} min-h-[90px] resize-none`} placeholder="My main business goal for the next 6–12 months…" />
          <select className={inputClass} defaultValue="">
            <option value="" disabled>Current focus stage</option>
            <option value="building">Building foundations</option>
            <option value="growing">Growing revenue</option>
            <option value="scaling">Scaling systems</option>
            <option value="expanding">Expanding reach</option>
            <option value="pivoting">Transitioning / pivoting</option>
          </select>
          <div>
            <p className="text-xs font-medium text-slate-500 mb-2">Select focus areas</p>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Select growth focus areas">
              {growthOptions.map((item) => (
                <MultiChip key={item} item={item} selected={selectedGrowth.includes(item)} onToggle={toggleGrowth} />
              ))}
            </div>
            {selectedGrowth.length > 0 && (
              <p className="mt-3 text-xs text-amber-700 font-medium">{selectedGrowth.length} selected</p>
            )}
          </div>
        </div>
      </div>
      <CTA label="Submit — Join the Group ✨" onPress={() => setSubmitted(true)} />
    </>,
  ];

  return (
    <div className="h-[100dvh] w-full overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,237,213,0.95),_rgba(255,255,255,1)_42%,_rgba(254,249,240,1)_100%)] text-slate-800">
      <div className="mx-auto flex h-full max-w-md flex-col px-4 pb-[5vh] pt-[4vh]">
        <div className="relative flex flex-1 flex-col overflow-hidden rounded-[34px] border border-white/70 bg-white/40 shadow-[0_30px_80px_rgba(247,198,123,0.2)] backdrop-blur-2xl">

          {/* Decorative blobs */}
          <div className="pointer-events-none absolute -left-10 top-10 h-28 w-28 rounded-full bg-amber-200/50 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute right-0 top-0 h-36 w-36 rounded-full bg-rose-100/60 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute bottom-20 left-10 h-24 w-24 rounded-full bg-yellow-100/60 blur-3xl" aria-hidden="true" />

          <div className="relative flex flex-1 flex-col overflow-hidden">
            {pages[step]}
          </div>
        </div>
      </div>
    </div>
  );
}
