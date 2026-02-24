const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Changelog", "API"],
  Resources: ["Blog", "Templates", "Guides", "Help Center", "Community"],
  Company: ["About", "Careers", "Contact", "Partners", "Press"],
  Legal: ["Privacy", "Terms", "Cookies", "Licenses"],
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div id="resources" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <span className="text-xl font-bold text-gray-900">Hookly</span>
            <p className="mt-4 text-sm text-gray-600">
              The platform for creators who want to discover and sell viral
              marketing hooks.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-gray-900">{category}</h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Hookly. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
