import type React from "react"
import { CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SafeImage } from "@/components/ui/safe-image"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  features?: string[]
  benefit?: string
  imageSrc?: string
  imageAlt?: string
}

export function FeatureCard({ icon, title, description, features, benefit, imageSrc, imageAlt }: FeatureCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="mb-2">{icon}</div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        {imageSrc && (
          <div className="mb-4 rounded-md overflow-hidden border">
            <SafeImage
              src={imageSrc}
              alt={imageAlt || title}
              width={300}
              height={160}
              className="w-full h-auto object-cover"
            />
          </div>
        )}
        {features ? (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        ) : benefit ? (
          <div className="flex items-start gap-2 mt-2 bg-primary/5 p-3 rounded-md">
            <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <span className="font-medium">{benefit}</span>
          </div>
        ) : null}
      </CardContent>
    </Card>
  )
}
