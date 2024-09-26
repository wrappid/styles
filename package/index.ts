import { BaseStyle } from "./base/BaseStyle";
import { DEFAULT_PADDING, IMPORTANT, PX_TAG } from "./base/constants";
import {
  LARGE_WINDOW_WIDTH,
  MEDIUM_WINDOW_WIDTH,
  SMALL_WINDOW_WIDTH,
  X_LARGE_WINDOW_WIDTH,
  XX_LARGE_WINDOW_WIDTH
} from "./config/constants";
import { ThemeContext } from "./config/contextHandler";
import { updateModuleContextData } from "./context/wrappidAction";
import WrappidContext, {
  resetWrappidContext,
  updateWrappidContext,
  WrappidDataContext,
  WrappidDispatchContext
} from "./context/WrappidContext";
import { UPDATE_DEFAULT_THEME, UPDATE_DEVELOPMENT_DATA, UPDATE_MODULE_DATA, UPDATE_PAGE_THEME } from "./context/wrappidReducer";
import WrappidSyncer, { WrappidData } from "./context/WrappidSyncer";
import StyledComponentsClasses from "./styledComponents/StyledComponentsClasses";
import StylesProvider, { theme } from "./StylesProvider";
import { getEffectiveStyle } from "./StyleUtil";
import { DEFAULT_THEME } from "./theme/theme";
import { overrideThemeConfiguration } from "./theme/themeUtil";
import DefaultUtilityStyles from "./utility/DefaultUtilityStyles";
import LargeUtilityStyles from "./utility/LargeUtilityStyles";
import MediumUtilityStyles from "./utility/MediumUtilityStyles";
import SmallUtilityStyles from "./utility/SmallUtilityStyles";
import UtilityClasses from "./utility/UtilityClasses";
import XLargeUtilityStyles from "./utility/XLargeUtilityStyles";
import XXLargeUtilityStyles from "./utility/XXLargeUtilityStyles";

export {
  BaseStyle, DEFAULT_PADDING, DEFAULT_THEME, DefaultUtilityStyles,
  /**
   * Utility Function(s)
   */
  getEffectiveStyle, IMPORTANT, LARGE_WINDOW_WIDTH, LargeUtilityStyles, MEDIUM_WINDOW_WIDTH, MediumUtilityStyles, overrideThemeConfiguration, PX_TAG, resetWrappidContext,
  /**
   * Window Width Constants
   */
  SMALL_WINDOW_WIDTH, SmallUtilityStyles,
  /**
   * Style Classes Constants
   */
  StyledComponentsClasses, StylesProvider, theme, ThemeContext, UPDATE_DEFAULT_THEME, UPDATE_DEVELOPMENT_DATA, UPDATE_MODULE_DATA, UPDATE_PAGE_THEME, updateModuleContextData, updateWrappidContext,
  /**
   * Utility styles
   */
  UtilityClasses,
  /**
   * Wrappid Context
   */
  WrappidContext, WrappidData, WrappidDataContext,
  WrappidDispatchContext, WrappidSyncer, X_LARGE_WINDOW_WIDTH, XLargeUtilityStyles, XX_LARGE_WINDOW_WIDTH, XXLargeUtilityStyles
};

