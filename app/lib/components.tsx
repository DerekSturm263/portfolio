'use client'

import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { TypeAnimation } from "react-type-animation";

export function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Stack
          sx={{ width: "100%" }}
        >
          <Stack
            direction="row"
            sx={{ justifyContent: "space-between", alignItems: "stretch" }}
          >
            <Typography
              gutterBottom
              variant="h2"
            >
              <TypeAnimation
                sequence={[
                  "Derek Sturm, Software Engineer",
                  1000,
                  "Derek Sturm, Web Developer",
                  1000,
                  "Derek Sturm, Game Developer",
                  1000
                ]}
                speed={25}
                repeat={Infinity}
              />
            </Typography>

            <Stack
              direction="row"
              spacing={3}
              sx={{ alignItems: "center" }}
            >
              {[
                [ "https://www.linkedin.com/in/derek-sturm/", "/icons/linked-in.png" ],
                [ "https://github.com/DerekSturm263/", "/icons/github.svg" ],
                [ "https://dereksturm263.itch.io/", "/icons/itch-io.svg" ]
              ].map((item, index) => (
                <Link
                  href={item[0]}
                  key={index}
                >
                  <Avatar
                    src={item[1]}
                    variant="square"
                  />
                </Link>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export function Sidebar() {
  return (
    <Stack
      spacing={2}
    >
      {[
        [ "Projects", "projects" ],
        [ "Work Experience", "work-experience" ],
        [ "Volunteer Experience", "volunteer-experience" ],
        [ "Certifications", "certifications" ],
        [ "Contact", "contact" ]
      ].map((item, index) => (
        <Link
          href={`#${item[1]}`}
          key={item[1]}
          sx={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography
            variant="h6"
          >
            {item[0]}
          </Typography>
        </Link>
      ))}
    </Stack>
  );
}
