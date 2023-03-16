import {
  LARGE_WINDOW_WIDTH,
  MEDIUM_WINDOW_WIDTH,
} from "../../config/constants";
// import { mediumAppStyles } from "../../../styles/MediumAppStyles";
import { mediumSCStyles } from "../styledComponents/MediumSCStyles";
import {
  defaultUtilityStyles,
  DEFAULT_PADDING,
} from "../utility/DefaultUtilityStyles";
import { mediumUtilityStyles } from "../utility/MediumUtilityStyles";

const MIN_WIDTH = MEDIUM_WINDOW_WIDTH;
const MAX_WIDTH = LARGE_WINDOW_WIDTH - 1;
const HEADING_TOP_MARGIN = "64px";

export const mediumCoreStyles = {
  devBorder: {
    ...defaultUtilityStyles.borderInfo,
  },

  /**************************************************
   * Styled Components Styles - Medium Screen
   *************************************************/
  ...mediumSCStyles,

  /**************************************************
   * Utility Styles - Medium Screen
   *************************************************/
  ...mediumUtilityStyles,

  /**************************************************
   * App Styles - Medium Screen
   *************************************************/
  // ...mediumAppStyles,

  /**
   * Core App Bar Styles
   */
  appBarLogo: {},

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
    maxWidth: "40vw",
  },
  tableFilterColumnBox: {
    padding: DEFAULT_PADDING,
    maxHeight: "70vh",
    maxWidth: "25vw",
  },

  // ----------Data Table Styles Starts----------
  dataTableContainer: {
    // ...defaultUtilityStyles.bgWarningLight,
  },
  dataTableMiniWidthPane: {
    ...defaultUtilityStyles.border,
    ...defaultUtilityStyles.borderRight,
    ...defaultUtilityStyles.borderPrimaryLight,
    // ...defaultUtilityStyles.bgWarningLight,
    ...defaultUtilityStyles.positionSticky,
    ...defaultUtilityStyles.overflowYAuto,
    ...defaultUtilityStyles.overflowXHidden,
    height: "calc(100vh - 118px)",
    top: "53px",
  },
  dataTableFullWidthPane: {
    // ...defaultUtilityStyles.border,
    // ...defaultUtilityStyles.bgInfoLight,
    // ...defaultUtilityStyles.pl0,
  },
  dataTable: {
    ...defaultUtilityStyles.mtN1,
    ...defaultUtilityStyles.mlN1,
    width: "calc(100% + 8px)",
  },
  dataTableToolbarContainer: {
    ...defaultUtilityStyles.stickyTop,
    zIndex: "1025",
  },
  dataTableToolbar: {
    ...defaultUtilityStyles.mtN2,
    ...defaultUtilityStyles.pr0,
  },
  dataTableHead: {
    // ...defaultUtilityStyles.border,
    // ...defaultUtilityStyles.borderBottom,
    // ...defaultUtilityStyles.borderPrimaryLight,
    // ...defaultUtilityStyles.shadow,
    top: "-8px",
  },
  dataTableHeadTop: {
    // top: "50px",
    top: "53px",
  },
  dataTableBody: {},
  dataTableFoot: {},

  /**
   * Table
   */
  tableHeadCell: {
    ...defaultUtilityStyles.bgSecondaryLight,
    ...defaultUtilityStyles.textPrimaryDark,
    ...defaultUtilityStyles.px1,
  },
  tableCell: {
    ...defaultUtilityStyles.px1,
  },
  tableToolbarPopoverScrollableContainer: {
    padding: DEFAULT_PADDING,
    maxHeight: "70vh",
    maxWidth: "80vw",
  },

  /**
   * Custom table features
   */
  tableRowActionPopover: {
    backgroundColor: "transparent",
  },

  auditData: {},

  // ----------Data Table Styles Ends------------
};
