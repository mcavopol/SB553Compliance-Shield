// Helper function to generate optimized placeholder image URLs
export function getPlaceholderImage(width: number, height: number, query: string): string {
  // Ensure the query is properly encoded
  const encodedQuery = encodeURIComponent(query)
  return `/placeholder.svg?height=${height}&width=${width}&query=${encodedQuery}`
}

// Helper function to determine if an image should be prioritized
export function shouldPrioritizeImage(position: "hero" | "above-fold" | "below-fold"): boolean {
  return position === "hero" || position === "above-fold"
}

// Helper function to determine image quality based on importance
export function getImageQuality(importance: "high" | "medium" | "low"): number {
  const qualityMap = {
    high: 90,
    medium: 80,
    low: 65,
  }

  return qualityMap[importance]
}
