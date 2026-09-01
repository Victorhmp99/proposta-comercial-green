"use client";

import { motion } from "framer-motion";
import { useContent } from "@/content/ContentContext";
import { Counter } from "./Counter";

export function Hero() {
  const { content } = useContent();
  const c = content.hero;

  return (
    <section className="relative min-h-screen w-full overflow-hidden px-6 py-24 flex items-center justify-center text-center">
      {/* fundo em camadas */}
      <div
        className="absolute inset-0 -z-30"
        style={{
          background:
            "radial-gradient(1200px 700px at 50% -15%, #1e3a5f 0%, #16233f 42%, #0f172a 78%)",
        }}
      />
      {/* malha sutil */}
      <div
        className="absolute inset-0 -z-20 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 70% 55% at 50% 40%, #000 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 55% at 50% 40%, #000 30%, transparent 75%)",
        }}
      />
      {/* brilho verde central */}
      <motion.div
        className="absolute -z-10 rounded-full blur-[110px] pointer-events-none"
        style={{
          width: 620,
          height: 620,
          top: "8%",
          left: "50%",
          x: "-50%",
          background: "radial-gradient(circle, rgba(34,197,94,0.28), transparent 68%)",
        }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -z-10 rounded-full blur-[90px] pointer-events-none"
        style={{
          width: 380,
          height: 380,
          bottom: "6%",
          left: "12%",
          background: "radial-gradient(circle, rgba(34,197,94,0.14), transparent 70%)",
        }}
        animate={{ y: [0, -26, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -z-10 rounded-full blur-[90px] pointer-events-none"
        style={{
          width: 340,
          height: 340,
          top: "14%",
          right: "8%",
          background: "radial-gradient(circle, rgba(74,222,128,0.12), transparent 70%)",
        }}
        animate={{ y: [0, 24, 0] }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* vinheta inferior */}
      <div className="absolute inset-x-0 bottom-0 h-64 -z-10 bg-gradient-to-t from-[#0f172a] to-transparent" />

      <div className="mx-auto max-w-4xl w-full relative z-10 flex flex-col items-center">
        {/* headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[2.75rem] sm:text-6xl lg:text-7xl text-cream leading-[1.06] tracking-tight"
          style={{ textShadow: "0 2px 40px rgba(0,0,0,0.5)" }}
        >
          {c.headlinePlain}
          <br />
          <span className="text-gradient-gold">{c.headlineQuestion}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.22 }}
          className="mt-8 max-w-2xl text-lg sm:text-xl text-silver-green leading-relaxed"
        >
          {c.lede}
        </motion.p>

        {/* estatísticas */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.42 }}
          className="mt-16 pt-10 border-t border-white/12 grid sm:grid-cols-3 gap-10 w-full"
        >
          {c.stats.map((s) => (
            <div key={s.value} className="flex flex-col items-center">
              <p className="font-display text-4xl sm:text-5xl text-cream mb-2.5 tabular">
                <Counter value={s.value} />
              </p>
              <p className="text-[15px] text-silver-green/90 leading-snug max-w-[260px]">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
