import { theme } from "../theme/theme";
import {
	IMPORTANT,
	defaultUtilityStyles
} from "../utility/DefaultUtilityStyles";

const HEADING_TOP_MARGIN = "56px";

export const defaultSCStyles = {
	/**************************************************
	 * INPUTS
	 *************************************************/
	scInputsButton         : { ...defaultUtilityStyles?.ml1 },
	scInputsTextField      : {},
	scInputsDatePicker     : {},
	scInputAutoComplete    : {},
	scInputCheckbox        : {},
	scInputDateTimePicker  : {},
	scInputFab             : {},
	scInputFormControl     : {},
	scInputFormControlLabel: {},
	scInputFormHelperText  : {},
	scInputIconButton      : {},
	scInputsInputAdornment : {},
	scInputsInputLabel     : {},
	scInputsItemButton     : {
		width       : "100%" + IMPORTANT,
		marginBottom: 16 + IMPORTANT
	},
	scInputsMenuItem            : {},
	scinputsSelect              : {},
	scInputsSwitch              : {},
	scInputsTimePicker          : {},
	scInputsFormHelperText      : { paddingLeft: 0 },
	/**************************************************
	 * DATA DISPLAY
	 *************************************************/
	scDataDisplayAvatar         : {},
	scDataDisplayBadge          : {},
	scDataDisplayChip           : {},
	scDataDisplayDivider        : { ...defaultUtilityStyles.m1 },
	scDataDisplayIcon           : {},
	scDataDisplayImage          : {},
	scDataDisplayListItemIcon   : {},
	scDataDisplayListItemText   : {},
	scDataDisplayTable          : {},
	scDataDisplayTableBody      : {},
	scDataDisplayTableCell      : {},
	scDataDisplayTableContainer : {},
	scDataDisplayTableFooter    : {},
	scDataDisplayTableHead      : {},
	scDataDisplayTablePagination: {},
	scDataDisplayTableRow       : {},
	scDataDisplayTableSortLabel : {},
	scDataDisplayTooltip        : {},
	scDataDisplayTypography     : {},
	/**************************************************
	 * FEEDBACK
	 *************************************************/
	scFeedbackAlert             : {},
	scFeedbackBackdrop          : {
		zIndex         : 1202 + IMPORTANT,
		backgroundColor: theme.palette.secondary.transparentDark + IMPORTANT
	},
	scFeedbackCircularProgress: {},
	scFeedbackLinearProgress  : {},
	scFeedbackSkeleton        : {},
	scFeedbackSnackbar        : {},
	scFeedbackDialog          : { minWidth: "60%" + IMPORTANT },
	/**************************************************
	 * SURFACES
	 *************************************************/
	scSurfacesAccordion       : {},
	scSurfacesAccordionDetails: {},
	scSurfacesAccordionSummery: {},
	scSurfacesAppBar          : {
		...defaultUtilityStyles.bgPrimary,
		...defaultUtilityStyles.shadowNone
	},
	scSurfacesCard          : {},
	scSurfacesCardActionArea: {},
	scSurfacesCardActions   : {},
	scSurfacesCardContent   : {},
	scSurfacesCardHeader    : {},
	scSurfacesCardMedia     : {},
	scSurfacesPaper         : {},
	scSurfacesToolbar       : {},
	/**************************************************
	 * NAVIGATION
	 *************************************************/
	scNavigationTab         : {},
	scNavigationTabs        : {},
	scNavigationLink        : {
		color     : theme.palette.primary.main + IMPORTANT,
		fontWeight: 500 + IMPORTANT,
		fontSize  : "0.812rem" + IMPORTANT
	},
	scNavigationMenuItem: {},
	scNavigationMenuList: {},
	/**************************************************
	 * LAYOUTS
	 *************************************************/
	scLayoutsAppDiv     : {
		height: "100vh" + IMPORTANT,
		width : "100vw" + IMPORTANT
	},
	scLayoutsBox          : {},
	scLayoutsContainer    : {},
	scLayoutsGrid         : {},
	scLayoutsList         : {},
	scLayoutsListItem     : {},
	scLayoutsStack        : {},
	/**************************************************
	 * UTILS
	 *************************************************/
	/**************************************************
	 * FORM
	 *************************************************/
	scFormFormControlLabel: {},
	scFormFormGroup       : {},

	/**
	 * Moved from core
	 */

	/**
	 * Core App Bar Styles
	 */
	appbarHeight        : { top: HEADING_TOP_MARGIN + IMPORTANT },
	appDrawerPaperHeight: { height: `calc(100% - ${HEADING_TOP_MARGIN})` + IMPORTANT },
	appBarLogo          : { height: "30px" + IMPORTANT },

	/**
	 * @todo Have to remove this. This is here as it is used in menuUtil
	 * when we creae seperae component for menu items this should be replaced
	 */

	miniDrawerListItemButton: {
		// minHeight: 48,
		// paddingTop: 2,
		// paddingBottom: 2,
	},
	miniDrawerListItemIcon: { minWidth: 0 + IMPORTANT },

	listItem      : {},
	listItemButton: {
		// paddingTop: 2,
		// paddingBottom: 2,
	},
	listItemIcon: {},
	listItemText: {},

	headerItem: {
		padding: 0 + IMPORTANT
		// backgroundColor: theme.palette.secondary.light,
	},
	headerButtonItem: {},
	headerIconItem  : {},
	headerTextItem  : {},

	parentItem: {
		padding: 0 + IMPORTANT
		// backgroundColor: theme.palette.secondary.light,
	},
	parentButtonItem: {},
	parentIconItem  : {},
	parentTextItem  : {},

	seperatorItem: {
		padding: 0 + IMPORTANT
		// backgroundColor: theme.palette.secondary.light,
	},
	seperatorButtonItem: {
		height   : 0 + IMPORTANT,
		minHeight: 0 + IMPORTANT
		// backgroundColor: "gray"
	},
	seperatorIconItem: {
		height   : 0 + IMPORTANT,
		minHeight: 0 + IMPORTANT,
		display  : "none" + IMPORTANT
	},
	seperatorTextItem: { height: 0 + IMPORTANT, minHeight: 0 + IMPORTANT },

	menuItem: {
		padding: 0 + IMPORTANT
		// backgroundColor: theme.palette.secondary.light,
	},
	menuItemButtonItem: {},
	menuItemTextItem  : {},
	menuItemIconItem  : {},
	appDrawerText     : {
		color       : "rgb(88, 88, 88)" + IMPORTANT,
		overflow    : "hidden" + IMPORTANT,
		textOverflow: "ellipsis" + IMPORTANT,
		whiteSpace  : "nowrap" + IMPORTANT
	},
	webFilePicker: {
		justifyContent: "flex-end",
		display       : "flex",
		color         : "rgb(0,0,0,0.54)",
		borderBottom  : "1px solid rgba(0, 0, 0, 0.42)"
	},
	webTabHead: {
		...defaultUtilityStyles.mb1,
		...defaultUtilityStyles.stickyTop,
		...defaultUtilityStyles.bgWhite,
		...defaultUtilityStyles.overflowXScroll,
		...defaultUtilityStyles.w100,
		marginLeft: "-8px" + IMPORTANT,
		marginTop : "-8px" + IMPORTANT
	}
};
