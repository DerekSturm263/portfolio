import { Header, Sidebar, Everything } from "./lib/components";
import { Toolbar } from "@mui/material";
import { Params, SearchParams } from "./lib/types";

export default async function Home({ params, searchParams }: { params: Promise<Params>, searchParams: Promise<SearchParams> }) {
  return (
    <div>
      <main>
        <Header />
        <Sidebar />

        <Toolbar />
        <Toolbar />

        <Everything
          params={await params}
          searchParams={await searchParams}
        />
      </main>
    </div>
  );
}
