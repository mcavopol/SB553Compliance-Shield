"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Shield, Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

export function SiteHeader() {
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  // Function to handle anchor links
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault()

    // Close the mobile menu
    setMobileMenuOpen(false)

    // If we're already on the homepage, just scroll to the anchor
    if (window.location.pathname === "/" || window.location.pathname === "") {
      const element = document.getElementById(anchor.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // If we're on another page, navigate to homepage with the anchor
      router.push(`/${anchor}`)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 py-3 md:py-0 mx-auto">
        <div className="flex h-12 md:h-16 items-center justify-between">
          <div className="flex gap-2 items-center">
            <Link href="/" className="flex items-center gap-2">
              <Shield className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              <span className="text-base md:text-xl font-bold">SB553 Compliance Shield</span>
            </Link>
          </div>
          <nav className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#features"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={(e) => handleAnchorClick(e, "#features")}
              >
                Features
              </a>
              <div className="relative">
                <DropdownMenu open={resourcesOpen} onOpenChange={setResourcesOpen}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                      aria-expanded={resourcesOpen}
                      aria-haspopup="true"
                    >
                      Compliance Resource Hub
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" sideOffset={8} className="w-[280px] z-50">
                    <DropdownMenuItem asChild>
                      <Link href="/compliance-hub" onClick={() => setResourcesOpen(false)}>
                        Resource Hub Home
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/compliance-hub/remote-worker-requirements" onClick={() => setResourcesOpen(false)}>
                        SB 553 Remote Worker Requirements
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/compliance-hub/audit-wvpp-cal-osha" onClick={() => setResourcesOpen(false)}>
                        How to Audit Your WVPP for Cal/OSHA
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/compliance-hub/sb553-vs-federal-osha" onClick={() => setResourcesOpen(false)}>
                        SB 553 vs. Federal OSHA: What's Different?
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/compliance-hub/incident-log-template" onClick={() => setResourcesOpen(false)}>
                        WVPP Incident Log Template
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <Button asChild size="sm">
                <a href="#beta-signup" onClick={(e) => handleAnchorClick(e, "#beta-signup")}>
                  Join Beta
                </a>
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <DropdownMenu open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-9 w-9 p-0" aria-label="Menu">
                    <Menu className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" sideOffset={8} className="w-[200px] z-50">
                  <DropdownMenuItem asChild className="justify-end">
                    <a href="#features" onClick={(e) => handleAnchorClick(e, "#features")}>
                      Features
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="justify-end">
                    <Link href="/compliance-hub" onClick={() => setMobileMenuOpen(false)}>
                      Resource Hub Home
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild className="justify-end">
                    <Link href="/compliance-hub/remote-worker-requirements" onClick={() => setMobileMenuOpen(false)}>
                      Remote Worker Requirements
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="justify-end">
                    <Link href="/compliance-hub/audit-wvpp-cal-osha" onClick={() => setMobileMenuOpen(false)}>
                      Audit Your WVPP
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="justify-end">
                    <Link href="/compliance-hub/sb553-vs-federal-osha" onClick={() => setMobileMenuOpen(false)}>
                      SB 553 vs. Federal OSHA
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="justify-end">
                    <Link href="/compliance-hub/incident-log-template" onClick={() => setMobileMenuOpen(false)}>
                      Incident Log Template
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild className="justify-end">
                    <a href="#beta-signup" onClick={(e) => handleAnchorClick(e, "#beta-signup")}>
                      Join Beta
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
