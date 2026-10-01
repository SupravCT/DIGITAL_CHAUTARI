# Digital Chautari
https://digital-chautari-zeta.vercel.app/

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## What's built
- Home page: fully built per spec (hero, feature strip, who-we-are, stats banner,
  products teaser, sectors, process, testimonials, blog teaser, closing CTA).
- Services / Products / About / Contact: hero + core sections stubbed with the
  same components (Card, DarkBanner, StatBar, Button) so you can copy the pattern
  from Home to flesh out any remaining blocks (e.g. more service sub-grids).

## Structure
```
app/
  layout.js       -> fonts (Sora/Inter), Header/Footer wrapper
  globals.css      -> gradient text, hero glow, hover/shadow utilities
  page.js          -> Home
  services/page.js
  products/page.js
  about/page.js
  contact/page.js
components/
  Header.js, Footer.js, Button.js, Card.js, StatBar.js, DarkBanner.js
tailwind.config.js -> all brand colors, radii, shadow, font vars from the spec
```

## Deploy free
Push to GitHub, then import the repo on vercel.com (free tier) — zero config needed
for Next.js. Or `npm run build && npm run start` to run it yourself.
