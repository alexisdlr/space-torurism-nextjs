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
    <html lang="en" className={`${fontVariables} h-full antialiased`}>
      <body className="flex min-h-dvh flex-col font-barlow">
        <Navbar />
        <main className="relative flex min-h-0 flex-1 flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
