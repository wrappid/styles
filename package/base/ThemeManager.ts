import { BaseStyle } from "./BaseStyle";
import { DEFAULT_THEME_TYPES } from "../theme/themeType";

export class ThemeManager extends BaseStyle {
  refreshTheme(newTheme: DEFAULT_THEME_TYPES) {
    this.theme = newTheme;
  }
}
