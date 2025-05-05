import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// https://www.npmjs.com/package/@cloudflare/next-on-pages
export const runtime = "edge";

export const metadata: Metadata = {
  title: "BPM Calculator - タップでかんたんに測定できるBPM（テンポ）カウンター",
  description:
    "数直線で直感的にタップのタイミングを確認できるBPM（テンポ）カウンターです。音楽のテンポを測定したり、リズムを確認したりするのに役立ちます。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
