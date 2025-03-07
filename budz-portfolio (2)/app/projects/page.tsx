"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Filter, LayoutGrid, List, Search } from "lucide-react"
import Image from "next/image"

export default function ProjectsPage() {
  const [viewMode, setViewMode] = useState("grid")
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-zinc-900 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                Discover Projects
              </h1>
              <p className="max-w-[700px] text-zinc-400 md:text-xl">
                Explore the latest work from our talented community of freelancers.
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

      {/* Projects Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters Sidebar - Mobile Toggle */}
            <div className="md:hidden w-full mb-4">
              <Button
                variant="outline"
                className="w-full flex items-center justify-between"
                onClick={() => setShowFilters(!showFilters)}
              >
                <span className="flex items-center">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </span>
                <Badge>{selectedFiltersCount}</Badge>
              </Button>
            </div>

            {/* Filters Sidebar */}
            <div className={`${showFilters ? "block" : "hidden"} md:block w-full md:w-64 space-y-6`}>
              <div className="space-y-4">
                <h3 className="font-medium">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.value} className="flex items-center space-x-2">
                      <Checkbox id={`category-${category.value}`} />
                      <Label htmlFor={`category-${category.value}`}>{category.label}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Budget Range</h3>
                <div className="space-y-4">
                  <Slider defaultValue={[500, 2500]} min={0} max={5000} step={100} />
                  <div className="flex items-center justify-between">
                    <span className="text-sm">$0</span>
                    <span className="text-sm">$5,000+</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Project Duration</h3>
                <RadioGroup defaultValue="any">
                  {durations.map((duration) => (
                    <div key={duration.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={duration.value} id={`duration-${duration.value}`} />
                      <Label htmlFor={`duration-${duration.value}`}>{duration.label}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Experience Level</h3>
                <div className="space-y-2">
                  {experienceLevels.map((level) => (
                    <div key={level.value} className="flex items-center space-x-2">
                      <Checkbox id={`level-${level.value}`} />
                      <Label htmlFor={`level-${level.value}`}>{level.label}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full" variant="outline">
                Clear Filters
              </Button>
            </div>

            {/* Projects Grid */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                <Tabs defaultValue="all" className="w-full sm:w-auto">
                  <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="active">Active</TabsTrigger>
                    <TabsTrigger value="featured">Featured</TabsTrigger>
                  </TabsList>
                </Tabs>

                <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
                  <div className="flex items-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setViewMode("grid")}
                      className={viewMode === "grid" ? "bg-muted" : ""}
                    >
                      <LayoutGrid className="h-4 w-4" />
                      <span className="sr-only">Grid view</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setViewMode("list")}
                      className={viewMode === "list" ? "bg-muted" : ""}
                    >
                      <List className="h-4 w-4" />
                      <span className="sr-only">List view</span>
                    </Button>
                  </div>

                  <Select defaultValue="featured">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="budget-high">Budget: High to Low</SelectItem>
                      <SelectItem value="budget-low">Budget: Low to High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {projects.map((project, index) => (
                    <ProjectListItem key={index} project={project} />
                  ))}
                </div>
              )}

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
          </div>
        </div>
      </section>
    </div>
  )
}

// Project Card Component
function ProjectCard({ project }) {
  return (
    <Card className="overflow-hidden">
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
          <Badge variant="outline" className="text-xs">
            {project.category}
          </Badge>
          <Badge variant="outline" className="text-xs">
            ${project.budget}
          </Badge>
        </div>
        <CardTitle className="text-xl mt-2">{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm line-clamp-2">{project.description}</p>
      </CardContent>
      <CardFooter className="border-t pt-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={project.freelancer.avatar} alt={project.freelancer.name} />
            <AvatarFallback>{project.freelancer.name.split(" ")[0][0]}</AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted-foreground">{project.freelancer.name}</span>
        </div>
        <Button variant="ghost" size="sm">
          View Project
        </Button>
      </CardFooter>
    </Card>
  )
}

// Project List Item Component
function ProjectListItem({ project }) {
  return (
    <Card>
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-48 h-48 md:h-auto">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover md:rounded-l-lg"
          />
        </div>
        <div className="flex-1 p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="text-xs">
                  {project.category}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  ${project.budget}
                </Badge>
                {project.featured && (
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                )}
              </div>
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-muted-foreground mt-2">{project.description}</p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-4">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={project.freelancer.avatar} alt={project.freelancer.name} />
                  <AvatarFallback>{project.freelancer.name.split(" ")[0][0]}</AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground">{project.freelancer.name}</span>
              </div>
              <Button>View Project</Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

// Sample data
const projects = [
  {
    title: "E-commerce Website Redesign",
    description: "Complete redesign of an e-commerce platform focusing on user experience and conversion optimization.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Design",
    budget: "2,500",
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
    budget: "5,000",
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
    budget: "1,800",
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
    budget: "3,200",
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
    budget: "4,500",
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
    budget: "1,500",
    freelancer: {
      name: "Casey Jones",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    featured: true,
  },
]

const categories = [
  { label: "Web Development", value: "development" },
  { label: "UI/UX Design", value: "design" },
  { label: "Mobile Apps", value: "mobile" },
  { label: "Digital Marketing", value: "marketing" },
  { label: "Branding", value: "branding" },
  { label: "Content Creation", value: "content" },
]

const durations = [
  { label: "Any duration", value: "any" },
  { label: "Less than 1 week", value: "week" },
  { label: "1-2 weeks", value: "two-weeks" },
  { label: "1-3 months", value: "months" },
  { label: "3+ months", value: "long-term" },
]

const experienceLevels = [
  { label: "Entry Level", value: "entry" },
  { label: "Intermediate", value: "intermediate" },
  { label: "Expert", value: "expert" },
]

const selectedFiltersCount = 0 // This would be calculated based on actual selected filters

