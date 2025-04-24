"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function BetaSignupForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 py-6 text-center">
        <div className="rounded-full bg-primary/10 p-3">
          <CheckIcon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold">Thank You!</h3>
        <p className="text-muted-foreground">
          Your beta signup has been received. We'll be in touch soon with next steps.
        </p>
      </div>
    )
  }

  return (
    <form
      action="https://formsubmit.co/sb553@hedgehoggrowth.com"
      method="POST"
      className="space-y-4"
      onSubmit={() => {
        setIsSubmitting(true)
        // Let the form submit naturally
        setTimeout(() => {
          setIsSubmitted(true)
        }, 2000)
      }}
    >
      {/* FormSubmit.co configuration fields */}
      <input type="hidden" name="_subject" value="New SB553Shield Beta Signup" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value="https://sb553compliance-shield.com/#thank-you" />

      {/* Honeypot field to prevent spam */}
      <input type="text" name="_honey" style={{ display: "none" }} />

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" name="email" type="email" placeholder="your@email.com" required />
      </div>

      <div className="flex items-start space-x-3">
        <Checkbox id="terms" name="terms" required />
        <Label htmlFor="terms" className="text-sm">
          I agree to the Terms & Privacy Policy
        </Label>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Join Beta Program"
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By joining, you'll receive updates about SB553Shield. We respect your privacy and you can unsubscribe at any
        time.
      </p>
    </form>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
