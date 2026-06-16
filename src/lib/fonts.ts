import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google";

export const bellefair = Bellefair({
  variable: "--font-bellefair-family",
  subsets: ["latin"],
  weight: "400",
});

export const barlow = Barlow({
  variable: "--font-barlow-family",
  subsets: ["latin"],
  weight: "400",
});

export const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed-family",
  subsets: ["latin"],
  weight: "400",
});

export const fontVariables = [
  bellefair.variable,
  barlow.variable,
  barlowCondensed.variable,
].join(" ");
