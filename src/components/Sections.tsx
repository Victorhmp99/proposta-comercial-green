"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, RevealStagger, staggerItem } from "./Reveal";
import { Section, Eyebrow, Kicker } from "./Section";
import { useContent } from "@/content/ContentContext";
import { CheckCircle2, X, Eye, EyeOff } from "lucide-react";

/* ---------- botão de revelar valores ---------- */
function RevealButton({
  revealed,
  onClick,
  showLabel,
  hideLabel,
}: {
  revealed: boolean;
  onClick: () => void;
  showLabel: string;
  hideLabel: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-full bg-mint px-7 py-3.5 text-sm font-bold text-[#0f172a] transition hover:bg-mint/90 shadow-[0_0_40px_-10px_rgba(34,197,94,0.7)]"
    >
      {revealed ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      {revealed ? hideLabel : showLabel}
    </button>
  );
}

/* ---------- 2. O PROBLEMA ---------- */
export function Problem() {
  const { content } = useContent();
  const c = content.problem;

  return (
    <Section id="problema" tone="black" panel>
      <Reveal>
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h2 className="text-3xl sm:text-5xl text-cream max-w-3xl leading-tight">{c.heading}</h2>
      </Reveal>

      <Reveal delay={0.08}>
        <p className="mt-6 max-w-2xl text-silver-green/80 leading-relaxed">{c.intro}</p>
      </Reveal>

      <RevealStagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
        {c.stats.map((s) => (
          <motion.div key={s.num + s.suffix} variants={staggerItem} className="bg-[#0f172a] p-7">
            <p className="font-display text-5xl text-cream leading-none">
              {s.num}
              <span className="text-mint">{s.suffix}</span>
            </p>
            <p className="mt-4 text-sm text-silver-green/75 leading-snug">{s.text}</p>
            <p className="mt-3 text-xs text-silver-green/35">{s.src}</p>
          </motion.div>
        ))}
      </RevealStagger>

      <Reveal delay={0.1}>
        <Kicker>{c.kicker}</Kicker>
      </Reveal>
    </Section>
  );
}

/* ---------- 3. FORTE × FRACO ---------- */
export function Compare() {
  const { content } = useContent();
  const c = content.compare;

  return (
    <Section id="comparativo" tone="forest" panel>
      <Reveal>
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h2 className="text-3xl sm:text-5xl text-cream max-w-3xl leading-tight">{c.heading}</h2>
      </Reveal>

      <Reveal delay={0.08}>
        <p className="mt-6 max-w-2xl text-silver-green/80 leading-relaxed">{c.intro}</p>
      </Reveal>

      <Reveal delay={0.12} className="mt-12">
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <div className="min-w-[640px]">
            {/* cabeçalho */}
            <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-black/40">
              <div className="px-5 py-4" />
              <div className="px-5 py-4 text-sm font-bold text-red-400 flex items-center gap-2">
                <X className="h-4 w-4" />
                {c.labelWeak}
              </div>
              <div className="px-5 py-4 text-sm font-bold text-mint flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                {c.labelStrong}
              </div>
            </div>
            {/* linhas */}
            {c.rows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-[1.2fr_1fr_1fr] text-sm ${
                  i < c.rows.length - 1 ? "border-b border-white/10" : ""
                }`}
              >
                <div className="px-5 py-4 text-silver-green/60 bg-black/20">{row.label}</div>
                <div className="px-5 py-4 text-cream/70 bg-red-500/5">{row.weak}</div>
                <div className="px-5 py-4 text-cream/90 bg-mint/8">{row.strong}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------- 4. CULTIVO ---------- */
export function Cultivo() {
  const { content } = useContent();
  const c = content.cultivo;

  return (
    <Section id="cultivo" tone="black" panel>
      <Reveal>
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h2 className="text-3xl sm:text-5xl text-cream max-w-3xl leading-tight">{c.heading}</h2>
      </Reveal>

      <div className="mt-14 grid lg:grid-cols-2 gap-12 items-start">
        {/* visual do método */}
        <Reveal delay={0.08}>
          <div className="rounded-2xl border border-white/10 bg-forest/60 p-8">
            <p className="text-xs uppercase tracking-widest text-silver-green/40 mb-2">
              Método Floresta
            </p>
            <h3 className="font-display text-2xl text-cream mb-7">{c.visualTitle}</h3>
            <div className="flex flex-col">
              {c.steps.map((s) => (
                <div
                  key={s.num}
                  className={`flex gap-4 py-4 border-t border-white/10 text-sm ${
                    s.active ? "text-cream font-semibold" : "text-silver-green/60"
                  }`}
                >
                  <span
                    className={`font-display font-bold min-w-[24px] ${
                      s.active ? "text-mint" : "text-mint/40"
                    }`}
                  >
                    {s.num}
                  </span>
                  {s.text}
                  {s.active && (
                    <span className="ml-auto text-[10px] uppercase tracking-widest text-mint shrink-0">
                      você está aqui
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* texto */}
        <Reveal delay={0.16}>
          <h3 className="text-2xl text-cream mb-5 leading-snug">{c.textHeading}</h3>
          <p className="text-silver-green/75 leading-relaxed mb-4">{c.paragraph1}</p>
          <p className="text-silver-green/75 leading-relaxed">{c.paragraph2}</p>
          <div className="mt-8 border-l-2 border-mint pl-5">
            <p className="font-display text-xl text-cream leading-snug">“{c.quote}”</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ---------- 5. ÂNCORA DE CUSTO ---------- */
export function Anchor() {
  const { content } = useContent();
  const c = content.anchor;

  return (
    <Section id="ancora" tone="forest" panel>
      <Reveal>
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h2 className="text-3xl sm:text-5xl text-cream max-w-3xl leading-tight">{c.heading}</h2>
      </Reveal>

      <RevealStagger className="mt-12 rounded-2xl border border-white/10 overflow-hidden">
        {c.rows.map((row, i) => (
          <motion.div
            key={row.label}
            variants={staggerItem}
            className={`flex items-center justify-between gap-6 px-6 py-5 bg-black/25 ${
              i < c.rows.length - 1 ? "border-b border-white/10" : ""
            }`}
          >
            <span className="text-sm text-cream/80">{row.label}</span>
            <span className="font-display text-sm text-silver-green/70 shrink-0">{row.value}</span>
          </motion.div>
        ))}
      </RevealStagger>

      <Reveal delay={0.1}>
        <div className="mt-1 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-mint/10 border border-mint/30 px-6 py-6">
          <span className="font-semibold text-cream">{c.total.label}</span>
          <span className="font-display text-2xl text-mint">{c.total.value}</span>
        </div>
      </Reveal>

      <Reveal delay={0.14}>
        <p className="mt-7 max-w-2xl text-sm text-silver-green/70 leading-relaxed">{c.kicker}</p>
      </Reveal>
    </Section>
  );
}

/* ---------- 6. PLANOS (valores borrados) ---------- */
export function Plans() {
  const { content } = useContent();
  const c = content.plans;
  const [revealed, setRevealed] = useState(false);

  return (
    <Section id="planos" tone="black" panel>
      <Reveal>
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h2 className="text-3xl sm:text-5xl text-cream max-w-2xl leading-tight">{c.heading}</h2>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-8">
          <RevealButton
            revealed={revealed}
            onClick={() => setRevealed((v) => !v)}
            showLabel={c.revealLabel}
            hideLabel={c.hideLabel}
          />
        </div>
      </Reveal>

      <RevealStagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {c.items.map((plan) => (
          <motion.div key={plan.name} variants={staggerItem}>
            <div
              className={`relative h-full rounded-2xl border p-6 flex flex-col ${
                plan.featured
                  ? "border-mint bg-mint/5 shadow-[0_0_0_1px_rgba(34,197,94,0.6)]"
                  : "border-white/10 bg-black/25"
              }`}
            >
              {plan.featured && plan.badge && (
                <span
                  style={{ borderRadius: 9999 }}
                  className="absolute -top-3 right-5 bg-mint px-3 py-1 text-[11px] font-bold text-[#0f172a]"
                >
                  {plan.badge}
                </span>
              )}
              <p className="font-display text-xl text-cream mb-2">{plan.name}</p>
              <p className="text-xs text-silver-green/60 leading-snug min-h-[48px]">
                {plan.description}
              </p>

              {/* preços — borrados até revelar */}
              <div className="mt-5 mb-5">
                <div className={revealed ? "" : "value-blur"}>
                  <p className="text-xs text-silver-green/60">
                    Implementação <span className="font-bold text-cream">{plan.setup}</span>
                  </p>
                  <p className="font-display text-2xl text-cream mt-1">
                    {plan.price}
                    <span className="text-xs font-normal text-silver-green/60"> /mês</span>
                  </p>
                </div>
              </div>

              <ul className="space-y-2.5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-silver-green/70">
                    <span className="text-mint font-bold shrink-0">+</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </RevealStagger>
    </Section>
  );
}

/* ---------- 7. IMERSÃO (valores borrados) ---------- */
export function Imersao() {
  const { content } = useContent();
  const c = content.imersao;
  const [revealed, setRevealed] = useState(false);

  return (
    <Section id="imersao" tone="forest" panel>
      <Reveal>
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h2 className="text-3xl sm:text-5xl text-cream max-w-3xl leading-tight">{c.heading}</h2>
      </Reveal>

      <Reveal delay={0.08}>
        <p className="mt-6 max-w-2xl text-silver-green/80 leading-relaxed">{c.intro}</p>
      </Reveal>

      <RevealStagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
        {c.steps.map((s) => (
          <motion.div key={s.title} variants={staggerItem} className="bg-[#101b32] p-6">
            <p className="text-xs font-bold text-mint">{s.tag}</p>
            <h4 className="font-display text-base text-cream mt-2">{s.title}</h4>
            <p className="text-xs text-silver-green/65 mt-2 leading-snug">{s.text}</p>
          </motion.div>
        ))}
      </RevealStagger>

      {/* investimento — borrado até revelar */}
      <Reveal delay={0.12}>
        <div className="mt-12 pt-9 border-t border-white/10">
          <RevealButton
            revealed={revealed}
            onClick={() => setRevealed((v) => !v)}
            showLabel={c.revealLabel}
            hideLabel={c.hideLabel}
          />
          <div className="mt-8 flex flex-wrap gap-12">
            <div className={revealed ? "" : "value-blur"}>
              <p className="text-xs font-semibold text-silver-green/50">{c.tableLabel}</p>
              <p className="font-display text-3xl text-cream/60 mt-1 line-through decoration-red-400/60">
                {c.tablePrice}
              </p>
            </div>
            <div className={revealed ? "" : "value-blur"}>
              <p className="text-xs font-semibold text-silver-green/50">{c.closingLabel}</p>
              <p className="font-display text-3xl text-mint mt-1">{c.closingPrice}</p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------- 8. FECHAMENTO ---------- */
export function Closing() {
  const { content } = useContent();
  const c = content.closing;

  return (
    <Section id="fechamento" tone="black" panel className="text-center">
      <Reveal>
        <h2 className="font-display text-4xl sm:text-6xl text-cream">
          {c.titlePlain}
          <span className="text-gradient-gold">{c.titleGold}</span>
        </h2>
        <p className="mt-8 text-xl text-silver-green/80">{c.line1}</p>
        <p className="text-xl text-cream font-semibold">{c.line2}</p>
      </Reveal>
    </Section>
  );
}
