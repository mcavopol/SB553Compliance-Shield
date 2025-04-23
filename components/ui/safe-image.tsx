import Image, { type ImageProps } from "next/image"

// Default fallback image to use when src is empty or undefined
const DEFAULT_FALLBACK = "/abstract-geometric-shapes.png"

interface SafeImageProps extends Omit<ImageProps, "src"> {
  src: string | null | undefined
  fallbackSrc?: string
}

export function SafeImage({ src, fallbackSrc = DEFAULT_FALLBACK, alt = "Image", ...props }: SafeImageProps) {
  // Use the provided src if it exists and isn't empty, otherwise use fallback
  const imageSrc = src && src !== "" ? src : fallbackSrc

  return <Image src={imageSrc || "/placeholder.svg"} alt={alt} {...props} />
}
