import WrappidContext from "../context/WrappidContext";
import { DEFAULT_THEME } from "../theme/theme";
import { DEFAULT_THEME_TYPES } from "../theme/themeType";

let baseTheme: DEFAULT_THEME_TYPES = DEFAULT_THEME;

export function updateTheme(newTheme: DEFAULT_THEME_TYPES) {
  baseTheme = { ...newTheme };
}

export abstract class BaseStyle {
  _theme: DEFAULT_THEME_TYPES;
  /**
   * @todo style types required
   */
  _style: any;

  constructor() {
    this._theme = { ...baseTheme };
    if (
      WrappidContext &&
      WrappidContext?.themes &&
      WrappidContext?.defaultTheme
    ) {
      this._theme = {
        ...DEFAULT_THEME,
        ...(WrappidContext?.themes[WrappidContext?.defaultTheme]?.theme || {}),
      };
    }
  }

  get style() {
    return this._style;
  }

  /**
   * @todo style types required
   */
  set style(styleObj: any) {
    this._style = styleObj;
  }

  get theme() {
    return this._theme;
  }

  set theme(themeObj: DEFAULT_THEME_TYPES) {
    this._theme = themeObj;
  }
}
