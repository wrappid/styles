import {
  XX_LARGE_WINDOW_WIDTH,
  X_LARGE_WINDOW_WIDTH,
} from "../../config/constants";
// import { xLargeAppStyles } from "../../../styles/XLargeAppStyles";
import { xLargeSCStyles } from "../styledComponents/XLargeSCStyles";
import { defaultUtilityStyles } from "../utility/DefaultUtilityStyles";
import { xLargeUtilityStyles } from "../utility/XLargeUtilityStyles";

const MIN_WIDTH = X_LARGE_WINDOW_WIDTH;
const MAX_WIDTH = XX_LARGE_WINDOW_WIDTH - 1;

export const xLargeCoreStyles = {
  devBorder: {
    ...defaultUtilityStyles.borderWarning,
  },

  /**************************************************
   * Styled Components Styles - XLarge Screen
   *************************************************/
  ...xLargeSCStyles,

  /**************************************************
   * Utility Styles - XLarge Screen
   *************************************************/
  ...xLargeUtilityStyles,

  /**************************************************
   * App Styles - XLarge Screen
   *************************************************/
  // ...xLargeAppStyles,

  authBanner: {
    backgroundImage: "url(./images/welcome-bg.png)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
  },
  authFormContainer: { width: "60%" },
  authContainer: {
    height: "100%",
  },
  authForm: {
    height: "100%",
  },
};
