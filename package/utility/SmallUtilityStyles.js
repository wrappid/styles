import { DEFAULT_MARGIN, DEFAULT_PADDING, IMPORTANT } from "./DefaultUtilityStyles";

export const SMALL_MARGIN = DEFAULT_MARGIN;
export const SMALL_PADDING = DEFAULT_PADDING;

export const smallUtilityStyles = {
  /**************************************************
   * Background
   *************************************************/
  //NO SCREEN SIZE SPECIFIC STYLE AVAILABLE

  /**************************************************
   * Border
   *************************************************/
  //NO SCREEN SIZE SPECIFIC STYLE AVAILABLE

  /**************************************************
   * Color
   *************************************************/
  //NO SCREEN SIZE SPECIFIC STYLE AVAILABLE

  /**************************************************
   * Display
   *************************************************/
  smDisplayInline: { display: "inline" + IMPORTANT },
  smDisplayInlineBlock: { display: "inline-block" + IMPORTANT },
  smDisplayBlock: { display: "block" + IMPORTANT },
  smDisplayGrid: { display: "grid" + IMPORTANT },
  smDisplayTable: { display: "table" + IMPORTANT },
  smDisplayTableRow: { display: "table-row" + IMPORTANT },
  smDisplayTableCell: { display: "table-cell" + IMPORTANT },
  smDisplayFlex: { display: "flex" + IMPORTANT },
  smDisplayInlineFlex: { display: "inline-flex" + IMPORTANT },
  smDisplayNone: { display: "none" + IMPORTANT },

  /**************************************************
   * Flex
   *************************************************/
  smFlexDirectionRow: { flexDirection: "row" + IMPORTANT },
  smFlexDirectionColumn: { flexDirection: "column" + IMPORTANT },
  smFlexDirectionRowReverse: { flexDirection: "row-reverse" + IMPORTANT },
  smFlexDirectionColumnReverse: { flexDirection: "column-reverse" + IMPORTANT },
  smFlexFill: { flex: "1 1 auto" + IMPORTANT },
  smFlexGrow0: { flexGrow: "0" + IMPORTANT },
  smFlexGrow1: { flexGrow: "1" + IMPORTANT },
  smFlexShrink0: { flexShrink: "0" + IMPORTANT },
  smFlexShrink1: { flexShrink: "1" + IMPORTANT },
  smFlexWrapWrap: { flexWrap: "wrap" + IMPORTANT },
  smFlexWrapNoWrap: { flexWrap: "nowrap" + IMPORTANT },
  smFlexWrapWrapReverse: { flexWrap: "wrap-reverse" + IMPORTANT },

  /**************************************************
   * Float
   *************************************************/
  smFloatStart: { float: "left" + IMPORTANT },
  smFloatEnd: { float: "right" + IMPORTANT },
  smFloatNone: { float: "none" + IMPORTANT },

  /**************************************************
   * Interactions
   *************************************************/
  //NO SCREEN SIZE SPECIFIC STYLE AVAILABLE

  /**************************************************
   * Object Fit
   *************************************************/
  smObjectFitContain: {
    // -o-object-fit: contain !important;
    objectFit: "contain" + IMPORTANT,
  },

  smObjectFitCover: {
    // -o-object-fit: cover !important;
    objectFit: "cover" + IMPORTANT,
  },

  smObjectFitFill: {
    // -o-object-fit: fill !important;
    objectFit: "fill" + IMPORTANT,
  },

  smObjectFitScale: {
    // -o-object-fit: scale-down !important;
    objectFit: "scale-down" + IMPORTANT,
  },

  smObjectFitNone: {
    // -o-object-fit: none !important;
    objectFit: "none" + IMPORTANT,
  },

  /**************************************************
   * Opacity
   *************************************************/
  //NO SCREEN SIZE SPECIFIC STYLE AVAILABLE

  /**************************************************
   * Overflow
   *************************************************/
  //NO SCREEN SIZE SPECIFIC STYLE AVAILABLE

  /**************************************************
   * Position
   *************************************************/
  //NO SCREEN SIZE SPECIFIC STYLE AVAILABLE

  /**************************************************
   * Shadows
   *************************************************/
  //NO SCREEN SIZE SPECIFIC STYLE AVAILABLE

  /**************************************************
   * Sizing
   *************************************************/

  /**************************************************
   * Spacing
   *************************************************/

  /**************************************************
   * Text
   *************************************************/
  textStart: { textAlign: "left !important" },
  textEnd: { textAlign: "right !important" },
  textCenter: { textAlign: "center !important" },
  textJustify: { textAlign: "justify !important" },

  textWeightBold: { fontWeight: "bold" },
  textWeightLight: { fontWeight: "lighter" },
  textWeightNormal: { fontWeight: "normal" },

  textDecorationNone: { textDecoration: "none !important" },
  textDecorationUnderline: { textDecoration: "underline !important" },
  textDecorationLineThrough: { textDecoration: "line-through !important" },

  textLowercase: { textTransform: "lowercase !important" },
  textUppercase: { textTransform: "uppercase !important" },
  textCapitalize: { textTransform: "capitalize !important" },

  textWrap: { whiteSpace: "normal !important" },
  textNowrap: { whiteSpace: "nowrap !important" },
  textBreak: { wordWrap: "break-word !important", wordBreak: "break-word !important" },
  textTruncate: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },

  /**************************************************
   * Vertical Align
   *************************************************/

  /**************************************************
   * Visibility
   *************************************************/

  /**************************************************
   * zindex
   *************************************************/

  // ------------------------------------------
  //  Alignments
  // ------------------------------------------
  alignItemsStart: { alignItems: "flex-start !important" },
  alignItemsEnd: { alignItems: "flex-end !important" },
  alignItemsCenter: { alignItems: "center !important" },
  alignItemsBaseline: { alignItems: "baseline !important" },
  alignItemsStretch: { alignItems: "stretch !important" },

  alignContentStart: { alignContent: "flex-start !important" },
  alignContentEnd: { alignContent: "flex-end !important" },
  alignContentCenter: { alignContent: "center !important" },
  alignContentBetween: { alignContent: "space-between !important" },
  alignContentAround: { alignContent: "space-around !important" },
  alignContentStretch: { alignContent: "stretch !important" },

  alignSelfAuto: { alignSelf: "auto !important" },
  alignSelfStart: { alignSelf: "flex-start !important" },
  alignSelfEnd: { alignSelf: "flex-end !important" },
  alignSelfCenter: { alignSelf: "center !important" },
  alignSelfBaseline: { alignSelf: "baseline !important" },
  alignSelfStretch: { alignSelf: "stretch !important" },

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
  p1: { padding: SMALL_PADDING },
  p2: { padding: SMALL_PADDING * 2 },
  p3: { padding: SMALL_PADDING * 3 },
  p4: { padding: SMALL_PADDING * 4 },
  p5: { padding: SMALL_PADDING * 5 },

  pt0: { paddingTop: 0 },
  pt1: { paddingTop: SMALL_PADDING },
  pt2: { paddingTop: SMALL_PADDING * 2 },
  pt3: { paddingTop: SMALL_PADDING * 3 },
  pt4: { paddingTop: SMALL_PADDING * 4 },
  pt5: { paddingTop: SMALL_PADDING * 5 },

  pr0: { paddingRight: 0 },
  pr1: { paddingRight: SMALL_PADDING },
  pr2: { paddingRight: SMALL_PADDING * 2 },
  pr3: { paddingRight: SMALL_PADDING * 3 },
  pr4: { paddingRight: SMALL_PADDING * 4 },
  pr5: { paddingRight: SMALL_PADDING * 5 },

  pb0: { paddingBottom: 0 },
  pb1: { paddingBottom: SMALL_PADDING },
  pb2: { paddingBottom: SMALL_PADDING * 2 },
  pb3: { paddingBottom: SMALL_PADDING * 3 },
  pb4: { paddingBottom: SMALL_PADDING * 4 },
  pb5: { paddingBottom: SMALL_PADDING * 5 },

  pl0: { paddingLeft: 0 },
  pl1: { paddingLeft: SMALL_PADDING },
  pl2: { paddingLeft: SMALL_PADDING * 2 },
  pl3: { paddingLeft: SMALL_PADDING * 3 },
  pl4: { paddingLeft: SMALL_PADDING * 4 },
  pl5: { paddingLeft: SMALL_PADDING * 5 },

  px0: { paddingLeft: 0, paddingRight: 0 },
  px1: { paddingLeft: SMALL_PADDING * 1, paddingRight: SMALL_PADDING * 1 },
  px2: { paddingLeft: SMALL_PADDING * 2, paddingRight: SMALL_PADDING * 2 },
  px3: { paddingLeft: SMALL_PADDING * 3, paddingRight: SMALL_PADDING * 3 },
  px4: { paddingLeft: SMALL_PADDING * 4, paddingRight: SMALL_PADDING * 4 },
  px5: { paddingLeft: SMALL_PADDING * 5, paddingRight: SMALL_PADDING * 5 },

  py0: { paddingTop: 0, paddingBottom: 0 },
  py1: { paddingTop: SMALL_PADDING * 1, paddingBottom: SMALL_PADDING * 1 },
  py2: { paddingTop: SMALL_PADDING * 2, paddingBottom: SMALL_PADDING * 2 },
  py3: { paddingTop: SMALL_PADDING * 3, paddingBottom: SMALL_PADDING * 3 },
  py4: { paddingTop: SMALL_PADDING * 4, paddingBottom: SMALL_PADDING * 4 },
  py5: { paddingTop: SMALL_PADDING * 5, paddingBottom: SMALL_PADDING * 5 },

  /**************************************************
   * Margin
   *************************************************/
  m0: { margin: 0 },
  m1: { margin: SMALL_MARGIN },
  m2: { margin: SMALL_MARGIN * 2 },
  m3: { margin: SMALL_MARGIN * 3 },
  m4: { margin: SMALL_MARGIN * 4 },
  m5: { margin: SMALL_MARGIN * 5 },
  mAuto: { margin: "auto" },

  mt0: { marginTop: 0 },
  mt1: { marginTop: SMALL_MARGIN },
  mt2: { marginTop: SMALL_MARGIN * 2 },
  mt3: { marginTop: SMALL_MARGIN * 3 },
  mt4: { marginTop: SMALL_MARGIN * 4 },
  mt5: { marginTop: SMALL_MARGIN * 5 },
  mtAuto: { marginTop: "auto" },

  mr0: { marginRight: 0 },
  mr1: { marginRight: SMALL_MARGIN },
  mr2: { marginRight: SMALL_MARGIN * 2 },
  mr3: { marginRight: SMALL_MARGIN * 3 },
  mr4: { marginRight: SMALL_MARGIN * 4 },
  mr5: { marginRight: SMALL_MARGIN * 5 },
  mrAuto: { marginRight: "auto" },

  mb0: { marginBottom: 0 },
  mb1: { marginBottom: SMALL_MARGIN },
  mb2: { marginBottom: SMALL_MARGIN * 2 },
  mb3: { marginBottom: SMALL_MARGIN * 3 },
  mb4: { marginBottom: SMALL_MARGIN * 4 },
  mb5: { marginBottom: SMALL_MARGIN * 5 },
  mbAuto: { marginBottom: "auto" },

  ml0: { marginLeft: 0 },
  ml1: { marginLeft: SMALL_MARGIN },
  ml2: { marginLeft: SMALL_MARGIN * 2 },
  ml3: { marginLeft: SMALL_MARGIN * 3 },
  ml4: { marginLeft: SMALL_MARGIN * 4 },
  ml5: { marginLeft: SMALL_MARGIN * 5 },
  mlAuto: { marginLeft: "auto" },

  mx0: { marginLeft: 0, marginRight: 0 },
  mx1: { marginLeft: SMALL_MARGIN * 1, marginRight: SMALL_MARGIN * 1 },
  mx2: { marginLeft: SMALL_MARGIN * 2, marginRight: SMALL_MARGIN * 2 },
  mx3: { marginLeft: SMALL_MARGIN * 3, marginRight: SMALL_MARGIN * 3 },
  mx4: { marginLeft: SMALL_MARGIN * 4, marginRight: SMALL_MARGIN * 4 },
  mx5: { marginLeft: SMALL_MARGIN * 5, marginRight: SMALL_MARGIN * 5 },
  mxAuto: { marginLeft: "auto", marginRight: "auto" },

  my0: { marginTop: 0, marginBottom: 0 },
  my1: { marginTop: SMALL_MARGIN * 1, marginBottom: SMALL_MARGIN * 1 },
  my2: { marginTop: SMALL_MARGIN * 2, marginBottom: SMALL_MARGIN * 2 },
  my3: { marginTop: SMALL_MARGIN * 3, marginBottom: SMALL_MARGIN * 3 },
  my4: { marginTop: SMALL_MARGIN * 4, marginBottom: SMALL_MARGIN * 4 },
  my5: { marginTop: SMALL_MARGIN * 5, marginBottom: SMALL_MARGIN * 5 },
  myAuto: { marginTop: "auto", marginBottom: "auto" },
};
