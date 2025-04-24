"use server"

import sgMail from "@sendgrid/mail"

// Set SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY || "")

export async function sendEmailWithSendGrid(formData: {
  email: string
  acceptedTerms: boolean
}) {
  try {
    // Send email
    await sgMail.send({
      to: process.env.NOTIFICATION_EMAIL || "your-email@example.com",
      from: process.env.FROM_EMAIL || "noreply@sb553shield.com",
      subject: "New SB553Shield Beta Signup",
      text: `
        New beta signup:
        
        Email: ${formData.email}
        Accepted Terms: ${formData.acceptedTerms ? "Yes" : "No"}
        Date: ${new Date().toLocaleString()}
      `,
      html: `
        <h1>New Beta Signup</h1>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Accepted Terms:</strong> ${formData.acceptedTerms ? "Yes" : "No"}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error: "Failed to send email" }
  }
}
