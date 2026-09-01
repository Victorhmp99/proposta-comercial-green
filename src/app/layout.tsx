import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { ContentProvider } from "@/content/ContentContext";
import { EditModeButton } from "@/components/editor/EditModeButton";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Green Hub — Treinamento Comercial",
  description:
    "Sua empresa já gera demanda. A pergunta é: seu comercial sabe colher? Diagnóstico, playbook, scripts, CRM e acompanhamento.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0E1F16] text-[#F4F7F5]">
        <ContentProvider>
          {children}
          <EditModeButton />
        </ContentProvider>
      </body>
    </html>
  );
}
