"use client"

import Script from "next/script"
import {
  BarChart3,
  ClipboardList,
  FileText,
  FolderArchive,
  GraduationCap,
  Users,
  AlertTriangle,
  ArrowRight,
  Shield,
  CheckCircle,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import BetaSignupForm from "@/components/beta-signup-form"
import { FaqSection } from "@/components/faq-section"
import { SiteLayout } from "@/components/layout/site-layout"
import { FeatureCard } from "@/components/ui/feature-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { TestimonialWithPhoto } from "@/components/ui/testimonial-with-photo"
import { useScrollToAnchor } from "@/hooks/use-scroll-to-anchor"
import { SafeImage } from "@/components/ui/safe-image"

export default function LandingPage() {
  // Use the hook to handle anchor scrolling
  useScrollToAnchor()

  return (
    <SiteLayout showCertifications={true}>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: 'What is "workplace violence" under California Labor Code Section 6401.9?',
                acceptedAnswer: {
                  "@type": "Answer",
                  text: 'Under California Labor Code Section 6401.9, "workplace violence" is defined as any act of violence or threat of violence that occurs in a place of employment. This includes the threat or use of physical force against an employee that results in or has a high likelihood of resulting in injury, psychological trauma, or stress; an incident involving the threat or use of a firearm or other dangerous weapon; and four specific types: Type 1 (criminal intent), Type 2 (customer/client), Type 3 (worker-on-worker), and Type 4 (personal relationship).',
                },
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] flex items-center hero-section">
        <div className="absolute inset-0 z-0">
          <Image
            src="/sb553-training-session.png"
            alt="Workplace violence prevention training session"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container relative z-10 px-4 md:px-6 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6 hero-text">
              WORKPLACE VIOLENCE PREVENTION & SB 553 COMPLIANCE
            </h1>
            <p className="text-xl md:text-2xl mb-8 hero-text hero-text-delay-1">
              The first and only platform designed exclusively for SB 553 compliance—not a bolted-on feature or generic
              compliance tool with workarounds.
            </p>
            <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white hero-button">
              <a href="#beta-signup">GET STARTED</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Complete SB 553 Compliance in One Platform
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              SB553Shield streamlines every aspect of workplace violence prevention compliance for California employers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Avoid $25K Fines</h3>
              <p className="text-muted-foreground">
                Stay compliant with Cal/OSHA requirements and avoid steep penalties of up to $25,000 per incident.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <ClipboardList className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Automate Documentation</h3>
              <p className="text-muted-foreground">
                Generate compliant plans, track training, and log incidents in one centralized, audit-ready system.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-muted-foreground">
                Receive automatic updates when regulations change, ensuring your compliance never lapses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why a Dedicated Solution Matters */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Why a Dedicated SB 553 Solution Matters
              </h2>
              <p className="text-lg text-muted-foreground">
                California's SB 553 (effective July 1, 2024) imposes steep fines on employers that fail to document,
                train, log, and review workplace-violence prevention. Generic solutions fall short because:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-red-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold block">Generic HR platforms</span>
                    <span className="text-muted-foreground">
                      Treat SB 553 as an afterthought with clumsy workarounds and missing California-specific
                      requirements.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-red-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold block">Compliance add-ons</span>
                    <span className="text-muted-foreground">
                      Lack the specialized workflows and California-specific templates needed for true SB 553 readiness.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-red-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold block">One-off consultant plans</span>
                    <span className="text-muted-foreground">
                      Cost $3k–$5k with no ongoing updates as Cal/OSHA guidance evolves.
                    </span>
                  </div>
                </li>
              </ul>
              <div className="mt-6">
                <Button asChild size="lg">
                  <Link href="#features">
                    See Our Purpose-Built Solution <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex items-start justify-center h-full">
              <div className="relative w-full h-full">
                <SafeImage
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Apr%2023%202025%20%285%29-PwS7QaKKokeRLxwT5n93nOPcqNztQE.png"
                  alt="California business professional with San Francisco skyline background"
                  fill
                  className="rounded-lg border shadow-lg object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Built Exclusively for SB 553 Compliance
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Unlike generic HR tools with SB 553 tacked on, SB553Shield was designed from day one with a singular
              focus: making SB 553 compliance effortless.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<FileText className="h-8 w-8 text-primary" />}
              title="SB 553-Specific Plan Generator"
              description="Not a generic template—a purpose-built engine with California-specific language that meets every SB 553 requirement."
              features={["California-Specific Templates", "SB 553 Legal Clauses", "Cal/OSHA-Ready Formatting"]}
            />
            <FeatureCard
              icon={<GraduationCap className="h-8 w-8 text-primary" />}
              title="SB 553 Training Modules"
              description="Training designed specifically for SB 553 requirements—not repurposed general safety content."
              features={["SB 553 Micro-learning", "California-Specific Scenarios", "Digital Acknowledgements"]}
            />
            <FeatureCard
              icon={<ClipboardList className="h-8 w-8 text-primary" />}
              title="Cal/OSHA-Ready Incident Logging"
              description="Capture exactly what Cal/OSHA requires—not generic incident forms missing critical SB 553 fields."
              features={["SB 553 Structured Forms", "Cal/OSHA Evidence Format", "Automatic Escalation"]}
            />
            <FeatureCard
              icon={<BarChart3 className="h-8 w-8 text-primary" />}
              title="SB 553 Compliance Dashboard"
              description="Track your exact SB 553 readiness—not generic compliance metrics that miss California's unique requirements."
              features={["SB 553 Readiness Score", "Cal/OSHA Updates", "California-Specific Alerts"]}
            />
            <FeatureCard
              icon={<FolderArchive className="h-8 w-8 text-primary" />}
              title="Cal/OSHA Audit-Ready Exports"
              description="Generate the exact documentation Cal/OSHA inspectors expect—not generic reports that miss critical elements."
              features={["Cal/OSHA PDF Format", "SB 553 Documentation", "Audit-Ready Structure"]}
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-primary" />}
              title="California Multi-Location Support"
              description="Manage SB 553 compliance across all your California locations with location-specific requirements."
              features={["County-Specific Templates", "Local Hazard Assessments", "Regional Compliance Tracking"]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              What California Employers Are Saying
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear from businesses that have switched from generic compliance tools to our purpose-built SB 553
              solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <TestimonialWithPhoto
              quote="After trying to adapt our generic HR platform for SB 553, we switched to SBShield. Their California-specific templates saved me days of legal review."
              name="Marisol Rodriguez"
              role="HR Director"
              company="Retail Chain, Los Angeles"
            />
            <TestimonialWithPhoto
              quote="The difference is night and day. SBShield was clearly built from the ground up for SB 553, not cobbled together as an afterthought like our previous solution."
              name="David Chen"
              role="Safety Compliance Manager"
              company="Manufacturing, Santa Clara"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">How SB553Shield Works</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our purpose-built platform streamlines every aspect of SB 553 compliance in five simple steps.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ol className="space-y-8">
              <li className="flex gap-6 items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl shrink-0">
                  1
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-bold mb-2">Generate a California-specific plan in minutes</h3>
                  <p className="text-muted-foreground">
                    Not a generic template—a purpose-built engine with California-specific language that meets every SB
                    553 requirement.
                  </p>
                </div>
              </li>
              <li className="flex gap-6 items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl shrink-0">
                  2
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-bold mb-2">Assign SB 553-specific training modules</h3>
                  <p className="text-muted-foreground">
                    Training designed specifically for SB 553 with California-specific scenarios and digital
                    acknowledgements.
                  </p>
                </div>
              </li>
              <li className="flex gap-6 items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl shrink-0">
                  3
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-bold mb-2">Log incidents with SB 553-specific forms</h3>
                  <p className="text-muted-foreground">
                    Capture exactly what Cal/OSHA requires with structured forms designed specifically for SB 553.
                  </p>
                </div>
              </li>
              <li className="flex gap-6 items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl shrink-0">
                  4
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-bold mb-2">Monitor compliance with real-time dashboard</h3>
                  <p className="text-muted-foreground">
                    Track your SB 553 readiness with metrics designed specifically for California's unique requirements.
                  </p>
                </div>
              </li>
              <li className="flex gap-6 items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl shrink-0">
                  5
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-bold mb-2">Export Cal/OSHA-ready documentation</h3>
                  <p className="text-muted-foreground">
                    Generate the exact documentation Cal/OSHA inspectors expect with one-click audit-ready exports.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Resource Hub Section */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Free SB 553 Compliance Resources</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Access our library of free resources designed to help California employers comply with SB 553.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Remote Worker Requirements</CardTitle>
                <CardDescription>Learn how SB 553 applies to remote workers</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/compliance-hub/remote-worker-requirements">
                    Read Guide <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Audit Your WVPP</CardTitle>
                <CardDescription>Step-by-step guide to auditing your WVPP</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/compliance-hub/audit-wvpp-cal-osha">
                    Read Guide <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">SB 553 vs. Federal OSHA</CardTitle>
                <CardDescription>Key differences between SB 553 and federal requirements</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/compliance-hub/sb553-vs-federal-osha">
                    Read Guide <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Incident Log Template</CardTitle>
                <CardDescription>Free template for logging workplace violence incidents</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/compliance-hub/incident-log-template">
                    Download <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Button asChild>
              <Link href="/compliance-hub">
                Visit Compliance Resource Hub <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Beta signup section */}
      <section id="beta-signup" className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-600 font-medium mb-4">
                Limited Availability
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Join Our SB 553 Compliance Beta Program
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Be among the first to use the only platform built exclusively for SB 553 compliance—not a generic tool
                with SB 553 tacked on.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>Early access to all features</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>Priority support during implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>Influence future feature development</span>
                </li>
              </ul>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Sign Up for Exclusive Beta Access</CardTitle>
                  <CardDescription>Limited spots available for the only purpose-built SB 553 solution.</CardDescription>
                </CardHeader>
                <CardContent>
                  <BetaSignupForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />
    </SiteLayout>
  )
}
