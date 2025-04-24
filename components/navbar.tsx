"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronDown, Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // For demo purposes

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-fade-in-down">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
          <Link href="/" className="flex items-center space-x-2 group">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-04%20at%2023.53.46_18366d3c.jpg-4AtETQg6k8SQ77SnhK99hVKiQMoW01.jpeg"
              alt="BUDZ Logo"
              width={100}
              height={40}
              className="h-8 w-auto transition-all duration-300 group-hover:scale-110 group-hover:opacity-90"
            />
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/blog"
              className="text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-foreground relative group animate-fade-in-left"
            >
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-foreground relative group animate-fade-in-left"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/works"
              className="text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-foreground relative group animate-fade-in-left"
            >
              Works
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="link"
                  className="p-0 h-auto text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-foreground relative group animate-fade-in-left"
                >
                  Resources <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48 animate-fade-in-scale">
                <DropdownMenuItem asChild className="transition-all duration-200 hover:bg-accent/50 animate-fade-in-up">
                  <Link href="/resources/guides">Freelancer Guides</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="transition-all duration-200 hover:bg-accent/50 animate-fade-in-up">
                  <Link href="/resources/templates">Project Templates</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="transition-all duration-200 hover:bg-accent/50 animate-fade-in-up">
                  <Link href="/resources/tools">Tools & Resources</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild className="transition-all duration-200 hover:bg-accent/50 animate-fade-in-up">
                  <Link href="/resources/community">Community</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/membership"
              className="text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-foreground relative group animate-fade-in-left"
            >
              Membership
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full transition-all duration-300 hover:scale-110 hover:opacity-90 animate-fade-in-right">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 animate-fade-in-scale" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">John Doe</p>
                    <p className="text-xs leading-none text-muted-foreground">john.doe@example.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" onClick={() => setIsLoggedIn(true)}>
                Log in
              </Button>
              <Button onClick={() => setIsLoggedIn(true)}>Sign up</Button>
            </div>
          )}
          <Button variant="ghost" className="md:hidden" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/blog"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/projects"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/works"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Works
              </Link>
              <details className="group">
                <summary className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground flex items-center cursor-pointer">
                  Resources <ChevronDown className="ml-1 h-4 w-4 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="mt-2 ml-4 space-y-2">
                  <Link
                    href="/resources/guides"
                    className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Freelancer Guides
                  </Link>
                  <Link
                    href="/resources/templates"
                    className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Project Templates
                  </Link>
                  <Link
                    href="/resources/tools"
                    className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Tools & Resources
                  </Link>
                  <Link
                    href="/resources/community"
                    className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Community
                  </Link>
                </div>
              </details>
              <Link
                href="/membership"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Membership
              </Link>
            </nav>
            {!isLoggedIn && (
              <div className="flex flex-col space-y-2 pt-2 border-t">
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsLoggedIn(true)
                    setIsMenuOpen(false)
                  }}
                >
                  Log in
                </Button>
                <Button
                  onClick={() => {
                    setIsLoggedIn(true)
                    setIsMenuOpen(false)
                  }}
                >
                  Sign up
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

