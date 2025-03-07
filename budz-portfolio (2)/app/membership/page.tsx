import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"
import Link from "next/link"

export default function MembershipPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-zinc-900 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                Affordable Membership Plans
              </h1>
              <p className="max-w-[700px] text-zinc-400 md:text-xl">
                Choose the right plan for your freelancing journey and take your career to the next level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Free Plan */}
            <Card className="border-2 border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Free</CardTitle>
                <CardDescription>Perfect for getting started</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <FeatureItem included>Basic portfolio profile</FeatureItem>
                  <FeatureItem included>Up to 5 project showcases</FeatureItem>
                  <FeatureItem included>Community access</FeatureItem>
                  <FeatureItem included>Basic analytics</FeatureItem>
                  <FeatureItem>Priority in search results</FeatureItem>
                  <FeatureItem>Custom domain</FeatureItem>
                  <FeatureItem>Client messaging</FeatureItem>
                  <FeatureItem>Featured profile</FeatureItem>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant="outline">
                  <Link href="/signup">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Pro Plan */}
            <Card className="border-2 border-primary relative">
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-0">
                <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Pro</CardTitle>
                <CardDescription>For serious freelancers</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$9.99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <FeatureItem included>Enhanced portfolio profile</FeatureItem>
                  <FeatureItem included>Up to 20 project showcases</FeatureItem>
                  <FeatureItem included>Community access</FeatureItem>
                  <FeatureItem included>Advanced analytics</FeatureItem>
                  <FeatureItem included>Priority in search results</FeatureItem>
                  <FeatureItem included>Custom domain</FeatureItem>
                  <FeatureItem included>Client messaging</FeatureItem>
                  <FeatureItem>Featured profile</FeatureItem>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/signup">Subscribe Now</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Premium Plan */}
            <Card className="border-2 border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Premium</CardTitle>
                <CardDescription>For professional freelancers</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$24.99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <FeatureItem included>Premium portfolio profile</FeatureItem>
                  <FeatureItem included>Unlimited project showcases</FeatureItem>
                  <FeatureItem included>Community access</FeatureItem>
                  <FeatureItem included>Comprehensive analytics</FeatureItem>
                  <FeatureItem included>Top priority in search results</FeatureItem>
                  <FeatureItem included>Custom domain</FeatureItem>
                  <FeatureItem included>Client messaging</FeatureItem>
                  <FeatureItem included>Featured profile</FeatureItem>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant="outline">
                  <Link href="/signup">Subscribe Now</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 bg-zinc-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Membership Benefits</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Unlock powerful features to grow your freelance business
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-start space-y-2">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Find answers to common questions about our membership plans
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-xl font-bold">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
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
                Ready to Grow Your Freelance Business?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of freelancers who are growing their business with BUDZ.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/signup">Get Started Today</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Feature Item Component
function FeatureItem({ children, included = false }) {
  return (
    <li className="flex items-center space-x-2">
      {included ? (
        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
      ) : (
        <X className="h-5 w-5 text-muted-foreground flex-shrink-0" />
      )}
      <span className={included ? "" : "text-muted-foreground"}>{children}</span>
    </li>
  )
}

// Sample data
const benefits = [
  {
    title: "Enhanced Visibility",
    description: "Get more visibility with premium placement in search results and featured sections.",
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
        <path d="m16 12-4 4-4-4" />
        <path d="M12 8v8" />
      </svg>
    ),
  },
  {
    title: "Client Connections",
    description: "Connect directly with clients through our messaging system and proposal tools.",
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
        <path d="M17 6.1H3" />
        <path d="M21 12.1H3" />
        <path d="M15.1 18H3" />
      </svg>
    ),
  },
  {
    title: "Professional Portfolio",
    description: "Create a stunning portfolio with customizable templates and branding options.",
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
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
      </svg>
    ),
  },
  {
    title: "Analytics Dashboard",
    description: "Track your profile views, project engagement, and client interactions.",
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
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
  },
  {
    title: "Skills Verification",
    description: "Get your skills verified to build trust with potential clients.",
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
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Early Access",
    description: "Get early access to new features, tools, and opportunities before anyone else.",
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
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="M4.93 4.93l2.83 2.83" />
        <path d="M16.24 16.24l2.83 2.83" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <path d="M4.93 19.07l2.83-2.83" />
        <path d="M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
]

const faqs = [
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Yes, you can upgrade or downgrade your membership plan at any time. Changes will take effect at the start of your next billing cycle.",
  },
  {
    question: "Is there a contract or commitment?",
    answer: "No, all our membership plans are month-to-month with no long-term contracts. You can cancel anytime.",
  },
  {
    question: "Do you offer discounts for annual subscriptions?",
    answer: "Yes, we offer a 20% discount when you choose annual billing for any of our paid membership plans.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers for business accounts.",
  },
  {
    question: "Can I try before I buy?",
    answer:
      "You can start with our Free plan to explore the platform, then upgrade when you're ready for more features.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "You can cancel your subscription anytime from your account settings. Your benefits will continue until the end of your current billing period.",
  },
]

