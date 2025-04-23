import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface ResponsiveImageProps extends Omit<ImageProps, "className"> {
  containerClassName?: string
  imageClassName?: string
  aspectRatio?: "square" | "video" | "portrait" | "custom"
  rounded?: boolean
  bordered?: boolean
  shadowed?: boolean
}

export function ResponsiveImage({
  containerClassName,
  imageClassName,
  aspectRatio = "custom",
  rounded = true,
  bordered = true,
  shadowed = true,
  alt,
  ...props
}: ResponsiveImageProps) {
  // Define aspect ratio classes
  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    custom: "",
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        aspectRatio !== "custom" && aspectRatioClasses[aspectRatio],
        rounded && "rounded-lg",
        bordered && "border",
        shadowed && "shadow-lg",
        containerClassName,
      )}
    >
      <Image
        alt={alt || "Image"}
        className={cn("object-cover", aspectRatio === "custom" ? "w-full h-auto" : "w-full h-full", imageClassName)}
        {...props}
      />
    </div>
  )
}
