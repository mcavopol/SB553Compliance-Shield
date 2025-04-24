"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface SendEmailProps {
  email: string
  acceptedTerms: boolean
}

export const sendEmail = async ({ email, acceptedTerms }: SendEmailProps) => {
  try {
    const data = await resend.emails.send({
      from: "SB553 Compliance Shield <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to the Beta Program!",
      html: `<p>Thank you for signing up for the SB553 Compliance Shield beta program!</p>
             <p>We're excited to have you on board. We'll be in touch soon with next steps.</p>
             <p>You have accepted the terms and conditions: ${acceptedTerms}</p>`,
    })

    return { success: true, data }
  } catch (error) {
    console.error("Failed to send email:", error)
    return { success: false, error }
  }
}
