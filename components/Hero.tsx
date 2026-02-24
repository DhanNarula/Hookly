"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-gray-950 pt-28 pb-20 sm:pt-32 sm:pb-28"
    >
      <video
        className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src="/media/hookly-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-950/70 via-gray-950/90 to-gray-950" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_55%)]" />

      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-20 lg:px-8">
        <div className="max-w-xl space-y-8 lg:flex-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Live for creators who care about conversion
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            AI-native hook engine
            <br />
            for modern creators.
          </h1>
          <p className="text-lg text-gray-300">
            Hookly analyzes thousands of viral campaigns to help you discover,
            test, and ship marketing hooks that actually convert—before you hit
            publish.
          </p>
          <form
            className="flex flex-col gap-3 sm:flex-row sm:max-w-md"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your work email"
              className="flex-1 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-400 shadow-sm outline-none backdrop-blur focus:border-primary-300 focus:ring-1 focus:ring-primary-300"
            />
            <button
              type="submit"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-gray-950 shadow-sm transition hover:bg-gray-100"
            >
              Get started free
            </button>
          </form>
          <div className="flex flex-col gap-3 text-sm text-gray-400 sm:flex-row sm:items-center sm:gap-4">
            <span>No credit card required · 14-day trial</span>
            <button
              type="button"
              className="inline-flex items-center gap-1 text-sm font-medium text-gray-200 hover:text-white"
            >
              Book a live walkthrough
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <div className="relative w-full max-w-xl lg:flex-1">
          <div className="animate-slide-up opacity-0 [animation-delay:0.15s] [animation-fill-mode:forwards]">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.8)] backdrop-blur">
              <div className="flex items-center gap-2 pb-4">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="h-9 flex-1 rounded-lg bg-white/5" />
                  <div className="h-9 w-28 rounded-lg bg-primary-500/90" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-20 rounded-xl bg-gradient-to-br from-white/5 to-white/0"
                    />
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-3/4 rounded bg-white/10" />
                  <div className="h-3 w-1/2 rounded bg-white/5" />
                </div>
                <div className="flex gap-2">
                  <div className="h-24 flex-1 rounded-xl bg-gradient-to-br from-primary-400/60 via-primary-300/40 to-primary-100/20" />
                  <div className="h-24 flex-1 rounded-xl bg-gradient-to-br from-accent-500/40 via-accent-400/30 to-accent-200/20" />
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.25rem] bg-gradient-to-tr from-primary-500/40 via-accent-500/30 to-emerald-400/30 opacity-60 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
