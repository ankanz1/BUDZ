import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRight, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-zinc-900 to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  Showcase Your Talent, Find Your Next Opportunity
                </h1>
                <p className="max-w-[600px] text-zinc-200 md:text-xl">
                  BUDZ connects talented freelancers with clients looking for exceptional work. Build your portfolio,
                  showcase your projects, and grow your freelance career.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Create Your Portfolio
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-zinc-700 bg-black text-black hover:bg-black hover:text-white transition-colors"
                >
                  Explore Projects
                </Button>
              </div>
            </div>
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover the range of services our freelancers offer to help you bring your ideas to life.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {services.map((service, index) => (
              <Card key={index} className="border-zinc-800 bg-zinc-950 text-white">
                <CardHeader>
                  <service.icon className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="text-zinc-400">{service.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="link" className="px-0 text-black hover:text-white hover:bg-black transition-colors">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Featured Projects
              </h2>
              <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore the latest work from our talented community of freelancers.
              </p>
            </div>
          </div>

          <Tabs defaultValue="all" className="mt-8">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-zinc-900">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="development">Development</TabsTrigger>
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="design" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((p) => p.category === "Design")
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="development" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((p) => p.category === "Development")
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="marketing" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((p) => p.category === "Marketing")
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-center mt-10">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-zinc-700 bg-black text-black hover:bg-black hover:text-white transition-colors"
            >
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Client Testimonials</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See what our clients have to say about working with BUDZ freelancers.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-zinc-200 bg-white">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.company}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-2">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                        />
                      ))}
                  </div>
                  <p className="text-zinc-600">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Showcase Your Work?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of freelancers who are growing their business with BUDZ.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="secondary">
                Create Your Portfolio
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 hover:bg-primary-foreground/10"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const services = [
  {
    title: "Web Development",
    description: "Custom websites, web applications, and e-commerce solutions tailored to your needs.",
    icon: ({ className }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    description: "User-centered design solutions that enhance user experience and drive engagement.",
    icon: ({ className }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    description: "Strategic marketing solutions to help your business reach its target audience.",
    icon: ({ className }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M12 20V10" />
        <path d="M18 20V4" />
        <path d="M6 20v-6" />
      </svg>
    ),
  },
]

const projects = [
  {
    title: "E-commerce Website Redesign",
    description: "Complete redesign of an e-commerce platform focusing on user experience and conversion optimization.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Design",
    freelancer: {
      name: "Alex Morgan",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    featured: true,
  },
  {
    title: "Mobile Banking App",
    description: "Secure and intuitive mobile banking application with advanced transaction features.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Development",
    freelancer: {
      name: "Jamie Chen",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    featured: true,
  },
  {
    title: "Brand Identity System",
    description: "Comprehensive brand identity system including logo, color palette, typography, and usage guidelines.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Design",
    freelancer: {
      name: "Sam Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    featured: false,
  },
  {
    title: "SEO Campaign for SaaS",
    description: "Strategic SEO campaign that increased organic traffic by 150% for a SaaS company.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Marketing",
    freelancer: {
      name: "Taylor Reed",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    featured: true,
  },
  {
    title: "Real Estate Listing Platform",
    description: "Custom real estate platform with advanced search, filtering, and property management features.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Development",
    freelancer: {
      name: "Jordan Smith",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    featured: false,
  },
  {
    title: "Social Media Campaign",
    description: "Integrated social media campaign that increased engagement and followers across multiple platforms.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Marketing",
    freelancer: {
      name: "Casey Jones",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    featured: true,
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    text: "Working with BUDZ freelancers was a game-changer for our startup. The quality of work exceeded our expectations, and the communication was excellent throughout the project.",
  },
  {
    name: "Michael Chen",
    company: "GrowthLabs",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    text: "I've hired multiple freelancers through BUDZ and have always been impressed with the talent pool. The platform makes it easy to find the right person for any project.",
  },
  {
    name: "Emily Rodriguez",
    company: "Design Forward",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    text: "As a small business owner, I appreciate the range of skills available on BUDZ. I found a fantastic designer who understood my vision and delivered exactly what I needed.",
  },
]

// Project Card Component
function ProjectCard({ project }) {
  return (
    <Card className="overflow-hidden border-zinc-800 bg-zinc-950 text-white">
      <div className="relative aspect-video">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        {project.featured && (
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="bg-primary text-primary-foreground">
              Featured
            </Badge>
          </div>
        )}
      </div>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs border-zinc-700">
            {project.category}
          </Badge>
        </div>
        <CardTitle className="text-xl mt-2">{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-zinc-400 text-sm">{project.description}</p>
      </CardContent>
      <CardFooter className="border-t border-zinc-800 pt-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={project.freelancer.avatar} alt={project.freelancer.name} />
            <AvatarFallback>{project.freelancer.name.split(" ")[0][0]}</AvatarFallback>
          </Avatar>
          <span className="text-sm text-zinc-400">{project.freelancer.name}</span>
        </div>
        <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-zinc-900">
          View Project
        </Button>
      </CardFooter>
    </Card>
  )
}

