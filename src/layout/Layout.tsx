import { Box } from "@mui/material";
import { Header } from "~/layout/Header";
import { About } from "~/pages/about/About";
import { Hero } from "~/pages/hero/Hero";
import { useIsMobile } from "~/utils/useIsMobile";
import { MobileNavigation } from "./MobileNavigation";

export function Layout(): JSX.Element {
  const isMobile = useIsMobile();
  return (
    <Box minHeight="100vh" overflow="hidden">
      <Header />
      <Hero />
      <About />
      {isMobile ? <MobileNavigation /> : null}
    </Box>
  );
}
