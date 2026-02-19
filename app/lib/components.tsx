'use client'

import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { TypeAnimation } from "react-type-animation";
import { AppBar, Toolbar } from "@mui/material";
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
            <Link href="./">
              <Typography gutterBottom variant="h2">
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

            <Stack
              direction="row"
              spacing={3}
            >
              <Link
                href="https://www.linkedin.com/in/derek-sturm/"
              >
                <Avatar src="/icons/linked-in.png" variant="square" />
              </Link>
                  
              <Link
                href="https://github.com/DerekSturm263/"
              >
                <Avatar src="/icons/github.svg" variant="square" />
              </Link>
                  
              <Link
                href="https://dereksturm263.itch.io/"
              >
                <Avatar src="/icons/itch-io.svg" variant="square" />
              </Link>
            </Stack>
          </Stack>

          <Stack
            direction="row"
            spacing={3}
            sx={{ justifyContent: "center" }}
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
              >
                <Typography
                  variant="h6"
                >
                  {item[0]}
                </Typography>
              </Link>
            ))}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export function List({ items }: { items: ItemProperties[] }) {
  const tags = items.reduce((acc, item) => {
    item.tags.forEach((tag) => {
      if (!acc.includes(tag))
        acc.push(tag);
    });
    return acc;
  }, [] as string[]);

  return (
    <Stack>
      <Select
        value={tags}
        label="Filter by category"
        multiple
      >
        {tags.map((tag, index) => (
          <MenuItem value={tag} key={index}>
            {tag}
          </MenuItem>
        ))}
      </Select>

      <Grid
        container
        spacing={5}
        sx={{ justifyContent: "center" }}
      >
        {items.sort((a, b) => {
          return parseInt(b.startDate) - parseInt(a.startDate);
        }).map((project, index) => (
          <ItemCard
            item={project}
            key={index}
          />
        ))}
      </Grid>
    </Stack>
  );
}

export function ItemCard({ item }: { item: ItemProperties }) {
  if ((item as Project).teamSize !== undefined)
    return <ProjectCard project={item as Project} />;
  else if ((item as Experience).company !== undefined)
    return <ExperienceCard experience={item as Experience} />;
  else if ((item as Certification).title !== undefined)
    return <CertificationCard certification={item as Certification} />;
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card
      sx={{ width: 350 }}
    >
      <CardMedia
        component="video"
        src={project.media}
      />

      <CardContent>
        <Link href={project.link}>
          <Typography gutterBottom variant="h5">
            {project.name}
          </Typography>
        </Link>

        <Typography gutterBottom variant="body1">
          {project.description}
        </Typography>

        <Typography variant="body2">
          Timeline: <b>{project.startDate} - {project.endDate}</b>
        </Typography>
        
        <Typography variant="body2">
          Team Size: <b>{project.teamSize}</b>
        </Typography>
        
        <Typography variant="body2">
          Roles: <b>{project.roles.join(", ")}</b>
        </Typography>
      </CardContent>

      <CardActions
        sx={{  }}
      >
        {project.tags.map((tag, index) => (
          <Chip
            label={tag}
            key={index}
          />
        ))}
      </CardActions>
    </Card>
  );
}

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <Card
      sx={{ width: 350 }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image={experience.media}
      />

      <CardContent>
        <Link href={experience.link}>
          <Typography gutterBottom variant="h5">
            {experience.position}
          </Typography>
        </Link>
        
        <Typography gutterBottom variant="h6">
          {experience.company}
        </Typography>

        <Typography gutterBottom variant="body2">
          Timeline: <b>{experience.startDate} - {experience.endDate}</b>
        </Typography>
        
        <Typography variant="body2">
          {experience.description}
        </Typography>
      </CardContent>

      <CardActions>
        {experience.tags.map((tag, index) => (
          <Chip
            label={tag}
            key={index}
          />
        ))}
      </CardActions>
    </Card>
  );
}

export function CertificationCard({ certification }: { certification: Certification }) {
  return (
    <Card
      sx={{ width: 350 }}
    >
      <CardMedia
        sx={{ height: 250 }}
        image={certification.media}
      />

      <CardContent>
        <Link href={certification.link}>
          <Typography gutterBottom variant="h5">
            {certification.title}
          </Typography>
        </Link>
        
        <Typography gutterBottom variant="h6">
          {certification.provider}
        </Typography>

        <Typography gutterBottom variant="body2">
          Awarded: <b>{certification.startDate}</b>
        </Typography>
        
        <Typography gutterBottom variant="body2">
          {certification.description}
        </Typography>
      </CardContent>

      <CardActions>
        {certification.tags.map((tag, index) => (
          <Chip
            label={tag}
            key={index}
          />
        ))}
      </CardActions>
    </Card>
  );
}
