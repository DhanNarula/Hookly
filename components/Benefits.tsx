const benefits = [
  {
    title: "Save hours of research",
    description:
      "Stop scrolling aimlessly. Hookly surfaces the highest-performing hooks in your niche so you can focus on creating, not hunting.",
    gradient: "from-primary-100 to-primary-50",
    reverse: false,
    icon: (
      <svg
        className="h-10 w-10 text-primary-600 dark:text-primary-300"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6l3 3"
        />
        <circle cx="12" cy="12" r="8" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 4l2.5 2.5M20 4l-2.5 2.5"
        />
      </svg>
    ),
  },
  {
    title: "Backed by real data",
    description:
      "Every hook in our library comes with engagement metrics. Know what works before you post—no guesswork, just results.",
    gradient:
      "from-accent-500/30 via-accent-500/20 to-accent-500/10 dark:from-accent-500/45 dark:via-accent-500/30 dark:to-accent-500/20",
    reverse: true,
    icon: (
      <svg
        className="h-10 w-10 text-accent-600 dark:text-accent-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 19v-6m5 6V9m5 10V5m5 14V11"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 5h16"
        />
      </svg>
    ),
  },
  {
    title: "Grow your income",
    description:
      "List your best hooks for sale. Creators pay for what converts. Turn your expertise into a recurring revenue stream.",
    gradient: "from-emerald-100 to-emerald-50",
    reverse: false,
    icon: (
      <svg
        className="h-10 w-10 text-emerald-600 dark:text-emerald-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 15l4-4 3 3 5-7 4 5"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 20h16"
        />
      </svg>
    ),
  },
];

export default function Benefits() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {benefits.map((benefit, i) => (
          <div
            key={benefit.title}
            className={`grid gap-10 lg:grid-cols-2 lg:gap-12 lg:items-center ${
              i > 0 ? "mt-16" : ""
            } ${benefit.reverse ? "" : ""}`}
          >
            <div
              className={`${benefit.reverse ? "lg:order-2" : "order-2 lg:order-1"}`}
            >
              <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl dark:text-white">
                {benefit.title}
              </h3>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
                {benefit.description}
              </p>
            </div>
            <div
              className={`order-1 rounded-2xl bg-gradient-to-br ${benefit.gradient} h-52 flex items-center justify-center ${
                benefit.reverse ? "lg:order-1" : "order-1 lg:order-2"
              } ${
                benefit.title === "Backed by real data"
                  ? "ring-2 ring-accent-500/80 dark:ring-accent-400/90"
                  : ""
              }`}
            >
              <div
                className={`flex items-center gap-3 rounded-xl p-6 shadow-md ring-1 dark:bg-gray-950/95 ${
                  benefit.title === "Backed by real data"
                    ? "bg-white/95 ring-accent-100/80 dark:ring-accent-500/60"
                    : "bg-white/95 ring-black/5 dark:ring-white/10"
                }`}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gray-900 text-white dark:bg-white dark:text-gray-900">
                  {benefit.icon}
                </div>
                <div className="max-w-xs text-left text-sm text-gray-700 dark:text-gray-300">
                  {benefit.title === "Save hours of research" &&
                    "Visual timeline of curated hooks so you can skip the endless scroll."}
                  {benefit.title === "Backed by real data" &&
                    "Stacked bars highlight engagement patterns across your best-performing hooks."}
                  {benefit.title === "Grow your income" &&
                    "Growth curve shows your hook sales climbing month after month."}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
