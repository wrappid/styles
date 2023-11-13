/* eslint-disable */
import { getConfigurationObject } from "../helper/helper";
import { theme } from "../theme/theme";

const DEFAULT_BORDER_WIDTH = 1;
const DEFAULT_BORDER_RADIUS = 4;
const DEFAULT_BORDER_STYLE = "solid";
const DEFAULT_BORDER_COLOR = "black";
const DEFAULT_BORDER =
  DEFAULT_BORDER_WIDTH + "px " + DEFAULT_BORDER_STYLE + " " + DEFAULT_BORDER_COLOR;

// -- const DEFAULT_SHADOW_COLOR = "black";
const DEFAULT_SHADOW_COLOR_RGB = "0,0,0";

const configuration = getConfigurationObject();

export const IMPORTANT = configuration?.wrappid?.platform === "web" ? " !important" : "";
export const PX_TAG = configuration?.wrappid?.platform === "web" ? "px" : "";
export const DEFAULT_MARGIN = 8;
export const DEFAULT_PADDING = 8;
export const DEFAULT_SPACING = 8;

export const defaultUtilityStyles = {
  alignContentAround: {
    alignContent: "space-around",
    display: "flex",
  },

  alignContentBetween: {
    alignContent: "space-between",
    display: "flex",
  },

  alignContentCenter: {
    alignContent: "center",
    display: "flex",
  },

  alignContentEnd: {
    alignContent: "flex-end",
    display: "flex",
  },

  alignContentStart: {
    alignContent: "flex-start",
    display: "flex",
  },

  alignContentStretch: {
    alignContent: "stretch",
    display: "flex",
  },

  alignItemsBaseline: {
    alignItems: "baseline",
    display: "flex",
  },

  alignItemsCenter: {
    alignItems: "center",
    display: "flex",
  },

  alignItemsEnd: {
    alignItems: "flex-end",
    display: "flex",
  },
  /**************************************************
   * Alignment
   *************************************************/
  alignItemsStart: {
    alignItems: "flex-start",
    display: "flex",
  },
  alignItemsStretch: {
    alignItems: "stretch",
    display: "flex",
  },

  alignSelfAuto: { alignSelf: "auto", display: "flex" },
  alignSelfBaseline: {
    alignSelf: "baseline",
    display: "flex",
  },
  alignSelfCenter: {
    alignSelf: "center",
    display: "flex",
  },
  alignSelfEnd: {
    alignSelf: "flex-end",
    display: "flex",
  },
  alignSelfStart: {
    alignSelf: "flex-start",
    display: "flex",
  },
  alignSelfStretch: {
    alignSelf: "stretch",
    display: "flex",
  },

  bgBlack: { backgroundColor: "black" },
  bgDefault: { backgroundColor: theme.palette.background.default },

  bgError: { backgroundColor: theme.palette.error.main },

  bgErrorDark: { backgroundColor: theme.palette.error.dark },

  bgErrorLight: { backgroundColor: theme.palette.error.light },

  bgInfo: { backgroundColor: theme.palette.info.main },

  bgInfoDark: { backgroundColor: theme.palette.info.dark },

  bgInfoLight: { backgroundColor: theme.palette.info.light },
  /**************************************************
   * Background
   *************************************************/
  bgPrimary: { backgroundColor: theme.palette.primary.main },
  bgPrimaryDark: { backgroundColor: theme.palette.primary.dark },

  bgPrimaryLight: { backgroundColor: theme.palette.primary.light },
  bgSecondary: { backgroundColor: theme.palette.secondary.main },
  bgSecondaryDark: { backgroundColor: theme.palette.secondary.dark },

  bgSecondaryLight: { backgroundColor: theme.palette.secondary.light },
  bgSuccess: { backgroundColor: theme.palette.success.main },
  bgSuccessDark: { backgroundColor: theme.palette.success.dark },

  bgSuccessLight: { backgroundColor: theme.palette.success.light },
  bgTransparent: { backgroundColor: "transparent" },
  bgWarning: { backgroundColor: theme.palette.warning.main },

  bgWarningDark: { backgroundColor: theme.palette.warning.dark },
  bgWarningLight: { backgroundColor: theme.palette.warning.light },
  bgWhite: { backgroundColor: "white" },

  /**************************************************
   * Border
   *************************************************/
  border: { border: DEFAULT_BORDER },
  border0: { border: "none" },

  borderTop: { border: "unset", borderTop: DEFAULT_BORDER },
  borderTop0: { borderTop: "none" },

  borderEnd: { border: "unset", borderRight: DEFAULT_BORDER },
  borderEnd0: { borderRight: "none" },
  borderRight: { border: "unset", borderRight: DEFAULT_BORDER },
  borderRight0: { borderRight: "none" },

  borderBottom: { border: "unset", borderBottom: DEFAULT_BORDER },
  borderBottom0: { borderBottom: "none" },

  borderStart: { border: "unset", borderLeft: DEFAULT_BORDER },
  borderStart0: { borderLeft: "none" },
  borderLeft: { border: "unset", borderLeft: DEFAULT_BORDER },
  borderLeft0: { borderLeft: "none" },

  borderPrimary: { borderColor: theme.palette.primary.main },
  borderPrimaryLight: { borderColor: theme.palette.primary.light },
  borderPrimaryDark: { borderColor: theme.palette.primary.dark },

  borderSecondary: { borderColor: theme.palette.secondary.main },
  borderSecondaryLight: { borderColor: theme.palette.secondary.light },
  borderSecondaryDark: { borderColor: theme.palette.secondary.dark },

  borderSuccess: { borderColor: theme.palette.success.main },
  borderSuccessLight: { borderColor: theme.palette.success.light },
  borderSuccessDark: { borderColor: theme.palette.success.dark },

  borderError: { borderColor: theme.palette.error.main },
  borderErrorLight: { borderColor: theme.palette.error.light },
  borderErrorDark: { borderColor: theme.palette.error.dark },

  borderWarning: { borderColor: theme.palette.warning.main },
  borderWarningLight: { borderColor: theme.palette.warning.light },
  borderWarningDark: { borderColor: theme.palette.warning.dark },

  borderInfo: { borderColor: theme.palette.info.main },
  borderInfoDark: { borderColor: theme.palette.info.dark },
  borderInfoLight: { borderColor: theme.palette.info.light },

  borderBlack: { borderColor: "black" },
  borderWhite: { borderColor: "white" },

  border1: { borderWidth: DEFAULT_BORDER_WIDTH + PX_TAG },
  border2: { borderWidth: DEFAULT_BORDER_WIDTH * 2 + PX_TAG },
  border3: { borderWidth: DEFAULT_BORDER_WIDTH * 3 + PX_TAG },
  border4: { borderWidth: DEFAULT_BORDER_WIDTH * 4 + PX_TAG },
  border5: { borderWidth: DEFAULT_BORDER_WIDTH * 5 + PX_TAG },

  borderNone: { borderStyle: "none" },
  borderDashed: { borderStyle: "dashed" },
  borderDotted: { borderStyle: "dotted" },
  borderDouble: { borderStyle: "double" },
  borderGroove: { borderStyle: "groove" },
  borderHidden: { borderStyle: "hidden" },
  borderInset: { borderStyle: "inset" },
  borderOutset: { borderStyle: "outset" },
  borderRidge: { borderStyle: "ridge" },
  borderSolid: { borderStyle: "solid" },

  bottom0: { bottom: "0" },
  bottom100: { bottom: "100%" },
  bottom50: { bottom: "50%" },

  borderRounded: { borderRadius: DEFAULT_BORDER_RADIUS * 2 + PX_TAG + IMPORTANT },
  borderRounded0: { borderRadius: 0 + IMPORTANT },
  borderRounded1: { borderRadius: DEFAULT_BORDER_RADIUS + PX_TAG + IMPORTANT },
  borderRounded2: { borderRadius: DEFAULT_BORDER_RADIUS * 2 + PX_TAG + IMPORTANT },
  borderRounded3: { borderRadius: DEFAULT_BORDER_RADIUS * 3 + PX_TAG + IMPORTANT },
  borderRounded4: { borderRadius: DEFAULT_BORDER_RADIUS * 4 + PX_TAG + IMPORTANT },
  borderRounded5: { borderRadius: DEFAULT_BORDER_RADIUS * 5 + PX_TAG + IMPORTANT },
  borderRoundedCircle: { borderRadius: "50%" + IMPORTANT },
  borderRoundedPill: { borderRadius: "50rem" + IMPORTANT },

  borderRoundedTop: {
    borderTopLeftRadius: DEFAULT_BORDER_RADIUS + PX_TAG + IMPORTANT,
    borderTopRightRadius: DEFAULT_BORDER_RADIUS + PX_TAG + IMPORTANT,
  },
  borderRoundedTop0: { borderTopLeftRadius: 0 + IMPORTANT, borderTopRightRadius: 0 + IMPORTANT },
  borderRoundedTop1: {
    borderTopLeftRadius: DEFAULT_BORDER_RADIUS + PX_TAG + IMPORTANT,
    borderTopRightRadius: DEFAULT_BORDER_RADIUS + PX_TAG + IMPORTANT,
  },
  borderRoundedTop2: {
    borderTopLeftRadius: DEFAULT_BORDER_RADIUS * 2 + PX_TAG + IMPORTANT,
    borderTopRightRadius: DEFAULT_BORDER_RADIUS * 2 + PX_TAG + IMPORTANT,
  },
  borderRoundedTop3: {
    borderTopLeftRadius: DEFAULT_BORDER_RADIUS * 3 + PX_TAG + IMPORTANT,
    borderTopRightRadius: DEFAULT_BORDER_RADIUS * 3 + PX_TAG + IMPORTANT,
  },
  borderRoundedTop4: {
    borderTopLeftRadius: DEFAULT_BORDER_RADIUS * 4 + PX_TAG + IMPORTANT,
    borderTopRightRadius: DEFAULT_BORDER_RADIUS * 4 + PX_TAG + IMPORTANT,
  },
  borderRoundedTop5: {
    borderTopLeftRadius: DEFAULT_BORDER_RADIUS * 5 + PX_TAG + IMPORTANT,
    borderTopRightRadius: DEFAULT_BORDER_RADIUS * 5 + PX_TAG + IMPORTANT,
  },
  borderRoundedTopCircle: {
    borderTopLeftRadius: "50%" + IMPORTANT,
    borderTopRightRadius: "50%" + IMPORTANT,
  },
  borderRoundedTopPill: {
    borderTopLeftRadius: "50rem" + IMPORTANT,
    borderTopRightRadius: "50rem" + IMPORTANT,
  },

  borderRoundedEnd: {
    borderTopRightRadius: DEFAULT_BORDER_RADIUS + IMPORTANT,
    borderBottomRightRadius: DEFAULT_BORDER_RADIUS + IMPORTANT,
  },
  borderRoundedEnd0: {
    borderTopRightRadius: 0 + IMPORTANT,
    borderBottomRightRadius: 0 + IMPORTANT,
  },
  borderRoundedEnd1: {
    borderTopRightRadius: DEFAULT_BORDER_RADIUS + PX_TAG + IMPORTANT,
    borderBottomRightRadius: DEFAULT_BORDER_RADIUS + PX_TAG + IMPORTANT,
  },
  borderRoundedEnd2: {
    borderTopRightRadius: DEFAULT_BORDER_RADIUS * 2 + PX_TAG + IMPORTANT,
    borderBottomRightRadius: DEFAULT_BORDER_RADIUS * 2 + PX_TAG + IMPORTANT,
  },
  borderRoundedEnd3: {
    borderTopRightRadius: DEFAULT_BORDER_RADIUS * 3 + PX_TAG + IMPORTANT,
    borderBottomRightRadius: DEFAULT_BORDER_RADIUS * 3 + PX_TAG + IMPORTANT,
  },
  borderRoundedEnd4: {
    borderTopRightRadius: DEFAULT_BORDER_RADIUS * 4 + PX_TAG + IMPORTANT,
    borderBottomRightRadius: DEFAULT_BORDER_RADIUS * 4 + PX_TAG + IMPORTANT,
  },
  borderRoundedEnd5: {
    borderTopRightRadius: DEFAULT_BORDER_RADIUS * 5 + PX_TAG + IMPORTANT,
    borderBottomRightRadius: DEFAULT_BORDER_RADIUS * 5 + PX_TAG + IMPORTANT,
  },
  borderRoundedEndCircle: {
    borderTopRightRadius: "50%" + IMPORTANT,
    borderBottomRightRadius: "50%" + IMPORTANT,
  },
  borderRoundedEndPill: {
    borderTopRightRadius: "50rem" + IMPORTANT,
    borderBottomRightRadius: "50rem" + IMPORTANT,
  },

  borderRoundedBottom: {
    borderBottomRightRadius: DEFAULT_BORDER_RADIUS + IMPORTANT,
    borderBottomLeftRadius: DEFAULT_BORDER_RADIUS + IMPORTANT,
  },
  borderRoundedBottom0: {
    borderBottomRightRadius: 0 + IMPORTANT,
    borderBottomLeftRadius: 0 + IMPORTANT,
  },
  borderRoundedBottom1: {
    borderBottomRightRadius: DEFAULT_BORDER_RADIUS + PX_TAG + IMPORTANT,
    borderBottomLeftRadius: DEFAULT_BORDER_RADIUS + PX_TAG + IMPORTANT,
  },
  borderRoundedBottom2: {
    borderBottomRightRadius: DEFAULT_BORDER_RADIUS * 2 + PX_TAG + IMPORTANT,
    borderBottomLeftRadius: DEFAULT_BORDER_RADIUS * 2 + PX_TAG + IMPORTANT,
  },
  borderRoundedBottom3: {
    borderBottomRightRadius: DEFAULT_BORDER_RADIUS * 3 + PX_TAG + IMPORTANT,
    borderBottomLeftRadius: DEFAULT_BORDER_RADIUS * 3 + PX_TAG + IMPORTANT,
  },
  borderRoundedBottom4: {
    borderBottomRightRadius: DEFAULT_BORDER_RADIUS * 4 + PX_TAG + IMPORTANT,
    borderBottomLeftRadius: DEFAULT_BORDER_RADIUS * 4 + PX_TAG + IMPORTANT,
  },
  borderRoundedBottom5: {
    borderBottomRightRadius: DEFAULT_BORDER_RADIUS * 5 + PX_TAG + IMPORTANT,
    borderBottomLeftRadius: DEFAULT_BORDER_RADIUS * 5 + PX_TAG + IMPORTANT,
  },
  borderRoundedBottomCircle: {
    borderBottomRightRadius: "50%" + IMPORTANT,
    borderBottomLeftRadius: "50%" + IMPORTANT,
  },
  borderRoundedBottomPill: {
    borderBottomRightRadius: "50rem" + IMPORTANT,
    borderBottomLeftRadius: "50rem" + IMPORTANT,
  },

  borderRoundedStart: {
    borderBottomLeftRadius: DEFAULT_BORDER_RADIUS + IMPORTANT,
    borderTopLeftRadius: DEFAULT_BORDER_RADIUS + IMPORTANT,
  },
  borderRoundedStart0: {
    borderBottomLeftRadius: 0 + IMPORTANT,
    borderTopLeftRadius: 0 + IMPORTANT,
  },
  borderRoundedStart1: {
    borderBottomLeftRadius: DEFAULT_BORDER_RADIUS + PX_TAG + IMPORTANT,
    borderTopLeftRadius: DEFAULT_BORDER_RADIUS + PX_TAG + IMPORTANT,
  },
  borderRoundedStart2: {
    borderBottomLeftRadius: DEFAULT_BORDER_RADIUS * 2 + PX_TAG + IMPORTANT,
    borderTopLeftRadius: DEFAULT_BORDER_RADIUS * 2 + PX_TAG + IMPORTANT,
  },
  borderRoundedStart3: {
    borderBottomLeftRadius: DEFAULT_BORDER_RADIUS * 3 + PX_TAG + IMPORTANT,
    borderTopLeftRadius: DEFAULT_BORDER_RADIUS * 3 + PX_TAG + IMPORTANT,
  },
  borderRoundedStart4: {
    borderBottomLeftRadius: DEFAULT_BORDER_RADIUS * 4 + PX_TAG + IMPORTANT,
    borderTopLeftRadius: DEFAULT_BORDER_RADIUS * 4 + PX_TAG + IMPORTANT,
  },
  borderRoundedStart5: {
    borderBottomLeftRadius: DEFAULT_BORDER_RADIUS * 5 + PX_TAG + IMPORTANT,
    borderTopLeftRadius: DEFAULT_BORDER_RADIUS * 5 + PX_TAG + IMPORTANT,
  },
  borderRoundedStartCircle: {
    borderBottomLeftRadius: "50%" + IMPORTANT,
    borderTopLeftRadius: "50%" + IMPORTANT,
  },
  borderRoundedStartPill: {
    borderBottomLeftRadius: "50rem" + IMPORTANT,
    borderTopLeftRadius: "50rem" + IMPORTANT,
  },

  boxSizingBorderBox: { boxSizing: "border-box" },

  /**************************************************
   * Sizing
   *************************************************/
  boxSizingContentBox: { boxSizing: "content-box" },

  boxSizingInherit: { boxSizing: "inherit" },

  boxSizingInitial: { boxSizing: "initial" },

  displayBlock: { display: "block" },

  displayFlex: { display: "flex" },

  displayGrid: { display: "grid" },

  // -- textPrimaryEmphasis: {},
  // -- textSecondaryEmphasis: {},
  // -- textSuccessEmphasis: {},
  // -- textInfoEmphasis: {},
  // -- textWarningEmphasis: {},
  // -- textDangerEmphasis: {},
  // -- textLightEmphasis: {},
  // -- textDarkEmphasis: {},
  /**************************************************
   * Display
   *************************************************/
  displayInline: { display: "inline" },

  displayInlineBlock: { display: "inline-block" },

  displayInlineFlex: { display: "inline-flex" },

  displayNone: { display: "none" },

  displayTable: { display: "table" },

  displayTableCell: { display: "table-cell" },

  displayTableRow: { display: "table-row" },

  end0: { right: "0" },

  end100: { right: "100%" },

  end50: { right: "50%" },

  fixedBottom: {
    bottom: "0",
    left: "0",
    position: "fixed",
    right: "0",
    zIndex: "1030",
  },

  fixedTop: {
    left: "0",
    position: "fixed",
    right: "0",
    top: "0",
    zIndex: "1030",
  },

  flexDirectionColumn: { flexDirection: "column" },

  flexDirectionColumnReverse: { flexDirection: "column-reverse" },

  /**************************************************
   * Flex
   *************************************************/
  flexDirectionRow: { flexDirection: "row" },

  flexDirectionRowReverse: { flexDirection: "row-reverse" },

  flexFill: { flex: "1 1 auto" },

  flexGrow0: { flexGrow: "0" },

  flexGrow1: { flexGrow: "1" },

  flexShrink0: { flexShrink: "0" },

  flexShrink1: { flexShrink: "1" },

  flexWrapNoWrap: { flexWrap: "nowrap" },

  flexWrapWrap: { flexWrap: "wrap" },

  flexWrapWrapReverse: { flexWrap: "wrap-reverse" },

  floatEnd: { float: "right" },

  floatNone: { float: "none" },

  /**************************************************
   * Float
   *************************************************/
  floatStart: { float: "left" },

  h100: { height: "100%" },

  /*-------------------------------------------------
   * Height
   *-----------------------------------------------*/
  h25: { height: "25%" },

  h50: { height: "50%" },

  h75: { height: "75%" },

  hAuto: { height: "auto" },

  justifyContentCenter: {
    display: "flex",
    justifyContent: "center",
  },

  justifyContentFlexEnd: {
    display: "flex",
    justifyContent: "flex-end",
  },

  justifyContentFlexStart: {
    display: "flex",
    justifyContent: "flex-start",
  },

  justifyContentSpaceAround: {
    display: "flex",
    justifyContent: "space-around",
  },

  justifyContentSpaceBetween: {
    display: "flex",
    justifyContent: "space-between",
  },

  justifyContentSpaceEvenly: {
    display: "flex",
    justifyContent: "space-evenly",
  },

  /*-------------------------------------------------
   * Margin
   *-----------------------------------------------*/
  m0: { margin: 0 + IMPORTANT },
  m1: { margin: DEFAULT_MARGIN + PX_TAG + IMPORTANT },
  m2: { margin: DEFAULT_MARGIN * 2 + PX_TAG + IMPORTANT },
  m3: { margin: DEFAULT_MARGIN * 3 + PX_TAG + IMPORTANT },
  m4: { margin: DEFAULT_MARGIN * 4 + PX_TAG + IMPORTANT },
  m5: { margin: DEFAULT_MARGIN * 5 + PX_TAG + IMPORTANT },
  mAuto: { margin: "auto" + IMPORTANT },

  /*-------------------------------------------------
   * Gap
   *-----------------------------------------------*/
  gap0: { gap: "0" },

  gap1: { gap: DEFAULT_SPACING * 1 },

  mN1: { margin: DEFAULT_MARGIN * -1 + PX_TAG },

  gap2: { gap: DEFAULT_SPACING * 2 },

  mN2: { margin: DEFAULT_MARGIN * -2 + PX_TAG },

  gap3: { gap: DEFAULT_SPACING * 3 },

  mN3: { margin: DEFAULT_MARGIN * -3 + PX_TAG },

  gap4: { gap: DEFAULT_SPACING * 4 },

  mN4: { margin: DEFAULT_MARGIN * -4 + PX_TAG },

  gap5: { gap: DEFAULT_SPACING * 5 },

  mN5: { margin: DEFAULT_MARGIN * -5 + PX_TAG },

  // -moz-column-gap: 0 !important;
  colGap0: { columnGap: "0" },

  maxH100: { maxHeight: "100%" },

  maxH25: { maxHeight: "25%" },

  colGap1: { columnGap: DEFAULT_SPACING * 1 },

  maxH50: { maxHeight: "50%" },

  colGap2: { columnGap: DEFAULT_SPACING * 2 },

  maxH75: { maxHeight: "75%" },

  colGap3: { columnGap: DEFAULT_SPACING * 3 },

  maxVh100: { maxHeight: "100vh" },

  colGap4: { columnGap: DEFAULT_SPACING * 4 },

  maxVh25: { maxHeight: "25vh" },

  colGap5: { columnGap: DEFAULT_SPACING * 5 },

  maxVh50: { maxHeight: "50vh" },

  maxVh75: { maxHeight: "75vh" },

  maxVw100: { maxWidth: "100vw" },

  maxVw25: { maxWidth: "25vw" },

  maxVw50: { maxWidth: "50vw" },

  maxVw75: { maxWidth: "75vw" },

  maxW100: { maxWidth: "100%" },

  maxW25: { maxWidth: "25%" },

  maxW50: { maxWidth: "50%" },

  maxW75: { maxWidth: "75%" },

  mb0: { marginBottom: 0 },

  mb1: { marginBottom: DEFAULT_MARGIN + PX_TAG },

  /**************************************************
   * Vertical Align
   *************************************************/
  alignBaseline: { verticalAlign: "baseline" },

  mb2: { marginBottom: DEFAULT_MARGIN * 2 + PX_TAG },

  mb3: { marginBottom: DEFAULT_MARGIN * 3 + PX_TAG },

  alignMiddle: { verticalAlign: "middle" },

  mb4: { marginBottom: DEFAULT_MARGIN * 4 + PX_TAG },

  alignBottom: { verticalAlign: "bottom" },

  mb5: { marginBottom: DEFAULT_MARGIN * 5 + PX_TAG },

  mbAuto: { marginBottom: "auto" },

  alignTextBottom: { verticalAlign: "text-bottom" },

  mbN1: { marginBottom: DEFAULT_MARGIN * -1 + PX_TAG },

  alignTextTop: { verticalAlign: "text-top" },

  mbN2: { marginBottom: DEFAULT_MARGIN * -2 + PX_TAG },

  alignTop: { verticalAlign: "top" },

  mbN3: { marginBottom: DEFAULT_MARGIN * -3 + PX_TAG },

  invisible: { visibility: "hidden" },

  mbN4: { marginBottom: DEFAULT_MARGIN * -4 + PX_TAG },

  /**************************************************
   * cursor
   *************************************************/
  cursorAlias: { cursor: "alias " },

  mbN5: { marginBottom: DEFAULT_MARGIN * -5 + PX_TAG },

  minH100: { minHeight: "100%" },

  cursorAllScroll: { cursor: "all-scroll " },

  minH25: { minHeight: "25%" },

  cursorAuto: { cursor: "auto" },

  minH50: { minHeight: "50%" },

  cursorCell: { cursor: "cell " },

  minH75: { minHeight: "75%" },

  cursorColResize: { cursor: "col-resize " },

  minVh100: { minHeight: "100vh" },

  minVh25: { minHeight: "25vh" },

  cursorContextMenu: { cursor: "context-menu" },

  minVh50: { minHeight: "50vh" },

  minVh75: { minHeight: "75vh" },

  cursorCopy: { cursor: "copy " },

  minVw100: { minWidth: "100vw" },

  cursorCrosshair: { cursor: "crosshair " },

  minVw25: { minWidth: "25vw" },

  cursorDefault: { cursor: "default " },

  minVw50: { minWidth: "50vw" },

  cursorEResize: { cursor: "e-resize " },

  minVw75: { minWidth: "75vw" },

  cursorEwResize: { cursor: "ew-resize " },

  minW100: { minWidth: "100%" },

  cursorGrab: { cursor: "grab " },

  minW25: { minWidth: "25%" },

  cursorGrabbing: { cursor: "grabbing " },

  minW50: { minWidth: "50%" },

  cursorHelp: { cursor: "help " },

  minW75: { minWidth: "75%" },

  cursorMove: { cursor: "move " },

  ml0: { marginLeft: 0 },

  cursorNResize: { cursor: "n-resize " },

  ml1: { marginLeft: DEFAULT_MARGIN + PX_TAG },

  cursorNeResize: { cursor: "ne-resize " },

  ml2: { marginLeft: DEFAULT_MARGIN * 2 + PX_TAG },

  cursorNeswResize: { cursor: "nesw-resize" },

  ml3: { marginLeft: DEFAULT_MARGIN * 3 + PX_TAG },

  cursorInitial: { cursor: "initial " },

  ml4: { marginLeft: DEFAULT_MARGIN * 4 + PX_TAG },

  cursorNoDrop: { cursor: "no-drop " },

  ml5: { marginLeft: DEFAULT_MARGIN * 5 + PX_TAG },

  cursorInherit: { cursor: "inherit" },

  mlAuto: { marginLeft: "auto" },

  cursorNone: { cursor: "none " },

  mlN1: { marginLeft: DEFAULT_MARGIN * -1 + PX_TAG },

  cursorNotAllowed: { cursor: "not-allowed " },

  mlN2: { marginLeft: DEFAULT_MARGIN * -2 + PX_TAG },

  cursorNsResize: { cursor: "ns-resize " },

  mlN3: { marginLeft: DEFAULT_MARGIN * -3 + PX_TAG },

  cursorNwResize: { cursor: "nw-resize " },

  mlN4: { marginLeft: DEFAULT_MARGIN * -4 + PX_TAG },

  cursorNwseResize: { cursor: "nwse-resize" },

  mlN5: { marginLeft: DEFAULT_MARGIN * -5 + PX_TAG },

  cursorPointer: { cursor: "pointer " },

  mr0: { marginRight: 0 },

  cursorProgress: { cursor: "progress " },

  mr1: { marginRight: DEFAULT_MARGIN + PX_TAG },

  cursorRowResize: { cursor: "row-resize " },

  mr2: { marginRight: DEFAULT_MARGIN * 2 + PX_TAG },

  cursorSResize: { cursor: "s-resize " },

  mr3: { marginRight: DEFAULT_MARGIN * 3 + PX_TAG },

  cursorSeResize: { cursor: "se-resize " },

  mr4: { marginRight: DEFAULT_MARGIN * 4 + PX_TAG },

  cursorSwResize: { cursor: "sw-resize " },

  mr5: { marginRight: DEFAULT_MARGIN * 5 + PX_TAG },

  cursorText: { cursor: "text " },

  mrAuto: { marginRight: "auto" },

  cursorURL: { cursor: "URL " },

  mrN1: { marginRight: DEFAULT_MARGIN * -1 + PX_TAG },

  cursorVerticalText: { cursor: "vertical-text" },

  mrN2: { marginRight: DEFAULT_MARGIN * -2 + PX_TAG },

  cursorWResize: { cursor: "w-resize " },

  mrN3: { marginRight: DEFAULT_MARGIN * -3 + PX_TAG },

  cursorWait: { cursor: "wait " },

  mrN4: { marginRight: DEFAULT_MARGIN * -4 + PX_TAG },

  cursorZoomIn: { cursor: "zoom-in" },

  mrN5: { marginRight: DEFAULT_MARGIN * -5 + PX_TAG },

  cursorZoomOut: { cursor: "zoom-out" },

  mt0: { marginTop: 0 },

  mt1: { marginTop: DEFAULT_MARGIN + PX_TAG },

  mt2: { marginTop: DEFAULT_MARGIN * 2 + PX_TAG },

  mt3: { marginTop: DEFAULT_MARGIN * 3 + PX_TAG },

  mt4: { marginTop: DEFAULT_MARGIN * 4 + PX_TAG },

  /**************************************************
   * Object Fit
   *************************************************/
  objectFitContain: {
    // -o-object-fit: contain !important;
    objectFit: "contain",
  },

  mt5: { marginTop: DEFAULT_MARGIN * 5 + PX_TAG },

  objectFitCover: {
    // -o-object-fit: cover !important;
    objectFit: "cover",
  },

  mtAuto: { marginTop: "auto" },

  objectFitFill: {
    // -o-object-fit: fill !important;
    objectFit: "fill",
  },

  mtN1: { marginTop: DEFAULT_MARGIN * -1 + PX_TAG },

  objectFitNone: {
    // -o-object-fit: none !important;
    objectFit: "none",
  },

  mtN2: { marginTop: DEFAULT_MARGIN * -2 + PX_TAG },

  objectFitScale: {
    // -o-object-fit: scale-down !important;
    objectFit: "scale-down",
  },

  mtN3: { marginTop: DEFAULT_MARGIN * -3 + PX_TAG },

  mtN4: { marginTop: DEFAULT_MARGIN * -4 + PX_TAG },

  /**************************************************
   * Opacity
   *************************************************/
  opacity0: { opacity: "0.00" },

  mtN5: { marginTop: DEFAULT_MARGIN * -5 + PX_TAG },

  opacity10: { opacity: "0.10" },

  mx0: { marginLeft: 0, marginRight: 0 },

  opacity100: { opacity: "1.00" },

  mx1: {
    marginLeft: DEFAULT_MARGIN * 1 + PX_TAG,
    marginRight: DEFAULT_MARGIN * 1 + PX_TAG,
  },

  opacity15: { opacity: "0.15" },

  mx2: {
    marginLeft: DEFAULT_MARGIN * 2 + PX_TAG,
    marginRight: DEFAULT_MARGIN * 2 + PX_TAG,
  },

  opacity20: { opacity: "0.20" },

  mx3: {
    marginLeft: DEFAULT_MARGIN * 3 + PX_TAG,
    marginRight: DEFAULT_MARGIN * 3 + PX_TAG,
  },

  opacity25: { opacity: "0.25" },

  mx4: {
    marginLeft: DEFAULT_MARGIN * 4 + PX_TAG,
    marginRight: DEFAULT_MARGIN * 4 + PX_TAG,
  },

  opacity30: { opacity: "0.30" },

  mx5: {
    marginLeft: DEFAULT_MARGIN * 5 + PX_TAG,
    marginRight: DEFAULT_MARGIN * 5 + PX_TAG,
  },

  opacity35: { opacity: "0.35" },

  mxAuto: { marginLeft: "auto", marginRight: "auto" },

  opacity40: { opacity: "0.40" },

  mxN1: {
    marginLeft: DEFAULT_MARGIN * -1 + PX_TAG,
    marginRight: DEFAULT_MARGIN * -1 + PX_TAG,
  },

  opacity45: { opacity: "0.45" },

  mxN2: {
    marginLeft: DEFAULT_MARGIN * -2 + PX_TAG,
    marginRight: DEFAULT_MARGIN * -2 + PX_TAG,
  },

  opacity5: { opacity: "0.05" },

  mxN3: {
    marginLeft: DEFAULT_MARGIN * -3 + PX_TAG,
    marginRight: DEFAULT_MARGIN * -3 + PX_TAG,
  },

  opacity50: { opacity: "0.50" },

  mxN4: {
    marginLeft: DEFAULT_MARGIN * -4 + PX_TAG,
    marginRight: DEFAULT_MARGIN * -4 + PX_TAG,
  },

  opacity55: { opacity: "0.55" },

  mxN5: {
    marginLeft: DEFAULT_MARGIN * -5 + PX_TAG,
    marginRight: DEFAULT_MARGIN * -5 + PX_TAG,
  },

  opacity60: { opacity: "0.60" },

  my0: { marginBottom: 0, marginTop: 0 },

  opacity65: { opacity: "0.65" },

  my1: {
    marginBottom: DEFAULT_MARGIN * 1 + PX_TAG,
    marginTop: DEFAULT_MARGIN * 1 + PX_TAG,
  },

  opacity70: { opacity: "0.70" },

  my2: {
    marginBottom: DEFAULT_MARGIN * 2 + PX_TAG,
    marginTop: DEFAULT_MARGIN * 2 + PX_TAG,
  },

  opacity75: { opacity: "0.75" },

  my3: {
    marginBottom: DEFAULT_MARGIN * 3 + PX_TAG,
    marginTop: DEFAULT_MARGIN * 3 + PX_TAG,
  },

  opacity80: { opacity: "0.80" },

  my4: {
    marginBottom: DEFAULT_MARGIN * 4 + PX_TAG,
    marginTop: DEFAULT_MARGIN * 4 + PX_TAG,
  },

  opacity85: { opacity: "0.85" },

  my5: {
    marginBottom: DEFAULT_MARGIN * 5 + PX_TAG,
    marginTop: DEFAULT_MARGIN * 5 + PX_TAG,
  },

  opacity90: { opacity: "0.90" },

  myAuto: { marginBottom: "auto", marginTop: "auto" },

  opacity95: { opacity: "0.95" },

  myN1: {
    marginBottom: DEFAULT_MARGIN * -1 + PX_TAG,
    marginTop: DEFAULT_MARGIN * -1 + PX_TAG,
  },

  myN2: {
    marginBottom: DEFAULT_MARGIN * -2 + PX_TAG,
    marginTop: DEFAULT_MARGIN * -2 + PX_TAG,
  },

  /**************************************************
   * Overflow
   *************************************************/
  overflowAuto: { overflow: "auto" },

  myN3: {
    marginBottom: DEFAULT_MARGIN * -3 + PX_TAG,
    marginTop: DEFAULT_MARGIN * -3 + PX_TAG,
  },

  overflowHidden: { overflow: "hidden" },

  myN4: {
    marginBottom: DEFAULT_MARGIN * -4 + PX_TAG,
    marginTop: DEFAULT_MARGIN * -4 + PX_TAG,
  },

  overflowScroll: { overflow: "scroll" },

  myN5: {
    marginBottom: DEFAULT_MARGIN * -5 + PX_TAG,
    marginTop: DEFAULT_MARGIN * -5 + PX_TAG,
  },

  overflowVisible: { overflow: "visible" },

  overflowXAuto: { overflowX: "auto" },

  overflowXHidden: { overflowX: "hidden" },

  overflowXScroll: { overflowX: "scroll" },

  overflowXVisible: { overflowX: "visible" },

  overflowYAuto: { overflowY: "auto" },

  textBlack: { color: "#000000" },

  overflowYHidden: { overflowY: "hidden" },

  textBlack50: { color: "#00000077" },

  overflowYScroll: { overflowY: "scroll" },

  textError: { color: theme.palette.error.main },

  overflowYVisible: { overflowY: "visible" },

  textErrorDark: { color: theme.palette.error.dark },

  /**************************************************
   * Spacing
   *************************************************/
  /*-------------------------------------------------
   * Padding
   *-----------------------------------------------*/
  p0: { padding: 0 + PX_TAG },

  textErrorLight: { color: theme.palette.error.light },

  textInfo: { color: theme.palette.info.main },

  p1: { padding: DEFAULT_PADDING + PX_TAG },

  textInfoDark: { color: theme.palette.info.dark },

  p2: { padding: DEFAULT_PADDING * 2 + PX_TAG },

  textInfoLight: { color: theme.palette.info.light },

  p3: { padding: DEFAULT_PADDING * 3 + PX_TAG },

  p4: { padding: DEFAULT_PADDING * 4 + PX_TAG },

  textOpacity100: { opacity: "1" },

  p5: { padding: DEFAULT_PADDING * 5 + PX_TAG },

  textOpacity25: { opacity: "0.25" },

  pb0: { paddingBottom: 0 + PX_TAG },

  pb1: { paddingBottom: DEFAULT_PADDING + PX_TAG },

  /**************************************************
   * Color
   *************************************************/
  textPrimary: { color: theme.palette.primary.main },

  pb2: { paddingBottom: DEFAULT_PADDING * 2 + PX_TAG },

  textPrimaryDark: { color: theme.palette.primary.dark },

  pb3: { paddingBottom: DEFAULT_PADDING * 3 + PX_TAG },

  pb4: { paddingBottom: DEFAULT_PADDING * 4 + PX_TAG },

  textPrimaryLight: { color: theme.palette.primary.light },

  pb5: { paddingBottom: DEFAULT_PADDING * 5 + PX_TAG },

  peAuto: { pointerEvents: "auto" },

  textSecondary: { color: theme.palette.secondary.main },

  peNone: { pointerEvents: "none" },

  pl0: { paddingLeft: 0 + PX_TAG },

  textSecondaryDark: { color: theme.palette.secondary.dark },

  pl1: { paddingLeft: DEFAULT_PADDING + PX_TAG },

  pl2: { paddingLeft: DEFAULT_PADDING * 2 + PX_TAG },

  textSecondaryLight: { color: theme.palette.secondary.light },

  pl3: { paddingLeft: DEFAULT_PADDING * 3 + PX_TAG },

  pl4: { paddingLeft: DEFAULT_PADDING * 4 + PX_TAG },

  textSuccess: { color: theme.palette.success.main },

  pl5: { paddingLeft: DEFAULT_PADDING * 5 + PX_TAG },

  textSuccessDark: { color: theme.palette.success.dark },

  positionAbsolute: { position: "absolute" },

  positionFixed: { position: "fixed" },

  textSuccessLight: { color: theme.palette.success.light },

  positionRelative: { position: "relative" },

  /**************************************************
   * Position
   *************************************************/
  positionStatic: { position: "static" },

  textWarning: { color: theme.palette.warning.main },

  /**
   * @todo multiple value for same property
   */
  positionSticky: {
    // -- position: "-webkit-sticky",
    position: "sticky",
  },

  textWarningDark: { color: theme.palette.warning.dark },

  pr0: { paddingRight: 0 + PX_TAG },

  textWarningLight: { color: theme.palette.warning.light },

  pr1: { paddingRight: DEFAULT_PADDING + PX_TAG },

  // -- textLight: {},
  // -- textDark: {},
  // -- textBody: {},
  // -- textMuted: {},
  // -- textBodySecondary: {},
  // -- textBodyTertiary: {},
  // -- textBodyEmphasis: {},
  textReset: { color: "inherit" },

  pr2: { paddingRight: DEFAULT_PADDING * 2 + PX_TAG },

  textWhite: { color: "#ffffff" },

  pr3: { paddingRight: DEFAULT_PADDING * 3 + PX_TAG },

  pr4: { paddingRight: DEFAULT_PADDING * 4 + PX_TAG },

  textWhite50: { color: "#ffffff77" },

  pr5: { paddingRight: DEFAULT_PADDING * 5 + PX_TAG },

  pt0: { paddingTop: 0 + PX_TAG },

  textOpacity50: { opacity: "0.5" },

  pt1: { paddingTop: DEFAULT_PADDING + PX_TAG },

  pt2: { paddingTop: DEFAULT_PADDING * 2 + PX_TAG },

  textOpacity75: { opacity: "0.75" },

  pt3: { paddingTop: DEFAULT_PADDING * 3 + PX_TAG },

  pt4: { paddingTop: DEFAULT_PADDING * 4 + PX_TAG },

  pt5: { paddingTop: DEFAULT_PADDING * 5 + PX_TAG },

  px0: {
    paddingLeft: 0 + PX_TAG,
    paddingRight: 0 + PX_TAG,
  },

  px1: {
    paddingLeft: DEFAULT_PADDING * 1 + PX_TAG,
    paddingRight: DEFAULT_PADDING * 1 + PX_TAG,
  },

  px2: {
    paddingLeft: DEFAULT_PADDING * 2 + PX_TAG,
    paddingRight: DEFAULT_PADDING * 2 + PX_TAG,
  },

  px3: {
    paddingLeft: DEFAULT_PADDING * 3 + PX_TAG,
    paddingRight: DEFAULT_PADDING * 3 + PX_TAG,
  },

  px4: {
    paddingLeft: DEFAULT_PADDING * 4 + PX_TAG,
    paddingRight: DEFAULT_PADDING * 4 + PX_TAG,
  },

  px5: {
    paddingLeft: DEFAULT_PADDING * 5 + PX_TAG,
    paddingRight: DEFAULT_PADDING * 5 + PX_TAG,
  },

  py0: {
    paddingBottom: 0 + PX_TAG,
    paddingTop: 0 + PX_TAG,
  },

  py1: {
    paddingBottom: DEFAULT_PADDING * 1 + PX_TAG,
    paddingTop: DEFAULT_PADDING * 1 + PX_TAG,
  },

  py2: {
    paddingBottom: DEFAULT_PADDING * 2 + PX_TAG,
    paddingTop: DEFAULT_PADDING * 2 + PX_TAG,
  },

  py3: {
    paddingBottom: DEFAULT_PADDING * 3 + PX_TAG,
    paddingTop: DEFAULT_PADDING * 3 + PX_TAG,
  },

  py4: {
    paddingBottom: DEFAULT_PADDING * 4 + PX_TAG,
    paddingTop: DEFAULT_PADDING * 4 + PX_TAG,
  },

  py5: {
    paddingBottom: DEFAULT_PADDING * 5 + PX_TAG,
    paddingTop: DEFAULT_PADDING * 5 + PX_TAG,
  },

  rowGap0: { rowGap: "0" },

  rowGap1: { rowGap: DEFAULT_SPACING * 1 },

  rowGap2: { rowGap: DEFAULT_SPACING * 2 },

  rowGap3: { rowGap: DEFAULT_SPACING * 3 },

  rowGap4: { rowGap: DEFAULT_SPACING * 4 },

  rowGap5: { rowGap: DEFAULT_SPACING * 5 },

  /**************************************************
   * Shadows
   * @todo change color using theme
   *************************************************/
  shadow: { boxShadow: "0 0.5rem 1rem rgba(" + DEFAULT_SHADOW_COLOR_RGB + ", 0.15)" },

  /**************************************************
   * Interactions
   *************************************************/
  userSelectAll: {
    // -webkit-user-select: all !important;
    // -moz-user-select: all !important;
    userSelect: "all",
  },

  shadowLg: { boxShadow: "0 1rem 3rem rgba(" + DEFAULT_SHADOW_COLOR_RGB + ", 0.175)" },

  shadowNone: { boxShadow: "none" },

  userSelectAuto: {
    // -webkit-user-select: auto !important;
    // -moz-user-select: auto !important;
    userSelect: "auto",
  },

  shadowSm: {
    boxShadow: "0 0.125rem 0.25rem rgba(" + DEFAULT_SHADOW_COLOR_RGB + ", 0.075)" + IMPORTANT,
  },

  start0: { left: "0" },

  userSelectNone: {
    // -webkit-user-select: none !important;
    // -moz-user-select: none !important;
    userSelect: "none",
  },

  start100: { left: "100%" },

  start50: { left: "50%" },

  stickyBottom: {
    bottom: "0",
    // -- position: "-webkit-sticky",
    position: "sticky",
    zIndex: "1020",
  },

  stickyTop: {
    // -- position: "-webkit-sticky",
    position: "sticky",
    top: "0",
    zIndex: "1020",
  },

  textBreak: {
    wordBreak: "break-word",
    wordWrap: "break-word",
  },

  textCapitalize: { textTransform: "capitalize" },

  textCenter: { textAlign: "center" },

  textDecorationLineThrough: { textDecoration: "line-through" },

  textDecorationNone: { textDecoration: "none" },

  textDecorationUnderline: { textDecoration: "underline" },

  textEnd: { textAlign: "right" },

  textJustify: { textAlign: "justify" },

  textLowercase: { textTransform: "lowercase" },

  textNowrap: { whiteSpace: "nowrap" },

  /**************************************************
   * Text
   *************************************************/
  textStart: { textAlign: "left" },

  textTruncate: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  textUppercase: { textTransform: "uppercase" },

  textWeightBold: { fontWeight: "bold" },

  textWeightLight: { fontWeight: "lighter" },

  textWeightNormal: { fontWeight: "normal" },

  textWrap: { whiteSpace: "normal" },

  top0: { top: "0" },

  top100: { top: "100%" },

  top50: { top: "50%" },

  translateMiddle: { transform: "translate(-50%, -50%)" },

  translateMiddleX: { transform: "translateX(-50%)" },

  translateMiddleY: { transform: "translateY(-50%)" },

  vh100: { height: "100vh" },

  vh25: { height: "25vh" },

  vh50: { height: "50vh" },

  vh75: { height: "75vh" },

  /**************************************************
   * Visibility
   *************************************************/
  visible: { visibility: "visible" },

  vw100: { width: "100vw" },

  vw25: { width: "25vw" },

  vw50: { width: "50vw" },

  vw75: { width: "75vw" },

  w100: { width: "100%" },

  /*-------------------------------------------------
   * Width
   *-----------------------------------------------*/
  w25: { width: "25%" },

  w50: { width: "50%" },

  w75: { width: "75%" },

  wAuto: { width: "auto" },

  /**************************************************
   * zindex
   *************************************************/
  zN1: { zIndex: "-1" },
  z0: { zIndex: "0" },
  z1: { zIndex: "1" },
  z2: { zIndex: "2" },
  z3: { zIndex: "3" },
};
