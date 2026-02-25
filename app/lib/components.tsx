'use client'

import pages from "./pages";
import sendEmail from "./email";
import Link from "next/link";
import { AppBar, Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Drawer, InputAdornment, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, Select, SelectChangeEvent, Snackbar, Stack, TextField, Toolbar, Tooltip, Typography } from "@mui/material";
import { AccountCircle, AlternateEmail, CheckBoxOutlineBlank, Notes, Send, SvgIconComponent } from "@mui/icons-material";
import { Children, Dispatch, SetStateAction, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { CardItem } from "./types";
import Markdown from "react-markdown";

export function Everything({ allItems }: { allItems: CardItem[][] }) {
  const [ isDialogOpen, setIsDialogOpen ] = useState(false);
  const [ dialogItem, setDialogItem ] = useState({} as CardItem);
  const [ isSnackbarOpen, setIsSnackbarOpen ] = useState(false);

  return (
    <>
      <ItemDialog
        isOpen={isDialogOpen}
        setIsOpenCallback={setIsDialogOpen}
        item={dialogItem}
      />

      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={3000}
        onClose={(e) => setIsSnackbarOpen(false)}
        message="Email sent!"
      />

      <Stack
        sx={{ marginLeft: "269px" }}
      >
        <Section
          title={pages[0].title}
          id={pages[0].id}
          count={null}
          icon={pages[0].icon}
          allSortTags={[]}
          allFilterTags={[]}
          sortTag=""
          filterTags={[]}
          setSortTagCallback={() => {}}
          setFilterTagsCallback={() => {}}
        >
          <AboutMe />
        </Section>
        
        <Section
          title={pages[1].title}
          id={pages[1].id}
          count={22} // Todo: Fix hardcoding
          icon={pages[1].icon}
          allSortTags={[]}
          allFilterTags={[]}
          sortTag=""
          filterTags={[]}
          setSortTagCallback={() => {}}
          setFilterTagsCallback={() => {}}
        >
          <Skills />
        </Section>

        {pages.slice(2, pages.length - 1).map((item, index) => (
          <ItemListWithHeader
            allItems={allItems}
            index={index}
            title={item.title}
            id={item.id}
            icon={item.icon}
            setIsOpenCallback={setIsDialogOpen}
            setItemCallback={setDialogItem}
            key={index}
          />
        ))}

        <Section
          title={pages.at(-1)?.title ?? ""}
          id={pages.at(-1)?.id ?? ""}
          count={null}
          icon={pages.at(-1)?.icon ?? CheckBoxOutlineBlank}
          allSortTags={[]}
          allFilterTags={[]}
          sortTag=""
          filterTags={[]}
          setSortTagCallback={() => {}}
          setFilterTagsCallback={() => {}}
        >
          <ContactMe
            setIsOpenCallback={setIsSnackbarOpen}
          />
        </Section>
      </Stack>
    </>
  );
}

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
                  key={index}
                >
                  <Link
                    href={item[0]}
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

export function Section({ title, id, count, icon, allSortTags, allFilterTags, sortTag, filterTags, setSortTagCallback, setFilterTagsCallback, children }: { title: string, id: string, count: number | null, icon: SvgIconComponent, allSortTags: string[], allFilterTags: string[], sortTag: string, filterTags: string[], setSortTagCallback: Dispatch<SetStateAction<string>>, setFilterTagsCallback: Dispatch<SetStateAction<string[]>>, children: React.ReactNode }) {
  const Icon = icon;

  return (
    <Stack
      id={id}
      sx={{ width: "100%", margin: "auto" }}
    >
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", marginLeft: "50px", marginRight: "50px" }}
      >
        <Stack
          direction="row"
        >
          <Icon
            fontSize="large"
            sx={{ marginTop: "5px" }}
          />

          <Typography
            variant="h4"
            gutterBottom
            sx={{ marginLeft: "6px" }}
          >
            {title}
          </Typography>
        
          {count != null && <Chip
            label={count}
            sx={{ marginTop: "5px", marginLeft: "8px" }}
          />}
        </Stack>

        <Stack
          direction="row"
        >
          {allSortTags.length > 0 && <Select
            label="Sort"
            value={sortTag}
            size="small"
            onChange={(e) => setSortTagCallback(e.target.value)}
          >
            {allSortTags.map((item, index) => (
              <MenuItem
                value={item}
                key={index}
              >
                {item}
              </MenuItem>
            ))}
          </Select>}

          {allFilterTags.length > 0 && <Select
            label="Filter"
            value={filterTags}
            multiple
            size="small"
            onChange={(e) => {
              const {
                target: { value },
              } = e;

              setFilterTagsCallback(
                typeof value === 'string' ? value.split(',') : value,
              );
            }}
          >
            {allFilterTags.map((item, index) => (
              <MenuItem
                value={item}
                key={index}
              >
                {item}
              </MenuItem>
            ))}
          </Select>}
        </Stack>
      </Stack>

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
      sx={{ marginLeft: "50px", marginRight: "50px" }}
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

export function Skills() {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{ marginLeft: "50px", marginRight: "50px", flexWrap: "wrap" }}
    >
      {[ "C#", "Java", "C", "C++", "JavaScript", "HTML", "CSS", "React", "Next.js", "Node.js", "Unity", "Visual Studio", "GitHub", "DevOps", "Vercel", "MongoDB", "Jira", "Confluence", "Project Management", "Cloud Computing", "Google Cloud", "CI/CD" ].map((item, index) => (
        <Chip
          key={index}
          label={item}
          size="medium"
        />
      ))}
    </Stack>
  );
}

export function ItemListWithHeader({ allItems, index, title, id, icon, setIsOpenCallback, setItemCallback }: { allItems: CardItem[][], index: number, title: string, id: string, icon: SvgIconComponent, setIsOpenCallback: Dispatch<SetStateAction<boolean>>, setItemCallback: Dispatch<SetStateAction<CardItem>> }) {
  const [ sortTag, setSortTag ] = useState("startDate");
  const [ filterTags, setFilterTags ] = useState<string[]>([]);

  return (
    <Section
      title={title}
      id={id}
      count={allItems[index].length}
      icon={icon}
      allSortTags={[ "startDate", "endDate", "title", "subTitle" ]}
      allFilterTags={[ "Test 3", "Test 4" ]}
      sortTag={sortTag}
      filterTags={filterTags}
      setSortTagCallback={setSortTag}
      setFilterTagsCallback={setFilterTags}
    >
      <ItemList
        items={allItems[index]}
        sortTag={sortTag}
        filterTags={filterTags}
        setIsOpenCallback={setIsOpenCallback}
        setItemCallback={setItemCallback}
      />
    </Section>
  );
}

export function ContactMe({ setIsOpenCallback }: { setIsOpenCallback: Dispatch<SetStateAction<boolean>> }) {
  const [ name, setYourName ] = useState("");
  const [ senderEmail, setSenderEmail ] = useState("");
  const [ message, setMessage ] = useState("");

  return (
    <Card
      sx={{ marginLeft: "50px", marginRight: "50px" }}
    >
      <CardContent>
        <TextField
          label="Your Name"
          variant="filled"
          fullWidth
          onChange={(e) => setYourName(e.target.value)}
          value={name}
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
          label="Your Email Address"
          variant="filled"
          fullWidth
          onChange={(e) => setSenderEmail(e.target.value)}
          value={senderEmail}
          type="email"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <AlternateEmail />
                </InputAdornment>
              ),
            }
          }}
        />

        <TextField
          label="Message"
          variant="filled"
          fullWidth
          rows={8}
          multiline
          onChange={(e) => setMessage(e.target.value)}
          value={message}
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
          onClick={async () => {
            await sendEmail(name, senderEmail, message);
            setIsOpenCallback(true);
          }}
          startIcon={<Send />}
          fullWidth
        >
          Send Email
        </Button>
      </CardActions>
    </Card>
  )
}

export function ItemList({ items, sortTag, filterTags, setIsOpenCallback, setItemCallback }: { items: CardItem[], sortTag: string, filterTags: string[], setIsOpenCallback: Dispatch<SetStateAction<boolean>>, setItemCallback: Dispatch<SetStateAction<CardItem>> }) {
  return (
    <Stack
      direction="row"
      spacing={4}
      sx={{ overflowX: "scroll", scrollbarWidth: "none", paddingLeft: "50px", paddingRight: "50px" }}
    >
      {items.map((item, index) => (
        <ItemCard
          item={item}
          key={index}
          setIsOpenCallback={setIsOpenCallback}
          setItemCallback={setItemCallback}
        />
      ))}
    </Stack>
  );
}

export function ItemCard({ item, setIsOpenCallback, setItemCallback }: { item: CardItem, setIsOpenCallback: Dispatch<SetStateAction<boolean>>, setItemCallback: Dispatch<SetStateAction<CardItem>> }) {
  return (
    <Card
      sx={{ width: "350px", minWidth: "350px" }}
    >
      <CardActionArea
        onClick={(e) => {
          setIsOpenCallback(true);
          setItemCallback(item);
        }}
      >
        <CardMedia
          component={item.mediaType}
          src={item.media == "" ? undefined : item.media}
          image={item.media}
          height={150}
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
            <Markdown>
              {item.description}
            </Markdown>
          </Typography>

          <Typography
            variant="body2"
            sx={{ marginTop: "8px" }}
          >
            <Markdown>
              {item.subDescription}
            </Markdown>
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

export function ItemDialog({ isOpen, setIsOpenCallback, item }: { isOpen: boolean, setIsOpenCallback: Dispatch<SetStateAction<boolean>>, item: CardItem }) {
  return (
    <Dialog
      open={isOpen}
      onClose={(e) => setIsOpenCallback(false)}
    >
      <DialogTitle>
        {item.title}
      </DialogTitle>

      <DialogTitle>
        {item.subTitle}
      </DialogTitle>

      <DialogContent>
        <img
          src={item.media}
          style={{ width: "100%" }}
        />

        <DialogContentText>
          <Markdown>
            {item.description}
          </Markdown>
        </DialogContentText>
        
        <DialogContentText>
          <Markdown>
            {item.subDescription}
          </Markdown>
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
