"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50/30 pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl animate-slide-up opacity-0 [animation-fill-mode:forwards]">
              Turn your ideas into{" "}
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                viral hooks
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl animate-slide-up opacity-0 [animation-delay:0.1s] [animation-fill-mode:forwards]">
              Hookly helps creators discover, test, and sell marketing hooks that
              convert. Join thousands who are turning attention into revenue.
            </p>
            <form
              className="flex flex-col gap-3 sm:flex-row sm:max-w-md animate-slide-up opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-colors"
              />
              <button
                type="submit"
                className="rounded-xl bg-gray-900 px-6 py-3 font-medium text-white hover:bg-gray-800 transition-colors"
              >
                Start Free
              </button>
            </form>
          </div>

          <div className="relative animate-slide-up opacity-0 [animation-delay:0.3s] [animation-fill-mode:forwards]">
            <div className="rounded-2xl border border-gray-200/80 bg-white/80 p-6 shadow-xl shadow-gray-200/50 backdrop-blur">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-20 rounded-lg bg-gray-100"
                    />
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-3/4 rounded bg-gray-200" />
                  <div className="h-4 w-1/2 rounded bg-gray-100" />
                </div>
                <div className="flex gap-2">
                  <div className="h-24 flex-1 rounded-lg bg-gradient-to-br from-primary-100 to-primary-50" />
                  <div className="h-24 flex-1 rounded-lg bg-gradient-to-br from-accent-100/50 to-accent-50/30" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-primary-100/50 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
