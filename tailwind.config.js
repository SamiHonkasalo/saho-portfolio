/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line import/no-extraneous-dependencies
import defaultTheme from "tailwindcss/defaultTheme";

// eslint-disable-next-line import/no-default-export
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        header: "4rem",
        about: "3.5rem",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "hero-image": "url('/hero-image.png')",
      },
    },
  },
  plugins: [],
};
