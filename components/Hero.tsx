"use client";

import { Space_Grotesk } from "next/font/google";

const heroDisplay = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-gray-50 pt-28 pb-20 sm:pt-32 sm:pb-28 dark:bg-gray-950"
    >
      <video
        className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover brightness-75 contrast-110 saturate-125"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src="/media/hero.mp4" type="video/mp4" />
      </video>
      {/* Soft vignette so the background is visible but text stays readable */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/40 via-white/80 to-white dark:from-gray-950/10 dark:via-gray-950/60 dark:to-gray-950/95" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(148,163,184,0.35),_transparent_55%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(15,23,42,0.85),_transparent_55%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.16),_transparent_55%)]" />

      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-20 lg:px-8">
        <div className="max-w-xl space-y-8 lg:flex-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-900/10 bg-gray-900/5 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur animate-fade-in stagger-1 opacity-0 dark:border-white/10 dark:bg-white/5 dark:text-white/80">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Live for creators who care about conversion
          </div>
          <h1
            className={`${heroDisplay.className} text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl animate-slide-up stagger-2 opacity-0 dark:text-white`}
          >
            <span className="block text-sm font-medium uppercase tracking-[0.35em] text-emerald-600 dark:text-emerald-300">
              HOOKLY
            </span>
            <span className="mt-3 block bg-gradient-to-r from-emerald-600 via-sky-600 to-violet-600 bg-clip-text text-transparent dark:from-emerald-300 dark:via-sky-300 dark:to-violet-300">
              AI-native hook engine
            </span>
            <span className="mt-1 block text-[2.2rem] font-medium text-gray-800 sm:text-[2.6rem] dark:text-white/85">
              for creators who want to go viral.
            </span>
          </h1>
          <p className="text-lg text-gray-600 animate-slide-up stagger-3 opacity-0 dark:text-gray-300">
            Hookly analyzes thousands of viral campaigns to help you discover,
            test, and ship marketing hooks that actually convert—before you hit
            publish.
          </p>
          <form
            className="flex flex-col gap-3 sm:flex-row sm:max-w-md animate-slide-up stagger-4 opacity-0"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your work email"
              className="flex-1 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm outline-none backdrop-blur focus:border-primary-300 focus:ring-1 focus:ring-primary-300 dark:border-white/10 dark:bg-white/10 dark:text-white"
            />
            <button
              type="submit"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-gray-950 shadow-sm transition hover:bg-gray-100"
            >
              Get started free
            </button>
          </form>
          <div className="flex flex-col gap-3 text-sm text-gray-400 sm:flex-row sm:items-center sm:gap-4 animate-fade-in stagger-5 opacity-0">
            <span>No credit card required · 14-day trial</span>
            <button
              type="button"
              className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
            >
              Book a live walkthrough
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <div className="relative w-full max-w-xl lg:flex-1 animate-slide-up stagger-3 opacity-0">
          <div className="transition-transform duration-500 ease-out hover:-translate-y-1 hover:scale-[1.02]">
            <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-[0_18px_60px_rgba(15,23,42,0.2)] backdrop-blur dark:border-white/15 dark:bg-gray-950/60 dark:shadow-[0_18px_60px_rgba(15,23,42,0.9)]">
              <div className="flex items-center gap-2 pb-4">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="h-9 flex-1 rounded-lg bg-gray-100 dark:bg-white/5" />
                  <div className="h-9 w-28 rounded-lg bg-primary-500/90" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-20 rounded-xl bg-gradient-to-br from-gray-100 to-transparent dark:from-white/5 dark:to-white/0"
                    />
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-3/4 rounded bg-gray-200 dark:bg-white/10" />
                  <div className="h-3 w-1/2 rounded bg-gray-100 dark:bg-white/5" />
                </div>
                <div className="flex gap-2">
                  <div className="h-24 flex-1 rounded-xl bg-gradient-to-br from-primary-400/40 via-primary-300/30 to-primary-100/10 dark:from-primary-400/60 dark:via-primary-300/40 dark:to-primary-100/20" />
                  <div className="h-24 flex-1 rounded-xl bg-gradient-to-br from-accent-500/30 via-accent-400/25 to-accent-200/10 dark:from-accent-500/40 dark:via-accent-400/30 dark:to-accent-200/20" />
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.25rem] bg-gradient-to-tr from-primary-500/30 via-accent-500/20 to-emerald-400/20 opacity-40 blur-3xl animate-float-slow dark:from-primary-500/40 dark:via-accent-500/30 dark:to-emerald-400/30 dark:opacity-60" />
        </div>
      </div>
    </section>
  );
}
