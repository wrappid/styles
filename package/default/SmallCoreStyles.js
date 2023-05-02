import { MEDIUM_WINDOW_WIDTH, SMALL_WINDOW_WIDTH } from "../config/constants";
import { smallSCStyles } from "../styledComponents/SmallSCStyles";
import {
	defaultUtilityStyles,
	DEFAULT_PADDING
} from "../utility/DefaultUtilityStyles";
import { smallUtilityStyles } from "../utility/SmallUtilityStyles";

const MIN_WIDTH = SMALL_WINDOW_WIDTH;
const MAX_WIDTH = MEDIUM_WINDOW_WIDTH - 1;

const HEADING_TOP_MARGIN = "64px";

export const smallCoreStyles = {
	devBorder: { ...defaultUtilityStyles.borderError },

	/**************************************************
   * Styled Components Styles - Small Screen
   *************************************************/
	...smallSCStyles,

	/**************************************************
   * Utility Styles - Small Screen
   *************************************************/
	...smallUtilityStyles,

	/**************************************************
   * App Styles - Small Screen
   *************************************************/
	// ...smallAppStyles,

	/**
   * Core App Bar Styles
   */
	appbarHeight        : { top: HEADING_TOP_MARGIN },
	appDrawerPaperHeight: { height: `calc(100% - ${HEADING_TOP_MARGIN})` },
	appBarLogo          : {
		cursor     : "pointer",
		height     : "40px",
		paddingLeft: "8px",
	},

	contentContainer: { marginTop: HEADING_TOP_MARGIN },

	authFormContainer: { width: "100%" },
	authBanner       : {
		backgroundImage   : "url(./images/welcome-bg.png)",
		backgroundPosition: "center",
		backgroundSize    : "cover",
		backgroundRepeat  : "no-repeat",
		height            : "100%",
	},
	authContainer  : { height: "100%" },
	authForm       : { height: "100%" },
	profileBarWidth: { maxWidth: "80vw" },

	// ----------Data Table Styles Starts----------
	dataTableContainer: {
		// ...defaultUtilityStyles.bgSuccessLight,
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
		top   : "53px",
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
	dataTableToolbarContainer: {},
	dataTableToolbar         : {},
	dataTableHead            : {},
	dataTableHeadTop         : {},
	dataTableBody            : {},
	dataTableFoot            : {},

	/**
   * Table
   */
	tableHeadCell: {
		...defaultUtilityStyles.bgSecondaryLight,
		...defaultUtilityStyles.textPrimaryDark,
		...defaultUtilityStyles.px1,
	},
	tableCell                             : { ...defaultUtilityStyles.px1 },
	tableToolbarPopoverScrollableContainer: {
		padding  : DEFAULT_PADDING,
		maxHeight: "70vh",
		maxWidth : "80vw",
	},

	/**
   * Custom table features
   */
	tableRowActionPopover: { backgroundColor: "transparent" },

	auditData: {},

	// ----------Data Table Styles Ends------------
};
