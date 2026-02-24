'use server'

import Masonry from "@mui/lab/Masonry";
import getAll from "./database";
import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { ItemProperties, SearchParams } from "./types";
import { ItemCard } from "./components";

export async function List({ id, setIsOpenCallback, setItemCallback, searchParams }: { id: string, setIsOpenCallback: Dispatch<SetStateAction<boolean>>, setItemCallback: Dispatch<SetStateAction<ItemProperties>>, searchParams: SearchParams}) {
  const items: ItemProperties[] = [ JSON.parse(`
  "_id": {
    "$oid": "69976c4bfb2df523038e6ec9"
  },
  "title": "Portfolio Page",
  "subTitle": "N/A",
  "description": "An online portfolio page showcasing my projects, work experience, and more",
  "subDescription": "Timeline: 2026 - Present\nTeam Size: 1",
  "link": "https://www.dereksturm.dev",
  "mediaType": "video",
  "media": "",
  "tags": [
    {
      "name": "Roles",
      "tags": [
        "Full Stack Developer"
      ]
    },
    {
      "name": "Languages",
      "tags": [
        "Typescript"
      ]
    },
    {
      "name": "Tools & Frameworks",
      "tags": [
        "React",
        "Next.js",
        "Vercel",
        "Node.js",
        "GitHub",
        "MongoDB"
      ]
    }
  ]
}`)]; 

  return (
    <Masonry
      columns={3}
      spacing={4}
      sequential
    >
      {items.map((item, index) => (
        <ItemCard
          item={item}
          key={index}
          setIsOpenCallback={setIsOpenCallback}
          setItemCallback={setItemCallback}
        />
      ))}
    </Masonry>
  );
}
