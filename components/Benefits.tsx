const benefits = [
  {
    title: "Save hours of research",
    description:
      "Stop scrolling aimlessly. Hookly surfaces the highest-performing hooks in your niche so you can focus on creating, not hunting.",
    gradient: "from-primary-100 to-primary-50",
    reverse: false,
  },
  {
    title: "Backed by real data",
    description:
      "Every hook in our library comes with engagement metrics. Know what works before you post—no guesswork, just results.",
    gradient: "from-accent-100 to-accent-50/50",
    reverse: true,
  },
  {
    title: "Grow your income",
    description:
      "List your best hooks for sale. Creators pay for what converts. Turn your expertise into a recurring revenue stream.",
    gradient: "from-emerald-100 to-emerald-50",
    reverse: false,
  },
];

export default function Benefits() {
  return (
    <section className="bg-gray-50 py-20 sm:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {benefits.map((benefit, i) => (
          <div
            key={benefit.title}
            className={`grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center ${
              i > 0 ? "mt-24" : ""
            } ${benefit.reverse ? "" : ""}`}
          >
            <div
              className={`${benefit.reverse ? "lg:order-2" : "order-2 lg:order-1"}`}
            >
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
                {benefit.title}
              </h3>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                {benefit.description}
              </p>
            </div>
            <div
              className={`order-1 rounded-2xl bg-gradient-to-br ${benefit.gradient} h-64 flex items-center justify-center ${
                benefit.reverse ? "lg:order-1" : "order-1 lg:order-2"
              }`}
            >
              <div className="flex gap-4 p-8">
                <div className="h-24 w-24 rounded-xl bg-white/80 dark:bg-gray-950/70" />
                <div className="h-24 w-24 rounded-xl bg-white/60 dark:bg-gray-950/40" />
                <div className="h-24 w-24 rounded-xl bg-white/80 dark:bg-gray-950/70" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
