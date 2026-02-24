'use server'

import emailjs from "@emailjs/browser";
import { Send } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

export default async function SendEmail({ name, senderEmail, message, setIsOpenCallback }: { name: string, senderEmail: string, message: string, setIsOpenCallback: Dispatch<SetStateAction<boolean>> }) {
  return (
    <Button
      variant="text"
      onClick={() => sendEmail(name, senderEmail, message, setIsOpenCallback)}
      startIcon={<Send />}
      fullWidth
    >
      Send
    </Button>
  );
}

async function sendEmail(senderName: string, senderEmail: string, message: string, setIsOpenCallback: Dispatch<SetStateAction<boolean>>) {
  const results = await emailjs.send(
    process.env.EMAILJS_SERVICE_ID ?? "",
    process.env.EMALIJS_TEMPLATE_ID ?? "",
    {
      title: `Inquiry From ${senderName}`,
      name: senderName,
      time: Date.now().toString(),
      message: message,
      email: senderEmail
    }
  );

  setIsOpenCallback(true);
}
