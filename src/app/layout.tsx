import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";
import Navbar from "@/components/navbar";

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
      <body className="min-h-full flex flex-col font-barlow ">
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
      </body>
    </html>
  );
}
