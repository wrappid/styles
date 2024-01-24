import { DEFAULT_THEME } from "./theme";
import { theme } from "../StylesProvider";

export function overrideThemeConfiguration() {
  const finalTheme = { ...DEFAULT_THEME, ...(theme || {}) };

  return finalTheme;
}

