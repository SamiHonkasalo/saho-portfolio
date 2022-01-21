import { Box } from "@mui/material";
import { Header } from "~/layout/Header";
import { About } from "~/pages/about/About";
import { Contact } from "~/pages/contact/Contact";
import { Hero } from "~/pages/hero/Hero";
import { Technologies } from "~/pages/technologies/Technologies";
import { useIsMobile } from "~/utils/useIsMobile";
import { ContentSpacer } from "./ContentSpacer";
import { MobileNavigation } from "./MobileNavigation";

export function Layout(): JSX.Element {
  const isMobile = useIsMobile();

  return (
    <Box minHeight="100vh" overflow="hidden">
      <Header />
      <Hero />
      <About />
      <ContentSpacer />
      <Technologies />
      <Contact />
      {isMobile ? <MobileNavigation /> : null}
    </Box>
  );
}
