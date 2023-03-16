// import AppClasses from "../../styles/AppClasses";
import StyledComponentsClasses from "./StyledComponentsClasses";
import UtilityClasses from "./UtilityClasses";

const CoreClasses = {
  DEV_BORDER: "devBorder",
  SC_APP_DIV: "scAppDiv",
  /**************************************************
   * App Level Styles
   *************************************************/
  APP: {
    // ...AppClasses,
  },
  /**************************************************
   * Styled Components Level Styles
   *************************************************/
  SC: {
    ...StyledComponentsClasses,
  },
  /**************************************************
   * Utility Styles
   *************************************************/
  ...UtilityClasses,
  /**************************************************
   * Layout
   **************************************************/
  LAYOUT: {
    /*
     * Container related classes
     */
    FULL_WIDTH: "fullWidth",
    FULL_HEIGHT: "fullHeight",
    FULL_WIDTH_HEIGHT: "fullWidthHeight",
    PAGE_CONTAINER: "pageContainer",
    CONTENT_CONTAINER: "contentContainer",
    LOGGED_OUT_CONTENT_CONTAINER: "loggedOutContentContainer",
    /* Prescription */
    CORE_TEXT: "coreText",
    AUTH_FORM_CONTAINER: "authFormContainer",
    HORIZONTAL_CENTER: "horizontalCenter",
    HORIZONTAL_RIGHT: "horizontalRight",
    VERTICAL_CENTER: "verticalCenter",
    VERTICAL_HORIZONTAL_CENTER: "verticalHorizontalCenter",
    AUTH_CONTAINER: "authContainer",
    AUTH_BANNER: "authBanner",
    SPACED_ROW_ELEMENTS: "spacedRowElements",
    GRID_PADDING: "gridPadding",
    NO_MARGIN_P: "noMarginP",
    FLEXBOX: "flexBox",
    AUTH_FORM: "authForm",
    RIGHT_ALIGN: "alignRight",
    LEFT_ALIGN: "alignLeft",
    PROFILE_BAR_WIDTH: "profileBarWidth",
    BORDER_BOTTOM_WIDTH: "borderBottomWidth",
    BUTTON_MARGIN: "buttonMargin",
    TABLE_ROW_ACTION_POPOVER: "tableRowActionPopover",
  },
  DATA_DISPLAY: {
    AVATAR: "avatar",
    AVATAR_SMALL: "avatarSmall",
    AVATAR_MEDIUM: "avatarMedium",
    AVATAR_LARGE: "avatarLarge",
    AVATAR_XLARGE: "avatarXLarge",
    AVATAR_XXLARGE: "avatarXXLarge",
    TEXT_CENTER: "textAlignCenter",
    TEXT_RIGHT: "textAlignRight",
    CORE_TEXT: "coreText",
    CORE_INPUT: "coreInput",
    CORE_FORM_LABEL: "coreFormLabel",
    BOLD_TEXT: "boldText",
    HIDDEN_BODY_TEXT: "hiddenBodyText",
    HELPER_OUTSIDE_FORM: "helperOutsideForm",
    MEDICINE_TEXT: "medicineText",
  },
  NAVIGATION: {
    APP_BAR_LOGGIN_IN: "appBarLoggedIn",
    APP_BAR_LOGGED_OUT: "appBarLoggedOut",
    LINK_STYLE: "linkStyle",
    APP_BAR_ICONS_CONTAINER: "appBarIconsContainer",
    APP_DRAWER_TEXT: "appDrawerText",
    PROFILE_DETAIL: "profileDetail",
    PROFILE_BAR_SECTION: "profilebarSection",
    PROFILE_CARD_NAME: "profileCardName",
    PROFILE_CARD_CONTACT: "profileCardContact",
    PROFILE_CARD_LINK: "profileCardLink",
    PROFILE_CARD_TOKEN_DETAIL: "profileCardTokenDetail",
    PROFILE_CARD_TOKEN_AMOUNT: "profileCardTokenAmount",
    PROFILE_CARD_TOKEN_TEXT: "profileCardTokenText",
  },
  UTILS: {
    HEADING_TOP_MARGIN: "headingTopMargin",
    PROFILE_BAR: "profileBar",
  },
  CORE_APP_BAR: {
    APP_BAR_LOGO: "appBarLogo",
  },
  MENU: {
    MINI_DRAWER_LIST_ITEM_BUTTON: "miniDrawerListItemButton",
    MINI_DRAWER_LIST_ITEM_ICON: "miniDrawerListItemIcon",
    LIST_ITEM: "listItem",
    LIST_ITEM_BUTTON: "listItemButton",
    LIST_ITEM_ICON: "listItemIcon",
    LIST_ITEM_TEXT: "listItemText",

    HEADER_BUTTON_ITEM: "headerButtonItem",
    HEADER_ICON_ITEM: "headerIconItem",
    HEADER_TEXT_ITEM: "headerTextItem",
    HEADER_ITEM: "headerItem",

    PARENT_BUTTON_ITEM: "parentButtonItem",
    PARENT_ICON_ITEM: "parentIconItem",
    PARENT_TEXT_ITEM: "parentTextItem",
    PARENT_ITEM: "parentItem",

    SEPERATOR_BUTTON_ITEM: "seperatorButtonItem",
    SEPERATOR_ICON_ITEM: "seperatorIconItem",
    SEPERATOR_TEXT_ITEM: "seperatorTextItem",
    SEPERATOR_ITEM: "seperatorItem",

    MENU_ITEM_BUTTON_ITEM: "menuItemButtonItem",
    MENU_ITEM_ICON_ITEM: "menuItemIconItem",
    MENU_ITEM_TEXT_ITEM: "menuItemTextItem",
    MENU_ITEM: "menuItem",
  },
  MODAL: {
    MODAL_CONTAINER: "modalContainer",
    MODAL_HEADER: "modalHeader",
    MODAL_BODY: "modalBody",
  },
  /**
   *
   */
  TABLE: {
    TH: "tableHeadCell",
    TD: "tableCell",
    TABLE_TOOLBAR_POPOVER_SCROLLABLE_CONTAINER:
      "tableToolbarPopoverScrollableContainer",
  },

  /**************************************************
   * Popover Content Styles
   *************************************************/
  POPOVER: {
    HEADER: "popoverHeader",
    CONTENT: "popoverContent",
    FOOTER: "popoverFooter",
  },

  // ----------Data Table Styles Starts----------
  DATA_TABLE: {
    DATA_TABLE_CONTAINER: "dataTableContainer",
    DATA_TABLE_MINI_WIDTH_PANE: "dataTableMiniWidthPane",
    DATA_TABLE_FULL_WIDTH_PANE: "dataTableFullWidthPane",
    DATA_TABLE: "dataTable",
    DATA_TABLE_TOOLBAR_CONTAINER: "dataTableToolbarContainer",
    DATA_TABLE_TOOLBAR: "dataTableToolbar",
    DATA_TABLE_HEAD: "dataTableHead",
    DATA_TABLE_HEAD_TOP: "dataTableHeadTop",
    DATA_TABLE_BODY: "dataTableBody",
    DATA_TABLE_FOOT: "dataTableFoot",
  },
  // ----------Data Table Styles Ends------------

  // ----------Widget Style Constants Starts-----
  /**
   * Widget related Style Constants
   */
  WIDGET: {
    COUNTER_WIDGET_CARD: "counterWidgetCard",
    COUNTER_WIDGET_CARD_HEADER: "counterWidgetCardHeader",
    COUNTER_WIDGET_CARD_CONTENT: "counterWidgetCardContent",
    COUNTER_WIDGET_CARD_ACTIONS: "counterWidgetCardActions",
    COUNTER_WIDGET_CARD_ICON: "counterWidgetCardIcon",
    COUNTER_WIDGET_COUNTER_STACK: "counterWidgetCounterStack",
    COUNTER_WIDGET_COUNTER: "counterWidgetCounter",
    COUNTER_WIDGET_COUNTER_PRIMARY: "counterWidgetCounterPrimary",
  },
  // ----------Widget Style Constants Ends-------

  /**
   * Business Entity Component
   */
  BUSINESS_ENTITY: {
    INCLUDED_MODEL_CARD: "includedModelCard",
  },
  RX: {
    RX_CASH_CARD: "rxCashCard",
    RX_CASH_CARD_CASH: "rxCashCardCash",
    RX_RECHARGE_DISCLAIMER: "rxRechargeDisclaimer",
    RX_RECHARGE_DISCLAIMER_TERMS_AND_CONDITIONS:
      "rxRechargeDisclaimerTermsAndConditions",
    RX_ALERT_WALLET_ICON: "rxAlertWalletIcon",
    RX_SUCCESS_AMOUNT_CARD: "rxSuccessAmountCard",
    RX_SUCCESS_AMOUNT: "rxSuccessAmount",
  },
};

export default CoreClasses;
