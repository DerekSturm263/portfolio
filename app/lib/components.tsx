'use client'

import pages from "./pages";
import sendEmail from "./email";
import Link from "next/link";
import { AppBar, Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Drawer, InputAdornment, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, TextField, Toolbar, Tooltip, Typography } from "@mui/material";
import { AccountCircle, Info, Notes, Send, SvgIconComponent } from "@mui/icons-material";
import { Children, Dispatch, SetStateAction, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { ItemProperties } from "./types";

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
                [ "https://www.linkedin.com/in/derek-sturm/", "/icons/linked-in.png", "LinkedIn" ],
                [ "https://github.com/DerekSturm263/", "/icons/github.svg", "GitHub" ],
                [ "https://dereksturm263.itch.io/", "/icons/itch-io.svg", "Itch.io" ]
              ].map((item, index) => (
                <Tooltip
                  title={item[2]}
                >
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
                </Tooltip>
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

      <List
        sx={{ margin: "auto" }}
      >
        {pages.map((item, index) => (
          <ListItem
            key={index}
          >
            <ListItemButton
              href={`#${item.id}`}
            >
              <ListItemIcon>
                <item.icon />
              </ListItemIcon>

              <ListItemText>
                {item.title}
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export function Section({ title, id, icon, children }: { title: string, id: string, icon: SvgIconComponent, children: React.ReactNode }) {
  const Icon = icon;

  return (
    <Stack
      id={id}
      sx={{ width: "95%", margin: "auto" }}
    >
      <Typography
        variant="h4"
        gutterBottom
      >
        <Icon
          fontSize="large"
          sx={{ marginBottom: "-5px" }}
        />

        {` ${title}`}
      </Typography>
      
      {Children.map(children, child => 
        <>
          {child}
        </>
      )}

      <Toolbar />
    </Stack>
  );
}

export function AboutMe() {
  return (
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
  );
}

export function ContactMe() {
  const [ subject, setSubject ] = useState("");
  const [ senderEmail, setSenderEmail ] = useState("");
  const [ message, setMessage ] = useState("");

  return (
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
            }
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
            }
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
            }
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
  )
}

export function ItemDialog({ isOpen, setIsOpenCallback, item }: { isOpen: boolean, setIsOpenCallback: Dispatch<SetStateAction<boolean>>, item: ItemProperties | null }) {
  return (
    <Dialog
      open={isOpen}
      onClose={(e) => setIsOpenCallback(false)}
    >
      <DialogTitle>
        {item?.title ?? ""}
      </DialogTitle>

      <DialogTitle>
        {item?.subTitle ?? ""}
      </DialogTitle>

      <DialogContent>
        <DialogContentText>
          {item?.description ?? ""}
        </DialogContentText>
        
        <DialogContentText>
          {item?.subDescription ?? ""}
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button
          variant="text"
          fullWidth
        >
          Learn More
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export function ItemCard({ item, setIsOpenCallback }: { item: ItemProperties, setIsOpenCallback: Dispatch<SetStateAction<boolean>> }) {
  return (
    <Card
      sx={{ width: 300 }}
    >
      <CardActionArea
        onClick={(e) => setIsOpenCallback(true)}
      >
        <CardMedia
          component={item.mediaType}
          src={item.media == "" ? undefined : item.media}
          image={item.media}
        />

        <CardHeader
          title={item.title}
          subheader={item.subTitle}
        />

        <CardContent>
          <Typography
            variant="body1"
            gutterBottom
          >
            {item.description}
          </Typography>

          <Typography
            variant="body2"
            sx={{ marginTop: "8px" }}
          >
            {item.subDescription}
          </Typography>
        </CardContent>

        {item.tags.map((tag1, index) => (
          <CardActions
            sx={{ paddingLeft: "16px", paddingRight: "16px" }}
            key={index}
          >
            <Stack
              sx={{ width: "100%" }}
            >
              <Typography
                gutterBottom
              >
                {tag1.name}
              </Typography>

              <Stack
                direction="row"
                sx={{ overflowX: "scroll", scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {tag1.tags.map((tag2, index2) => (
                  <Chip
                    label={tag2}
                    key={tag2}
                    sx={{ marginRight: index2 != tag1.tags.length - 1 ? "8px" : 0, marginBottom: "8px" }}
                  />
                ))}
              </Stack>
            </Stack>
          </CardActions>
        ))}
      </CardActionArea>
    </Card>
  );
}
