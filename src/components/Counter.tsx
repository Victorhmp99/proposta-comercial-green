"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * Conta de 0 até o número contido em `value`, preservando
 * qualquer prefixo/sufixo do texto original (ex.: "93,2%", "2,5%", "R$ 45.000").
 */
export function Counter({
  value,
  className,
  duration = 1.6,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState<string>("");

  // separa o número do resto do texto
  const match = value.match(/^(\D*)([\d.,]+)(.*)$/);
  const prefix = match?.[1] ?? "";
  const numeric = match?.[2] ?? "";
  const suffix = match?.[3] ?? "";

  // detecta o formato brasileiro: "." é milhar, "," é decimal
  const decimals = numeric.includes(",") ? numeric.split(",")[1].length : 0;
  const target = parseFloat(numeric.replace(/\./g, "").replace(",", "."));
  const useThousands = numeric.includes(".");

  function format(n: number) {
    return n.toLocaleString("pt-BR", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
      useGrouping: useThousands || n >= 1000,
    });
  }

  useEffect(() => {
    if (!inView || !Number.isFinite(target)) {
      if (!Number.isFinite(target)) setDisplay(numeric);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const ms = duration * 1000;

    function tick(now: number) {
      const t = Math.min((now - start) / ms, 1);
      // easeOutExpo — rápido no começo, desacelera no fim
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setDisplay(format(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display || (Number.isFinite(target) ? format(0) : numeric)}
      {suffix}
    </span>
  );
}
