'use client'

import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import sendEmail from "./email";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import { Button, Card, CardActions, CardContent, Drawer, InputAdornment, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField } from "@mui/material";
import { AccountCircle, Folder, Info, Mail, Notes, Send, SoupKitchen, Work, WorkspacePremium } from "@mui/icons-material";

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
              variant="h4"
            >
              <TypeAnimation
                sequence={[
                  "Derek Sturm, Software Engineer",
                  1000,
                  "Derek Sturm, Web Developer",
                  1000,
                  "Derek Sturm, Gameplay Programmer",
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
                    sx={{ width: 36, height: 36 }}
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
    <Drawer
      variant="persistent"
      sx={{ width: 250 }}
      anchor="left"
      open={true}
    >
      <Toolbar />

      <List>
        {[
          [ <Info />, "About Me", "#about" ],
          [ <Folder />, "Projects", "#projects" ],
          [ <Work />, "Work Experience", "#work-experience" ],
          [ <SoupKitchen />, "Volunteer Experience", "#volunteer-experience" ],
          [ <WorkspacePremium />, "Certifications", "#certifications" ],
          [ <Mail />, "Contact Me", "#contact" ]
        ].map((item, index) => (
          <ListItem
            key={index}
          >
            <ListItemButton
              href={item[2].toString()}
            >
              <ListItemIcon>
                {item[0]}
              </ListItemIcon>

              <ListItemText>
                {item[1]}
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export function AboutMe() {
  return (
    <Stack
      id="about"
      sx={{ width: "95%", margin: "auto" }}
    >
      <Typography
        variant="h4"
        gutterBottom
      >
        About Me
      </Typography>
    
      <Typography
        variant="body1"
        gutterBottom
      >
        <TypeAnimation
          sequence={[
            "Hello! My name is Derek and I am a software developer with a passion for creating innovative and efficient solutions. I have experience in a variety of programming languages and frameworks, and I am always eager to learn new technologies. In my free time, I enjoy working on personal projects, contributing to open source, and staying up-to-date with the latest trends in the tech industry."
          ]}
          speed={99}
          preRenderFirstString
          cursor={false}
        />
      </Typography>
    </Stack>
  );
}

export function ContactMe() {
  const [ subject, setSubject ] = useState("");
  const [ senderEmail, setSenderEmail ] = useState("");
  const [ message, setMessage ] = useState("");

  return (
    <Stack
      id="contact"
      sx={{ width: "95%", margin: "auto" }}
    >
      <Typography
        variant="h4"
        gutterBottom
      >
        Contact Me
      </Typography>

      <Card>
        <CardContent>
          <TextField
            label="Your Email Address"
            variant="filled"
            fullWidth
            onChange={(e) => setSenderEmail(e.target.value)}
            type="email"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <AccountCircle />
                  </InputAdornment>
                ),
              },
            }}
          />

          <TextField
            label="Subject"
            variant="filled"
            fullWidth
            onChange={(e) => setSubject(e.target.value)}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <Info />
                  </InputAdornment>
                ),
              },
            }}
          />

          <TextField
            label="Message"
            variant="filled"
            fullWidth
            rows={6}
            multiline
            onChange={(e) => setMessage(e.target.value)}
              slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <Notes />
                  </InputAdornment>
                ),
              },
            }}
          />
        </CardContent>

        <CardActions>
          <Button
            variant="text"
            onClick={() => sendEmail(subject, senderEmail, message)}
            startIcon={<Send />}
            fullWidth
          >
            Send
          </Button>
        </CardActions>
      </Card>
    </Stack>
  )
}
