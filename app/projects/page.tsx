import { Metadata } from "next";
import { Header, List } from "../lib/components";
import { Project } from "../lib/types";
import { Toolbar } from "@mui/material";
import { getAll } from "../lib/database";

export const metadata: Metadata = {
  title: "Projects | Derek Sturm",
  description: "Projects created by Derek Sturm"
};

export default async function Home() {
  const projects = await getAll<Project>('projects');

  return (
    <div>
      <main>
        <Header />
        <Toolbar />

        <List
          items={projects}
        />
      </main>
    </div>
  );
}
