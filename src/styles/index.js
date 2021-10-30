import { createTheme } from "@mui/material";

// interface Props {
//   palette: {
//     primary: {
//       main: string;
//       contrastText: string;
//     },
//     secondary: {
//       main: string;
//     },
//     error: {
//       main: string;
//     },
//     warning: {
//       main: string;
//     },
//     success: {
//       main: string;
//     },
//     info: {
//       main: string;
//     },
//     grey: {
//       600: string;
//       300: string;
//       100: string;
//       0: string;
//     },
//     typografy: {
//       fontFamily: string;
//       h1: {
//         fontFamily: string;
//         fontWeight: string;
//         fontSize: string;
//       },
//       h2: {
//         fontFamily: string;
//         fontWeight: string;
//         fontSize: string;
//       },
//       h3: {
//         fontFamily: string;
//         fontWeight: string;
//         fontSize: string;
//       },
//       subtitle1: {
//         fontFamily: string;
//         fontWeight: string;
//         fontSize: string;
//       },
//       body1: {
//         fontFamily: string;
//         fontWeight: string;
//         fontSize: string;
//       },
//       body2: {
//         fontFamily: string;
//         fontWeight: string;
//         fontSize: string;
//       },
//       caption: {
//         fontFamily: string;
//         fontWeight: string;
//         fontSize: string;
//       }
//     }
//   };
//   bar: boolean;
// }

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
      0: "#F5F5F5",
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
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            boxShadow: "none",
            height: '60px',
            ":hover": {
              opacity: "0.5",
              boxShadow: "none",
            }
          },
        },
      ],
    },
    MuiTextField: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            color: "#E0E0E0",
          },
        },
      ],
    },
  }
});