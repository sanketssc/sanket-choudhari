import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sanket Choudhari - Portfolio",
  description:
    "I am Sanket Choudhari, a full stack developer from India. I work in technologies like React, NextJS, NodeJS, ExpressJS, MongoDB, MySQL, TailwindCSS, etc.",
  openGraph: {
    url: "https://sanket-choudhari.vercel.app/",
    title: "Sanket Choudhari - Portfolio",
    description:
      "I am Sanket Choudhari, a full stack developer from India. I work in technologies like React, NextJS, NodeJS, ExpressJS, MongoDB, MySQL, TailwindCSS, etc.",
    site_name: "Sanket Choudhari - Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    title: "Sanket Choudhari - Portfolio",
    site: "https://sanket-choudhari.vercel.app/",
    cardType: "summary_large_image",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " flex flex-col  bg-[#121212] w-full max-w-2xl h-full items-center mx-auto min-h-screen"
        }
      >
        <NavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
