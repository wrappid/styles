/* eslint-disable sort-keys-fix/sort-keys-fix */
import { BaseStyle } from "../base/BaseStyle";
import { IMPORTANT, PX_TAG } from "../base/contants";
import { DefaultUtilityStyles } from "../utility/DefaultUtilityStyles";

const HEADING_TOP_MARGIN = "56" + PX_TAG;

export class DefaultSCStyles extends BaseStyle {
  constructor() {
    super();

    const defaultUtilityStyles = new DefaultUtilityStyles().style;

    this.style = {
      
      /**************************************************
       * DATA DISPLAY
       *************************************************/
      scDataDisplayAvatar: {
        backgroundColor: this.theme?.palette?.secondary?.light,
        borderStyle    : "solid" + IMPORTANT,
        borderWidth    : "1" + PX_TAG + IMPORTANT,
        borderColor    : this.theme?.palette?.secondary?.main,
      },
      
      scInputAutoComplete: {},
      
      scInputCheckbox: {},
      
      scDataDisplayBadge: {},
      
      scInputDateTimePicker: {},
      
      scDataDisplayChip: {},
      
      scInputFab: {},
      
      scInputFormControl: {},

      scDataDisplayDivider: { ...defaultUtilityStyles.my1 },
      
      scInputFormControlLabel: {},
      
      scDataDisplayIcon: {},
      
      scInputFormHelperText: {},
      
      scDataDisplayImage: {},
      
      scInputIconButton: {},
      
      scDataDisplayListItemAvatar: {},
      
      scDataDisplayListItemIcon: {},
      
      /**************************************************
       * INPUTS
       *************************************************/
      scInputsButton: { ...defaultUtilityStyles?.ml1 },
      
      scDataDisplayListItemSubheader: {},
      
      scInputsDatePicker: {},
      
      scDataDisplayListItemText  : {},
      scInputsTextField          : {},
      scDataDisplayMobileTableRow: { padding: 0 },
      scInputsFormHelperText     : { paddingLeft: 0 + IMPORTANT },
      scDataDisplayMobileToolbar : {
        borderBottomColor: defaultUtilityStyles?.borderPrimary?.borderColor,
        borderBottomWidth: 1,
        marginTop        : "-" + defaultUtilityStyles?.m1?.margin,
      },
      scInputsInputAdornment: {},
      scDataDisplayTable    : {},
      scInputsInputLabel    : {},
      scDataDisplayTableBody: {},
      scInputsItemButton    : {
        marginBottom: 16 + IMPORTANT,
        width       : "100%" + IMPORTANT,
      },
      scDataDisplayTableCell      : {},
      scInputsMenuItem            : {},
      scDataDisplayTableContainer : {},
      scInputsSwitch              : {},
      scDataDisplayTableFooter    : {},
      scinputsSelect              : {},
      scDataDisplayTableHead      : {},
      scDataDisplayTablePagination: {},
      scInputsTimePicker          : {},
      scDataDisplayTableRow       : {},
      scDataDisplayTableSortLabel : {},
      scDataDisplayTooltip        : {},
      scDataDisplayTypography     : {},
      /**************************************************
       * FEEDBACK
       *************************************************/
      scFeedbackAlert             : {},
      scFeedbackBackdrop          : {
        backgroundColor:
          this.theme?.palette?.secondary?.transparentDark + IMPORTANT,
        zIndex: 1202 + IMPORTANT,
      },
      scFeedbackCircularProgress: {},
      scFeedbackDialog          : { minWidth: "60%" + IMPORTANT },
      scFeedbackLinearProgress  : {},
      scFeedbackSkeleton        : {},
      scFeedbackSnackbar        : {},
      
      scNavigationLink: {
        color     : this.theme?.palette?.primary?.main + IMPORTANT,
        fontSize  : "0.812rem" + IMPORTANT,
        fontWeight: 500 + IMPORTANT,
      },
      
      scNavigationMenuItem: {},
      
      /**************************************************
       * LAYOUTS
       *************************************************/
      scLayoutsAppDiv: {},
      
      /**************************************************
       * NAVIGATION
       *************************************************/
      scNavigationTab: {},
      
      scLayoutsBox: {},
      
      scNavigationTabActive: {
        alignItems       : "center",
        justifyContent   : "center",
        minHeight        : 48,
        minWidth         : 100,
        paddingLeft      : 16,
        paddingRight     : 16,
        paddingBottom    : 12,
        textAlign        : "center",
        paddingTop       : 12,
        ...defaultUtilityStyles?.textPrimary,
        borderBottomColor: defaultUtilityStyles?.borderPrimary?.borderColor,
        borderBottomWidth: 2,
      },
      
      scLayoutsContainer: {},
      
      /**************************************************
       * SURFACES
       *************************************************/
      scSurfacesAccordion: {},
      
      scLayoutsGrid: {},
      
      scSurfacesAccordionDetails: {},
      
      /**************************************************
       * UTILS
       *************************************************/
      /**************************************************
       * FORM
       *************************************************/
      scFormFormControlLabel: {},

      scSurfacesAccordionSummery: {},

      scSurfacesAppBar: {
        ...defaultUtilityStyles.bgPrimary,
        ...defaultUtilityStyles.shadowNone,
      },

      /**
       * Moved from core
       */
      /**
       * Core App Bar Styles
       */
      appbarHeight: { top: HEADING_TOP_MARGIN + IMPORTANT },

      scSurfacesCard: {},

      scSurfacesCardActionArea: {},

      appBarLogo: { height: "30" + PX_TAG + IMPORTANT },

      scSurfacesCardActions: {},
      
      appDrawerPaperHeight: { height: `calc(100% - ${HEADING_TOP_MARGIN})` + IMPORTANT },

      scSurfacesCardContent: {},

      listItem: {},
      
      listItemButton: {},
      
      scSurfacesCardHeader: {},
      
      headerItem: { padding: 0 + IMPORTANT },

      scSurfacesCardMedia: {},

      headerButtonItem: {},
      
      scSurfacesPaper: {},

      headerIconItem: {},
      
      headerTextItem   : {},
      scSurfacesToolbar: {},
      listItemIcon     : {},

      listItemText: {},
      
      scNavigationTabMobile: {
        minHeight     : 48,
        alignItems    : "center",
        minWidth      : 100,
        justifyContent: "center",
        paddingLeft   : 16,
        textAlign     : "center",
        paddingRight  : 16,
        paddingBottom : 12,
        paddingTop    : 12,
      },
      
      menuItem: { padding: 0 + IMPORTANT },
      
      menuItemButtonItem: {},
      
      scNavigationTabs: {},
      
      menuItemIconItem: {},
      
      scNavigationMenuList: {},
      
      appDrawerText: {
        color       : "rgb(88, 88, 88)" + IMPORTANT,
        overflow    : "hidden" + IMPORTANT,
        textOverflow: "ellipsis" + IMPORTANT,
        whiteSpace  : "nowrap" + IMPORTANT,
      },
      
      scLayoutsList: {},
      
      menuItemTextItem: {},
      
      /**
       * @todo Have to remove this. This is here as it is used in menuUtil
       * when we creae seperae component for menu items this should be replaced
       */
      miniDrawerListItemButton: {},
      
      scLayoutsListItem: {},
      
      scLayoutsStack: {},
      
      miniDrawerListItemIcon: { minWidth: 0 + IMPORTANT },

      parentButtonItem: {},
      scFormFormGroup : {},
      parentIconItem  : {},
      parentItem      : { padding: 0 + IMPORTANT },

      parentTextItem     : {},
      seperatorButtonItem: {
        height   : 0 + IMPORTANT,
        minHeight: 0 + IMPORTANT,
        // backgroundColor: "gray"
      },
      seperatorIconItem: {
        display  : "none" + IMPORTANT,
        height   : 0 + IMPORTANT,
        minHeight: 0 + IMPORTANT,
      },
      seperatorItem    : { padding: 0 + IMPORTANT },
      seperatorTextItem: { height: 0 + IMPORTANT, minHeight: 0 + IMPORTANT },
      webFilePicker    : {
        borderBottom  : "1" + PX_TAG + "solid rgba(0, 0, 0, 0.42)" + IMPORTANT,
        color         : "rgb(0,0,0,0.54)" + IMPORTANT,
        display       : "flex" + IMPORTANT,
        justifyContent: "flex-end" + IMPORTANT,
      },
      webTabHead: {
        ...defaultUtilityStyles.mb1,
        ...defaultUtilityStyles.stickyTop,
        ...defaultUtilityStyles.bgWhite,
        ...defaultUtilityStyles.overflowXScroll,
        ...defaultUtilityStyles.w100,
        marginLeft: "-8" + PX_TAG + IMPORTANT,
        marginTop : "-8" + PX_TAG + IMPORTANT,
      },
    };
  }
}