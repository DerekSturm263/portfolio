import type { Metadata } from "next";
import { Header, NavigationBar } from "../lib/components";

export const metadata: Metadata = {
  title: "Contact | Derek Sturm",
  description: "Contact information for Derek Sturm"
};

export default function Home() {
  return (
    <div>
      <main>
        <Header />

        <NavigationBar />
      </main>
    </div>
  );
}
