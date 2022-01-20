import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppTheme } from "~/AppTheme";
import { Layout } from "~/layout/Layout";

export function App(): JSX.Element {
  React.useEffect(() => {
    // bypass auto scrolling.
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
      window.location.hash = "";
    }
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={AppTheme}>
        <CssBaseline>
          <Layout />
        </CssBaseline>
      </ThemeProvider>
    </BrowserRouter>
  );
}
