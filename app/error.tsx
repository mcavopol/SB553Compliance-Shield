"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteLayout } from "@/components/layout/site-layout"
import { TYPOGRAPHY } from "@/lib/constants"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <SiteLayout>
      <main className="flex-1 flex items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-6 py-24 text-center">
          <div className="flex flex-col items-center gap-2">
            <div className="rounded-full bg-red-100 p-3">
              <ErrorIcon className="h-10 w-10 text-red-600" />
            </div>
            <h1 className={TYPOGRAPHY.h2}>Something went wrong</h1>
            <p className="text-lg text-muted-foreground max-w-[600px]">
              We apologize for the inconvenience. Please try again or return to the home page.
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" onClick={reset}>
              Try again
            </Button>
            <Button asChild>
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </main>
    </SiteLayout>
  )
}

function ErrorIcon(props) {
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
      <path d="m8 2 1.5 1.5" />
      <path d="M2.5 8.5 1 10" />
      <path d="m14 2 1.5 1.5" />
      <path d="M2.5 14.5 1 16" />
      <path d="m8 22 1.5-1.5" />
      <path d="M2.5 8.5 1 7" />
      <path d="m14 22 1.5-1.5" />
      <path d="M2.5 14.5 1 13" />
      <path d="M22 13v-3" />
      <path d="M22 8V5" />
      <path d="M16 22V5" />
      <path d="M10 22V10" />
    </svg>
  )
}
