"use client";

import { useState } from "react";
import { X, Save, Loader2, Check } from "lucide-react";
import { useContent } from "@/content/ContentContext";
import type { SiteContent } from "@/content/defaultContent";
import { saveContentToGithub } from "@/lib/github";
import { Field, TextArea, ListField, RowsField, Section } from "./fields";

export function EditorPanel({ onClose }: { onClose: () => void }) {
  const { content, setContent } = useContent();
  const [draft, setDraft] = useState<SiteContent>(() => JSON.parse(JSON.stringify(content)));
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [error, setError] = useState("");

  function patch<K extends keyof SiteContent>(key: K, value: SiteContent[K]) {
    setDraft((d) => ({ ...d, [key]: value }));
  }

  async function handleSave() {
    setStatus("saving");
    setError("");
    const res = await saveContentToGithub(draft);
    if (res.ok) {
      setContent(draft);
      setStatus("saved");
      setTimeout(() => setStatus("idle"), 2500);
    } else {
      setStatus("error");
      setError(res.error ?? "Erro desconhecido.");
    }
  }

  const d = draft;

  return (
    <div className="fixed inset-0 z-[200] flex justify-end bg-black/60" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex h-full w-full max-w-xl flex-col bg-[#101b32] shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div>
            <p className="font-display text-lg text-cream">Editar conteúdo da proposta</p>
            <p className="text-xs text-cream/50">
              Mude qualquer texto ou valor abaixo e clique em Salvar. Atualiza pra todo mundo em ~1 min.
            </p>
          </div>
          <button onClick={onClose} className="rounded-full p-1.5 text-cream/60 hover:bg-white/10 hover:text-cream">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          <Section title="Capa (Hero)">
            <Field label="Tag do topo" value={d.hero.tag} onChange={(v) => patch("hero", { ...d.hero, tag: v })} />
            <Field label="Título (marca)" value={d.hero.title} onChange={(v) => patch("hero", { ...d.hero, title: v })} />
            <Field label="Subtítulo" value={d.hero.subtitle} onChange={(v) => patch("hero", { ...d.hero, subtitle: v })} />
            <Field label="Headline — linha 1" value={d.hero.headlinePlain} onChange={(v) => patch("hero", { ...d.hero, headlinePlain: v })} />
            <Field label="Headline — linha 2 (verde)" value={d.hero.headlineQuestion} onChange={(v) => patch("hero", { ...d.hero, headlineQuestion: v })} />
            <TextArea label="Texto de apoio" rows={3} value={d.hero.lede} onChange={(v) => patch("hero", { ...d.hero, lede: v })} />
            {d.hero.stats.map((s, i) => (
              <div key={i} className="flex gap-2">
                <input
                  value={s.value}
                  onChange={(e) => {
                    const stats = [...d.hero.stats];
                    stats[i] = { ...stats[i], value: e.target.value };
                    patch("hero", { ...d.hero, stats });
                  }}
                  className="w-24 rounded-md border border-white/15 bg-black/30 px-2 py-1.5 text-sm text-cream outline-none focus:border-mint/60"
                />
                <input
                  value={s.label}
                  onChange={(e) => {
                    const stats = [...d.hero.stats];
                    stats[i] = { ...stats[i], label: e.target.value };
                    patch("hero", { ...d.hero, stats });
                  }}
                  className="flex-1 rounded-md border border-white/15 bg-black/30 px-2 py-1.5 text-sm text-cream outline-none focus:border-mint/60"
                />
              </div>
            ))}
          </Section>

          <Section title="O Problema">
            <Field label="Título" value={d.problem.heading} onChange={(v) => patch("problem", { ...d.problem, heading: v })} />
            <TextArea label="Introdução" rows={3} value={d.problem.intro} onChange={(v) => patch("problem", { ...d.problem, intro: v })} />
            {d.problem.stats.map((s, i) => (
              <div key={i} className="flex gap-2">
                <input
                  value={s.num}
                  onChange={(e) => {
                    const stats = [...d.problem.stats];
                    stats[i] = { ...stats[i], num: e.target.value };
                    patch("problem", { ...d.problem, stats });
                  }}
                  className="w-14 rounded-md border border-white/15 bg-black/30 px-2 py-1.5 text-sm text-cream outline-none focus:border-mint/60"
                />
                <input
                  value={s.suffix}
                  onChange={(e) => {
                    const stats = [...d.problem.stats];
                    stats[i] = { ...stats[i], suffix: e.target.value };
                    patch("problem", { ...d.problem, stats });
                  }}
                  className="w-12 rounded-md border border-white/15 bg-black/30 px-2 py-1.5 text-sm text-cream outline-none focus:border-mint/60"
                />
                <input
                  value={s.text}
                  onChange={(e) => {
                    const stats = [...d.problem.stats];
                    stats[i] = { ...stats[i], text: e.target.value };
                    patch("problem", { ...d.problem, stats });
                  }}
                  className="flex-1 rounded-md border border-white/15 bg-black/30 px-2 py-1.5 text-sm text-cream outline-none focus:border-mint/60"
                />
              </div>
            ))}
            <Field label="Frase final" value={d.problem.kicker} onChange={(v) => patch("problem", { ...d.problem, kicker: v })} />
          </Section>

          <Section title="Comercial forte × fraco">
            <Field label="Título" value={d.compare.heading} onChange={(v) => patch("compare", { ...d.compare, heading: v })} />
            <TextArea label="Introdução" rows={3} value={d.compare.intro} onChange={(v) => patch("compare", { ...d.compare, intro: v })} />
            {d.compare.rows.map((row, i) => (
              <div key={i} className="flex gap-2">
                <input
                  value={row.label}
                  onChange={(e) => {
                    const rows = [...d.compare.rows];
                    rows[i] = { ...rows[i], label: e.target.value };
                    patch("compare", { ...d.compare, rows });
                  }}
                  className="w-28 rounded-md border border-white/15 bg-black/30 px-2 py-1.5 text-sm text-cream outline-none focus:border-mint/60"
                />
                <input
                  value={row.weak}
                  onChange={(e) => {
                    const rows = [...d.compare.rows];
                    rows[i] = { ...rows[i], weak: e.target.value };
                    patch("compare", { ...d.compare, rows });
                  }}
                  className="flex-1 rounded-md border border-white/15 bg-black/30 px-2 py-1.5 text-sm text-cream outline-none focus:border-mint/60"
                />
                <input
                  value={row.strong}
                  onChange={(e) => {
                    const rows = [...d.compare.rows];
                    rows[i] = { ...rows[i], strong: e.target.value };
                    patch("compare", { ...d.compare, rows });
                  }}
                  className="flex-1 rounded-md border border-white/15 bg-black/30 px-2 py-1.5 text-sm text-cream outline-none focus:border-mint/60"
                />
              </div>
            ))}
          </Section>

          <Section title="Cultivo (Método Floresta)">
            <Field label="Título" value={d.cultivo.heading} onChange={(v) => patch("cultivo", { ...d.cultivo, heading: v })} />
            <Field label="Título do quadro" value={d.cultivo.visualTitle} onChange={(v) => patch("cultivo", { ...d.cultivo, visualTitle: v })} />
            <Field label="Subtítulo do texto" value={d.cultivo.textHeading} onChange={(v) => patch("cultivo", { ...d.cultivo, textHeading: v })} />
            <TextArea label="Parágrafo 1" rows={3} value={d.cultivo.paragraph1} onChange={(v) => patch("cultivo", { ...d.cultivo, paragraph1: v })} />
            <TextArea label="Parágrafo 2" rows={3} value={d.cultivo.paragraph2} onChange={(v) => patch("cultivo", { ...d.cultivo, paragraph2: v })} />
            <Field label="Citação" value={d.cultivo.quote} onChange={(v) => patch("cultivo", { ...d.cultivo, quote: v })} />
          </Section>

          <Section title="Quanto custaria sozinho">
            <Field label="Título" value={d.anchor.heading} onChange={(v) => patch("anchor", { ...d.anchor, heading: v })} />
            <RowsField label="Itens de custo" rows={d.anchor.rows} onChange={(v) => patch("anchor", { ...d.anchor, rows: v })} />
            <Field label="Total — rótulo" value={d.anchor.total.label} onChange={(v) => patch("anchor", { ...d.anchor, total: { ...d.anchor.total, label: v } })} />
            <Field label="Total — valor" value={d.anchor.total.value} onChange={(v) => patch("anchor", { ...d.anchor, total: { ...d.anchor.total, value: v } })} />
            <TextArea label="Frase final" rows={3} value={d.anchor.kicker} onChange={(v) => patch("anchor", { ...d.anchor, kicker: v })} />
          </Section>

          <Section title="Planos">
            <Field label="Título" value={d.plans.heading} onChange={(v) => patch("plans", { ...d.plans, heading: v })} />
            <Field label="Botão — mostrar" value={d.plans.revealLabel} onChange={(v) => patch("plans", { ...d.plans, revealLabel: v })} />
            <Field label="Botão — ocultar" value={d.plans.hideLabel} onChange={(v) => patch("plans", { ...d.plans, hideLabel: v })} />
            {d.plans.items.map((plan, i) => (
              <div key={i} className="rounded-lg border border-white/10 p-3 space-y-2">
                <Field label={`Plano ${i + 1} — nome`} value={plan.name} onChange={(v) => {
                  const items = [...d.plans.items]; items[i] = { ...items[i], name: v }; patch("plans", { ...d.plans, items });
                }} />
                <Field label="Descrição" value={plan.description} onChange={(v) => {
                  const items = [...d.plans.items]; items[i] = { ...items[i], description: v }; patch("plans", { ...d.plans, items });
                }} />
                <Field label="Implementação" value={plan.setup} onChange={(v) => {
                  const items = [...d.plans.items]; items[i] = { ...items[i], setup: v }; patch("plans", { ...d.plans, items });
                }} />
                <Field label="Mensalidade" value={plan.price} onChange={(v) => {
                  const items = [...d.plans.items]; items[i] = { ...items[i], price: v }; patch("plans", { ...d.plans, items });
                }} />
                <ListField label="Itens inclusos" items={plan.features} onChange={(v) => {
                  const items = [...d.plans.items]; items[i] = { ...items[i], features: v }; patch("plans", { ...d.plans, items });
                }} />
              </div>
            ))}
          </Section>

          <Section title="Imersão de 1 dia">
            <Field label="Título" value={d.imersao.heading} onChange={(v) => patch("imersao", { ...d.imersao, heading: v })} />
            <TextArea label="Introdução" rows={3} value={d.imersao.intro} onChange={(v) => patch("imersao", { ...d.imersao, intro: v })} />
            <Field label="Botão — mostrar" value={d.imersao.revealLabel} onChange={(v) => patch("imersao", { ...d.imersao, revealLabel: v })} />
            <Field label="Botão — ocultar" value={d.imersao.hideLabel} onChange={(v) => patch("imersao", { ...d.imersao, hideLabel: v })} />
            <Field label="Preço de tabela" value={d.imersao.tablePrice} onChange={(v) => patch("imersao", { ...d.imersao, tablePrice: v })} />
            <Field label="Investimento de fechamento" value={d.imersao.closingPrice} onChange={(v) => patch("imersao", { ...d.imersao, closingPrice: v })} />
            {d.imersao.steps.map((s, i) => (
              <div key={i} className="rounded-lg border border-white/10 p-3 space-y-2">
                <Field label={`Etapa ${i + 1} — momento`} value={s.tag} onChange={(v) => {
                  const steps = [...d.imersao.steps]; steps[i] = { ...steps[i], tag: v }; patch("imersao", { ...d.imersao, steps });
                }} />
                <Field label="Título" value={s.title} onChange={(v) => {
                  const steps = [...d.imersao.steps]; steps[i] = { ...steps[i], title: v }; patch("imersao", { ...d.imersao, steps });
                }} />
                <Field label="Descrição" value={s.text} onChange={(v) => {
                  const steps = [...d.imersao.steps]; steps[i] = { ...steps[i], text: v }; patch("imersao", { ...d.imersao, steps });
                }} />
              </div>
            ))}
          </Section>

          <Section title="Fechamento">
            <Field label="Título (verde)" value={d.closing.titleGold} onChange={(v) => patch("closing", { ...d.closing, titleGold: v })} />
            <Field label="Linha 1" value={d.closing.line1} onChange={(v) => patch("closing", { ...d.closing, line1: v })} />
            <Field label="Linha 2 (destaque)" value={d.closing.line2} onChange={(v) => patch("closing", { ...d.closing, line2: v })} />
          </Section>
        </div>

        <div className="border-t border-white/10 px-5 py-4">
          {status === "error" && <p className="mb-2 text-xs text-red-300">{error}</p>}
          <button
            onClick={handleSave}
            disabled={status === "saving"}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-mint py-2.5 font-semibold text-[#0f172a] hover:bg-mint/90 disabled:opacity-60"
          >
            {status === "saving" && <Loader2 className="h-4 w-4 animate-spin" />}
            {status === "saved" && <Check className="h-4 w-4" />}
            {status === "idle" && <Save className="h-4 w-4" />}
            {status === "saving" ? "Salvando..." : status === "saved" ? "Salvo! Atualiza em ~1 min" : "Salvar alterações"}
          </button>
        </div>
      </div>
    </div>
  );
}
