import { Stack, Toolbar, Typography } from "@mui/material";
import { ContactSendEmail, Header, List } from "./lib/components";

export default function Home() {
  return (
    <div>
      <main>
        <Header />
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
