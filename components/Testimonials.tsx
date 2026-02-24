const testimonials = [
  {
    quote:
      "Hookly cut my research time in half. I used to spend hours finding hooks that work. Now I launch in minutes.",
    name: "Alex Chen",
    role: "Content Creator",
    avatar: "AC",
  },
  {
    quote:
      "Finally a platform that understands creators. The data is real, the hooks convert, and I've 3x'd my engagement.",
    name: "Jordan Miller",
    role: "Marketing Lead",
    avatar: "JM",
  },
  {
    quote:
      "I've sold 40+ hooks in my first month. Hookly turned my knowledge into a side business I didn't know I had.",
    name: "Sam Rivera",
    role: "Course Creator",
    avatar: "SR",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Loved by creators everywhere
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            See why thousands of creators use Hookly to grow their reach and
            revenue.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-white/10 bg-gray-900/70 p-8 shadow-sm transition-all hover:border-primary-400/60 hover:shadow-lg hover:shadow-primary-500/20"
            >
              <p className="text-gray-300 italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-500/20 text-sm font-semibold text-primary-200">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-medium text-white">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
