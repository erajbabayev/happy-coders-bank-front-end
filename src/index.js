import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { theme } from "./Mui/theme";
import { ThemeProvider } from "@mui/system";
import "bootstrap/dist/css/bootstrap.min.css";


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
