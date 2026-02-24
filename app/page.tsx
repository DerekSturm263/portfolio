import { Header, Sidebar, Everything } from "./lib/components";
import { Toolbar } from "@mui/material";
import getAll from "./lib/database";
import { CardItem, Params, SearchParams } from "./lib/types";
import pages from "./lib/pages";

export default async function Page({ params, searchParams }: { params: Promise<Params>, searchParams: Promise<SearchParams> }) {
  const items: CardItem[][] = [];
  for (let i = 1; i < pages.length - 1; ++i) {
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
          params={await params}
          searchParams={await searchParams}
        />
      </main>
    </div>
  );
}
