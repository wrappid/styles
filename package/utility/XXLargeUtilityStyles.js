/* eslint-disable */
import {
  DEFAULT_MARGIN,
  DEFAULT_PADDING,
  DEFAULT_SPACING,
  IMPORTANT,
} from "./DefaultUtilityStyles";

export const XX_LARGE_MARGIN = DEFAULT_MARGIN;
export const XX_LARGE_PADDING = DEFAULT_PADDING;
export const XX_LARGE_SPACING = DEFAULT_SPACING;

export const xXLargeUtilityStyles = {
  /**************************************************
   * Alignment
   *************************************************/
  xxlAlignItemsStart: { display: "flex", alignItems: "flex-start" },
  xxlAlignItemsEnd: { display: "flex", alignItems: "flex-end" },
  xxlAlignItemsCenter: { display: "flex", alignItems: "center" },
  xxlAlignItemsBaseline: { display: "flex", alignItems: "baseline" },
  xxlAlignItemsStretch: { display: "flex", alignItems: "stretch" },

  xxlAlignContentStart: { display: "flex", alignContent: "flex-start" },
  xxlAlignContentEnd: { display: "flex", alignContent: "flex-end" },
  xxlAlignContentCenter: { display: "flex", alignContent: "center" },
  xxlAlignContentBetween: { display: "flex", alignContent: "space-between" },
  xxlAlignContentAround: { display: "flex", alignContent: "space-around" },
  xxlAlignContentStretch: { display: "flex", alignContent: "stretch" },

  xxlAlignSelfAuto: { display: "flex", alignSelf: "auto" },
  xxlAlignSelfStart: { display: "flex", alignSelf: "flex-start" },
  xxlAlignSelfEnd: { display: "flex", alignSelf: "flex-end" },
  xxlAlignSelfCenter: { display: "flex", alignSelf: "center" },
  xxlAlignSelfBaseline: { display: "flex", alignSelf: "baseline" },
  xxlAlignSelfStretch: { display: "flex", alignSelf: "stretch" },

  xxlJustifyContentCenter: { display: "flex", justifyContent: "center" },
  xxlJustifyContentFlexStart: { display: "flex", justifyContent: "flex-start" },
  xxlJustifyContentFlexEnd: { display: "flex", justifyContent: "flex-end" },
  xxlJustifyContentSpaceBetween: { display: "flex", justifyContent: "space-between" },
  xxlJustifyContentSpaceAround: { display: "flex", justifyContent: "space-around" },
  xxlJustifyContentSpaceEvenly: { display: "flex", justifyContent: "space-evenly" },

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
  xxlDisplayInline: { display: "inline" },
  xxlDisplayInlineBlock: { display: "inline-block" },
  xxlDisplayBlock: { display: "block" },
  xxlDisplayGrid: { display: "grid" },
  xxlDisplayTable: { display: "table" },
  xxlDisplayTableRow: { display: "table-row" },
  xxlDisplayTableCell: { display: "table-cell" },
  xxlDisplayFlex: { display: "flex" },
  xxlDisplayInlineFlex: { display: "inline-flex" },
  xxlDisplayNone: { display: "none" },

  /**************************************************
   * Flex
   *************************************************/
  xxlFlexDirectionRow: { flexDirection: "row" },
  xxlFlexDirectionColumn: { flexDirection: "column" },
  xxlFlexDirectionRowReverse: { flexDirection: "row-reverse" },
  xxlFlexDirectionColumnReverse: { flexDirection: "column-reverse" },
  xxlFlexFill: { flex: "1 1 auto" },
  xxlFlexGrow0: { flexGrow: "0" },
  xxlFlexGrow1: { flexGrow: "1" },
  xxlFlexShrink0: { flexShrink: "0" },
  xxlFlexShrink1: { flexShrink: "1" },
  xxlFlexWrapWrap: { flexWrap: "wrap" },
  xxlFlexWrapNoWrap: { flexWrap: "nowrap" },
  xxlFlexWrapWrapReverse: { flexWrap: "wrap-reverse" },

  /**************************************************
   * Float
   *************************************************/
  xxlFloatStart: { float: "left" },
  xxlFloatEnd: { float: "right" },
  xxlFloatNone: { float: "none" },

  /**************************************************
   * Interactions
   *************************************************/
  //NO SCREEN SIZE SPECIFIC STYLE AVAILABLE

  /**************************************************
   * Object Fit
   *************************************************/
  xxlObjectFitContain: {
    // -o-object-fit: contain !important;
    objectFit: "contain",
  },

  xxlObjectFitCover: {
    // -o-object-fit: cover !important;
    objectFit: "cover",
  },

  xxlObjectFitFill: {
    // -o-object-fit: fill !important;
    objectFit: "fill",
  },

  xxlObjectFitScale: {
    // -o-object-fit: scale-down !important;
    objectFit: "scale-down",
  },

  xxlObjectFitNone: {
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
  xxlP0: { padding: 0 },
  xxlP1: { padding: XX_LARGE_PADDING },
  xxlP2: { padding: XX_LARGE_PADDING * 2 },
  xxlP3: { padding: XX_LARGE_PADDING * 3 },
  xxlP4: { padding: XX_LARGE_PADDING * 4 },
  xxlP5: { padding: XX_LARGE_PADDING * 5 },

  xxlPt0: { paddingTop: 0 },
  xxlPt1: { paddingTop: XX_LARGE_PADDING },
  xxlPt2: { paddingTop: XX_LARGE_PADDING * 2 },
  xxlPt3: { paddingTop: XX_LARGE_PADDING * 3 },
  xxlPt4: { paddingTop: XX_LARGE_PADDING * 4 },
  xxlPt5: { paddingTop: XX_LARGE_PADDING * 5 },

  xxlPr0: { paddingRight: 0 },
  xxlPr1: { paddingRight: XX_LARGE_PADDING },
  xxlPr2: { paddingRight: XX_LARGE_PADDING * 2 },
  xxlPr3: { paddingRight: XX_LARGE_PADDING * 3 },
  xxlPr4: { paddingRight: XX_LARGE_PADDING * 4 },
  xxlPr5: { paddingRight: XX_LARGE_PADDING * 5 },

  xxlPb0: { paddingBottom: 0 },
  xxlPb1: { paddingBottom: XX_LARGE_PADDING },
  xxlPb2: { paddingBottom: XX_LARGE_PADDING * 2 },
  xxlPb3: { paddingBottom: XX_LARGE_PADDING * 3 },
  xxlPb4: { paddingBottom: XX_LARGE_PADDING * 4 },
  xxlPb5: { paddingBottom: XX_LARGE_PADDING * 5 },

  xxlPl0: { paddingLeft: 0 },
  xxlPl1: { paddingLeft: XX_LARGE_PADDING },
  xxlPl2: { paddingLeft: XX_LARGE_PADDING * 2 },
  xxlPl3: { paddingLeft: XX_LARGE_PADDING * 3 },
  xxlPl4: { paddingLeft: XX_LARGE_PADDING * 4 },
  xxlPl5: { paddingLeft: XX_LARGE_PADDING * 5 },

  xxlPx0: { paddingLeft: 0, paddingRight: 0 },
  xxlPx1: {
    paddingLeft: XX_LARGE_PADDING * 1,
    paddingRight: XX_LARGE_PADDING * 1,
  },
  xxlPx2: {
    paddingLeft: XX_LARGE_PADDING * 2,
    paddingRight: XX_LARGE_PADDING * 2,
  },
  xxlPx3: {
    paddingLeft: XX_LARGE_PADDING * 3,
    paddingRight: XX_LARGE_PADDING * 3,
  },
  xxlPx4: {
    paddingLeft: XX_LARGE_PADDING * 4,
    paddingRight: XX_LARGE_PADDING * 4,
  },
  xxlPx5: {
    paddingLeft: XX_LARGE_PADDING * 5,
    paddingRight: XX_LARGE_PADDING * 5,
  },

  xxlPy0: { paddingTop: 0, paddingBottom: 0 },
  xxlPy1: {
    paddingTop: XX_LARGE_PADDING * 1,
    paddingBottom: XX_LARGE_PADDING * 1,
  },
  xxlPy2: {
    paddingTop: XX_LARGE_PADDING * 2,
    paddingBottom: XX_LARGE_PADDING * 2,
  },
  xxlPy3: {
    paddingTop: XX_LARGE_PADDING * 3,
    paddingBottom: XX_LARGE_PADDING * 3,
  },
  xxlPy4: {
    paddingTop: XX_LARGE_PADDING * 4,
    paddingBottom: XX_LARGE_PADDING * 4,
  },
  xxlPy5: {
    paddingTop: XX_LARGE_PADDING * 5,
    paddingBottom: XX_LARGE_PADDING * 5,
  },

  /*-------------------------------------------------
   * Margin
   *-----------------------------------------------*/
  xxlM0: { margin: 0 },
  xxlM1: { margin: XX_LARGE_MARGIN },
  xxlM2: { margin: XX_LARGE_MARGIN * 2 },
  xxlM3: { margin: XX_LARGE_MARGIN * 3 },
  xxlM4: { margin: XX_LARGE_MARGIN * 4 },
  xxlM5: { margin: XX_LARGE_MARGIN * 5 },
  xxlMAuto: { margin: "auto" },

  xxlMt0: { marginTop: 0 },
  xxlMt1: { marginTop: XX_LARGE_MARGIN },
  xxlMt2: { marginTop: XX_LARGE_MARGIN * 2 },
  xxlMt3: { marginTop: XX_LARGE_MARGIN * 3 },
  xxlMt4: { marginTop: XX_LARGE_MARGIN * 4 },
  xxlMt5: { marginTop: XX_LARGE_MARGIN * 5 },
  xxlMtAuto: { marginTop: "auto" },

  xxlMr0: { marginRight: 0 },
  xxlMr1: { marginRight: XX_LARGE_MARGIN },
  xxlMr2: { marginRight: XX_LARGE_MARGIN * 2 },
  xxlMr3: { marginRight: XX_LARGE_MARGIN * 3 },
  xxlMr4: { marginRight: XX_LARGE_MARGIN * 4 },
  xxlMr5: { marginRight: XX_LARGE_MARGIN * 5 },
  xxlMrAuto: { marginRight: "auto" },

  xxlMb0: { marginBottom: 0 },
  xxlMb1: { marginBottom: XX_LARGE_MARGIN },
  xxlMb2: { marginBottom: XX_LARGE_MARGIN * 2 },
  xxlMb3: { marginBottom: XX_LARGE_MARGIN * 3 },
  xxlMb4: { marginBottom: XX_LARGE_MARGIN * 4 },
  xxlMb5: { marginBottom: XX_LARGE_MARGIN * 5 },
  xxlMbAuto: { marginBottom: "auto" },

  xxlMl0: { marginLeft: 0 },
  xxlMl1: { marginLeft: XX_LARGE_MARGIN },
  xxlMl2: { marginLeft: XX_LARGE_MARGIN * 2 },
  xxlMl3: { marginLeft: XX_LARGE_MARGIN * 3 },
  xxlMl4: { marginLeft: XX_LARGE_MARGIN * 4 },
  xxlMl5: { marginLeft: XX_LARGE_MARGIN * 5 },
  xxlMlAuto: { marginLeft: "auto" },

  xxlMx0: { marginLeft: 0, marginRight: 0 },
  xxlMx1: {
    marginLeft: XX_LARGE_MARGIN * 1,
    marginRight: XX_LARGE_MARGIN * 1,
  },
  xxlMx2: {
    marginLeft: XX_LARGE_MARGIN * 2,
    marginRight: XX_LARGE_MARGIN * 2,
  },
  xxlMx3: {
    marginLeft: XX_LARGE_MARGIN * 3,
    marginRight: XX_LARGE_MARGIN * 3,
  },
  xxlMx4: {
    marginLeft: XX_LARGE_MARGIN * 4,
    marginRight: XX_LARGE_MARGIN * 4,
  },
  xxlMx5: {
    marginLeft: XX_LARGE_MARGIN * 5,
    marginRight: XX_LARGE_MARGIN * 5,
  },
  xxlMxAuto: { marginLeft: "auto", marginRight: "auto" },

  xxlMy0: { marginTop: 0, marginBottom: 0 },
  xxlMy1: {
    marginTop: XX_LARGE_MARGIN * 1,
    marginBottom: XX_LARGE_MARGIN * 1,
  },
  xxlMy2: {
    marginTop: XX_LARGE_MARGIN * 2,
    marginBottom: XX_LARGE_MARGIN * 2,
  },
  xxlMy3: {
    marginTop: XX_LARGE_MARGIN * 3,
    marginBottom: XX_LARGE_MARGIN * 3,
  },
  xxlMy4: {
    marginTop: XX_LARGE_MARGIN * 4,
    marginBottom: XX_LARGE_MARGIN * 4,
  },
  xxlMy5: {
    marginTop: XX_LARGE_MARGIN * 5,
    marginBottom: XX_LARGE_MARGIN * 5,
  },
  xxlMyAuto: { marginTop: "auto", marginBottom: "auto" },

  xxlMN1: { margin: XX_LARGE_MARGIN * -1 },
  xxlMN2: { margin: XX_LARGE_MARGIN * -2 },
  xxlMN3: { margin: XX_LARGE_MARGIN * -3 },
  xxlMN4: { margin: XX_LARGE_MARGIN * -4 },
  xxlMN5: { margin: XX_LARGE_MARGIN * -5 },

  xxlMtN1: { marginTop: XX_LARGE_MARGIN * -1 },
  xxlMtN2: { marginTop: XX_LARGE_MARGIN * -2 },
  xxlMtN3: { marginTop: XX_LARGE_MARGIN * -3 },
  xxlMtN4: { marginTop: XX_LARGE_MARGIN * -4 },
  xxlMtN5: { marginTop: XX_LARGE_MARGIN * -5 },

  xxlMrN1: { marginRight: XX_LARGE_MARGIN * -1 },
  xxlMrN2: { marginRight: XX_LARGE_MARGIN * -2 },
  xxlMrN3: { marginRight: XX_LARGE_MARGIN * -3 },
  xxlMrN4: { marginRight: XX_LARGE_MARGIN * -4 },
  xxlMrN5: { marginRight: XX_LARGE_MARGIN * -5 },

  xxlMbN1: { marginBottom: XX_LARGE_MARGIN * -1 },
  xxlMbN2: { marginBottom: XX_LARGE_MARGIN * -2 },
  xxlMbN3: { marginBottom: XX_LARGE_MARGIN * -3 },
  xxlMbN4: { marginBottom: XX_LARGE_MARGIN * -4 },
  xxlMbN5: { marginBottom: XX_LARGE_MARGIN * -5 },

  xxlMlN1: { marginLeft: XX_LARGE_MARGIN * -1 },
  xxlMlN2: { marginLeft: XX_LARGE_MARGIN * -2 },
  xxlMlN3: { marginLeft: XX_LARGE_MARGIN * -3 },
  xxlMlN4: { marginLeft: XX_LARGE_MARGIN * -4 },
  xxlMlN5: { marginLeft: XX_LARGE_MARGIN * -5 },

  xxlMxN1: {
    marginLeft: XX_LARGE_MARGIN * -1,
    marginRight: XX_LARGE_MARGIN * -1,
  },
  xxlMxN2: {
    marginLeft: XX_LARGE_MARGIN * -2,
    marginRight: XX_LARGE_MARGIN * -2,
  },
  xxlMxN3: {
    marginLeft: XX_LARGE_MARGIN * -3,
    marginRight: XX_LARGE_MARGIN * -3,
  },
  xxlMxN4: {
    marginLeft: XX_LARGE_MARGIN * -4,
    marginRight: XX_LARGE_MARGIN * -4,
  },
  xxlMxN5: {
    marginLeft: XX_LARGE_MARGIN * -5,
    marginRight: XX_LARGE_MARGIN * -5,
  },

  xxlMyN1: {
    marginTop: XX_LARGE_MARGIN * -1,
    marginBottom: XX_LARGE_MARGIN * -1,
  },
  xxlMyN2: {
    marginTop: XX_LARGE_MARGIN * -2,
    marginBottom: XX_LARGE_MARGIN * -2,
  },
  xxlMyN3: {
    marginTop: XX_LARGE_MARGIN * -3,
    marginBottom: XX_LARGE_MARGIN * -3,
  },
  xxlMyN4: {
    marginTop: XX_LARGE_MARGIN * -4,
    marginBottom: XX_LARGE_MARGIN * -4,
  },
  xxlMyN5: {
    marginTop: XX_LARGE_MARGIN * -5,
    marginBottom: XX_LARGE_MARGIN * -5,
  },

  /*-------------------------------------------------
   * Gap
   *-----------------------------------------------*/
  xxlGap0: { gap: "0" },
  xxlGap1: { gap: XX_LARGE_SPACING * 1 },
  xxlGap2: { gap: XX_LARGE_SPACING * 2 },
  xxlGap3: { gap: XX_LARGE_SPACING * 3 },
  xxlGap4: { gap: XX_LARGE_SPACING * 4 },
  xxlGap5: { gap: XX_LARGE_SPACING * 5 },

  xxlRowGap0: { rowGap: "0" },
  xxlRowGap1: { rowGap: XX_LARGE_SPACING * 1 },
  xxlRowGap2: { rowGap: XX_LARGE_SPACING * 2 },
  xxlRowGap3: { rowGap: XX_LARGE_SPACING * 3 },
  xxlRowGap4: { rowGap: XX_LARGE_SPACING * 4 },
  xxlRowGap5: { rowGap: XX_LARGE_SPACING * 5 },

  xxlColGap0: { columnGap: "0" },
  xxlColGap1: { columnGap: XX_LARGE_SPACING * 1 },
  xxlColGap2: { columnGap: XX_LARGE_SPACING * 2 },
  xxlColGap3: { columnGap: XX_LARGE_SPACING * 3 },
  xxlColGap4: { columnGap: XX_LARGE_SPACING * 4 },
  xxlColGap5: { columnGap: XX_LARGE_SPACING * 5 },

  /**************************************************
   * Text
   *************************************************/
  xxlTextStart: { textAlign: "left" + IMPORTANT },
  xxlTextEnd: { textAlign: "right" + IMPORTANT },
  xxlTextCenter: { textAlign: "center" + IMPORTANT },
  xxlTextJustify: { textAlign: "justify" + IMPORTANT },

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
