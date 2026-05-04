import { BOOK_URL, WHATSAPP } from "@/constants/site-links";

export function MobileBookingBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--gold)]/25 bg-[#060606]/95 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "max(0.65rem, env(safe-area-inset-bottom, 0px))" }}
    >
      <div className="mx-auto flex max-w-lg gap-2 px-3 pt-2">
        <a
          href={BOOK_URL}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-[48px] flex-1 items-center justify-center rounded-full text-[11px] font-medium uppercase tracking-[0.28em] text-primary-foreground touch-manipulation"
          style={{ background: "var(--gradient-gold)", boxShadow: "0 4px 20px oklch(0.82 0.13 85 / 0.15)" }}
        >
          Book Online
        </a>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-[48px] flex-1 items-center justify-center rounded-full border border-[var(--gold)]/35 text-[11px] font-medium uppercase tracking-[0.28em] text-gold touch-manipulation hover:bg-gold/5"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
