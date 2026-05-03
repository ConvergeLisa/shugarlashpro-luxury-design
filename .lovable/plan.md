## Issue
1. The animated logo video isn't visible — it's there, but `mix-blend-mode: screen` combined with the gold radial glow behind it is washing it out / making it invisible against the dark page on some renders. The mp4's background is already near-black, so blend mode is unnecessary.
2. The top-left "SLP" text should be replaced with the actual gold lash logo image.

## Fix in `src/routes/index.tsx`

**a) Top-left logo (nav)**
Replace the SLP text span with an `<img>` using the existing `logo` import:
```tsx
<a href="#top" className="flex items-center gap-2">
  <img src={logo} alt="Shugarlashpro" className="h-12 w-auto md:h-14" />
</a>
```

**b) Hero animated video**
- Remove `mixBlendMode: "screen"` (the mp4's black already matches the onyx page).
- Keep the soft gold glow but reduce its blur opacity so it doesn't wash the logo out.
- Ensure attributes for reliable autoplay everywhere: add `preload="auto"` and keep `autoPlay loop muted playsInline`.
- Keep the gold drop-shadow filter for the "pop" effect.

Resulting video block:
```tsx
<video
  src="/logo-animated.mp4"
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
  className="h-auto w-full"
  style={{ filter: "drop-shadow(0 10px 40px oklch(0.82 0.13 85 / 0.35))" }}
/>
```

## QA
- Reload preview, confirm gold logo plays in the hero left column on a black background (seamless blend).
- Confirm top-left nav now shows the gold lash logo instead of "SLP" text.
