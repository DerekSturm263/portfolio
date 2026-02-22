import { Stack, Toolbar, Typography } from "@mui/material";
import { Header, Sidebar, ContactMe, AboutMe } from "./lib/components";
import { List } from "./lib/list";
import { Props } from "./lib/types";
import { Folder, SoupKitchen, SvgIconComponent, Work, WorkspacePremium } from "@mui/icons-material";

export default async function Home({ params, searchParams }: Props) {
  const urlParams = await searchParams;

  return (
    <div>
      <main>
        <Header />
        <Sidebar />

        <Toolbar />

        <Typography variant="body1">
          
        </Typography>

        <Stack
          sx={{ marginLeft: "300px" }}
        >
          <AboutMe />

          {[
            [ <Folder />, "Projects", "projects" ],
            [ <Work />, "Work Experience", "work-experience" ],
            [ <SoupKitchen />, "Volunteer Experience", "volunteer-experience" ],
            [ <WorkspacePremium />, "Certifications", "certifications" ]
          ].map((item, index) => (
            <List
              icon={item[0] as Element as SvgIconComponent}
              title={item[1].toString()}
              id={item[2].toString()}
              key={index}
            />
          ))}

          <ContactMe />
        </Stack>
      </main>
    </div>
  );
}
