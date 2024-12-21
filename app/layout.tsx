import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import Nav from "@/components/UI/Nav";
import Footer from "@/components/UI/Footer";
import LetsStart from "@/components/Home/LetsStart";
import Benefits from "@/components/Home/Benefits";
import CarrouselSection from "@/components/Home/CarrouselSection";

const outfit = Outfit({subsets: ['latin']})

export const metadata: Metadata = {
  title: "Rent a Car - Providing your best rides",
  description: "Discover affordable car rentals with easy online booking, a wide range of vehicles, and unbeatable prices. Perfect for your next trip or daily needs!",
};

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
} from '@clerk/nextjs'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider dynamic>
      <html lang="en" className="!scroll-smooth">
        <body className={outfit.className}>
          <Nav />
          <SignedOut>
            <LetsStart />
            <Benefits />
            <CarrouselSection />
            <div className="h-14"/>
          </SignedOut>
          <SignedIn>
            {children}
          </SignedIn>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
