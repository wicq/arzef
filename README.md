# Arzef

A minimalist portfolio website showcasing web application development services.

## What we do

- Document processing with AI chat systems
- Image processing and generation tools
- Business management platforms
- Payment systems and financial tools
- Data analytics dashboards
- Multi-tenant SaaS applications

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Internationalization**: next-intl (English/Turkish)
- **Font**: Raleway
- **Booking**: Cal.com integration

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
app/
├── [locale]/          # Internationalized routes
│   ├── layout.tsx     # Main layout with i18n
│   └── page.tsx       # Homepage
├── globals.css        # Global styles
└── favicon.ico

components/
├── ui/               # shadcn/ui components
├── header.tsx        # Navigation
├── footer.tsx        # Footer
└── cal-booking.tsx   # Calendar integration

messages/
├── en.json          # English translations
└── tr.json          # Turkish translations
```

## Features

- Responsive design
- Dark/light mode support
- Bilingual (English/Turkish)
- Integrated booking system
- Clean, minimal interface

## Deployment

The site runs on Next.js dynamic rendering with internationalization support.

---

Built with clean code, no bullshit.
