import type { Metadata } from "next";
import { Header } from "../lib/components";
import { Toolbar } from "@mui/material";

export const metadata: Metadata = {
  title: "Contact | Derek Sturm",
  description: "Contact information for Derek Sturm"
};

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <Toolbar />
      </main>
    </div>
  );
}
