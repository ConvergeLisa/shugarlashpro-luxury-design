import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/translogo.png";
import beforeScreenshot from "@/assets/before-shugarlashpro.png";
import afterScreenshot from "@/assets/after-shugarlashpro.png";
import { MobileBookingBar } from "@/components/MobileBookingBar";
import { SocialNavLinks } from "@/components/SocialNavLinks";
import { BOOK_URL, WHATSAPP } from "@/constants/site-links";

export const Route = createFileRoute("/comparison")({
  component: ComparisonPage,
  head: () => ({
    meta: [
      { title: "Before & After — SHUGARLASHPRO" },
      { name: "description", content: "Compare the current ShugarLashPro site with the new premium demo: clearer booking, richer visuals, and a luxury black-and-gold experience." },
      { property: "og:title", content: "Before & After — SHUGARLASHPRO" },
      { property: "og:description", content: "From basic to booking-ready. See how the new concept elevates the studio online." },
    ],
  }),
});

const comparisonRows = [
  {
    label: "First impression",
    before: "Basic layout and generic styling",
    after: "Premium black / gold luxury, editorial typography",
  },
  {
    label: "Booking flow",
    before: "Booking present but easy to overlook",
    after: "Clear Book Online + WhatsApp path on every scroll",
  },
  {
    label: "Visual proof",
    before: "Limited visual impact for new visitors",
    after: "Transformation-forward gallery and hero motion",
  },
  {
    label: "Mobile experience",
    before: "Standard stacked layout",
    after: "Mobile-first spacing, tap targets, and sticky booking bar",
  },
];

function ComparisonPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background pb-[calc(5.25rem+env(safe-area-inset-bottom,0px))] text-foreground lg:pb-0">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 pb-5 pt-6 sm:px-6 sm:pb-6 sm:pt-7">
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
          <div className="hidden flex-1 items-center justify-center gap-6 text-xs uppercase tracking-[0.3em] text-muted-foreground md:flex lg:gap-8">
            <Link to="/" className="transition hover:text-gold">Home</Link>
            <Link to="/" hash="services" className="transition hover:text-gold">Services</Link>
            <Link to="/pricing" className="transition hover:text-gold">Pricelist</Link>
            <Link to="/" hash="gallery" className="transition hover:text-gold">Gallery</Link>
            <Link to="/team" className="transition hover:text-gold">Team</Link>
            <Link to="/comparison" className="text-gold transition">Before / After</Link>
            <Link to="/" hash="book" className="transition hover:text-gold">Book</Link>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <SocialNavLinks variant="nav" />
            <a href={BOOK_URL} target="_blank" rel="noreferrer"
               className="hidden rounded-full border border-[var(--gold)]/40 bg-background/40 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-gold backdrop-blur transition hover:bg-gold hover:text-primary-foreground md:inline-block">
              Book Now
            </a>
          </div>
        </nav>
      </header>

      {/* 1. Hero */}
      <section className="relative bg-[#000000] px-4 pb-20 pt-32 sm:px-6 sm:pt-36 md:pb-28 md:pt-40">
        <div className="pointer-events-none absolute inset-0 -z-0 opacity-30">
          <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full blur-3xl sm:h-[520px] sm:w-[520px]"
               style={{ background: "radial-gradient(circle, oklch(0.82 0.13 85 / 0.2), transparent 68%)" }} />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-gold">
            <span className="h-px w-10 bg-gold" /> Concept preview <span className="h-px w-10 bg-gold" />
          </div>
          <h1 className="font-display text-[clamp(2rem,6vw,3.5rem)] leading-[1.05] tracking-tight text-foreground md:text-6xl">
            From basic to <span className="italic gold-foil">booking-ready.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            A side-by-side look at how ShugarLashPro&apos;s online presence can feel more premium, more visual, and easier to book.
          </p>
          <div className="mt-10">
            <a href="#preview"
               className="inline-flex min-h-[48px] items-center justify-center rounded-full px-10 py-4 text-xs font-medium uppercase tracking-[0.32em] text-primary-foreground transition hover:opacity-95"
               style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}>
              View the New Concept
            </a>
          </div>
        </div>
      </section>

      {/* 2. Before / After */}
      <section id="preview" className="scroll-mt-24 border-t border-[var(--gold)]/15 bg-background px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:gap-10">
          <article
            className="flex flex-col overflow-hidden rounded-2xl border border-[var(--gold)]/15 bg-[#070707] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.35)] md:p-8"
            style={{ background: "linear-gradient(165deg, #0a0a0a, #111)" }}
          >
            <span className="text-[10px] uppercase tracking-[0.45em] text-muted-foreground">Current Website</span>
            <h2 className="mt-3 font-display text-2xl text-foreground md:text-3xl">
              Functional, but not premium enough
            </h2>
            <div className="mt-6 overflow-hidden rounded-xl border border-[var(--gold)]/20 bg-[#0a0a0a]">
              <img
                src={beforeScreenshot}
                alt="Screenshot of the current ShugarLashPro website"
                width={1440}
                height={1200}
                className="aspect-[4/3] w-full object-cover object-top"
                decoding="async"
              />
            </div>
          </article>
          <article
            className="flex flex-col overflow-hidden rounded-2xl border border-[var(--gold)]/25 bg-[#070707] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.35)] md:p-8"
            style={{ background: "linear-gradient(165deg, #0a0a0a, #141414)" }}
          >
            <span className="text-[10px] uppercase tracking-[0.45em] text-gold">New Concept</span>
            <h2 className="mt-3 font-display text-2xl text-foreground md:text-3xl">
              Luxury, visual, booking-focused
            </h2>
            <div className="mt-6 overflow-hidden rounded-xl border border-[var(--gold)]/25 bg-[#0a0a0a]">
              <img
                src={afterScreenshot}
                alt="Screenshot of the new premium ShugarLashPro demo"
                width={1440}
                height={1200}
                className="aspect-[4/3] w-full object-cover object-top"
                decoding="async"
              />
            </div>
          </article>
        </div>
      </section>

      {/* 3. Comparison rows */}
      <section className="border-t border-[var(--gold)]/15 bg-[#000000] px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center md:mb-16">
            <div className="mb-4 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-gold">
              <span className="h-px w-10 bg-gold" /> At a glance <span className="h-px w-10 bg-gold" />
            </div>
            <h2 className="font-display text-3xl text-foreground md:text-5xl">
              What <span className="italic gold-foil">changes</span>
            </h2>
          </div>
          <div className="divide-y divide-[var(--gold)]/15 border-y border-[var(--gold)]/20">
            {comparisonRows.map((row) => (
              <div key={row.label} className="grid grid-cols-1 gap-5 py-8 md:grid-cols-12 md:gap-6 md:py-10">
                <div className="font-display text-sm uppercase tracking-[0.28em] text-gold md:col-span-3">
                  {row.label}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground md:col-span-4 md:border-l md:border-[var(--gold)]/10 md:pl-6">
                  {row.before}
                </p>
                <p className="text-sm leading-relaxed text-foreground md:col-span-5 md:border-l md:border-[var(--gold)]/10 md:pl-6">
                  {row.after}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why it matters */}
      <section className="border-t border-[var(--gold)]/15 bg-background px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            Beauty clients decide quickly. A premium site builds trust <span className="text-foreground">before</span> they book.
          </p>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="border-t border-[var(--gold)]/15 bg-[#000000] px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl leading-[1.05] text-foreground md:text-5xl">
            Ready to turn browsers into <span className="italic gold-foil">bookings?</span>
          </h2>
          <div className="mx-auto mt-10 flex w-full max-w-md flex-col gap-3 sm:mx-auto sm:flex-row sm:justify-center sm:gap-4 md:max-w-lg">
            <a href={BOOK_URL} target="_blank" rel="noreferrer"
               className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full px-8 py-3.5 text-xs uppercase tracking-[0.32em] text-primary-foreground touch-manipulation"
               style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}>
              Book Online
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer"
               className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full border border-[var(--gold)]/40 px-8 py-3.5 text-xs uppercase tracking-[0.32em] text-gold touch-manipulation hover:bg-gold/10">
              WhatsApp
            </a>
          </div>
          <p className="mt-10 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            <Link to="/" className="text-gold transition hover:opacity-80">← Back to the new homepage</Link>
          </p>
        </div>
      </section>

      <footer className="border-t border-[var(--gold)]/15 py-10 md:py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:px-6 md:flex-row md:justify-between md:text-left">
          <div className="font-display text-lg tracking-[0.4em] gold-foil">SHUGARLASHPRO</div>
          <SocialNavLinks variant="footer" />
          <div>© {new Date().getFullYear()} The Famous Lash Professionals</div>
        </div>
      </footer>

      <MobileBookingBar />
    </div>
  );
}
