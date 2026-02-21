import { Stack, Toolbar, Typography } from "@mui/material";
import { Header, Sidebar, ContactSendEmail } from "./lib/components";
import { List } from "./lib/list";

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

        <Stack
          sx={{ marginLeft: 175 }}
        >
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
