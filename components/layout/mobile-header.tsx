"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Shield, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              onClick={(e) => handleAnchorClick(e, "#features")}
            >
              Features
            </a>

            <div className="relative">
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Compliance Resource Hub
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {resourcesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1">
                    <Link
                      href="/compliance-hub"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setResourcesOpen(false)}
                    >
                      Resource Hub Home
                    </Link>
                    <hr className="my-1" />
                    <Link
                      href="/compliance-hub/remote-worker-requirements"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setResourcesOpen(false)}
                    >
                      SB 553 Remote Worker Requirements
                    </Link>
                    <Link
                      href="/compliance-hub/audit-wvpp-cal-osha"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setResourcesOpen(false)}
                    >
                      How to Audit Your WVPP for Cal/OSHA
                    </Link>
                    <Link
                      href="/compliance-hub/sb553-vs-federal-osha"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setResourcesOpen(false)}
                    >
                      SB 553 vs. Federal OSHA: What's Different?
                    </Link>
                    <Link
                      href="/compliance-hub/incident-log-template"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setResourcesOpen(false)}
                    >
                      WVPP Incident Log Template
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Button asChild size="sm">
              <a href="#beta-signup" onClick={(e) => handleAnchorClick(e, "#beta-signup")}>
                Join Beta
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a
              href="#features"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 text-right"
              onClick={(e) => handleAnchorClick(e, "#features")}
            >
              Features
            </a>

            <Link
              href="/compliance-hub"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 text-right"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resource Hub Home
            </Link>

            <Link
              href="/compliance-hub/remote-worker-requirements"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 pl-6 text-right"
              onClick={() => setMobileMenuOpen(false)}
            >
              Remote Worker Requirements
            </Link>

            <Link
              href="/compliance-hub/audit-wvpp-cal-osha"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 pl-6 text-right"
              onClick={() => setMobileMenuOpen(false)}
            >
              Audit Your WVPP
            </Link>

            <Link
              href="/compliance-hub/sb553-vs-federal-osha"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 pl-6 text-right"
              onClick={() => setMobileMenuOpen(false)}
            >
              SB 553 vs. Federal OSHA
            </Link>

            <Link
              href="/compliance-hub/incident-log-template"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 pl-6 text-right"
              onClick={() => setMobileMenuOpen(false)}
            >
              Incident Log Template
            </Link>

            <a
              href="#beta-signup"
              className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:bg-primary/10 text-right"
              onClick={(e) => handleAnchorClick(e, "#beta-signup")}
            >
              Join Beta
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
