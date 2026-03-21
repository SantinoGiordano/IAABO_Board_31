import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/componets/nav";
import Footer from "@/componets/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IAABO Board 31",
  description:
    "Official website of IAABO Board 31. Providing training, mentoring, and resources for basketball officials. Stay updated with board news, schedules, and events.",

  keywords: [
    "IAABO Board 31",
    "basketball officials",
    "basketball referees",
    "referee training",
    "sports officiating",
    "IAABO",
    "basketball rules",
    "officials association",
  ],

  authors: [{ name: "IAABO Board 31" }],
  creator: "IAABO Board 31",

  metadataBase: new URL("https://yourdomain.com"), // CHANGE THIS

  openGraph: {
    title: "IAABO Board 31",
    description:
      "Training and supporting basketball officials through education and mentoring.",
    url: "https://yourdomain.com", // CHANGE THIS
    siteName: "IAABO Board 31",
    images: [
      {
        url: "/heroBanner.jpg", // make sure this exists in /public
        width: 1200,
        height: 630,
        alt: "IAABO Board 31 Basketball Officials",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "IAABO Board 31",
    description:
      "Official site for IAABO Board 31 basketball officials.",
    images: ["/heroBanner.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-black">
        <Nav/>
        {children}
        <Footer/>
        </div>
      </body>
    </html>
  );
}
