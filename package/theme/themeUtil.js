import { theme } from "../StylesProvider";
import { DEFAULT_THEME } from "./theme";

export function overrideThemeConfiguration() {
	let finalTheme = { ...DEFAULT_THEME, ...(theme || {}) };

	return finalTheme;
}

