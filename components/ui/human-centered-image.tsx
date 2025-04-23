import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface HumanCenteredImageProps extends Omit<ImageProps, "className"> {
  containerClassName?: string
  imageClassName?: string
  caption?: string
  altText?: string
  bordered?: boolean
  shadowed?: boolean
}

// Default placeholder in case src is empty or undefined
const DEFAULT_PLACEHOLDER = "/collaborative-strategy-session.png"

export function HumanCenteredImage({
  containerClassName,
  imageClassName,
  caption,
  altText,
  bordered = true,
  shadowed = true,
  src,
  alt,
  ...props
}: HumanCenteredImageProps) {
  // Ensure src is never an empty string
  const imageSrc = !src || src === "" ? DEFAULT_PLACEHOLDER : src
  // Use provided altText or alt prop, or fallback to a default
  const imageAlt = altText || alt || "Image"

  return (
    <div className={cn("relative", containerClassName)}>
      <div
        className={cn("overflow-hidden", bordered && "border", shadowed && "shadow-lg", "rounded-lg", imageClassName)}
      >
        <Image alt={imageAlt} className="object-cover w-full h-full" src={imageSrc || "/placeholder.svg"} {...props} />
      </div>
      {caption && <p className="text-sm text-muted-foreground mt-2 text-center">{caption}</p>}
    </div>
  )
}
