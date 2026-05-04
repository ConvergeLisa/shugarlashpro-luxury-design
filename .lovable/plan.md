## Goal
Show the actual gold logo (translogo.png) in the header on every page. Currently `/pricing` and `/team` still display the "SLP" text instead of the logo.

## Changes

### `src/routes/pricing.tsx`
- Add import: `import logo from "@/assets/translogo.png";`
- Replace the nav `<Link to="/">` brand block (lines ~72-74) with the same logo `<img>` markup used on the home page and comparison page:
  ```tsx
  <Link
    to="/"
    className="group inline-flex shrink-0 items-center bg-transparent p-0 shadow-none ring-0 outline-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold/35 sm:ml-0.5 sm:mt-0.5 md:ml-1 md:mt-1"
  >
    <img
      src={logo}
      alt="Shugarlashpro"
      className="block h-12 w-auto bg-transparent opacity-[0.92] transition-[opacity,filter] duration-300 group-hover:opacity-100 group-hover:drop-shadow-[0_0_18px_rgba(218,165,75,0.18)] md:h-16 lg:h-[4.75rem]"
    />
  </Link>
  ```

### `src/routes/team.tsx`
- Same: add the `logo` import and replace the SLP text span with the identical `<img>` brand block.

### Verified already correct
- `src/routes/index.tsx` — uses logo ✅
- `src/routes/comparison.tsx` — uses logo ✅

## QA
Navigate to `/`, `/pricing`, `/team`, `/comparison` and confirm the gold lash logo renders consistently in the top-left of each header.
