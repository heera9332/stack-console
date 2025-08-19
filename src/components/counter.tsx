// AutoCounter.tsx
"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

type Easing = "linear" | "easeOutCubic" | "easeInOutQuad";

export type AutoCounterProps = {
  from?: number;           // start value
  to: number;              // end value
  duration?: number;       // ms
  decimals?: number;       // fixed decimals
  prefix?: string;
  suffix?: string;
  easing?: Easing;
  separator?: boolean;     // 12,345
  startOnMount?: boolean;
  startOnView?: boolean;   // starts when visible
  viewMargin?: string;     // rootMargin for IntersectionObserver
  className?: string;
  onUpdate?: (v: number) => void;
  onComplete?: () => void;
  format?: (v: number) => string; // custom formatter overrides others
};

const easings: Record<Easing, (t: number) => number> = {
  linear: t => t,
  easeOutCubic: t => 1 - Math.pow(1 - t, 3),
  easeInOutQuad: t => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2),
};

export default function Counter({
  from = 0,
  to,
  duration = 1200,
  decimals = 0,
  prefix = "",
  suffix = "",
  easing = "easeOutCubic",
  separator = false,
  startOnMount = true,
  startOnView = false,
  viewMargin = "0px 0px -20% 0px",
  className,
  onUpdate,
  onComplete,
  format,
}: AutoCounterProps) {
  const nodeRef = useRef<HTMLSpanElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const [display, setDisplay] = useState(from);
  const [ready, setReady] = useState(!startOnView);

  // Observe visibility if requested
  useEffect(() => {
    if (!startOnView || !nodeRef.current) return;
    const el = nodeRef.current;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some(e => e.isIntersecting)) {
          setReady(true);
          io.disconnect();
        }
      },
      { root: null, rootMargin: viewMargin, threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [startOnView, viewMargin]);

  // Animator
  useEffect(() => {
    if (!ready || !startOnMount) return;
    startRef.current = null;

    const diff = to - from;
    const ease = easings[easing];

    const tick = (ts: number) => {
      if (startRef.current == null) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const t = Math.min(1, duration ? elapsed / duration : 1);
      const eased = ease(t);
      const val = from + diff * eased;

      setDisplay(val);
      onUpdate?.(val);

      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setDisplay(to);
        onUpdate?.(to);
        onComplete?.();
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, from, to, duration, easing, startOnMount]);

  const text = useMemo(() => {
    if (format) return prefix + format(display) + suffix;
    const fixed = Number(display).toFixed(decimals);
    if (!separator) return prefix + fixed + suffix;

    const [intPart, decPart] = fixed.split(".");
    const withSep = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return prefix + (decPart ? `${withSep}.${decPart}` : withSep) + suffix;
  }, [display, decimals, prefix, suffix, separator, format]);

  return (
    <span ref={nodeRef} className={className} aria-label={`${to}`}>
      {text}
    </span>
  );
}
