## Goal
Swap in the new animated logo and make it feel painted onto the page — black background of the video disappearing into the site's onyx, with only the gold logo glowing.

## Steps

1. **Replace the video file**
   - Copy `user-uploads://GBLogo-2.mp4` → `public/logo-animated.mp4` (overwrite the empty placeholder).

2. **Blend the video into the background** in `src/routes/index.tsx` (hero left column)
   - Keep `autoPlay loop muted playsInline` (already loops).
   - Add `mix-blend-mode: screen` to the `<video>` so the dark background of the mp4 drops out and only the bright gold pixels remain — this is the cleanest way to make video + page background read as one continuous surface.
   - Add a subtle gold radial glow behind it (already partially there) and bump its opacity so the logo "pops."
   - Remove the hard rectangular edge by dropping the poster fallback's visible frame and letting the blended video sit directly on the page.
   - Slightly enlarge max width and add a soft `drop-shadow` in gold for extra lift.

3. **QA**
   - Visually verify in preview: black bars from the mp4 should be invisible; only the animated gold logo visible against the onyx background; loop is seamless.

## Technical notes
- `mix-blend-mode: screen` on a video with a pure-black background renders black as transparent against any darker-or-equal background — perfect for our `oklch(0.06 0 0)` body.
- No new dependencies, no route changes, no styles.css changes required (inline style is enough for the one element).
- File swap uses `code--copy` with `overwrite: true` since `public/logo-animated.mp4` already exists (size 0).
