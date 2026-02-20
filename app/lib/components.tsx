'use client'

import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Masonry from "@mui/lab/Masonry";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { TypeAnimation } from "react-type-animation";
import { AppBar, Toolbar } from "@mui/material";
import { ItemProperties, Project, Experience, Certification } from "./types";

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

          {/* Navigation Bar */}
          <Stack
            direction="row"
            spacing={3}
            sx={{ justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0.25)" }}
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
          <MenuItem
            value={tag}
            key={index}
          >
            {tag}
          </MenuItem>
        ))}
      </Select>

      <Masonry
        columns={3}
        spacing={5}
        sx={{ width: "80%", margin: "auto" }}
      >
        {items.sort((a, b) => {
          return parseInt(b.startDate) - parseInt(a.startDate);
        }).map((project, index) => (
          <ItemCard
            item={project}
            key={index}
          />
        ))}
      </Masonry>
    </Stack>
  );
}

export function ItemCard({ item }: { item: ItemProperties }) {
  return (
    <Card
      sx={{ width: 300 }}
    >
      <CardMedia
        component="video"
        src={item.media}
        image={item.media}
      />

      <CardContent>
        {(item as Project).teamSize !== undefined ? (
          <ProjectCard project={item as Project} />
        ) : (item as Experience).company !== undefined ? (
          <ExperienceCard experience={item as Experience} />
        ) : (item as Certification).title !== undefined ? (
          <CertificationCard certification={item as Certification} />
        ) : null}
      </CardContent>

      <CardActions
        sx={{ flexWrap: "wrap", rowGap: "8px" }}
      >
        {item.tags.map((tag, index) => (
          <Chip
            label={tag}
            key={index}
          />
        ))}
      </CardActions>
    </Card>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <>
      <Link
        href={project.link}
        sx={{ textDecoration: "none", color: "inherit" }}
      >
        <Typography
          variant="h5"
        >
          {project.name}
        </Typography>
      </Link>
        
      <Typography
        gutterBottom
        variant="h6"
      >
        {project.company}
      </Typography>

      <Typography
        gutterBottom
        variant="body1"
      >
        {project.description}
      </Typography>

      <Typography
        variant="body2"
      >
        Timeline: <b>{project.startDate} - {project.endDate}</b>
      </Typography>
        
      <Typography
        variant="body2"
      >
        Team Size: <b>{project.teamSize}</b>
      </Typography>
        
      <Typography
        variant="body2"
      >
        Roles: <b>{project.roles.join(", ")}</b>
      </Typography>
    </>
  );
}

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <>
      <Link
        href={experience.link}
        sx={{ textDecoration: "none", color: "inherit" }}
      >
        <Typography
          variant="h5"
        >
          {experience.position}
        </Typography>
      </Link>
        
      <Typography
        gutterBottom
        variant="h6"
      >
        {experience.company}
      </Typography>

      <Typography
        gutterBottom
        variant="body2"
      >
        Timeline: <b>{experience.startDate} - {experience.endDate}</b>
      </Typography>
        
      <Typography
        variant="body2"
      >
        {experience.description}
      </Typography>
    </>
  );
}

export function CertificationCard({ certification }: { certification: Certification }) {
  return (
    <>
      <Link
        href={certification.link}
        sx={{ textDecoration: "none", color: "inherit" }}
      >
        <Typography
          variant="h5"
        >
          {certification.title}
        </Typography>
      </Link>
        
      <Typography
        gutterBottom
        variant="h6"
      >
        {certification.provider}
      </Typography>

      <Typography
        gutterBottom
        variant="body2"
      >
        Awarded: <b>{certification.startDate}</b>
      </Typography>
        
      <Typography
        variant="body2"
      >
        {certification.description}
      </Typography>
    </>
  );
}
