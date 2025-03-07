import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

export default function WorksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-zinc-900 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                Explore Amazing Work
              </h1>
              <p className="max-w-[700px] text-zinc-400 md:text-xl">
                Discover exceptional projects created by talented BUDZ freelancers across various categories.
              </p>
            </div>
            <div className="w-full max-w-sm">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search projects..."
                  className="w-full bg-background rounded-md border border-input pl-8 pr-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Works Content */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          {/* Filter Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <Tabs defaultValue="all" className="w-full sm:w-auto">
              <TabsList className="w-full sm:w-auto">
                <TabsTrigger value="all">All Work</TabsTrigger>
                <TabsTrigger value="featured">Featured</TabsTrigger>
                <TabsTrigger value="trending">Trending</TabsTrigger>
                <TabsTrigger value="new">New</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Select defaultValue="recent">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="budget-high">Budget: High to Low</SelectItem>
                  <SelectItem value="budget-low">Budget: Low to High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="mb-8">
            <Tabs defaultValue="all-categories">
              <TabsList className="w-full flex flex-wrap justify-start mb-6 bg-transparent gap-2">
                <TabsTrigger value="all-categories" className="rounded-full">
                  All Categories
                </TabsTrigger>
                <TabsTrigger value="web-development" className="rounded-full">
                  Web Development
                </TabsTrigger>
                <TabsTrigger value="mobile-apps" className="rounded-full">
                  Mobile Apps
                </TabsTrigger>
                <TabsTrigger value="ui-ux" className="rounded-full">
                  UI/UX Design
                </TabsTrigger>
                <TabsTrigger value="graphic-design" className="rounded-full">
                  Graphic Design
                </TabsTrigger>
                <TabsTrigger value="branding" className="rounded-full">
                  Branding
                </TabsTrigger>
                <TabsTrigger value="marketing" className="rounded-full">
                  Marketing
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all-categories" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {works.map((work, index) => (
                    <WorkCard key={index} work={work} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="web-development" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {works
                    .filter((work) => work.category === "Web Development")
                    .map((work, index) => (
                      <WorkCard key={index} work={work} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="mobile-apps" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {works
                    .filter((work) => work.category === "Mobile Apps")
                    .map((work, index) => (
                      <WorkCard key={index} work={work} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="ui-ux" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {works
                    .filter((work) => work.category === "UI/UX Design")
                    .map((work, index) => (
                      <WorkCard key={index} work={work} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="graphic-design" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {works
                    .filter((work) => work.category === "Graphic Design")
                    .map((work, index) => (
                      <WorkCard key={index} work={work} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="branding" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {works
                    .filter((work) => work.category === "Branding")
                    .map((work, index) => (
                      <WorkCard key={index} work={work} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="marketing" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {works
                    .filter((work) => work.category === "Marketing")
                    .map((work, index) => (
                      <WorkCard key={index} work={work} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center space-x-2 mt-10">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Freelancers */}
      <section className="w-full py-12 md:py-24 bg-zinc-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Freelancers</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Meet the talented professionals behind these amazing projects
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredFreelancers.map((freelancer, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="p-6 text-center">
                  <Avatar className="h-24 w-24 mx-auto mb-4">
                    <AvatarImage src={freelancer.avatar} alt={freelancer.name} />
                    <AvatarFallback>
                      {freelancer.name.split(" ")[0][0]}
                      {freelancer.name.split(" ")[1][0]}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl mb-1">{freelancer.name}</CardTitle>
                  <CardDescription className="mb-4">{freelancer.specialty}</CardDescription>
                  <div className="flex justify-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={star <= freelancer.rating ? "currentColor" : "none"}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`h-4 w-4 ${star <= freelancer.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                    <span className="text-sm text-muted-foreground ml-1">({freelancer.reviewCount})</span>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/freelancers/${freelancer.id}`}>View Profile</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
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
              <Button size="lg" variant="secondary" asChild>
                <Link href="/signup">Create Your Portfolio</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/contact">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Work Card Component
function WorkCard({ work }) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative aspect-video">
        <Image src={work.image || "/placeholder.svg"} alt={work.title} fill className="object-cover" />
        {work.featured && (
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="bg-primary text-primary-foreground">
              Featured
            </Badge>
          </div>
        )}
      </div>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs">
            {work.category}
          </Badge>
        </div>
        <CardTitle className="line-clamp-2 mt-2">{work.title}</CardTitle>
        <CardDescription className="line-clamp-3">{work.description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0 flex-grow">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={work.freelancer.avatar} alt={work.freelancer.name} />
            <AvatarFallback>{work.freelancer.name.split(" ")[0][0]}</AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted-foreground">{work.freelancer.name}</span>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <Button asChild variant="ghost" className="w-full justify-center">
          <Link href={`/works/${work.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

// Sample data
const works = [
  {
    id: "1",
    title: "E-commerce Website Redesign",
    description: "Complete redesign of an e-commerce platform focusing on user experience and conversion optimization.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Web Development",
    featured: true,
    freelancer: {
      name: "Alex Morgan",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "2",
    title: "Mobile Banking App",
    description: "Secure and intuitive mobile banking application with advanced transaction features.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Mobile Apps",
    featured: true,
    freelancer: {
      name: "Jamie Chen",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "3",
    title: "Brand Identity System",
    description: "Comprehensive brand identity system including logo, color palette, typography, and usage guidelines.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Branding",
    featured: false,
    freelancer: {
      name: "Sam Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "4",
    title: "Product Landing Page Design",
    description: "High-converting landing page design for a new tech product launch with A/B testing implementation.",
    image: "/placeholder.svg?height=300&width=400",
    category: "UI/UX Design",
    featured: false,
    freelancer: {
      name: "Taylor Reed",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "5",
    title: "Real Estate Listing Platform",
    description: "Custom real estate platform with advanced search, filtering, and property management features.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Web Development",
    featured: false,
    freelancer: {
      name: "Jordan Smith",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "6",
    title: "Social Media Campaign",
    description: "Integrated social media campaign that increased engagement and followers across multiple platforms.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Marketing",
    featured: true,
    freelancer: {
      name: "Casey Jones",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "7",
    title: "Fitness Tracking App",
    description: "Mobile application for tracking workouts, nutrition, and progress with social sharing features.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Mobile Apps",
    featured: false,
    freelancer: {
      name: "Morgan Lee",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "8",
    title: "Corporate Annual Report",
    description:
      "Visually compelling annual report design that effectively communicates company performance and vision.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Graphic Design",
    featured: false,
    freelancer: {
      name: "Riley Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "9",
    title: "Restaurant Menu Redesign",
    description:
      "Strategic menu redesign that increased average order value by 15% through layout and psychology principles.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Graphic Design",
    featured: true,
    freelancer: {
      name: "Avery Williams",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
]

const featuredFreelancers = [
  {
    id: "1",
    name: "Alex Morgan",
    specialty: "Web Developer",
    avatar: "/placeholder.svg?height=96&width=96",
    rating: 5,
    reviewCount: 48,
  },
  {
    id: "2",
    name: "Jamie Chen",
    specialty: "Mobile App Developer",
    avatar: "/placeholder.svg?height=96&width=96",
    rating: 5,
    reviewCount: 36,
  },
  {
    id: "3",
    name: "Taylor Reed",
    specialty: "UI/UX Designer",
    avatar: "/placeholder.svg?height=96&width=96",
    rating: 4,
    reviewCount: 29,
  },
  {
    id: "4",
    name: "Avery Williams",
    specialty: "Graphic Designer",
    avatar: "/placeholder.svg?height=96&width=96",
    rating: 5,
    reviewCount: 42,
  },
]

