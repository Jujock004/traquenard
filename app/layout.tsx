import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProvider from "@/components/ScrollProvider";

const avantGarde = localFont({
  src: [
    {
      path: "../public/fonts/ITCAvantGardeStd-Bk.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/ITCAvantGardeStd-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-avantgarde",
});

export const metadata: Metadata = {
  title: "Do You Know Traquenard",
  description:
    "DYKT is a collective of DJs based in Toulouse, France. We are dedicated to explorng the intersections of sound, aesthetics, and chaos through our work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${avantGarde.variable} ${avantGarde.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ScrollProvider>
          <Header />
          {children}
          <Footer />
        </ScrollProvider>
      </body>
    </html>
  );
}
