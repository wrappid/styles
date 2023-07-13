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
import { getConfigurationObject } from "./helper/helper";
import StylesProvider from "./StylesProvider";
import {
	IMPORTANT,
	DEFAULT_PADDING,
	PX_TAG,
	defaultUtilityStyles
} from "./utility/DefaultUtilityStyles";
import { smallUtilityStyles } from "./utility/SmallUtilityStyles";
import { mediumUtilityStyles } from "./utility/MediumUtilityStyles";
import { largeUtilityStyles } from "./utility/LargeUtilityStyles";
import { xLargeUtilityStyles } from "./utility/XLargeUtilityStyles";
import { xXLargeUtilityStyles } from "./utility/XXLargeUtilityStyles";

export {
	/**
	 * Utility styles
	 */
	UtilityClasses,
	defaultUtilityStyles,
	smallUtilityStyles,
	mediumUtilityStyles,
	largeUtilityStyles,
	xLargeUtilityStyles,
	xXLargeUtilityStyles,
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
	getConfigurationObject,
	DEFAULT_PADDING,
	PX_TAG,
	IMPORTANT
};
