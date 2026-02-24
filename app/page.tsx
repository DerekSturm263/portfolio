'use client'

import pages from "./lib/pages";
import { Header, Sidebar, ContactMe, AboutMe, Section, ItemDialog } from "./lib/components";
import { Stack, Toolbar } from "@mui/material";
import { ItemProperties, Params, SearchParams } from "./lib/types";
import { CheckBoxOutlineBlank } from "@mui/icons-material";
import { List } from "./lib/list";
import { useState } from "react";

export default function Home({ params, searchParams }: { params: Params, searchParams: SearchParams }) {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ item, setItem ] = useState({} as ItemProperties);

  return (
    <div>
      <main>
        <Header />
        <Sidebar />

        <Toolbar />
        <Toolbar />

        <ItemDialog
          isOpen={isOpen}
          setIsOpenCallback={setIsOpen}
          item={item}
        />

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
                setIsOpenCallback={setIsOpen}
                setItemCallback={setItem}
                searchParams={searchParams}
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
