import { Header, Sidebar, Everything } from "./lib/components";
import { Toolbar } from "@mui/material";
import { Params, SearchParams } from "./lib/types";

export default function Page({ params, searchParams }: { params: Promise<Params>, searchParams: Promise<SearchParams> }) {
  return (
    <div>
      <main>
        <Header />
        <Sidebar />

        <Toolbar />
        <Toolbar />

        <Everything />
      </main>
    </div>
  );
}
