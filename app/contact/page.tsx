import type { Metadata } from "next";
import { ContactSendEmail, Header } from "../lib/components";
import { Toolbar } from "@mui/material";

export const metadata: Metadata = {
  title: "Contact | Derek Sturm",
  description: "Contact Derek Sturm for inquiries, collaborations, or questions"
};

export default async function Home() {
  return (
    <div>
      <main>
        <Header />
        <Toolbar />
        
        <ContactSendEmail />
      </main>
    </div>
  );
}
