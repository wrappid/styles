/* eslint-disable */
import { theme } from "../StylesProvider";
import { getConfigurationObject } from "../helper/helper";

const configuration = getConfigurationObject();

export const PX = configuration?.wrappid?.platform === "web" ? "px " : "";
export const IMPORTANT = configuration?.wrappid?.platform === "web" ? " !important" : "";

/**
 * Spacing related defaults
 */
export const DEFAULT_MARGIN = 8;
export const DEFAULT_PADDING = 8;
export const DEFAULT_SPACING = 8;

/**
 * Border related defaults
 */
const DEFAULT_BORDER_WIDTH = 1;
const DEFAULT_BORDER_STYLE = "solid";
const DEFAULT_BORDER_COLOR = "black";
const DEFAULT_BORDER_RADIUS = 4;
const DEFAULT_BORDER =
  DEFAULT_BORDER_WIDTH + PX + DEFAULT_BORDER_STYLE + " " + DEFAULT_BORDER_COLOR;

/**
 * Shadow related defaults
 */
// -- const DEFAULT_SHADOW_COLOR = "black";
const DEFAULT_SHADOW_COLOR_RGB = "0,0,0";

/**
 *
 */
export const defaultUtilityStyles = {
  /**************************************************
   * Alignment
   *************************************************/
  alignItemsStart: {
    alignItems: "flex-start",
    display: "flex",
  },
  alignItemsEnd: {
    alignItems: "flex-end",
    display: "flex",
  },
  alignItemsCenter: {
    alignItems: "center",
    display: "flex",
  },
  alignItemsBaseline: {
    alignItems: "baseline",
    display: "flex",
  },
alignItemsStretch: {
    alignItems: "stretch",
    display: "flex",
  },

  alignContentStart: {
    alignContent: "flex-start",
    display: "flex",
  },
  alignContentEnd: {
    alignContent: "flex-end",
    display: "flex",
  },
alignContentCenter: {
    alignContent: "center",
    display: "flex",
  },
  alignContentBetween: {
    alignContent: "space-between",
    display: "flex",
  },
alignContentAround: {
    alignContent: "space-around",
    display: "flex",
  },
  alignContentStretch: {
    alignContent: "stretch",
    display: "flex",
  },

  alignSelfAuto: { alignSelf: "auto", display: "flex" },
  alignSelfStart: {
    alignSelf: "flex-start",
    display: "flex",
  },
  alignSelfEnd: {
    alignSelf: "flex-end",
    display: "flex",
  },
  alignSelfCenter: {
    alignSelf: "center",
    display: "flex",
  },
  alignSelfBaseline: {
    alignSelf: "baseline",
    display: "flex",
  },
  alignSelfStretch: {
    alignSelf: "stretch",
    display: "flex",
  },

  justifyContentCenter: {
    display: "flex",
    justifyContent: "center",
  },
justifyContentFlexStart: {
    display: "flex",
    justifyContent: "flex-start",
  },
  justifyContentFlexEnd: {
    display: "flex",
    justifyContent: "flex-end",
  },
  justifyContentSpaceBetween: {
    display: "flex",
    justifyContent: "space-between",
  },
  justifyContentSpaceAround: {
    display: "flex",
    justifyContent: "space-around",
  },
    justifyContentSpaceEvenly: {
    display: "flex",
    justifyContent: "space-evenly",
  },

  /**************************************************
   * Background
   *************************************************/
  bgBlack: { backgroundColor: "black", color: "white" },
  bgWhite: { backgroundColor: "white", color: "black" },
  bgTransparent: { backgroundColor: "transparent" },

  bgPrimary: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
bgPrimaryLight: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
  },
  bgPrimaryDark: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
  },
  
  bgSecondary: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
bgSecondaryLight: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.contrastText,
  },
  bgSecondaryDark: {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.contrastText,
  },
  
  bgSuccess: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.success.contrastText,
  },
bgSuccessLight: {
    backgroundColor: theme.palette.success.light,
    color: theme.palette.success.contrastText,
  },
  bgSuccessDark: {
    backgroundColor: theme.palette.success.dark,
    color: theme.palette.success.contrastText,
  },
  
  bgError: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
  bgErrorLight: {
    backgroundColor: theme.palette.error.light,
    color: theme.palette.error.contrastText,
  },
  bgErrorDark: {
    backgroundColor: theme.palette.error.dark,
    color: theme.palette.error.contrastText,
  },

  bgWarning: {
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.warning.contrastText,
  },
  bgWarningLight: {
    backgroundColor: theme.palette.warning.light,
    color: theme.palette.warning.contrastText,
  },
  bgWarningDark: {
    backgroundColor: theme.palette.warning.dark,
    color: theme.palette.warning.contrastText,
  },

  bgInfo: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.info.contrastText,
  },
  bgInfoLight: {
    backgroundColor: theme.palette.info.light,
    color: theme.palette.info.contrastText,
  },
  bgInfoDark: {
    backgroundColor: theme.palette.info.dark,
    color: theme.palette.info.contrastText,
  },

  // bgGrey50: { backgroundColor: theme.palette.grey["50"] },
  // bgGrey100: { backgroundColor: theme.palette.grey["100"] },
  // bgGrey200: { backgroundColor: theme.palette.grey["200"] },
  // bgGrey300: { backgroundColor: theme.palette.grey["300"] },
  // bgGrey400: { backgroundColor: theme.palette.grey["400"] },
  // bgGrey500: { backgroundColor: theme.palette.grey["500"] },
  // bgGrey600: { backgroundColor: theme.palette.grey["600"] },
  // bgGrey700: { backgroundColor: theme.palette.grey["700"] },
  // bgGrey800: { backgroundColor: theme.palette.grey["800"] },
  // bgGrey900: { backgroundColor: theme.palette.grey["900"] },
  // bgGreyA100: { backgroundColor: theme.palette.grey.A100 },
  // bgGreyA200: { backgroundColor: theme.palette.grey.A200 },
  // bgGreyA400: { backgroundColor: theme.palette.grey.A400 },
  // bgGreyA700: { backgroundColor: theme.palette.grey.A700 },

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

  borderPrimary: { borderColor: theme?.palette?.primary?.main },
  borderPrimaryLight: { borderColor: theme?.palette?.primary?.light },
  borderPrimaryDark: { borderColor: theme?.palette?.primary?.dark },

  borderSecondary: { borderColor: theme?.palette?.secondary?.main },
  borderSecondaryLight: { borderColor: theme?.palette?.secondary?.light },
  borderSecondaryDark: { borderColor: theme?.palette?.secondary?.dark },

  borderSuccess: { borderColor: theme?.palette?.success?.main },
  borderSuccessLight: { borderColor: theme?.palette?.success?.light },
  borderSuccessDark: { borderColor: theme?.palette?.success?.dark },

  borderError: { borderColor: theme?.palette?.error?.main },
  borderErrorLight: { borderColor: theme?.palette?.error?.light },
  borderErrorDark: { borderColor: theme?.palette?.error?.dark },

  borderWarning: { borderColor: theme?.palette?.warning?.main },
  borderWarningLight: { borderColor: theme?.palette?.warning?.light },
  borderWarningDark: { borderColor: theme?.palette?.warning?.dark },

  borderInfo: { borderColor: theme.palette.info.main },
  borderInfoLight: { borderColor: theme.palette.info.light },
  borderInfoDark: { borderColor: theme.palette.info.dark },
  
  borderBlack: { borderColor: "black" },
  borderWhite: { borderColor: "white" },

  border1: { borderWidth: DEFAULT_BORDER_WIDTH + PX },
  border2: { borderWidth: DEFAULT_BORDER_WIDTH * 2 + PX },
  border3: { borderWidth: DEFAULT_BORDER_WIDTH * 3 + PX },
  border4: { borderWidth: DEFAULT_BORDER_WIDTH * 4 + PX },
  border5: { borderWidth: DEFAULT_BORDER_WIDTH * 5 + PX },

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

  borderRounded: {
    borderRadius: DEFAULT_BORDER_RADIUS * 2 + PX + IMPORTANT,
  },
  borderRounded0: { borderRadius: 0 + IMPORTANT },
  borderRounded1: { borderRadius: DEFAULT_BORDER_RADIUS + PX + IMPORTANT },
  borderRounded2: {
    borderRadius: DEFAULT_BORDER_RADIUS * 2 + PX + IMPORTANT,
  },
  borderRounded3: {
    borderRadius: DEFAULT_BORDER_RADIUS * 3 + PX + IMPORTANT,
  },
  borderRounded4: {
    borderRadius: DEFAULT_BORDER_RADIUS * 4 + PX + IMPORTANT,
  },
  borderRounded5: {
    borderRadius: DEFAULT_BORDER_RADIUS * 5 + PX + IMPORTANT,
  },
  borderRoundedCircle: { borderRadius: "50%" + IMPORTANT },
  borderRoundedPill: { borderRadius: "50rem" + IMPORTANT },

  borderRoundedTop: {
    borderTopLeftRadius: DEFAULT_BORDER_RADIUS + PX + IMPORTANT,
    borderTopRightRadius: DEFAULT_BORDER_RADIUS + PX + IMPORTANT,
  },
  borderRoundedTop0: {
    borderTopLeftRadius: 0 + IMPORTANT,
    borderTopRightRadius: 0 + IMPORTANT,
  },
  borderRoundedTop1: {
    borderTopLeftRadius: DEFAULT_BORDER_RADIUS + PX + IMPORTANT,
    borderTopRightRadius: DEFAULT_BORDER_RADIUS + PX + IMPORTANT,
  },
  borderRoundedTop2: {
    borderTopLeftRadius: DEFAULT_BORDER_RADIUS * 2 + PX + IMPORTANT,
    borderTopRightRadius: DEFAULT_BORDER_RADIUS * 2 + PX + IMPORTANT,
  },
  borderRoundedTop3: {
    borderTopLeftRadius: DEFAULT_BORDER_RADIUS * 3 + PX + IMPORTANT,
    borderTopRightRadius: DEFAULT_BORDER_RADIUS * 3 + PX + IMPORTANT,
  },
  borderRoundedTop4: {
    borderTopLeftRadius: DEFAULT_BORDER_RADIUS * 4 + PX + IMPORTANT,
    borderTopRightRadius: DEFAULT_BORDER_RADIUS * 4 + PX + IMPORTANT,
  },
  borderRoundedTop5: {
    borderTopLeftRadius: DEFAULT_BORDER_RADIUS * 5 + PX + IMPORTANT,
    borderTopRightRadius: DEFAULT_BORDER_RADIUS * 5 + PX + IMPORTANT,
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
    borderTopRightRadius: DEFAULT_BORDER_RADIUS + PX + IMPORTANT,
    borderBottomRightRadius: DEFAULT_BORDER_RADIUS + PX + IMPORTANT,
  },
  borderRoundedEnd2: {
    borderTopRightRadius: DEFAULT_BORDER_RADIUS * 2 + PX + IMPORTANT,
    borderBottomRightRadius: DEFAULT_BORDER_RADIUS * 2 + PX + IMPORTANT,
  },
  borderRoundedEnd3: {
    borderTopRightRadius: DEFAULT_BORDER_RADIUS * 3 + PX + IMPORTANT,
    borderBottomRightRadius: DEFAULT_BORDER_RADIUS * 3 + PX + IMPORTANT,
  },
  borderRoundedEnd4: {
    borderTopRightRadius: DEFAULT_BORDER_RADIUS * 4 + PX + IMPORTANT,
    borderBottomRightRadius: DEFAULT_BORDER_RADIUS * 4 + PX + IMPORTANT,
  },
  borderRoundedEnd5: {
    borderTopRightRadius: DEFAULT_BORDER_RADIUS * 5 + PX + IMPORTANT,
    borderBottomRightRadius: DEFAULT_BORDER_RADIUS * 5 + PX + IMPORTANT,
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
    borderBottomRightRadius: DEFAULT_BORDER_RADIUS + PX + IMPORTANT,
    borderBottomLeftRadius: DEFAULT_BORDER_RADIUS + PX + IMPORTANT,
  },
  borderRoundedBottom2: {
    borderBottomRightRadius: DEFAULT_BORDER_RADIUS * 2 + PX + IMPORTANT,
    borderBottomLeftRadius: DEFAULT_BORDER_RADIUS * 2 + PX + IMPORTANT,
  },
  borderRoundedBottom3: {
    borderBottomRightRadius: DEFAULT_BORDER_RADIUS * 3 + PX + IMPORTANT,
    borderBottomLeftRadius: DEFAULT_BORDER_RADIUS * 3 + PX + IMPORTANT,
  },
  borderRoundedBottom4: {
    borderBottomRightRadius: DEFAULT_BORDER_RADIUS * 4 + PX + IMPORTANT,
    borderBottomLeftRadius: DEFAULT_BORDER_RADIUS * 4 + PX + IMPORTANT,
  },
  borderRoundedBottom5: {
    borderBottomRightRadius: DEFAULT_BORDER_RADIUS * 5 + PX + IMPORTANT,
    borderBottomLeftRadius: DEFAULT_BORDER_RADIUS * 5 + PX + IMPORTANT,
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
    borderBottomLeftRadius: DEFAULT_BORDER_RADIUS + PX + IMPORTANT,
    borderTopLeftRadius: DEFAULT_BORDER_RADIUS + PX + IMPORTANT,
  },
  borderRoundedStart2: {
    borderBottomLeftRadius: DEFAULT_BORDER_RADIUS * 2 + PX + IMPORTANT,
    borderTopLeftRadius: DEFAULT_BORDER_RADIUS * 2 + PX + IMPORTANT,
  },
  borderRoundedStart3: {
    borderBottomLeftRadius: DEFAULT_BORDER_RADIUS * 3 + PX + IMPORTANT,
    borderTopLeftRadius: DEFAULT_BORDER_RADIUS * 3 + PX + IMPORTANT,
  },
  borderRoundedStart4: {
    borderBottomLeftRadius: DEFAULT_BORDER_RADIUS * 4 + PX + IMPORTANT,
    borderTopLeftRadius: DEFAULT_BORDER_RADIUS * 4 + PX + IMPORTANT,
  },
  borderRoundedStart5: {
    borderBottomLeftRadius: DEFAULT_BORDER_RADIUS * 5 + PX + IMPORTANT,
    borderTopLeftRadius: DEFAULT_BORDER_RADIUS * 5 + PX + IMPORTANT,
  },
  borderRoundedStartCircle: {
    borderBottomLeftRadius: "50%" + IMPORTANT,
    borderTopLeftRadius: "50%" + IMPORTANT,
  },
  borderRoundedStartPill: {
    borderBottomLeftRadius: "50rem" + IMPORTANT,
    borderTopLeftRadius: "50rem" + IMPORTANT,
  },

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

  /**************************************************
   * Color
   *************************************************/
  textPrimary: { color: theme.palette.primary.main },
textPrimaryLight: { color: theme.palette.primary.light },
  textPrimaryDark: { color: theme.palette.primary.dark },
  
  textSecondary: { color: theme.palette.secondary.main },
textSecondaryLight: { color: theme.palette.secondary.light },
  textSecondaryDark: { color: theme.palette.secondary.dark },
  
  textSuccess: { color: theme.palette.success.main },
textSuccessLight: { color: theme.palette.success.light },
  textSuccessDark: { color: theme.palette.success.dark },
  
  textError: { color: theme.palette.error.main },
textErrorLight: { color: theme.palette.error.light },
  textErrorDark: { color: theme.palette.error.dark },
  
  textWarning: { color: theme.palette.warning.main },
textWarningLight: { color: theme.palette.warning.light },
  textWarningDark: { color: theme.palette.warning.dark },
  
  textInfo: { color: theme.palette.info.main },
textInfoLight: { color: theme.palette.info.light },
  textInfoDark: { color: theme.palette.info.dark },
  
  textBlack: { color: "#000000" },
  textBlack50: { color: "#00000077" },
  textWhite: { color: "#ffffff" },
  textWhite50: { color: "#ffffff77" },

  textReset: { color: "inherit" },

  textOpacity25: { opacity: "0.25" },
  textOpacity50: { opacity: "0.5" },
  textOpacity75: { opacity: "0.75" },
  textOpacity100: { opacity: "1" },

  // -- textLight: {},
  // -- textDark: {},
  // -- textBody: {},
  // -- textMuted: {},
  // -- textBodySecondary: {},
  // -- textBodyTertiary: {},
  // -- textBodyEmphasis: {},
  // -- textPrimaryEmphasis: {},
  // -- textSecondaryEmphasis: {},
  // -- textSuccessEmphasis: {},
  // -- textInfoEmphasis: {},
  // -- textWarningEmphasis: {},
  // -- textDangerEmphasis: {},
  // -- textLightEmphasis: {},
  // -- textDarkEmphasis: {},

  /**************************************************
   * Cursor
   *************************************************/
  cursorAlias: { cursor: "alias " },
  cursorAllScroll: { cursor: "all-scroll " },
  cursorAuto: { cursor: "auto" },
  cursorCell: { cursor: "cell " },
  cursorColResize: { cursor: "col-resize " },
  cursorContextMenu: { cursor: "context-menu" },
  cursorCopy: { cursor: "copy " },
  cursorCrosshair: { cursor: "crosshair " },
  cursorDefault: { cursor: "default " },
  cursorEwResize: { cursor: "ew-resize " },
  cursorEResize: { cursor: "e-resize " },
  cursorGrab: { cursor: "grab " },
  cursorGrabbing: { cursor: "grabbing " },
  cursorHelp: { cursor: "help " },
  cursorMove: { cursor: "move " },
  cursorNResize: { cursor: "n-resize " },
  cursorNeResize: { cursor: "ne-resize " },
  cursorNeswResize: { cursor: "nesw-resize" },
  cursorInitial: { cursor: "initial " },
  cursorNoDrop: { cursor: "no-drop " },
  cursorInherit: { cursor: "inherit" },
  cursorNone: { cursor: "none " },
  cursorNotAllowed: { cursor: "not-allowed " },
  cursorNsResize: { cursor: "ns-resize " },
  cursorNwResize: { cursor: "nw-resize " },
  cursorNwseResize: { cursor: "nwse-resize" },
  cursorPointer: { cursor: "pointer " },
  cursorProgress: { cursor: "progress " },
  cursorRowResize: { cursor: "row-resize " },
  cursorSResize: { cursor: "s-resize " },
  cursorSeResize: { cursor: "se-resize " },
  cursorSwResize: { cursor: "sw-resize " },
  cursorText: { cursor: "text " },
  cursorURL: { cursor: "URL " },
  cursorVerticalText: { cursor: "vertical-text" },
  cursorWResize: { cursor: "w-resize " },
  cursorWait: { cursor: "wait " },
  cursorZoomIn: { cursor: "zoom-in" },
  cursorZoomOut: { cursor: "zoom-out" },

  /**************************************************
   * Display
   *************************************************/
  displayInline: { display: "inline" },
  displayInlineBlock: { display: "inline-block" },
  displayBlock: { display: "block" },
  displayGrid: { display: "grid" },
  displayTable: { display: "table" },
  displayTableRow: { display: "table-row" },
  displayTableCell: { display: "table-cell" },
  displayFlex: { display: "flex" },
  displayInlineFlex: { display: "inline-flex" },
  displayNone: { display: "none" },

  /**************************************************
   * Flex
   *************************************************/
  flexDirectionRow: { flexDirection: "row" },
  flexDirectionColumn: { flexDirection: "column" },
  flexDirectionRowReverse: { flexDirection: "row-reverse" },
  flexDirectionColumnReverse: { flexDirection: "column-reverse" },
  flexFill: { flex: "1 1 auto" },
  flexGrow0: { flexGrow: "0" },
  flexGrow1: { flexGrow: "1" },
  flexShrink0: { flexShrink: "0" },
  flexShrink1: { flexShrink: "1" },
  flexWrapWrap: { flexWrap: "wrap" },
  flexWrapNoWrap: { flexWrap: "nowrap" },
  flexWrapWrapReverse: { flexWrap: "wrap-reverse" },

  /**************************************************
   * Float
   *************************************************/
  floatStart: { float: "left" },
  floatEnd: { float: "right" },
  floatNone: { float: "none" },

  /**************************************************
   * Interactions
   *************************************************/
  userSelectAll: {
    // -webkit-user-select: all !important;
    // -moz-user-select: all !important;
    userSelect: "all",
  },
  userSelectAuto: {
    // -webkit-user-select: auto !important;
    // -moz-user-select: auto !important;
    userSelect: "auto",
  },
  userSelectNone: {
    // -webkit-user-select: none !important;
    // -moz-user-select: none !important;
    userSelect: "none",
  },

  peNone: { pointerEvents: "none" },
  peAuto: { pointerEvents: "auto" },

  /**************************************************
   * Object Fit
   *************************************************/
  objectFitContain: {
    // -o-object-fit: contain !important;
    objectFit: "contain",
  },
  objectFitCover: {
    // -o-object-fit: cover !important;
    objectFit: "cover",
  },
  objectFitFill: {
    // -o-object-fit: fill !important;
    objectFit: "fill",
  },
  objectFitScale: {
    // -o-object-fit: scale-down !important;
    objectFit: "scale-down",
  },
  objectFitNone: {
    // -o-object-fit: none !important;
    objectFit: "none",
  },

  /**************************************************
   * Opacity
   *************************************************/
  opacity0: { opacity: "0.00" },
  opacity5: { opacity: "0.05" },
  opacity10: { opacity: "0.10" },
  opacity15: { opacity: "0.15" },
  opacity20: { opacity: "0.20" },
  opacity25: { opacity: "0.25" },
  opacity30: { opacity: "0.30" },
  opacity35: { opacity: "0.35" },
  opacity40: { opacity: "0.40" },
  opacity45: { opacity: "0.45" },
  opacity50: { opacity: "0.50" },
  opacity55: { opacity: "0.55" },
  opacity60: { opacity: "0.60" },
  opacity65: { opacity: "0.65" },
  opacity70: { opacity: "0.70" },
  opacity75: { opacity: "0.75" },
  opacity80: { opacity: "0.80" },
  opacity85: { opacity: "0.85" },
  opacity90: { opacity: "0.90" },
  opacity95: { opacity: "0.95" },
  opacity100: { opacity: "1.00" },

  /**************************************************
   * Overflow
   *************************************************/
  overflowAuto: { overflow: "auto" },
  overflowHidden: { overflow: "hidden" },
  overflowVisible: { overflow: "visible" },
  overflowScroll: { overflow: "scroll" },
  overflowXAuto: { overflowX: "auto" },
  overflowXHidden: { overflowX: "hidden" },
  overflowXVisible: { overflowX: "visible" },
  overflowXScroll: { overflowX: "scroll" },
  overflowYAuto: { overflowY: "auto" },
  overflowYHidden: { overflowY: "hidden" },
  overflowYVisible: { overflowY: "visible" },
  overflowYScroll: { overflowY: "scroll" },

  /**************************************************
   * Position
   *************************************************/
  positionStatic: { position: "static" },
  positionRelative: { position: "relative" },
  positionAbsolute: { position: "absolute" },
  positionFixed: { position: "fixed" },
  positionSticky: {
    // -- position: "-webkit-sticky",
    position: "sticky",
  },

  /**
   * @todo multiple value for same property
   */
  top0: { top: "0" },
  top50: { top: "50%" },
  top100: { top: "100%" },

  bottom0: { bottom: "0" },
  bottom50: { bottom: "50%" },
  bottom100: { bottom: "100%" },

  start0: { left: "0" },
  start50: { left: "50%" },
  start100: { left: "100%" },

  end0: { right: "0" },
  end50: { right: "50%" },
  end100: { right: "100%" },

  translateMiddle: { transform: "translate(-50%, -50%)" },
  translateMiddleX: { transform: "translateX(-50%)" },
  translateMiddleY: { transform: "translateY(-50%)" },

  fixedTop: {
    left: "0",
    position: "fixed",
    right: "0",
    top: "0",
    zIndex: "1030",
  },
  fixedBottom: {
    bottom: "0",
    left: "0",
    position: "fixed",
    right: "0",
    zIndex: "1030",
  },
  stickyTop: {
    // -- position: "-webkit-sticky",
    position: "sticky",
    top: "0",
    zIndex: "1020",
  },
  stickyBottom: {
    bottom: "0",
    // -- position: "-webkit-sticky",
    position: "sticky",
    zIndex: "1020",
  },

  /**************************************************
   * Shadows
   * @todo change color using theme
   *************************************************/
  shadow: {
    boxShadow: "0 0.5rem 1rem rgba(" + DEFAULT_SHADOW_COLOR_RGB + ", 0.15)" + IMPORTANT,
  },
  shadowSm: {
    boxShadow: "0 0.125rem 0.25rem rgba(" + DEFAULT_SHADOW_COLOR_RGB + ", 0.075)" + IMPORTANT,
  },
  shadowLg: {
    boxShadow: "0 1rem 3rem rgba(" + DEFAULT_SHADOW_COLOR_RGB + ", 0.175)" + IMPORTANT,
  },
  shadowNone: { boxShadow: "none" + IMPORTANT },

  /**************************************************
   * Sizing
   *************************************************/
  boxSizingBorderBox: { boxSizing: "border-box" },
  boxSizingContentBox: { boxSizing: "content-box" },
  boxSizingInherit: { boxSizing: "inherit" },
  boxSizingInitial: { boxSizing: "initial" },

  /*-------------------------------------------------
   * Width
   *-----------------------------------------------*/
  w25: { width: "25%" },
  w50: { width: "50%" },
  w75: { width: "75%" },
  w100: { width: "100%" },
  wAuto: { width: "auto" },
  maxW25: { maxWidth: "25%" },
  maxW50: { maxWidth: "50%" },
  maxW75: { maxWidth: "75%" },
  maxW100: { maxWidth: "100%" },
  minW25: { minWidth: "25%" },
  minW50: { minWidth: "50%" },
  minW75: { minWidth: "75%" },
  minW100: { minWidth: "100%" },
  vw25: { width: "25vw" },
  vw50: { width: "50vw" },
  vw75: { width: "75vw" },
  vw100: { width: "100vw" },
  maxVw25: { maxWidth: "25vw" },
  maxVw50: { maxWidth: "50vw" },
  maxVw75: { maxWidth: "75vw" },
  maxVw100: { maxWidth: "100vw" },
  minVw25: { minWidth: "25vw" },
  minVw50: { minWidth: "50vw" },
  minVw75: { minWidth: "75vw" },
  minVw100: { minWidth: "100vw" },

  /*-------------------------------------------------
   * Height
   *-----------------------------------------------*/
  h25: { height: "25%" },
  h50: { height: "50%" },
  h75: { height: "75%" },
  h100: { height: "100%" },
  hAuto: { height: "auto" },
maxH25: { maxHeight: "25%" },
  maxH50: { maxHeight: "50%" },
  maxH75: { maxHeight: "75%" },
  maxH100: { maxHeight: "100%" },
  minH25: { minHeight: "25%" },
  minH50: { minHeight: "50%" },
  minH75: { minHeight: "75%" },
  minH100: { minHeight: "100%" },
  vh25: { height: "25vh" },
  vh50: { height: "50vh" },
  vh75: { height: "75vh" },
  vh100: { height: "100vh" },
  maxVh25: { maxHeight: "25vh" },
  maxVh50: { maxHeight: "50vh" },
  maxVh75: { maxHeight: "75vh" },
  maxVh100: { maxHeight: "100vh" },
  minVh25: { minHeight: "25vh" },
  minVh50: { minHeight: "50vh" },
  minVh75: { minHeight: "75vh" },
  minVh100: { minHeight: "100vh" },

  /**************************************************
   * Spacing
   *************************************************/
  /*-------------------------------------------------
   * Padding
   *-----------------------------------------------*/

  p0: { padding: 0 + PX },
  p1: { padding: DEFAULT_PADDING + PX },
  p2: { padding: DEFAULT_PADDING * 2 + PX },
  p3: { padding: DEFAULT_PADDING * 3 + PX },
  p4: { padding: DEFAULT_PADDING * 4 + PX },
  p5: { padding: DEFAULT_PADDING * 5 + PX },

  pt0: { paddingTop: 0 + PX },
  pt1: { paddingTop: DEFAULT_PADDING + PX },
  pt2: { paddingTop: DEFAULT_PADDING * 2 + PX },
  pt3: { paddingTop: DEFAULT_PADDING * 3 + PX },
  pt4: { paddingTop: DEFAULT_PADDING * 4 + PX },
  pt5: { paddingTop: DEFAULT_PADDING * 5 + PX },

  pr0: { paddingRight: 0 + PX },
  pr1: { paddingRight: DEFAULT_PADDING + PX },
  pr2: { paddingRight: DEFAULT_PADDING * 2 + PX },
  pr3: { paddingRight: DEFAULT_PADDING * 3 + PX },
  pr4: { paddingRight: DEFAULT_PADDING * 4 + PX },
  pr5: { paddingRight: DEFAULT_PADDING * 5 + PX },

  pb0: { paddingBottom: 0 + PX },
  pb1: { paddingBottom: DEFAULT_PADDING + PX },
  pb2: { paddingBottom: DEFAULT_PADDING * 2 + PX },
  pb3: { paddingBottom: DEFAULT_PADDING * 3 + PX },
  pb4: { paddingBottom: DEFAULT_PADDING * 4 + PX },
  pb5: { paddingBottom: DEFAULT_PADDING * 5 + PX },

  pl0: { paddingLeft: 0 + PX },
  pl1: { paddingLeft: DEFAULT_PADDING + PX },
  pl2: { paddingLeft: DEFAULT_PADDING * 2 + PX },
  pl3: { paddingLeft: DEFAULT_PADDING * 3 + PX },
  pl4: { paddingLeft: DEFAULT_PADDING * 4 + PX },
  pl5: { paddingLeft: DEFAULT_PADDING * 5 + PX },

  px0: {
    paddingLeft: 0 + PX,
    paddingRight: 0 + PX,
  },
  px1: {
    paddingLeft: DEFAULT_PADDING * 1 + PX,
    paddingRight: DEFAULT_PADDING * 1 + PX,
  },
  px2: {
    paddingLeft: DEFAULT_PADDING * 2 + PX,
    paddingRight: DEFAULT_PADDING * 2 + PX,
  },
  px3: {
    paddingLeft: DEFAULT_PADDING * 3 + PX,
    paddingRight: DEFAULT_PADDING * 3 + PX,
  },
  px4: {
    paddingLeft: DEFAULT_PADDING * 4 + PX,
    paddingRight: DEFAULT_PADDING * 4 + PX,
  },
  px5: {
    paddingLeft: DEFAULT_PADDING * 5 + PX,
    paddingRight: DEFAULT_PADDING * 5 + PX,
  },

  py0: {
    paddingBottom: 0 + PX,
    paddingTop: 0 + PX,
  },
  py1: {
    paddingBottom: DEFAULT_PADDING * 1 + PX,
    paddingTop: DEFAULT_PADDING * 1 + PX,
  },
  py2: {
    paddingBottom: DEFAULT_PADDING * 2 + PX,
    paddingTop: DEFAULT_PADDING * 2 + PX,
  },
  py3: {
    paddingBottom: DEFAULT_PADDING * 3 + PX,
    paddingTop: DEFAULT_PADDING * 3 + PX,
  },
  py4: {
    paddingBottom: DEFAULT_PADDING * 4 + PX,
    paddingTop: DEFAULT_PADDING * 4 + PX,
  },
  py5: {
    paddingBottom: DEFAULT_PADDING * 5 + PX,
    paddingTop: DEFAULT_PADDING * 5 + PX,
  },

  /*-------------------------------------------------
   * Margin
   *-----------------------------------------------*/
  m0: { margin: 0 + IMPORTANT },
  m1: { margin: DEFAULT_MARGIN + PX + IMPORTANT },
  m2: { margin: DEFAULT_MARGIN * 2 + PX + IMPORTANT },
  m3: { margin: DEFAULT_MARGIN * 3 + PX + IMPORTANT },
  m4: { margin: DEFAULT_MARGIN * 4 + PX + IMPORTANT },
  m5: { margin: DEFAULT_MARGIN * 5 + PX + IMPORTANT },
  mAuto: { margin: "auto" + IMPORTANT },

  mt0: { marginTop: 0 + IMPORTANT },
  mt1: { marginTop: DEFAULT_MARGIN + PX + IMPORTANT },
  mt2: { marginTop: DEFAULT_MARGIN * 2 + PX + IMPORTANT },
  mt3: { marginTop: DEFAULT_MARGIN * 3 + PX + IMPORTANT },
  mt4: { marginTop: DEFAULT_MARGIN * 4 + PX + IMPORTANT },
  mt5: { marginTop: DEFAULT_MARGIN * 5 + PX + IMPORTANT },
  mtAuto: { marginTop: "auto" + IMPORTANT },

  mr0: { marginRight: 0 + IMPORTANT },
  mr1: { marginRight: DEFAULT_MARGIN + PX + IMPORTANT },
  mr2: { marginRight: DEFAULT_MARGIN * 2 + PX + IMPORTANT },
  mr3: { marginRight: DEFAULT_MARGIN * 3 + PX + IMPORTANT },
  mr4: { marginRight: DEFAULT_MARGIN * 4 + PX + IMPORTANT },
  mr5: { marginRight: DEFAULT_MARGIN * 5 + PX + IMPORTANT },
  mrAuto: { marginRight: "auto" + IMPORTANT },

  mb0: { marginBottom: 0 + IMPORTANT },
  mb1: { marginBottom: DEFAULT_MARGIN + PX + IMPORTANT },
  mb2: { marginBottom: DEFAULT_MARGIN * 2 + PX + IMPORTANT },
  mb3: { marginBottom: DEFAULT_MARGIN * 3 + PX + IMPORTANT },
  mb4: { marginBottom: DEFAULT_MARGIN * 4 + PX + IMPORTANT },
  mb5: { marginBottom: DEFAULT_MARGIN * 5 + PX + IMPORTANT },
  mbAuto: { marginBottom: "auto" + IMPORTANT },

  ml0: { marginLeft: 0 + IMPORTANT },
  ml1: { marginLeft: DEFAULT_MARGIN + PX + IMPORTANT },
  ml2: { marginLeft: DEFAULT_MARGIN * 2 + PX + IMPORTANT },
  ml3: { marginLeft: DEFAULT_MARGIN * 3 + PX + IMPORTANT },
  ml4: { marginLeft: DEFAULT_MARGIN * 4 + PX + IMPORTANT },
  ml5: { marginLeft: DEFAULT_MARGIN * 5 + PX + IMPORTANT },
  mlAuto: { marginLeft: "auto" + IMPORTANT },

  mx0: { marginLeft: 0, marginRight: 0 + IMPORTANT },
  mx1: {
    marginLeft: DEFAULT_MARGIN * 1 + PX + IMPORTANT,
    marginRight: DEFAULT_MARGIN * 1 + PX + IMPORTANT,
  },
  mx2: {
    marginLeft: DEFAULT_MARGIN * 2 + PX + IMPORTANT,
    marginRight: DEFAULT_MARGIN * 2 + PX + IMPORTANT,
  },
  mx3: {
    marginLeft: DEFAULT_MARGIN * 3 + PX + IMPORTANT,
    marginRight: DEFAULT_MARGIN * 3 + PX + IMPORTANT,
  },
  mx4: {
    marginLeft: DEFAULT_MARGIN * 4 + PX + IMPORTANT,
    marginRight: DEFAULT_MARGIN * 4 + PX + IMPORTANT,
  },
  mx5: {
    marginLeft: DEFAULT_MARGIN * 5 + PX + IMPORTANT,
    marginRight: DEFAULT_MARGIN * 5 + PX + IMPORTANT,
  },
  mxAuto: { marginLeft: "auto", marginRight: "auto" + IMPORTANT },

  my0: { marginBottom: 0, marginTop: 0 + IMPORTANT },
  my1: {
    marginBottom: DEFAULT_MARGIN * 1 + PX + IMPORTANT,
    marginTop: DEFAULT_MARGIN * 1 + PX + IMPORTANT,
  },
  my2: {
    marginBottom: DEFAULT_MARGIN * 2 + PX + IMPORTANT,
    marginTop: DEFAULT_MARGIN * 2 + PX + IMPORTANT,
  },
  my3: {
    marginBottom: DEFAULT_MARGIN * 3 + PX + IMPORTANT,
    marginTop: DEFAULT_MARGIN * 3 + PX + IMPORTANT,
  },
  my4: {
    marginBottom: DEFAULT_MARGIN * 4 + PX + IMPORTANT,
    marginTop: DEFAULT_MARGIN * 4 + PX + IMPORTANT,
  },
  my5: {
    marginBottom: DEFAULT_MARGIN * 5 + PX + IMPORTANT,
    marginTop: DEFAULT_MARGIN * 5 + PX + IMPORTANT,
  },
  myAuto: { marginBottom: "auto" + IMPORTANT, marginTop: "auto" + IMPORTANT },

  mN1: { margin: DEFAULT_MARGIN * -1 + PX + IMPORTANT },
  mN2: { margin: DEFAULT_MARGIN * -2 + PX + IMPORTANT },
  mN3: { margin: DEFAULT_MARGIN * -3 + PX + IMPORTANT },
  mN4: { margin: DEFAULT_MARGIN * -4 + PX + IMPORTANT },
  mN5: { margin: DEFAULT_MARGIN * -5 + PX + IMPORTANT },

  mtN1: { marginTop: DEFAULT_MARGIN * -1 + PX + IMPORTANT },
  mtN2: { marginTop: DEFAULT_MARGIN * -2 + PX + IMPORTANT },
  mtN3: { marginTop: DEFAULT_MARGIN * -3 + PX + IMPORTANT },
  mtN4: { marginTop: DEFAULT_MARGIN * -4 + PX + IMPORTANT },
  mtN5: { marginTop: DEFAULT_MARGIN * -5 + PX + IMPORTANT },

  mrN1: { marginRight: DEFAULT_MARGIN * -1 + PX + IMPORTANT },
  mrN2: { marginRight: DEFAULT_MARGIN * -2 + PX + IMPORTANT },
  mrN3: { marginRight: DEFAULT_MARGIN * -3 + PX + IMPORTANT },
  mrN4: { marginRight: DEFAULT_MARGIN * -4 + PX + IMPORTANT },
  mrN5: { marginRight: DEFAULT_MARGIN * -5 + PX + IMPORTANT },

  mbN1: { marginBottom: DEFAULT_MARGIN * -1 + PX + IMPORTANT },
  mbN2: { marginBottom: DEFAULT_MARGIN * -2 + PX + IMPORTANT },
  mbN3: { marginBottom: DEFAULT_MARGIN * -3 + PX + IMPORTANT },
  mbN4: { marginBottom: DEFAULT_MARGIN * -4 + PX + IMPORTANT },
  mbN5: { marginBottom: DEFAULT_MARGIN * -5 + PX + IMPORTANT },

  mlN1: { marginLeft: DEFAULT_MARGIN * -1 + PX + IMPORTANT },
  mlN2: { marginLeft: DEFAULT_MARGIN * -2 + PX + IMPORTANT },
  mlN3: { marginLeft: DEFAULT_MARGIN * -3 + PX + IMPORTANT },
  mlN4: { marginLeft: DEFAULT_MARGIN * -4 + PX + IMPORTANT },
  mlN5: { marginLeft: DEFAULT_MARGIN * -5 + PX + IMPORTANT },

  mxN1: {
    marginLeft: DEFAULT_MARGIN * -1 + PX + IMPORTANT,
    marginRight: DEFAULT_MARGIN * -1 + PX + IMPORTANT,
  },
  mxN2: {
    marginLeft: DEFAULT_MARGIN * -2 + PX + IMPORTANT,
    marginRight: DEFAULT_MARGIN * -2 + PX + IMPORTANT,
  },
  mxN3: {
    marginLeft: DEFAULT_MARGIN * -3 + PX + IMPORTANT,
    marginRight: DEFAULT_MARGIN * -3 + PX + IMPORTANT,
  },
  mxN4: {
    marginLeft: DEFAULT_MARGIN * -4 + PX + IMPORTANT,
    marginRight: DEFAULT_MARGIN * -4 + PX + IMPORTANT,
  },

  mxN5: {
    marginLeft: DEFAULT_MARGIN * -5 + PX + IMPORTANT,
    marginRight: DEFAULT_MARGIN * -5 + PX + IMPORTANT,
  },

  myN1: {
    marginBottom: DEFAULT_MARGIN * -1 + PX + IMPORTANT,
    marginTop: DEFAULT_MARGIN * -1 + PX + IMPORTANT,
  },
  myN2: {
    marginBottom: DEFAULT_MARGIN * -2 + PX + IMPORTANT,
    marginTop: DEFAULT_MARGIN * -2 + PX + IMPORTANT,
  },
  myN3: {
    marginBottom: DEFAULT_MARGIN * -3 + PX + IMPORTANT,
    marginTop: DEFAULT_MARGIN * -3 + PX + IMPORTANT,
  },
  myN4: {
    marginBottom: DEFAULT_MARGIN * -4 + PX + IMPORTANT,
    marginTop: DEFAULT_MARGIN * -4 + PX + IMPORTANT,
  },
  myN5: {
    marginBottom: DEFAULT_MARGIN * -5 + PX + IMPORTANT,
    marginTop: DEFAULT_MARGIN * -5 + PX + IMPORTANT,
  },

  /*-------------------------------------------------
   * Gap
   *-----------------------------------------------*/
  gap0: { gap: "0" },
  gap1: { gap: DEFAULT_SPACING * 1 },
  gap2: { gap: DEFAULT_SPACING * 2 },
  gap3: { gap: DEFAULT_SPACING * 3 },
  gap4: { gap: DEFAULT_SPACING * 4 },
  gap5: { gap: DEFAULT_SPACING * 5 },

  rowGap0: { rowGap: "0" },
  rowGap1: { rowGap: DEFAULT_SPACING * 1 },
  rowGap2: { rowGap: DEFAULT_SPACING * 2 },
  rowGap3: { rowGap: DEFAULT_SPACING * 3 },
  rowGap4: { rowGap: DEFAULT_SPACING * 4 },
  rowGap5: { rowGap: DEFAULT_SPACING * 5 },

  // -moz-column-gap: 0 !important;
  colGap0: { columnGap: "0" },
  colGap1: { columnGap: DEFAULT_SPACING * 1 },
  colGap2: { columnGap: DEFAULT_SPACING * 2 },
  colGap3: { columnGap: DEFAULT_SPACING * 3 },
  colGap4: { columnGap: DEFAULT_SPACING * 4 },
  colGap5: { columnGap: DEFAULT_SPACING * 5 },

  /**************************************************
   * Text
   *************************************************/
  textStart: { textAlign: "left" + IMPORTANT },
  textEnd: { textAlign: "right" + IMPORTANT },
  textCenter: { textAlign: "center" + IMPORTANT },
  textJustify: { textAlign: "justify" + IMPORTANT },

  textWeightLighter: { fontWeight: "lighter" + IMPORTANT },
  textWeightLight: { fontWeight: "300" + IMPORTANT },
  textWeightNormal: { fontWeight: "400" + IMPORTANT },
  textWeightMedium: { fontWeight: "500" + IMPORTANT },
  textWeightSemibold: { fontWeight: "600" + IMPORTANT },
  textWeightBold: { fontWeight: "700" + IMPORTANT },
  textWeightBolder: { fontWeight: "bolder" + IMPORTANT },

  textStyleItalic: { fontStyle: "italic" + IMPORTANT },
  textStyleNormal: { fontStyle: "normal" + IMPORTANT },

  textDecorationNone: { textDecoration: "none" + IMPORTANT },
  textDecorationUnderline: { textDecoration: "underline" + IMPORTANT },
  textDecorationLineThrough: { textDecoration: "line-through" + IMPORTANT },

  textLowercase: { textTransform: "lowercase" + IMPORTANT },
  textUppercase: { textTransform: "uppercase" + IMPORTANT },
  textCapitalize: { textTransform: "capitalize" + IMPORTANT },

  textWrap: { whiteSpace: "normal" + IMPORTANT },
  textNowrap: { whiteSpace: "nowrap" + IMPORTANT },
  textBreak: {
    wordBreak: "break-word" + IMPORTANT,
    wordWrap: "break-word" + IMPORTANT,
  },
  textTruncate: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  /**************************************************
   * Vertical Align
   *************************************************/
  alignBaseline: { verticalAlign: "baseline" },
  alignTop: { verticalAlign: "top" },
  alignMiddle: { verticalAlign: "middle" },
  alignBottom: { verticalAlign: "bottom" },
  alignTextBottom: { verticalAlign: "text-bottom" },
  alignTextTop: { verticalAlign: "text-top" },

  /**************************************************
   * Visibility
   *************************************************/
  visible: { visibility: "visible" },
invisible: { visibility: "hidden" },

  /**************************************************
   * zindex
   *************************************************/
  zN1: { zIndex: "-1" },
  z0: { zIndex: "0" },
  z1: { zIndex: "1" },
  z2: { zIndex: "2" },
  z3: { zIndex: "3" },
};
