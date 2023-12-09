import { theme } from "../StylesProvider";
import { BaseStyle } from "../base/BaseStyle";
import {
	IMPORTANT,
	PX_TAG,
} from "../base/contants";
import { DefaultUtilityStyles } from "../utility/DefaultUtilityStyles";

const HEADING_TOP_MARGIN = "56" + PX_TAG;

export class DefaultSCStyles extends BaseStyle {
	constructor() {
		super();

		let defOb = new DefaultUtilityStyles().getStyle();

		this.style = {
			/**************************************************
       * INPUTS
       *************************************************/
			scInputsButton         : { ...defOb?.ml1 },
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
				marginBottom: 16 + IMPORTANT,
			},
			scInputsMenuItem      : {},
			scinputsSelect        : {},
			scInputsSwitch        : {},
			scInputsTimePicker    : {},
			scInputsFormHelperText: { paddingLeft: 0 + IMPORTANT },
			/**************************************************
       * DATA DISPLAY
       *************************************************/
			scDataDisplayAvatar   : {
				backgroundColor: theme?.palette?.secondary?.light,
				borderWidth    : "1" + PX_TAG + IMPORTANT,
				borderStyle    : "solid" + IMPORTANT,
				borderColor    : theme?.palette?.secondary?.main,
			},
			scDataDisplayBadge            : {},
			scDataDisplayChip             : {},
			scDataDisplayDivider          : { ...defOb.my1 },
			scDataDisplayIcon             : {},
			scDataDisplayImage            : {},
			scDataDisplayListItemAvatar   : {},
			scDataDisplayListItemIcon     : {},
			scDataDisplayListItemSubheader: {},
			scDataDisplayListItemText     : {},
			scDataDisplayTable            : {},
			scDataDisplayTableBody        : {},
			scDataDisplayTableCell        : {},
			scDataDisplayTableContainer   : {},
			scDataDisplayTableFooter      : {},
			scDataDisplayTableHead        : {},
			scDataDisplayTablePagination  : {},
			scDataDisplayTableRow         : {},
			scDataDisplayMobileTableRow   : { padding: 0 },
			scDataDisplayMobileToolbar    : {
				borderBottomWidth: 1,
				borderBottomColor: defOb?.borderPrimary?.borderColor,
				marginTop        : "-" + defOb?.m1?.margin,
			},
			scDataDisplayTableSortLabel: {},
			scDataDisplayTooltip       : {},
			scDataDisplayTypography    : {},
			/**************************************************
       * FEEDBACK
       *************************************************/
			scFeedbackAlert            : {},
			scFeedbackBackdrop         : {
				zIndex         : 1202 + IMPORTANT,
				backgroundColor: theme?.palette?.secondary?.transparentDark + IMPORTANT,
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
				...defOb.bgPrimary,
				...defOb.shadowNone,
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
			scNavigationTabMobile   : {
				minHeight     : 48,
				minWidth      : 100,
				alignItems    : "center",
				justifyContent: "center",
				textAlign     : "center",
				paddingLeft   : 16,
				paddingRight  : 16,
				paddingTop    : 12,
				paddingBottom : 12,
			},
			scNavigationTabActive: {
				minHeight        : 48,
				minWidth         : 100,
				alignItems       : "center",
				justifyContent   : "center",
				textAlign        : "center",
				paddingLeft      : 16,
				paddingRight     : 16,
				paddingTop       : 12,
				paddingBottom    : 12,
				...defOb?.textPrimary,
				borderBottomColor: defOb?.borderPrimary?.borderColor,
				borderBottomWidth: 2,
			},
			scNavigationTabs: {},
			scNavigationLink: {
				color     : theme?.palette?.primary?.main + IMPORTANT,
				fontWeight: 500 + IMPORTANT,
				fontSize  : "0.812rem" + IMPORTANT,
			},
			scNavigationMenuItem: {},
			scNavigationMenuList: {},
			/**************************************************
       * LAYOUTS
       *************************************************/
			scLayoutsAppDiv     : {
				height: "100vh" + IMPORTANT,
				width : "100vw" + IMPORTANT,
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
			appBarLogo          : { height: "30" + PX_TAG + IMPORTANT },

			/**
       * @todo Have to remove this. This is here as it is used in menuUtil
       * when we creae seperae component for menu items this should be replaced
       */

			miniDrawerListItemButton: {
				/* minHeight: 48, paddingTop: 2, paddingBottom: 2 */
			},
			miniDrawerListItemIcon: { minWidth: 0 + IMPORTANT },

			listItem      : {},
			listItemButton: {
				/* paddingTop: 2, paddingBottom: 2, */
			},
			listItemIcon: {},
			listItemText: {},

			headerItem: {
				padding: 0 + IMPORTANT,
				// backgroundColor: theme.palette.secondary.light,
			},
			headerButtonItem: {},
			headerIconItem  : {},
			headerTextItem  : {},

			parentItem: {
				padding: 0 + IMPORTANT,
				// backgroundColor: theme.palette.secondary.light,
			},
			parentButtonItem: {},
			parentIconItem  : {},
			parentTextItem  : {},

			seperatorItem: {
				padding: 0 + IMPORTANT,
				// backgroundColor: theme.palette.secondary.light,
			},
			seperatorButtonItem: {
				height   : 0 + IMPORTANT,
				minHeight: 0 + IMPORTANT,
				// backgroundColor: "gray"
			},
			seperatorIconItem: {
				height   : 0 + IMPORTANT,
				minHeight: 0 + IMPORTANT,
				display  : "none" + IMPORTANT,
			},
			seperatorTextItem: { height: 0 + IMPORTANT, minHeight: 0 + IMPORTANT },

			menuItem: {
				padding: 0 + IMPORTANT,
				// backgroundColor: theme.palette.secondary.light,
			},
			menuItemButtonItem: {},
			menuItemTextItem  : {},
			menuItemIconItem  : {},
			appDrawerText     : {
				color       : "rgb(88, 88, 88)" + IMPORTANT,
				overflow    : "hidden" + IMPORTANT,
				textOverflow: "ellipsis" + IMPORTANT,
				whiteSpace  : "nowrap" + IMPORTANT,
			},
			webFilePicker: {
				justifyContent: "flex-end" + IMPORTANT,
				display       : "flex" + IMPORTANT,
				color         : "rgb(0,0,0,0.54)" + IMPORTANT,
				borderBottom  : "1" + PX_TAG + "solid rgba(0, 0, 0, 0.42)" + IMPORTANT,
			},
			webTabHead: {
				...defOb.mb1,
				...defOb.stickyTop,
				...defOb.bgWhite,
				...defOb.overflowXScroll,
				...defOb.w100,
				marginLeft: "-8p" + PX_TAG + IMPORTANT,
				marginTop : "-8p" + PX_TAG + IMPORTANT,
			},
		};
	}
}
