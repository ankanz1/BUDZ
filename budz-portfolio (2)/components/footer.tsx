import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-200">
      <div className="container px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-04%20at%2023.53.46_18366d3c.jpg-4AtETQg6k8SQ77SnhK99hVKiQMoW01.jpeg"
                alt="BUDZ Logo"
                width={100}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-zinc-400 text-sm">
              BUDZ connects talented freelancers with clients looking for exceptional work. Build your portfolio,
              showcase your projects, and grow your freelance career.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-zinc-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">For Freelancers</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white text-sm">
                  Find Work
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white text-sm">
                  Create Portfolio
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white text-sm">
                  Community
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white text-sm">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white text-sm">
                  Freelancer Plus
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">For Clients</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white text-sm">
                  Post a Project
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white text-sm">
                  Find Freelancers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white text-sm">
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white text-sm">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white text-sm">
                  Client Resources
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Subscribe</h3>
            <p className="text-zinc-400 text-sm mb-4">Get the latest news and updates from BUDZ.</p>
            <form className="space-y-2">
              <Input type="email" placeholder="Your email address" className="bg-zinc-900 border-zinc-800 text-white" />
              <Button className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-400 text-sm">© {new Date().getFullYear()} BUDZ. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-zinc-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-white text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-white text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

