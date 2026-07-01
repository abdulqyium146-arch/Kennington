# Lockstar Locksmith Kennington — Website

Production-ready Next.js 15 website for Lockstar Locksmith Kennington.

**Domain:** lockstarlocksmithkennington.com  
**Stack:** Next.js 15 · TypeScript · Tailwind CSS · Lucide Icons · Framer Motion

---

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Before Going Live — Action Required

### 1. Update Phone Number
Edit `lib/constants.ts` and replace the placeholder phone number:
```ts
phone: "07984 547185",       // ← Replace with real number
phoneHref: "tel:+447984547185", // ← Replace with real number (no spaces)
```

### 2. Update Email Address
In `lib/constants.ts`:
```ts
email: "info@lockstarlocksmithkennington.com", // ← Confirm this is correct
```

### 3. Add OG Image
Add a `1200×630px` image at `public/og-image.jpg` for social sharing previews.

### 4. Add Favicon
Add these to the `public/` folder:
- `favicon.ico`
- `icon.png` (512×512)
- `apple-icon.png` (180×180)

### 5. Google Verification
In `app/layout.tsx`, replace `"your-google-verification-code"` with the real code from Google Search Console.

### 6. Google Analytics (optional)
Add your GA4 measurement ID. Install `@next/third-parties` and add:
```tsx
import { GoogleAnalytics } from '@next/third-parties/google'
// In layout.tsx body: <GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

### 7. Update Geo Coordinates
In `lib/constants.ts`, confirm the lat/lng for the business address.

---

## Deployment — Vercel (Recommended)

1. Push to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel detects Next.js automatically — click Deploy
4. Add your custom domain in Vercel dashboard → Settings → Domains

### Deployment — Netlify

```bash
npm run build
# Deploy the `.next` folder via Netlify
```

### Deployment — Self-Hosted (VPS)

```bash
npm run build
npm start
# Point Nginx/Apache reverse proxy to port 3000
```

---

## Project Structure

```
locksmith-kennington/
├── app/
│   ├── layout.tsx           # Root layout (Header, Footer, Schema)
│   ├── page.tsx             # Homepage
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── services/
│   │   ├── page.tsx         # Services index
│   │   ├── emergency-locksmith/page.tsx
│   │   ├── residential-locksmith/page.tsx
│   │   ├── commercial-locksmith/page.tsx
│   │   ├── auto-locksmith/page.tsx
│   │   ├── lock-replacement/page.tsx
│   │   ├── lock-repair/page.tsx
│   │   ├── lock-installation/page.tsx
│   │   ├── upvc-door-repairs/page.tsx
│   │   ├── lockout-services/page.tsx
│   │   ├── burglary-repairs/page.tsx
│   │   ├── smart-locks/page.tsx
│   │   └── security-upgrades/page.tsx
│   └── locations/
│       ├── page.tsx         # Locations index
│       ├── kennington/page.tsx
│       ├── kennington-se11/page.tsx
│       ├── kennington-road/page.tsx
│       ├── kensington/page.tsx
│       └── abingdon-oxfordshire/page.tsx
├── components/
│   ├── home/                # Homepage section components
│   ├── layout/              # Header, Footer, EmergencyBar
│   └── ui/                  # Shared UI components
├── lib/
│   ├── constants.ts         # Business info, content, reviews, FAQs
│   ├── schema.ts            # JSON-LD schema generators
│   └── utils.ts             # Utility functions
└── public/                  # Static assets (add favicon, OG image)
```

---

## SEO Features Implemented

- ✅ LocalBusiness + Locksmith schema (JSON-LD)
- ✅ FAQPage schema
- ✅ Service schema per service page
- ✅ BreadcrumbList schema
- ✅ Review schema
- ✅ Dynamic metadata API (title, description, OG, Twitter)
- ✅ Canonical URLs on every page
- ✅ sitemap.xml (auto-generated)
- ✅ robots.txt
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Semantic HTML structure
- ✅ WCAG accessibility (skip link, ARIA labels, semantic HTML)

---

## Conversion Features Implemented

- ✅ Sticky mobile call button (appears after 2s)
- ✅ Floating desktop CTA button
- ✅ Emergency alert bar (top of every page)
- ✅ Click-to-call on every phone number
- ✅ Multiple CTAs per page
- ✅ Trust signals throughout
- ✅ Review showcase with schema
- ✅ FAQ section with accordion
- ✅ Process section
- ✅ Service area coverage section
- ✅ Emergency urgency indicators
