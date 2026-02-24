'use server'

import emailjs from "@emailjs/browser";

export default async function sendEmail(senderName: string, senderEmail: string, message: string) {
  const results = await emailjs.send(
    process.env.EMAILJS_SERVICE_ID ?? "",
    process.env.EMAILJS_TEMPLATE_ID ?? "",
    {
      title: `Inquiry From ${senderName}`,
      name: senderName,
      time: Date.now().toString(),
      message: message,
      email: senderEmail
    }
  );
}
