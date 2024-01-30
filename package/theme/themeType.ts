export interface DEFAULT_THEME_TYPES {
  breakpoints: {
    keys: string[];
    values: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  };
  direction: string;
  mixins: {
    toolbar: {
      minHeight: number;
      "@media (min-width: 0px) and (orientation: landscape)": {
        minHeight: number;
      };
      "@media (min-width: 600px)": { minHeight: number };
    };
  };
  overrides: object;
  palette: {
    common: {
      black: string;
      white: string;
    };
    type: string;
    primary: {
      light: string;
      main: string;
      dark: string;
      contrastText: string;
    };
    secondary: {
      light: string;
      main: string;
      dark: string;
      contrastText: string;
      transparentDark: string;
    };
    error: {
      light: string;
      main: string;
      dark: string;
      contrastText: string;
    };
    warning: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    info: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    success: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    grey: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      A100: string;
      A200: string;
      A400: string;
      A700: string;
    };
    contrastThreshold: number;
    tonalOffset: number;
    text: {
      primary: string;
      secondary: string;
      disabled: string;
      hint: string;
    };
    divider: string;
    background: {
      paper: string;
      default: string;
    };
    action: {
      active: string;
      hover: string;
      hoverOpacity: number;
      selected: string;
      disabled: string;
      disabledBackground: string;
    };
  };
  // eslint-disable-next-line @typescript-eslint/ban-types
  props: {};
  shadows: string[];
  typography: {
    fontFamily: string;
    fontSize: number;
    fontWeightLight: number;
    fontWeightRegular: number;
    fontWeightMedium: number;
    display4: {
      fontSize: string;
      fontWeight: number;
      fontFamily: string;
      letterSpacing: string;
      lineHeight: string;
      marginLeft: string;
      color: string;
    };
    display3: {
      fontSize: string;
      fontWeight: number;
      fontFamily: string;
      letterSpacing: string;
      lineHeight: string;
      marginLeft: string;
      color: string;
    };
    display2: {
      fontSize: string;
      fontWeight: number;
      fontFamily: string;
      lineHeight: string;
      marginLeft: string;
      color: string;
    };
    display1: {
      fontSize: string;
      fontWeight: number;
      fontFamily: string;
      lineHeight: string;
      color: string;
    };
    headline: {
      fontSize: string;
      fontWeight: number;
      fontFamily: string;
      lineHeight: string;
      color: string;
    };
    title: {
      fontSize: string;
      fontWeight: number;
      fontFamily: string;
      lineHeight: string;
      color: string;
    };
    subheading: {
      fontSize: string;
      fontWeight: number;
      fontFamily: string;
      lineHeight: string;
      color: string;
    };
    body2: {
      fontSize: string;
      fontWeight: number;
      fontFamily: string;
      lineHeight: string;
      color: string;
    };
    body1: {
      fontSize: string;
      fontWeight: number;
      fontFamily: string;
      lineHeight: string;
      color: string;
    };
    caption: {
      fontSize: string;
      fontWeight: number;
      fontFamily: string;
      lineHeight: string;
      color: string;
    };
    button: {
      fontSize: string;
      textTransform: string;
      fontWeight: number;
      fontFamily: string;
      color: string;
    };
  };
  transitions: {
    easing: {
      easeInOut: string;
      easeOut: string;
      easeIn: string;
      sharp: string;
    };
    duration: {
      shortest: number;
      shorter: number;
      short: number;
      standard: number;
      complex: number;
      enteringScreen: number;
      leavingScreen: number;
    };
  };
  spacing: number;
  zIndex: {
    mobileStepper: number;
    appBar: number;
    drawer: number;
    modal: number;
    snackbar: number;
    tooltip: number;
  };
}
