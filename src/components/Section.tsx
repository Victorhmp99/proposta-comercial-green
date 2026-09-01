import type { ReactNode } from "react";
import { clsx } from "clsx";
import {
  SlideUpPanel,
  ZoomInPanel,
  ZoomOutPanel,
  SuctionPanel,
  SlideLeftPanel,
  SlideRightPanel,
} from "./Reveal";

const TONE_BG: Record<string, string> = {
  forest: "",
  black: "bg-[#060a08]",
  vivid: "bg-gradient-to-br from-mint via-[#1fae6b] to-gold",
  "vivid-gold": "bg-gradient-to-br from-gold via-[#c79a3a] to-[#1b3a2a]",
};

const TRANSITION_WRAPPER = {
  none: null,
  panel: SlideUpPanel,
  zoomIn: ZoomInPanel,
  zoomOut: ZoomOutPanel,
  suction: SuctionPanel,
  slideLeft: SlideLeftPanel,
  slideRight: SlideRightPanel,
} as const;

export function Section({
  id,
  children,
  className,
  dark = false,
  tone,
  panel = false,
  transition = "none",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
  tone?: "forest" | "black" | "vivid" | "vivid-gold";
  panel?: boolean;
  transition?: "none" | "panel" | "zoomIn" | "zoomOut" | "suction" | "slideLeft" | "slideRight";
}) {
  const resolvedTone = tone ?? (dark ? "black" : "forest");
  const resolvedTransition = panel ? "panel" : transition;
  const Wrapper = TRANSITION_WRAPPER[resolvedTransition];

  const content = (
    <section
      id={id}
      className={clsx(
        "relative w-full px-6 py-24 sm:py-32 overflow-hidden",
        TONE_BG[resolvedTone],
        resolvedTransition === "panel" &&
          "rounded-t-[2.5rem] shadow-[0_-30px_60px_-25px_rgba(0,0,0,0.55)]",
        className
      )}
    >
      <div className="mx-auto max-w-5xl text-center">{children}</div>
    </section>
  );

  return Wrapper ? <Wrapper>{content}</Wrapper> : content;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-body text-xs sm:text-sm uppercase tracking-[0.25em] text-mint mb-4 font-semibold">
      {children}
    </p>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="text-gradient-gold font-body font-semibold text-lg sm:text-xl mt-6 leading-relaxed">
      {children}
    </p>
  );
}
