"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function useScrollToAnchor() {
  const pathname = usePathname()

  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      const element = document.getElementById(id)

      if (element) {
        // Wait a bit for the page to fully render
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
        }, 100)
      }
    }
  }, [pathname]) // Re-run when pathname changes
}
