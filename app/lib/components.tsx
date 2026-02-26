'use client'

import pages from "./pages";
import sendEmail from "./email";
import Link from "next/link";
import { AppBar, Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Drawer, FormControl, InputAdornment, InputLabel, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, Select, SelectChangeEvent, Snackbar, Stack, TextField, Toolbar, Tooltip, Typography } from "@mui/material";
import { AccountCircle, AlternateEmail, CheckBox, CheckBoxOutlineBlank, Notes, Send, SvgIconComponent } from "@mui/icons-material";
import { Children, Dispatch, SetStateAction, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { CardItem, SortDirection } from "./types";
import Markdown from "react-markdown";

export function Everything({ allItems }: { allItems: CardItem[][] }) {
  const [ isDialogOpen, setIsDialogOpen ] = useState(false);
  const [ dialogItem, setDialogItem ] = useState({} as CardItem);
  const [ isSnackbarOpen, setIsSnackbarOpen ] = useState(false);

  const allSortTags = Object.keys({} as CardItem) as (keyof CardItem)[];

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
          sortTag="startDate"
          sortDirection={SortDirection.Descending}
          filterTags={[]}
          setSortTagCallback={() => {}}
          setSortDirectionCallback={() => {}}
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
          sortTag="startDate"
          sortDirection={SortDirection.Descending}
          filterTags={[]}
          setSortTagCallback={() => {}}
          setSortDirectionCallback={() => {}}
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
            allSortTags={allSortTags}
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
          sortTag="startDate"
          sortDirection={SortDirection.Descending}
          filterTags={[]}
          setSortTagCallback={() => {}}
          setSortDirectionCallback={() => {}}
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

export function ItemListWithHeader({ allItems, index, title, id, icon, allSortTags, setIsOpenCallback, setItemCallback }: { allItems: CardItem[][], index: number, title: string, id: string, icon: SvgIconComponent, allSortTags: (keyof CardItem)[], setIsOpenCallback: Dispatch<SetStateAction<boolean>>, setItemCallback: Dispatch<SetStateAction<CardItem>> }) {
  const allFilterTags = [ ... new Set(allItems[index].map(item => item.type)) ];
  
  const [ sortTag, setSortTag ] = useState(allSortTags[0]);
  const [ sortDirection, setSortDirection ] = useState(SortDirection.Descending);
  const [ filterTags, setFilterTags ] = useState(allFilterTags);

  const sortedAndFilteredItems = allItems[index]
    .filter(item => filterTags.includes(item.type))
    .sort((a, b) => (a[sortTag] ?? "").toString().localeCompare((b[sortTag] ?? "").toString()) * sortDirection);

  return (
    <Section
      title={title}
      id={id}
      count={sortedAndFilteredItems.length}
      icon={icon}
      allSortTags={allSortTags}
      allFilterTags={allFilterTags}
      sortTag={sortTag}
      sortDirection={sortDirection}
      filterTags={filterTags}
      setSortTagCallback={setSortTag}
      setSortDirectionCallback={setSortDirection}
      setFilterTagsCallback={setFilterTags}
    >
      <ItemList
        items={sortedAndFilteredItems}
        setIsOpenCallback={setIsOpenCallback}
        setItemCallback={setItemCallback}
      />
    </Section>
  );
}

export function Section({ title, id, count, icon, allSortTags, allFilterTags, sortTag, sortDirection, filterTags, setSortTagCallback, setSortDirectionCallback, setFilterTagsCallback, children }: { title: string, id: string, count: number | null, icon: SvgIconComponent, allSortTags: (keyof CardItem)[], allFilterTags: string[], sortTag: keyof CardItem, sortDirection: SortDirection, filterTags: string[], setSortTagCallback: Dispatch<SetStateAction<keyof CardItem>>, setSortDirectionCallback: Dispatch<SetStateAction<SortDirection>>, setFilterTagsCallback: Dispatch<SetStateAction<string[]>>, children: React.ReactNode }) {
  const Icon = icon;

  return (
    <Stack
      id={id}
      sx={{ width: "100%", margin: "auto" }}
    >
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", marginLeft: "50px", marginRight: "50px", marginBottom: "8px" }}
      >
        <Stack
          direction="row"
          spacing={2}
        >
          <Icon
            fontSize="large"
            sx={{ marginTop: "5px" }}
          />

          <Typography
            variant="h4"
            gutterBottom
            style={{ marginTop: "-5px" }}
          >
            {title}
          </Typography>
        
          {count != null && <Chip
            label={count}
            sx={{ marginTop: "6px" }}
          />}
        </Stack>

        <Stack
          direction="row"
          spacing={1}
        >
          <FormControl
            size="small"
          >
            <InputLabel id="sort-label">Sort By</InputLabel>

            {allSortTags.length > 0 && <Select
              labelId="sort-label"
              label="Sort By"
              value={sortTag}
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
          </FormControl>

          <FormControl
            size="small"
          >
            {allSortTags.length > 0 && <Select
              label=""
              value={SortDirection[sortDirection]}
              onChange={(e) => setSortDirectionCallback(SortDirection[e.target.value as keyof typeof SortDirection])}
            >
              {Object.values(SortDirection).filter(value => typeof value === "string").map((item, index) => (
                <MenuItem
                  value={item}
                  key={index}
                >
                  {item}
                </MenuItem>
              ))}
            </Select>}
          </FormControl>

          <FormControl
            size="small"
          >
            <InputLabel id="filter-label">Filter In</InputLabel>
            
            {allFilterTags.length > 0 && <Select
              labelId="filter-label"
              label="Filter In"
              value={filterTags}
              renderValue={(selected) => (
                selected.length == 0 ? "None" :
                selected.length == allFilterTags.length ? "All" :
                "Mixed"
              )}
              multiple
              onChange={(e) => {
                const {
                  target: { value },
                } = e;

                setFilterTagsCallback(
                  typeof value === 'string' ? value.split(',') : value,
                );
              }}
            >
              {allFilterTags.map((item, index) => {
                const selected = filterTags.includes(item);
                const SelectionIcon = selected ? CheckBox : CheckBoxOutlineBlank;

                return (
                  <MenuItem
                    value={item}
                    key={index}
                  >
                    <SelectionIcon
                      fontSize="small"
                      style={{ marginRight: 8, padding: 9, boxSizing: 'content-box' }}
                    />

                    <ListItemText
                      primary={item}
                    />
                  </MenuItem>
                );
              })}
            </Select>}
          </FormControl>
        </Stack>
      </Stack>

      {Children.map(children, child => 
        <>
          {child}
        </>
      )}

      <Toolbar />
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

export function ItemList({ items, setIsOpenCallback, setItemCallback }: { items: CardItem[], setIsOpenCallback: Dispatch<SetStateAction<boolean>>, setItemCallback: Dispatch<SetStateAction<CardItem>> }) {
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
          subheader={`${item.company}, ${item.startDate} - ${item.endDate}`}
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
        {item.company}
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
