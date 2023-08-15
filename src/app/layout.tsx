import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif"],
  variable: "--font-montserrat",
});
const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: "BIFI",
  description:
    "Club of Business, Investing, Finance, & Innovation in the school Old Scona Academic",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${lato.className} ${montserrat.variable} bg-black text-white`}
      >
        <div className="w-full h-full max-w-screen-2xl mx-auto relative">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
