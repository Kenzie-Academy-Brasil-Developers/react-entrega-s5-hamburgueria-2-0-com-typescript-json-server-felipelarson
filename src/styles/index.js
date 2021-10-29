import { createTheme } from "@mui/material";

export const outerTheme = createTheme({
  palette: {
    primary: {
      main: "#27AE60",
    },
    secodary: {
      main: "#EB5757"
    },
    error: {
      main: "#E60000"
    },
    warning: {
      main: "#FFCD07"
    },
    success: {
      main: "#168821"
    },
    info: {
      main: "#155BCB"
    },
    grey: {
      600: "#333333",
      300: "#828282",
      100: "#E0E0E0",
      0: "#F5F5F5"
    }
  }
});