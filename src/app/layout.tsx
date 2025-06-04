"use client";
import SetLayout from "@/component/SetLayout";
import { UserProvider } from "@/context/UserContext";
import localFont from "next/font/local";
import "./globals.css";
import styles from "./page.module.css";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${styles.page}`}>
        <div className={styles.containt}>
          <Script
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4238460264484843"
            strategy="beforeInteractive"
            crossOrigin="anonymous" />
          <UserProvider>
            <SetLayout children={children} />
          </UserProvider>
        </div>
      </body>
    </html>
  );
}
