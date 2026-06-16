import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";
import Navbar from "@/components/shared/navbar";

export const metadata: Metadata = {
  title: {
    template: "%s | Space Tourism",
    default: "Space Tourism",
  },
  description: "Space Tourism",
  authors: [{ name: "Alexis De Leon", url: "https://github.com/alexisdlr/" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontVariables} h-dvh overflow-x-hidden antialiased`}>
      <body className="flex h-dvh flex-col overflow-x-hidden font-barlow">
        <Navbar />
        <main className="relative flex min-h-0 flex-1 flex-col overflow-x-hidden overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
