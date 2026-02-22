'use server'

import { Box, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Chip, Icon, Stack, Typography } from "@mui/material";
import { ItemProperties } from "./types";
import getAll from "./database";
import Masonry from "@mui/lab/Masonry";
import { Info, SvgIconComponent } from "@mui/icons-material";

export async function List({ icon, title, id }: { icon: SvgIconComponent, title: string; id: string }) {
  const items = await getAll<ItemProperties>(id);
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
        <Icon/>
           
        {title}
      </Typography>

      <Masonry
        columns={3}
        spacing={4}
        sequential
      >
        {items.map((item, index) => (
          <ItemCard
            item={item}
            key={index}
          />
        ))}
      </Masonry>
    </Stack>
  );
}

function ItemCard({ item }: { item: ItemProperties }) {
  return (
    <Card
      sx={{ width: 300 }}
    >
      <CardActionArea>
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
