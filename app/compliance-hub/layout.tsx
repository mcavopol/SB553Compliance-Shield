import type React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { MobileHeader } from "@/components/layout/mobile-header"
import { SiteFooter } from "@/components/layout/site-footer"

export const metadata = {
  title: "Compliance Resource Hub | SB 553 Compliance Shield",
  description:
    "Free resources to help California employers comply with SB 553 workplace violence prevention requirements.",
}

export default function ComplianceHubLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <MobileHeader />
      <div className="container px-4 py-8 md:px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/compliance-hub" className="hover:text-primary">
            Compliance Resource Hub
          </Link>
          {/* Additional breadcrumb segments will be added by child pages */}
        </div>
        <main>{children}</main>
      </div>
      <SiteFooter />
    </div>
  )
}
