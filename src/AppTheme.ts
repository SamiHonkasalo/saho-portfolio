import { createTheme } from "@mui/material";

export const AppTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#EEEEEE",
      paper: "#2A292C",
    },
    common: {
      white: "#F9F9F9",
      black: "#2A292C",
    },
  },
  typography: {
    fontFamily: "Ubuntu, Helvetica, Arial, sans-serif",
  },
  mixins: {
    toolbar: {
      minHeight: 64,
      "@media (min-width:0px) and (orientation: landscape)": {
        minHeight: 64,
      },
      "@media (min-width:600px)": {
        minHeight: 64,
      },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      html {
        scroll-behavior: smooth;
      }
      `,
    },
  },
});
