import type React from "react"
import { MobileHeader } from "./mobile-header"
import { SiteFooter } from "./site-footer"

interface SiteLayoutProps {
  children: React.ReactNode
  showCertifications?: boolean
}

export function SiteLayout({ children, showCertifications = false }: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <MobileHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter showCertifications={showCertifications} />
    </div>
  )
}
