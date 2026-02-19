import { Metadata } from "next";
import { Header, NavigationBar, List, Experience } from "../lib/components";

export const metadata: Metadata = {
  title: "Volunteer Experience | Derek Sturm",
  description: "Volunteer experience earned by Derek Sturm"
};

const volunteerExperiences: Experience[] = [
  {
    company: "Seattle Indies",
    position: "Event Host",
    description: "Assisted in running monthly events, hosted various annual events, including a Halloween party and the Global Game Jam",
    startDate: "2024",
    endDate: "Present",
    media: "/images/seattle-indies.jpg",
    link: "https://www.meetup.com/seattleindies/",
    tags: [ "Game Development", "Events", "Community", "Support" ]
  },
  {
    company: "The Millennial Social Club",
    position: "Organizer",
    description: "Host weekly trivia and board game meetups to help community members connect, have fun, and make new friends",
    startDate: "2024",
    endDate: "Present",
    media: "/",
    link: "https://www.meetup.com/the-millennial-social-club/",
    tags: [ "Board Games", "Community" ]
  }
];

export default function Home() {
  return (
    <div>
      <main>
        <Header />

        <NavigationBar />

        <List
          items={volunteerExperiences}
        />
      </main>
    </div>
  );
}
