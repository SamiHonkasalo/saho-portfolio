import { Box, debounce } from "@mui/material";
import React from "react";
import {
  Header,
  NavigationItems,
  NavItemType,
  useNavigationScroll,
} from "~/layout/Header";
import { About } from "~/pages/about/About";
import { Contact } from "~/pages/contact/Contact";
import { Hero } from "~/pages/hero/Hero";
import { Technologies } from "~/pages/technologies/Technologies";
import { useIsMobile } from "~/utils/useIsMobile";
import { ContentSpacer } from "./ContentSpacer";
import { MobileNavigation } from "./MobileNavigation";

export function Layout(): JSX.Element {
  const isMobile = useIsMobile();
  const scrollToEl = useNavigationScroll();
  // React.useEffect(() => {
  //   if (!window.location.hash) {
  //     window.history.pushState({}, "", "#home");
  //     setTimeout(() => {
  //       scrollToEl(NavigationItems[0]);
  //     }, 500);
  //   }
  // }, [scrollToEl]);

  React.useEffect(() => {
    const activeNavItem = NavigationItems.find(
      (x) => `#${x.to}` === window.location.hash,
    );
    setTimeout(() => {
      scrollToEl(activeNavItem ?? NavigationItems[0]);
    }, 10);
  }, [scrollToEl]);

  React.useEffect(() => {
    const scrollListener = () => {
      const itemsInView: NavItemType[] = [];
      NavigationItems.forEach((item) => {
        const el = document.getElementById(item.to);
        if (!el) return;
        const inView = elementInViewport(el);
        if (!inView) return;
        itemsInView.push(item);
      });
      if (!itemsInView.length) return;
      const itemHash = `#${itemsInView[0].to}`;
      if (window.location.hash !== itemHash) {
        window.history.pushState({}, "", itemHash);
      }
    };
    const debouncedListener = debounce(scrollListener, 50);
    document.addEventListener("scroll", debouncedListener);
    return () => {
      document.removeEventListener("scroll", debouncedListener);
    };
  }, []);

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

function elementInViewport(el: HTMLElement) {
  const bounding = el.getBoundingClientRect();
  const elHeight = el.offsetHeight;
  const elWidth = el.offsetWidth;
  return (
    bounding.top >= -elHeight &&
    bounding.left >= -elWidth &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth) + elWidth &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) + elHeight
  );
}
