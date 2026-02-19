import { Metadata } from "next";
import { Header, NavigationBar, List, Experience } from "../lib/components";

export const metadata: Metadata = {
  title: "Work Experience | Derek Sturm",
  description: "Work experience earned by Derek Sturm"
};

const workExperiences: Experience[] = [
  {
    company: "Mukilteo School District",
    position: "CTE Educator",
    description: "Taught the Video Game Production course at Sno-Isle TECH Skills Center, teaching students about version control, agile methodologies, and software development",
    startDate: "2023",
    endDate: "Present",
    media: "/images/sno-isle.jpg",
    link: "",
    tags: [ "Teaching", "Unity", "C#", "Project Management", "GitHub" ]
  },
  {
    company: "Mukilteo School District",
    position: "Substitute Teacher",
    description: "Took place of the full-time instructor for the Video Game Design course at Sno-Isle TECH Skills Center, teaching students advanced game programming concepts",
    startDate: "2022",
    endDate: "2023",
    media: "/images/sno-isle.jpg",
    link: "",
    tags: [ "Teaching", "Unity", "C#" ]
  },
  {
    company: "Mukilteo School District",
    position: "Summer School Instructor",
    description: "Taught the summer school Video Game Design course at Sno-Isle TECH Skills Center, teaching students about teamwork, game programming, and simple linear algebra",
    startDate: "2022",
    endDate: "2024",
    media: "/images/sno-isle.jpg",
    link: "",
    tags: [ "Teaching", "Unity", "C#", "Linear Algebra" ]
  }
];

export default function Home() {
  return (
    <div>
      <main>
        <Header />

        <NavigationBar />

        <List
          items={workExperiences}
        />
      </main>
    </div>
  );
}
