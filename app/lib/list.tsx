'use server'

import Masonry from "@mui/lab/Masonry";
import getAll from "./database";
import { Dispatch, SetStateAction } from "react";
import { ItemProperties } from "./types";
import { ItemCard } from "./components";

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
