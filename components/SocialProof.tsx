const companies = [
  "Creators Co.",
  "Viral Labs",
  "Hook Studio",
  "Attention Inc.",
  "Convertify",
  "Engage Pro",
];

export default function SocialProof() {
  return (
    <section className="border-y border-gray-200/60 bg-gray-50 py-12 dark:border-white/5 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
          Trusted by creators at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
          {companies.map((company) => (
            <div
              key={company}
              className="text-lg font-semibold text-gray-500 hover:text-gray-900 transition-colors cursor-default dark:hover:text-gray-200"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
