export default function BusinessConnectMobileFormPreview() {
  const chipClass =
    "px-3 py-2 rounded-full text-sm font-medium bg-white/65 backdrop-blur-md border border-white/60 shadow-[0_6px_24px_rgba(255,255,255,0.45)] text-slate-700 cursor-pointer select-none transition hover:bg-white/80 active:scale-[0.97]";

  const inputClass =
    "w-full rounded-2xl border border-white/70 bg-white/70 backdrop-blur-md px-4 py-3 text-[15px] text-slate-800 placeholder:text-slate-400 shadow-[0_10px_30px_rgba(255,255,255,0.35)] outline-none focus:ring-2 focus:ring-amber-200";

  const sectionCard =
    "rounded-[28px] border border-white/70 bg-white/55 backdrop-blur-xl p-5 shadow-[0_20px_60px_rgba(244,200,120,0.18)]";

  const needsOptions = [
    "Sales",
    "Marketing",
    "Leadership",
    "Finances",
    "Operations",
    "Systems & Scaling",
    "Faith & Purpose",
    "Other",
  ];

  const growthOptions = [
    "Sales",
    "Marketing",
    "Leadership",
    "Finances",
    "Operations",
    "Faith & Purpose",
  ];

  return (
    <div className="min-h-screen w-full bg-[radial-gradient(circle_at_top,_rgba(255,237,213,0.95),_rgba(255,255,255,1)_42%,_rgba(254,249,240,1)_100%)] text-slate-800">
      <div className="mx-auto flex min-h-screen max-w-md items-start justify-center px-4 py-6">
        <div className="relative w-full overflow-hidden rounded-[34px] border border-white/70 bg-white/40 p-4 shadow-[0_30px_80px_rgba(247,198,123,0.2)] backdrop-blur-2xl">

          {/* Decorative blobs */}
          <div className="pointer-events-none absolute -left-10 top-10 h-28 w-28 rounded-full bg-amber-200/50 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute right-0 top-0 h-36 w-36 rounded-full bg-rose-100/60 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute bottom-20 left-10 h-24 w-24 rounded-full bg-yellow-100/60 blur-3xl" aria-hidden="true" />

          <div className="relative space-y-4">

            {/* Header card */}
            <div className="rounded-[30px] border border-white/70 bg-white/60 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_14px_40px_rgba(255,210,140,0.18)] backdrop-blur-xl">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700/80">
                    Business Connect
                  </p>
                  <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
                    Join the community
                  </h1>
                </div>
                <div className="rounded-full border border-white/70 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
                  Step 1 of 4
                </div>
              </div>

              {/* Progress bar */}
              <div className="mb-4 h-2 w-full overflow-hidden rounded-full bg-white/70" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} aria-label="Step 1 of 4">
                <div className="h-full w-1/4 rounded-full bg-gradient-to-r from-amber-300 via-orange-200 to-rose-200" />
              </div>

              {/* Group info */}
              <div className="rounded-[24px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,247,237,0.65))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]">
                <div className="flex items-start gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/80 text-xl shadow-md" aria-hidden="true">
                    ✨
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900">
                      Building Biblical Businesses
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      A faith-centred space for Christian business owners to connect,
                      grow, and support one another.
                    </p>
                  </div>
                </div>

                <ul className="mt-4 grid gap-2 text-sm text-slate-600">
                  <li className="rounded-2xl bg-white/70 px-3 py-2">Fortnightly on Monday · 7:30pm</li>
                  <li className="rounded-2xl bg-white/70 px-3 py-2">Caribbean Dutch Pot, 7 Abington Square, Northampton NN1 4AE</li>
                  <li className="rounded-2xl bg-white/70 px-3 py-2">Leader: Yvett · Sign up open</li>
                </ul>
              </div>
            </div>

            {/* Section: You & Your Business */}
            <div className={sectionCard}>
              <div className="mb-4">
                <p className="text-sm font-medium text-amber-700">👤 You &amp; Your Business</p>
                <h3 className="mt-1 text-xl font-semibold tracking-tight text-slate-900">
                  Who are you &amp; what do you do?
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Just enough to make your introductions meaningful.
                </p>
              </div>

              <div className="space-y-3">
                <input
                  className={inputClass}
                  type="text"
                  placeholder="Full name"
                  autoComplete="name"
                />
                <input
                  className={inputClass}
                  type="email"
                  placeholder="Email address"
                  autoComplete="email"
                />
                <input
                  className={inputClass}
                  type="tel"
                  placeholder="Phone number"
                  autoComplete="tel"
                />
                <input
                  className={inputClass}
                  type="text"
                  placeholder="Business name"
                  autoComplete="organization"
                />

                <div className="grid grid-cols-2 gap-3">
                  <input
                    className={inputClass}
                    type="text"
                    placeholder="Industry"
                  />
                  <select className={inputClass} defaultValue="">
                    <option value="" disabled>Stage</option>
                    <option value="idea">Idea</option>
                    <option value="startup">Startup</option>
                    <option value="growing">Growing</option>
                    <option value="established">Established</option>
                  </select>
                </div>

                <textarea
                  className={`${inputClass} min-h-[110px] resize-none`}
                  placeholder="What does your business do? (keep it brief)"
                />
              </div>
            </div>

            {/* Section: Needs & Goals */}
            <div className={sectionCard}>
              <div className="mb-4">
                <p className="text-sm font-medium text-amber-700">🎯 Needs &amp; Goals</p>
                <h3 className="mt-1 text-xl font-semibold tracking-tight text-slate-900">
                  Where do you need the most support?
                </h3>
              </div>

              <div className="flex flex-wrap gap-2" role="group" aria-label="Select your needs">
                {needsOptions.map((item) => (
                  <button key={item} type="button" className={chipClass}>
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Section: Business Growth & Direction */}
            <div className={sectionCard}>
              <div className="mb-4">
                <p className="text-sm font-medium text-amber-700">🚀 Business Growth &amp; Direction</p>
                <h3 className="mt-1 text-xl font-semibold tracking-tight text-slate-900">
                  Where are you heading?
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  So we can connect you with the right people.
                </p>
              </div>

              <div className="space-y-3">
                <textarea
                  className={`${inputClass} min-h-[90px] resize-none`}
                  placeholder="My main business goal for the next 6–12 months…"
                />

                <select className={inputClass} defaultValue="">
                  <option value="" disabled>Current focus stage</option>
                  <option value="building">Building foundations</option>
                  <option value="growing">Growing revenue</option>
                  <option value="scaling">Scaling systems</option>
                  <option value="expanding">Expanding reach</option>
                  <option value="pivoting">Transitioning / pivoting</option>
                </select>

                <div className="flex flex-wrap gap-2" role="group" aria-label="Select growth focus areas">
                  {growthOptions.map((item) => (
                    <button key={item} type="button" className={chipClass}>
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky CTA */}
            <div className="sticky bottom-0 z-10 pt-2">
              <div className="rounded-[28px] border border-white/70 bg-white/70 p-3 shadow-[0_-10px_30px_rgba(255,230,200,0.35)] backdrop-blur-xl">
                <button
                  type="button"
                  className="w-full rounded-[22px] bg-[linear-gradient(180deg,rgba(251,191,36,0.95),rgba(249,115,22,0.9))] px-5 py-4 text-base font-semibold text-white shadow-[0_18px_35px_rgba(249,115,22,0.28)] transition hover:scale-[0.99] active:scale-[0.98]"
                >
                  Continue — Step 2 of 4
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
