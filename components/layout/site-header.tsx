import Link from "next/link"
import { Shield, Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 py-3 md:py-0 mx-auto">
        <div className="flex h-10 md:h-16 items-center justify-between">
          <div className="flex gap-2 items-center">
            <Link href="/" className="flex items-center gap-2">
              <Shield className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              <span className="text-base md:text-xl font-bold">SB553 Compliance Shield</span>
            </Link>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="hidden md:flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                Compliance Resource Hub
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuTrigger className="md:hidden p-2 rounded-md hover:bg-accent">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" sideOffset={8} alignOffset={0} className="w-[250px] md:w-auto">
                <DropdownMenuItem asChild className="md:hidden">
                  <Link href="/#features">Features</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/compliance-hub">Resource Hub Home</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/compliance-hub/remote-worker-requirements">SB 553 Remote Worker Requirements</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/compliance-hub/audit-wvpp-cal-osha">How to Audit Your WVPP for Cal/OSHA</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/compliance-hub/sb553-vs-federal-osha">
                    SB 553 Training vs. Federal OSHA: What's Different?
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/compliance-hub/incident-log-template">
                    WVPP Incident Log Template for Small Retailers
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="md:hidden">
                  <Link href="/#beta-signup">Join Beta</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/#features"
              className="hidden md:inline-flex text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Features
            </Link>

            <Button asChild size="sm" className="hidden md:inline-flex">
              <Link href="/#beta-signup">Join Beta</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
