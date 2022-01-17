import { Box } from "@mui/material";
import { Header } from "~/Layout/Header";
import { About } from "~/pages/about/About";
import { Hero } from "~/pages/hero/Hero";

export function Layout(): JSX.Element {
  return (
    <Box minHeight="100vh">
      <Header />
      <Hero />
      <About />
    </Box>
  );
}
