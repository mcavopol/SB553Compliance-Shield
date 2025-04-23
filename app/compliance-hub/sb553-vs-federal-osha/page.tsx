import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight, Download, AlertTriangle, CheckCircle } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export const metadata = {
  title: "SB 553 Training vs. Federal OSHA: Key Differences Explained | SB553 Compliance Shield",
  description:
    "Discover how California's SB 553 workplace‑violence training rules diverge from federal OSHA requirements—so you can stay compliant, avoid fines, and design the right program for your team.",
}

export default function Sb553VsFederalOsha() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Compliance Resource Hub", href: "/compliance-hub" },
    { label: "SB 553 Training vs. Federal OSHA", isCurrent: true },
  ]

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />

      <article className="prose prose-slate max-w-none">
        <h1>SB 553 Training vs. Federal OSHA: What's Different?</h1>

        <div className="not-prose bg-muted p-4 rounded-lg mb-8">
          <p className="text-sm text-muted-foreground italic">
            Published: April 18, 2024 | Last Updated: April 18, 2024
          </p>
        </div>

        <p className="lead">
          California's SB 553 (effective July 1 2024) introduces new, state‑specific training mandates on workplace
          violence that go 1 2024) introduces new, state‑specific training mandates on workplace violence that go beyond
          the federal OSHA framework. If you're already running OSHA‑compliant safety courses, don't assume you're
          covered—you'll need to adapt your program to satisfy SB 553's unique requirements.
        </p>

        <p>In this guide, we'll:</p>

        <ul>
          <li>Highlight the scope and audience differences.</li>
          <li>Compare frequency and content mandates.</li>
          <li>Walk through documentation, delivery, and enforcement nuances.</li>
          <li>Summarize with a quick‑reference table.</li>
          <li>Show you how SBShield automates every step.</li>
        </ul>

        <div className="not-prose my-12">
          <div className="bg-primary/5 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-foreground text-background font-bold mr-3 text-sm">
                1
              </span>
              Scope & Applicability
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Federal OSHA</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                    <span>
                      Applies to employers with 1+ employees in safety‑sensitive industries (your mileage may vary by
                      standard).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                    <span>
                      Covers a broad range of hazards (chemicals, machinery, ergonomics), including general "hazard
                      Communication" for violence.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
                <h3 className="text-xl font-bold text-amber-800 mb-4">SB 553</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                    <span>Applies to all California employers, regardless of size or industry, with 1+ employees.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                    <span>Exempts only state/local government entities already governed by other statutes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                    <span>Zero‑tolerance on workplace violence: both physical and credible threats.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded mt-6">
              <p className="text-red-800 font-medium">
                Bottom line: Even if your existing OSHA program runs monthly safety talks, SB 553 mandates a separate,
                California‑specific training on violence prevention—no shortcuts.
              </p>
            </div>
          </div>

          <div className="bg-primary/5 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold mr-3">
                2
              </span>
              Training Frequency & Renewal
            </h2>

            <div className="overflow-hidden rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Requirement</TableHead>
                    <TableHead>Federal OSHA</TableHead>
                    <TableHead>SB 553</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Initial training</TableCell>
                    <TableCell>Varies by standard (often at hire or annually)</TableCell>
                    <TableCell>Within 6 months of Jul 1 2024 for existing employees; at hire for new staff</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Refresher cadence</TableCell>
                    <TableCell>Typically annual (e.g. HazCom, HAZWOPER)</TableCell>
                    <TableCell>Annual minimum, plus whenever plan updates</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Additional triggers</TableCell>
                    <TableCell>Major hazard changes only</TableCell>
                    <TableCell>Any legislative amendment, Cal/OSHA guidance update, or post–incident review</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="bg-primary/5 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold mr-3">
                3
              </span>
              Content & Delivery
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-bold text-blue-800 mb-4">OSHA approach:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                    <span>Largely general‑industry templates with sections on hazard awareness.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                    <span>Instructor-led or e‑learning, but no mandated format for violence.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
                <h3 className="text-xl font-bold text-amber-800 mb-4">SB 553 specifics:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
                    <span>Behavioral warning signs (verbal threats, stalking).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
                    <span>Response protocols (lockdown, de‑escalation scripts).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
                    <span>Reporting channels (anonymous hotline vs. direct to HR).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
                    <span>Special populations (remote workers, third‑party contractors).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
                    <span>Post‑incident reviews integrated into training updates.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mt-6">
              <p className="text-blue-800 font-medium">
                Pro tip: SB 553 requires you to document not just "what" you teach, but "how" (method, materials,
                attendance)—a level of granularity above most OSHA courses.
              </p>
            </div>
          </div>

          <div className="bg-primary/5 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold mr-3">
                4
              </span>
              Documentation & Recordkeeping
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-bold text-blue-800 mb-4">OSHA recordkeeping:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                    <span>Post‑training rosters, sign‑in sheets, certificate files.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                    <span>Often stored in paper binders or basic LMS exports.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
                <h3 className="text-xl font-bold text-amber-800 mb-4">SB 553 mandates:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
                    <span>Digital acknowledgements with timestamp, IP or geolocation data.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
                    <span>Versioned training materials—you must keep each iteration after a legislative change.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
                    <span>
                      Incident‑linked training logs—if an event occurs, you must show the exact training curriculum
                      employees had at that time.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded mt-6">
              <p className="text-red-800 font-medium">
                Risk: In a Cal/OSHA audit, inability to produce a dated PDF of the exact slide deck and attendance list
                can trigger fines up to $25,000 per violation.
              </p>
            </div>
          </div>

          <div className="bg-primary/5 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold mr-3">
                5
              </span>
              Enforcement & Penalties
            </h2>

            <div className="overflow-hidden rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Aspect</TableHead>
                    <TableHead>Federal OSHA</TableHead>
                    <TableHead>SB 553</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Enforcing agency</TableCell>
                    <TableCell>Federal/DOL inspectors</TableCell>
                    <TableCell>Cal/OSHA (state inspectors; unannounced)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Penalty range</TableCell>
                    <TableCell>$13,653–$136,532 per violation</TableCell>
                    <TableCell>Up to $25,000/incident, plus mandatory corrective action plans</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Audit focus</TableCell>
                    <TableCell>General hazard awareness; record accuracy</TableCell>
                    <TableCell>Plan completeness, training logs, incident follow‑up</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="bg-primary/5 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold mr-3">
                6
              </span>
              Why This Matters Now
            </h2>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                <span className="font-medium">
                  Immediate audit risk—Cal/OSHA inspections are ramping up post‑July 2024.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                <span className="font-medium">
                  High‑cost consultants—outsourcing a one‑off plan & training easily runs $3,000–$5,000+.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                <span className="font-medium">
                  Digital gaps—most small employers lack systems to version, date‑stamp, and link training to incidents.
                </span>
              </li>
            </ul>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded mt-6">
              <p className="text-red-800 font-medium">
                If you leave SB 553 training to chance, you'll face expensive retrofits, scrambling to rebuild
                records—and potentially six‑figure penalties.
              </p>
            </div>
          </div>

          <div className="bg-primary/5 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold mr-3">
                7
              </span>
              Quick‑Reference Comparison Table
            </h2>

            <div className="overflow-hidden rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Feature</TableHead>
                    <TableHead>Federal OSHA</TableHead>
                    <TableHead>SB 553</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Applicability</TableCell>
                    <TableCell>Safety industries</TableCell>
                    <TableCell>All CA employers</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Initial training</TableCell>
                    <TableCell>Varies</TableCell>
                    <TableCell>By hire / by Jul 1 '24</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Refresher</TableCell>
                    <TableCell>Often annual</TableCell>
                    <TableCell>Annual + on any update</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Content depth</TableCell>
                    <TableCell>Broad hazard topics</TableCell>
                    <TableCell>Violence‑specific protocols</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Documentation</TableCell>
                    <TableCell>Paper/LMS exports</TableCell>
                    <TableCell>Digital, versioned, geo‑tagged</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Enforcement</TableCell>
                    <TableCell>OSHA auditors</TableCell>
                    <TableCell>Cal/OSHA unannounced</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Max penalty</TableCell>
                    <TableCell>$13,653 per violation</TableCell>
                    <TableCell>$25,000 per incident</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="bg-primary/5 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold mr-3">
                8
              </span>
              Next Steps & Resources
            </h2>

            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">
                    Download our free "SB 553 vs OSHA Training Checklist" PDF
                  </h3>
                </div>
                <Button className="shrink-0 gap-2">
                  <Download className="h-4 w-4" />
                  Download Now
                </Button>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-amber-800 mb-2">
                    See SBShield in action: Automate plan updates, digital sign‑offs, and incident‑linked training logs
                  </h3>
                </div>
                <Button variant="outline" className="shrink-0">
                  Get Early Access
                </Button>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Read more:</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/compliance-hub/wvpp-template"
                      className="text-primary hover:underline flex items-center gap-1"
                    >
                      SB 553 Workplace‑Violence Prevention Plan Template
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/compliance-hub/audit-wvpp-cal-osha"
                      className="text-primary hover:underline flex items-center gap-1"
                    >
                      How to Audit Your WVPP for Cal/OSHA
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="not-prose bg-primary/5 p-8 rounded-lg my-8">
          <h2 className="text-2xl font-bold mb-4">Need help building a compliant training program?</h2>
          <p className="mb-6">
            SBShield embeds every SB 553 requirement—templates, digital sign‑offs, automated reminders, and audit‑ready
            exports—so you're covered from day 1. Join the beta and get your first plan generated in minutes.
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg">
              <Link href="/#beta-signup">Join SBShield Beta</Link>
            </Button>
          </div>
        </div>
      </article>
    </div>
  )
}
