import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteLayout } from "@/components/layout/site-layout"

export const metadata = {
  title: "Privacy Policy | SB553 Compliance Shield",
  description: "Privacy Policy for SB553 Compliance Shield",
}

export default function PrivacyPolicy() {
  return (
    <SiteLayout>
      <div className="container max-w-4xl py-12 md:py-16">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: April 23, 2025</p>
          </div>

          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
            <p>
              Welcome to SB553 COMPLIANCE SHIELD ("we," "our," or "us"). We respect your privacy and are committed to
              protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you use our SB553 Compliance Manager service ("Service").
            </p>
            <p>
              Please read this Privacy Policy carefully. By accessing or using our Service, you acknowledge that you
              have read, understood, and agree to be bound by this Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-bold mt-6 mb-3">2.1 Personal Information</h3>
            <p>We may collect the following personal information:</p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Billing information</li>
              <li>Company information</li>
              <li>IP address and device information</li>
              <li>Usage data</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3">2.2 How We Collect Information</h3>
            <p>We collect information:</p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>Directly from you when you register, use our Service, or communicate with us</li>
              <li>Automatically through cookies and similar technologies when you use our Service</li>
              <li>From third-party service providers and partners with your consent</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Use of Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>Provide, maintain, and improve our Service</li>
              <li>Process transactions and send related information</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Send administrative information, such as updates, security alerts, and support messages</li>
              <li>Personalize your experience and deliver content relevant to your interests</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, prevent, and address technical issues and fraudulent activities</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Disclosure of Your Information</h2>
            <p>We may share your information with:</p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>Service providers who perform services on our behalf</li>
              <li>Business partners with your consent</li>
              <li>In connection with a business transaction (e.g., merger, acquisition, or sale)</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights, privacy, safety, or property</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information.
              However, no method of transmission over the Internet or electronic storage is 100% secure. We cannot
              guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this
              Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Your Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your information</li>
              <li>Restriction or objection to processing</li>
              <li>Data portability</li>
              <li>Withdrawal of consent</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided in the "Contact Us" section.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Children's Privacy</h2>
            <p>
              Our Service is not intended for children under 16 years of age. We do not knowingly collect personal
              information from children under 16. If we discover that a child under 16 has provided us with personal
              information, we will promptly delete it.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country of residence.
              These countries may have different data protection laws.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">10. Updates to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated version will be indicated by an updated
              "Revised" date. We encourage you to review this Privacy Policy periodically.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">11. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <ul className="list-none pl-0 mt-2">
              <li>
                <strong>Email:</strong> privacy@sb553shield.com
              </li>
              <li>
                <strong>Address:</strong> SB553 COMPLIANCE SHIELD, 1250 Market Street, Suite 400, San Francisco, CA
                94103
              </li>
            </ul>
          </div>

          <div className="pt-8 border-t">
            <Button variant="outline" asChild>
              <Link href="/" className="flex items-center gap-2">
                <ChevronLeft className="h-4 w-4" /> Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}
