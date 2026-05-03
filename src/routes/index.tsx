import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo-gold.png";
import founder from "@/assets/founder.jpg";
import lashHero from "@/assets/lash-1.jpg";
import { CircularCarousel } from "@/components/CircularCarousel";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "SHUGARLASHPRO — Luxury Lash Studio in Sandton" },
      { name: "description", content: "Premium lash extensions, brows & nails in Sandton. Classic, Volume, Russian & Mega Volume by The Famous Lash Professionals." },
      { property: "og:title", content: "SHUGARLASHPRO — Luxury Lashes, Sandton" },
      { property: "og:description", content: "Tailored lash extensions for the woman who notices the details." },
    ],
  }),
});

const BOOK_URL = "https://www.fresha.com/en-GB/providers/shugarlashpro-the-famous-lash-professionals-y53wnwjy?share=true&pId=2578697&routeCtx=en-GB&dppub=true&menu=true";
const WHATSAPP = "https://wa.me/27670615423?text=Hi%20Shugarlashpro%2C%20I%27d%20like%20to%20book%20a%20lash%20appointment.";
const PHONE = "+27670615423";

const services = [
  { name: "Classic Lashes", price: "R600", desc: "One-on-one application for a refined, natural finish." },
  { name: "YY Lashes", price: "R550", desc: "Pre-fanned styles for soft density and effortless wear." },
  { name: "Volume Lashes", price: "R800", desc: "Hand-made fans for a fuller, more elevated look." },
  { name: "Russian Volume", price: "R1000", desc: "Ultra-fine lashes layered for couture-level depth." },
  { name: "Mega Volume", price: "R1500", desc: "Maximum drama. Sculpted, weightless, unforgettable." },
  { name: "Brow Extensions", price: "R950", desc: "Hair-by-hair architecture for the perfect arch." },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* NAV */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a href="#top" className="flex items-center gap-2">
            <span className="font-display text-xl tracking-[0.4em] gold-foil">SLP</span>
          </a>
          <div className="hidden items-center gap-10 text-xs uppercase tracking-[0.3em] text-muted-foreground md:flex">
            <a href="#services" className="transition hover:text-gold">Services</a>
            <a href="#gallery" className="transition hover:text-gold">Gallery</a>
            <a href="#founder" className="transition hover:text-gold">Founder</a>
            <a href="#book" className="transition hover:text-gold">Book</a>
          </div>
          <a href={BOOK_URL} target="_blank" rel="noreferrer"
             className="hidden rounded-full border border-[var(--gold)]/40 bg-background/40 px-5 py-2 text-[11px] uppercase tracking-[0.3em] text-gold backdrop-blur transition hover:bg-gold hover:text-primary-foreground md:inline-block">
            Book Now
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
               style={{ background: "radial-gradient(circle, oklch(0.82 0.13 85 / 0.35), transparent 60%)" }} />
        </div>

        <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-16 px-6 pt-32 pb-20 lg:grid-cols-2 lg:pt-24">
          {/* Left: Animated logo with gold ring */}
          <div className="relative order-2 flex items-center justify-center lg:order-1 animate-fade-up">
            <div className="relative aspect-square w-full max-w-[560px]">
              {/* Outer rotating dashed ring */}
              <svg className="absolute inset-0 animate-spin-slow" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="oklch(0.62 0.13 70)" />
                    <stop offset="50%" stopColor="oklch(0.92 0.1 88)" />
                    <stop offset="100%" stopColor="oklch(0.62 0.13 70)" />
                  </linearGradient>
                </defs>
                <circle cx="200" cy="200" r="196" fill="none" stroke="url(#goldGrad)" strokeWidth="0.6" strokeDasharray="2 6" />
              </svg>
              {/* Inner counter ring */}
              <svg className="absolute inset-6 animate-orbit-reverse" viewBox="0 0 400 400">
                <circle cx="200" cy="200" r="196" fill="none" stroke="url(#goldGrad)" strokeWidth="0.4" strokeDasharray="1 4" opacity="0.6" />
              </svg>
              {/* Soft pulsing gold glow */}
              <div className="absolute inset-10 rounded-full animate-glow-pulse"
                   style={{ background: "radial-gradient(circle, oklch(0.82 0.13 85 / 0.45), transparent 70%)" }} />
              {/* Animated logo video */}
              <div className="absolute inset-12 overflow-hidden rounded-full"
                   style={{ boxShadow: "inset 0 0 0 1px oklch(0.82 0.13 85 / 0.35), 0 30px 80px -20px oklch(0.82 0.13 85 / 0.45)" }}>
                <video
                  src="/logo-animated.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={logo}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: copy + CTAs */}
          <div className="order-1 lg:order-2 animate-fade-up" style={{ animationDelay: "120ms" }}>
            <div className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-gold">
              <span className="h-px w-10 bg-gold" />
              Sandton · Est. The Famous Lash Professionals
            </div>
            <h1 className="font-display text-5xl leading-[0.95] tracking-tight text-foreground md:text-7xl lg:text-[5.5rem]">
              Luxury lashes,
              <br />
              <span className="italic gold-foil">tailored</span> to your face
              <br />
              <span className="text-muted-foreground">and your vibe.</span>
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
              A private studio for the woman who treats her beauty as an heirloom. Hand-crafted lash sets, precision brows and discreet luxury — by appointment only.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href={BOOK_URL} target="_blank" rel="noreferrer"
                 className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 text-xs font-medium uppercase tracking-[0.35em] text-primary-foreground transition"
                 style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}>
                <span className="relative z-10">Book Online</span>
                <span className="ml-3 transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer"
                 className="inline-flex items-center justify-center rounded-full border border-[var(--gold)]/40 px-8 py-4 text-xs font-medium uppercase tracking-[0.35em] text-gold transition hover:bg-gold/10">
                WhatsApp
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-[var(--gold)]/15 pt-8">
              {[
                ["12+", "Years of craft"],
                ["6k+", "Lashed clients"],
                ["★ 4.9", "Studio rating"],
              ].map(([k, v]) => (
                <div key={v}>
                  <div className="font-display text-3xl gold-foil">{k}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="relative overflow-hidden border-y border-[var(--gold)]/15 py-6">
        <div className="flex animate-spin-slow whitespace-nowrap" style={{ animation: "shimmer 30s linear infinite", backgroundSize: "auto" }}>
          <div className="flex shrink-0 items-center gap-12 px-6 font-display text-2xl italic text-muted-foreground">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="flex items-center gap-12">
                Classic <span className="text-gold">✦</span>
                Volume <span className="text-gold">✦</span>
                Russian <span className="text-gold">✦</span>
                Mega <span className="text-gold">✦</span>
                Brows <span className="text-gold">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="relative mx-auto max-w-7xl px-6 py-32">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-gold">
              <span className="h-px w-10 bg-gold" /> The Menu
            </div>
            <h2 className="font-display text-5xl leading-none md:text-6xl">
              Quiet luxury, <span className="italic gold-foil">measurable</span> craft.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Every set is consulted, mapped and built to your face shape — never one-size-fits-all.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-[var(--gold)]/20 bg-[var(--gold)]/15 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.name} className="group relative bg-onyx p-8 transition duration-500 hover:bg-[oklch(0.11_0.01_70)]">
              <div className="mb-8 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                0{i + 1} / Service
              </div>
              <h3 className="font-display text-3xl leading-tight text-foreground">{s.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="mt-10 flex items-end justify-between border-t border-[var(--gold)]/15 pt-6">
                <span className="font-display text-2xl gold-foil">{s.price}</span>
                <a href={BOOK_URL} target="_blank" rel="noreferrer"
                   className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground transition group-hover:text-gold">
                  Book →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="relative py-24">
        <div className="mx-auto mb-8 max-w-7xl px-6 text-center">
          <div className="mb-4 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-gold">
            <span className="h-px w-10 bg-gold" /> The Portfolio <span className="h-px w-10 bg-gold" />
          </div>
          <h2 className="font-display text-5xl leading-none md:text-7xl">
            Worn by women who <span className="italic gold-foil">notice</span>.
          </h2>
        </div>
        <CircularCarousel />
      </section>

      {/* FOUNDER */}
      <section id="founder" className="relative mx-auto max-w-7xl px-6 py-32">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl opacity-40 blur-3xl"
                 style={{ background: "radial-gradient(circle, oklch(0.82 0.13 85 / 0.3), transparent 70%)" }} />
            <div className="relative overflow-hidden rounded-3xl border border-[var(--gold)]/30 ring-gold">
              <img src={founder} alt="The founder of ShugarLashPro" loading="lazy" width={800} height={1000} className="h-[600px] w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 p-6"
                   style={{ background: "linear-gradient(180deg, transparent, oklch(0.06 0 0 / 0.85))" }}>
                <div className="text-[10px] uppercase tracking-[0.4em] text-gold">Founder</div>
                <div className="font-display text-2xl text-foreground">The Famous Lash Professional</div>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-gold">
              <span className="h-px w-10 bg-gold" /> The House
            </div>
            <h2 className="font-display text-5xl leading-[1] md:text-6xl">
              Twelve years of <span className="italic gold-foil">obsession</span> with the perfect set.
            </h2>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground">
              Shugarlashpro began in a quiet corner of Sandton with a single belief — that lashes should feel like couture: measured, considered, and made for one woman at a time. Today the studio is the trusted name behind Joburg's most photographed eyes, and the academy that trains the next generation of lash artists.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-[var(--gold)]/15 pt-8">
              {[
                ["12y", "Founder craft"],
                ["100%", "Hand mapped"],
                ["1:1", "Private studio"],
              ].map(([k, v]) => (
                <div key={v}>
                  <div className="font-display text-3xl gold-foil">{k}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section id="book" className="relative overflow-hidden py-32">
        <div className="absolute inset-0 -z-10 opacity-50"
             style={{ background: "radial-gradient(ellipse at center, oklch(0.82 0.13 85 / 0.2), transparent 60%)" }} />
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-gold">
            <span className="h-px w-10 bg-gold" /> By Appointment <span className="h-px w-10 bg-gold" />
          </div>
          <h2 className="font-display text-6xl leading-[0.95] md:text-8xl">
            Reserve <span className="italic gold-foil">your</span>
            <br /> chair.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base text-muted-foreground">
            New sets, refills and brow consultations — choose your time and we'll handle the rest.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={BOOK_URL} target="_blank" rel="noreferrer"
               className="inline-flex items-center justify-center rounded-full px-10 py-5 text-xs uppercase tracking-[0.35em] text-primary-foreground"
               style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}>
              Book Online →
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer"
               className="inline-flex items-center justify-center rounded-full border border-[var(--gold)]/40 px-10 py-5 text-xs uppercase tracking-[0.35em] text-gold hover:bg-gold/10">
              WhatsApp Us
            </a>
          </div>
          <a href={`tel:${PHONE}`} className="mt-8 inline-block text-sm text-muted-foreground hover:text-gold">
            or call <span className="text-gold">+27 67 061 5423</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[var(--gold)]/15 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div className="font-display text-lg tracking-[0.4em] gold-foil">SHUGARLASHPRO</div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Sandton · Morningside · Johannesburg
          </div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            © {new Date().getFullYear()} The Famous Lash Professionals
          </div>
        </div>
      </footer>

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
    </div>
  );
}
