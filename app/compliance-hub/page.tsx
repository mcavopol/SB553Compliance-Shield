import Link from "next/link"
import { ArrowRight, FileText, Users, ClipboardCheck, Scale } from "lucide-react"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TYPOGRAPHY, RESOURCE_LINKS } from "@/lib/constants"

export const metadata = {
  title: "Compliance Resource Hub | SB553 Compliance Shield",
  description:
    "Free resources to help California employers comply with SB 553 workplace violence prevention requirements.",
}

export default function ComplianceHub() {
  return (
    <div className="space-y-10">
      <div className="space-y-4 max-w-3xl">
        <h1 className={TYPOGRAPHY.h1}>Compliance Resource Hub</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Free resources to help California employers comply with SB 553 workplace violence prevention requirements.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <ResourceCard
          icon={<Users className="h-5 w-5 text-primary" />}
          title="SB 553 Remote Worker Requirements"
          description="Learn how SB 553 applies to remote workers and what employers need to do to ensure compliance."
          href={RESOURCE_LINKS.remoteWorker}
        />
        <ResourceCard
          icon={<ClipboardCheck className="h-5 w-5 text-primary" />}
          title="How to Audit Your WVPP for Cal/OSHA"
          description="A step-by-step guide to auditing your Workplace Violence Prevention Plan before Cal/OSHA does."
          href={RESOURCE_LINKS.auditWvpp}
        />
        <ResourceCard
          icon={<Scale className="h-5 w-5 text-primary" />}
          title="SB 553 Training vs. Federal OSHA: What's Different?"
          description="Understand the key differences between California's SB 553 training requirements and federal OSHA guidelines."
          href={RESOURCE_LINKS.sb553VsFederal}
        />
        <ResourceCard
          icon={<FileText className="h-5 w-5 text-primary" />}
          title="WVPP Incident Log Template for Small Retailers"
          description="Download a free incident log template specifically designed for small retail businesses in California."
          href={RESOURCE_LINKS.incidentLog}
        />
      </div>

      <div className="mt-12 rounded-xl bg-primary/5 p-8 border border-primary/10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold">Need More Comprehensive Help?</h2>
            <p className="text-muted-foreground max-w-xl">
              SB553 Compliance Shield provides a complete solution for SB 553 compliance, with automated tools to
              generate plans, manage training, and track incidents.
            </p>
          </div>
          <Button asChild size="lg" className="shrink-0">
            <Link href="/#beta-signup">
              Join Our Beta <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

function ResourceCard({ icon, title, description, href }) {
  return (
    <Card className="flex flex-col h-full transition-all hover:shadow-md hover:border-primary/20">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          {icon}
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto pt-4">
        <Button asChild variant="outline" className="w-full group">
          <Link href={href} className="flex items-center justify-center">
            Read Article <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
