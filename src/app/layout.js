import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sanket Choudhari - Portfolio",
  description:
    "I am Sanket Choudhari, a full stack developer from India. I work in technologies like React, NextJS, NodeJS, ExpressJS, MongoDB, MySQL, TailwindCSS, etc.",
  openGraph: {
    title: "description",
    description:
      "I am Sanket Choudhari, a full stack developer from India. I work in technologies like React, NextJS, NodeJS, ExpressJS, MongoDB, MySQL, TailwindCSS, etc.",
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
      </body>
    </html>
  );
}
