import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#337066",
      main: "#004d40",
      dark: "#00352c",
      contrastText: "#fff",
    },
    secondary: {
      light: "#afb42b",
      main: "#9e9d24",
      dark: "#827717",
      contrastText: "#000",
    },

    // root: {
    //   padding: theme.spacing(1),
    //   [theme.breakpoints.down("md")]: {
    //     backgroundColor: theme.palette.secondary.main,
    //   },
    //   [theme.breakpoints.up("md")]: {
    //     backgroundColor: theme.palette.primary.main,
    //   },
    //   [theme.breakpoints.up("lg")]: {
    //     backgroundColor: green[500],
    //   },
    // },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});
