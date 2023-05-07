import CoreClasses from "./default/CoreClasses";
import { getEffectiveStyle } from "./StyleUtil";
import UtilityClasses from "./utility/UtilityClasses";
import StyledComponentsClasses from "./styledComponents/StyledComponentsClasses";
import {
	SMALL_WINDOW_WIDTH,
	MEDIUM_WINDOW_WIDTH,
	LARGE_WINDOW_WIDTH,
	X_LARGE_WINDOW_WIDTH,
	XX_LARGE_WINDOW_WIDTH
} from "./config/constants";
import { overrideThemeConfiguration } from "./theme/theme";

export {
	/**
   * Style Classes Constants
   */
	CoreClasses,
	UtilityClasses,
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
	overrideThemeConfiguration
};
