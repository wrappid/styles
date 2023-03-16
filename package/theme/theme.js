import { createTheme } from "@mui/material";

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};
const font = "'Rubik', sans-serif";

export const DEFAULT_THEME = {
  breakpoints: breakpoints, // same as mui guidelines
  typography: {
    fontFamily: font,
    button: {
      textTransform: "none",
    },
  },
  palette: {
    type: "light",
    background: {
      default: "#FAFAFA",
      // default: "#F00",
    },
    primary: {
      main: "#FB607F",
      light: "#FC7595",
      dark: "#FA385F",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#6D6C6C",
      light: "#FAFAFA",
      dark: "#6D6C6C",
      transparentLight: "#FAFAFAAA",
      transparentDark: "#6D6C6CAA",
    },
  },
};

export const theme = createTheme(DEFAULT_THEME);
