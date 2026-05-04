import { useEffect, useId, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { BOOK_URL } from "@/constants/site-links";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/pricing", label: "Pricing" },
  { to: "/team", label: "Team" },
  { to: "/comparison", label: "Comparison" },
] as const;

export function MobileNavMenu() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="relative z-[60] md:hidden">
      <button
        type="button"
        className={cn(
          "flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-full border transition-colors duration-300",
          "border-[var(--gold)]/35 bg-background/55 text-foreground backdrop-blur-sm",
          "hover:border-[var(--gold)]/60 hover:bg-[var(--gold)]/12 hover:text-[var(--gold)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        )}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label="Open menu"
        onClick={() => setOpen(true)}
      >
        <Menu className="h-[22px] w-[22px]" strokeWidth={1.35} aria-hidden />
      </button>

      {/* Overlay + panel: slide from top, premium black */}
      <div
        className={cn(
          "fixed inset-0 z-[190] md:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <button
          type="button"
          tabIndex={-1}
          aria-label="Close menu"
          className={cn(
            "absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-500 ease-out",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={close}
        />

        <div
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className={cn(
            "absolute inset-0 flex flex-col bg-[#000000] text-white shadow-[0_24px_80px_rgba(0,0,0,0.65)] transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform",
            open ? "translate-y-0 opacity-100" : "-translate-y-[108%] opacity-95",
          )}
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/35 to-transparent"
            aria-hidden
          />

          <div
            className="flex shrink-0 items-center justify-between border-b border-white/[0.07] px-5 pb-4 pt-[max(1rem,env(safe-area-inset-top))] sm:px-6"
          >
            <span className="font-display text-[10px] uppercase tracking-[0.42em] text-[var(--gold)]">Navigate</span>
            <button
              type="button"
              className="flex h-10 w-10 touch-manipulation items-center justify-center rounded-full border border-white/12 text-white transition-colors hover:border-[var(--gold)]/40 hover:text-[var(--gold)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]/45"
              aria-label="Close menu"
              onClick={close}
            >
              <X className="h-5 w-5" strokeWidth={1.35} />
            </button>
          </div>

          <nav className="flex min-h-0 flex-1 flex-col justify-center gap-1 px-6 sm:px-10">
            {NAV_LINKS.map(({ to, label }, i) => {
              const active = pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  onClick={close}
                  className={cn(
                    "group relative border-b border-white/[0.06] py-5 text-[13px] font-medium uppercase tracking-[0.28em] transition-colors duration-300 last:border-b-0 sm:py-6 sm:text-sm sm:tracking-[0.32em]",
                    active ? "text-[var(--gold)]" : "text-white/90 hover:text-[var(--gold)]",
                  )}
                  style={{
                    transitionDelay: open ? `${80 + i * 45}ms` : "0ms",
                  }}
                >
                  <span className="absolute left-0 top-1/2 h-px w-0 -translate-y-1/2 bg-[var(--gold)] transition-all duration-300 group-hover:w-6" />
                  <span className="pl-0 transition-[padding] duration-300 group-hover:pl-8">{label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="shrink-0 border-t border-white/[0.07] px-6 py-6 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:px-10">
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noreferrer"
              onClick={close}
              className="flex min-h-[52px] w-full items-center justify-center rounded-full text-xs font-semibold uppercase tracking-[0.32em] text-primary-foreground transition-[transform,box-shadow] duration-300 hover:scale-[1.01] active:scale-[0.99]"
              style={{
                background: "var(--gradient-gold)",
                boxShadow: "var(--shadow-gold)",
              }}
            >
              Book
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
