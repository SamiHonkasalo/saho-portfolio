type NavItemType = {
  label: string;
  to: string;
};

export const navItems: NavItemType[] = [
  {
    label: "Home",
    to: "#home",
  },
  {
    label: "About",
    to: "#about",
  },
  {
    label: "Technologies",
    to: "#technologies",
  },
  {
    label: "Contact",
    to: "#contact",
  },
];

export const Header = () => {
  return (
    <header className="sticky col-span-full grid h-header grid-cols-12 text-gray-200 backdrop-blur-md">
      <h1 className="col-start-4 w-min text-2xl font-bold">Sami Honkasalo</h1>
      <nav className="col-start-5 col-end-9 mx-2 grid h-full grid-flow-col">
        {navItems.map((x) => (
          <a
            key={x.to}
            href={x.to}
            className="flex h-full items-center justify-center rounded-lg px-4 font-bold text-gray-400 hover:bg-gray-300 hover:bg-opacity-10"
          >
            {x.label}
          </a>
        ))}
      </nav>
      <button
        type="button"
        className="col-end-10 flex h-full w-min items-center justify-center rounded-lg px-8 font-bold text-gray-400 hover:bg-gray-300 hover:bg-opacity-10"
      >
        FI
      </button>
    </header>
  );
};
