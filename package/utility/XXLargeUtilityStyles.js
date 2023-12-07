/* eslint-disable */
import {
  DEFAULT_MARGIN,
  DEFAULT_PADDING,
  DEFAULT_SPACING,
  IMPORTANT,
  PX,
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
   * Cursor
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
  xxlP1: { padding: XX_LARGE_PADDING + PX },
  xxlP2: { padding: XX_LARGE_PADDING * 2 + PX },
  xxlP3: { padding: XX_LARGE_PADDING * 3 + PX },
  xxlP4: { padding: XX_LARGE_PADDING * 4 + PX },
  xxlP5: { padding: XX_LARGE_PADDING * 5 + PX },

  xxlPt0: { paddingTop: 0 },
  xxlPt1: { paddingTop: XX_LARGE_PADDING + PX },
  xxlPt2: { paddingTop: XX_LARGE_PADDING * 2 + PX },
  xxlPt3: { paddingTop: XX_LARGE_PADDING * 3 + PX },
  xxlPt4: { paddingTop: XX_LARGE_PADDING * 4 + PX },
  xxlPt5: { paddingTop: XX_LARGE_PADDING * 5 + PX },

  xxlPr0: { paddingRight: 0 },
  xxlPr1: { paddingRight: XX_LARGE_PADDING + PX },
  xxlPr2: { paddingRight: XX_LARGE_PADDING * 2 + PX },
  xxlPr3: { paddingRight: XX_LARGE_PADDING * 3 + PX },
  xxlPr4: { paddingRight: XX_LARGE_PADDING * 4 + PX },
  xxlPr5: { paddingRight: XX_LARGE_PADDING * 5 + PX },

  xxlPb0: { paddingBottom: 0 },
  xxlPb1: { paddingBottom: XX_LARGE_PADDING + PX },
  xxlPb2: { paddingBottom: XX_LARGE_PADDING * 2 + PX },
  xxlPb3: { paddingBottom: XX_LARGE_PADDING * 3 + PX },
  xxlPb4: { paddingBottom: XX_LARGE_PADDING * 4 + PX },
  xxlPb5: { paddingBottom: XX_LARGE_PADDING * 5 + PX },

  xxlPl0: { paddingLeft: 0 },
  xxlPl1: { paddingLeft: XX_LARGE_PADDING + PX },
  xxlPl2: { paddingLeft: XX_LARGE_PADDING * 2 + PX },
  xxlPl3: { paddingLeft: XX_LARGE_PADDING * 3 + PX },
  xxlPl4: { paddingLeft: XX_LARGE_PADDING * 4 + PX },
  xxlPl5: { paddingLeft: XX_LARGE_PADDING * 5 + PX },

  xxlPx0: { paddingLeft: 0, paddingRight: 0 },
  xxlPx1: {
    paddingLeft: XX_LARGE_PADDING * 1 + PX,
    paddingRight: XX_LARGE_PADDING * 1 + PX,
  },
  xxlPx2: {
    paddingLeft: XX_LARGE_PADDING * 2 + PX,
    paddingRight: XX_LARGE_PADDING * 2 + PX,
  },
  xxlPx3: {
    paddingLeft: XX_LARGE_PADDING * 3 + PX,
    paddingRight: XX_LARGE_PADDING * 3 + PX,
  },
  xxlPx4: {
    paddingLeft: XX_LARGE_PADDING * 4 + PX,
    paddingRight: XX_LARGE_PADDING * 4 + PX,
  },
  xxlPx5: {
    paddingLeft: XX_LARGE_PADDING * 5 + PX,
    paddingRight: XX_LARGE_PADDING * 5 + PX,
  },

  xxlPy0: { paddingTop: 0, paddingBottom: 0 },
  xxlPy1: {
    paddingTop: XX_LARGE_PADDING * 1 + PX,
    paddingBottom: XX_LARGE_PADDING * 1 + PX,
  },
  xxlPy2: {
    paddingTop: XX_LARGE_PADDING * 2 + PX,
    paddingBottom: XX_LARGE_PADDING * 2 + PX,
  },
  xxlPy3: {
    paddingTop: XX_LARGE_PADDING * 3 + PX,
    paddingBottom: XX_LARGE_PADDING * 3 + PX,
  },
  xxlPy4: {
    paddingTop: XX_LARGE_PADDING * 4 + PX,
    paddingBottom: XX_LARGE_PADDING * 4 + PX,
  },
  xxlPy5: {
    paddingTop: XX_LARGE_PADDING * 5 + PX,
    paddingBottom: XX_LARGE_PADDING * 5 + PX,
  },

  /*-------------------------------------------------
   * Margin
   *-----------------------------------------------*/
  xxlM0: { margin: 0 + IMPORTANT },
  xxlM1: { margin: XX_LARGE_MARGIN + PX + IMPORTANT },
  xxlM2: { margin: XX_LARGE_MARGIN * 2 + PX + IMPORTANT },
  xxlM3: { margin: XX_LARGE_MARGIN * 3 + PX + IMPORTANT },
  xxlM4: { margin: XX_LARGE_MARGIN * 4 + PX + IMPORTANT },
  xxlM5: { margin: XX_LARGE_MARGIN * 5 + PX + IMPORTANT },
  xxlMAuto: { margin: "auto" + IMPORTANT },

  xxlMt0: { marginTop: 0 + IMPORTANT },
  xxlMt1: { marginTop: XX_LARGE_MARGIN + PX + IMPORTANT },
  xxlMt2: { marginTop: XX_LARGE_MARGIN * 2 + PX + IMPORTANT },
  xxlMt3: { marginTop: XX_LARGE_MARGIN * 3 + PX + IMPORTANT },
  xxlMt4: { marginTop: XX_LARGE_MARGIN * 4 + PX + IMPORTANT },
  xxlMt5: { marginTop: XX_LARGE_MARGIN * 5 + PX + IMPORTANT },
  xxlMtAuto: { marginTop: "auto" + IMPORTANT },

  xxlMr0: { marginRight: 0 + IMPORTANT },
  xxlMr1: { marginRight: XX_LARGE_MARGIN + PX + IMPORTANT },
  xxlMr2: { marginRight: XX_LARGE_MARGIN * 2 + PX + IMPORTANT },
  xxlMr3: { marginRight: XX_LARGE_MARGIN * 3 + PX + IMPORTANT },
  xxlMr4: { marginRight: XX_LARGE_MARGIN * 4 + PX + IMPORTANT },
  xxlMr5: { marginRight: XX_LARGE_MARGIN * 5 + PX + IMPORTANT },
  xxlMrAuto: { marginRight: "auto" + IMPORTANT },

  xxlMb0: { marginBottom: 0 + IMPORTANT },
  xxlMb1: { marginBottom: XX_LARGE_MARGIN + PX + IMPORTANT },
  xxlMb2: { marginBottom: XX_LARGE_MARGIN * 2 + PX + IMPORTANT },
  xxlMb3: { marginBottom: XX_LARGE_MARGIN * 3 + PX + IMPORTANT },
  xxlMb4: { marginBottom: XX_LARGE_MARGIN * 4 + PX + IMPORTANT },
  xxlMb5: { marginBottom: XX_LARGE_MARGIN * 5 + PX + IMPORTANT },
  xxlMbAuto: { marginBottom: "auto" + IMPORTANT },

  xxlMl0: { marginLeft: 0 + IMPORTANT },
  xxlMl1: { marginLeft: XX_LARGE_MARGIN + PX + IMPORTANT },
  xxlMl2: { marginLeft: XX_LARGE_MARGIN * 2 + PX + IMPORTANT },
  xxlMl3: { marginLeft: XX_LARGE_MARGIN * 3 + PX + IMPORTANT },
  xxlMl4: { marginLeft: XX_LARGE_MARGIN * 4 + PX + IMPORTANT },
  xxlMl5: { marginLeft: XX_LARGE_MARGIN * 5 + PX + IMPORTANT },
  xxlMlAuto: { marginLeft: "auto" + IMPORTANT },

  xxlMx0: { marginLeft: 0 + IMPORTANT, marginRight: 0 + IMPORTANT },
  xxlMx1: {
    marginLeft: XX_LARGE_MARGIN * 1 + PX + IMPORTANT,
    marginRight: XX_LARGE_MARGIN * 1 + PX + IMPORTANT,
  },
  xxlMx2: {
    marginLeft: XX_LARGE_MARGIN * 2 + PX + IMPORTANT,
    marginRight: XX_LARGE_MARGIN * 2 + PX + IMPORTANT,
  },
  xxlMx3: {
    marginLeft: XX_LARGE_MARGIN * 3 + PX + IMPORTANT,
    marginRight: XX_LARGE_MARGIN * 3 + PX + IMPORTANT,
  },
  xxlMx4: {
    marginLeft: XX_LARGE_MARGIN * 4 + PX + IMPORTANT,
    marginRight: XX_LARGE_MARGIN * 4 + PX + IMPORTANT,
  },
  xxlMx5: {
    marginLeft: XX_LARGE_MARGIN * 5 + PX + IMPORTANT,
    marginRight: XX_LARGE_MARGIN * 5 + PX + IMPORTANT,
  },
  xxlMxAuto: { marginLeft: "auto" + IMPORTANT, marginRight: "auto" + IMPORTANT },

  xxlMy0: { marginTop: 0 + IMPORTANT, marginBottom: 0 + IMPORTANT },
  xxlMy1: {
    marginTop: XX_LARGE_MARGIN * 1 + PX + IMPORTANT,
    marginBottom: XX_LARGE_MARGIN * 1 + PX + IMPORTANT,
  },
  xxlMy2: {
    marginTop: XX_LARGE_MARGIN * 2 + PX + IMPORTANT,
    marginBottom: XX_LARGE_MARGIN * 2 + PX + IMPORTANT,
  },
  xxlMy3: {
    marginTop: XX_LARGE_MARGIN * 3 + PX + IMPORTANT,
    marginBottom: XX_LARGE_MARGIN * 3 + PX + IMPORTANT,
  },
  xxlMy4: {
    marginTop: XX_LARGE_MARGIN * 4 + PX + IMPORTANT,
    marginBottom: XX_LARGE_MARGIN * 4 + PX + IMPORTANT,
  },
  xxlMy5: {
    marginTop: XX_LARGE_MARGIN * 5 + PX + IMPORTANT,
    marginBottom: XX_LARGE_MARGIN * 5 + PX + IMPORTANT,
  },
  xxlMyAuto: { marginTop: "auto" + IMPORTANT, marginBottom: "auto" + IMPORTANT },

  xxlMN1: { margin: XX_LARGE_MARGIN * -1 + PX + IMPORTANT },
  xxlMN2: { margin: XX_LARGE_MARGIN * -2 + PX + IMPORTANT },
  xxlMN3: { margin: XX_LARGE_MARGIN * -3 + PX + IMPORTANT },
  xxlMN4: { margin: XX_LARGE_MARGIN * -4 + PX + IMPORTANT },
  xxlMN5: { margin: XX_LARGE_MARGIN * -5 + PX + IMPORTANT },

  xxlMtN1: { marginTop: XX_LARGE_MARGIN * -1 + PX + IMPORTANT },
  xxlMtN2: { marginTop: XX_LARGE_MARGIN * -2 + PX + IMPORTANT },
  xxlMtN3: { marginTop: XX_LARGE_MARGIN * -3 + PX + IMPORTANT },
  xxlMtN4: { marginTop: XX_LARGE_MARGIN * -4 + PX + IMPORTANT },
  xxlMtN5: { marginTop: XX_LARGE_MARGIN * -5 + PX + IMPORTANT },

  xxlMrN1: { marginRight: XX_LARGE_MARGIN * -1 + PX + IMPORTANT },
  xxlMrN2: { marginRight: XX_LARGE_MARGIN * -2 + PX + IMPORTANT },
  xxlMrN3: { marginRight: XX_LARGE_MARGIN * -3 + PX + IMPORTANT },
  xxlMrN4: { marginRight: XX_LARGE_MARGIN * -4 + PX + IMPORTANT },
  xxlMrN5: { marginRight: XX_LARGE_MARGIN * -5 + PX + IMPORTANT },

  xxlMbN1: { marginBottom: XX_LARGE_MARGIN * -1 + PX + IMPORTANT },
  xxlMbN2: { marginBottom: XX_LARGE_MARGIN * -2 + PX + IMPORTANT },
  xxlMbN3: { marginBottom: XX_LARGE_MARGIN * -3 + PX + IMPORTANT },
  xxlMbN4: { marginBottom: XX_LARGE_MARGIN * -4 + PX + IMPORTANT },
  xxlMbN5: { marginBottom: XX_LARGE_MARGIN * -5 + PX + IMPORTANT },

  xxlMlN1: { marginLeft: XX_LARGE_MARGIN * -1 + PX + IMPORTANT },
  xxlMlN2: { marginLeft: XX_LARGE_MARGIN * -2 + PX + IMPORTANT },
  xxlMlN3: { marginLeft: XX_LARGE_MARGIN * -3 + PX + IMPORTANT },
  xxlMlN4: { marginLeft: XX_LARGE_MARGIN * -4 + PX + IMPORTANT },
  xxlMlN5: { marginLeft: XX_LARGE_MARGIN * -5 + PX + IMPORTANT },

  xxlMxN1: {
    marginLeft: XX_LARGE_MARGIN * -1 + PX + IMPORTANT,
    marginRight: XX_LARGE_MARGIN * -1 + PX + IMPORTANT,
  },
  xxlMxN2: {
    marginLeft: XX_LARGE_MARGIN * -2 + PX + IMPORTANT,
    marginRight: XX_LARGE_MARGIN * -2 + PX + IMPORTANT,
  },
  xxlMxN3: {
    marginLeft: XX_LARGE_MARGIN * -3 + PX + IMPORTANT,
    marginRight: XX_LARGE_MARGIN * -3 + PX + IMPORTANT,
  },
  xxlMxN4: {
    marginLeft: XX_LARGE_MARGIN * -4 + PX + IMPORTANT,
    marginRight: XX_LARGE_MARGIN * -4 + PX + IMPORTANT,
  },
  xxlMxN5: {
    marginLeft: XX_LARGE_MARGIN * -5 + PX + IMPORTANT,
    marginRight: XX_LARGE_MARGIN * -5 + PX + IMPORTANT,
  },

  xxlMyN1: {
    marginTop: XX_LARGE_MARGIN * -1 + PX + IMPORTANT,
    marginBottom: XX_LARGE_MARGIN * -1 + PX + IMPORTANT,
  },
  xxlMyN2: {
    marginTop: XX_LARGE_MARGIN * -2 + PX + IMPORTANT,
    marginBottom: XX_LARGE_MARGIN * -2 + PX + IMPORTANT,
  },
  xxlMyN3: {
    marginTop: XX_LARGE_MARGIN * -3 + PX + IMPORTANT,
    marginBottom: XX_LARGE_MARGIN * -3 + PX + IMPORTANT,
  },
  xxlMyN4: {
    marginTop: XX_LARGE_MARGIN * -4 + PX + IMPORTANT,
    marginBottom: XX_LARGE_MARGIN * -4 + PX + IMPORTANT,
  },
  xxlMyN5: {
    marginTop: XX_LARGE_MARGIN * -5 + PX + IMPORTANT,
    marginBottom: XX_LARGE_MARGIN * -5 + PX + IMPORTANT,
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
