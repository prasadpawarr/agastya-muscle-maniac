# AGENTS.md

## Project Summary

- This project is a Next.js 16 app-router site for `AGASTYA MUSCLE MANIAC`, built as a single-page gym/fitness landing page.
- The homepage is composed in `app/page.tsx` from section components in `components/`.
- Styling is Tailwind-based with theme tokens defined in `app/globals.css` and extended in `tailwind.config.ts`.
- Motion is handled with `framer-motion`.

## Stack

- Next.js 16
- React 19
- TypeScript with `strict: true`
- Tailwind CSS 4
- Framer Motion
- Radix UI primitives in `components/ui/`

## Key Paths

- `app/layout.tsx`: global metadata, fonts, analytics, HTML shell
- `app/page.tsx`: homepage composition order
- `app/globals.css`: theme variables, base typography, utility classes
- `components/`: homepage sections and shared components
- `components/ui/`: reusable UI primitives
- `lib/utils.ts`: shared `cn()` utility
- `public/`: expected location for images, logo, and video assets referenced by sections

## Local Conventions

- Prefer small section components with clear responsibility rather than growing `app/page.tsx`.
- Preserve the current visual language:
  - dark background
  - red accent (`--color-primary` / `--color-accent`)
  - `Bebas Neue` for display text
  - `Barlow` for body text
- Reuse theme tokens like `bg-background`, `text-foreground`, and `text-accent` instead of hardcoding new colors unless there is a strong reason.
- Keep animations purposeful and lightweight. Match existing `framer-motion` usage instead of adding heavy interaction logic.
- Use the `@/*` import alias for project imports.
- Prefer existing primitives from `components/ui/` before introducing new ad hoc UI patterns.

## Editing Guidance

- Check whether a component is a server component before adding client-only logic. Add `'use client'` only when hooks, browser APIs, or animation state require it.
- Keep section anchors stable (`#about`, `#programs`, `#gallery`, `#testimonials`, `#contact`) unless the navigation is updated with them.
- For media-heavy sections, verify that referenced assets exist in `public/` and that videos remain muted/looping if autoplay is expected.
- Prefer `next/image` for static images when it does not complicate the layout. Existing plain `img` usage can be upgraded when touching those sections.
- Keep TypeScript types explicit when component props or data structures become non-trivial.

## Commands

- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Lint: `npm run lint`
- Production build: `npm run build`
- Start production server: `npm run start`

## Validation

- Run `npm run lint` after meaningful code changes.
- For UI edits, verify the homepage at multiple breakpoints because most sections are responsive and animation-heavy.
- Check navbar behavior, hero layout, gallery rendering, and anchor navigation after changing shared layout or spacing.

## Notes For Future Agents

- There is no evidence of a local test suite beyond linting, so avoid claiming automated test coverage that does not exist.
- This workspace currently does not appear to be a Git worktree, so confirm repository context before giving Git-based instructions.
- When making design changes, preserve the brand-specific look of this gym site rather than replacing it with generic SaaS styling.
