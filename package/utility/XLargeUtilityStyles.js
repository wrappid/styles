/* eslint-disable */
import {
  DEFAULT_MARGIN,
  DEFAULT_PADDING,
  DEFAULT_SPACING,
  IMPORTANT,
} from "./DefaultUtilityStyles";

export const X_LARGE_MARGIN = DEFAULT_MARGIN;
export const X_LARGE_PADDING = DEFAULT_PADDING;
export const X_LARGE_SPACING = DEFAULT_SPACING;

export const xLargeUtilityStyles = {
  /**************************************************
   * Alignment
   *************************************************/
  xlAlignItemsStart: { display: "flex", alignItems: "flex-start" },
  xlAlignItemsEnd: { display: "flex", alignItems: "flex-end" },
  xlAlignItemsCenter: { display: "flex", alignItems: "center" },
  xlAlignItemsBaseline: { display: "flex", alignItems: "baseline" },
  xlAlignItemsStretch: { display: "flex", alignItems: "stretch" },

  xlAlignContentStart: { display: "flex", alignContent: "flex-start" },
  xlAlignContentEnd: { display: "flex", alignContent: "flex-end" },
  xlAlignContentCenter: { display: "flex", alignContent: "center" },
  xlAlignContentBetween: { display: "flex", alignContent: "space-between" },
  xlAlignContentAround: { display: "flex", alignContent: "space-around" },
  xlAlignContentStretch: { display: "flex", alignContent: "stretch" },

  xlAlignSelfAuto: { display: "flex", alignSelf: "auto" },
  xlAlignSelfStart: { display: "flex", alignSelf: "flex-start" },
  xlAlignSelfEnd: { display: "flex", alignSelf: "flex-end" },
  xlAlignSelfCenter: { display: "flex", alignSelf: "center" },
  xlAlignSelfBaseline: { display: "flex", alignSelf: "baseline" },
  xlAlignSelfStretch: { display: "flex", alignSelf: "stretch" },

  xlJustifyContentCenter: { display: "flex", justifyContent: "center" },
  xlJustifyContentFlexStart: { display: "flex", justifyContent: "flex-start" },
  xlJustifyContentFlexEnd: { display: "flex", justifyContent: "flex-end" },
  xlJustifyContentSpaceBetween: { display: "flex", justifyContent: "space-between" },
  xlJustifyContentSpaceAround: { display: "flex", justifyContent: "space-around" },
  xlJustifyContentSpaceEvenly: { display: "flex", justifyContent: "space-evenly" },

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
  xlDisplayInline: { display: "inline" },
  xlDisplayInlineBlock: { display: "inline-block" },
  xlDisplayBlock: { display: "block" },
  xlDisplayGrid: { display: "grid" },
  xlDisplayTable: { display: "table" },
  xlDisplayTableRow: { display: "table-row" },
  xlDisplayTableCell: { display: "table-cell" },
  xlDisplayFlex: { display: "flex" },
  xlDisplayInlineFlex: { display: "inline-flex" },
  xlDisplayNone: { display: "none" },

  /**************************************************
   * Flex
   *************************************************/
  xlFlexDirectionRow: { flexDirection: "row" },
  xlFlexDirectionColumn: { flexDirection: "column" },
  xlFlexDirectionRowReverse: { flexDirection: "row-reverse" },
  xlFlexDirectionColumnReverse: { flexDirection: "column-reverse" },
  xlFlexFill: { flex: "1 1 auto" },
  xlFlexGrow0: { flexGrow: "0" },
  xlFlexGrow1: { flexGrow: "1" },
  xlFlexShrink0: { flexShrink: "0" },
  xlFlexShrink1: { flexShrink: "1" },
  xlFlexWrapWrap: { flexWrap: "wrap" },
  xlFlexWrapNoWrap: { flexWrap: "nowrap" },
  xlFlexWrapWrapReverse: { flexWrap: "wrap-reverse" },

  /**************************************************
   * Float
   *************************************************/
  xlFloatStart: { float: "left" },
  xlFloatEnd: { float: "right" },
  xlFloatNone: { float: "none" },

  /**************************************************
   * Interactions
   *************************************************/
  //NO SCREEN SIZE SPECIFIC STYLE AVAILABLE

  /**************************************************
   * Object Fit
   *************************************************/
  xlObjectFitContain: {
    // -o-object-fit: contain !important;
    objectFit: "contain",
  },

  xlObjectFitCover: {
    // -o-object-fit: cover !important;
    objectFit: "cover",
  },

  xlObjectFitFill: {
    // -o-object-fit: fill !important;
    objectFit: "fill",
  },

  xlObjectFitScale: {
    // -o-object-fit: scale-down !important;
    objectFit: "scale-down",
  },

  xlObjectFitNone: {
    // -o-object-fit: none !important;
    objectFit: "none",
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
  //NO SCREEN SIZE SPECIFIC STYLE AVAILABLE

  /**************************************************
   * Spacing
   *************************************************/
  /*-------------------------------------------------
   * Padding
   *-----------------------------------------------*/
  xlP0: { padding: 0 },
  xlP1: { padding: X_LARGE_PADDING },
  xlP2: { padding: X_LARGE_PADDING * 2 },
  xlP3: { padding: X_LARGE_PADDING * 3 },
  xlP4: { padding: X_LARGE_PADDING * 4 },
  xlP5: { padding: X_LARGE_PADDING * 5 },

  xlPt0: { paddingTop: 0 },
  xlPt1: { paddingTop: X_LARGE_PADDING },
  xlPt2: { paddingTop: X_LARGE_PADDING * 2 },
  xlPt3: { paddingTop: X_LARGE_PADDING * 3 },
  xlPt4: { paddingTop: X_LARGE_PADDING * 4 },
  xlPt5: { paddingTop: X_LARGE_PADDING * 5 },

  xlPr0: { paddingRight: 0 },
  xlPr1: { paddingRight: X_LARGE_PADDING },
  xlPr2: { paddingRight: X_LARGE_PADDING * 2 },
  xlPr3: { paddingRight: X_LARGE_PADDING * 3 },
  xlPr4: { paddingRight: X_LARGE_PADDING * 4 },
  xlPr5: { paddingRight: X_LARGE_PADDING * 5 },

  xlPb0: { paddingBottom: 0 },
  xlPb1: { paddingBottom: X_LARGE_PADDING },
  xlPb2: { paddingBottom: X_LARGE_PADDING * 2 },
  xlPb3: { paddingBottom: X_LARGE_PADDING * 3 },
  xlPb4: { paddingBottom: X_LARGE_PADDING * 4 },
  xlPb5: { paddingBottom: X_LARGE_PADDING * 5 },

  xlPl0: { paddingLeft: 0 },
  xlPl1: { paddingLeft: X_LARGE_PADDING },
  xlPl2: { paddingLeft: X_LARGE_PADDING * 2 },
  xlPl3: { paddingLeft: X_LARGE_PADDING * 3 },
  xlPl4: { paddingLeft: X_LARGE_PADDING * 4 },
  xlPl5: { paddingLeft: X_LARGE_PADDING * 5 },

  xlPx0: { paddingLeft: 0, paddingRight: 0 },
  xlPx1: {
    paddingLeft: X_LARGE_PADDING * 1,
    paddingRight: X_LARGE_PADDING * 1,
  },
  xlPx2: {
    paddingLeft: X_LARGE_PADDING * 2,
    paddingRight: X_LARGE_PADDING * 2,
  },
  xlPx3: {
    paddingLeft: X_LARGE_PADDING * 3,
    paddingRight: X_LARGE_PADDING * 3,
  },
  xlPx4: {
    paddingLeft: X_LARGE_PADDING * 4,
    paddingRight: X_LARGE_PADDING * 4,
  },
  xlPx5: {
    paddingLeft: X_LARGE_PADDING * 5,
    paddingRight: X_LARGE_PADDING * 5,
  },

  xlPy0: { paddingTop: 0, paddingBottom: 0 },
  xlPy1: {
    paddingTop: X_LARGE_PADDING * 1,
    paddingBottom: X_LARGE_PADDING * 1,
  },
  xlPy2: {
    paddingTop: X_LARGE_PADDING * 2,
    paddingBottom: X_LARGE_PADDING * 2,
  },
  xlPy3: {
    paddingTop: X_LARGE_PADDING * 3,
    paddingBottom: X_LARGE_PADDING * 3,
  },
  xlPy4: {
    paddingTop: X_LARGE_PADDING * 4,
    paddingBottom: X_LARGE_PADDING * 4,
  },
  xlPy5: {
    paddingTop: X_LARGE_PADDING * 5,
    paddingBottom: X_LARGE_PADDING * 5,
  },

  /*-------------------------------------------------
   * Margin
   *-----------------------------------------------*/
  xlM0: { margin: 0 },
  xlM1: { margin: X_LARGE_MARGIN },
  xlM2: { margin: X_LARGE_MARGIN * 2 },
  xlM3: { margin: X_LARGE_MARGIN * 3 },
  xlM4: { margin: X_LARGE_MARGIN * 4 },
  xlM5: { margin: X_LARGE_MARGIN * 5 },
  xlMAuto: { margin: "auto" },

  xlMt0: { marginTop: 0 },
  xlMt1: { marginTop: X_LARGE_MARGIN },
  xlMt2: { marginTop: X_LARGE_MARGIN * 2 },
  xlMt3: { marginTop: X_LARGE_MARGIN * 3 },
  xlMt4: { marginTop: X_LARGE_MARGIN * 4 },
  xlMt5: { marginTop: X_LARGE_MARGIN * 5 },
  xlMtAuto: { marginTop: "auto" },

  xlMr0: { marginRight: 0 },
  xlMr1: { marginRight: X_LARGE_MARGIN },
  xlMr2: { marginRight: X_LARGE_MARGIN * 2 },
  xlMr3: { marginRight: X_LARGE_MARGIN * 3 },
  xlMr4: { marginRight: X_LARGE_MARGIN * 4 },
  xlMr5: { marginRight: X_LARGE_MARGIN * 5 },
  xlMrAuto: { marginRight: "auto" },

  xlMb0: { marginBottom: 0 },
  xlMb1: { marginBottom: X_LARGE_MARGIN },
  xlMb2: { marginBottom: X_LARGE_MARGIN * 2 },
  xlMb3: { marginBottom: X_LARGE_MARGIN * 3 },
  xlMb4: { marginBottom: X_LARGE_MARGIN * 4 },
  xlMb5: { marginBottom: X_LARGE_MARGIN * 5 },
  xlMbAuto: { marginBottom: "auto" },

  xlMl0: { marginLeft: 0 },
  xlMl1: { marginLeft: X_LARGE_MARGIN },
  xlMl2: { marginLeft: X_LARGE_MARGIN * 2 },
  xlMl3: { marginLeft: X_LARGE_MARGIN * 3 },
  xlMl4: { marginLeft: X_LARGE_MARGIN * 4 },
  xlMl5: { marginLeft: X_LARGE_MARGIN * 5 },
  xlMlAuto: { marginLeft: "auto" },

  xlMx0: { marginLeft: 0, marginRight: 0 },
  xlMx1: {
    marginLeft: X_LARGE_MARGIN * 1,
    marginRight: X_LARGE_MARGIN * 1,
  },
  xlMx2: {
    marginLeft: X_LARGE_MARGIN * 2,
    marginRight: X_LARGE_MARGIN * 2,
  },
  xlMx3: {
    marginLeft: X_LARGE_MARGIN * 3,
    marginRight: X_LARGE_MARGIN * 3,
  },
  xlMx4: {
    marginLeft: X_LARGE_MARGIN * 4,
    marginRight: X_LARGE_MARGIN * 4,
  },
  xlMx5: {
    marginLeft: X_LARGE_MARGIN * 5,
    marginRight: X_LARGE_MARGIN * 5,
  },
  xlMxAuto: { marginLeft: "auto", marginRight: "auto" },

  xlMy0: { marginTop: 0, marginBottom: 0 },
  xlMy1: {
    marginTop: X_LARGE_MARGIN * 1,
    marginBottom: X_LARGE_MARGIN * 1,
  },
  xlMy2: {
    marginTop: X_LARGE_MARGIN * 2,
    marginBottom: X_LARGE_MARGIN * 2,
  },
  xlMy3: {
    marginTop: X_LARGE_MARGIN * 3,
    marginBottom: X_LARGE_MARGIN * 3,
  },
  xlMy4: {
    marginTop: X_LARGE_MARGIN * 4,
    marginBottom: X_LARGE_MARGIN * 4,
  },
  xlMy5: {
    marginTop: X_LARGE_MARGIN * 5,
    marginBottom: X_LARGE_MARGIN * 5,
  },
  xlMyAuto: { marginTop: "auto", marginBottom: "auto" },

  xlMN1: { margin: X_LARGE_MARGIN * -1 },
  xlMN2: { margin: X_LARGE_MARGIN * -2 },
  xlMN3: { margin: X_LARGE_MARGIN * -3 },
  xlMN4: { margin: X_LARGE_MARGIN * -4 },
  xlMN5: { margin: X_LARGE_MARGIN * -5 },

  xlMtN1: { marginTop: X_LARGE_MARGIN * -1 },
  xlMtN2: { marginTop: X_LARGE_MARGIN * -2 },
  xlMtN3: { marginTop: X_LARGE_MARGIN * -3 },
  xlMtN4: { marginTop: X_LARGE_MARGIN * -4 },
  xlMtN5: { marginTop: X_LARGE_MARGIN * -5 },

  xlMrN1: { marginRight: X_LARGE_MARGIN * -1 },
  xlMrN2: { marginRight: X_LARGE_MARGIN * -2 },
  xlMrN3: { marginRight: X_LARGE_MARGIN * -3 },
  xlMrN4: { marginRight: X_LARGE_MARGIN * -4 },
  xlMrN5: { marginRight: X_LARGE_MARGIN * -5 },

  xlMbN1: { marginBottom: X_LARGE_MARGIN * -1 },
  xlMbN2: { marginBottom: X_LARGE_MARGIN * -2 },
  xlMbN3: { marginBottom: X_LARGE_MARGIN * -3 },
  xlMbN4: { marginBottom: X_LARGE_MARGIN * -4 },
  xlMbN5: { marginBottom: X_LARGE_MARGIN * -5 },

  xlMlN1: { marginLeft: X_LARGE_MARGIN * -1 },
  xlMlN2: { marginLeft: X_LARGE_MARGIN * -2 },
  xlMlN3: { marginLeft: X_LARGE_MARGIN * -3 },
  xlMlN4: { marginLeft: X_LARGE_MARGIN * -4 },
  xlMlN5: { marginLeft: X_LARGE_MARGIN * -5 },

  xlMxN1: {
    marginLeft: X_LARGE_MARGIN * -1,
    marginRight: X_LARGE_MARGIN * -1,
  },
  xlMxN2: {
    marginLeft: X_LARGE_MARGIN * -2,
    marginRight: X_LARGE_MARGIN * -2,
  },
  xlMxN3: {
    marginLeft: X_LARGE_MARGIN * -3,
    marginRight: X_LARGE_MARGIN * -3,
  },
  xlMxN4: {
    marginLeft: X_LARGE_MARGIN * -4,
    marginRight: X_LARGE_MARGIN * -4,
  },
  xlMxN5: {
    marginLeft: X_LARGE_MARGIN * -5,
    marginRight: X_LARGE_MARGIN * -5,
  },

  xlMyN1: {
    marginTop: X_LARGE_MARGIN * -1,
    marginBottom: X_LARGE_MARGIN * -1,
  },
  xlMyN2: {
    marginTop: X_LARGE_MARGIN * -2,
    marginBottom: X_LARGE_MARGIN * -2,
  },
  xlMyN3: {
    marginTop: X_LARGE_MARGIN * -3,
    marginBottom: X_LARGE_MARGIN * -3,
  },
  xlMyN4: {
    marginTop: X_LARGE_MARGIN * -4,
    marginBottom: X_LARGE_MARGIN * -4,
  },
  xlMyN5: {
    marginTop: X_LARGE_MARGIN * -5,
    marginBottom: X_LARGE_MARGIN * -5,
  },

  /*-------------------------------------------------
   * Gap
   *-----------------------------------------------*/
  xlGap0: { gap: "0" },
  xlGap1: { gap: X_LARGE_SPACING * 1 },
  xlGap2: { gap: X_LARGE_SPACING * 2 },
  xlGap3: { gap: X_LARGE_SPACING * 3 },
  xlGap4: { gap: X_LARGE_SPACING * 4 },
  xlGap5: { gap: X_LARGE_SPACING * 5 },

  xlRowGap0: { rowGap: "0" },
  xlRowGap1: { rowGap: X_LARGE_SPACING * 1 },
  xlRowGap2: { rowGap: X_LARGE_SPACING * 2 },
  xlRowGap3: { rowGap: X_LARGE_SPACING * 3 },
  xlRowGap4: { rowGap: X_LARGE_SPACING * 4 },
  xlRowGap5: { rowGap: X_LARGE_SPACING * 5 },

  xlColGap0: { columnGap: "0" },
  xlColGap1: { columnGap: X_LARGE_SPACING * 1 },
  xlColGap2: { columnGap: X_LARGE_SPACING * 2 },
  xlColGap3: { columnGap: X_LARGE_SPACING * 3 },
  xlColGap4: { columnGap: X_LARGE_SPACING * 4 },
  xlColGap5: { columnGap: X_LARGE_SPACING * 5 },

  /**************************************************
   * Text
   *************************************************/
  xlTextStart: { textAlign: "left" + IMPORTANT },
  xlTextEnd: { textAlign: "right" + IMPORTANT },
  xlTextCenter: { textAlign: "center" + IMPORTANT },
  xlTextJustify: { textAlign: "justify" + IMPORTANT },

  //NO OTHER SCREEN SIZE SPECIFIC STYLE NEEDED

  /**************************************************
   * Vertical Align
   *************************************************/
  //NO SCREEN SIZE SPECIFIC STYLE AVAILABLE

  /**************************************************
   * Visibility
   *************************************************/
  //NO SCREEN SIZE SPECIFIC STYLE AVAILABLE

  /**************************************************
   * zindex
   *************************************************/
  //NO SCREEN SIZE SPECIFIC STYLE AVAILABLE
};
