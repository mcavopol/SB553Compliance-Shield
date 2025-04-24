import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteLayout } from "@/components/layout/site-layout"

export const metadata = {
  title: "Terms of Service | SB553 Compliance Shield",
  description: "Terms of Service for SB553 Compliance Shield",
}

export default function TermsOfService() {
  return (
    <SiteLayout>
      <div className="container max-w-4xl py-12 md:py-16">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: April 23, 2025</p>
          </div>

          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using SB553 Compliance Shield ("Service"), you agree to be bound by these Terms of Use. If
              you do not agree to these Terms, you may not access or use the Service.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice of material changes by
              posting the updated Terms on our website or through other reasonable means. Your continued use of the
              Service after the changes take effect constitutes your acceptance of the revised Terms.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Account Registration</h2>
            <h3 className="text-xl font-bold mt-6 mb-3">3.1 Registration Requirements</h3>
            <p>
              To use certain features of the Service, you must register for an account. You agree to provide accurate,
              current, and complete information during registration and to update such information to keep it accurate,
              current, and complete.
            </p>
            <h3 className="text-xl font-bold mt-6 mb-3">3.2 Account Security</h3>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all activities
              that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Subscription and Payments</h2>
            <h3 className="text-xl font-bold mt-6 mb-3">4.1 Subscription Terms</h3>
            <p>
              Our Service is offered on a subscription basis. The subscription will automatically renew unless canceled
              at least 30 days before the renewal date.
            </p>
            <h3 className="text-xl font-bold mt-6 mb-3">4.2 Fees and Payment</h3>
            <p>
              You agree to pay all fees in accordance with the fees, charges, and billing terms in effect at the time a
              fee or charge is due. You are responsible for providing current, complete, and accurate billing and
              contact information.
            </p>
            <h3 className="text-xl font-bold mt-6 mb-3">4.3 Refunds</h3>
            <p>Refunds are provided in accordance with our Refund Policy.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Acceptable Use</h2>
            <h3 className="text-xl font-bold mt-6 mb-3">5.1 Compliance with Laws</h3>
            <p>You agree to use the Service in compliance with all applicable laws and regulations.</p>
            <h3 className="text-xl font-bold mt-6 mb-3">5.2 Prohibited Activities</h3>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>Use the Service for any illegal purpose</li>
              <li>Violate any third-party rights</li>
              <li>Attempt to gain unauthorized access to the Service or related systems</li>
              <li>Transmit viruses, malware, or other harmful code</li>
              <li>Interfere with or disrupt the Service</li>
              <li>Engage in data mining or scraping</li>
              <li>Use the Service to send unsolicited communications</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Intellectual Property Rights</h2>
            <h3 className="text-xl font-bold mt-6 mb-3">6.1 Our Intellectual Property</h3>
            <p>
              The Service and its content, features, and functionality are owned by SB553 Compliance Shield and are
              protected by copyright, trademark, and other intellectual property laws.
            </p>
            <h3 className="text-xl font-bold mt-6 mb-3">6.2 Limited License</h3>
            <p>
              We grant you a limited, non-exclusive, non-transferable, revocable license to use the Service for its
              intended purposes.
            </p>
            <h3 className="text-xl font-bold mt-6 mb-3">6.3 Your Content</h3>
            <p>
              You retain all rights to any content you submit, post, or display on or through the Service. By submitting
              content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt,
              publish, and display such content for the purpose of providing and improving the Service.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Third-Party Links and Services</h2>
            <p>
              The Service may contain links to third-party websites or services. We are not responsible for the content
              or practices of these third-party sites and services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Disclaimer of Warranties</h2>
            <p className="uppercase font-semibold">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
              IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, AND NON-INFRINGEMENT.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. Limitation of Liability</h2>
            <p className="uppercase font-semibold">
              IN NO EVENT SHALL SB553 COMPLIANCE SHIELD BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
              OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH
              THESE TERMS OR YOUR USE OF THE SERVICE.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">10. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless SB553 Compliance Shield and its officers, directors,
              employees, and agents from and against any claims, liabilities, damages, losses, costs, expenses, or fees
              arising from your use of the Service or violation of these Terms.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">11. Termination</h2>
            <h3 className="text-xl font-bold mt-6 mb-3">11.1 Termination by You</h3>
            <p>
              You may terminate your account at any time by following the instructions on the Service or contacting us.
            </p>
            <h3 className="text-xl font-bold mt-6 mb-3">11.2 Termination by Us</h3>
            <p>
              We may terminate or suspend your account and access to the Service immediately, without prior notice or
              liability, for any reason, including if you breach these Terms.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">12. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of California,
              without regard to its conflict of law provisions.
            </p>
            <p>
              Any dispute arising out of or relating to these Terms or the Service shall be resolved through binding
              arbitration in accordance with the rules of the American Arbitration Association in San Francisco,
              California.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">13. Severability</h2>
            <p>
              If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and
              the remaining provisions shall be enforced.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">14. Entire Agreement</h2>
            <p>
              These Terms constitute the entire agreement between you and SB553 Compliance Shield regarding the Service
              and supersede all prior agreements and understandings.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">15. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <ul className="list-none pl-0 mt-2">
              <li>
                <strong>Email:</strong> legal@sb553shield.com
              </li>
              <li>
                <strong>Address:</strong> SB553 Compliance Shield, 1250 Market Street, Suite 400, San Francisco, CA
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
