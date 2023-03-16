import {
  LARGE_WINDOW_WIDTH,
  X_LARGE_WINDOW_WIDTH,
} from "../../config/constants";
// import { largeAppStyles } from "../../../styles/LargeAppStyles";
import { largeSCStyles } from "../styledComponents/LargeSCStyles";
import { defaultUtilityStyles } from "../utility/DefaultUtilityStyles";
import { largeUtilityStyles } from "../utility/LargeUtilityStyles";

const MIN_WIDTH = LARGE_WINDOW_WIDTH;
const MAX_WIDTH = X_LARGE_WINDOW_WIDTH - 1;

export const largeCoreStyles = {
  devBorder: {
    ...defaultUtilityStyles.borderSuccess,
  },

  /**************************************************
   * Styled Components Styles - Large Screen
   *************************************************/
  ...largeSCStyles,

  /**************************************************
   * Utility Styles - Large Screen
   *************************************************/
  ...largeUtilityStyles,

  /**************************************************
   * App Styles - Large Screen
   *************************************************/
  // ...largeAppStyles,

  authBanner: {
    backgroundImage: "url(./images/welcome-bg.png)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
  },
  authForm: {
    height: "100%",
  },
  authFormContainer: { width: "60%" },
  authContainer: {
    height: "100%",
  },
  profileBarWidth: {
    maxWidth: "25vw",
  },
};
