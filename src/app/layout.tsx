import { Provider } from "jotai";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Vocaliza",
    template: "%s | Vocaliza",
  },
  description:
    "Automatize chamadas com IA. Capture leads, ofereça suporte e otimize seu call center com eficiência e personalização.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${poppins.className} antialiased text-gray-800 bg-gray-100`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
