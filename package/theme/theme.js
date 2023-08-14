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
	shape      : { borderRadius: 4 },
	typography : {
		fontFamily: font,
		button    : { textTransform: "none" },
	},
	palette: {
		type      : "light",
		background: { default: "#FAFAFA" },
		common    : {
			black: "#000000",
			white: "#FFFFFF",
		},
		primary: {
			main        : "#1F5296",
			light       : "#6295D9",
			dark        : "#003377",
			contrastText: "#FFFFFF",
		},
		secondary: {
			main            : "#6D6C6C",
			light           : "#FAFAFA",
			dark            : "#6D6C6C",
			transparentLight: "#FAFAFAAA",
			transparentDark : "#6D6C6CAA",
		},
		error: {
			main        : "#f44336",
			light       : "#e57373",
			dark        : "#d32f2f",
			contrastText: "#fff",
		},
		success: {
			main        : "#66bb6a",
			light       : "#81c784",
			dark        : "#388e3c",
			contrastText: " rgba(0, 0, 0, 0.87)",
		},
		warning: {
			main        : "#ffa726",
			light       : "#ffb74d",
			dark        : "#f57c00",
			contrastText: "rgba(0, 0, 0, 0.87)",
		},
		info: {
			main        : "#29b6f6",
			light       : "#4fc3f7",
			dark        : "#0288d1",
			contrastText: "rgba(0, 0, 0, 0.87)",
		},
		text: {
			primary  : "rgba(0, 0, 0, 0.87)",
			secondary: "rgba(0, 0, 0, 0.6)"
		},
		action: {
			active  : "rgba(0, 0, 0, 0.54)",
			hover   : "rgba(0, 0, 0, 0.04)",
			disabled: "rgba(0, 0, 0, 0.26)",
			focus   : "rgba(0, 0, 0, 0.12)",
		}
	},
};

export function overrideThemeConfiguration() {
	let finalTheme = { ...DEFAULT_THEME };
	let configuration = getConfigurationObject();

	if (configuration.theme.fontFamily) {
		finalTheme.typography.fontFamily = configuration.theme.fontFamily;
	}
	if (configuration.theme.buttonTextTransform) {
		finalTheme.typography.button.textTransform =
      configuration.theme.buttonTextTransform;
	}
	if (configuration.theme.paletteType) {
		finalTheme.palette.type = configuration.theme.paletteType;
	}
	if (configuration.theme.defaultBackgroundColor) {
		finalTheme.palette.background.default =
      configuration.theme.defaultBackgroundColor;
	}

	if (configuration.theme.primaryMainColor) {
		finalTheme.palette.primary.main = configuration.theme.primaryMainColor;
	}
	if (configuration.theme.primaryLightColor) {
		finalTheme.palette.primary.light = configuration.theme.primaryLightColor;
	}
	if (configuration.theme.primaryDarkColor) {
		finalTheme.palette.primary.dark = configuration.theme.primaryDarkColor;
	}
	if (configuration.theme.primaryContrastTextColor) {
		finalTheme.palette.primary.contrastText =
      configuration.theme.primaryContrastTextColor;
	}

	if (configuration.theme.secondaryMainColor) {
		finalTheme.palette.secondary.main = configuration.theme.secondaryMainColor;
	}
	if (configuration.theme.secondaryLightColor) {
		finalTheme.palette.secondary.light = configuration.theme.secondaryLightColor;
	}
	if (configuration.theme.secondaryDarkColor) {
		finalTheme.palette.secondary.dark = configuration.theme.secondaryDarkColor;
	}
	if (configuration.theme.secondaryTransparentLightColor) {
		finalTheme.palette.secondary.transparentLight =
      configuration.theme.secondaryTransparentLightColor;
	}
	if (configuration.theme.secondaryTransparentDarkColor) {
		finalTheme.palette.secondary.transparentDark =
      configuration.theme.secondaryTransparentDarkColor;
	}

	return finalTheme;
}

export const theme = overrideThemeConfiguration();
