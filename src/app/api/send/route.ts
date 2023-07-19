import { NextResponse } from "next/server"
import { Resend } from "resend"
import { env } from "~/env.mjs"
import { EmailTemplate } from "~/components/EmailTemplate"

const resend = new Resend(env.RESEND_API_KEY)

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "niharparmar9978@sameerjadav.me",
      to: "sameerjadav010@gmail.com",
      subject: "Hello world",
      react: EmailTemplate({ firstName: "John" }),
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
