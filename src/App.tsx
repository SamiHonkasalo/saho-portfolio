import { Typography } from "@mui/material";
import "~/App.css";
import logo from "~/logo.svg";

export function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h4">Samin portfolio (Work In Progress)</Typography>
      </header>
    </div>
  );
}
