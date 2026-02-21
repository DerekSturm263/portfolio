import { Stack, Toolbar, Typography } from "@mui/material";
import { Header, Sidebar } from "./lib/components";
import { List, ContactSendEmail } from "./lib/list";

export default function Home() {
  return (
    <div>
      <main
        style={{ scrollBehavior: "smooth" }}
      >
        <Header />
        <Sidebar />

        <Toolbar />
        <Toolbar />

        <Typography variant="body1">
          
        </Typography>

        <Stack>
          <List
            title="Projects"
            id="projects"
          />

          <List
            title="Work Experience"
            id="work-experience"
          />

          <List
            title="Volunteer Experience"
            id="volunteer-experience"
          />

          <List
            title="Certifications"
            id="certifications"
          />

          <ContactSendEmail />
        </Stack>
      </main>
    </div>
  );
}
