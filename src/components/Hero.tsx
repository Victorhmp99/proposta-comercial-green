"use client";

import { motion } from "framer-motion";
import { useContent } from "@/content/ContentContext";

export function Hero() {
  const { content } = useContent();
  const c = content.hero;

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden px-6 py-24 flex items-center">
      {/* fundo com brilho radial */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1100px 520px at 18% -10%, #1c2c4f 0%, #0f172a 55%)",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-noise opacity-60" />

      {/* orbes verdes suaves */}
      <motion.div
        className="absolute -z-10 rounded-full blur-3xl"
        style={{
          width: 380,
          height: 380,
          top: "10%",
          right: "6%",
          background: "radial-gradient(circle, rgba(34,197,94,0.22), transparent 70%)",
        }}
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -z-10 rounded-full blur-3xl"
        style={{
          width: 300,
          height: 300,
          bottom: "8%",
          left: "4%",
          background: "radial-gradient(circle, rgba(34,197,94,0.14), transparent 70%)",
        }}
        animate={{ y: [0, 26, 0], x: [0, -18, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-5xl w-full relative z-10">
        {/* tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-mint/35 bg-mint/10 px-4 py-2 text-xs sm:text-sm font-semibold text-mint mb-8"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-mint" />
          {c.tag}
        </motion.div>

        {/* marca */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-sm tracking-[0.35em] text-cream/40 mb-6"
        >
          {c.title} · {c.subtitle.toUpperCase()}
        </motion.p>

        {/* headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="font-display text-4xl sm:text-6xl lg:text-7xl text-cream leading-[1.05] max-w-4xl"
        >
          {c.headlinePlain}
          <br />
          <span className="text-gradient-gold">{c.headlineQuestion}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-7 max-w-xl text-lg text-silver-green leading-relaxed"
        >
          {c.lede}
        </motion.p>

        {/* estatísticas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-14 pt-9 border-t border-white/10 grid sm:grid-cols-3 gap-8"
        >
          {c.stats.map((s) => (
            <div key={s.value} className="max-w-[240px]">
              <p className="font-display text-3xl text-cream mb-1">{s.value}</p>
              <p className="text-sm text-silver-green/70 leading-snug">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
