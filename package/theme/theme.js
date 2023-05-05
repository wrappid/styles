import { getConfigurationObject } from "../helper/helper";

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
  breakpoints: breakpoints, // same as mui guidelines,
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: font,
    button: { textTransform: "none" },
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
    error: {
      main: "#f44336",
      light: "#e57373",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    success: {
      main: "#66bb6a",
      light: "#81c784",
      dark: "#388e3c",
      contrastText: " rgba(0, 0, 0, 0.87)",
    },
    warning: {
      main: "#ffa726",
      light: "#ffb74d",
      dark: "#f57c00",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    info: {
      main: "#29b6f6",
      light: "#4fc3f7",
      dark: "#0288d1",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
  },
};

export function overrideThemeConfiguration() {
  let finalTheme = { ...DEFAULT_THEME };
  let configuration = getConfigurationObject();
  if (configuration.fontFamily) {
    finalTheme.typography.fontFamily = configuration.fontFamily;
  }
  if (configuration.buttonTextTransform) {
    finalTheme.typography.button.textTransform =
      configuration.buttonTextTransform;
  }
  if (configuration.paletteType) {
    finalTheme.palette.type = configuration.paletteType;
  }
  if (configuration.defaultBackgroundColor) {
    finalTheme.palette.background.default =
      configuration.defaultBackgroundColor;
  }

  if (configuration.primaryMainColor) {
    finalTheme.palette.primary.main = configuration.primaryMainColor;
  }
  if (configuration.primaryLightColor) {
    finalTheme.palette.primary.light = configuration.primarylightColor;
  }
  if (configuration.primaryDarkColor) {
    finalTheme.palette.primary.dark = configuration.primaryDarkColor;
  }
  if (configuration.primaryContrastTextColor) {
    finalTheme.palette.primary.contrastText =
      configuration.primaryContrastTextColor;
  }

  if (configuration.secondaryMainColor) {
    finalTheme.palette.secondary.main = configuration.secondaryMainColor;
  }
  if (configuration.secondaryLightColor) {
    finalTheme.palette.secondary.light = configuration.secondarylightColor;
  }
  if (configuration.secondaryDarkColor) {
    finalTheme.palette.secondary.dark = configuration.secondaryDarkColor;
  }
  if (configuration.secondaryTransparentLightColor) {
    finalTheme.palette.secondary.transparentLight =
      configuration.secondaryTransparentLightColor;
  }
  if (configuration.secondaryTransparentDarkColor) {
    finalTheme.palette.secondary.transparentDark =
      configuration.secondaryTransparentDarkColor;
  }

  return finalTheme;
}

export const theme = overrideThemeConfiguration(DEFAULT_THEME);
