import Link from "next/link"
import {
  ArrowRight,
  MapPin,
  FileText,
  GraduationCap,
  MapIcon,
  BarChart3,
  Download,
  Clock,
  AlertTriangle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SiteLayout } from "@/components/layout/site-layout"
import { FeatureCard } from "@/components/ui/feature-card"
import { TYPOGRAPHY, SPACING } from "@/lib/constants"
import { CheckCircle } from "lucide-react"
import { SafeImage } from "@/components/ui/safe-image"

// Default placeholder in case src is empty
const DEFAULT_PLACEHOLDER = "/downtown-la-evening.png"

export const metadata = {
  title: "Los Angeles' Only Pure-Play SB 553 Compliance Solution | SB 553 Compliance Shield",
  description:
    "The only platform built exclusively for SB 553 compliance in Los Angeles—not a generic HR tool with compliance tacked on.",
}

export default function LosAngelesLanding() {
  return (
    <SiteLayout>
      <section className={`w-full ${SPACING.section} bg-gradient-to-b from-primary/5 to-background`}>
        <div className={SPACING.container}>
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex items-center gap-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Los Angeles</div>
                <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                  Pure-Play SB 553 Solution
                </div>
              </div>
              <h1 className={TYPOGRAPHY.h1}>L.A.'s Only Purpose-Built SB 553 Compliance Platform</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Not a generic HR tool with SB 553 tacked on—a dedicated platform built from the ground up for Los
                Angeles businesses.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Button asChild size="lg">
                  <Link href="#la-offer">
                    Get Your Free L.A. Audit Kit <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-[300px] md:h-[350px] rounded-lg overflow-hidden">
                <SafeImage
                  src="/los-angeles-team.jpg"
                  alt="Diverse Los Angeles team using SB553Shield compliance platform"
                  fill
                  className="object-cover rounded-lg border shadow-lg"
                  priority
                />
                <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-2 rounded-md flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Los Angeles, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why LA Employers Choose SBShield */}
      <section className={`w-full ${SPACING.section} border-t`}>
        <div className={SPACING.container}>
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className={TYPOGRAPHY.h2}>Why Los Angeles Businesses Need a Dedicated SB 553 Solution</h2>
              <p className={TYPOGRAPHY.body}>
                California's SB 553 hits every L.A. employer with unique challenges that generic compliance tools simply
                weren't designed to handle. L.A. businesses using non-specialized solutions face:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                  <span>
                    <strong>Generic HR platforms</strong> with SB 553 bolted on as an afterthought, missing
                    L.A.-specific requirements
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                  <span>
                    <strong>Compliance add-ons</strong> that lack the specialized workflows Cal/OSHA inspectors expect
                    to see
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                  <span>
                    <strong>Expensive consultants</strong> charging $3k–$5k for one-time plans with no ongoing updates
                    as requirements evolve
                  </span>
                </li>
              </ul>
              <p className="text-lg">
                SBShield is different—the only platform built exclusively for SB 553 compliance with L.A.-specific
                templates, training, and incident logging designed from the ground up.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <SafeImage
                  src="/la-team-collaboration.jpg"
                  alt="Los Angeles small business team collaborating on SB553 compliance"
                  fill
                  className="object-cover rounded-lg border shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LA-Focused Solution */}
      <section className={`w-full ${SPACING.section} bg-muted`}>
        <div className={SPACING.container}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className={TYPOGRAPHY.h2}>Purpose-Built for Los Angeles SB 553 Compliance</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Unlike generic HR tools with SB 553 tacked on, our platform was designed from day one with L.A.'s unique
                compliance needs in mind.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<FileText className="h-10 w-10 text-primary" />}
              title="L.A.-Specific WVPP Templates"
              description="Not generic templates—purpose-built for L.A. businesses with local hazards & Cal/OSHA requirements"
              benefit="No more adapting generic plans to L.A. requirements"
            />
            <FeatureCard
              icon={<GraduationCap className="h-10 w-10 text-primary" />}
              title="SB 553 Micro-Training"
              description="Training designed specifically for SB 553—not repurposed general safety content"
              benefit="L.A.-specific scenarios for retail, hospitality, and entertainment"
            />
            <FeatureCard
              icon={<MapIcon className="h-10 w-10 text-primary" />}
              title="L.A.-Optimized Incident Logging"
              description="Capture exactly what Cal/OSHA requires—not generic incident forms"
              benefit="Geo-tagging for L.A.'s diverse neighborhoods and business districts"
            />
            <FeatureCard
              icon={<BarChart3 className="h-10 w-10 text-primary" />}
              title="SB 553 Compliance Dashboard"
              description="Track your exact SB 553 readiness—not generic compliance metrics"
              benefit="L.A.-specific compliance scoring and neighborhood tracking"
            />
            <FeatureCard
              icon={<Download className="h-10 w-10 text-primary" />}
              title="Cal/OSHA Audit-Ready Exports"
              description="Generate the exact documentation L.A. inspectors expect—not generic reports"
              benefit="One-click exports formatted specifically for L.A. Cal/OSHA audits"
            />
            <FeatureCard
              icon={<Clock className="h-10 w-10 text-primary" />}
              title="L.A.-Based Support Team"
              description="Talk to local experts who understand L.A.'s unique SB 553 challenges"
              benefit="Not offshore support reading from generic compliance scripts"
            />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-8">L.A. Businesses Choose Purpose-Built Solutions</h2>
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="text-6xl text-primary/20 font-serif absolute -top-6 -left-6">"</div>
                <blockquote className="text-xl md:text-2xl italic text-muted-foreground mb-6 px-8">
                  After trying to adapt our generic HR platform for SB 553, we switched to SBShield—the only solution
                  built specifically for this law. The difference is night and day. Their L.A.-specific templates saved
                  me days of legal review.
                </blockquote>
                <div className="text-6xl text-primary/20 font-serif absolute -bottom-16 -right-6">"</div>
              </div>
              <div className="flex items-center justify-center gap-4 mt-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">MR</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold">Marisol R.</p>
                  <p className="text-sm text-muted-foreground">Retail Operations Lead, Venice Beach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How Our Purpose-Built Platform Works</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <ol className="space-y-10">
              <li className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Sign Up with your L.A. business address.</h3>
                  <p className="text-muted-foreground">
                    Unlike generic platforms, we automatically detect your L.A. neighborhood and customize your
                    experience.
                  </p>
                </div>
              </li>
              <li className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Generate an L.A.-specific plan in under 5 minutes.</h3>
                  <p className="text-muted-foreground">
                    Not a generic template—a purpose-built engine with L.A.-specific hazards and compliance
                    requirements.
                  </p>
                </div>
              </li>
              <li className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Assign SB 553-specific training modules.</h3>
                  <p className="text-muted-foreground">
                    Not repurposed safety content—training designed exclusively for SB 553 with L.A.-specific scenarios.
                  </p>
                </div>
              </li>
              <li className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl shrink-0">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Log incidents with SB 553-specific forms.</h3>
                  <p className="text-muted-foreground">
                    Not generic incident reports—forms designed specifically for SB 553 with L.A. geo-tagging.
                  </p>
                </div>
              </li>
              <li className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl shrink-0">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Export Cal/OSHA-ready documentation.</h3>
                  <p className="text-muted-foreground">
                    Not generic compliance reports—documentation formatted specifically for L.A. Cal/OSHA audits.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Special LA Offer */}
      <section id="la-offer" className="w-full py-12 md:py-24 lg:py-32 bg-primary/5 border-t border-b">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800 w-fit">
                Exclusive Offer
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">L.A.'s Only Pure-Play SB 553 Solution</h2>
              <p className="text-lg">
                <strong>Free L.A. Audit Kit</strong> — includes SB 553-specific templates, incident logs, and audit
                guides designed exclusively for L.A. businesses—not generic compliance materials.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Purpose-built L.A. WVPP template with neighborhood-specific hazard assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>SB 553-specific incident log with L.A. geo-tagging—not a generic form</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>L.A. Cal/OSHA audit preparation checklist—not a generic compliance guide</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>30-minute consultation with our L.A. SB 553 specialists—not general compliance staff</span>
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Button asChild size="lg">
                  <Link href="#claim-form">
                    Claim Your Free L.A. Audit Kit <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                <SafeImage
                  src="/la-audit-preparation.jpg"
                  alt="Los Angeles business team preparing for compliance audit with SB553Shield"
                  fill
                  className="object-cover rounded-lg border shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Claim Form */}
      <section id="claim-form" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Ready for a Purpose-Built SB 553 Solution?
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Stop forcing generic compliance tools to handle SB 553. Switch to the only platform built exclusively for
              California's workplace violence prevention law.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Join SBShield Los Angeles</CardTitle>
                <CardDescription>Get access to L.A.'s only pure-play SB 553 compliance solution.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email</Label>
                    <Input id="email" type="email" placeholder="john@company.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Your L.A. Business" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">L.A. Business Address</Label>
                    <Input id="address" placeholder="123 Main St, Los Angeles, CA" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employees">Number of Employees</Label>
                    <Input id="employees" placeholder="e.g. 25" />
                  </div>
                  <Button type="submit" className="w-full">
                    Get Your Free L.A. Audit Kit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">Questions About Our Pure-Play SB 553 Solution?</h2>
            <p className="max-w-[600px] text-lg mb-8">
              Email us at{" "}
              <a href="mailto:hello@sbshield.com" className="text-primary hover:underline">
                hello@sbshield.com
              </a>{" "}
              or call our L.A. SB 553 specialists at{" "}
              <a href="tel:+12135550123" className="text-primary hover:underline">
                (213) 555‑0123
              </a>
              . We're the only team in L.A. focused exclusively on SB 553 compliance.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Downtown Los Angeles, CA</span>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
