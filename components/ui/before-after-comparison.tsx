import Image from "next/image"
import { cn } from "@/lib/utils"

interface BeforeAfterComparisonProps {
  beforeImage: string
  afterImage: string
  beforeAlt: string
  afterAlt: string
  beforeLabel?: string
  afterLabel?: string
  className?: string
}

// Default placeholders
const DEFAULT_BEFORE_PLACEHOLDER = "/side-by-side-contrast.png"
const DEFAULT_AFTER_PLACEHOLDER = "/side-by-side-analysis.png"

export function BeforeAfterComparison({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  beforeLabel = "Before",
  afterLabel = "After",
  className,
}: BeforeAfterComparisonProps) {
  // Ensure we never pass empty strings to src
  const finalBeforeImage = !beforeImage || beforeImage === "" ? DEFAULT_BEFORE_PLACEHOLDER : beforeImage
  const finalAfterImage = !afterImage || afterImage === "" ? DEFAULT_AFTER_PLACEHOLDER : afterImage

  return (
    <div className={cn("rounded-lg overflow-hidden border shadow-lg", className)}>
      <div className="grid grid-cols-2 h-full">
        <div className="relative border-r">
          <div className="absolute top-2 left-2 bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium z-10">
            {beforeLabel}
          </div>
          <Image
            src={finalBeforeImage || "/placeholder.svg"}
            alt={beforeAlt || "Before image"}
            className="object-cover h-full"
            width={300}
            height={400}
          />
        </div>
        <div className="relative">
          <div className="absolute top-2 right-2 bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium z-10">
            {afterLabel}
          </div>
          <Image
            src={finalAfterImage || "/placeholder.svg"}
            alt={afterAlt || "After image"}
            className="object-cover h-full"
            width={300}
            height={400}
          />
        </div>
      </div>
    </div>
  )
}
