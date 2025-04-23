/**
 * Track a custom event in Google Analytics
 */
export function trackEvent({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) {
  if (typeof window !== "undefined" && "gtag" in window) {
    // @ts-ignore - gtag is defined in the Google Analytics script
    window.gtag?.("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

/**
 * Track a page view in Google Analytics
 */
export function trackPageView(url: string) {
  if (typeof window !== "undefined" && "gtag" in window) {
    // @ts-ignore - gtag is defined in the Google Analytics script
    window.gtag?.("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}
