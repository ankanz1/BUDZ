import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ChatWidget } from "@/components/chat-widget"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BUDZ - Freelancer Portfolio Platform",
  description: "Showcase your work and find opportunities as a freelancer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] animate-fade-in"></div>
        <div className="fixed inset-0 -z-10 h-full w-full bg-gradient-to-b from-white/50 to-transparent animate-fade-in"></div>
        <Navbar />
        <main className="min-h-screen">
          <div className="animate-fade-in-up">
            {children}
          </div>
        </main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}



import './globals.css'