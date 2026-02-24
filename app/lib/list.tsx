'use client'

import Masonry from "@mui/lab/Masonry";
import { Dispatch, SetStateAction } from "react";
import { CardItem } from "./types";
import { ItemCard } from "./components";

export function ItemList({ items, setIsOpenCallback, setItemCallback }: { items: CardItem[], setIsOpenCallback: Dispatch<SetStateAction<boolean>>, setItemCallback: Dispatch<SetStateAction<CardItem>> }) {
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
