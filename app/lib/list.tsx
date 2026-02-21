'use server'

import { Stack, Typography } from "@mui/material";
import { getAll } from "./database";
import { ItemProperties } from "./types";
import { Masonry } from "@mui/lab";
import { ItemCard } from "./components";

export async function List({ title, id }: { title: string; id: string }) {
  const items = await getAll<ItemProperties>(id);

  return (
    <Stack>
      <Typography
        variant="h2"
        id={id}
      >
        {title}
      </Typography>

      <Masonry
        columns={3}
        spacing={5}
        sx={{ width: "80%", margin: "auto" }}
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
