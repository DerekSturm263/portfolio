import type { Metadata } from "next";
import { Header } from "../lib/components";
import { Button, InputAdornment, TextField, Toolbar } from "@mui/material";
import { Info, Send } from "@mui/icons-material";

export const metadata: Metadata = {
  title: "Contact | Derek Sturm",
  description: "Contact information for Derek Sturm"
};

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <Toolbar />
        
        <TextField
          label="Subject"
          variant="filled"
          fullWidth
          onChange={(e) => {}}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <Info />
                </InputAdornment>
              ),
           },
          }}
        />
        
        <TextField
          label="Message"
          variant="filled"
          fullWidth
          rows={4}
          multiline
          onChange={(e) => {}}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <Info />
                </InputAdornment>
              ),
            },
          }}
        />

        <Button
          variant="contained"
          onClick={() => {}}
          startIcon={<Send />}
         >
          Send
        </Button>
      </main>
    </div>
  );
}
