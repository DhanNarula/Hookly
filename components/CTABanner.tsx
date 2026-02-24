export default function CTABanner() {
  return (
    <section className="bg-white py-20 sm:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl bg-gradient-to-br from-primary-500 to-accent-500 px-8 py-16 sm:px-12 sm:py-20">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to turn your ideas into viral hooks?
          </h2>
          <p className="mt-4 text-lg text-white/90 max-w-xl mx-auto">
            Join thousands of creators who are already growing with Hookly. Start
            free, no credit card required.
          </p>
          <a
            href="#hero"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-gray-900 shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl"
          >
            Start Free
          </a>
        </div>
      </div>
    </section>
  );
}
