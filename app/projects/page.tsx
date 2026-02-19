import { Metadata } from "next";
import { Header, List, Project } from "../lib/components";
import { Toolbar } from "@mui/material";

export const metadata: Metadata = {
  title: "Projects | Derek Sturm",
  description: "Projects created by Derek Sturm"
};
  
const projects: Project[] = [
  {
    name: "MySkillStudy.com",
    description: "An online lesson platform for learning and mastering skills in an interactive way",
    startDate: "2025",
    endDate: "Present",
    teamSize: 1,
    roles: [ "Full Stack Developer" ],
    link: "https://www.myskillstudy.com",
    media: "",
    tags: [ "React", "Node.JS", "Website", "MongoDB", "AI" ]
  },
  {
    name: "Snowbot",
    description: "A discord bot allowing members to collect and throw snowballs at each other",
    startDate: "2024",
    endDate: "2025",
    teamSize: 1,
    roles: [ "Full Stack Developer" ],
    link: "https://www.myskillstudy.com",
    media: "",
    tags: [ "Discord", "Node.JS", "DevOps", "MongoDB" ]
  },
  {
    name: "Fusion Fighters",
    description: "A platform fighter game where players can battle each other using custom characters",
    startDate: "2023",
    endDate: "2024",
    teamSize: 20,
    roles: ["Project Manager", "Lead Programmer"],
    link: "https://github.com/DerekSturm263/Fusion-Fighters",
    media: "/videos/fusion-fighters.mp4",
    tags: [ "Unity", "C#", "GitHub", "Jira" ]
  }
];

export default function Home() {
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
