export default function CTABanner() {
  return (
    <section className="bg-white py-16 sm:py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 px-6 py-12 sm:px-8 sm:py-14">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Ready to turn your ideas into viral hooks?
          </h2>
          <p className="mt-3 text-base text-white/90 max-w-md mx-auto">
            Join thousands of creators who are already growing with Hookly. Start
            free, no credit card required.
          </p>
          <a
            href="#hero"
            className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-sm text-gray-900 shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl"
          >
            Start Free
          </a>
        </div>
      </div>
    </section>
  );
}
