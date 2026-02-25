"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { href: "#product", label: "Product" },
  { href: "#pricing", label: "Pricing" },
  { href: "#resources", label: "Resources" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4 sm:px-6 lg:px-8">
      <nav className="relative mx-auto max-w-4xl">
        <div className="flex items-center justify-between rounded-2xl border border-gray-200/60 bg-white/80 px-4 py-3 shadow-lg shadow-gray-200/50 backdrop-blur-xl dark:border-white/10 dark:bg-gray-950/80 dark:shadow-black/20 sm:px-5">
          <Link
            href="/"
            className="text-xl font-bold text-gray-900 hover:text-primary-500 transition-colors dark:text-white dark:hover:text-primary-300"
          >
            Hookly
          </Link>

          <div className="hidden md:flex md:items-center md:gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-100 hover:text-gray-900 hover:ring-1 hover:ring-gray-300 dark:text-gray-200 dark:hover:bg-white/10 dark:hover:text-white dark:hover:ring-white/20"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex md:items-center md:gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-300/70 bg-white/80 text-gray-800 shadow-sm transition hover:border-primary-400 hover:text-primary-600 dark:border-white/10 dark:bg-gray-900/80 dark:text-gray-100 dark:hover:border-primary-400 dark:hover:text-primary-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <span className="text-xs">☀️</span>
              ) : (
                <span className="text-xs">🌙</span>
              )}
            </button>
            <Link
              href="#login"
              className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-100 hover:text-gray-900 hover:ring-1 hover:ring-gray-300 dark:text-gray-200 dark:hover:bg-white/10 dark:hover:text-white dark:hover:ring-white/20"
            >
              Login
            </Link>
            <Link
              href="#hero"
              className="rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black transition-colors dark:bg-white dark:text-gray-950 dark:hover:bg-gray-100"
            >
              Start Free
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden rounded-lg p-2 text-gray-800 hover:bg-gray-100 transition-colors dark:text-gray-100 dark:hover:bg-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="absolute left-4 right-4 top-full mt-2 rounded-2xl border border-gray-200/60 bg-white/95 py-4 shadow-xl backdrop-blur-xl animate-fade-in dark:border-white/10 dark:bg-gray-950/95 md:hidden">
            <div className="flex flex-col gap-1 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-100 hover:text-gray-900 hover:ring-1 hover:ring-gray-300 dark:text-gray-200 dark:hover:bg-white/10 dark:hover:text-white dark:hover:ring-white/20"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#login"
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-100 hover:text-gray-900 hover:ring-1 hover:ring-gray-300 dark:text-gray-200 dark:hover:bg-white/10 dark:hover:text-white dark:hover:ring-white/20"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
              <button
                type="button"
                onClick={() => {
                  toggleTheme();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium text-gray-700 transition-all hover:bg-gray-100 hover:ring-1 hover:ring-gray-300 dark:text-gray-200 dark:hover:bg-white/10 dark:hover:ring-white/20"
              >
                {theme === "dark" ? "☀️ Light mode" : "🌙 Dark mode"}
              </button>
              <Link
                href="#hero"
                className="mt-2 rounded-full bg-gray-900 px-4 py-2.5 text-sm font-medium text-white text-center hover:bg-black transition-colors dark:bg-white dark:text-gray-950 dark:hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start Free
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
