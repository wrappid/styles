import { theme } from "../theme/theme";

const DEFAULT_BORDER_WIDTH = 1;
const DEFAULT_BORDER_STYLE = "solid";
const DEFAULT_BORDER_COLOR = "black";
const DEFAULT_BORDER =
  DEFAULT_BORDER_WIDTH + "px " + DEFAULT_BORDER_STYLE + " " + DEFAULT_BORDER_COLOR; /* + IMPORTANT*/

const DEFAULT_SHADOW_COLOR = "black";
const DEFAULT_SHADOW_COLOR_RGB = "0,0,0";

export const IMPORTANT = " !important";
export const DEFAULT_MARGIN = 8;
export const DEFAULT_PADDING = 8;

export const defaultUtilityStyles = {
  /**************************************************
   * Background
   *************************************************/
  bgPrimary: { backgroundColor: theme.palette.primary.main },
  bgPrimaryLight: { backgroundColor: theme.palette.primary.light },
  bgPrimaryDark: { backgroundColor: theme.palette.primary.dark },

  bgSecondary: { backgroundColor: theme.palette.secondary.main },
  bgSecondaryLight: { backgroundColor: theme.palette.secondary.light },
  bgSecondaryDark: { backgroundColor: theme.palette.secondary.dark },

  bgSuccess: { backgroundColor: theme.palette.success.main },
  bgSuccessLight: { backgroundColor: theme.palette.success.light },
  bgSuccessDark: { backgroundColor: theme.palette.success.dark },

  bgError: { backgroundColor: theme.palette.error.main },
  bgErrorLight: { backgroundColor: theme.palette.error.light },
  bgErrorDark: { backgroundColor: theme.palette.error.dark },

  bgWarning: { backgroundColor: theme.palette.warning.main },
  bgWarningLight: { backgroundColor: theme.palette.warning.light },
  bgWarningDark: { backgroundColor: theme.palette.warning.dark },

  bgInfo: { backgroundColor: theme.palette.info.main },
  bgInfoLight: { backgroundColor: theme.palette.info.light },
  bgInfoDark: { backgroundColor: theme.palette.info.dark },

  bgBlack: { backgroundColor: "black" },
  bgWhite: { backgroundColor: "white" },
  bgTransparent: { backgroundColor: "transparent" },

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
  borderInfoLight: { borderColor: theme.palette.info.light },
  borderInfoDark: { borderColor: theme.palette.info.dark },

  borderBlack: { borderColor: "black" },
  borderWhite: { borderColor: "white" },

  border1: { borderWidth: DEFAULT_BORDER_WIDTH },
  border2: { borderWidth: DEFAULT_BORDER_WIDTH * 2 },
  border3: { borderWidth: DEFAULT_BORDER_WIDTH * 3 },
  border4: { borderWidth: DEFAULT_BORDER_WIDTH * 4 },
  border5: { borderWidth: DEFAULT_BORDER_WIDTH * 5 },

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

  textLight: {},
  textDark: {},
  textBody: {},
  textMuted: {},
  textBodySecondary: {},
  textBodyTertiary: {},
  textBodyEmphasis: {},

  textReset: { color: "inherit" + IMPORTANT },

  textOpacity25: { opacity: "0.25" },
  textOpacity50: { opacity: "0.5" },
  textOpacity75: { opacity: "0.75" },
  textOpacity100: { opacity: "1" },

  textPrimaryEmphasis: {},
  textSecondaryEmphasis: {},
  textSuccessEmphasis: {},
  textInfoEmphasis: {},
  textWarningEmphasis: {},
  textDangerEmphasis: {},
  textLightEmphasis: {},
  textDarkEmphasis: {},

  /**************************************************
   * Display
   *************************************************/
  displayInline: { display: "inline" + IMPORTANT },
  displayInlineBlock: { display: "inline-block" + IMPORTANT },
  displayBlock: { display: "block" + IMPORTANT },
  displayGrid: { display: "grid" + IMPORTANT },
  displayTable: { display: "table" + IMPORTANT },
  displayTableRow: { display: "table-row" + IMPORTANT },
  displayTableCell: { display: "table-cell" + IMPORTANT },
  displayFlex: { display: "flex" + IMPORTANT },
  displayInlineFlex: { display: "inline-flex" + IMPORTANT },
  displayNone: { display: "none" + IMPORTANT },

  /**************************************************
   * Flex
   *************************************************/
  flexDirectionRow: { flexDirection: "row" + IMPORTANT },
  flexDirectionColumn: { flexDirection: "column" + IMPORTANT },
  flexDirectionRowReverse: { flexDirection: "row-reverse" + IMPORTANT },
  flexDirectionColumnReverse: { flexDirection: "column-reverse" + IMPORTANT },
  flexFill: { flex: "1 1 auto" + IMPORTANT },
  flexGrow0: { flexGrow: "0" + IMPORTANT },
  flexGrow1: { flexGrow: "1" + IMPORTANT },
  flexShrink0: { flexShrink: "0" + IMPORTANT },
  flexShrink1: { flexShrink: "1" + IMPORTANT },
  flexWrapWrap: { flexWrap: "wrap" + IMPORTANT },
  flexWrapNoWrap: { flexWrap: "nowrap" + IMPORTANT },
  flexWrapWrapReverse: { flexWrap: "wrap-reverse" + IMPORTANT },

  /**************************************************
   * Float
   *************************************************/
  floatStart: { float: "left" + IMPORTANT },
  floatEnd: { float: "right" + IMPORTANT },
  floatNone: { float: "none" + IMPORTANT },

  /**************************************************
   * Interactions
   *************************************************/
  userSelectAll: {
    // -webkit-user-select: all !important;
    // -moz-user-select: all !important;
    userSelect: "all" + IMPORTANT,
  },
  userSelectAuto: {
    // -webkit-user-select: auto !important;
    // -moz-user-select: auto !important;
    userSelect: "auto" + IMPORTANT,
  },
  userSelectNone: {
    // -webkit-user-select: none !important;
    // -moz-user-select: none !important;
    userSelect: "none" + IMPORTANT,
  },

  peNone: { pointerEvents: "none" + IMPORTANT },
  peAuto: { pointerEvents: "auto" + IMPORTANT },

  /**************************************************
   * Object Fit
   *************************************************/
  objectFitContain: {
    // -o-object-fit: contain !important;
    objectFit: "contain" + IMPORTANT,
  },

  objectFitCover: {
    // -o-object-fit: cover !important;
    objectFit: "cover" + IMPORTANT,
  },

  objectFitFill: {
    // -o-object-fit: fill !important;
    objectFit: "fill" + IMPORTANT,
  },

  objectFitScale: {
    // -o-object-fit: scale-down !important;
    objectFit: "scale-down" + IMPORTANT,
  },

  objectFitNone: {
    // -o-object-fit: none !important;
    objectFit: "none" + IMPORTANT,
  },

  /**************************************************
   * Opacity
   *************************************************/
  opacity0: { opacity: "0.00" + IMPORTANT },
  opacity5: { opacity: "0.05" + IMPORTANT },
  opacity10: { opacity: "0.10" + IMPORTANT },
  opacity15: { opacity: "0.15" + IMPORTANT },
  opacity20: { opacity: "0.20" + IMPORTANT },
  opacity25: { opacity: "0.25" + IMPORTANT },
  opacity30: { opacity: "0.30" + IMPORTANT },
  opacity35: { opacity: "0.35" + IMPORTANT },
  opacity40: { opacity: "0.40" + IMPORTANT },
  opacity45: { opacity: "0.45" + IMPORTANT },
  opacity50: { opacity: "0.50" + IMPORTANT },
  opacity55: { opacity: "0.55" + IMPORTANT },
  opacity60: { opacity: "0.60" + IMPORTANT },
  opacity65: { opacity: "0.65" + IMPORTANT },
  opacity70: { opacity: "0.70" + IMPORTANT },
  opacity75: { opacity: "0.75" + IMPORTANT },
  opacity80: { opacity: "0.80" + IMPORTANT },
  opacity85: { opacity: "0.85" + IMPORTANT },
  opacity90: { opacity: "0.90" + IMPORTANT },
  opacity95: { opacity: "0.95" + IMPORTANT },
  opacity100: { opacity: "1.00" + IMPORTANT },

  /**************************************************
   * Overflow
   *************************************************/
  overflowAuto: { overflow: "auto" + IMPORTANT },
  overflowHidden: { overflow: "hidden" + IMPORTANT },
  overflowVisible: { overflow: "visible" + IMPORTANT },
  overflowScroll: { overflow: "scroll" + IMPORTANT },
  overflowXAuto: { overflowX: "auto" + IMPORTANT },
  overflowXHidden: { overflowX: "hidden" + IMPORTANT },
  overflowXVisible: { overflowX: "visible" + IMPORTANT },
  overflowXScroll: { overflowX: "scroll" + IMPORTANT },
  overflowYAuto: { overflowY: "auto" + IMPORTANT },
  overflowYHidden: { overflowY: "hidden" + IMPORTANT },
  overflowYVisible: { overflowY: "visible" + IMPORTANT },
  overflowYScroll: { overflowY: "scroll" + IMPORTANT },

  /**************************************************
   * Position
   *************************************************/
  positionStatic: { position: "static" + IMPORTANT },
  positionRelative: { position: "relative" + IMPORTANT },
  positionAbsolute: { position: "absolute" + IMPORTANT },
  positionFixed: { position: "fixed" + IMPORTANT },
  /**
   * @todo multiple value for same property
   */
  positionSticky: { position: "-webkit-sticky" + IMPORTANT, position: "sticky" + IMPORTANT },

  top0: { top: "0" + IMPORTANT },
  top50: { top: "50%" + IMPORTANT },
  top100: { top: "100%" + IMPORTANT },

  bottom0: { bottom: "0" + IMPORTANT },
  bottom50: { bottom: "50%" + IMPORTANT },
  bottom100: { bottom: "100%" + IMPORTANT },

  start0: { left: "0" + IMPORTANT },
  start50: { left: "50%" + IMPORTANT },
  start100: { left: "100%" + IMPORTANT },

  end0: { right: "0" + IMPORTANT },
  end50: { right: "50%" + IMPORTANT },
  end100: { right: "100%" + IMPORTANT },

  translateMiddle: { transform: "translate(-50%, -50%)" + IMPORTANT },
  translateMiddleX: { transform: "translateX(-50%)" + IMPORTANT },
  translateMiddleY: { transform: "translateY(-50%)" + IMPORTANT },

  fixedTop: {
    position: "fixed",
    top: "0",
    right: "0",
    left: "0",
    zIndex: "1030",
  },

  fixedBottom: {
    position: "fixed",
    right: "0",
    bottom: "0",
    left: "0",
    zIndex: "1030",
  },

  stickyTop: {
    position: "-webkit-sticky",
    position: "sticky",
    top: "0",
    zIndex: "1020",
  },

  stickyBottom: {
    position: "-webkit-sticky",
    position: "sticky",
    bottom: "0",
    zIndex: "1020",
  },

  /**************************************************
   * Shadows
   * @todo change color using theme
   *************************************************/
  shadow: { boxShadow: "0 0.5rem 1rem rgba(" + DEFAULT_SHADOW_COLOR_RGB + ", 0.15)" + IMPORTANT },
  shadowSm: {
    boxShadow: "0 0.125rem 0.25rem rgba(" + DEFAULT_SHADOW_COLOR_RGB + ", 0.075)" + IMPORTANT,
  },
  shadowLg: { boxShadow: "0 1rem 3rem rgba(" + DEFAULT_SHADOW_COLOR_RGB + ", 0.175)" + IMPORTANT },
  shadowNone: { boxShadow: "none" + IMPORTANT },

  /**************************************************
   * Sizing
   *************************************************/

  /**************************************************
   * Spacing
   *************************************************/

  /**************************************************
   * Text
   *************************************************/
  textStart: { textAlign: "left" + IMPORTANT },
  textEnd: { textAlign: "right" + IMPORTANT },
  textCenter: { textAlign: "center" + IMPORTANT },
  textJustify: { textAlign: "justify" + IMPORTANT },

  textWeightBold: { fontWeight: "bold" },
  textWeightLight: { fontWeight: "lighter" },
  textWeightNormal: { fontWeight: "normal" },

  textDecorationNone: { textDecoration: "none" + IMPORTANT },
  textDecorationUnderline: { textDecoration: "underline" + IMPORTANT },
  textDecorationLineThrough: { textDecoration: "line-through" + IMPORTANT },

  textLowercase: { textTransform: "lowercase" + IMPORTANT },
  textUppercase: { textTransform: "uppercase" + IMPORTANT },
  textCapitalize: { textTransform: "capitalize" + IMPORTANT },

  textWrap: { whiteSpace: "normal" + IMPORTANT },
  textNowrap: { whiteSpace: "nowrap" + IMPORTANT },
  textBreak: { wordWrap: "break-word" + IMPORTANT, wordBreak: "break-word" + IMPORTANT },
  textTruncate: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },

  /**************************************************
   * Vertical Align
   *************************************************/
  alignBaseline: { verticalAlign: "baseline" + IMPORTANT },
  alignTop: { verticalAlign: "top" + IMPORTANT },
  alignMiddle: { verticalAlign: "middle" + IMPORTANT },
  alignBottom: { verticalAlign: "bottom" + IMPORTANT },
  alignTextBottom: { verticalAlign: "text-bottom" + IMPORTANT },
  alignTextTop: { verticalAlign: "text-top" + IMPORTANT },

  /**************************************************
   * Visibility
   *************************************************/

  /**************************************************
   * zindex
   *************************************************/

  // ------------------------------------------
  //  Alignments
  // ------------------------------------------
  alignItemsStart: { alignItems: "flex-start" + IMPORTANT },
  alignItemsEnd: { alignItems: "flex-end" + IMPORTANT },
  alignItemsCenter: { alignItems: "center" + IMPORTANT },
  alignItemsBaseline: { alignItems: "baseline" + IMPORTANT },
  alignItemsStretch: { alignItems: "stretch" + IMPORTANT },

  alignContentStart: { alignContent: "flex-start" + IMPORTANT },
  alignContentEnd: { alignContent: "flex-end" + IMPORTANT },
  alignContentCenter: { alignContent: "center" + IMPORTANT },
  alignContentBetween: { alignContent: "space-between" + IMPORTANT },
  alignContentAround: { alignContent: "space-around" + IMPORTANT },
  alignContentStretch: { alignContent: "stretch" + IMPORTANT },

  alignSelfAuto: { alignSelf: "auto" + IMPORTANT },
  alignSelfStart: { alignSelf: "flex-start" + IMPORTANT },
  alignSelfEnd: { alignSelf: "flex-end" + IMPORTANT },
  alignSelfCenter: { alignSelf: "center" + IMPORTANT },
  alignSelfBaseline: { alignSelf: "baseline" + IMPORTANT },
  alignSelfStretch: { alignSelf: "stretch" + IMPORTANT },

  justifyContentCenter: { display: "flex", justifyContent: "center" },
  justifyContentFlexStart: { display: "flex", justifyContent: "flex-start" },
  justifyContentFlexEnd: { display: "flex", justifyContent: "flex-end" },
  justifyContentSpaceBetween: { display: "flex", justifyContent: "space-between" },
  justifyContentSpaceAround: { display: "flex", justifyContent: "space-around" },
  justifyContentSpaceEvenly: { display: "flex", justifyContent: "space-evenly" },

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
   * Height
   *************************************************/
  h25: { height: "25%" },
  h50: { height: "50%" },
  h75: { height: "75%" },
  h100: { height: "100%" },
  hAuto: { height: "auto" },

  /**************************************************
   * Width
   *************************************************/
  w25: { width: "25%" },
  w50: { width: "50%" },
  w75: { width: "75%" },
  w100: { width: "100%" },
  wAuto: { width: "auto" },

  /**************************************************
   * Padding
   *************************************************/
  p0: { padding: 0 },
  p1: { padding: DEFAULT_PADDING },
  p2: { padding: DEFAULT_PADDING * 2 },
  p3: { padding: DEFAULT_PADDING * 3 },
  p4: { padding: DEFAULT_PADDING * 4 },
  p5: { padding: DEFAULT_PADDING * 5 },

  pt0: { paddingTop: 0 },
  pt1: { paddingTop: DEFAULT_PADDING },
  pt2: { paddingTop: DEFAULT_PADDING * 2 },
  pt3: { paddingTop: DEFAULT_PADDING * 3 },
  pt4: { paddingTop: DEFAULT_PADDING * 4 },
  pt5: { paddingTop: DEFAULT_PADDING * 5 },

  pr0: { paddingRight: 0 },
  pr1: { paddingRight: DEFAULT_PADDING },
  pr2: { paddingRight: DEFAULT_PADDING * 2 },
  pr3: { paddingRight: DEFAULT_PADDING * 3 },
  pr4: { paddingRight: DEFAULT_PADDING * 4 },
  pr5: { paddingRight: DEFAULT_PADDING * 5 },

  pb0: { paddingBottom: 0 },
  pb1: { paddingBottom: DEFAULT_PADDING },
  pb2: { paddingBottom: DEFAULT_PADDING * 2 },
  pb3: { paddingBottom: DEFAULT_PADDING * 3 },
  pb4: { paddingBottom: DEFAULT_PADDING * 4 },
  pb5: { paddingBottom: DEFAULT_PADDING * 5 },

  pl0: { paddingLeft: 0 },
  pl1: { paddingLeft: DEFAULT_PADDING },
  pl2: { paddingLeft: DEFAULT_PADDING * 2 },
  pl3: { paddingLeft: DEFAULT_PADDING * 3 },
  pl4: { paddingLeft: DEFAULT_PADDING * 4 },
  pl5: { paddingLeft: DEFAULT_PADDING * 5 },

  px0: { paddingLeft: 0, paddingRight: 0 },
  px1: { paddingLeft: DEFAULT_PADDING * 1, paddingRight: DEFAULT_PADDING * 1 },
  px2: { paddingLeft: DEFAULT_PADDING * 2, paddingRight: DEFAULT_PADDING * 2 },
  px3: { paddingLeft: DEFAULT_PADDING * 3, paddingRight: DEFAULT_PADDING * 3 },
  px4: { paddingLeft: DEFAULT_PADDING * 4, paddingRight: DEFAULT_PADDING * 4 },
  px5: { paddingLeft: DEFAULT_PADDING * 5, paddingRight: DEFAULT_PADDING * 5 },

  py0: { paddingTop: 0, paddingBottom: 0 },
  py1: { paddingTop: DEFAULT_PADDING * 1, paddingBottom: DEFAULT_PADDING * 1 },
  py2: { paddingTop: DEFAULT_PADDING * 2, paddingBottom: DEFAULT_PADDING * 2 },
  py3: { paddingTop: DEFAULT_PADDING * 3, paddingBottom: DEFAULT_PADDING * 3 },
  py4: { paddingTop: DEFAULT_PADDING * 4, paddingBottom: DEFAULT_PADDING * 4 },
  py5: { paddingTop: DEFAULT_PADDING * 5, paddingBottom: DEFAULT_PADDING * 5 },

  /**************************************************
   * Margin
   *************************************************/
  m0: { margin: 0 },
  m1: { margin: DEFAULT_MARGIN },
  m2: { margin: DEFAULT_MARGIN * 2 },
  m3: { margin: DEFAULT_MARGIN * 3 },
  m4: { margin: DEFAULT_MARGIN * 4 },
  m5: { margin: DEFAULT_MARGIN * 5 },
  mAuto: { margin: "auto" },

  mt0: { marginTop: 0 },
  mt1: { marginTop: DEFAULT_MARGIN },
  mt2: { marginTop: DEFAULT_MARGIN * 2 },
  mt3: { marginTop: DEFAULT_MARGIN * 3 },
  mt4: { marginTop: DEFAULT_MARGIN * 4 },
  mt5: { marginTop: DEFAULT_MARGIN * 5 },
  mtAuto: { marginTop: "auto" },

  mr0: { marginRight: 0 },
  mr1: { marginRight: DEFAULT_MARGIN },
  mr2: { marginRight: DEFAULT_MARGIN * 2 },
  mr3: { marginRight: DEFAULT_MARGIN * 3 },
  mr4: { marginRight: DEFAULT_MARGIN * 4 },
  mr5: { marginRight: DEFAULT_MARGIN * 5 },
  mrAuto: { marginRight: "auto" },

  mb0: { marginBottom: 0 },
  mb1: { marginBottom: DEFAULT_MARGIN },
  mb2: { marginBottom: DEFAULT_MARGIN * 2 },
  mb3: { marginBottom: DEFAULT_MARGIN * 3 },
  mb4: { marginBottom: DEFAULT_MARGIN * 4 },
  mb5: { marginBottom: DEFAULT_MARGIN * 5 },
  mbAuto: { marginBottom: "auto" },

  ml0: { marginLeft: 0 },
  ml1: { marginLeft: DEFAULT_MARGIN },
  ml2: { marginLeft: DEFAULT_MARGIN * 2 },
  ml3: { marginLeft: DEFAULT_MARGIN * 3 },
  ml4: { marginLeft: DEFAULT_MARGIN * 4 },
  ml5: { marginLeft: DEFAULT_MARGIN * 5 },
  mlAuto: { marginLeft: "auto" },

  mx0: { marginLeft: 0, marginRight: 0 },
  mx1: { marginLeft: DEFAULT_MARGIN * 1, marginRight: DEFAULT_MARGIN * 1 },
  mx2: { marginLeft: DEFAULT_MARGIN * 2, marginRight: DEFAULT_MARGIN * 2 },
  mx3: { marginLeft: DEFAULT_MARGIN * 3, marginRight: DEFAULT_MARGIN * 3 },
  mx4: { marginLeft: DEFAULT_MARGIN * 4, marginRight: DEFAULT_MARGIN * 4 },
  mx5: { marginLeft: DEFAULT_MARGIN * 5, marginRight: DEFAULT_MARGIN * 5 },
  mxAuto: { marginLeft: "auto", marginRight: "auto" },

  my0: { marginTop: 0, marginBottom: 0 },
  my1: { marginTop: DEFAULT_MARGIN * 1, marginBottom: DEFAULT_MARGIN * 1 },
  my2: { marginTop: DEFAULT_MARGIN * 2, marginBottom: DEFAULT_MARGIN * 2 },
  my3: { marginTop: DEFAULT_MARGIN * 3, marginBottom: DEFAULT_MARGIN * 3 },
  my4: { marginTop: DEFAULT_MARGIN * 4, marginBottom: DEFAULT_MARGIN * 4 },
  my5: { marginTop: DEFAULT_MARGIN * 5, marginBottom: DEFAULT_MARGIN * 5 },
  myAuto: { marginTop: "auto", marginBottom: "auto" },

  mN1: { margin: DEFAULT_MARGIN * -1 },
  mN2: { margin: DEFAULT_MARGIN * -2 },
  mN3: { margin: DEFAULT_MARGIN * -3 },
  mN4: { margin: DEFAULT_MARGIN * -4 },
  mN5: { margin: DEFAULT_MARGIN * -5 },

  mtN1: { marginTop: DEFAULT_MARGIN * -1 },
  mtN2: { marginTop: DEFAULT_MARGIN * -2 },
  mtN3: { marginTop: DEFAULT_MARGIN * -3 },
  mtN4: { marginTop: DEFAULT_MARGIN * -4 },
  mtN5: { marginTop: DEFAULT_MARGIN * -5 },

  mrN1: { marginRight: DEFAULT_MARGIN * -1 },
  mrN2: { marginRight: DEFAULT_MARGIN * -2 },
  mrN3: { marginRight: DEFAULT_MARGIN * -3 },
  mrN4: { marginRight: DEFAULT_MARGIN * -4 },
  mrN5: { marginRight: DEFAULT_MARGIN * -5 },

  mbN1: { marginBottom: DEFAULT_MARGIN * -1 },
  mbN2: { marginBottom: DEFAULT_MARGIN * -2 },
  mbN3: { marginBottom: DEFAULT_MARGIN * -3 },
  mbN4: { marginBottom: DEFAULT_MARGIN * -4 },
  mbN5: { marginBottom: DEFAULT_MARGIN * -5 },

  mlN1: { marginLeft: DEFAULT_MARGIN * -1 },
  mlN2: { marginLeft: DEFAULT_MARGIN * -2 },
  mlN3: { marginLeft: DEFAULT_MARGIN * -3 },
  mlN4: { marginLeft: DEFAULT_MARGIN * -4 },
  mlN5: { marginLeft: DEFAULT_MARGIN * -5 },

  mxN1: { marginLeft: DEFAULT_MARGIN * -1, marginRight: DEFAULT_MARGIN * -1 },
  mxN2: { marginLeft: DEFAULT_MARGIN * -2, marginRight: DEFAULT_MARGIN * -2 },
  mxN3: { marginLeft: DEFAULT_MARGIN * -3, marginRight: DEFAULT_MARGIN * -3 },
  mxN4: { marginLeft: DEFAULT_MARGIN * -4, marginRight: DEFAULT_MARGIN * -4 },
  mxN5: { marginLeft: DEFAULT_MARGIN * -5, marginRight: DEFAULT_MARGIN * -5 },

  myN1: { marginTop: DEFAULT_MARGIN * -1, marginBottom: DEFAULT_MARGIN * -1 },
  myN2: { marginTop: DEFAULT_MARGIN * -2, marginBottom: DEFAULT_MARGIN * -2 },
  myN3: { marginTop: DEFAULT_MARGIN * -3, marginBottom: DEFAULT_MARGIN * -3 },
  myN4: { marginTop: DEFAULT_MARGIN * -4, marginBottom: DEFAULT_MARGIN * -4 },
  myN5: { marginTop: DEFAULT_MARGIN * -5, marginBottom: DEFAULT_MARGIN * -5 },
};
