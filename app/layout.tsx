import type { Metadata } from "next";
import { AppShell } from "@/components/AppShell";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Capstone Ready", template: "%s · Capstone Ready" },
  description: "A structured learning and practice platform for Australian electrical apprentices.",
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-AU"><body><AppShell>{children}</AppShell></body></html>;
}
