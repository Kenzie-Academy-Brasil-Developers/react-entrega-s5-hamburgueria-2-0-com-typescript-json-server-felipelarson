import { createTheme } from "@mui/material";

export const outerTheme = createTheme({
  palette: {
    primary: {
      main: "#27AE60",
      contrastText: '#fff'
    },
    secondary: {
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
    },
    typografy: {
      fontFamily: "'Inter', sans-serif",
      h1: {
        fontFamily: "'Inter', sans-serif",
        fontWeight: "bold",
        fontSize: "26px"
      },
      h2: {
        fontFamily: "'Inter', sans-serif",
        fontWeight: "bold",
        fontSize: "22px"
      },
      h3: {
        fontFamily: "'Inter', sans-serif",
        fontWeight: "bold",
        fontSize: "18px"
      },
      subtitle1: {
        fontFamily: "'Inter', sans-serif",
        fontWeight: "regular",
        fontSize: "16px"
      },
      body1: {
        fontFamily: "'Inter', sans-serif",
        fontWeight: "regular",
        fontSize: "14px"
      },
      body2: {
        fontFamily: "'Inter', sans-serif",
        fontWeight: "semiBold",
        fontSize: "14px"
      },
      caption: {
        fontFamily: "'Inter', sans-serif",
        fontWeight: "regular",
        fontSize: "12px"
      }
    }
  }
});