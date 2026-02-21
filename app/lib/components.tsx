'use client'

import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import { AccountCircle, Info, Notes, Send } from "@mui/icons-material";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

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

export async function ContactSendEmail() {
  const [ subject, setSubject ] = useState("");
  const [ senderEmail, setSenderEmail ] = useState("");
  const [ message, setMessage ] = useState("");

  async function sendEmail() {

  }

  return (
    <Stack>
      <Typography
        variant="h3"
        id="contact"
      >
        Contact Me
      </Typography>

      <Card>
        <CardContent>
          <TextField
            label="Subject"
            variant="filled"
            fullWidth
            onChange={(e) => setSubject(e.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="end">
                    <Info />
                  </InputAdornment>
                ),
              },
            }}
          />

          <TextField
            label="Your Email"
            variant="filled"
            fullWidth
            onChange={(e) => setSenderEmail(e.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="end">
                    <AccountCircle />
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
                startAdornment: (
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
            variant="contained"
            onClick={() => sendEmail()}
            startIcon={<Send />}
          >
            Send
          </Button>
        </CardActions>
      </Card>
    </Stack>
  )
}
