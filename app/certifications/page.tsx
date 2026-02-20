import type { Metadata } from "next";
import { Header, List } from "../lib/components";
import { ItemProperties } from "../lib/types";
import { Toolbar } from "@mui/material";
import { getAll } from "../lib/database";

export const metadata: Metadata = {
  title: "Certifications | Derek Sturm",
  description: "Certifications earned by Derek Sturm"
};

export default async function Home() {
  const certifications = await getAll<ItemProperties>('certifications');

  return (
    <div>
      <main>
        <Header />
        <Toolbar />

        <List
          items={certifications}
        />
      </main>
    </div>
  );
}
