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
  xxlAlignItemsStart: { display: "flex", alignItems: "flex-start" + IMPORTANT },
  xxlAlignItemsEnd: { display: "flex", alignItems: "flex-end" + IMPORTANT },
  xxlAlignItemsCenter: { display: "flex", alignItems: "center" + IMPORTANT },
  xxlAlignItemsBaseline: { display: "flex", alignItems: "baseline" + IMPORTANT },
  xxlAlignItemsStretch: { display: "flex", alignItems: "stretch" + IMPORTANT },

  xxlAlignContentStart: { display: "flex", alignContent: "flex-start" + IMPORTANT },
  xxlAlignContentEnd: { display: "flex", alignContent: "flex-end" + IMPORTANT },
  xxlAlignContentCenter: { display: "flex", alignContent: "center" + IMPORTANT },
  xxlAlignContentBetween: { display: "flex", alignContent: "space-between" + IMPORTANT },
  xxlAlignContentAround: { display: "flex", alignContent: "space-around" + IMPORTANT },
  xxlAlignContentStretch: { display: "flex", alignContent: "stretch" + IMPORTANT },

  xxlAlignSelfAuto: { display: "flex", alignSelf: "auto" + IMPORTANT },
  xxlAlignSelfStart: { display: "flex", alignSelf: "flex-start" + IMPORTANT },
  xxlAlignSelfEnd: { display: "flex", alignSelf: "flex-end" + IMPORTANT },
  xxlAlignSelfCenter: { display: "flex", alignSelf: "center" + IMPORTANT },
  xxlAlignSelfBaseline: { display: "flex", alignSelf: "baseline" + IMPORTANT },
  xxlAlignSelfStretch: { display: "flex", alignSelf: "stretch" + IMPORTANT },

  xxlJustifyContentCenter: { display: "flex", justifyContent: "center" + IMPORTANT },
  xxlJustifyContentFlexStart: { display: "flex", justifyContent: "flex-start" + IMPORTANT },
  xxlJustifyContentFlexEnd: { display: "flex", justifyContent: "flex-end" + IMPORTANT },
  xxlJustifyContentSpaceBetween: { display: "flex", justifyContent: "space-between" + IMPORTANT },
  xxlJustifyContentSpaceAround: { display: "flex", justifyContent: "space-around" + IMPORTANT },
  xxlJustifyContentSpaceEvenly: { display: "flex", justifyContent: "space-evenly" + IMPORTANT },

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
  xxlDisplayInline: { display: "inline" + IMPORTANT },
  xxlDisplayInlineBlock: { display: "inline-block" + IMPORTANT },
  xxlDisplayBlock: { display: "block" + IMPORTANT },
  xxlDisplayGrid: { display: "grid" + IMPORTANT },
  xxlDisplayTable: { display: "table" + IMPORTANT },
  xxlDisplayTableRow: { display: "table-row" + IMPORTANT },
  xxlDisplayTableCell: { display: "table-cell" + IMPORTANT },
  xxlDisplayFlex: { display: "flex" + IMPORTANT },
  xxlDisplayInlineFlex: { display: "inline-flex" + IMPORTANT },
  xxlDisplayNone: { display: "none" + IMPORTANT },

  /**************************************************
   * Flex
   *************************************************/
  xxlFlexDirectionRow: { flexDirection: "row" + IMPORTANT },
  xxlFlexDirectionColumn: { flexDirection: "column" + IMPORTANT },
  xxlFlexDirectionRowReverse: { flexDirection: "row-reverse" + IMPORTANT },
  xxlFlexDirectionColumnReverse: { flexDirection: "column-reverse" + IMPORTANT },
  xxlFlexFill: { flex: "1 1 auto" + IMPORTANT },
  xxlFlexGrow0: { flexGrow: "0" + IMPORTANT },
  xxlFlexGrow1: { flexGrow: "1" + IMPORTANT },
  xxlFlexShrink0: { flexShrink: "0" + IMPORTANT },
  xxlFlexShrink1: { flexShrink: "1" + IMPORTANT },
  xxlFlexWrapWrap: { flexWrap: "wrap" + IMPORTANT },
  xxlFlexWrapNoWrap: { flexWrap: "nowrap" + IMPORTANT },
  xxlFlexWrapWrapReverse: { flexWrap: "wrap-reverse" + IMPORTANT },

  /**************************************************
   * Float
   *************************************************/
  xxlFloatStart: { float: "left" + IMPORTANT },
  xxlFloatEnd: { float: "right" + IMPORTANT },
  xxlFloatNone: { float: "none" + IMPORTANT },

  /**************************************************
   * Interactions
   *************************************************/
  //NO SCREEN SIZE SPECIFIC STYLE AVAILABLE

  /**************************************************
   * Object Fit
   *************************************************/
  xxlObjectFitContain: {
    // -o-object-fit: contain !important;
    objectFit: "contain" + IMPORTANT,
  },

  xxlObjectFitCover: {
    // -o-object-fit: cover !important;
    objectFit: "cover" + IMPORTANT,
  },

  xxlObjectFitFill: {
    // -o-object-fit: fill !important;
    objectFit: "fill" + IMPORTANT,
  },

  xxlObjectFitScale: {
    // -o-object-fit: scale-down !important;
    objectFit: "scale-down" + IMPORTANT,
  },

  xxlObjectFitNone: {
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
  xxlP0: { padding: 0 + IMPORTANT },
  xxlP1: { padding: XX_LARGE_PADDING + IMPORTANT },
  xxlP2: { padding: XX_LARGE_PADDING * 2 + IMPORTANT },
  xxlP3: { padding: XX_LARGE_PADDING * 3 + IMPORTANT },
  xxlP4: { padding: XX_LARGE_PADDING * 4 + IMPORTANT },
  xxlP5: { padding: XX_LARGE_PADDING * 5 + IMPORTANT },

  xxlPt0: { paddingTop: 0 + IMPORTANT },
  xxlPt1: { paddingTop: XX_LARGE_PADDING + IMPORTANT },
  xxlPt2: { paddingTop: XX_LARGE_PADDING * 2 + IMPORTANT },
  xxlPt3: { paddingTop: XX_LARGE_PADDING * 3 + IMPORTANT },
  xxlPt4: { paddingTop: XX_LARGE_PADDING * 4 + IMPORTANT },
  xxlPt5: { paddingTop: XX_LARGE_PADDING * 5 + IMPORTANT },

  xxlPr0: { paddingRight: 0 + IMPORTANT },
  xxlPr1: { paddingRight: XX_LARGE_PADDING + IMPORTANT },
  xxlPr2: { paddingRight: XX_LARGE_PADDING * 2 + IMPORTANT },
  xxlPr3: { paddingRight: XX_LARGE_PADDING * 3 + IMPORTANT },
  xxlPr4: { paddingRight: XX_LARGE_PADDING * 4 + IMPORTANT },
  xxlPr5: { paddingRight: XX_LARGE_PADDING * 5 + IMPORTANT },

  xxlPb0: { paddingBottom: 0 + IMPORTANT },
  xxlPb1: { paddingBottom: XX_LARGE_PADDING + IMPORTANT },
  xxlPb2: { paddingBottom: XX_LARGE_PADDING * 2 + IMPORTANT },
  xxlPb3: { paddingBottom: XX_LARGE_PADDING * 3 + IMPORTANT },
  xxlPb4: { paddingBottom: XX_LARGE_PADDING * 4 + IMPORTANT },
  xxlPb5: { paddingBottom: XX_LARGE_PADDING * 5 + IMPORTANT },

  xxlPl0: { paddingLeft: 0 + IMPORTANT },
  xxlPl1: { paddingLeft: XX_LARGE_PADDING + IMPORTANT },
  xxlPl2: { paddingLeft: XX_LARGE_PADDING * 2 + IMPORTANT },
  xxlPl3: { paddingLeft: XX_LARGE_PADDING * 3 + IMPORTANT },
  xxlPl4: { paddingLeft: XX_LARGE_PADDING * 4 + IMPORTANT },
  xxlPl5: { paddingLeft: XX_LARGE_PADDING * 5 + IMPORTANT },

  xxlPx0: { paddingLeft: 0 + IMPORTANT, paddingRight: 0 + IMPORTANT },
  xxlPx1: {
    paddingLeft: XX_LARGE_PADDING * 1 + IMPORTANT,
    paddingRight: XX_LARGE_PADDING * 1 + IMPORTANT,
  },
  xxlPx2: {
    paddingLeft: XX_LARGE_PADDING * 2 + IMPORTANT,
    paddingRight: XX_LARGE_PADDING * 2 + IMPORTANT,
  },
  xxlPx3: {
    paddingLeft: XX_LARGE_PADDING * 3 + IMPORTANT,
    paddingRight: XX_LARGE_PADDING * 3 + IMPORTANT,
  },
  xxlPx4: {
    paddingLeft: XX_LARGE_PADDING * 4 + IMPORTANT,
    paddingRight: XX_LARGE_PADDING * 4 + IMPORTANT,
  },
  xxlPx5: {
    paddingLeft: XX_LARGE_PADDING * 5 + IMPORTANT,
    paddingRight: XX_LARGE_PADDING * 5 + IMPORTANT,
  },

  xxlPy0: { paddingTop: 0 + IMPORTANT, paddingBottom: 0 + IMPORTANT },
  xxlPy1: {
    paddingTop: XX_LARGE_PADDING * 1 + IMPORTANT,
    paddingBottom: XX_LARGE_PADDING * 1 + IMPORTANT,
  },
  xxlPy2: {
    paddingTop: XX_LARGE_PADDING * 2 + IMPORTANT,
    paddingBottom: XX_LARGE_PADDING * 2 + IMPORTANT,
  },
  xxlPy3: {
    paddingTop: XX_LARGE_PADDING * 3 + IMPORTANT,
    paddingBottom: XX_LARGE_PADDING * 3 + IMPORTANT,
  },
  xxlPy4: {
    paddingTop: XX_LARGE_PADDING * 4 + IMPORTANT,
    paddingBottom: XX_LARGE_PADDING * 4 + IMPORTANT,
  },
  xxlPy5: {
    paddingTop: XX_LARGE_PADDING * 5 + IMPORTANT,
    paddingBottom: XX_LARGE_PADDING * 5 + IMPORTANT,
  },

  /*-------------------------------------------------
   * Margin
   *-----------------------------------------------*/
  xxlM0: { margin: 0 + IMPORTANT },
  xxlM1: { margin: XX_LARGE_MARGIN + IMPORTANT },
  xxlM2: { margin: XX_LARGE_MARGIN * 2 + IMPORTANT },
  xxlM3: { margin: XX_LARGE_MARGIN * 3 + IMPORTANT },
  xxlM4: { margin: XX_LARGE_MARGIN * 4 + IMPORTANT },
  xxlM5: { margin: XX_LARGE_MARGIN * 5 + IMPORTANT },
  xxlMAuto: { margin: "auto" + IMPORTANT },

  xxlMt0: { marginTop: 0 + IMPORTANT },
  xxlMt1: { marginTop: XX_LARGE_MARGIN + IMPORTANT },
  xxlMt2: { marginTop: XX_LARGE_MARGIN * 2 + IMPORTANT },
  xxlMt3: { marginTop: XX_LARGE_MARGIN * 3 + IMPORTANT },
  xxlMt4: { marginTop: XX_LARGE_MARGIN * 4 + IMPORTANT },
  xxlMt5: { marginTop: XX_LARGE_MARGIN * 5 + IMPORTANT },
  xxlMtAuto: { marginTop: "auto" + IMPORTANT },

  xxlMr0: { marginRight: 0 + IMPORTANT },
  xxlMr1: { marginRight: XX_LARGE_MARGIN + IMPORTANT },
  xxlMr2: { marginRight: XX_LARGE_MARGIN * 2 + IMPORTANT },
  xxlMr3: { marginRight: XX_LARGE_MARGIN * 3 + IMPORTANT },
  xxlMr4: { marginRight: XX_LARGE_MARGIN * 4 + IMPORTANT },
  xxlMr5: { marginRight: XX_LARGE_MARGIN * 5 + IMPORTANT },
  xxlMrAuto: { marginRight: "auto" + IMPORTANT },

  xxlMb0: { marginBottom: 0 + IMPORTANT },
  xxlMb1: { marginBottom: XX_LARGE_MARGIN + IMPORTANT },
  xxlMb2: { marginBottom: XX_LARGE_MARGIN * 2 + IMPORTANT },
  xxlMb3: { marginBottom: XX_LARGE_MARGIN * 3 + IMPORTANT },
  xxlMb4: { marginBottom: XX_LARGE_MARGIN * 4 + IMPORTANT },
  xxlMb5: { marginBottom: XX_LARGE_MARGIN * 5 + IMPORTANT },
  xxlMbAuto: { marginBottom: "auto" + IMPORTANT },

  xxlMl0: { marginLeft: 0 + IMPORTANT },
  xxlMl1: { marginLeft: XX_LARGE_MARGIN + IMPORTANT },
  xxlMl2: { marginLeft: XX_LARGE_MARGIN * 2 + IMPORTANT },
  xxlMl3: { marginLeft: XX_LARGE_MARGIN * 3 + IMPORTANT },
  xxlMl4: { marginLeft: XX_LARGE_MARGIN * 4 + IMPORTANT },
  xxlMl5: { marginLeft: XX_LARGE_MARGIN * 5 + IMPORTANT },
  xxlMlAuto: { marginLeft: "auto" + IMPORTANT },

  xxlMx0: { marginLeft: 0 + IMPORTANT, marginRight: 0 + IMPORTANT },
  xxlMx1: {
    marginLeft: XX_LARGE_MARGIN * 1 + IMPORTANT,
    marginRight: XX_LARGE_MARGIN * 1 + IMPORTANT,
  },
  xxlMx2: {
    marginLeft: XX_LARGE_MARGIN * 2 + IMPORTANT,
    marginRight: XX_LARGE_MARGIN * 2 + IMPORTANT,
  },
  xxlMx3: {
    marginLeft: XX_LARGE_MARGIN * 3 + IMPORTANT,
    marginRight: XX_LARGE_MARGIN * 3 + IMPORTANT,
  },
  xxlMx4: {
    marginLeft: XX_LARGE_MARGIN * 4 + IMPORTANT,
    marginRight: XX_LARGE_MARGIN * 4 + IMPORTANT,
  },
  xxlMx5: {
    marginLeft: XX_LARGE_MARGIN * 5 + IMPORTANT,
    marginRight: XX_LARGE_MARGIN * 5 + IMPORTANT,
  },
  xxlMxAuto: { marginLeft: "auto" + IMPORTANT, marginRight: "auto" + IMPORTANT },

  xxlMy0: { marginTop: 0 + IMPORTANT, marginBottom: 0 + IMPORTANT },
  xxlMy1: {
    marginTop: XX_LARGE_MARGIN * 1 + IMPORTANT,
    marginBottom: XX_LARGE_MARGIN * 1 + IMPORTANT,
  },
  xxlMy2: {
    marginTop: XX_LARGE_MARGIN * 2 + IMPORTANT,
    marginBottom: XX_LARGE_MARGIN * 2 + IMPORTANT,
  },
  xxlMy3: {
    marginTop: XX_LARGE_MARGIN * 3 + IMPORTANT,
    marginBottom: XX_LARGE_MARGIN * 3 + IMPORTANT,
  },
  xxlMy4: {
    marginTop: XX_LARGE_MARGIN * 4 + IMPORTANT,
    marginBottom: XX_LARGE_MARGIN * 4 + IMPORTANT,
  },
  xxlMy5: {
    marginTop: XX_LARGE_MARGIN * 5 + IMPORTANT,
    marginBottom: XX_LARGE_MARGIN * 5 + IMPORTANT,
  },
  xxlMyAuto: { marginTop: "auto" + IMPORTANT, marginBottom: "auto" + IMPORTANT },

  xxlMN1: { margin: XX_LARGE_MARGIN * -1 + IMPORTANT },
  xxlMN2: { margin: XX_LARGE_MARGIN * -2 + IMPORTANT },
  xxlMN3: { margin: XX_LARGE_MARGIN * -3 + IMPORTANT },
  xxlMN4: { margin: XX_LARGE_MARGIN * -4 + IMPORTANT },
  xxlMN5: { margin: XX_LARGE_MARGIN * -5 + IMPORTANT },

  xxlMtN1: { marginTop: XX_LARGE_MARGIN * -1 + IMPORTANT },
  xxlMtN2: { marginTop: XX_LARGE_MARGIN * -2 + IMPORTANT },
  xxlMtN3: { marginTop: XX_LARGE_MARGIN * -3 + IMPORTANT },
  xxlMtN4: { marginTop: XX_LARGE_MARGIN * -4 + IMPORTANT },
  xxlMtN5: { marginTop: XX_LARGE_MARGIN * -5 + IMPORTANT },

  xxlMrN1: { marginRight: XX_LARGE_MARGIN * -1 + IMPORTANT },
  xxlMrN2: { marginRight: XX_LARGE_MARGIN * -2 + IMPORTANT },
  xxlMrN3: { marginRight: XX_LARGE_MARGIN * -3 + IMPORTANT },
  xxlMrN4: { marginRight: XX_LARGE_MARGIN * -4 + IMPORTANT },
  xxlMrN5: { marginRight: XX_LARGE_MARGIN * -5 + IMPORTANT },

  xxlMbN1: { marginBottom: XX_LARGE_MARGIN * -1 + IMPORTANT },
  xxlMbN2: { marginBottom: XX_LARGE_MARGIN * -2 + IMPORTANT },
  xxlMbN3: { marginBottom: XX_LARGE_MARGIN * -3 + IMPORTANT },
  xxlMbN4: { marginBottom: XX_LARGE_MARGIN * -4 + IMPORTANT },
  xxlMbN5: { marginBottom: XX_LARGE_MARGIN * -5 + IMPORTANT },

  xxlMlN1: { marginLeft: XX_LARGE_MARGIN * -1 + IMPORTANT },
  xxlMlN2: { marginLeft: XX_LARGE_MARGIN * -2 + IMPORTANT },
  xxlMlN3: { marginLeft: XX_LARGE_MARGIN * -3 + IMPORTANT },
  xxlMlN4: { marginLeft: XX_LARGE_MARGIN * -4 + IMPORTANT },
  xxlMlN5: { marginLeft: XX_LARGE_MARGIN * -5 + IMPORTANT },

  xxlMxN1: {
    marginLeft: XX_LARGE_MARGIN * -1 + IMPORTANT,
    marginRight: XX_LARGE_MARGIN * -1 + IMPORTANT,
  },
  xxlMxN2: {
    marginLeft: XX_LARGE_MARGIN * -2 + IMPORTANT,
    marginRight: XX_LARGE_MARGIN * -2 + IMPORTANT,
  },
  xxlMxN3: {
    marginLeft: XX_LARGE_MARGIN * -3 + IMPORTANT,
    marginRight: XX_LARGE_MARGIN * -3 + IMPORTANT,
  },
  xxlMxN4: {
    marginLeft: XX_LARGE_MARGIN * -4 + IMPORTANT,
    marginRight: XX_LARGE_MARGIN * -4 + IMPORTANT,
  },
  xxlMxN5: {
    marginLeft: XX_LARGE_MARGIN * -5 + IMPORTANT,
    marginRight: XX_LARGE_MARGIN * -5 + IMPORTANT,
  },

  xxlMyN1: {
    marginTop: XX_LARGE_MARGIN * -1 + IMPORTANT,
    marginBottom: XX_LARGE_MARGIN * -1 + IMPORTANT,
  },
  xxlMyN2: {
    marginTop: XX_LARGE_MARGIN * -2 + IMPORTANT,
    marginBottom: XX_LARGE_MARGIN * -2 + IMPORTANT,
  },
  xxlMyN3: {
    marginTop: XX_LARGE_MARGIN * -3 + IMPORTANT,
    marginBottom: XX_LARGE_MARGIN * -3 + IMPORTANT,
  },
  xxlMyN4: {
    marginTop: XX_LARGE_MARGIN * -4 + IMPORTANT,
    marginBottom: XX_LARGE_MARGIN * -4 + IMPORTANT,
  },
  xxlMyN5: {
    marginTop: XX_LARGE_MARGIN * -5 + IMPORTANT,
    marginBottom: XX_LARGE_MARGIN * -5 + IMPORTANT,
  },

  /*-------------------------------------------------
   * Gap
   *-----------------------------------------------*/
  xxlGap0: { gap: "0" + IMPORTANT },
  xxlGap1: { gap: XX_LARGE_SPACING * 1 + IMPORTANT },
  xxlGap2: { gap: XX_LARGE_SPACING * 2 + IMPORTANT },
  xxlGap3: { gap: XX_LARGE_SPACING * 3 + IMPORTANT },
  xxlGap4: { gap: XX_LARGE_SPACING * 4 + IMPORTANT },
  xxlGap5: { gap: XX_LARGE_SPACING * 5 + IMPORTANT },

  xxlRowGap0: { rowGap: "0" + IMPORTANT },
  xxlRowGap1: { rowGap: XX_LARGE_SPACING * 1 + IMPORTANT },
  xxlRowGap2: { rowGap: XX_LARGE_SPACING * 2 + IMPORTANT },
  xxlRowGap3: { rowGap: XX_LARGE_SPACING * 3 + IMPORTANT },
  xxlRowGap4: { rowGap: XX_LARGE_SPACING * 4 + IMPORTANT },
  xxlRowGap5: { rowGap: XX_LARGE_SPACING * 5 + IMPORTANT },

  xxlColGap0: { columnGap: "0" + IMPORTANT },
  xxlColGap1: { columnGap: XX_LARGE_SPACING * 1 + IMPORTANT },
  xxlColGap2: { columnGap: XX_LARGE_SPACING * 2 + IMPORTANT },
  xxlColGap3: { columnGap: XX_LARGE_SPACING * 3 + IMPORTANT },
  xxlColGap4: { columnGap: XX_LARGE_SPACING * 4 + IMPORTANT },
  xxlColGap5: { columnGap: XX_LARGE_SPACING * 5 + IMPORTANT },

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
