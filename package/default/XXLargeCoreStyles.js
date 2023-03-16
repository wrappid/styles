import { XX_LARGE_WINDOW_WIDTH } from "../../config/constants";
// import { xXLargeAppStyles } from "../../../styles/XXLargeAppStyles";
import { xXLargeSCStyles } from "../styledComponents/XXLargeSCStyles";
import { defaultUtilityStyles } from "../utility/DefaultUtilityStyles";
import { xXLargeUtilityStyles } from "../utility/XXLargeUtilityStyles";

const MIN_WIDTH = XX_LARGE_WINDOW_WIDTH;
const MAX_WIDTH = Number.MAX_VALUE; // setting value to very large number

export const xXLargeCoreStyles = {
  devBorder: {
    ...defaultUtilityStyles.borderSecondary,
  },

  /**************************************************
   * Styled Components Styles - XXLarge Screen
   *************************************************/
  ...xXLargeSCStyles,

  /**************************************************
   * Utility Styles - XXLarge Screen
   *************************************************/
  ...xXLargeUtilityStyles,

  /**************************************************
   * App Styles - XXLarge Screen
   *************************************************/
  // ...xXLargeAppStyles,
};
