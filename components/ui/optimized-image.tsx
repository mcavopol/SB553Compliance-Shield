import Image, { type ImageProps } from "next/image"

interface OptimizedImageProps extends Omit<ImageProps, "quality"> {
  highPriority?: boolean
  qualityLevel?: "low" | "medium" | "high"
}

export function OptimizedImage({ highPriority = false, qualityLevel = "medium", ...props }: OptimizedImageProps) {
  // Map quality levels to actual quality values
  const qualityMap = {
    low: 65,
    medium: 80,
    high: 90,
  }

  return (
    <Image
      {...props}
      priority={highPriority}
      quality={qualityMap[qualityLevel]}
      loading={highPriority ? "eager" : "lazy"}
    />
  )
}
