# ScientistGraph

ScientistGraph is a production-ready science publication platform built with Next.js,
Tailwind CSS, and Framer Motion.

Tagline: **Visualizing Science, Simplifying Knowledge**

## Stack

- Next.js (App Router, TypeScript)
- Tailwind CSS v4
- Framer Motion
- JSON-based content system
- Next.js API routes

## Features

- Editorial-style responsive home page
- Articles listing with search, category filters, and pagination
- Dynamic single-article pages with markdown-rendered rich text
- About and Contact pages
- Reusable global navbar and footer
- Dark/light mode toggle via theme provider
- SEO metadata and JSON-LD structured data
- Image optimization with `next/image`

## Folder Structure

```text
src/
  app/
    about/
    articles/
      [slug]/
    contact/
    api/
      articles/
      contact/
  components/
    articles/
    forms/
    layout/
    ui/
  content/
    articles.json
  lib/
    articles.ts
    seo.ts
  types/
    article.ts
public/
  images/
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open:

```text
http://localhost:3000
```

## Production Build

```bash
npm run build
npm run start
```

## Content Editing

Article content is managed in `src/content/articles.json`.

Each article includes:

- `title`
- `author`
- `publishDate`
- `category`
- `readTime`
- `featuredImage`
- `content` (markdown)

## API Endpoints

- `GET /api/articles`
- `GET /api/articles/[slug]`
- `POST /api/contact`
