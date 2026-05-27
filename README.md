# Signature Slam Academy — Hunter Valley

A pixel-faithful rebuild of the SSA Hunter Valley homepage in **Next.js 14 (App Router) + TypeScript + Tailwind CSS**.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build && npm run start   # production
```

> The build downloads the Poppins font via `next/font/google`, so the first build needs internet access.

## Structure

```
app/
  layout.tsx     Poppins font + page metadata
  page.tsx       composes all sections
  globals.css    Tailwind layers + brand utilities (.pill-btn, .heading-dot, .wave-bg)
components/
  Navbar  Hero  About  Quote  KeyFeatures  GlimpseExcellence
  Programs  Marquee  Launching  Professionals  Facilities
  CoachesEvents  Footer
tailwind.config.ts   brand colors + marquee/fadeUp animations
```

## Customising

- **Colors** live in `tailwind.config.ts` (`brand` = `#99B81B`, `teal.deep`, `teal.900`).
- **Images** are Unsplash placeholders. Each section keeps its URLs in a small array near the top of the component — swap them with your own assets (or move them to `/public` and use `next/image`).
- **Copy** (headings, stats, connectivity list, facility tags) sits in plain arrays inside each component.

Built with `lucide-react` for icons.
