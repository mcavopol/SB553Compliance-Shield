import Link from "next/link"
import { ChevronRight, Download, CheckCircle, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "SB 553 Remote Worker Requirements | SBShield Resource Hub",
  description:
    "Everything California employers need to know to keep remote and hybrid teams SB 553‑compliant—training, documentation, incident handling, and best practices.",
}

export default function RemoteWorkerRequirements() {
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
        <span className="text-foreground">SB 553 Remote Worker Requirements</span>
      </div>

      <article className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold tracking-tight mb-6">SB 553 Remote Worker Requirements</h1>

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

        <p className="text-xl leading-relaxed">
          California's SB 553 applies to all employees—on‑site, hybrid, or fully remote. This guide walks you through
          the specific obligations for remote teams so you can:
        </p>

        <div className="grid gap-4 my-8">
          <div className="flex items-start gap-3 p-4 rounded-lg border bg-primary/5">
            <div className="rounded-full bg-primary/10 p-1 mt-1">
              <CheckCircle className="h-4 w-4 text-primary" />
            </div>
            <span className="font-medium">Avoid fines (up to $25K per violation)</span>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg border bg-primary/5">
            <div className="rounded-full bg-primary/10 p-1 mt-1">
              <CheckCircle className="h-4 w-4 text-primary" />
            </div>
            <span className="font-medium">Streamline training and documentation</span>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg border bg-primary/5">
            <div className="rounded-full bg-primary/10 p-1 mt-1">
              <CheckCircle className="h-4 w-4 text-primary" />
            </div>
            <span className="font-medium">Keep your distributed workforce safe and audit‑ready</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">Who Must Comply?</h2>
        <ul className="space-y-2 pl-6">
          <li>All California‑based employers, regardless of headcount or industry.</li>
          <li>Remote or hybrid employees whose primary work location is outside a traditional office.</li>
          <li>Third‑party contractors if your contract terms require them to follow your WVPP.</li>
        </ul>

        <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg my-8">
          <p className="text-amber-800 font-medium m-0">
            Note: Even if your legal entity sits outside CA, any employee physically working in California falls under
            SB 553.
          </p>
        </div>

        <Separator className="my-10" />

        <h2 className="text-2xl font-bold mb-6">Key Obligations for Remote Workers</h2>

        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-3">Policy Access & Acknowledgement</h3>
            <ul className="space-y-2 pl-6">
              <li>Provide every remote hire a copy of your WVPP (digital or printable).</li>
              <li>Track employee sign‑off with date, IP address, and device.</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-3">Tailored Training Modules</h3>
            <ul className="space-y-2 pl-6">
              <li>Offer role‑specific content (e.g., manager de‑escalation vs. individual reporting).</li>
              <li>Record completion dates and quiz scores for each remote worker.</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-3">Incident Reporting Channels</h3>
            <ul className="space-y-2 pl-6">
              <li>Implement an online form or secure email address.</li>
              <li>Ensure 24‑hour acknowledgement of any report, with instructions for next steps.</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-3">Data Security & Privacy</h3>
            <ul className="space-y-2 pl-6">
              <li>Encrypt incident data in transit and at rest.</li>
              <li>Limit access to HR/safety officers via role‑based permissions.</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-3">Ongoing Reviews & Updates</h3>
            <ul className="space-y-2 pl-6">
              <li>Re‑distribute the plan to remote staff after any material change (e.g., regulation updates).</li>
              <li>Require re‑acknowledgement within 30 days of updates.</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Step‑by‑Step Compliance Checklist</h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 my-8">
          <Card className="bg-white">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">Distribute the WVPP</h3>
              <p className="text-muted-foreground text-sm">
                Upload to your LMS or intranet; trigger automatic notification.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">Assign & Track Training</h3>
              <p className="text-muted-foreground text-sm">
                Use micro‑learning (10–15 min modules) tied to hire dates and annual renewals.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">Activate Reporting Tools</h3>
              <p className="text-muted-foreground text-sm">
                Embed a "Report Incident" link in your Slack/Teams channels.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">Log & Audit</h3>
              <p className="text-muted-foreground text-sm">
                Centralize incident data in one platform; schedule quarterly reviews.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">Document Every Update</h3>
              <p className="text-muted-foreground text-sm">Version your WVPP; archive old versions for audit trails.</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-primary/5 p-8 rounded-xl my-10 flex flex-col items-center text-center border border-primary/10">
          <h3 className="text-xl font-bold mb-4">Download the Free SB 553 Remote Worker Checklist</h3>
          <p className="mb-6 max-w-2xl text-muted-foreground">Capture key tasks in a compact, printable PDF.</p>
          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Get Checklist (PDF)
          </Button>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Frequently Asked Questions</h2>

        <div className="bg-gray-50 p-6 rounded-xl border mb-10">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-gray-200">
              <AccordionTrigger className="text-base font-medium py-4">
                Do I need different training for remote vs. on‑site staff?
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-1 text-muted-foreground">
                Yes—focus on virtual de‑escalation tactics, digital reporting channels, and any home‑office hazards.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b border-gray-200">
              <AccordionTrigger className="text-base font-medium py-4">
                How do I prove a remote employee saw the latest plan?
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-1 text-muted-foreground">
                Use digital signatures with timestamps and automatic reminders; SBShield logs IP and device metadata.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b-0">
              <AccordionTrigger className="text-base font-medium py-4">
                If I update the plan, must all remote workers re‑acknowledge?
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-1 text-muted-foreground">
                Yes. Any substantive change triggers a required re‑acknowledgement within 30 days.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
        <p>
          When you're ready to automate and centralize all SB 553 tasks for your distributed teams, see how SBShield:
        </p>
        <ul className="space-y-2 pl-6">
          <li>Generates CA‑specific plans</li>
          <li>Automates training & reminders</li>
          <li>Logs incidents in one audit‑ready dashboard</li>
        </ul>

        <div className="flex justify-center my-10">
          <Button asChild size="lg">
            <Link href="/#beta-signup">Explore SBShield & Join Beta</Link>
          </Button>
        </div>

        <div className="flex items-center justify-between mt-12 pt-6 border-t">
          <Button variant="outline" size="sm" asChild>
            <Link href="/compliance-hub" className="flex items-center gap-1">
              <ChevronLeft className="h-4 w-4" /> Back to Resources
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href="/compliance-hub/audit-wvpp-cal-osha" className="flex items-center gap-1">
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
