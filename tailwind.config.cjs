import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,svg}"],
  theme: {
    extend: {
      spacing: {
        header: "4rem",
        about: "3.5rem",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      backgroundPosition: {
        "bottom-center": "bottom center",
      },
    },
  },
  plugins: [],
};
