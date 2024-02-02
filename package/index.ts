import { BaseStyle } from "./base/BaseStyle";
import { IMPORTANT, PX_TAG, DEFAULT_PADDING } from "./base/constants";
import {
  SMALL_WINDOW_WIDTH,
  MEDIUM_WINDOW_WIDTH,
  LARGE_WINDOW_WIDTH,
  X_LARGE_WINDOW_WIDTH,
  XX_LARGE_WINDOW_WIDTH
} from "./config/constants";
import {
  CoreConfigContext,
  StylesThemesContext,
  ThemeContext,
  UserThemeContext
} from "./config/contextHandler";
import ConfigProvider from "./ConfigProvider";
import WrappidContext, {
  resetWrappidContext,
  updateWrappidContext,
  WrappidDataContext,
  WrappidDispatchContext
} from "./context/WrappidContext";
import { UPDATE_DEFAULT_THEME } from "./context/wrappidReducer";
import WrappidSyncer from "./context/WrappidSyncer";
import { getConfigurationObject } from "./helper/helper";
import StyledComponentsClasses from "./styledComponents/StyledComponentsClasses";
import StylesProvider, { theme } from "./StylesProvider";
import { getEffectiveStyle } from "./StyleUtil";
import { overrideThemeConfiguration } from "./theme/themeUtil";
import DefaultUtilityStyles from "./utility/DefaultUtilityStyles";
import LargeUtilityStyles from "./utility/LargeUtilityStyles";
import MediumUtilityStyles from "./utility/MediumUtilityStyles";
import SmallUtilityStyles from "./utility/SmallUtilityStyles";
import UtilityClasses from "./utility/UtilityClasses";
import XLargeUtilityStyles from "./utility/XLargeUtilityStyles";
import XXLargeUtilityStyles from "./utility/XXLargeUtilityStyles";

export {
  /**
   * Wrappid Context
   */
  WrappidContext,
  WrappidSyncer,
  updateWrappidContext,
  resetWrappidContext,
  WrappidDataContext,
  WrappidDispatchContext,
  UPDATE_DEFAULT_THEME,

  /**
   * Utility styles
   */
  UtilityClasses,
  BaseStyle,
  DefaultUtilityStyles,
  SmallUtilityStyles,
  MediumUtilityStyles,
  LargeUtilityStyles,
  XLargeUtilityStyles,
  XXLargeUtilityStyles,
  /**
   * Style Classes Constants
   */
  StyledComponentsClasses,
  /**
   * Utility Function(s)
   */
  getEffectiveStyle,
  /**
   * Window Width Constants
   */
  SMALL_WINDOW_WIDTH,
  MEDIUM_WINDOW_WIDTH,
  LARGE_WINDOW_WIDTH,
  X_LARGE_WINDOW_WIDTH,
  XX_LARGE_WINDOW_WIDTH,
  overrideThemeConfiguration,
  StylesProvider,
  ConfigProvider,
  CoreConfigContext,
  getConfigurationObject,
  DEFAULT_PADDING,
  PX_TAG,
  IMPORTANT,
  theme,
  StylesThemesContext,
  ThemeContext,
  UserThemeContext
};
