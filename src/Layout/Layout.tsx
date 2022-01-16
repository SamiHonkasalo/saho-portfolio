import { Box } from "@mui/material";
import { Header } from "~/Layout/Header";
import { About } from "~/Pages/About";
import { Hero } from "~/Pages/Hero";

export function Layout(): JSX.Element {
  return (
    <Box minHeight="100vh">
      <Header />
      <Hero />
      <About />
    </Box>
  );
}
