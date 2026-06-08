
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Keen Keeper",
  description: "Assignment 7 - Keen Keeper",
};

import DataProvider from "@/context/DataContext";

export default function RootLayout({ children }) {
  return (
    <html data-theme='light' lang="en" className={`${geistSans.className} ${geistMono.className} h-full antialiased`}>
      <body className="min-h-screen flex flex-col">

        <Navbar />

        <main className="grow">
          <DataProvider>
            {children}
          </DataProvider>
        </main>

        <Footer />

      </body>
    </html>
  );
}
