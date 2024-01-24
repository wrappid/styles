import { BaseStyle } from "../base/BaseStyle";
import { IMPORTANT, PX_TAG } from "../base/contants";
import { DefaultUtilityStyles } from "../utility/DefaultUtilityStyles";

const HEADING_TOP_MARGIN = "56" + PX_TAG;

export class DefaultSCStyles extends BaseStyle {
  constructor() {
    super();

    const defaultUtilityStyles = new DefaultUtilityStyles().style;

    this.style = {
      
      appBarLogo: { height: "30" + PX_TAG + IMPORTANT },

      appDrawerPaperHeight: { height: `calc(100% - ${HEADING_TOP_MARGIN})` + IMPORTANT },
      
      appDrawerText: {
        color       : "rgb(88, 88, 88)" + IMPORTANT,
        overflow    : "hidden" + IMPORTANT,
        textOverflow: "ellipsis" + IMPORTANT,
        whiteSpace  : "nowrap" + IMPORTANT,
      },
      
      /**
       * Moved from core
       */
      /**
       * Core App Bar Styles
       */
      appbarHeight: { top: HEADING_TOP_MARGIN + IMPORTANT },
      
      headerButtonItem: {},
      
      headerIconItem: {},
      
      headerItem: {
        padding: 0 + IMPORTANT,
        // eslint-disable-next-line etc/no-commented-out-code
        // backgroundColor: this.theme.palette.secondary.light,
      },
      
      headerTextItem: {},
      
      listItem: {},
      
      // eslint-disable-next-line object-curly-newline
      listItemButton: {},
      
      listItemIcon: {},
      
      listItemText: {},
      
      menuItem: {
        padding: 0 + IMPORTANT,
        // eslint-disable-next-line etc/no-commented-out-code
        // backgroundColor: this.theme.palette.secondary.light,
      },
      
      menuItemButtonItem: {},
      
      menuItemIconItem: {},
      
      menuItemTextItem: {},
      
      /**
       * @todo Have to remove this. This is here as it is used in menuUtil
       * when we creae seperae component for menu items this should be replaced
       */
      miniDrawerListItemButton: {},
      
      miniDrawerListItemIcon: { minWidth: 0 + IMPORTANT },
      
      parentButtonItem: {},
      
      parentIconItem: {},
      
      parentItem: {
        padding: 0 + IMPORTANT,
        // eslint-disable-next-line etc/no-commented-out-code
        // backgroundColor: this.theme.palette.secondary.light,
      },
      
      parentTextItem: {},
      
      /**************************************************
       * DATA DISPLAY
       *************************************************/
      scDataDisplayAvatar: {
        backgroundColor: this.theme?.palette?.secondary?.light,
        borderColor    : this.theme?.palette?.secondary?.main,
        borderStyle    : "solid" + IMPORTANT,
        borderWidth    : "1" + PX_TAG + IMPORTANT,
      },
      
      scDataDisplayBadge: {},
      
      scDataDisplayChip: {},
      
      scDataDisplayDivider: { ...defaultUtilityStyles.my1 },
      
      scDataDisplayIcon: {},
      
      scDataDisplayImage: {},
      
      scDataDisplayListItemAvatar: {},
      
      scDataDisplayListItemIcon: {},
      
      scDataDisplayListItemSubheader: {},
      
      scDataDisplayListItemText: {},
      
      scDataDisplayMobileTableRow: { padding: 0 },
      
      scDataDisplayMobileToolbar: {
        borderBottomColor: defaultUtilityStyles?.borderPrimary?.borderColor,
        borderBottomWidth: 1,
        marginTop        : "-" + defaultUtilityStyles?.m1?.margin,
      },
      
      scDataDisplayTable: {},
      
      scDataDisplayTableBody: {},
      
      scDataDisplayTableCell: {},
      
      scDataDisplayTableContainer: {},
      
      scDataDisplayTableFooter: {},
      
      scDataDisplayTableHead: {},
      
      scDataDisplayTablePagination: {},
      
      scDataDisplayTableRow: {},
      
      scDataDisplayTableSortLabel: {},
      
      scDataDisplayTooltip: {},
      
      scDataDisplayTypography: {},
      
      /**************************************************
       * FEEDBACK
       *************************************************/
      scFeedbackAlert: {},
      
      scFeedbackBackdrop: {
        backgroundColor:
          this.theme?.palette?.secondary?.transparentDark + IMPORTANT,
        zIndex: 1202 + IMPORTANT,
      },
      
      scFeedbackCircularProgress: {},

      scFeedbackDialog: { minWidth: "60%" + IMPORTANT },

      scFeedbackLinearProgress: {},

      scFeedbackSkeleton: {},

      scFeedbackSnackbar: {},
      
      /**************************************************
       * UTILS
       *************************************************/
      /**************************************************
       * FORM
       *************************************************/
      scFormFormControlLabel: {},
      
      scFormFormGroup: {},
      
      scInputAutoComplete: {},
      
      scInputCheckbox: {},
      
      scInputDateTimePicker: {},
      
      scInputFab: {},
      
      scInputFormControl: {},
      
      scInputFormControlLabel: {},
      
      scInputFormHelperText: {},
      
      scInputIconButton: {},
      
      /**************************************************
       * INPUTS
       *************************************************/
      scInputsButton: { ...defaultUtilityStyles?.ml1 },
      
      scInputsDatePicker: {},
      
      scInputsFormHelperText: { paddingLeft: 0 + IMPORTANT },
      
      scInputsInputAdornment: {},
      
      scInputsInputLabel: {},
      
      scInputsItemButton: {
        marginBottom: 16 + IMPORTANT,
        width       : "100%" + IMPORTANT,
      },
      
      scInputsMenuItem: {},
      
      scInputsSwitch: {},
      
      scInputsTextField: {},
      
      scInputsTimePicker: {},
      
      /**************************************************
       * LAYOUTS
       *************************************************/
      scLayoutsAppDiv: {},
      
      scLayoutsBox: {},
      
      scLayoutsContainer: {},
      
      scLayoutsGrid: {},
      
      scLayoutsList: {},
      
      scLayoutsListItem: {},
      
      scLayoutsStack: {},
      
      scNavigationLink: {
        color     : this.theme?.palette?.primary?.main + IMPORTANT,
        fontSize  : "0.812rem" + IMPORTANT,
        fontWeight: 500 + IMPORTANT,
      },
      
      scNavigationMenuItem: {},
      
      scNavigationMenuList: {},
      
      /**************************************************
       * NAVIGATION
       *************************************************/
      scNavigationTab: {},
      
      scNavigationTabActive: {
        alignItems       : "center",
        justifyContent   : "center",
        minHeight        : 48,
        minWidth         : 100,
        paddingBottom    : 12,
        paddingLeft      : 16,
        paddingRight     : 16,
        paddingTop       : 12,
        textAlign        : "center",
        ...defaultUtilityStyles?.textPrimary,
        borderBottomColor: defaultUtilityStyles?.borderPrimary?.borderColor,
        borderBottomWidth: 2,
      },
      
      scNavigationTabMobile: {
        alignItems    : "center",
        justifyContent: "center",
        minHeight     : 48,
        minWidth      : 100,
        paddingBottom : 12,
        paddingLeft   : 16,
        paddingRight  : 16,
        paddingTop    : 12,
        textAlign     : "center",
      },
      
      scNavigationTabs: {},
      
      /**************************************************
       * SURFACES
       *************************************************/
      scSurfacesAccordion: {},
      
      scSurfacesAccordionDetails: {},
      
      scSurfacesAccordionSummery: {},
      
      scSurfacesAppBar: {
        ...defaultUtilityStyles.bgPrimary,
        ...defaultUtilityStyles.shadowNone,
      },
      
      scSurfacesCard: {},
      
      scSurfacesCardActionArea: {},
      
      scSurfacesCardActions: {},
      
      scSurfacesCardContent: {},

      scSurfacesCardHeader: {},
      scSurfacesCardMedia : {},
      scSurfacesPaper     : {},
      scSurfacesToolbar   : {},

      scinputsSelect     : {},
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
