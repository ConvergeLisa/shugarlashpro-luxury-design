## Goal
Remove the priced services grid from the home page and replace it with a lavish "service menu" teaser. Move the full pricelist onto a new dedicated `/pricing` page (modeled after the original site's "Living the Lash Life" → Treatments & Pricelist), with a gold CTA button on the home page that links to it.

## Steps

### 1. New route `src/routes/pricing.tsx` — full pricelist
- Same black+gold shell (nav, footer, mobile sticky CTA) as the other pages.
- `head()` meta: title "Treatments & Pricelist — SHUGARLASHPRO", description, og tags.
- Hero band:
  - Eyebrow tag "Treatments & Pricelist".
  - Headline **"Living the lash life."** (display font, gold-foil accent).
  - Intro paragraph adapted from the source: *"Whether you're after a subtle lift or bold, dramatic lashes, our beauty brigade is here to deliver customized results… designed and tailored just for you."*
- Editorial price list grouped by category with thin gold dividers:
  - **New Lash Sets** — Classic R600, YY R550, Hybrid R700, Volume R800, Russian Volume R1000, Mega Volume R1500
  - **Refills** — Classic R350, YY R350, Hybrid R450, Volume R500, Russian R650, Mega R850
  - **Brows** — Brow Extensions R950, Refill R550, Lamination & Tint R450
  - **Add-Ons & Removals** — In-house removal R200, Foreign set removal R300, Lash bath R150
- Each row: name + (optional one-line description) on the left, gold price right-aligned. No card grid — long-form luxury menu styling like a fine-dining list.
- Note line: "Prices are guidelines. Final pricing confirmed at consultation."
- CTA section: Book Online + WhatsApp.

### 2. Home page (`src/routes/index.tsx`) — replace priced grid
- Remove the existing `services` array prices and the per-card price/Book row.
- Replace the SERVICES section with a **lavish service menu teaser**:
  - Keep eyebrow "The Menu" + headline.
  - Render the 6 hero services as elegant editorial rows (name + short descriptor) with subtle gold dividers between them — no prices shown.
  - Below the list, a centered prominent gold pill button: **"View Full Pricelist →"** linking via `<Link to="/pricing">`.
  - Secondary text link: "Or book online →" pointing at Fresha.
- Add `Pricelist` link to desktop nav (`<Link to="/pricing">`).

### 3. Team page nav
- Add `Pricelist` link to the nav on `src/routes/team.tsx` for consistency.

## Technical notes
- New file: `src/routes/pricing.tsx` (TanStack auto-registers via routeTree.gen.ts).
- Edit: `src/routes/index.tsx` — remove `price` field usage in services rendering, restructure SERVICES section, add nav link.
- Edit: `src/routes/team.tsx` — add Pricelist nav link.
- Reuses existing tokens (`gold-foil`, `var(--gradient-gold)`, `bg-onyx`, `var(--gold)`) — no CSS changes.

## Out of scope
- A real CMS-backed pricelist. Prices are hard-coded sensible defaults extrapolated from the existing service set; the user can hand me an exact list any time and I'll swap values 1:1.
