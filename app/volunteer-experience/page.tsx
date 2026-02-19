import { Metadata } from "next";
import { Header, List } from "../lib/components";
import { Experience } from "../lib/types";
import { Toolbar } from "@mui/material";
import { getAll } from "../lib/database";

export const metadata: Metadata = {
  title: "Volunteer Experience | Derek Sturm",
  description: "Volunteer experience earned by Derek Sturm"
};

export default async function Home() {
  const volunterExperiences = await getAll<Experience>('volunteer-experiences');

  return (
    <div>
      <main>
        <Header />
        <Toolbar />

        <List
          items={volunteerExperiences}
        />
      </main>
    </div>
  );
}
