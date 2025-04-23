import Script from "next/script"
import { BarChart3, ClipboardList, FileText, FolderArchive, GraduationCap, Users, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import BetaSignupForm from "@/components/beta-signup-form"
import { FaqSection } from "@/components/faq-section"
import { SiteLayout } from "@/components/layout/site-layout"
import { FeatureCard } from "@/components/ui/feature-card"
import { HumanCenteredImage } from "@/components/ui/human-centered-image"
import { TYPOGRAPHY, SPACING } from "@/lib/constants"

// Define a default placeholder image path
const DEFAULT_PLACEHOLDER = "/interconnected-data-flow.png"

export default function LandingPage() {
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
              // Additional FAQ items would be here
            ],
          }),
        }}
      />

      <section className={`w-full ${SPACING.section}`}>
        <div className={SPACING.container}>
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                The Only Pure-Play SB 553 Solution
              </div>
              <h1 className={TYPOGRAPHY.h1}>Purpose-Built SB 553 Compliance Platform for California Employers</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                The first and only platform designed exclusively for SB 553 compliance—not a bolted-on feature or
                generic compliance tool with workarounds.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <HumanCenteredImage
                src="/dashboard-with-manager.jpg"
                alt="Compliance manager confidently reviewing SB553Shield dashboard"
                width={500}
                height={300}
                priority
                quality={90}
                caption="Purpose-built from the ground up for SB 553 compliance"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={`w-full ${SPACING.section} border-t`}>
        <div className={SPACING.container}>
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className={TYPOGRAPHY.h2}>Why a Dedicated SB 553 Solution Matters</h2>
              <p className={TYPOGRAPHY.body}>
                California's SB 553 (effective July 1, 2024) imposes steep fines (up to $25k/incident) on employers that
                fail to document, train, log, and review workplace-violence prevention. Generic HR tools and compliance
                add-ons fall short because:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                  <span>
                    <strong>Generic HR platforms</strong> — treat SB 553 as an afterthought with clumsy workarounds and
                    missing California-specific requirements.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                  <span>
                    <strong>Compliance add-ons</strong> — lack the specialized workflows and California-specific
                    templates needed for true SB 553 readiness.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                  <span>
                    <strong>One-off consultant plans</strong> — cost $3k–$5k with no ongoing updates as Cal/OSHA
                    guidance evolves.
                  </span>
                </li>
              </ul>
              <div className="mt-4 inline-block rounded-lg border border-muted-foreground/20 bg-muted/50 px-4 py-3 text-sm italic text-muted-foreground">
                "Finally, a tool built specifically for SB 553—not another generic compliance platform with SB 553
                tacked on as an afterthought." – Pilot User, 50-person retail chain
              </div>
            </div>
            <div className="flex items-center justify-center">
              <HumanCenteredImage
                src="/before-after-compliance.jpg"
                alt="Before and after comparison showing the transformation from paper-based to digital compliance"
                width={600}
                height={400}
                quality={90}
                caption="Transform from generic workarounds to purpose-built SB 553 compliance"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className={`w-full ${SPACING.section} bg-muted`}>
        <div className={SPACING.container}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className={TYPOGRAPHY.h2}>Built Exclusively for SB 553 Compliance</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Unlike generic HR tools with SB 553 tacked on, SB553Shield was designed from day one with a singular
                focus: making SB 553 compliance effortless.
              </p>
            </div>
          </div>
          <div className="mx-auto grid gap-8 py-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            <FeatureCard
              icon={<FileText className="h-8 w-8 text-primary" />}
              title="SB 553-Specific Plan Generator"
              description="Not a generic template—a purpose-built engine with California-specific language that meets every SB 553 requirement."
              features={["California-Specific Templates", "SB 553 Legal Clauses", "Cal/OSHA-Ready Formatting"]}
              imageSrc="/feature-plan-generator.jpg"
              imageAlt="HR manager customizing a compliance template"
            />
            <FeatureCard
              icon={<GraduationCap className="h-8 w-8 text-primary" />}
              title="SB 553 Training Modules"
              description="Training designed specifically for SB 553 requirements—not repurposed general safety content."
              features={["SB 553 Micro-learning", "California-Specific Scenarios", "Digital Acknowledgements"]}
              imageSrc="/feature-training.jpg"
              imageAlt="Employee completing training on mobile device"
            />
            <FeatureCard
              icon={<ClipboardList className="h-8 w-8 text-primary" />}
              title="Cal/OSHA-Ready Incident Logging"
              description="Capture exactly what Cal/OSHA requires—not generic incident forms missing critical SB 553 fields."
              features={["SB 553 Structured Forms", "Cal/OSHA Evidence Format", "Automatic Escalation"]}
              imageSrc="/feature-incident-logging.jpg"
              imageAlt="Manager documenting an incident on tablet"
            />
            <FeatureCard
              icon={<BarChart3 className="h-8 w-8 text-primary" />}
              title="SB 553 Compliance Dashboard"
              description="Track your exact SB 553 readiness—not generic compliance metrics that miss California's unique requirements."
              features={["SB 553 Readiness Score", "Cal/OSHA Updates", "California-Specific Alerts"]}
              imageSrc="/feature-dashboard.jpg"
              imageAlt="Executive reviewing compliance metrics"
            />
            <FeatureCard
              icon={<FolderArchive className="h-8 w-8 text-primary" />}
              title="Cal/OSHA Audit-Ready Exports"
              description="Generate the exact documentation Cal/OSHA inspectors expect—not generic reports that miss critical elements."
              features={["Cal/OSHA PDF Format", "SB 553 Documentation", "Audit-Ready Structure"]}
              imageSrc="/feature-document-vault.jpg"
              imageAlt="Team preparing documentation for audit"
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-primary" />}
              title="California Multi-Location Support"
              description="Manage SB 553 compliance across all your California locations with location-specific requirements."
              features={["County-Specific Templates", "Local Hazard Assessments", "Regional Compliance Tracking"]}
              imageSrc="/feature-user-management.jpg"
              imageAlt="Administrator setting up user permissions"
            />
          </div>
        </div>
      </section>

      {/* Beta signup section */}
      <section id="beta-signup" className="w-full pt-6 pb-12 md:pt-12 md:pb-24 lg:pt-16 lg:pb-32 bg-primary/5">
        <div className={SPACING.container}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-600 font-medium mb-2">
                Only 17 Beta Spots Left
              </div>
              <h2 className={TYPOGRAPHY.h2}>Join Our Pure-Play SB 553 Beta Program</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Be among the first to use the only platform built exclusively for SB 553 compliance—not a generic tool
                with SB 553 tacked on.
              </p>
            </div>
            <div className="mx-auto w-full max-w-md">
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

      <FaqSection />
    </SiteLayout>
  )
}
