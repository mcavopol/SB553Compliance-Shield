"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/components/ui/use-toast"

// Import the trackEvent function
import { trackEvent } from "@/lib/analytics"

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  acceptTerms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions." }),
  }),
})

export default function BetaSignupForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      acceptTerms: false,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    try {
      // Track the conversion event
      trackEvent({
        action: "beta_signup",
        category: "engagement",
        label: values.email,
      })

      // The actual form submission will be handled by FormSubmit.co
      // This is just for client-side validation and tracking

      // We'll simulate a successful submission for the demo
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setIsSubmitted(true)
      toast({
        title: "Beta signup successful!",
        description: "Thank you for your interest in SB553 Compliance Shield. We'll be in touch soon.",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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
    <Form {...form}>
      {/* Use FormSubmit.co as the form action */}
      <form
        action="https://formsubmit.co/sb553@hedgehoggrowth.com"
        method="POST"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4"
      >
        {/* FormSubmit.co configuration fields */}
        <input type="hidden" name="_subject" value="New SB553Shield Beta Signup" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value={typeof window !== "undefined" ? window.location.href : ""} />

        {/* Honeypot field to prevent spam */}
        <input type="text" name="_honey" style={{ display: "none" }} />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Work Email</FormLabel>
              <FormControl>
                <Input name="email" placeholder="john@company.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="acceptTerms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox name="acceptTerms" checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-sm">I agree to Terms & Privacy</FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

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
    </Form>
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
