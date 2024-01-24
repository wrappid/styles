/**************************************************
 * styleClass names for Utility Styles
 *************************************************/
const StyledComponentsClasses = {
  APP_BAR     : { APP_BAR_LOGO: "appBarLogo", HEIGHT: "appbarHeight" },
  DATA_DISPLAY: {
    AVATAR              : "scDataDisplayAvatar",
    AVATAR_GROUP        : "scDataDisplayAvatarGroup",
    BADGE               : "scDataDisplayBadge",
    CHIP                : "scDataDisplayChip",
    DIVIDER             : "scDataDisplayDivider",
    ICON                : "scDataDisplayIcon",
    IMAGE               : "scDataDisplayImage",
    LIST_ITEM_AVATAR    : "scDataDisplayListItemAvatar",
    LIST_ITEM_ICON      : "scDataDisplayListItemIcon",
    LIST_ITEM_SUBHEADER : "scDataDisplayListItemSubheader",
    LIST_ITEM_TEXT      : "scDataDisplayListItemText",
    MOBILE_TABLE_ROW    : "scDataDisplayMobileTableRow",
    MOBILE_TABLE_TOOLBAR: "scDataDisplayMobileToolbar",
    TABLE               : "scDataDisplayTable",
    TABLE_BODY          : "scDataDisplayTableBody",
    TABLE_CELL          : "scDataDisplayTableCell",
    TABLE_CONTAINER     : "scDataDisplayTableContainer",
    TABLE_FOOTER        : "scDataDisplayTableFooter",
    TABLE_HEAD          : "scDataDisplayTableHead",
    TABLE_PAGINATION    : "scDataDisplayTablePagination",
    TABLE_ROW           : "scDataDisplayTableRow",
    TABLE_SORT_LABEL    : "scDataDisplayTableSortLabel",
    TOOLTIP             : "scDataDisplayTooltip",
    TYPOGRAPHY          : "scDataDisplayTypography"
  },
  DRAWER  : { PAPER_HEIGHT: "appDrawerPaperHeight" },
  FEEDBACK: {
    ALERT            : "scFeedbackAlert",
    BACKDROP         : "scFeedbackBackdrop",
    CIRCULAR_PROGRESS: "scFeedbackCircularProgress",
    DIALOG           : "scFeedbackDialog",
    LINEAR_PROGRESS  : "scFeedbackLinearProgress",
    SKELETON         : "scFeedbackSkeleton",
    SNACKBAR         : "scFeedbackSnackbar"
  },
  FORM: {
    FORM_CONTROL_LABEL: "scFormFormControlLabel",
    FORM_GROUP        : "scFormFormGroup"
  },
  INPUTS: {
    AUTO_COMPLETE     : "scInputsAutoComplete",
    BUTTON            : "scInputsButton",
    CHECKBOX          : "scInputsCheckbox",
    CUSTOM            : { RICH_TEXT_EDITOR: "scInputsCustomRichTextEditor" },
    DATE_PICKER       : "scInputsDatePicker",
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
    TEXT_FIELD        : "scInputsTextField",
    TIME_PICKER       : "scInputsTimePicker"
  },
  LAYOUTS: {
    APP_DIV  : "scLayoutsAppDiv",
    BOX      : "scLayoutsBox",
    CONTAINER: "scLayoutsContainer",
    GRID     : "scLayoutsGrid",
    GRID_ITEM: "scLayoutsGridItem",
    LIST     : "scLayoutsList",
    LIST_ITEM: "scLayoutsListItem",
    STACK    : "scLayoutsStack"
  },
  
  /**
	 * @todo Have to remove this. This is here as it is used in menuUtil
	 * when we creae seperae component for menu items this should be replaced
	 */
  MENU: {
    HEADER_BUTTON_ITEM: "headerButtonItem",
    HEADER_ICON_ITEM  : "headerIconItem",
    HEADER_ITEM       : "headerItem",
    HEADER_TEXT_ITEM  : "headerTextItem",
    LIST_ITEM         : "listItem",
    LIST_ITEM_BUTTON  : "listItemButton",

    LIST_ITEM_ICON       : "listItemIcon",
    LIST_ITEM_TEXT       : "listItemText",
    MENU_ITEM            : "menuItem",
    MENU_ITEM_BUTTON_ITEM: "menuItemButtonItem",

    MENU_ITEM_ICON_ITEM         : "menuItemIconItem",
    MENU_ITEM_TEXT_ITEM         : "menuItemTextItem",
    MINI_DRAWER_LIST_ITEM_BUTTON: "miniDrawerListItemButton",
    MINI_DRAWER_LIST_ITEM_ICON  : "miniDrawerListItemIcon",

    PARENT_BUTTON_ITEM: "parentButtonItem",
    PARENT_ICON_ITEM  : "parentIconItem",
    PARENT_ITEM       : "parentItem",
    PARENT_TEXT_ITEM  : "parentTextItem",

    SEPERATOR_BUTTON_ITEM: "seperatorButtonItem",
    SEPERATOR_ICON_ITEM  : "seperatorIconItem",
    SEPERATOR_ITEM       : "seperatorItem",
    SEPERATOR_TEXT_ITEM  : "seperatorTextItem"
  },
  
  MODAL: {
    MODAL_BODY         : "modalBody",
    MODAL_CONTAINER    : "modalContainer",
    MODAL_HEADER       : "modalHeader",
    MODAL_WEB_CONTAINER: "modalWebContainer"
  },

  NAVIGATION: {
    APP_DRAWER_TEXT  : "appDrawerText",
    LINK             : "scNavigationLink",
    MENU_ITEM        : "scNavigationMenuItem",
    MENU_LIST        : "scNavigationMenuList",
    TAB              : "scNavigationTab",
    TABS             : "scNavigationTabs",
    TAB_MOBILE       : "scNavigationTabMobile",
    TAB_MOBILE_ACTIVE: "scNavigationTabActive"
  },
  
  SURFACES: {
    ACCORDION        : "scSurfacesAccordion",
    ACCORDION_DETAILS: "scSurfacesAccordionDetails",
    ACCORDION_SUMMERY: "scSurfacesAccordionSummery",
    APP_BAR          : "scSurfacesAppBar",
    CARD             : "scSurfacesCard",
    CARD_ACTIONS     : "scSurfacesCardActions",
    CARD_ACTION_AREA : "scSurfacesCardActionArea",
    CARD_CONTENT     : "scSurfacesCardContent",
    CARD_HEADER      : "scSurfacesCardHeader",
    CARD_MEDIA       : "scSurfacesCardMedia",
    PAPER            : "scSurfacesPaper",
    TOOLBAR          : "scSurfacesToolbar"
  },

  /**
	 * Moved from core
	 */
  UTILS: { FADE: "", MODAL: "", POPOVER: "" },
  WEB  : { FILE_PICKER: "webFilePicker", TAB_HEAD: "webTabHead" }
};

export default StyledComponentsClasses;
