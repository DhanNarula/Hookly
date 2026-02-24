# Hookly

A modern SaaS landing page inspired by industry-leading ecommerce UX patterns. Built with Next.js, TypeScript, and Tailwind CSS to practice scalable frontend architecture.

Hookly is a fictional platform that helps creators discover and sell viral marketing hooks.

## Tech Stack

- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS**
- Fully componentized structure

## Features

- Responsive, mobile-first design
- Large typography and smooth spacing
- Modern SaaS aesthetic with soft gradients
- Subtle animations (fade-in, hover effects)
- Smooth scroll behavior
- Reusable components
- No external UI libraries

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/components
  Navbar.tsx      - Navigation with logo, links, CTA
  Hero.tsx        - Hero section with headline, email input, mock dashboard
  SocialProof.tsx - Trusted by companies bar
  Features.tsx    - 3-column features grid
  Demo.tsx        - Product demo with split layout
  Benefits.tsx    - Alternating benefit rows
  Testimonials.tsx- Customer quote cards
  Pricing.tsx     - 3-tier pricing cards
  CTABanner.tsx   - Final call-to-action
  Footer.tsx      - Multi-column footer links

/app
  page.tsx        - Main landing page
  layout.tsx      - Root layout
  globals.css     - Global styles
```

## License

MIT
