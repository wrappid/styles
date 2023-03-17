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
  xlAlignItemsStart: { display: "flex", alignItems: "flex-start" + IMPORTANT },
  xlAlignItemsEnd: { display: "flex", alignItems: "flex-end" + IMPORTANT },
  xlAlignItemsCenter: { display: "flex", alignItems: "center" + IMPORTANT },
  xlAlignItemsBaseline: { display: "flex", alignItems: "baseline" + IMPORTANT },
  xlAlignItemsStretch: { display: "flex", alignItems: "stretch" + IMPORTANT },

  xlAlignContentStart: { display: "flex", alignContent: "flex-start" + IMPORTANT },
  xlAlignContentEnd: { display: "flex", alignContent: "flex-end" + IMPORTANT },
  xlAlignContentCenter: { display: "flex", alignContent: "center" + IMPORTANT },
  xlAlignContentBetween: { display: "flex", alignContent: "space-between" + IMPORTANT },
  xlAlignContentAround: { display: "flex", alignContent: "space-around" + IMPORTANT },
  xlAlignContentStretch: { display: "flex", alignContent: "stretch" + IMPORTANT },

  xlAlignSelfAuto: { display: "flex", alignSelf: "auto" + IMPORTANT },
  xlAlignSelfStart: { display: "flex", alignSelf: "flex-start" + IMPORTANT },
  xlAlignSelfEnd: { display: "flex", alignSelf: "flex-end" + IMPORTANT },
  xlAlignSelfCenter: { display: "flex", alignSelf: "center" + IMPORTANT },
  xlAlignSelfBaseline: { display: "flex", alignSelf: "baseline" + IMPORTANT },
  xlAlignSelfStretch: { display: "flex", alignSelf: "stretch" + IMPORTANT },

  xlJustifyContentCenter: { display: "flex", justifyContent: "center" + IMPORTANT },
  xlJustifyContentFlexStart: { display: "flex", justifyContent: "flex-start" + IMPORTANT },
  xlJustifyContentFlexEnd: { display: "flex", justifyContent: "flex-end" + IMPORTANT },
  xlJustifyContentSpaceBetween: { display: "flex", justifyContent: "space-between" + IMPORTANT },
  xlJustifyContentSpaceAround: { display: "flex", justifyContent: "space-around" + IMPORTANT },
  xlJustifyContentSpaceEvenly: { display: "flex", justifyContent: "space-evenly" + IMPORTANT },

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
  xlDisplayInline: { display: "inline" + IMPORTANT },
  xlDisplayInlineBlock: { display: "inline-block" + IMPORTANT },
  xlDisplayBlock: { display: "block" + IMPORTANT },
  xlDisplayGrid: { display: "grid" + IMPORTANT },
  xlDisplayTable: { display: "table" + IMPORTANT },
  xlDisplayTableRow: { display: "table-row" + IMPORTANT },
  xlDisplayTableCell: { display: "table-cell" + IMPORTANT },
  xlDisplayFlex: { display: "flex" + IMPORTANT },
  xlDisplayInlineFlex: { display: "inline-flex" + IMPORTANT },
  xlDisplayNone: { display: "none" + IMPORTANT },

  /**************************************************
   * Flex
   *************************************************/
  xlFlexDirectionRow: { flexDirection: "row" + IMPORTANT },
  xlFlexDirectionColumn: { flexDirection: "column" + IMPORTANT },
  xlFlexDirectionRowReverse: { flexDirection: "row-reverse" + IMPORTANT },
  xlFlexDirectionColumnReverse: { flexDirection: "column-reverse" + IMPORTANT },
  xlFlexFill: { flex: "1 1 auto" + IMPORTANT },
  xlFlexGrow0: { flexGrow: "0" + IMPORTANT },
  xlFlexGrow1: { flexGrow: "1" + IMPORTANT },
  xlFlexShrink0: { flexShrink: "0" + IMPORTANT },
  xlFlexShrink1: { flexShrink: "1" + IMPORTANT },
  xlFlexWrapWrap: { flexWrap: "wrap" + IMPORTANT },
  xlFlexWrapNoWrap: { flexWrap: "nowrap" + IMPORTANT },
  xlFlexWrapWrapReverse: { flexWrap: "wrap-reverse" + IMPORTANT },

  /**************************************************
   * Float
   *************************************************/
  xlFloatStart: { float: "left" + IMPORTANT },
  xlFloatEnd: { float: "right" + IMPORTANT },
  xlFloatNone: { float: "none" + IMPORTANT },

  /**************************************************
   * Interactions
   *************************************************/
  //NO SCREEN SIZE SPECIFIC STYLE AVAILABLE

  /**************************************************
   * Object Fit
   *************************************************/
  xlObjectFitContain: {
    // -o-object-fit: contain !important;
    objectFit: "contain" + IMPORTANT,
  },

  xlObjectFitCover: {
    // -o-object-fit: cover !important;
    objectFit: "cover" + IMPORTANT,
  },

  xlObjectFitFill: {
    // -o-object-fit: fill !important;
    objectFit: "fill" + IMPORTANT,
  },

  xlObjectFitScale: {
    // -o-object-fit: scale-down !important;
    objectFit: "scale-down" + IMPORTANT,
  },

  xlObjectFitNone: {
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
  //NO SCREEN SIZE SPECIFIC STYLE AVAILABLE

  /**************************************************
   * Spacing
   *************************************************/
  /*-------------------------------------------------
   * Padding
   *-----------------------------------------------*/
  xlP0: { padding: 0 + IMPORTANT },
  xlP1: { padding: X_LARGE_PADDING + IMPORTANT },
  xlP2: { padding: X_LARGE_PADDING * 2 + IMPORTANT },
  xlP3: { padding: X_LARGE_PADDING * 3 + IMPORTANT },
  xlP4: { padding: X_LARGE_PADDING * 4 + IMPORTANT },
  xlP5: { padding: X_LARGE_PADDING * 5 + IMPORTANT },

  xlPt0: { paddingTop: 0 + IMPORTANT },
  xlPt1: { paddingTop: X_LARGE_PADDING + IMPORTANT },
  xlPt2: { paddingTop: X_LARGE_PADDING * 2 + IMPORTANT },
  xlPt3: { paddingTop: X_LARGE_PADDING * 3 + IMPORTANT },
  xlPt4: { paddingTop: X_LARGE_PADDING * 4 + IMPORTANT },
  xlPt5: { paddingTop: X_LARGE_PADDING * 5 + IMPORTANT },

  xlPr0: { paddingRight: 0 + IMPORTANT },
  xlPr1: { paddingRight: X_LARGE_PADDING + IMPORTANT },
  xlPr2: { paddingRight: X_LARGE_PADDING * 2 + IMPORTANT },
  xlPr3: { paddingRight: X_LARGE_PADDING * 3 + IMPORTANT },
  xlPr4: { paddingRight: X_LARGE_PADDING * 4 + IMPORTANT },
  xlPr5: { paddingRight: X_LARGE_PADDING * 5 + IMPORTANT },

  xlPb0: { paddingBottom: 0 + IMPORTANT },
  xlPb1: { paddingBottom: X_LARGE_PADDING + IMPORTANT },
  xlPb2: { paddingBottom: X_LARGE_PADDING * 2 + IMPORTANT },
  xlPb3: { paddingBottom: X_LARGE_PADDING * 3 + IMPORTANT },
  xlPb4: { paddingBottom: X_LARGE_PADDING * 4 + IMPORTANT },
  xlPb5: { paddingBottom: X_LARGE_PADDING * 5 + IMPORTANT },

  xlPl0: { paddingLeft: 0 + IMPORTANT },
  xlPl1: { paddingLeft: X_LARGE_PADDING + IMPORTANT },
  xlPl2: { paddingLeft: X_LARGE_PADDING * 2 + IMPORTANT },
  xlPl3: { paddingLeft: X_LARGE_PADDING * 3 + IMPORTANT },
  xlPl4: { paddingLeft: X_LARGE_PADDING * 4 + IMPORTANT },
  xlPl5: { paddingLeft: X_LARGE_PADDING * 5 + IMPORTANT },

  xlPx0: { paddingLeft: 0 + IMPORTANT, paddingRight: 0 + IMPORTANT },
  xlPx1: {
    paddingLeft: X_LARGE_PADDING * 1 + IMPORTANT,
    paddingRight: X_LARGE_PADDING * 1 + IMPORTANT,
  },
  xlPx2: {
    paddingLeft: X_LARGE_PADDING * 2 + IMPORTANT,
    paddingRight: X_LARGE_PADDING * 2 + IMPORTANT,
  },
  xlPx3: {
    paddingLeft: X_LARGE_PADDING * 3 + IMPORTANT,
    paddingRight: X_LARGE_PADDING * 3 + IMPORTANT,
  },
  xlPx4: {
    paddingLeft: X_LARGE_PADDING * 4 + IMPORTANT,
    paddingRight: X_LARGE_PADDING * 4 + IMPORTANT,
  },
  xlPx5: {
    paddingLeft: X_LARGE_PADDING * 5 + IMPORTANT,
    paddingRight: X_LARGE_PADDING * 5 + IMPORTANT,
  },

  xlPy0: { paddingTop: 0 + IMPORTANT, paddingBottom: 0 + IMPORTANT },
  xlPy1: {
    paddingTop: X_LARGE_PADDING * 1 + IMPORTANT,
    paddingBottom: X_LARGE_PADDING * 1 + IMPORTANT,
  },
  xlPy2: {
    paddingTop: X_LARGE_PADDING * 2 + IMPORTANT,
    paddingBottom: X_LARGE_PADDING * 2 + IMPORTANT,
  },
  xlPy3: {
    paddingTop: X_LARGE_PADDING * 3 + IMPORTANT,
    paddingBottom: X_LARGE_PADDING * 3 + IMPORTANT,
  },
  xlPy4: {
    paddingTop: X_LARGE_PADDING * 4 + IMPORTANT,
    paddingBottom: X_LARGE_PADDING * 4 + IMPORTANT,
  },
  xlPy5: {
    paddingTop: X_LARGE_PADDING * 5 + IMPORTANT,
    paddingBottom: X_LARGE_PADDING * 5 + IMPORTANT,
  },

  /*-------------------------------------------------
   * Margin
   *-----------------------------------------------*/
  xlM0: { margin: 0 + IMPORTANT },
  xlM1: { margin: X_LARGE_MARGIN + IMPORTANT },
  xlM2: { margin: X_LARGE_MARGIN * 2 + IMPORTANT },
  xlM3: { margin: X_LARGE_MARGIN * 3 + IMPORTANT },
  xlM4: { margin: X_LARGE_MARGIN * 4 + IMPORTANT },
  xlM5: { margin: X_LARGE_MARGIN * 5 + IMPORTANT },
  xlMAuto: { margin: "auto" + IMPORTANT },

  xlMt0: { marginTop: 0 + IMPORTANT },
  xlMt1: { marginTop: X_LARGE_MARGIN + IMPORTANT },
  xlMt2: { marginTop: X_LARGE_MARGIN * 2 + IMPORTANT },
  xlMt3: { marginTop: X_LARGE_MARGIN * 3 + IMPORTANT },
  xlMt4: { marginTop: X_LARGE_MARGIN * 4 + IMPORTANT },
  xlMt5: { marginTop: X_LARGE_MARGIN * 5 + IMPORTANT },
  xlMtAuto: { marginTop: "auto" + IMPORTANT },

  xlMr0: { marginRight: 0 + IMPORTANT },
  xlMr1: { marginRight: X_LARGE_MARGIN + IMPORTANT },
  xlMr2: { marginRight: X_LARGE_MARGIN * 2 + IMPORTANT },
  xlMr3: { marginRight: X_LARGE_MARGIN * 3 + IMPORTANT },
  xlMr4: { marginRight: X_LARGE_MARGIN * 4 + IMPORTANT },
  xlMr5: { marginRight: X_LARGE_MARGIN * 5 + IMPORTANT },
  xlMrAuto: { marginRight: "auto" + IMPORTANT },

  xlMb0: { marginBottom: 0 + IMPORTANT },
  xlMb1: { marginBottom: X_LARGE_MARGIN + IMPORTANT },
  xlMb2: { marginBottom: X_LARGE_MARGIN * 2 + IMPORTANT },
  xlMb3: { marginBottom: X_LARGE_MARGIN * 3 + IMPORTANT },
  xlMb4: { marginBottom: X_LARGE_MARGIN * 4 + IMPORTANT },
  xlMb5: { marginBottom: X_LARGE_MARGIN * 5 + IMPORTANT },
  xlMbAuto: { marginBottom: "auto" + IMPORTANT },

  xlMl0: { marginLeft: 0 + IMPORTANT },
  xlMl1: { marginLeft: X_LARGE_MARGIN + IMPORTANT },
  xlMl2: { marginLeft: X_LARGE_MARGIN * 2 + IMPORTANT },
  xlMl3: { marginLeft: X_LARGE_MARGIN * 3 + IMPORTANT },
  xlMl4: { marginLeft: X_LARGE_MARGIN * 4 + IMPORTANT },
  xlMl5: { marginLeft: X_LARGE_MARGIN * 5 + IMPORTANT },
  xlMlAuto: { marginLeft: "auto" + IMPORTANT },

  xlMx0: { marginLeft: 0 + IMPORTANT, marginRight: 0 + IMPORTANT },
  xlMx1: {
    marginLeft: X_LARGE_MARGIN * 1 + IMPORTANT,
    marginRight: X_LARGE_MARGIN * 1 + IMPORTANT,
  },
  xlMx2: {
    marginLeft: X_LARGE_MARGIN * 2 + IMPORTANT,
    marginRight: X_LARGE_MARGIN * 2 + IMPORTANT,
  },
  xlMx3: {
    marginLeft: X_LARGE_MARGIN * 3 + IMPORTANT,
    marginRight: X_LARGE_MARGIN * 3 + IMPORTANT,
  },
  xlMx4: {
    marginLeft: X_LARGE_MARGIN * 4 + IMPORTANT,
    marginRight: X_LARGE_MARGIN * 4 + IMPORTANT,
  },
  xlMx5: {
    marginLeft: X_LARGE_MARGIN * 5 + IMPORTANT,
    marginRight: X_LARGE_MARGIN * 5 + IMPORTANT,
  },
  xlMxAuto: { marginLeft: "auto" + IMPORTANT, marginRight: "auto" + IMPORTANT },

  xlMy0: { marginTop: 0 + IMPORTANT, marginBottom: 0 + IMPORTANT },
  xlMy1: {
    marginTop: X_LARGE_MARGIN * 1 + IMPORTANT,
    marginBottom: X_LARGE_MARGIN * 1 + IMPORTANT,
  },
  xlMy2: {
    marginTop: X_LARGE_MARGIN * 2 + IMPORTANT,
    marginBottom: X_LARGE_MARGIN * 2 + IMPORTANT,
  },
  xlMy3: {
    marginTop: X_LARGE_MARGIN * 3 + IMPORTANT,
    marginBottom: X_LARGE_MARGIN * 3 + IMPORTANT,
  },
  xlMy4: {
    marginTop: X_LARGE_MARGIN * 4 + IMPORTANT,
    marginBottom: X_LARGE_MARGIN * 4 + IMPORTANT,
  },
  xlMy5: {
    marginTop: X_LARGE_MARGIN * 5 + IMPORTANT,
    marginBottom: X_LARGE_MARGIN * 5 + IMPORTANT,
  },
  xlMyAuto: { marginTop: "auto" + IMPORTANT, marginBottom: "auto" + IMPORTANT },

  xlMN1: { margin: X_LARGE_MARGIN * -1 + IMPORTANT },
  xlMN2: { margin: X_LARGE_MARGIN * -2 + IMPORTANT },
  xlMN3: { margin: X_LARGE_MARGIN * -3 + IMPORTANT },
  xlMN4: { margin: X_LARGE_MARGIN * -4 + IMPORTANT },
  xlMN5: { margin: X_LARGE_MARGIN * -5 + IMPORTANT },

  xlMtN1: { marginTop: X_LARGE_MARGIN * -1 + IMPORTANT },
  xlMtN2: { marginTop: X_LARGE_MARGIN * -2 + IMPORTANT },
  xlMtN3: { marginTop: X_LARGE_MARGIN * -3 + IMPORTANT },
  xlMtN4: { marginTop: X_LARGE_MARGIN * -4 + IMPORTANT },
  xlMtN5: { marginTop: X_LARGE_MARGIN * -5 + IMPORTANT },

  xlMrN1: { marginRight: X_LARGE_MARGIN * -1 + IMPORTANT },
  xlMrN2: { marginRight: X_LARGE_MARGIN * -2 + IMPORTANT },
  xlMrN3: { marginRight: X_LARGE_MARGIN * -3 + IMPORTANT },
  xlMrN4: { marginRight: X_LARGE_MARGIN * -4 + IMPORTANT },
  xlMrN5: { marginRight: X_LARGE_MARGIN * -5 + IMPORTANT },

  xlMbN1: { marginBottom: X_LARGE_MARGIN * -1 + IMPORTANT },
  xlMbN2: { marginBottom: X_LARGE_MARGIN * -2 + IMPORTANT },
  xlMbN3: { marginBottom: X_LARGE_MARGIN * -3 + IMPORTANT },
  xlMbN4: { marginBottom: X_LARGE_MARGIN * -4 + IMPORTANT },
  xlMbN5: { marginBottom: X_LARGE_MARGIN * -5 + IMPORTANT },

  xlMlN1: { marginLeft: X_LARGE_MARGIN * -1 + IMPORTANT },
  xlMlN2: { marginLeft: X_LARGE_MARGIN * -2 + IMPORTANT },
  xlMlN3: { marginLeft: X_LARGE_MARGIN * -3 + IMPORTANT },
  xlMlN4: { marginLeft: X_LARGE_MARGIN * -4 + IMPORTANT },
  xlMlN5: { marginLeft: X_LARGE_MARGIN * -5 + IMPORTANT },

  xlMxN1: {
    marginLeft: X_LARGE_MARGIN * -1 + IMPORTANT,
    marginRight: X_LARGE_MARGIN * -1 + IMPORTANT,
  },
  xlMxN2: {
    marginLeft: X_LARGE_MARGIN * -2 + IMPORTANT,
    marginRight: X_LARGE_MARGIN * -2 + IMPORTANT,
  },
  xlMxN3: {
    marginLeft: X_LARGE_MARGIN * -3 + IMPORTANT,
    marginRight: X_LARGE_MARGIN * -3 + IMPORTANT,
  },
  xlMxN4: {
    marginLeft: X_LARGE_MARGIN * -4 + IMPORTANT,
    marginRight: X_LARGE_MARGIN * -4 + IMPORTANT,
  },
  xlMxN5: {
    marginLeft: X_LARGE_MARGIN * -5 + IMPORTANT,
    marginRight: X_LARGE_MARGIN * -5 + IMPORTANT,
  },

  xlMyN1: {
    marginTop: X_LARGE_MARGIN * -1 + IMPORTANT,
    marginBottom: X_LARGE_MARGIN * -1 + IMPORTANT,
  },
  xlMyN2: {
    marginTop: X_LARGE_MARGIN * -2 + IMPORTANT,
    marginBottom: X_LARGE_MARGIN * -2 + IMPORTANT,
  },
  xlMyN3: {
    marginTop: X_LARGE_MARGIN * -3 + IMPORTANT,
    marginBottom: X_LARGE_MARGIN * -3 + IMPORTANT,
  },
  xlMyN4: {
    marginTop: X_LARGE_MARGIN * -4 + IMPORTANT,
    marginBottom: X_LARGE_MARGIN * -4 + IMPORTANT,
  },
  xlMyN5: {
    marginTop: X_LARGE_MARGIN * -5 + IMPORTANT,
    marginBottom: X_LARGE_MARGIN * -5 + IMPORTANT,
  },

  /*-------------------------------------------------
   * Gap
   *-----------------------------------------------*/
  xlGap0: { gap: "0" + IMPORTANT },
  xlGap1: { gap: X_LARGE_SPACING * 1 + IMPORTANT },
  xlGap2: { gap: X_LARGE_SPACING * 2 + IMPORTANT },
  xlGap3: { gap: X_LARGE_SPACING * 3 + IMPORTANT },
  xlGap4: { gap: X_LARGE_SPACING * 4 + IMPORTANT },
  xlGap5: { gap: X_LARGE_SPACING * 5 + IMPORTANT },

  xlRowGap0: { rowGap: "0" + IMPORTANT },
  xlRowGap1: { rowGap: X_LARGE_SPACING * 1 + IMPORTANT },
  xlRowGap2: { rowGap: X_LARGE_SPACING * 2 + IMPORTANT },
  xlRowGap3: { rowGap: X_LARGE_SPACING * 3 + IMPORTANT },
  xlRowGap4: { rowGap: X_LARGE_SPACING * 4 + IMPORTANT },
  xlRowGap5: { rowGap: X_LARGE_SPACING * 5 + IMPORTANT },

  xlColGap0: { columnGap: "0" + IMPORTANT },
  xlColGap1: { columnGap: X_LARGE_SPACING * 1 + IMPORTANT },
  xlColGap2: { columnGap: X_LARGE_SPACING * 2 + IMPORTANT },
  xlColGap3: { columnGap: X_LARGE_SPACING * 3 + IMPORTANT },
  xlColGap4: { columnGap: X_LARGE_SPACING * 4 + IMPORTANT },
  xlColGap5: { columnGap: X_LARGE_SPACING * 5 + IMPORTANT },

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
