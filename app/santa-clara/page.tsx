import Link from "next/link"
import { SafeImage } from "@/components/ui/safe-image"
import Script from "next/script"
import {
  ArrowRight,
  CheckCircle,
  MapPin,
  FileText,
  GraduationCap,
  MapIcon,
  BarChart3,
  Download,
  Building,
  Award,
  Shield,
  AlertTriangle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const metadata = {
  title: "Santa Clara's Only Pure-Play SB 553 Compliance Solution | SB 553 Compliance Shield",
  description:
    "The only platform built exclusively for SB 553 compliance in Santa Clara—not a generic HR tool with compliance tacked on.",
  keywords:
    "SB 553 Santa Clara, purpose-built compliance, dedicated SB 553 solution, Santa Clara WVPP template, Cal/OSHA compliance Santa Clara",
}

export default function SantaClaraLanding() {
  return (
    <div className="flex min-h-screen flex-col">
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://sb553shield.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Santa Clara SB 553 Compliance",
                item: "https://sb553shield.com/santa-clara",
              },
            ],
          }),
        }}
      />
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container px-4 py-3 md:py-0">
          <div className="flex h-10 md:h-16 items-center justify-between">
            <div className="flex gap-2 items-center">
              <Link href="/" className="flex items-center gap-2">
                <Shield className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                <span className="text-base md:text-xl font-bold">SB553 Compliance Shield</span>
              </Link>
            </div>
            <div className="flex flex-1 items-center justify-end space-x-4">
              <nav className="flex items-center space-x-4">
                <Link
                  href="/#features"
                  className="hidden md:inline-flex text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  Features
                </Link>
                <Link
                  href="/compliance-hub"
                  className="hidden md:inline-flex text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  Resources
                </Link>
                <Button asChild size="sm">
                  <Link href="#santa-clara-offer">Get Compliance Kit</Link>
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex items-center gap-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    Santa Clara
                  </div>
                  <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                    Pure-Play SB 553 Solution
                  </div>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Santa Clara's Only Purpose-Built SB 553 Compliance Platform
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Not a generic HR tool with SB 553 tacked on—a dedicated platform built from the ground up for Santa
                  Clara businesses.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Button asChild size="lg">
                    <Link href="#santa-clara-offer">
                      Get Your Free Santa Clara Compliance Kit <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[300px] md:h-[350px] rounded-lg overflow-hidden">
                  <SafeImage
                    src="/santa-clara-tech-team.jpg"
                    alt="Santa Clara tech professionals using SB553Shield compliance platform"
                    fill
                    className="object-cover rounded-lg border shadow-lg"
                    priority
                  />
                  <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-2 rounded-md flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Santa Clara, CA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Santa Clara Employers Choose SBShield */}
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Why Santa Clara Businesses Need a Dedicated SB 553 Solution
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Santa Clara's unique mix of tech campuses, manufacturing sites, and retail hubs face SB 553 challenges
                  that generic compliance tools simply weren't designed to handle. Businesses using non-specialized
                  solutions face:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                    <span>
                      <strong>Generic HR platforms</strong> with SB 553 bolted on as an afterthought, missing Santa
                      Clara-specific requirements
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                    <span>
                      <strong>Compliance add-ons</strong> that waste hours customizing state templates to fit county
                      ordinances
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                    <span>
                      <strong>Expensive legal consultants</strong> charging $350+/hr for one-time plans with no ongoing
                      updates
                    </span>
                  </li>
                </ul>
                <p className="text-lg">
                  SBShield is different—the only platform built exclusively for SB 553 compliance with Santa
                  Clara-specific templates, training, and incident logging designed from the ground up.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                  <SafeImage
                    src="/santa-clara-training.jpg"
                    alt="Santa Clara business team completing SB553 compliance training"
                    fill
                    className="object-cover rounded-lg border shadow-lg"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Santa Clara-Focused Solution */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Purpose-Built for Santa Clara SB 553 Compliance
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Unlike generic HR tools with SB 553 tacked on, our platform was designed from day one with Santa
                  Clara's unique compliance needs in mind.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<FileText className="h-10 w-10 text-primary" />}
                title="County-Specific WVPP Templates"
                description="Not generic templates—purpose-built for Santa Clara with local hazards & Cal/OSHA requirements"
                benefit="No more adapting generic plans to county requirements"
              />
              <FeatureCard
                icon={<GraduationCap className="h-10 w-10 text-primary" />}
                title="SB 553 Micro-Training"
                description="Training designed specifically for SB 553—not repurposed general safety content"
                benefit="Santa Clara-specific scenarios for tech, manufacturing, and retail"
              />
              <FeatureCard
                icon={<MapIcon className="h-10 w-10 text-primary" />}
                title="County-Optimized Incident Logging"
                description="Capture exactly what Cal/OSHA requires—not generic incident forms"
                benefit="Geo-tagging for Santa Clara's diverse business districts"
              />
              <FeatureCard
                icon={<BarChart3 className="h-10 w-10 text-primary" />}
                title="SB 553 Compliance Dashboard"
                description="Track your exact SB 553 readiness—not generic compliance metrics"
                benefit="Santa Clara-specific compliance scoring and district tracking"
              />
              <FeatureCard
                icon={<Download className="h-10 w-10 text-primary" />}
                title="Cal/OSHA Audit-Ready Exports"
                description="Generate the exact documentation county inspectors expect—not generic reports"
                benefit="One-click exports formatted specifically for Santa Clara audits"
              />
              <FeatureCard
                icon={<Building className="h-10 w-10 text-primary" />}
                title="County Regulatory Updates"
                description="Automatic alerts when Santa Clara guidance changes—not generic state updates"
                benefit="Stay ahead of county-specific compliance requirements"
              />
            </div>
          </div>
        </section>

        {/* Testimonials & Endorsements */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter mb-8">
                Santa Clara Businesses Choose Purpose-Built Solutions
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-xl border shadow-sm">
                <div className="relative">
                  <div className="text-6xl text-primary/20 font-serif absolute -top-6 -left-6">"</div>
                  <blockquote className="text-lg md:text-xl italic text-muted-foreground mb-6 px-6">
                    After trying to adapt our generic HR platform for SB 553, we switched to SBShield—the only solution
                    built specifically for this law. Their Santa Clara-specific templates are a game-changer.
                  </blockquote>
                  <div className="text-6xl text-primary/20 font-serif absolute -bottom-10 -right-6">"</div>
                </div>
                <div className="flex items-center gap-4 mt-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">RK</span>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">Rosa Kim</p>
                    <p className="text-sm text-muted-foreground">Executive Director, Santa Clara Chamber of Commerce</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl border shadow-sm">
                <div className="relative">
                  <div className="text-6xl text-primary/20 font-serif absolute -top-6 -left-6">"</div>
                  <blockquote className="text-lg md:text-xl italic text-muted-foreground mb-6 px-6">
                    We reviewed SBShield's plan and training content; it's the only solution we've seen built
                    exclusively for SB 553 compliance—not a generic platform with SB 553 tacked on as an afterthought.
                  </blockquote>
                  <div className="text-6xl text-primary/20 font-serif absolute -bottom-10 -right-6">"</div>
                </div>
                <div className="flex items-center gap-4 mt-8">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <SafeImage
                      src="/wilson-sonsini-logo.png"
                      alt="Wilson Sonsini Goodrich & Rosati logo"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">Legal Team</p>
                    <p className="text-sm text-muted-foreground">Wilson Sonsini Goodrich & Rosati</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-lg border">
                <Award className="h-6 w-6 text-amber-500" />
                <span className="font-medium">
                  Endorsed by the Santa Clara Chamber of Commerce as the only purpose-built SB 553 solution
                </span>
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
                    <h3 className="text-xl font-bold mb-2">Sign Up with your Santa Clara address & business type.</h3>
                    <p className="text-muted-foreground">
                      Unlike generic platforms, we customize your experience based on your specific location and
                      industry within Santa Clara County.
                    </p>
                  </div>
                </li>
                <li className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Generate a county-specific plan in under 5 minutes.</h3>
                    <p className="text-muted-foreground">
                      Not a generic template—a purpose-built engine with Santa Clara-specific hazards and compliance
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
                      Not repurposed safety content—training designed exclusively for SB 553 with Santa Clara-specific
                      scenarios.
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
                      Not generic incident reports—forms designed specifically for SB 553 with Santa Clara geo-tagging.
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
                      Not generic compliance reports—documentation formatted specifically for Santa Clara Cal/OSHA
                      audits.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
            <div className="mt-8 text-center">
              <p className="mb-4 text-muted-foreground">
                Ready to switch from generic compliance tools to the only platform built exclusively for SB 553?
              </p>
              <p>
                <Link href="/" className="text-primary hover:underline font-medium">
                  Get SBShield for purpose-built SB 553 compliance
                </Link>{" "}
                or{" "}
                <Link href="/compliance-hub" className="text-primary hover:underline">
                  explore our comprehensive SB 553 resource hub
                </Link>{" "}
                for more guidance.
              </p>
            </div>
          </div>
        </section>

        {/* Special Santa Clara Offer */}
        <section id="santa-clara-offer" className="w-full py-12 md:py-24 lg:py-32 bg-primary/5 border-t border-b">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800 w-fit">
                  Exclusive Offer
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Santa Clara's Only Pure-Play SB 553 Solution
                </h2>
                <p className="text-lg">
                  <strong>Free Santa Clara Compliance Kit</strong> — includes SB 553-specific templates, incident logs,
                  and audit guides designed exclusively for Santa Clara businesses—not generic compliance materials.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Purpose-built Santa Clara WVPP template with district-specific hazard assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>SB 553-specific incident log with Santa Clara geo-tagging—not a generic form</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Santa Clara Cal/OSHA audit preparation checklist—not a generic compliance guide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>
                      30-minute consultation with our Santa Clara SB 553 specialists—not general compliance staff
                    </span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Button asChild size="lg">
                    <Link href="#claim-form">
                      Claim Your Free Kit <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                  <SafeImage
                    src="/santa-clara-audit-kit.jpg"
                    alt="Santa Clara compliance team reviewing SB553Shield audit documentation"
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
                Stop forcing generic compliance tools to handle SB 553. Switch to the only platform built exclusively
                for California's workplace violence prevention law.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Join SBShield Santa Clara</CardTitle>
                  <CardDescription>
                    Get access to Santa Clara's only pure-play SB 553 compliance solution.
                  </CardDescription>
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
                      <Input id="company" placeholder="Your Santa Clara Business" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Santa Clara Business Address</Label>
                      <Input id="address" placeholder="123 Main St, Santa Clara, CA" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="business-type">Business Type</Label>
                      <Select>
                        <SelectTrigger id="business-type">
                          <SelectValue placeholder="Select business type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tech">Technology</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employees">Number of Employees</Label>
                      <Input id="employees" placeholder="e.g. 25" />
                    </div>
                    <Button type="submit" className="w-full">
                      Get Your Free Santa Clara Compliance Kit
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section with Schema */}
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter mb-6">
                Frequently Asked Questions About Purpose-Built SB 553 Solutions
              </h2>
              <p className="max-w-[800px] text-muted-foreground">
                Learn why a dedicated SB 553 platform outperforms generic compliance tools with SB 553 tacked on.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-2">
                  Why do I need a purpose-built SB 553 solution instead of a generic compliance tool?
                </h3>
                <p className="text-muted-foreground">
                  Generic compliance tools weren't designed with SB 553's unique requirements in mind. They often miss
                  critical California-specific elements, use generic forms that don't capture required Cal/OSHA data,
                  and lack the specialized workflows needed for true SB 553 compliance. Our platform was built from the
                  ground up specifically for SB 553, with no compromises or workarounds.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-2">How is SBShield different from other compliance solutions?</h3>
                <p className="text-muted-foreground">
                  Unlike generic HR or safety platforms that added SB 553 as an afterthought, SBShield was designed from
                  day one with a singular focus: making SB 553 compliance effortless. Every feature—from our template
                  engine to our training modules to our incident logs—was built specifically for SB 553's unique
                  requirements, not adapted from general compliance tools.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-2">What Santa Clara-specific features does your platform offer?</h3>
                <p className="text-muted-foreground">
                  Our platform includes Santa Clara County-specific WVPP templates with local hazard assessments,
                  training modules with Santa Clara business scenarios, incident logging with geo-tagging for Santa
                  Clara districts, and documentation formatted specifically for Santa Clara Cal/OSHA audits. Generic
                  platforms simply can't match this level of local specialization.
                  <Link href="/" className="text-primary hover:underline ml-1">
                    SBShield's purpose-built platform
                  </Link>{" "}
                  was designed exclusively for California SB 553 compliance.
                </p>
              </div>
            </div>

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
                      name: "Why do I need a purpose-built SB 553 solution instead of a generic compliance tool?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Generic compliance tools weren't designed with SB 553's unique requirements in mind. They often miss critical California-specific elements, use generic forms that don't capture required Cal/OSHA data, and lack the specialized workflows needed for true SB 553 compliance. Our platform was built from the ground up specifically for SB 553, with no compromises or workarounds.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How is SBShield different from other compliance solutions?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Unlike generic HR or safety platforms that added SB 553 as an afterthought, SBShield was designed from day one with a singular focus: making SB 553 compliance effortless. Every feature—from our template engine to our training modules to our incident logs—was built specifically for SB 553's unique requirements, not adapted from general compliance tools.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What Santa Clara-specific features does your platform offer?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Our platform includes Santa Clara County-specific WVPP templates with local hazard assessments, training modules with Santa Clara business scenarios, incident logging with geo-tagging for Santa Clara districts, and documentation formatted specifically for Santa Clara Cal/OSHA audits. Generic platforms simply can't match this level of local specialization.",
                      },
                    },
                  ],
                }),
              }}
            />
          </div>
        </section>

        {/* Related Resources Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5 border-t">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Purpose-Built SB 553 Resources</h2>
              <p className="max-w-[800px] text-muted-foreground">
                Explore our library of SB 553-specific resources designed exclusively for California businesses—not
                generic compliance content.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg border hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2">SB 553-Specific WVPP Template</h3>
                <p className="text-muted-foreground mb-4">
                  Download our purpose-built WVPP template designed exclusively for SB 553—not a generic safety
                  template.
                </p>
                <Link
                  href="/compliance-hub/wvpp-template"
                  className="text-primary hover:underline font-medium flex items-center"
                >
                  Download Template <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg border hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2">SB 553-Specific Training Guide</h3>
                <p className="text-muted-foreground mb-4">
                  Learn how to implement training designed exclusively for SB 553—not repurposed safety content.
                </p>
                <Link
                  href="/compliance-hub/sb553-vs-federal-osha"
                  className="text-primary hover:underline font-medium flex items-center"
                >
                  Read Guide <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg border hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2">SB 553-Specific Incident Log</h3>
                <p className="text-muted-foreground mb-4">
                  Get our incident log template designed exclusively for SB 553—not a generic incident form.
                </p>
                <Link
                  href="/compliance-hub/incident-log-template"
                  className="text-primary hover:underline font-medium flex items-center"
                >
                  Get Template <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Questions */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tighter mb-6">
                Questions About Our Pure-Play SB 553 Solution?
              </h2>
              <p className="max-w-[600px] text-lg mb-8">
                Email{" "}
                <a href="mailto:hello@sbshield.com" className="text-primary hover:underline">
                  hello@sbshield.com
                </a>
                . Our Santa Clara SB 553 specialists are here Monday–Friday, 9 AM–5 PM PST.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Santa Clara, CA</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex gap-2 items-center text-lg font-semibold">
            <Shield className="h-5 w-5 text-primary" />
            <span>SB553 Compliance Shield</span>
          </div>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
              Privacy Policy
            </Link>
            <span className="text-muted-foreground">|</span>
            <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
        <div className="container">
          <p className="text-center text-sm text-muted-foreground py-4">
            &copy; {new Date().getFullYear()} SB553 Compliance Shield. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description, benefit }) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="mb-2">{icon}</div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex items-start gap-2 mt-2 bg-primary/5 p-3 rounded-md">
          <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
          <span className="font-medium">{benefit}</span>
        </div>
      </CardContent>
    </Card>
  )
}
