'use client'

import { Avatar, Card, CardActions, CardContent, CardMedia, Chip, Grid, Link, MenuItem, Select, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

export function Header() {
  return (
    <Stack>
      <Link href="./">
        <Typography variant="h1">
          Derek L. Herrera-Sturm
        </Typography>
      </Link>

      <Typography gutterBottom variant="h2">
        Software Engineer
      </Typography>

      <Stack
        direction="row"
        spacing={2}
      >
        <Link
          href="https://www.linkedin.com/in/derek-sturm/"
        >
          <Avatar src="/icons/linked-in.png" />
        </Link>
            
        <Link
          href="https://github.com/DerekSturm263"
        >
          <Avatar src="/icons/github.svg" />
        </Link>
      </Stack>
    </Stack>
  );
}

export function NavigationBar() {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ justifyContent: "center" }}
    >
      <Link href="./projects/">
        <Typography variant="h6">
          Projects
        </Typography>
      </Link>
      
      <Link href="./professional-experience/">
        <Typography variant="h6">
          Professional Experience
        </Typography>
      </Link>
      
      <Link href="./volunteer-experience/">
        <Typography variant="h6">
          Volunteer Experience
        </Typography>
      </Link>
      
      <Link href="./certifications/">
        <Typography variant="h6">
          Certifications
        </Typography>
      </Link>
    </Stack>
  );
}

export function List({ items }: { items: ItemProperties[] }) {
  return (
    <Stack>
      <Select
        value={[ "website", "discord", "nodejs", "devops", "react" ]}
        label="Filter by category"
        multiple
      >
        <MenuItem value="website">
          Website
        </MenuItem>
            
        <MenuItem value="discord">
          Discord
        </MenuItem>
            
        <MenuItem value="nodejs">
          Node.JS
        </MenuItem>
            
        <MenuItem value="devops">
          DevOps
        </MenuItem>
            
        <MenuItem value="react">
          React
        </MenuItem>
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

export interface ItemProperties {
  description: string;
  startDate: string;
  endDate: string;
  media: string;
  link: string;
  tags: string[];
}

export interface Project extends ItemProperties {
  name: string;
  teamSize: number;
  roles: string[];
}

export interface Experience extends ItemProperties {
  company: string;
  position: string;
}

export interface Certification extends ItemProperties {
  provider: string;
  title: string;
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

      <CardActions>
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
