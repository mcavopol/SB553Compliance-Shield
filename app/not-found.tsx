import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Suspense } from "react"
import { SiteLayout } from "@/components/layout/site-layout"
import { TYPOGRAPHY } from "@/lib/constants"

export default function NotFound() {
  return (
    <SiteLayout>
      <main className="flex-1 flex items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-6 py-24 text-center">
          <div className="flex flex-col items-center gap-2">
            <div className="rounded-full bg-primary/10 p-3">
              <NotFoundIcon className="h-10 w-10 text-primary" />
            </div>
            <h1 className={TYPOGRAPHY.h2}>404 - Page Not Found</h1>
            <p className="text-lg text-muted-foreground max-w-[600px]">
              Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
            </p>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <SearchParamsWrapper />
          </Suspense>
          <Button asChild size="lg">
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </main>
    </SiteLayout>
  )
}

// This component uses useSearchParams and is wrapped in Suspense
function SearchParamsWrapper() {
  return <div></div> // This is a placeholder that doesn't actually use useSearchParams
}

function NotFoundIcon(props) {
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m15.9 8.7-.4 3.4c-.1.9-.9 1.6-1.9 1.6h-3.2c-1 0-1.8-.7-1.9-1.6l-.4-3.4" />
      <path d="m12 16 .9-1.8c.1-.2 0-.4-.2-.5-.4-.1-.8-.1-1.4 0-.2.1-.3.3-.2.5z" />
    </svg>
  )
}
