import Link from "next/link"
import { ChevronRight, CheckCircle, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export const metadata = {
  title: "How to Audit Your Workplace Violence Prevention Plan (WVPP) for Cal/OSHA | SB553 Compliance Shield",
  description:
    "Step-by‑step guide to auditing your SB 553–compliant WVPP. Ensure your policy, training, and incident‑logging processes pass any Cal/OSHA inspection—download the free checklist.",
}

export default function AuditWvppCalOsha() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/compliance-hub" className="hover:text-primary">
          Compliance Resource Hub
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">How to Audit Your WVPP for Cal/OSHA</span>
      </div>

      <article className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold tracking-tight mb-6">
          How to Audit Your Workplace Violence Prevention Plan (WVPP) for Cal/OSHA
        </h1>

        <div className="bg-muted p-4 rounded-lg mb-8 flex items-center justify-between">
          <p className="text-sm text-muted-foreground italic m-0">
            Published: April 18, 2024 | Last Updated: April 18, 2024
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <ShareIcon className="h-4 w-4" /> Share
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <PrinterIcon className="h-4 w-4" /> Print
            </Button>
          </div>
        </div>

        <div className="bg-primary/5 p-8 rounded-xl mb-10 border border-primary/10">
          <p className="text-lg leading-relaxed m-0">
            Cal/OSHA inspections for SB 553 enforcement have ramped up across California—and most small‑to‑mid‑size
            employers are still relying on Word docs, spreadsheets, and email chains. A failed audit can trigger fines
            up to $25,000 per incident. This guide walks you through a systematic audit of your Workplace Violence
            Prevention Plan (WVPP), so you can identify and fix compliance gaps before an inspector does.
          </p>
        </div>

        <div className="grid gap-4 my-8">
          <div className="flex items-start gap-3 p-4 rounded-lg border bg-white">
            <div className="rounded-full bg-primary/10 p-1 mt-1">
              <CheckCircle className="h-4 w-4 text-primary" />
            </div>
            <span className="font-medium">Pinpoint policy gaps before an inspector does</span>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg border bg-white">
            <div className="rounded-full bg-primary/10 p-1 mt-1">
              <CheckCircle className="h-4 w-4 text-primary" />
            </div>
            <span className="font-medium">Verify your training roster is complete and current</span>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg border bg-white">
            <div className="rounded-full bg-primary/10 p-1 mt-1">
              <CheckCircle className="h-4 w-4 text-primary" />
            </div>
            <span className="font-medium">Test your incident‑logging workflow under real‑world conditions</span>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg border bg-white">
            <div className="rounded-full bg-primary/10 p-1 mt-1">
              <CheckCircle className="h-4 w-4 text-primary" />
            </div>
            <span className="font-medium">Lock down version control and proof of updates</span>
          </div>
        </div>

        <p className="text-xl font-medium">
          Use these six steps to turn your ad‑hoc compliance into a repeatable, audit‑proof process.
        </p>

        <Separator className="my-10" />

        <div className="space-y-12 my-12">
          <div className="bg-primary/5 rounded-xl p-8 border border-primary/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg shrink-0">
                1
              </div>
              <h2 className="text-2xl font-bold m-0">Gather Your Core Documents</h2>
            </div>
            <p className="text-lg font-medium mb-4">Goal: Centralize everything an auditor will ask for.</p>
            <ul className="space-y-3 mb-6 pl-0">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>Current WVPP policy (PDF or editable doc)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>Training records (attendance sheets, completion certificates)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>Incident logs (past 5 years)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>Hazard assessment documentation</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>Employee acknowledgment forms</span>
              </li>
            </ul>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <p className="text-blue-800 font-medium m-0">
                Tip: Store these in a single, date‑stamped "Audit Packet" folder (cloud or on‑prem).
              </p>
            </div>
          </div>

          {/* Additional steps would be added here */}
        </div>

        <div className="bg-primary/5 p-8 rounded-xl my-12 flex flex-col items-center text-center border border-primary/10">
          <h3 className="text-xl font-bold mb-4">Get Complete Audit Tools</h3>
          <p className="mb-6 max-w-2xl text-muted-foreground">
            Join our beta program for access to comprehensive WVPP audit tools and Cal/OSHA inspection readiness
            resources.
          </p>
          <Button size="lg" className="gap-2" asChild>
            <Link href="/#beta-signup">Join Beta Program</Link>
          </Button>
        </div>

        <div className="flex justify-center my-10">
          <Button asChild size="lg">
            <Link href="/#beta-signup">Join Our Beta Program</Link>
          </Button>
        </div>

        <div className="flex items-center justify-between mt-12 pt-6 border-t">
          <Button variant="outline" size="sm" asChild>
            <Link href="/compliance-hub/remote-worker-requirements" className="flex items-center gap-1">
              <ChevronLeft className="h-4 w-4" /> Previous Article
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href="/compliance-hub/sb553-vs-federal-osha" className="flex items-center gap-1">
              Next Article <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </article>
    </div>
  )
}

function ShareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}

function PrinterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 6 2 18 2 18 9" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <rect width="12" height="8" x="6" y="14" />
    </svg>
  )
}
