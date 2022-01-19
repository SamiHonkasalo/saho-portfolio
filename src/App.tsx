import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { AppTheme } from "~/AppTheme";
import { Layout } from "~/layout/Layout";

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={AppTheme}>
      <CssBaseline>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  );
}
