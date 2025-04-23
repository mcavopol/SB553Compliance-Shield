import type React from "react"
import { SiteHeader } from "./site-header"
import { SiteFooter } from "./site-footer"

interface SiteLayoutProps {
  children: React.ReactNode
  showCertifications?: boolean
}

export function SiteLayout({ children, showCertifications = false }: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter showCertifications={showCertifications} />
    </div>
  )
}
