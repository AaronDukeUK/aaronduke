# Aaron Duke portfolio

Personal portfolio site built with Astro.

## Commands

| Command | Action |
| :------ | :----- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the local dev server |
| `npm run build` | Build the production site |
| `npm run preview` | Preview the production build locally |

## Content editing

The site is designed to be updated from data files instead of editing component markup:

| File | Purpose |
| :--- | :------ |
| `src/data/site.ts` | Site metadata, hero copy, skills, contact details, and CTA content |
| `src/data/projects.ts` | Featured project cards, tags, links, and optional images |

Project images live in `src/assets/images/`. If a project entry has no image, the card falls back to a branded gradient treatment automatically.
