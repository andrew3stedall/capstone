import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Capstone Ready — Australian Electrical Exam Prep",
  description: "A focused learning and practice platform for Australian electrical apprentices preparing for capstone assessment.",
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-AU"><body>{children}</body></html>;
}
