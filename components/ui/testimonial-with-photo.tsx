import Image from "next/image"
import { cn } from "@/lib/utils"

interface TestimonialWithPhotoProps {
  quote: string
  name: string
  role: string
  company?: string
  photoSrc?: string
  className?: string
}

// Default placeholder for testimonial photos
const DEFAULT_PHOTO_PLACEHOLDER = "/thoughtful-gaze.png"

export function TestimonialWithPhoto({ quote, name, role, company, photoSrc, className }: TestimonialWithPhotoProps) {
  // Determine if we should show a photo or initials
  const showPhoto = photoSrc !== undefined
  // Ensure we never pass an empty string to src
  const finalPhotoSrc = !photoSrc || photoSrc === "" ? DEFAULT_PHOTO_PLACEHOLDER : photoSrc

  // Get initials for the avatar fallback
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")

  return (
    <div className={cn("bg-white p-8 rounded-xl border shadow-sm", className)}>
      <div className="relative">
        <div className="text-6xl text-primary/20 font-serif absolute -top-6 -left-6">"</div>
        <blockquote className="text-lg md:text-xl italic text-muted-foreground mb-6 px-6">{quote}</blockquote>
        <div className="text-6xl text-primary/20 font-serif absolute -bottom-10 -right-6">"</div>
      </div>
      <div className="flex items-center gap-4 mt-8">
        {showPhoto ? (
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={finalPhotoSrc || "/placeholder.svg"}
              alt={`Photo of ${name}`}
              width={48}
              height={48}
              className="object-cover w-full h-full"
            />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-bold">{initials}</span>
          </div>
        )}
        <div className="text-left">
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-muted-foreground">
            {role}
            {company ? `, ${company}` : ""}
          </p>
        </div>
      </div>
    </div>
  )
}
