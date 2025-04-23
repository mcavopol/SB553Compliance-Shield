import Link from "next/link"
import { Shield } from "lucide-react"
import { SafeImage } from "@/components/ui/safe-image"

export function SiteFooter({ showCertifications = false }) {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex gap-2 items-center text-lg font-semibold">
          <Shield className="h-5 w-5 text-primary" />
          <span>SB553 Compliance Shield</span>
        </div>

        {showCertifications && (
          <div className="flex items-center gap-4">
            <SafeImage
              src="/badge-gdpr.png"
              alt="GDPR Compliance Certification Badge"
              width={60}
              height={30}
              loading="lazy"
            />
            <SafeImage
              src="/badge-soc2.png"
              alt="SOC 2 Compliance Certification Badge"
              width={60}
              height={30}
              loading="lazy"
            />
            <SafeImage
              src="/badge-iso.png"
              alt="ISO 27001 Compliance Certification Badge"
              width={60}
              height={30}
              loading="lazy"
            />
          </div>
        )}

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
      <p className="container text-center text-sm text-muted-foreground md:text-left py-2">
        &copy; {new Date().getFullYear()} SB553 Compliance Shield. All rights reserved.
      </p>
    </footer>
  )
}
