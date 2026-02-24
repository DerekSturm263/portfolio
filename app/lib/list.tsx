'use server'

import Masonry from "@mui/lab/Masonry";
import getAll from "./database";
import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { ItemProperties } from "./types";

export async function List({ id, setIsOpenCallback }: { id: string, setIsOpenCallback: Dispatch<SetStateAction<boolean>> }) {
  const items = await getAll<ItemProperties>(id);

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
        />
      ))}
    </Masonry>
  );
}

async function ItemCard({ item, setIsOpenCallback }: { item: ItemProperties, setIsOpenCallback: Dispatch<SetStateAction<boolean>> }) {
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
