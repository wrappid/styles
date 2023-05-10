/**************************************************
 * styleClass names for Utility Styles
 *************************************************/
const StyledComponentsClasses = {
	INPUTS: {
		BUTTON            : "scInputsButton",
		TEXT_FIELD        : "scInputsTextField",
		DATE_PICKER       : "scInputsDatePicker",
		AUTO_COMPLETE     : "scInputsAutoComplete",
		CHECKBOX          : "scInputsCheckbox",
		DATE_TIME_PICKER  : "scInputsDateTimePicker",
		FAB               : "scInputsFab",
		FORM_CONTROL      : "scInputsFormControl",
		FORM_CONTROL_LABEL: "scInputsFormControlLabel",
		FORM_HELPER_TEXT  : "scInputsFormHelperText",
		ICON_BUTTON       : "scInputsIconButton",
		INPUT             : "scInputsInput",
		INPUT_ADORNMENT   : "scInputsInputAdornment",
		INPUT_LABEL       : "scInputsInputLabel",
		ITEM_BUTTON       : "scInputsItemButton",
		MENU_ITEM         : "scInputsMenuItem",
		SELECT            : "scinputsSelect",
		SWITCH            : "scInputsSwitch",
		TIME_PICKER       : "scInputsTimePicker",
		CUSTOM            : { RICH_TEXT_EDITOR: "scInputsCustomRichTextEditor" },
	},
	NAVIGATION: {
		TAB      : "scNavigationTab",
		TABS     : "scNavigationTabs",
		LINK     : "scNavigationLink",
		MENU_ITEM: "scNavigationMenuItem",
		MENU_LIST: "scNavigationMenuList",
	},
	DATA_DISPLAY: {
		AVATAR          : "scDataDisplayAvatar",
		BADGE           : "scDataDisplayBadge",
		CHIP            : "scDataDisplayChip",
		DIVIDER         : "scDataDisplayDivider",
		ICON            : "scDataDisplayIcon",
		IMAGE           : "scDataDisplayImage",
		LIST_ITEM_ICON  : "scDataDisplayListItemIcon",
		LIST_ITEM_TEXT  : "scDataDisplayListItemText",
		TABLE           : "scDataDisplayTable",
		TABLE_BODY      : "scDataDisplayTableBody",
		TABLE_CELL      : "scDataDisplayTableCell",
		TABLE_CONTAINER : "scDataDisplayTableContainer",
		TABLE_FOOTER    : "scDataDisplayTableFooter",
		TABLE_HEAD      : "scDataDisplayTableHead",
		TABLE_PAGINATION: "scDataDisplayTablePagination",
		TABLE_ROW       : "scDataDisplayTableRow",
		TABLE_SORT_LABEL: "scDataDisplayTableSortLabel",
		TOOLTIP         : "scDataDisplayTooltip",
		TYPOGRAPHY      : "scDataDisplayTypography",
	},
	FEEDBACK: {
		ALERT            : "scFeedbackAlert",
		BACKDROP         : "scFeedbackBackdrop",
		CIRCULAR_PROGRESS: "scFeedbackCircularProgress",
		LINEAR_PROGRESS  : "scFeedbackLinearProgress",
		SKELETON         : "scFeedbackSkeleton",
		SNACKBAR         : "scFeedbackSnackbar",
	},
	FORM: {
		FORM_CONTROL_LABEL: "scFormFormControlLabel",
		FORM_GROUP        : "scFormFormGroup",
	},
	LAYOUTS: {
		APP_DIV  : "scLayoutsAppDiv",
		BOX      : "scLayoutsBox",
		CONTAINER: "scLayoutsContainer",
		GRID     : "scLayoutsGrid",
		GRID_ITEM: "scLayoutsGridItem",
		LIST     : "scLayoutsList",
		LIST_ITEM: "scLayoutsListItem",
		STACK    : "scLayoutsStack",
	},
	SURFACES: {
		ACCORDION        : "scSurfacesAccordion",
		ACCORDION_DETAILS: "scSurfacesAccordionDetails",
		ACCORDION_SUMMERY: "scSurfacesAccordionSummery",
		APP_BAR          : "scSurfacesAppBar",
		CARD             : "scSurfacesCard",
		CARD_ACTION_AREA : "scSurfacesCardActionArea",
		CARD_ACTIONS     : "scSurfacesCardActions",
		CARD_CONTENT     : "scSurfacesCardContent",
		CARD_HEADER      : "scSurfacesCardHeader",
		CARD_MEDIA       : "scSurfacesCardMedia",
		PAPER            : "scSurfacesPaper",
		TOOLBAR          : "scSurfacesToolbar",
	},

	/**
	 * Moved from core
	 */
	UTILS: { FADE: "", MODAL: "", POPOVER: "" },
	APP_BAR: { HEIGHT: "appbarHeight", APP_BAR_LOGO: "appBarLogo" },
	DRAWER : { PAPER_HEIGHT: "appDrawerPaperHeight" },
	MODAL: {
		MODAL_CONTAINER: "modalContainer",
		MODAL_HEADER   : "modalHeader",
		MODAL_BODY     : "modalBody",
	},
	
	/**
	 * @todo Have to remove this. This is here as it is used in menuUtil
	 * when we creae seperae component for menu items this should be replaced
	 */
	
	MENU        : {
		MINI_DRAWER_LIST_ITEM_BUTTON: "miniDrawerListItemButton",
		MINI_DRAWER_LIST_ITEM_ICON  : "miniDrawerListItemIcon",
		LIST_ITEM                   : "listItem",
		LIST_ITEM_BUTTON            : "listItemButton",
		LIST_ITEM_ICON              : "listItemIcon",
		LIST_ITEM_TEXT              : "listItemText",

		HEADER_BUTTON_ITEM: "headerButtonItem",
		HEADER_ICON_ITEM  : "headerIconItem",
		HEADER_TEXT_ITEM  : "headerTextItem",
		HEADER_ITEM       : "headerItem",

		PARENT_BUTTON_ITEM: "parentButtonItem",
		PARENT_ICON_ITEM  : "parentIconItem",
		PARENT_TEXT_ITEM  : "parentTextItem",
		PARENT_ITEM       : "parentItem",

		SEPERATOR_BUTTON_ITEM: "seperatorButtonItem",
		SEPERATOR_ICON_ITEM  : "seperatorIconItem",
		SEPERATOR_TEXT_ITEM  : "seperatorTextItem",
		SEPERATOR_ITEM       : "seperatorItem",

		MENU_ITEM_BUTTON_ITEM: "menuItemButtonItem",
		MENU_ITEM_ICON_ITEM  : "menuItemIconItem",
		MENU_ITEM_TEXT_ITEM  : "menuItemTextItem",
		MENU_ITEM            : "menuItem",
	},

	NAVIGATION		:{
		APP_DRAWER_TEXT          : "appDrawerText"
	}
};

export default StyledComponentsClasses;
