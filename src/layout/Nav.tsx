import clsx from "clsx";
import React from "react";
import { useTranslation } from "react-i18next";

type NavItemType = {
  label: string;
  to: string;
  icon: React.ReactNode;
};

export const Nav = () => {
  const { t } = useTranslation();

  const activeItem = useActiveNavItem();
  const activeHash = `#${activeItem}`;
  const { hash } = window.location;
  if (hash !== activeHash) window.history.pushState({}, "", activeHash);

  const navItems: NavItemType[] = React.useMemo(
    () => [
      {
        label: t("nav.home"),
        to: "#home",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        ),
      },
      {
        label: t("nav.about"),
        to: "#about",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
        ),
      },
      {
        label: t("nav.technologies"),
        to: "#technologies",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
            />
          </svg>
        ),
      },
      {
        label: t("nav.contact"),
        to: "#contact",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
            />
          </svg>
        ),
      },
    ],
    [t],
  );

  return (
    <nav className="grid h-full grid-flow-col">
      {navItems.map((x) => {
        const isActive = x.to === activeHash;
        return (
          <React.Fragment key={x.to}>
            <a
              href={x.to}
              className={clsx(
                "hidden h-full items-center justify-center rounded-lg px-4 font-bold  transition-all hover:bg-transparent/5 md:flex",
                {
                  "text-gray-200": isActive,
                  "text-gray-400": !isActive,
                },
              )}
            >
              {x.label}
            </a>
            <a
              key={x.to}
              href={x.to}
              className={clsx(
                "flex h-full flex-col items-center justify-center transition-all md:hidden",
                {
                  "text-gray-200": isActive,
                  "text-gray-400": !isActive,
                },
              )}
            >
              {x.icon}
              <span
                className={clsx("text-sm transition-all", {
                  "opacity-100": isActive,
                  "opacity-0": !isActive,
                })}
              >
                {x.label}
              </span>
            </a>
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export function useActiveNavItem(): string {
  const [active, setActive] = React.useState("");
  const allTitlesRef = React.useRef<Record<string, IntersectionObserverEntry>>(
    {},
  );

  React.useEffect(() => {
    const callback: IntersectionObserverCallback = (entries) => {
      allTitlesRef.current = entries.reduce((acc, cur) => {
        // eslint-disable-next-line no-param-reassign
        acc[cur.target.id] = cur;
        return acc;
      }, allTitlesRef.current);

      const visibleTitles: Element[] = [];
      const keys = Object.keys(allTitlesRef.current);
      keys.forEach((key) => {
        const entry = allTitlesRef.current[key];
        if (entry.isIntersecting) visibleTitles.push(entry.target);
      });

      if (visibleTitles.length === 1) {
        setActive(visibleTitles[0].id);
        // If there is more than one visible heading,
        // choose the one that is closest to the top of the page
      } else if (visibleTitles.length > 1) {
        const sorted = [...visibleTitles].sort(
          (a, b) =>
            a.getBoundingClientRect().top - b.getBoundingClientRect().top,
        );
        const item = sorted[0];
        setActive(item.id);
      }
    };
    const observer = new IntersectionObserver(callback);
    const titleElements = Array.from(
      document.querySelectorAll("[data-section-id]"),
    );
    titleElements.forEach((x) => observer.observe(x));
    return () => observer.disconnect();
  }, []);
  return active;
}
