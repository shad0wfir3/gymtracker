# GymTracker Website

Marketing website for GymTracker — the intelligent workout tracker for serious lifters.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
```

## Deployment

Deployed to Vercel: [https://gymtracker.co.za](https://gymtracker.co.za)

## Project Structure

```
app/
├── (pages)/
│   ├── features/     # Features page
│   ├── pricing/      # Pricing page
│   └── contact/      # Contact page
├── globals.css       # Global styles + design tokens
├── layout.tsx        # Root layout
└── page.tsx          # Home page

components/
├── layout/           # Navigation, Footer
├── sections/         # Page sections
└── ui/               # Reusable UI components

docs/
├── design-system.md  # Design system documentation
├── project-spec.md   # Project specification
└── content-map.md    # Content requirements
```

## Design System

- **Background**: `#0a0a0f` (dark)
- **Primary Accent**: `#ec4899` (pink)
- **Secondary Accent**: `#22c55e` (green)
- **Font**: Plus Jakarta Sans

## Waitlist Integration

The waitlist form is ready for Firebase integration. Look for `// TODO: Connect to Firebase` in `components/ui/waitlist-form.tsx`.

---

Built with 💪 by Omnexis
