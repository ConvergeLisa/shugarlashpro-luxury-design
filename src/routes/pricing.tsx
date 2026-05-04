import { createFileRoute, Link } from "@tanstack/react-router";
<<<<<<< HEAD
import { MobileBookingBar } from "@/components/MobileBookingBar";
import { SocialNavLinks } from "@/components/SocialNavLinks";
import { BOOK_URL, WHATSAPP } from "@/constants/site-links";
=======
>>>>>>> 1f6ea5658c330de47a698a2a2072ce997954dccc

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: "Treatments & Pricelist — SHUGARLASHPRO" },
      { name: "description", content: "Full treatment menu and pricelist for Shugarlashpro Sandton — lash extensions, refills, brow extensions and more." },
      { property: "og:title", content: "Treatments & Pricelist — SHUGARLASHPRO" },
      { property: "og:description", content: "Living the lash life. Customized lash treatments tailored just for you." },
    ],
  }),
});

<<<<<<< HEAD
=======
const BOOK_URL = "https://www.fresha.com/en-GB/providers/shugarlashpro-the-famous-lash-professionals-y53wnwjy?share=true&pId=2578697&routeCtx=en-GB&dppub=true&menu=true";
const WHATSAPP = "https://wa.me/27670615423?text=Hi%20Shugarlashpro%2C%20I%27d%20like%20to%20book.";

>>>>>>> 1f6ea5658c330de47a698a2a2072ce997954dccc
type Item = { name: string; price: string; desc?: string };
type Category = { title: string; tagline: string; items: Item[] };

const categories: Category[] = [
  {
    title: "New Lash Sets",
    tagline: "First-time application — consulted, mapped & built to your face.",
    items: [
      { name: "Classic Lashes", price: "R600", desc: "One-on-one application for a refined, natural finish." },
      { name: "YY Lashes", price: "R550", desc: "Pre-fanned styles for soft density." },
      { name: "Hybrid Lashes", price: "R700", desc: "A blend of classic and volume for textured depth." },
      { name: "Volume Lashes", price: "R800", desc: "Hand-made fans for fuller, more elevated eyes." },
      { name: "Russian Volume", price: "R1000", desc: "Ultra-fine lashes layered for couture-level density." },
      { name: "Mega Volume", price: "R1500", desc: "Maximum drama. Sculpted, weightless, unforgettable." },
    ],
  },
  {
    title: "Refills",
    tagline: "Maintenance every 2–3 weeks to keep your set photo-ready.",
    items: [
      { name: "Classic Refill", price: "R350" },
      { name: "YY Refill", price: "R350" },
      { name: "Hybrid Refill", price: "R450" },
      { name: "Volume Refill", price: "R500" },
      { name: "Russian Volume Refill", price: "R650" },
      { name: "Mega Volume Refill", price: "R850" },
    ],
  },
  {
    title: "Brows",
    tagline: "Architecture for the perfect arch — hair by hair.",
    items: [
      { name: "Brow Extensions (New Set)", price: "R950", desc: "Hair-by-hair sculpting for the perfect arch." },
      { name: "Brow Extensions Refill", price: "R550" },
      { name: "Brow Lamination & Tint", price: "R450" },
    ],
  },
  {
    title: "Add-Ons & Removals",
    tagline: "Studio extras and aftercare.",
    items: [
      { name: "Lash Removal (in-house)", price: "R200" },
      { name: "Lash Removal (foreign set)", price: "R300" },
      { name: "Lash Bath & Aftercare", price: "R150" },
    ],
  },
];

function PricingPage() {
  return (
<<<<<<< HEAD
    <div className="relative min-h-screen overflow-x-hidden bg-background pb-[calc(5.25rem+env(safe-area-inset-bottom,0px))] text-foreground lg:pb-0">
      {/* NAV */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-5 sm:px-6 sm:py-6">
          <Link to="/" className="flex shrink-0 items-center gap-2">
            <span className="font-display text-xl tracking-[0.4em] gold-foil">SLP</span>
          </Link>
          <div className="hidden flex-1 items-center justify-center gap-10 text-xs uppercase tracking-[0.3em] text-muted-foreground md:flex">
            <Link to="/" className="transition hover:text-gold">Home</Link>
            <Link to="/team" className="transition hover:text-gold">Team</Link>
            <Link to="/pricing" className="text-gold transition">Pricelist</Link>
            <Link to="/comparison" className="transition hover:text-gold">Before / After</Link>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <SocialNavLinks variant="nav" />
            <a href={BOOK_URL} target="_blank" rel="noreferrer"
               className="hidden rounded-full border border-[var(--gold)]/40 bg-background/40 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-gold backdrop-blur transition hover:bg-gold hover:text-primary-foreground md:inline-block">
              Book Now
            </a>
          </div>
=======
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* NAV */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-xl tracking-[0.4em] gold-foil">SLP</span>
          </Link>
          <div className="hidden items-center gap-10 text-xs uppercase tracking-[0.3em] text-muted-foreground md:flex">
            <Link to="/" className="transition hover:text-gold">Home</Link>
            <Link to="/team" className="transition hover:text-gold">Team</Link>
            <Link to="/pricing" className="text-gold transition">Pricelist</Link>
          </div>
          <a href={BOOK_URL} target="_blank" rel="noreferrer"
             className="hidden rounded-full border border-[var(--gold)]/40 bg-background/40 px-5 py-2 text-[11px] uppercase tracking-[0.3em] text-gold backdrop-blur transition hover:bg-gold hover:text-primary-foreground md:inline-block">
            Book Now
          </a>
>>>>>>> 1f6ea5658c330de47a698a2a2072ce997954dccc
        </nav>
      </header>

      {/* HERO */}
      <section className="relative pt-40 pb-12">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-20 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
               style={{ background: "radial-gradient(circle, oklch(0.82 0.13 85 / 0.3), transparent 60%)" }} />
        </div>
<<<<<<< HEAD
        <div className="mx-auto max-w-4xl px-4 text-center animate-fade-up sm:px-6">
=======
        <div className="mx-auto max-w-4xl px-6 text-center animate-fade-up">
>>>>>>> 1f6ea5658c330de47a698a2a2072ce997954dccc
          <div className="mb-6 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-gold">
            <span className="h-px w-10 bg-gold" /> Treatments & Pricelist <span className="h-px w-10 bg-gold" />
          </div>
          <h1 className="font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
            Living the <span className="italic gold-foil">lash life</span>.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Whether you're after a subtle lift or bold, dramatic lashes, our beauty brigade is here to deliver customized results that leave you feeling confident and beautiful. Every look is designed and tailored just for you, by certified professionals using only the highest-quality products and techniques.
          </p>
        </div>
      </section>

      {/* MENU */}
<<<<<<< HEAD
      <section className="relative mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
=======
      <section className="relative mx-auto max-w-5xl px-6 py-16">
>>>>>>> 1f6ea5658c330de47a698a2a2072ce997954dccc
        <div className="space-y-20">
          {categories.map((cat) => (
            <div key={cat.title} className="animate-fade-up">
              <div className="mb-10 flex flex-col gap-3 border-b border-[var(--gold)]/20 pb-6 md:flex-row md:items-end md:justify-between">
                <h2 className="font-display text-4xl leading-none tracking-tight md:text-5xl">
                  <span className="gold-foil">{cat.title}</span>
                </h2>
                <p className="max-w-sm text-sm text-muted-foreground md:text-right">{cat.tagline}</p>
              </div>

              <ul className="divide-y divide-[var(--gold)]/15">
                {cat.items.map((item) => (
<<<<<<< HEAD
                  <li key={item.name} className="flex flex-col gap-2 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 sm:py-5">
=======
                  <li key={item.name} className="flex items-baseline justify-between gap-6 py-5">
>>>>>>> 1f6ea5658c330de47a698a2a2072ce997954dccc
                    <div className="min-w-0 flex-1">
                      <div className="font-display text-xl text-foreground md:text-2xl">{item.name}</div>
                      {item.desc && (
                        <div className="mt-1 text-sm text-muted-foreground">{item.desc}</div>
                      )}
                    </div>
<<<<<<< HEAD
                    <div className="shrink-0 font-display text-xl gold-foil tabular-nums md:text-2xl sm:text-right">
=======
                    <div className="shrink-0 font-display text-xl gold-foil tabular-nums md:text-2xl">
>>>>>>> 1f6ea5658c330de47a698a2a2072ce997954dccc
                      {item.price}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-16 text-center text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          Prices are guidelines. Final pricing confirmed at consultation.
        </p>
      </section>

      {/* CTA */}
<<<<<<< HEAD
      <section className="relative overflow-x-hidden py-20 md:py-28">
        <div className="absolute inset-0 -z-10 opacity-50"
             style={{ background: "radial-gradient(ellipse at center, oklch(0.82 0.13 85 / 0.2), transparent 60%)" }} />
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-5xl leading-[0.95] md:text-6xl">
            Ready to <span className="italic gold-foil">book</span>?
          </h2>
          <div className="mx-auto mt-8 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4 md:max-w-none">
            <a href={BOOK_URL} target="_blank" rel="noreferrer"
               className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full px-8 py-3.5 text-xs uppercase tracking-[0.32em] text-primary-foreground touch-manipulation sm:px-10 sm:py-5 sm:tracking-[0.35em]"
=======
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 -z-10 opacity-50"
             style={{ background: "radial-gradient(ellipse at center, oklch(0.82 0.13 85 / 0.2), transparent 60%)" }} />
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-5xl leading-[0.95] md:text-6xl">
            Ready to <span className="italic gold-foil">book</span>?
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={BOOK_URL} target="_blank" rel="noreferrer"
               className="inline-flex items-center justify-center rounded-full px-10 py-5 text-xs uppercase tracking-[0.35em] text-primary-foreground"
>>>>>>> 1f6ea5658c330de47a698a2a2072ce997954dccc
               style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}>
              Book Online →
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer"
<<<<<<< HEAD
               className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full border border-[var(--gold)]/40 px-8 py-3.5 text-xs uppercase tracking-[0.32em] text-gold touch-manipulation hover:bg-gold/10 sm:px-10 sm:py-5 sm:tracking-[0.35em]">
              WhatsApp
            </a>
          </div>
          <div className="mt-6 flex justify-center sm:mt-8">
            <SocialNavLinks variant="inline" />
          </div>
=======
               className="inline-flex items-center justify-center rounded-full border border-[var(--gold)]/40 px-10 py-5 text-xs uppercase tracking-[0.35em] text-gold hover:bg-gold/10">
              WhatsApp
            </a>
          </div>
>>>>>>> 1f6ea5658c330de47a698a2a2072ce997954dccc
        </div>
      </section>

      {/* FOOTER */}
<<<<<<< HEAD
      <footer className="border-t border-[var(--gold)]/15 py-10 md:py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 text-center sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:text-left">
          <div className="font-display text-lg tracking-[0.4em] gold-foil">SHUGARLASHPRO</div>
          <div className="flex flex-col items-center gap-3 lg:items-center">
            <SocialNavLinks variant="footer" />
            <p className="max-w-xs text-[11px] leading-relaxed text-muted-foreground sm:max-w-sm">
              Follow ShugarLashPro for real client lash transformations.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 lg:items-end">
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Sandton · Morningside · Johannesburg
            </div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              © {new Date().getFullYear()} The Famous Lash Professionals
            </div>
=======
      <footer className="border-t border-[var(--gold)]/15 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div className="font-display text-lg tracking-[0.4em] gold-foil">SHUGARLASHPRO</div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Sandton · Morningside · Johannesburg
          </div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            © {new Date().getFullYear()} The Famous Lash Professionals
>>>>>>> 1f6ea5658c330de47a698a2a2072ce997954dccc
          </div>
        </div>
      </footer>

<<<<<<< HEAD
      <MobileBookingBar />
=======
      {/* MOBILE STICKY CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--gold)]/20 bg-background/90 p-3 backdrop-blur md:hidden">
        <div className="flex gap-2">
          <a href={BOOK_URL} target="_blank" rel="noreferrer"
             className="flex-1 rounded-full py-3 text-center text-[11px] uppercase tracking-[0.3em] text-primary-foreground"
             style={{ background: "var(--gradient-gold)" }}>
            Book Now
          </a>
          <a href={WHATSAPP} target="_blank" rel="noreferrer"
             className="flex-1 rounded-full border border-[var(--gold)]/40 py-3 text-center text-[11px] uppercase tracking-[0.3em] text-gold">
            WhatsApp
          </a>
        </div>
      </div>
>>>>>>> 1f6ea5658c330de47a698a2a2072ce997954dccc
    </div>
  );
}
