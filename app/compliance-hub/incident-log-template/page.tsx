import Link from "next/link"
import {
  ChevronRight,
  Download,
  Shield,
  Clock,
  FileText,
  AlertTriangle,
  CheckCircle,
  ImageIcon,
  Bell,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const metadata = {
  title: "WVPP Incident Log Template for Small Retailers | SB553 Compliance Shield",
  description:
    "Download a free incident log template specifically designed for small retail businesses in California to maintain SB 553 compliance.",
}

export default function IncidentLogTemplate() {
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
        <span className="text-foreground">WVPP Incident Log Template</span>
      </div>

      <article className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold tracking-tight mb-6">WVPP Incident Log Template for Small Retailers</h1>

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
          <p className="text-lg font-medium text-center m-0">
            Keep your workplace‑violence incident records comprehensive, consistent, and audit‑ready—so you're always SB
            553 compliant without the headache.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">Why You Need This Template</h2>
        <p>
          California's{" "}
          <Link href="/compliance-hub/sb553-vs-federal-osha" className="text-primary hover:underline">
            SB 553 requires every employer
          </Link>{" "}
          to document and investigate workplace‑violence incidents. For small retailers, a single unlogged event can
          lead to:
        </p>
        <ul className="space-y-3 my-6 pl-0">
          <li className="flex items-start gap-3 bg-red-50 p-4 rounded-lg border border-red-100">
            <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 shrink-0" />
            <span className="font-medium">Regulatory fines (up to $25,000 per incident)</span>
          </li>
          <li className="flex items-start gap-3 bg-amber-50 p-4 rounded-lg border border-amber-100">
            <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
            <span className="font-medium">Liability exposure if documentation is inconsistent</span>
          </li>
          <li className="flex items-start gap-3 bg-orange-50 p-4 rounded-lg border border-orange-100">
            <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 shrink-0" />
            <span className="font-medium">Wasted hours chasing down emails, photos, or handwritten notes</span>
          </li>
        </ul>

        <Separator className="my-10" />

        <p className="text-xl font-semibold">
          Our <span className="text-primary">WVPP Incident Log Template</span> standardizes incident capture—so you can:
        </p>
        <ol className="space-y-6 my-8 pl-0 counter-reset-none">
          <li className="flex items-start gap-4 pl-0">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0 mt-0.5">
              1
            </div>
            <div>
              <span className="font-semibold text-lg block mb-1">Record every detail</span>
              <p className="text-muted-foreground m-0">Date, location, witnesses, harm level—all in one place</p>
            </div>
          </li>
          <li className="flex items-start gap-4 pl-0">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0 mt-0.5">
              2
            </div>
            <div>
              <span className="font-semibold text-lg block mb-1">Attach evidence</span>
              <p className="text-muted-foreground m-0">Photos, video, file uploads—directly to the form</p>
            </div>
          </li>
          <li className="flex items-start gap-4 pl-0">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0 mt-0.5">
              3
            </div>
            <div>
              <span className="font-semibold text-lg block mb-1">Trigger workflows</span>
              <p className="text-muted-foreground m-0">Urgent escalation to managers or legal when needed</p>
            </div>
          </li>
        </ol>

        <div className="my-12">
          <h2 className="text-2xl font-bold mb-8 text-center">What's Inside</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<FileText className="h-5 w-5 text-primary" />}
              title="Structured Incident Form"
              features={[
                "Date, time, and location fields",
                "Severity rating (Low•Medium•High)",
                "Witness names + contact info",
              ]}
            />

            <FeatureCard
              icon={<ImageIcon className="h-5 w-5 text-primary" />}
              title="Evidence Attachment Section"
              features={["Drag‑and‑drop photos/videos", "Free‑form notes area for context"]}
            />

            <FeatureCard
              icon={<Bell className="h-5 w-5 text-primary" />}
              title="Automated Escalation Checkboxes"
              features={["Notify HR / Legal / Safety Officer options"]}
            />

            <FeatureCard
              icon={<Clock className="h-5 w-5 text-primary" />}
              title="Audit Trail Footer"
              features={["Timestamp + user signature fields", "Compliance proof for inspections"]}
            />

            <FeatureCard
              icon={<Download className="h-5 w-5 text-primary" />}
              title="CSV & PDF Export"
              features={["One‑click bundle of all logs", "Ready for Cal/OSHA audits"]}
            />
          </div>
        </div>

        <Separator className="my-10" />

        <h2 className="text-2xl font-bold mb-6">How to Use This Template</h2>
        <div className="bg-gray-50 p-8 rounded-xl border mb-10">
          <ol className="space-y-6 my-0 pl-0 counter-reset-none">
            <li className="flex items-start gap-4 pl-0">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-700 font-bold shrink-0 mt-0.5">
                1
              </div>
              <div>
                <span className="font-semibold text-lg block mb-1">Download</span>
                <p className="text-muted-foreground m-0">Get the free PDF or Excel file below</p>
              </div>
            </li>
            <li className="flex items-start gap-4 pl-0">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-700 font-bold shrink-0 mt-0.5">
                2
              </div>
              <div>
                <span className="font-semibold text-lg block mb-1">Customize</span>
                <p className="text-muted-foreground m-0">Add your logo, company info, and escalation rules</p>
              </div>
            </li>
            <li className="flex items-start gap-4 pl-0">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-700 font-bold shrink-0 mt-0.5">
                3
              </div>
              <div>
                <span className="font-semibold text-lg block mb-1">Assign</span>
                <p className="text-muted-foreground m-0">Distribute to store managers and supervisors</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex items-center justify-center w-5 h-5 rounded-full bg-foreground text-background font-bold shrink-0 mt-0.5 text-xs">
                3
              </div>
              <span className="font-medium">
                <strong>Assign</strong> the template to store managers and supervisors. Learn more about{" "}
                <Link href="/compliance-hub/remote-worker-requirements" className="text-primary hover:underline">
                  remote worker requirements
                </Link>
                .
              </span>
            </li>
            <li className="flex items-start gap-4 pl-0">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-700 font-bold shrink-0 mt-0.5">
                4
              </div>
              <div>
                <span className="font-semibold text-lg block mb-1">Log</span>
                <p className="text-muted-foreground m-0">Record each incident as it happens—on desktop or mobile</p>
              </div>
            </li>
            <li className="flex items-start gap-4 pl-0">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-700 font-bold shrink-0 mt-0.5">
                5
              </div>
              <div>
                <span className="font-semibold text-lg block mb-1">Export</span>
                <p className="text-muted-foreground m-0">Generate reports for quarterly reviews or inspections</p>
              </div>
            </li>
          </ol>
        </div>

        <h2 className="text-2xl font-bold mb-6">Benefits for Small Retailers</h2>
        <div className="grid md:grid-cols-2 gap-4 my-8">
          <BenefitCard title="Time Saved" description="Cut reporting time by 80% vs. Word docs & email chains" />
          <BenefitCard title="Audit‑Ready" description="Always have a complete, timestamped log on hand" />
          <BenefitCard title="Consistency" description="Enforce the same fields & process across all locations" />
          <BenefitCard title="Risk Reduced" description="Automated alerts ensure no incident goes unnoticed" />
          <BenefitCard title="Peace of Mind" description="Know you're compliant—even before Cal/OSHA shows up" />
        </div>

        <div className="bg-primary/5 p-8 rounded-xl my-12 border border-primary/10">
          <h2 className="text-2xl font-bold mb-6 text-center">Download Your Free Incident Log Template</h2>
          <p className="text-center mb-8 text-muted-foreground">Fill in your details and get instant access:</p>

          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-sm font-medium">
                  Work Email
                </Label>
                <Input id="email" type="email" placeholder="you@company.com" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="company" className="text-sm font-medium">
                  Company Name
                </Label>
                <Input id="company" placeholder="Your Company" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="locations" className="text-sm font-medium">
                  Number of Retail Locations
                </Label>
                <Select>
                  <SelectTrigger id="locations" className="mt-1">
                    <SelectValue placeholder="Select number of locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 location</SelectItem>
                    <SelectItem value="2-5">2-5 locations</SelectItem>
                    <SelectItem value="6-10">6-10 locations</SelectItem>
                    <SelectItem value="11-50">11-50 locations</SelectItem>
                    <SelectItem value="50+">50+ locations</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full gap-2 mt-2">
                <Download className="h-4 w-4" />
                Download Now
              </Button>
            </form>
            <div className="mt-4 text-center space-y-2">
              <p className="text-xs text-muted-foreground">
                No credit card required. Includes PDF, Excel, and Google Sheets versions.
              </p>
              <p className="text-xs text-muted-foreground">
                By downloading, you agree to receive occasional compliance tips and product updates. You can unsubscribe
                at any time.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-4">Still Have Questions?</h3>
        <div className="mb-10 bg-gray-50 p-6 rounded-xl border">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-gray-200">
              <AccordionTrigger className="text-base font-medium py-4">
                Does this template cover remote‑worker incidents?
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-1 text-muted-foreground">
                Yes—it's fully editable so you can add remote‑specific fields.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b border-gray-200">
              <AccordionTrigger className="text-base font-medium py-4">Can I import this to my HRIS?</AccordionTrigger>
              <AccordionContent className="pb-4 pt-1 text-muted-foreground">
                Absolutely. Our CSV export is designed for easy data import.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b-0">
              <AccordionTrigger className="text-base font-medium py-4">What if SB 553 changes?</AccordionTrigger>
              <AccordionContent className="pb-4 pt-1 text-muted-foreground">
                As part of SBShield's resource hub, you'll get free updates to this template whenever the law is
                amended.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="bg-primary/5 p-8 rounded-xl my-10 text-center border border-primary/10">
          <h3 className="text-xl font-bold mb-4">Ready to streamline your SB 553 compliance?</h3>
          <p className="mb-6 text-muted-foreground">
            Download the incident log now and turn chaotic reporting into a simple, repeatable process.
          </p>
          <Button size="lg" className="gap-2">
            <Shield className="h-4 w-4" />
            Get My Free Template
          </Button>
        </div>

        <div className="flex items-center justify-between mt-12 pt-6 border-t">
          <Button variant="outline" size="sm" asChild>
            <Link href="/compliance-hub" className="flex items-center gap-1">
              <ChevronLeft className="h-4 w-4" /> Back to Resources
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href="/compliance-hub/remote-worker-requirements" className="flex items-center gap-1">
              Next Article <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </article>
    </div>
  )
}

function FeatureCard({ icon, title, features }) {
  return (
    <Card className="bg-white h-full">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-primary/10 p-2 shrink-0">{icon}</div>
          <div>
            <h3 className="text-lg font-bold mb-3">{title}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary">•</span> {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function BenefitCard({ title, description }) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-lg border bg-white">
      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
      <div>
        <span className="font-medium block">{title}:</span>
        <span className="text-muted-foreground">{description}</span>
      </div>
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

function ChevronLeft(props) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}
