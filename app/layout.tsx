import type { Metadata } from "next";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

export const metadata: Metadata = {
  title: "Derek L. Herrera-Sturm - Portfolio",
  description: "Check out the projects I've worked on",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <CssBaseline />
          
        <body>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
