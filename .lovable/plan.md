## Goal
1. Use the uploaded photo of **Bongi** (CEO & Founder) on the home page Founder section.
2. Add a dedicated `/team` page modeled after the official site's "Meet The Magic Makers, Industry Experts and Beauty Brigade" section, in the same black + gold luxury style.

## Steps

### 1. Save the uploaded photo
Copy `user-uploads://image.png` → `src/assets/founder-bongi.jpg` (used by both pages via ES import).

### 2. New route `src/routes/team.tsx`
- Same nav + footer + sticky-CTA shell as home (matching black/gold tokens).
- `head()` meta: title "Meet the Team — SHUGARLASHPRO", description, og tags.
- Hero band:
  - Eyebrow tag: "The House" with thin gold divider.
  - Headline: **"Meet the magic makers, industry experts & beauty brigade."** in `font-display` with `gold-foil` accent.
- Founder card (Bongi):
  - Circular framed portrait with gold radial glow + thin gold ring.
  - Name **BONGI** in display font, role chip **CEO & FOUNDER**.
  - Full bio adapted from the source site (12+ years, trailblazer, viral SA Brow Extensions artist, mentor & leader).
  - Buttons: **Book with Bongi** (Fresha) + **WhatsApp**.
- "The Brigade" subsection: 2 placeholder circular slots labelled "Coming soon" so the page reads as a team page.

### 3. Home page (`src/routes/index.tsx`)
- Swap `founder.jpg` → `founder-bongi.jpg`.
- Update caption to **"Bongi — CEO & Founder"**.
- Add "Team" link to desktop nav (`<Link to="/team">`).
- Add small `Meet the team →` link under the founder bio.

## Technical notes
- New file: `src/assets/founder-bongi.jpg`
- New file: `src/routes/team.tsx` using `createFileRoute("/team")` — TanStack regenerates `routeTree.gen.ts` automatically.
- Edit: `src/routes/index.tsx` (nav + founder image + caption + team link).
- Reuses existing tokens (`gold-foil`, `var(--gradient-gold)`, `bg-onyx`) — no new CSS.

## Out of scope
Additional real team members — only Bongi was provided; placeholders mark future slots.
