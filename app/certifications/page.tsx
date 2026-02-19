import type { Metadata } from "next";
import { Header, NavigationBar, List, Certification } from "../lib/components";

export const metadata: Metadata = {
  title: "Certifications | Derek Sturm",
  description: "Certifications earned by Derek Sturm"
};

const certifications: Certification[] = [
  {
    provider: "Unity Technologies",
    title: "Unity Certified Associate: Game Developer",
    description: "",
    startDate: "2021",
    endDate: "Present",
    media: "/images/unity-certification.png",
    link: "",
    tags: [ "Unity", "C#", "Game Development" ]
  },
  {
    provider: "Microsoft",
    title: "Microsoft Word",
    description: "",
    startDate: "2019",
    endDate: "Present",
    media: "",
    link: "",
    tags: [ "Microsoft", "Office", "Word" ]
  },
  {
    provider: "Microsoft",
    title: "Microsoft PowerPoint",
    description: "",
    startDate: "2019",
    endDate: "Present",
    media: "",
    link: "",
    tags: [ "Microsoft", "Office", "PowerPoint" ]
  }
];

export default function Home() {
  return (
    <div>
      <main>
        <Header />

        <NavigationBar />

        <List
          items={certifications}
        />
      </main>
    </div>
  );
}
