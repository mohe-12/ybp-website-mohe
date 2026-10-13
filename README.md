# YBP Website

A modern marketing website for YBP - Bale Robe, built with Next.js and TypeScript. The project is structured as a single-page landing site with sections for the brand story, services, product highlights, and contact details.

## Overview

This repository contains a polished front-end experience designed for a business website, including:

- Hero section with branding and call-to-action
- About section
- Services overview
- Product showcase
- Contact section
- Footer and navigation

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Radix UI
- Lucide React

## Project Structure

```bash
.
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── about-section.tsx
│   ├── contact-section.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   ├── hero-section.tsx
│   ├── product-section.tsx
│   ├── services-section.tsx
│   ├── theme-provider.tsx
│   └── ui/
├── hooks/
├── lib/
├── public/
├── styles/
├── .gitignore
├── components.json
├── next.config.mjs
├── next-env.d.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser at:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev     # Start local development server
npm run build   # Create an optimized production build
npm run start   # Run the production build locally
npm run lint    # Run lint checks
```

## Notes

- The project uses the App Router pattern from Next.js.
- Styling is handled with Tailwind CSS and custom global styles.
- The site currently appears to be a front-end marketing/landing page without a backend or database layer.

## Contributing

Feel free to fork the project and submit improvements. For local development, follow the setup steps above and ensure the app builds successfully before creating a pull request.
