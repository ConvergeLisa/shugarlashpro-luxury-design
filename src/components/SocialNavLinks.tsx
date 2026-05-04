import { Facebook, Instagram } from "lucide-react";
import { FACEBOOK_URL, INSTAGRAM_URL } from "@/constants/site-links";

type Props = { variant?: "nav" | "footer" | "inline" };

export function SocialNavLinks({ variant = "inline" }: Props) {
  const iconClass =
    variant === "footer"
      ? "h-[18px] w-[18px] text-gold opacity-90 transition hover:opacity-100"
      : "h-[17px] w-[17px] text-gold transition hover:text-gold/80";

  const wrapClass =
    variant === "nav"
      ? "flex items-center gap-1"
      : variant === "footer"
        ? "flex items-center justify-center gap-5"
        : "flex items-center justify-center gap-4";

  return (
    <div className={wrapClass}>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="touch-manipulation rounded-md p-2 text-gold hover:bg-gold/10 md:p-1.5"
        aria-label="ShugarLashPro on Instagram"
      >
        <Instagram className={iconClass} aria-hidden />
      </a>
      <a
        href={FACEBOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="touch-manipulation rounded-md p-2 text-gold hover:bg-gold/10 md:p-1.5"
        aria-label="ShugarLashPro on Facebook"
      >
        <Facebook className={iconClass} aria-hidden />
      </a>
    </div>
  );
}
