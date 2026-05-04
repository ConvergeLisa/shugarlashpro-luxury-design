import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/translogo.png";
import founder from "@/assets/founder-bongi.jpg";
import logoAnimation from "@/assets/logoanimation.gif";

import { CircularCarousel } from "@/components/CircularCarousel";
import { MobileBookingBar } from "@/components/MobileBookingBar";
import { MobileNavMenu } from "@/components/MobileNavMenu";
import { SocialNavLinks } from "@/components/SocialNavLinks";
import { BOOK_URL, WHATSAPP, PHONE } from "@/constants/site-links";

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

const services = [
  { name: "Classic Lashes", desc: "One-on-one application for a refined, natural finish." },
  { name: "YY Lashes", desc: "Pre-fanned styles for soft density and effortless wear." },
  { name: "Volume Lashes", desc: "Hand-made fans for a fuller, more elevated look." },
  { name: "Russian Volume", desc: "Ultra-fine lashes layered for couture-level depth." },
  { name: "Mega Volume", desc: "Maximum drama. Sculpted, weightless, unforgettable." },
  { name: "Brow Extensions", desc: "Hair-by-hair architecture for the perfect arch." },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background pb-[calc(5.25rem+env(safe-area-inset-bottom,0px))] text-foreground lg:pb-0">
      {/* NAV */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 pb-5 pt-6 sm:px-6 sm:pb-6 sm:pt-7">
          <a
            href="#top"
            className="group inline-flex shrink-0 items-center bg-transparent p-0 shadow-none ring-0 outline-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold/35 sm:ml-0.5 sm:mt-0.5 md:ml-1 md:mt-1"
          >
            <img
              src={logo}
              alt="Shugarlashpro"
              className="block h-12 w-auto bg-transparent opacity-[0.92] transition-[opacity,filter] duration-300 group-hover:opacity-100 group-hover:drop-shadow-[0_0_18px_rgba(218,165,75,0.18)] md:h-16 lg:h-[4.75rem]"
            />
          </a>
          <div className="hidden flex-1 items-center justify-center gap-5 text-xs uppercase tracking-[0.3em] text-muted-foreground md:flex lg:gap-8">
            <a href="#services" className="transition hover:text-gold">Services</a>
            <Link to="/pricing" className="transition hover:text-gold">Pricelist</Link>
            <a href="#gallery" className="transition hover:text-gold">Gallery</a>
            <Link to="/team" className="transition hover:text-gold">Team</Link>
            <Link to="/comparison" className="transition hover:text-gold">Before / After</Link>
            <a href="#book" className="transition hover:text-gold">Book</a>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <SocialNavLinks variant="nav" />
            <a href={BOOK_URL} target="_blank" rel="noreferrer"
               className="hidden rounded-full border border-[var(--gold)]/40 bg-background/40 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-gold backdrop-blur transition hover:bg-gold hover:text-primary-foreground md:inline-block">
              Book Now
            </a>
            <MobileNavMenu />
          </div>
        </nav>
      </header>

      {/* HERO — mobile: logo → headline → body → CTAs; desktop unchanged balance */}
      <section id="top" className="relative min-h-screen bg-[#000000]">
        <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-6 bg-[#000000] px-4 pb-12 pt-28 sm:px-6 sm:pt-32 sm:pb-16 md:gap-[1.125rem] lg:grid-cols-2 lg:pt-[6.75rem]">
          <div
            className="order-1 flex w-full min-h-0 translate-x-0 -translate-y-1 items-center justify-center bg-transparent lg:order-1 lg:translate-x-[14px] lg:-translate-y-8 lg:justify-end lg:pr-2"
          >
            <img
              src={logoAnimation}
              alt="ShugarLashPro animated logo"
              className="mx-auto block h-auto max-w-full bg-transparent [width:min(76vw,520px)] sm:[width:min(68vw,600px)] lg:mx-0 lg:[width:min(54vw,700px)]"
            />
          </div>

          {/* Right: copy + CTAs */}
          <div className="order-2 w-full max-w-xl justify-self-center lg:order-2 lg:-translate-x-2 lg:justify-self-auto animate-fade-up" style={{ animationDelay: "120ms" }}>
            <div className="mb-3 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-gold">
              <span className="h-px w-10 bg-gold" />
              Sandton · Est. The Famous Lash Professionals
            </div>
            <h1 className="font-display text-[clamp(1.65rem,6.5vw,2.5rem)] leading-[0.98] tracking-tight text-foreground md:text-[3.7rem] lg:text-[4.5rem]">
              Luxury lashes,
              <br />
              <span className="italic gold-foil">tailored</span> to your face
              <br />
              <span className="text-muted-foreground">and your vibe.</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:mt-6">
              A private studio for the woman who treats her beauty as an heirloom. Hand-crafted lash sets, precision brows and discreet luxury — by appointment only.
            </p>

            <div className="mt-6 flex w-full max-w-md flex-col gap-3 sm:mt-8 sm:flex-row sm:items-stretch">
              <a href={BOOK_URL} target="_blank" rel="noreferrer"
                 className="group relative flex min-h-[48px] flex-1 items-center justify-center overflow-hidden rounded-full px-6 py-3.5 text-xs font-medium uppercase tracking-[0.32em] text-primary-foreground transition touch-manipulation sm:px-8 sm:py-4 sm:tracking-[0.35em]"
                 style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}>
                <span className="relative z-10">Book Online</span>
                <span className="ml-2 transition-transform group-hover:translate-x-1 sm:ml-3">→</span>
              </a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer"
                 className="flex min-h-[48px] flex-1 items-center justify-center rounded-full border border-[var(--gold)]/40 px-6 py-3.5 text-xs font-medium uppercase tracking-[0.32em] text-gold transition hover:bg-gold/10 touch-manipulation sm:px-8 sm:py-4 sm:tracking-[0.35em]">
                WhatsApp
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[var(--gold)]/15 pt-8">
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
      <div className="relative overflow-x-hidden border-y border-[var(--gold)]/15 py-6">
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
      <section id="services" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-32">
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-[56px] max-w-[760px] text-left">
            <div className="mb-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-gold">
              <span className="h-px w-10 bg-gold" /> The Menu
            </div>
            <h2 className="mb-6 font-display text-5xl leading-none md:text-6xl">
              Quiet luxury, <span className="italic gold-foil">measurable</span> craft.
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Every set is consulted, mapped and built to your face shape — never one-size-fits-all.
            </p>
          </div>
          <div className="pointer-events-none absolute -inset-x-10 -inset-y-6 -z-10 rounded-3xl opacity-40 blur-3xl"
               style={{ background: "radial-gradient(ellipse at center, oklch(0.82 0.13 85 / 0.25), transparent 70%)" }} />
          <ul className="divide-y divide-[var(--gold)]/15 border-y border-[var(--gold)]/20">
            {services.map((s, i) => (
              <li key={s.name} className="group flex flex-col gap-2 py-6 transition sm:flex-row sm:items-baseline sm:gap-6 sm:py-7">
                <span className="w-10 shrink-0 font-display text-xs tracking-[0.3em] text-gold">
                  0{i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-2xl leading-tight text-foreground transition group-hover:gold-foil md:text-3xl">
                    {s.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
                <span className="hidden text-gold opacity-0 transition group-hover:opacity-100 md:inline">✦</span>
              </li>
            ))}
          </ul>

          <div className="mt-14 flex flex-col items-center gap-4">
            <Link to="/pricing"
                  className="group inline-flex items-center justify-center rounded-full px-10 py-5 text-xs uppercase tracking-[0.35em] text-primary-foreground"
                  style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}>
              View Full Pricelist
              <span className="ml-3 transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <a href={BOOK_URL} target="_blank" rel="noreferrer"
               className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground transition hover:text-gold">
              or book online →
            </a>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="relative overflow-x-hidden py-16 md:py-24">
        <div className="mx-auto mb-6 max-w-7xl px-4 text-center sm:mb-8 sm:px-6">
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
      <section id="founder" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-32">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl opacity-40 blur-3xl"
                 style={{ background: "radial-gradient(circle, oklch(0.82 0.13 85 / 0.3), transparent 70%)" }} />
            <div className="relative overflow-hidden rounded-3xl border border-[var(--gold)]/30 ring-gold">
              <img src={founder} alt="The founder of ShugarLashPro" loading="lazy" width={800} height={1000} className="h-[min(420px,65vh)] w-full object-cover sm:h-[min(520px,70vh)] md:h-[600px]" />
              <div className="absolute inset-x-0 bottom-0 p-6"
                   style={{ background: "linear-gradient(180deg, transparent, oklch(0.06 0 0 / 0.85))" }}>
                <div className="text-[10px] uppercase tracking-[0.4em] text-gold">CEO & Founder</div>
                <div className="font-display text-2xl text-foreground">Bongi — The Famous Lash Professional</div>
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

            <Link to="/team" className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-gold hover:opacity-80">
              Meet the team <span aria-hidden>→</span>
            </Link>

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
      <section id="book" className="relative overflow-x-hidden py-20 md:py-32">
        <div className="absolute inset-0 -z-10 opacity-50"
             style={{ background: "radial-gradient(ellipse at center, oklch(0.82 0.13 85 / 0.2), transparent 60%)" }} />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="mb-6 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-gold">
            <span className="h-px w-10 bg-gold" /> By Appointment <span className="h-px w-10 bg-gold" />
          </div>
          <h2 className="font-display text-[clamp(2.5rem,10vw,3.75rem)] leading-[0.95] md:text-8xl">
            Reserve <span className="italic gold-foil">your</span>
            <br /> chair.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:mt-8">
            New sets, refills and brow consultations — choose your time and we'll handle the rest.
          </p>
          <div className="mx-auto mt-8 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4 md:max-w-none">
            <a href={BOOK_URL} target="_blank" rel="noreferrer"
               className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full px-8 py-3.5 text-xs uppercase tracking-[0.32em] text-primary-foreground touch-manipulation sm:px-10 sm:py-5 sm:tracking-[0.35em]"
               style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}>
              Book Online →
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer"
               className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full border border-[var(--gold)]/40 px-8 py-3.5 text-xs uppercase tracking-[0.32em] text-gold touch-manipulation hover:bg-gold/10 sm:px-10 sm:py-5 sm:tracking-[0.35em]">
              WhatsApp Us
            </a>
          </div>
          <div className="mt-6 flex justify-center md:mt-8">
            <SocialNavLinks variant="inline" />
          </div>
          <a href={`tel:${PHONE}`} className="mt-6 inline-block text-sm text-muted-foreground hover:text-gold md:mt-8">
            or call <span className="text-gold">+27 67 061 5423</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
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
          </div>
        </div>
      </footer>

      <MobileBookingBar />
    </div>
  );
}
