import type { Metadata } from "next";
import "./globals.css";
import { Istok_Web } from "next/font/google";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const istokWeb = Istok_Web({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "BSBL N DIGITAL",
  description: "Providing the Best Services & IT Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={istokWeb.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
