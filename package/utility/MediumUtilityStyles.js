import {
  DEFAULT_MARGIN,
  DEFAULT_PADDING,
  DEFAULT_SPACING,
  IMPORTANT,
} from "./DefaultUtilityStyles";

export const MEDIUM_MARGIN = DEFAULT_MARGIN;
export const MEDIUM_PADDING = DEFAULT_PADDING;
export const MEDIUM_SPACING = DEFAULT_SPACING;

export const mediumUtilityStyles = {
  /**************************************************
   * Alignment
   *************************************************/
  mdAlignItemsStart: { display: "flex", alignItems: "flex-start" + IMPORTANT },
  mdAlignItemsEnd: { display: "flex", alignItems: "flex-end" + IMPORTANT },
  mdAlignItemsCenter: { display: "flex", alignItems: "center" + IMPORTANT },
  mdAlignItemsBaseline: { display: "flex", alignItems: "baseline" + IMPORTANT },
  mdAlignItemsStretch: { display: "flex", alignItems: "stretch" + IMPORTANT },

  mdAlignContentStart: { display: "flex", alignContent: "flex-start" + IMPORTANT },
  mdAlignContentEnd: { display: "flex", alignContent: "flex-end" + IMPORTANT },
  mdAlignContentCenter: { display: "flex", alignContent: "center" + IMPORTANT },
  mdAlignContentBetween: { display: "flex", alignContent: "space-between" + IMPORTANT },
  mdAlignContentAround: { display: "flex", alignContent: "space-around" + IMPORTANT },
  mdAlignContentStretch: { display: "flex", alignContent: "stretch" + IMPORTANT },

  mdAlignSelfAuto: { display: "flex", alignSelf: "auto" + IMPORTANT },
  mdAlignSelfStart: { display: "flex", alignSelf: "flex-start" + IMPORTANT },
  mdAlignSelfEnd: { display: "flex", alignSelf: "flex-end" + IMPORTANT },
  mdAlignSelfCenter: { display: "flex", alignSelf: "center" + IMPORTANT },
  mdAlignSelfBaseline: { display: "flex", alignSelf: "baseline" + IMPORTANT },
  mdAlignSelfStretch: { display: "flex", alignSelf: "stretch" + IMPORTANT },

  mdJustifyContentCenter: { display: "flex", justifyContent: "center" + IMPORTANT },
  mdJustifyContentFlexStart: { display: "flex", justifyContent: "flex-start" + IMPORTANT },
  mdJustifyContentFlexEnd: { display: "flex", justifyContent: "flex-end" + IMPORTANT },
  mdJustifyContentSpaceBetween: { display: "flex", justifyContent: "space-between" + IMPORTANT },
  mdJustifyContentSpaceAround: { display: "flex", justifyContent: "space-around" + IMPORTANT },
  mdJustifyContentSpaceEvenly: { display: "flex", justifyContent: "space-evenly" + IMPORTANT },

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
  mdDisplayInline: { display: "inline" + IMPORTANT },
  mdDisplayInlineBlock: { display: "inline-block" + IMPORTANT },
  mdDisplayBlock: { display: "block" + IMPORTANT },
  mdDisplayGrid: { display: "grid" + IMPORTANT },
  mdDisplayTable: { display: "table" + IMPORTANT },
  mdDisplayTableRow: { display: "table-row" + IMPORTANT },
  mdDisplayTableCell: { display: "table-cell" + IMPORTANT },
  mdDisplayFlex: { display: "flex" + IMPORTANT },
  mdDisplayInlineFlex: { display: "inline-flex" + IMPORTANT },
  mdDisplayNone: { display: "none" + IMPORTANT },

  /**************************************************
   * Flex
   *************************************************/
  mdFlexDirectionRow: { flexDirection: "row" + IMPORTANT },
  mdFlexDirectionColumn: { flexDirection: "column" + IMPORTANT },
  mdFlexDirectionRowReverse: { flexDirection: "row-reverse" + IMPORTANT },
  mdFlexDirectionColumnReverse: { flexDirection: "column-reverse" + IMPORTANT },
  mdFlexFill: { flex: "1 1 auto" + IMPORTANT },
  mdFlexGrow0: { flexGrow: "0" + IMPORTANT },
  mdFlexGrow1: { flexGrow: "1" + IMPORTANT },
  mdFlexShrink0: { flexShrink: "0" + IMPORTANT },
  mdFlexShrink1: { flexShrink: "1" + IMPORTANT },
  mdFlexWrapWrap: { flexWrap: "wrap" + IMPORTANT },
  mdFlexWrapNoWrap: { flexWrap: "nowrap" + IMPORTANT },
  mdFlexWrapWrapReverse: { flexWrap: "wrap-reverse" + IMPORTANT },

  /**************************************************
   * Float
   *************************************************/
  mdFloatStart: { float: "left" + IMPORTANT },
  mdFloatEnd: { float: "right" + IMPORTANT },
  mdFloatNone: { float: "none" + IMPORTANT },

  /**************************************************
   * Interactions
   *************************************************/
  //NO SCREEN SIZE SPECIFIC STYLE AVAILABLE

  /**************************************************
   * Object Fit
   *************************************************/
  mdObjectFitContain: {
    // -o-object-fit: contain !important;
    objectFit: "contain" + IMPORTANT,
  },

  mdObjectFitCover: {
    // -o-object-fit: cover !important;
    objectFit: "cover" + IMPORTANT,
  },

  mdObjectFitFill: {
    // -o-object-fit: fill !important;
    objectFit: "fill" + IMPORTANT,
  },

  mdObjectFitScale: {
    // -o-object-fit: scale-down !important;
    objectFit: "scale-down" + IMPORTANT,
  },

  mdObjectFitNone: {
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
  mdP0: { padding: 0 + IMPORTANT },
  mdP1: { padding: MEDIUM_PADDING + IMPORTANT },
  mdP2: { padding: MEDIUM_PADDING * 2 + IMPORTANT },
  mdP3: { padding: MEDIUM_PADDING * 3 + IMPORTANT },
  mdP4: { padding: MEDIUM_PADDING * 4 + IMPORTANT },
  mdP5: { padding: MEDIUM_PADDING * 5 + IMPORTANT },

  mdPt0: { paddingTop: 0 + IMPORTANT },
  mdPt1: { paddingTop: MEDIUM_PADDING + IMPORTANT },
  mdPt2: { paddingTop: MEDIUM_PADDING * 2 + IMPORTANT },
  mdPt3: { paddingTop: MEDIUM_PADDING * 3 + IMPORTANT },
  mdPt4: { paddingTop: MEDIUM_PADDING * 4 + IMPORTANT },
  mdPt5: { paddingTop: MEDIUM_PADDING * 5 + IMPORTANT },

  mdPr0: { paddingRight: 0 + IMPORTANT },
  mdPr1: { paddingRight: MEDIUM_PADDING + IMPORTANT },
  mdPr2: { paddingRight: MEDIUM_PADDING * 2 + IMPORTANT },
  mdPr3: { paddingRight: MEDIUM_PADDING * 3 + IMPORTANT },
  mdPr4: { paddingRight: MEDIUM_PADDING * 4 + IMPORTANT },
  mdPr5: { paddingRight: MEDIUM_PADDING * 5 + IMPORTANT },

  mdPb0: { paddingBottom: 0 + IMPORTANT },
  mdPb1: { paddingBottom: MEDIUM_PADDING + IMPORTANT },
  mdPb2: { paddingBottom: MEDIUM_PADDING * 2 + IMPORTANT },
  mdPb3: { paddingBottom: MEDIUM_PADDING * 3 + IMPORTANT },
  mdPb4: { paddingBottom: MEDIUM_PADDING * 4 + IMPORTANT },
  mdPb5: { paddingBottom: MEDIUM_PADDING * 5 + IMPORTANT },

  mdPl0: { paddingLeft: 0 + IMPORTANT },
  mdPl1: { paddingLeft: MEDIUM_PADDING + IMPORTANT },
  mdPl2: { paddingLeft: MEDIUM_PADDING * 2 + IMPORTANT },
  mdPl3: { paddingLeft: MEDIUM_PADDING * 3 + IMPORTANT },
  mdPl4: { paddingLeft: MEDIUM_PADDING * 4 + IMPORTANT },
  mdPl5: { paddingLeft: MEDIUM_PADDING * 5 + IMPORTANT },

  mdPx0: { paddingLeft: 0 + IMPORTANT, paddingRight: 0 + IMPORTANT },
  mdPx1: {
    paddingLeft: MEDIUM_PADDING * 1 + IMPORTANT,
    paddingRight: MEDIUM_PADDING * 1 + IMPORTANT,
  },
  mdPx2: {
    paddingLeft: MEDIUM_PADDING * 2 + IMPORTANT,
    paddingRight: MEDIUM_PADDING * 2 + IMPORTANT,
  },
  mdPx3: {
    paddingLeft: MEDIUM_PADDING * 3 + IMPORTANT,
    paddingRight: MEDIUM_PADDING * 3 + IMPORTANT,
  },
  mdPx4: {
    paddingLeft: MEDIUM_PADDING * 4 + IMPORTANT,
    paddingRight: MEDIUM_PADDING * 4 + IMPORTANT,
  },
  mdPx5: {
    paddingLeft: MEDIUM_PADDING * 5 + IMPORTANT,
    paddingRight: MEDIUM_PADDING * 5 + IMPORTANT,
  },

  mdPy0: { paddingTop: 0 + IMPORTANT, paddingBottom: 0 + IMPORTANT },
  mdPy1: {
    paddingTop: MEDIUM_PADDING * 1 + IMPORTANT,
    paddingBottom: MEDIUM_PADDING * 1 + IMPORTANT,
  },
  mdPy2: {
    paddingTop: MEDIUM_PADDING * 2 + IMPORTANT,
    paddingBottom: MEDIUM_PADDING * 2 + IMPORTANT,
  },
  mdPy3: {
    paddingTop: MEDIUM_PADDING * 3 + IMPORTANT,
    paddingBottom: MEDIUM_PADDING * 3 + IMPORTANT,
  },
  mdPy4: {
    paddingTop: MEDIUM_PADDING * 4 + IMPORTANT,
    paddingBottom: MEDIUM_PADDING * 4 + IMPORTANT,
  },
  mdPy5: {
    paddingTop: MEDIUM_PADDING * 5 + IMPORTANT,
    paddingBottom: MEDIUM_PADDING * 5 + IMPORTANT,
  },

  /*-------------------------------------------------
   * Margin
   *-----------------------------------------------*/
  mdM0: { margin: 0 + IMPORTANT },
  mdM1: { margin: MEDIUM_MARGIN + IMPORTANT },
  mdM2: { margin: MEDIUM_MARGIN * 2 + IMPORTANT },
  mdM3: { margin: MEDIUM_MARGIN * 3 + IMPORTANT },
  mdM4: { margin: MEDIUM_MARGIN * 4 + IMPORTANT },
  mdM5: { margin: MEDIUM_MARGIN * 5 + IMPORTANT },
  mdMAuto: { margin: "auto" + IMPORTANT },

  mdMt0: { marginTop: 0 + IMPORTANT },
  mdMt1: { marginTop: MEDIUM_MARGIN + IMPORTANT },
  mdMt2: { marginTop: MEDIUM_MARGIN * 2 + IMPORTANT },
  mdMt3: { marginTop: MEDIUM_MARGIN * 3 + IMPORTANT },
  mdMt4: { marginTop: MEDIUM_MARGIN * 4 + IMPORTANT },
  mdMt5: { marginTop: MEDIUM_MARGIN * 5 + IMPORTANT },
  mdMtAuto: { marginTop: "auto" + IMPORTANT },

  mdMr0: { marginRight: 0 + IMPORTANT },
  mdMr1: { marginRight: MEDIUM_MARGIN + IMPORTANT },
  mdMr2: { marginRight: MEDIUM_MARGIN * 2 + IMPORTANT },
  mdMr3: { marginRight: MEDIUM_MARGIN * 3 + IMPORTANT },
  mdMr4: { marginRight: MEDIUM_MARGIN * 4 + IMPORTANT },
  mdMr5: { marginRight: MEDIUM_MARGIN * 5 + IMPORTANT },
  mdMrAuto: { marginRight: "auto" + IMPORTANT },

  mdMb0: { marginBottom: 0 + IMPORTANT },
  mdMb1: { marginBottom: MEDIUM_MARGIN + IMPORTANT },
  mdMb2: { marginBottom: MEDIUM_MARGIN * 2 + IMPORTANT },
  mdMb3: { marginBottom: MEDIUM_MARGIN * 3 + IMPORTANT },
  mdMb4: { marginBottom: MEDIUM_MARGIN * 4 + IMPORTANT },
  mdMb5: { marginBottom: MEDIUM_MARGIN * 5 + IMPORTANT },
  mdMbAuto: { marginBottom: "auto" + IMPORTANT },

  mdMl0: { marginLeft: 0 + IMPORTANT },
  mdMl1: { marginLeft: MEDIUM_MARGIN + IMPORTANT },
  mdMl2: { marginLeft: MEDIUM_MARGIN * 2 + IMPORTANT },
  mdMl3: { marginLeft: MEDIUM_MARGIN * 3 + IMPORTANT },
  mdMl4: { marginLeft: MEDIUM_MARGIN * 4 + IMPORTANT },
  mdMl5: { marginLeft: MEDIUM_MARGIN * 5 + IMPORTANT },
  mdMlAuto: { marginLeft: "auto" + IMPORTANT },

  mdMx0: { marginLeft: 0 + IMPORTANT, marginRight: 0 + IMPORTANT },
  mdMx1: { marginLeft: MEDIUM_MARGIN * 1 + IMPORTANT, marginRight: MEDIUM_MARGIN * 1 + IMPORTANT },
  mdMx2: { marginLeft: MEDIUM_MARGIN * 2 + IMPORTANT, marginRight: MEDIUM_MARGIN * 2 + IMPORTANT },
  mdMx3: { marginLeft: MEDIUM_MARGIN * 3 + IMPORTANT, marginRight: MEDIUM_MARGIN * 3 + IMPORTANT },
  mdMx4: { marginLeft: MEDIUM_MARGIN * 4 + IMPORTANT, marginRight: MEDIUM_MARGIN * 4 + IMPORTANT },
  mdMx5: { marginLeft: MEDIUM_MARGIN * 5 + IMPORTANT, marginRight: MEDIUM_MARGIN * 5 + IMPORTANT },
  mdMxAuto: { marginLeft: "auto" + IMPORTANT, marginRight: "auto" + IMPORTANT },

  mdMy0: { marginTop: 0 + IMPORTANT, marginBottom: 0 + IMPORTANT },
  mdMy1: { marginTop: MEDIUM_MARGIN * 1 + IMPORTANT, marginBottom: MEDIUM_MARGIN * 1 + IMPORTANT },
  mdMy2: { marginTop: MEDIUM_MARGIN * 2 + IMPORTANT, marginBottom: MEDIUM_MARGIN * 2 + IMPORTANT },
  mdMy3: { marginTop: MEDIUM_MARGIN * 3 + IMPORTANT, marginBottom: MEDIUM_MARGIN * 3 + IMPORTANT },
  mdMy4: { marginTop: MEDIUM_MARGIN * 4 + IMPORTANT, marginBottom: MEDIUM_MARGIN * 4 + IMPORTANT },
  mdMy5: { marginTop: MEDIUM_MARGIN * 5 + IMPORTANT, marginBottom: MEDIUM_MARGIN * 5 + IMPORTANT },
  mdMyAuto: { marginTop: "auto" + IMPORTANT, marginBottom: "auto" + IMPORTANT },

  mdMN1: { margin: MEDIUM_MARGIN * -1 + IMPORTANT },
  mdMN2: { margin: MEDIUM_MARGIN * -2 + IMPORTANT },
  mdMN3: { margin: MEDIUM_MARGIN * -3 + IMPORTANT },
  mdMN4: { margin: MEDIUM_MARGIN * -4 + IMPORTANT },
  mdMN5: { margin: MEDIUM_MARGIN * -5 + IMPORTANT },

  mdMtN1: { marginTop: MEDIUM_MARGIN * -1 + IMPORTANT },
  mdMtN2: { marginTop: MEDIUM_MARGIN * -2 + IMPORTANT },
  mdMtN3: { marginTop: MEDIUM_MARGIN * -3 + IMPORTANT },
  mdMtN4: { marginTop: MEDIUM_MARGIN * -4 + IMPORTANT },
  mdMtN5: { marginTop: MEDIUM_MARGIN * -5 + IMPORTANT },

  mdMrN1: { marginRight: MEDIUM_MARGIN * -1 + IMPORTANT },
  mdMrN2: { marginRight: MEDIUM_MARGIN * -2 + IMPORTANT },
  mdMrN3: { marginRight: MEDIUM_MARGIN * -3 + IMPORTANT },
  mdMrN4: { marginRight: MEDIUM_MARGIN * -4 + IMPORTANT },
  mdMrN5: { marginRight: MEDIUM_MARGIN * -5 + IMPORTANT },

  mdMbN1: { marginBottom: MEDIUM_MARGIN * -1 + IMPORTANT },
  mdMbN2: { marginBottom: MEDIUM_MARGIN * -2 + IMPORTANT },
  mdMbN3: { marginBottom: MEDIUM_MARGIN * -3 + IMPORTANT },
  mdMbN4: { marginBottom: MEDIUM_MARGIN * -4 + IMPORTANT },
  mdMbN5: { marginBottom: MEDIUM_MARGIN * -5 + IMPORTANT },

  mdMlN1: { marginLeft: MEDIUM_MARGIN * -1 + IMPORTANT },
  mdMlN2: { marginLeft: MEDIUM_MARGIN * -2 + IMPORTANT },
  mdMlN3: { marginLeft: MEDIUM_MARGIN * -3 + IMPORTANT },
  mdMlN4: { marginLeft: MEDIUM_MARGIN * -4 + IMPORTANT },
  mdMlN5: { marginLeft: MEDIUM_MARGIN * -5 + IMPORTANT },

  mdMxN1: {
    marginLeft: MEDIUM_MARGIN * -1 + IMPORTANT,
    marginRight: MEDIUM_MARGIN * -1 + IMPORTANT,
  },
  mdMxN2: {
    marginLeft: MEDIUM_MARGIN * -2 + IMPORTANT,
    marginRight: MEDIUM_MARGIN * -2 + IMPORTANT,
  },
  mdMxN3: {
    marginLeft: MEDIUM_MARGIN * -3 + IMPORTANT,
    marginRight: MEDIUM_MARGIN * -3 + IMPORTANT,
  },
  mdMxN4: {
    marginLeft: MEDIUM_MARGIN * -4 + IMPORTANT,
    marginRight: MEDIUM_MARGIN * -4 + IMPORTANT,
  },
  mdMxN5: {
    marginLeft: MEDIUM_MARGIN * -5 + IMPORTANT,
    marginRight: MEDIUM_MARGIN * -5 + IMPORTANT,
  },

  mdMyN1: {
    marginTop: MEDIUM_MARGIN * -1 + IMPORTANT,
    marginBottom: MEDIUM_MARGIN * -1 + IMPORTANT,
  },
  mdMyN2: {
    marginTop: MEDIUM_MARGIN * -2 + IMPORTANT,
    marginBottom: MEDIUM_MARGIN * -2 + IMPORTANT,
  },
  mdMyN3: {
    marginTop: MEDIUM_MARGIN * -3 + IMPORTANT,
    marginBottom: MEDIUM_MARGIN * -3 + IMPORTANT,
  },
  mdMyN4: {
    marginTop: MEDIUM_MARGIN * -4 + IMPORTANT,
    marginBottom: MEDIUM_MARGIN * -4 + IMPORTANT,
  },
  mdMyN5: {
    marginTop: MEDIUM_MARGIN * -5 + IMPORTANT,
    marginBottom: MEDIUM_MARGIN * -5 + IMPORTANT,
  },

  /*-------------------------------------------------
   * Gap
   *-----------------------------------------------*/
  mdGap0: { gap: "0" + IMPORTANT },
  mdGap1: { gap: MEDIUM_SPACING * 1 + IMPORTANT },
  mdGap2: { gap: MEDIUM_SPACING * 2 + IMPORTANT },
  mdGap3: { gap: MEDIUM_SPACING * 3 + IMPORTANT },
  mdGap4: { gap: MEDIUM_SPACING * 4 + IMPORTANT },
  mdGap5: { gap: MEDIUM_SPACING * 5 + IMPORTANT },

  mdRowGap0: { rowGap: "0" + IMPORTANT },
  mdRowGap1: { rowGap: MEDIUM_SPACING * 1 + IMPORTANT },
  mdRowGap2: { rowGap: MEDIUM_SPACING * 2 + IMPORTANT },
  mdRowGap3: { rowGap: MEDIUM_SPACING * 3 + IMPORTANT },
  mdRowGap4: { rowGap: MEDIUM_SPACING * 4 + IMPORTANT },
  mdRowGap5: { rowGap: MEDIUM_SPACING * 5 + IMPORTANT },

  mdColGap0: { columnGap: "0" + IMPORTANT },
  mdColGap1: { columnGap: MEDIUM_SPACING * 1 + IMPORTANT },
  mdColGap2: { columnGap: MEDIUM_SPACING * 2 + IMPORTANT },
  mdColGap3: { columnGap: MEDIUM_SPACING * 3 + IMPORTANT },
  mdColGap4: { columnGap: MEDIUM_SPACING * 4 + IMPORTANT },
  mdColGap5: { columnGap: MEDIUM_SPACING * 5 + IMPORTANT },

  /**************************************************
   * Text
   *************************************************/
  mdTextStart: { textAlign: "left" + IMPORTANT },
  mdTextEnd: { textAlign: "right" + IMPORTANT },
  mdTextCenter: { textAlign: "center" + IMPORTANT },
  mdTextJustify: { textAlign: "justify" + IMPORTANT },

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
