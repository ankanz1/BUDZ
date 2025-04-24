import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarDays, Clock, Search } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-zinc-900 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                Freelancing Insights & Tips
              </h1>
              <p className="max-w-[700px] text-zinc-400 md:text-xl">
                Expert advice, industry trends, and success stories to help you thrive as a freelancer.
              </p>
            </div>
            <div className="w-full max-w-sm">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search articles..."
                  className="w-full bg-background rounded-md border border-input pl-8 pr-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          {/* Featured Article */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <div className="lg:col-span-3 relative aspect-video lg:aspect-auto lg:h-full rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="How to Set Your Freelance Rates"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="lg:col-span-2 flex flex-col justify-center">
                <Badge className="w-fit mb-2">Pricing Strategy</Badge>
                <h3 className="text-2xl font-bold mb-2">How to Set Your Freelance Rates: A Comprehensive Guide</h3>
                <p className="text-muted-foreground mb-4">
                  Learn how to calculate your worth, research market rates, and confidently price your services to
                  maximize your income while staying competitive.
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Sarah Johnson" />
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">Sarah Johnson</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4" />
                    <span>Mar 2, 2025</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>10 min read</span>
                  </div>
                </div>
                <Button asChild className="w-fit">
                  <Link href="/blog/how-to-set-your-freelance-rates">Read Article</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Categories Tabs */}
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="w-full flex flex-wrap justify-start mb-6 bg-transparent gap-2">
              <TabsTrigger value="all" className="rounded-full">
                All
              </TabsTrigger>
              <TabsTrigger value="getting-started" className="rounded-full">
                Getting Started
              </TabsTrigger>
              <TabsTrigger value="client-management" className="rounded-full">
                Client Management
              </TabsTrigger>
              <TabsTrigger value="finance" className="rounded-full">
                Finance & Taxes
              </TabsTrigger>
              <TabsTrigger value="productivity" className="rounded-full">
                Productivity
              </TabsTrigger>
              <TabsTrigger value="marketing" className="rounded-full">
                Marketing
              </TabsTrigger>
              <TabsTrigger value="success-stories" className="rounded-full">
                Success Stories
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post, index) => (
                  <BlogCard key={index} post={post} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="getting-started" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts
                  .filter((post) => post.category === "Getting Started")
                  .map((post, index) => (
                    <BlogCard key={index} post={post} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="client-management" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts
                  .filter((post) => post.category === "Client Management")
                  .map((post, index) => (
                    <BlogCard key={index} post={post} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="finance" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts
                  .filter((post) => post.category === "Finance & Taxes")
                  .map((post, index) => (
                    <BlogCard key={index} post={post} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="productivity" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts
                  .filter((post) => post.category === "Productivity")
                  .map((post, index) => (
                    <BlogCard key={index} post={post} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="marketing" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts
                  .filter((post) => post.category === "Marketing")
                  .map((post, index) => (
                    <BlogCard key={index} post={post} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="success-stories" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts
                  .filter((post) => post.category === "Success Stories")
                  .map((post, index) => (
                    <BlogCard key={index} post={post} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>

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

      {/* Newsletter Section */}
      <section className="w-full py-12 md:py-24 bg-zinc-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Stay Updated</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Subscribe to our newsletter for the latest freelancing tips, trends, and opportunities.
              </p>
            </div>
            <div className="w-full max-w-md flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Blog Card Component
function BlogCard({ post }) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative aspect-video">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        <div className="absolute top-2 left-2">
          <Badge variant="secondary" className="bg-primary text-primary-foreground">
            {post.category}
          </Badge>
        </div>
      </div>
      <CardHeader className="flex-grow">
        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
        <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name.split(" ")[0][0]}</AvatarFallback>
            </Avatar>
            <span className="text-xs text-muted-foreground">{post.author.name}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <CalendarDays className="h-3 w-3" />
            <span>{post.date}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <Button asChild variant="ghost" className="w-full justify-center">
          <Link href={`/blog/${post.slug}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

// Sample data
const blogPosts = [
  {
    title: "10 Essential Tools Every Freelancer Needs in 2025",
    slug: "essential-tools-freelancers-2025",
    excerpt:
      "Discover the must-have tools that will streamline your workflow, boost productivity, and help you manage your freelance business more effectively.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Getting Started",
    date: "Mar 5, 2025",
    author: {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  },
  {
    title: "How to Land Your First Freelance Client: A Step-by-Step Guide",
    slug: "land-first-freelance-client",
    excerpt:
      "Breaking into freelancing can be challenging. Learn proven strategies to secure your first client and start building your portfolio.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Getting Started",
    date: "Feb 28, 2025",
    author: {
      name: "Emily Rodriguez",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  },
  {
    title: "Mastering Client Communication: Avoiding Misunderstandings and Building Trust",
    slug: "mastering-client-communication",
    excerpt:
      "Effective communication is key to successful freelancing. Learn how to set expectations, handle difficult conversations, and build lasting client relationships.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Client Management",
    date: "Feb 22, 2025",
    author: {
      name: "David Wilson",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  },
  {
    title: "Freelancer Finances: Tax Planning Strategies You Need to Know",
    slug: "freelancer-tax-planning",
    excerpt:
      "Don't let tax season catch you off guard. Discover tax deductions, quarterly payments, and financial planning strategies specifically for freelancers.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Finance & Taxes",
    date: "Feb 15, 2025",
    author: {
      name: "Jessica Taylor",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  },
  {
    title: "From Side Hustle to Full-Time: When and How to Make the Leap",
    slug: "side-hustle-to-full-time",
    excerpt:
      "Thinking about going full-time with your freelance work? Learn how to assess your readiness, create a transition plan, and set yourself up for success.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Success Stories",
    date: "Feb 10, 2025",
    author: {
      name: "Alex Morgan",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  },
  {
    title: "The Power of Niching Down: How Specialization Can Double Your Rates",
    slug: "power-of-niching-down",
    excerpt:
      "Discover why becoming a specialist rather than a generalist can help you attract better clients, command higher rates, and enjoy more fulfilling work.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Marketing",
    date: "Feb 5, 2025",
    author: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  },
  {
    title: "Productivity Hacks for Freelancers: Work Less, Earn More",
    slug: "productivity-hacks-freelancers",
    excerpt:
      "Learn time management techniques, focus strategies, and workflow optimizations that can help you increase your output while working fewer hours.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Productivity",
    date: "Jan 30, 2025",
    author: {
      name: "James Brown",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  },
  {
    title: "Handling Scope Creep: How to Say No Without Damaging Client Relationships",
    slug: "handling-scope-creep",
    excerpt:
      "Scope creep can eat into your profits and cause stress. Learn how to identify it early, address it professionally, and prevent it in future projects.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Client Management",
    date: "Jan 25, 2025",
    author: {
      name: "Olivia Martinez",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  },
  {
    title: "Building a Personal Brand That Attracts Premium Clients",
    slug: "personal-brand-premium-clients",
    excerpt:
      "Your personal brand can be your most powerful marketing tool. Learn how to craft a compelling brand story that resonates with high-paying clients.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Marketing",
    date: "Jan 20, 2025",
    author: {
      name: "Ryan Thompson",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  },
]

