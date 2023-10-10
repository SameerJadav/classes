import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import EmailTemplate from "~/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

type StudentInfo = {
  emailAddress: string;
  studentName: string;
  amountPaid: string;
  dateOfPayment: string;
  paymentMethod: string;
};

export async function POST(req: NextRequest) {
  const {
    emailAddress,
    studentName,
    amountPaid,
    dateOfPayment,
    paymentMethod,
  }: StudentInfo = await req.json();

  try {
    const data = await resend.emails.send({
      from: "fees@magicbeats.in",
      to: emailAddress,
      subject: "Payment Confirmation - Magic Beats",
      react: EmailTemplate({
        studentName,
        amountPaid,
        dateOfPayment,
        paymentMethod,
      }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
