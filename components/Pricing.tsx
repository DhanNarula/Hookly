const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "Get started with core features",
    features: ["Browse 100 hooks", "Save up to 20 hooks", "Basic analytics", "Community access"],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For serious creators",
    features: [
      "Unlimited hook access",
      "Unlimited saves",
      "Advanced analytics",
      "A/B testing",
      "Sell your hooks",
      "Priority support",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For teams and agencies",
    features: [
      "Everything in Pro",
      "Team workspaces",
      "API access",
      "Custom integrations",
      "Dedicated success manager",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-gray-50 py-20 sm:py-28 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Start free. Upgrade when you&apos;re ready. No hidden fees.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-primary-400 bg-primary-50 shadow-lg ring-2 ring-primary-500/40"
                  : "border-gray-200 bg-white shadow-sm hover:border-gray-300 dark:border-white/10 dark:bg-gray-900/70 dark:hover:border-white/30"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary-500 px-3 py-1 text-xs font-medium text-white">
                  Most popular
                </div>
              )}
              <h3
                className={`text-xl font-semibold ${
                  plan.highlighted
                    ? "text-gray-900"
                    : "text-gray-900 dark:text-white"
                }`}
              >
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span
                  className={`text-4xl font-bold ${
                    plan.highlighted
                      ? "text-gray-900"
                      : "text-gray-900 dark:text-white"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`${
                    plan.highlighted
                      ? "text-gray-700"
                      : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {plan.period}
                </span>
              </div>
              <p
                className={`mt-2 ${
                  plan.highlighted
                    ? "text-gray-700"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                {plan.description}
              </p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-center gap-2 ${
                      plan.highlighted
                        ? "text-gray-800"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-primary-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={`mt-8 w-full rounded-xl py-3 font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-white text-gray-950 hover:bg-gray-100"
                    : "border border-white/30 text-white hover:border-white hover:bg-white/5"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
