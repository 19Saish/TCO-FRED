import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

export default function ({ children, ...props }) {
  return (
    <ThemeProvider theme={props.theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
