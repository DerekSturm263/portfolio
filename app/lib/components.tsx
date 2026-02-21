'use client'

import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { TypeAnimation } from "react-type-animation";
import { AppBar, Box, Button, CardActionArea, InputAdornment, TextField, Toolbar } from "@mui/material";
import { AccountCircle, Info, Notes, Send } from "@mui/icons-material";
import { ItemProperties } from "./types";
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
            {/* Header */}
            <Link
              href="./"
              sx={{ textDecoration: "none", color: "inherit" }}
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
            </Link>

            {/* Social Links */}
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
        href={item[1]}
        key={index}
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
}

export function ItemCard({ item }: { item: ItemProperties }) {
  return (
    <Card
      sx={{ width: 300 }}
    >
      <CardActionArea>
        <CardMedia
          component={item.mediaType}
          src={item.media}
          image={item.media}
        />

        <CardContent>
          <Link
            href={item.link}
            sx={{ textDecoration: "none", color: "inherit" }}
            gutterBottom
          >
            <Typography
              variant="h5"
            >
              {item.title}
            </Typography>

            <Typography
              variant="h6"
            >
              {item.subTitle}
            </Typography>
          </Link>

          <Typography
            variant="body1"
          >
            {item.description}
          </Typography>

          <Typography
            gutterBottom
            variant="body2"
          >
            {item.subDescription}
          </Typography>
        </CardContent>

        <CardActions
          sx={{ flexWrap: "wrap", rowGap: "8px" }}
        >
          {item.tags.map((tag1, i1) => (
            <>
              <Typography>
                {tag1.name}
              </Typography>

              <Box>
                {tag1.tags.map((tag2, i2) => (
                  <Chip
                    label={tag2}
                    key={tag2}
                  />
                ))}
              </Box>
            </>
          ))}
        </CardActions>
      </CardActionArea>
    </Card>
  );
}

export async function ContactSendEmail() {
  const [ subject, setSubject ] = useState("");
  const [ senderEmail, setSenderEmail ] = useState("");
  const [ message, setMessage ] = useState("");

  async function sendEmail() {

  }

  return (
    <Card
      id="contact"
    >
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
  )
}
