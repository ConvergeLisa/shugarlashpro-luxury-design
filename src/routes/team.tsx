import { createFileRoute, Link } from "@tanstack/react-router";
import bongi from "@/assets/founder-bongi.jpg";

export const Route = createFileRoute("/team")({
  component: TeamPage,
  head: () => ({
    meta: [
      { title: "Meet the Team — SHUGARLASHPRO" },
      { name: "description", content: "Meet Bongi — CEO & Founder of Shugarlashpro — and the magic makers behind Sandton's most coveted lash studio." },
      { property: "og:title", content: "Meet the Team — SHUGARLASHPRO" },
      { property: "og:description", content: "Magic makers, industry experts and the beauty brigade behind Shugarlashpro." },
    ],
  }),
});

const BOOK_URL = "https://www.fresha.com/en-GB/providers/shugarlashpro-the-famous-lash-professionals-y53wnwjy?share=true&pId=2578697&routeCtx=en-GB&dppub=true&menu=true";
const WHATSAPP = "https://wa.me/27670615423?text=Hi%20Bongi%2C%20I%27d%20like%20to%20book%20a%20lash%20appointment.";

function TeamPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* NAV */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-xl tracking-[0.4em] gold-foil">SLP</span>
          </Link>
          <div className="hidden items-center gap-10 text-xs uppercase tracking-[0.3em] text-muted-foreground md:flex">
            <Link to="/" className="transition hover:text-gold">Home</Link>
            <Link to="/" hash="services" className="transition hover:text-gold">Services</Link>
            <Link to="/" hash="gallery" className="transition hover:text-gold">Gallery</Link>
            <Link to="/team" className="text-gold transition">Team</Link>
            <Link to="/" hash="book" className="transition hover:text-gold">Book</Link>
          </div>
          <a href={BOOK_URL} target="_blank" rel="noreferrer"
             className="hidden rounded-full border border-[var(--gold)]/40 bg-background/40 px-5 py-2 text-[11px] uppercase tracking-[0.3em] text-gold backdrop-blur transition hover:bg-gold hover:text-primary-foreground md:inline-block">
            Book Now
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative pt-40 pb-16">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-20 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
               style={{ background: "radial-gradient(circle, oklch(0.82 0.13 85 / 0.3), transparent 60%)" }} />
        </div>
        <div className="mx-auto max-w-5xl px-6 text-center animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-gold">
            <span className="h-px w-10 bg-gold" /> The House <span className="h-px w-10 bg-gold" />
          </div>
          <h1 className="font-display text-4xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Meet the magic makers,
            <br />
            <span className="italic gold-foil">industry experts</span>
            <br />
            & beauty brigade.
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            The hands, eyes and obsessive standards behind every Shugarlashpro set — led by founder Bongi from our private Sandton studio.
          </p>
        </div>
      </section>

      {/* FOUNDER CARD */}
      <section className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[auto_1fr]">
          {/* Portrait */}
          <div className="relative mx-auto animate-fade-up">
            <div className="absolute -inset-10 rounded-full opacity-60 blur-3xl"
                 style={{ background: "radial-gradient(circle, oklch(0.82 0.13 85 / 0.45), transparent 70%)" }} />
            <div className="relative h-[320px] w-[320px] overflow-hidden rounded-full border-2 ring-gold md:h-[420px] md:w-[420px]"
                 style={{ borderColor: "oklch(0.82 0.13 85 / 0.5)", boxShadow: "var(--shadow-gold)" }}>
              <img
                src={bongi}
                alt="Bongi — CEO & Founder of Shugarlashpro"
                width={420}
                height={420}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="animate-fade-up" style={{ animationDelay: "120ms" }}>
            <div className="mb-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-gold">
              <span className="h-px w-10 bg-gold" /> CEO & Founder
            </div>
            <h2 className="font-display text-6xl leading-none tracking-tight md:text-7xl">
              <span className="gold-foil">Bongi</span>
            </h2>
            <p className="mt-2 text-sm uppercase tracking-[0.35em] text-muted-foreground">
              The Famous Lash Professional
            </p>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                CEO & Founder of Shugarlashpro, Bongi is a trailblazer and trendsetter with over <span className="text-foreground">12 years of experience</span> in the industry. A true visionary, she has singlehandedly grown the brand into a global leader in lash products, techniques and education.
              </p>
              <p>
                Her artistry, attention to detail and innovation set her apart — making her the <span className="text-foreground">first lash artist in South Africa to go viral for Brow Extensions</span>. Her passion for excellence, commitment to her staff and dedication to her clients have made her an industry leader and pioneer.
              </p>
              <p>
                Bongi is proof that hard work and perseverance pay off. She is a mentor, a friend and a leader — admired and revered by her staff and clients alike. Her work speaks for itself.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[var(--gold)]/15 pt-8">
              {[
                ["12+", "Years of craft"],
                ["1st", "Viral SA brows"],
                ["1:1", "Private studio"],
              ].map(([k, v]) => (
                <div key={v}>
                  <div className="font-display text-3xl gold-foil">{k}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{v}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={BOOK_URL} target="_blank" rel="noreferrer"
                 className="inline-flex items-center justify-center rounded-full px-8 py-4 text-xs uppercase tracking-[0.35em] text-primary-foreground"
                 style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}>
                Book with Bongi →
              </a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer"
                 className="inline-flex items-center justify-center rounded-full border border-[var(--gold)]/40 px-8 py-4 text-xs uppercase tracking-[0.35em] text-gold hover:bg-gold/10">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* THE BRIGADE */}
      <section className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-gold">
            <span className="h-px w-10 bg-gold" /> The Brigade <span className="h-px w-10 bg-gold" />
          </div>
          <h2 className="font-display text-4xl leading-none md:text-5xl">
            Trained, mentored & <span className="italic gold-foil">handpicked</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {[1, 2].map((i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="relative h-[220px] w-[220px] overflow-hidden rounded-full border border-[var(--gold)]/30 bg-onyx">
                <div className="absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                  Coming soon
                </div>
              </div>
              <div className="mt-6 font-display text-2xl text-foreground">— —</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Lash Artist</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 -z-10 opacity-50"
             style={{ background: "radial-gradient(ellipse at center, oklch(0.82 0.13 85 / 0.2), transparent 60%)" }} />
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-5xl leading-[0.95] md:text-7xl">
            Sit in the <span className="italic gold-foil">founder's</span> chair.
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={BOOK_URL} target="_blank" rel="noreferrer"
               className="inline-flex items-center justify-center rounded-full px-10 py-5 text-xs uppercase tracking-[0.35em] text-primary-foreground"
               style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}>
              Book Online →
            </a>
            <Link to="/" className="inline-flex items-center justify-center rounded-full border border-[var(--gold)]/40 px-10 py-5 text-xs uppercase tracking-[0.35em] text-gold hover:bg-gold/10">
              ← Back home
            </Link>
          </div>
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
