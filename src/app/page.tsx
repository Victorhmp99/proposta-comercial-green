import { Hero } from "@/components/Hero";
import {
  Problem,
  Compare,
  Cultivo,
  Anchor,
  Glossary,
  Plans,
  Imersao,
  Closing,
} from "@/components/Sections";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Problem />
      <Compare />
      <Cultivo />
      <Anchor />
      <Glossary />
      <Plans />
      <Imersao />
      <Closing />
      <footer className="border-t border-mint/10 px-6 py-10 text-center text-xs text-cream/40">
        Green Hub © 2026 — Hub de Soluções para Empresas · Treinamento Comercial
      </footer>
    </main>
  );
}
