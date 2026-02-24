export default function Demo() {
  return (
    <section className="bg-gray-50/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Your hook library, organized
            </h2>
            <p className="text-lg text-gray-600">
              Save, categorize, and analyze every hook you discover. Our smart
              dashboard surfaces what&apos;s working so you can iterate faster
              and scale what converts.
            </p>
            <ul className="space-y-3">
              {[
                "Save hooks from any platform with one click",
                "Tag and organize by niche, format, and goal",
                "Track performance metrics over time",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="h-10 flex-1 rounded-lg bg-gray-100" />
                  <div className="h-10 w-24 rounded-lg bg-primary-100" />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-16 rounded-lg bg-gray-50 border border-gray-100"
                    />
                  ))}
                </div>
                <div className="space-y-2">
                  {[70, 90, 60, 85].map((w, i) => (
                    <div
                      key={i}
                      className="h-4 rounded bg-gray-100"
                      style={{ width: `${w}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
