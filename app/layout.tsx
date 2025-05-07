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

const title = "BPM Calculator";
const description =
  "数直線で直感的にタップのタイミングを確認できるBPM（テンポ）カウンターです。音楽のテンポを測定したり、リズムを確認したりするのに役立ちます。";
const imagePath = "images/ogp.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://bpmcalculator-numberline.com"),
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    images: [
      {
        url: imagePath,
        width: 1200,
        height: 630,
      },
    ],
    url: "https://bpmcalculator-numberline.com",
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [
      {
        url: imagePath,
        width: 1200,
        height: 630,
      },
    ],
    site: "@kami_9808",
  },
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
