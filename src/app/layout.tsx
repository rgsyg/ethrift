import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Wrapper from "@/components/wrapper";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollTop from "@/components/scroll-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "eThrift - An Online Thrift Shop",
  description: "Get your stuff for cheap prices!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary`}
      >
        <Header />
        <Wrapper>{children}</Wrapper>
        <Footer />
        <ScrollTop />
      </body>
    </html>
  );
}
