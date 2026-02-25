import pages from "./lib/pages";
import getAll from "./lib/database";
import { Header, Sidebar, Everything } from "./lib/components";
import { CardItem, Properties } from "./lib/types";
import { Toolbar } from "@mui/material";

export default async function Page({ slug, urlParams }: Properties) {
  const items: CardItem[][] = [];
  for (let i = 2; i < pages.length - 1; ++i) {
    items.push(await getAll<CardItem>(pages[i].id));
  }

  return (
    <div>
      <main>
        <Header />
        <Sidebar />

        <Toolbar />
        <Toolbar />

        <Everything
          allItems={items}
        />
      </main>
    </div>
  );
}
