import { NextResponse } from "next/server"
import { Resend } from "resend"
import { env } from "~/env.mjs"
import { EmailTemplate } from "~/components/EmailTemplate"

const resend = new Resend(env.RESEND_API_KEY)

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "fees@magicbeats.in",
      to: "premmakwana0718@gmail.com",
      subject: "Payment Confirmation - Music Academy Fees",
      react: EmailTemplate({
        studentName: "Prem Makwana",
        amountPaid: 1500,
        dateOfPayment: "11/08/2023",
        paymentMethod: "Cash",
      }),
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
