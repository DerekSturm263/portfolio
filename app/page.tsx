"use client"

import pages from "./lib/pages";
import { Stack, Toolbar, Typography } from "@mui/material";
import { Header, Sidebar, ContactMe, AboutMe, Section, ItemDialog } from "./lib/components";
import { List } from "./lib/list";
import { ItemProperties, Props } from "./lib/types";
import { CheckBoxOutlineBlank } from "@mui/icons-material";
import { useState } from "react";

export default async function Home({ params, searchParams }: Props) {
  const urlParams = await searchParams;

  const [ dialogItem, setDialogItem ] = useState<ItemProperties>();
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <div>
      <main>
        <Header />
        <Sidebar />

        <ItemDialog
          isOpen={isOpen}
          setIsOpenCallback={setIsOpen}
          item={null}
        />

        <Toolbar />
        <Toolbar />

        <Stack
          sx={{ marginLeft: "300px" }}
        >
          <Section
            title={pages[0].title}
            id={pages[0].id}
            icon={pages[0].icon}
          >
            <AboutMe />
          </Section>

          {pages.slice(1, pages.length - 1).map((item, index) => (
            <Section
              title={item.title}
              id={item.id}
              icon={item.icon}
              key={index}
            >
              <List
                id={item.id}
                setIsOpenCallback={() => { setIsOpen }}
              />
            </Section>
          ))}

          <Section
            title={pages.at(-1)?.title ?? ""}
            id={pages.at(-1)?.id ?? ""}
            icon={pages.at(-1)?.icon ?? CheckBoxOutlineBlank}
          >
            <ContactMe />
          </Section>
        </Stack>
      </main>
    </div>
  );
}
