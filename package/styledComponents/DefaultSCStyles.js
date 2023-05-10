import { theme } from "../theme/theme";
import { defaultUtilityStyles } from "../utility/DefaultUtilityStyles";

const HEADING_TOP_MARGIN = "56px";

export const defaultSCStyles = {
	/**************************************************
   * INPUTS
   *************************************************/
	scInputsButton              : {},
	scInputsTextField           : {},
	scInputsDatePicker          : {},
	scInputAutoComplete         : {},
	scInputCheckbox             : {},
	scInputDateTimePicker       : {},
	scInputFab                  : {},
	scInputFormControl          : {},
	scInputFormControlLabel     : {},
	scInputFormHelperText       : {},
	scInputIconButton           : {},
	scInputsInputAdornment      : {},
	scInputsInputLabel          : {},
	scInputsItemButton          : { width: "100%", marginBottom: 16 },
	scInputsMenuItem            : {},
	scinputsSelect              : {},
	scInputsSwitch              : {},
	scInputsTimePicker          : {},
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
	scFeedbackBackdrop          : { zIndex: 1202, backgroundColor: theme.palette.secondary.transparentDark },
	scFeedbackCircularProgress  : {},
	scFeedbackLinearProgress    : {},
	scFeedbackSkeleton          : {},
	scFeedbackSnackbar          : {},
	/**************************************************
   * SURFACES
   *************************************************/
	scSurfacesAccordion         : {},
	scSurfacesAccordionDetails  : {},
	scSurfacesAccordionSummery  : {},
	scSurfacesAppBar            : {},
	scSurfacesCard              : {},
	scSurfacesCardActionArea    : {},
	scSurfacesCardActions       : {},
	scSurfacesCardContent       : {},
	scSurfacesCardHeader        : {},
	scSurfacesCardMedia         : {},
	scSurfacesPaper             : {},
	scSurfacesToolbar           : {},
	/**************************************************
   * NAVIGATION
   *************************************************/
	scNavigationTab             : {},
	scNavigationTabs            : {},
	scNavigationLink            : {},
	scNavigationMenuItem        : {},
	scNavigationMenuList        : {},
	/**************************************************
   * LAYOUTS
   *************************************************/
	scLayoutsAppDiv             : {},
	scLayoutsBox                : {},
	scLayoutsContainer          : {},
	scLayoutsGrid               : {},
	scLayoutsList               : {},
	scLayoutsListItem           : {},
	scLayoutsStack              : {},
	/**************************************************
   * UTILS
   *************************************************/
	/**************************************************
   * FORM
   *************************************************/
	scFormFormControlLabel      : {},
	scFormFormGroup             : {},

	/**
	 * Moved from core
	 */
	
	/**
   * Core App Bar Styles
   */
	appbarHeight        : { top: HEADING_TOP_MARGIN },
	appDrawerPaperHeight: { height: `calc(100% - ${HEADING_TOP_MARGIN})` },
	appBarLogo          : { height: "30px" },

	/**
	 * @todo Have to remove this. This is here as it is used in menuUtil
	 * when we creae seperae component for menu items this should be replaced
	 */
	
	miniDrawerListItemButton: {
		// minHeight: 48,
		// paddingTop: 2,
		// paddingBottom: 2,
	},
	miniDrawerListItemIcon: { minWidth: 0 },

	listItem      : {},
	listItemButton: {
		// paddingTop: 2,
		// paddingBottom: 2,
	},
	listItemIcon: {},
	listItemText: {},

	headerItem: {
		padding: 0,
		// backgroundColor: theme.palette.secondary.light,
	},
	headerButtonItem: {},
	headerIconItem  : {},
	headerTextItem  : {},

	parentItem: {
		padding: 0,
		// backgroundColor: theme.palette.secondary.light,
	},
	parentButtonItem: {},
	parentIconItem  : {},
	parentTextItem  : {},

	seperatorItem: {
		padding: 0,
		// backgroundColor: theme.palette.secondary.light,
	},
	seperatorButtonItem: {
		height   : 0,
		minHeight: 0,
		// backgroundColor: "gray"
	},
	seperatorIconItem: { height: 0, minHeight: 0, display: "none" },
	seperatorTextItem: { height: 0, minHeight: 0 },

	menuItem: {
		padding: 0,
		// backgroundColor: theme.palette.secondary.light,
	},
	menuItemButtonItem: {},
	menuItemTextItem  : {},
	menuItemIconItem  : {},
	appDrawerText: {
        color       : "rgb(88, 88, 88) !important",
        overflow    : "hidden",
        textOverflow: "ellipsis",
        whiteSpace  : "nowrap",
    },
};
