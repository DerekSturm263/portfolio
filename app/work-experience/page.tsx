import { Metadata } from "next";
import { Header, List } from "../lib/components";
import { Experience } from "../lib/types";
import { Toolbar } from "@mui/material";
import { getAll } from "../lib/database";

export const metadata: Metadata = {
  title: "Work Experience | Derek Sturm",
  description: "Work experience earned by Derek Sturm"
};

export default async function Home() {
  const workExperiences = await getAll<Experience>('work-experiences');

  return (
    <div>
      <main>
        <Header />
        <Toolbar />

        <List
          items={workExperiences}
        />
      </main>
    </div>
  );
}
