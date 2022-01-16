import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { AppTheme } from "~/AppTheme";
import { Layout } from "~/Layout/Layout";

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={AppTheme}>
      <CssBaseline>
        <Layout />
      </CssBaseline>
    </ThemeProvider>
  );
}
