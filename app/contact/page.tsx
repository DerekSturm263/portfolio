import type { Metadata } from "next";
import { ContactSendEmail, Header } from "../lib/components";
import { Toolbar } from "@mui/material";

export const metadata: Metadata = {
  title: "Contact | Derek Sturm",
  description: "Contact information for Derek Sturm"
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
