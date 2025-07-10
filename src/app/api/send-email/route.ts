import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validators/contact";

const resend = new Resend(process.env.RESEND_API_KEY);
const myEmail = process.env.MY_EMAIL_ADDRESS;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validation = contactFormSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.format() },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = validation.data;

    const data = await resend.emails.send({
      from: "Portfolio Contact From <onboarding@resend.dev>",
      to: [myEmail!],
      subject: `New Message: ${subject}`,
      replyTo: email,
      html: `<p>You have a new message from <strong>${name}</strong> (${email}):</p><p>${message}</p>`,
    });

    return NextResponse.json({ message: "Email sent succesfully", data });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
