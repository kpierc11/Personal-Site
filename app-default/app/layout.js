import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// app/layout.js (or any route/page file)
export const metadata = {
  title: "Kaleb Pierce Portfolio",
  description: "A portfolio site for Kaleb Pierce. Built with Next.js and daisyUI.",
  openGraph: {
    type: "website",
    url: "https://your-domain.com",
    title: "Kaleb Pierce Portfolio",
    description: "A portfolio site for Kaleb Pierce. Built with Next.js and daisyUI.",
    images: [
      {
        url: "/meta-preview.png", // should live in /public/
        width: 1200,
        height: 630,
        alt: "Kaleb Pierce Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaleb Pierce Portfolio",
    description: "A portfolio site for Kaleb Pierce. Built with Next.js and daisyUI.",
    images: ["/meta-preview.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
