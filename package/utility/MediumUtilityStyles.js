/* eslint-disable */
import { DEFAULT_MARGIN, DEFAULT_PADDING, DEFAULT_SPACING } from "./DefaultUtilityStyles";

export const MEDIUM_MARGIN = DEFAULT_MARGIN;
export const MEDIUM_PADDING = DEFAULT_PADDING;
export const MEDIUM_SPACING = DEFAULT_SPACING;

export const mediumUtilityStyles = {
  /**************************************************
   * Alignment
   *************************************************/
  mdAlignItemsStart: { display: "flex", alignItems: "flex-start" },
  mdAlignItemsEnd: { display: "flex", alignItems: "flex-end" },
  mdAlignItemsCenter: { display: "flex", alignItems: "center" },
  mdAlignItemsBaseline: { display: "flex", alignItems: "baseline" },
  mdAlignItemsStretch: { display: "flex", alignItems: "stretch" },

  mdAlignContentStart: { display: "flex", alignContent: "flex-start" },
  mdAlignContentEnd: { display: "flex", alignContent: "flex-end" },
  mdAlignContentCenter: { display: "flex", alignContent: "center" },
  mdAlignContentBetween: { display: "flex", alignContent: "space-between" },
  mdAlignContentAround: { display: "flex", alignContent: "space-around" },
  mdAlignContentStretch: { display: "flex", alignContent: "stretch" },

  mdAlignSelfAuto: { display: "flex", alignSelf: "auto" },
  mdAlignSelfStart: { display: "flex", alignSelf: "flex-start" },
  mdAlignSelfEnd: { display: "flex", alignSelf: "flex-end" },
  mdAlignSelfCenter: { display: "flex", alignSelf: "center" },
  mdAlignSelfBaseline: { display: "flex", alignSelf: "baseline" },
  mdAlignSelfStretch: { display: "flex", alignSelf: "stretch" },

  mdJustifyContentCenter: { display: "flex", justifyContent: "center" },
  mdJustifyContentFlexStart: { display: "flex", justifyContent: "flex-start" },
  mdJustifyContentFlexEnd: { display: "flex", justifyContent: "flex-end" },
  mdJustifyContentSpaceBetween: { display: "flex", justifyContent: "space-between" },
  mdJustifyContentSpaceAround: { display: "flex", justifyContent: "space-around" },
  mdJustifyContentSpaceEvenly: { display: "flex", justifyContent: "space-evenly" },

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
  mdDisplayInline: { display: "inline" },
  mdDisplayInlineBlock: { display: "inline-block" },
  mdDisplayBlock: { display: "block" },
  mdDisplayGrid: { display: "grid" },
  mdDisplayTable: { display: "table" },
  mdDisplayTableRow: { display: "table-row" },
  mdDisplayTableCell: { display: "table-cell" },
  mdDisplayFlex: { display: "flex" },
  mdDisplayInlineFlex: { display: "inline-flex" },
  mdDisplayNone: { display: "none" },

  /**************************************************
   * Flex
   *************************************************/
  mdFlexDirectionRow: { flexDirection: "row" },
  mdFlexDirectionColumn: { flexDirection: "column" },
  mdFlexDirectionRowReverse: { flexDirection: "row-reverse" },
  mdFlexDirectionColumnReverse: { flexDirection: "column-reverse" },
  mdFlexFill: { flex: "1 1 auto" },
  mdFlexGrow0: { flexGrow: "0" },
  mdFlexGrow1: { flexGrow: "1" },
  mdFlexShrink0: { flexShrink: "0" },
  mdFlexShrink1: { flexShrink: "1" },
  mdFlexWrapWrap: { flexWrap: "wrap" },
  mdFlexWrapNoWrap: { flexWrap: "nowrap" },
  mdFlexWrapWrapReverse: { flexWrap: "wrap-reverse" },

  /**************************************************
   * Float
   *************************************************/
  mdFloatStart: { float: "left" },
  mdFloatEnd: { float: "right" },
  mdFloatNone: { float: "none" },

  /**************************************************
   * Interactions
   *************************************************/
  //NO SCREEN SIZE SPECIFIC STYLE AVAILABLE

  /**************************************************
   * Object Fit
   *************************************************/
  mdObjectFitContain: {
    // -o-object-fit: contain !important;
    objectFit: "contain",
  },

  mdObjectFitCover: {
    // -o-object-fit: cover !important;
    objectFit: "cover",
  },

  mdObjectFitFill: {
    // -o-object-fit: fill !important;
    objectFit: "fill",
  },

  mdObjectFitScale: {
    // -o-object-fit: scale-down !important;
    objectFit: "scale-down",
  },

  mdObjectFitNone: {
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
  mdP0: { padding: 0 },
  mdP1: { padding: MEDIUM_PADDING },
  mdP2: { padding: MEDIUM_PADDING * 2 },
  mdP3: { padding: MEDIUM_PADDING * 3 },
  mdP4: { padding: MEDIUM_PADDING * 4 },
  mdP5: { padding: MEDIUM_PADDING * 5 },

  mdPt0: { paddingTop: 0 },
  mdPt1: { paddingTop: MEDIUM_PADDING },
  mdPt2: { paddingTop: MEDIUM_PADDING * 2 },
  mdPt3: { paddingTop: MEDIUM_PADDING * 3 },
  mdPt4: { paddingTop: MEDIUM_PADDING * 4 },
  mdPt5: { paddingTop: MEDIUM_PADDING * 5 },

  mdPr0: { paddingRight: 0 },
  mdPr1: { paddingRight: MEDIUM_PADDING },
  mdPr2: { paddingRight: MEDIUM_PADDING * 2 },
  mdPr3: { paddingRight: MEDIUM_PADDING * 3 },
  mdPr4: { paddingRight: MEDIUM_PADDING * 4 },
  mdPr5: { paddingRight: MEDIUM_PADDING * 5 },

  mdPb0: { paddingBottom: 0 },
  mdPb1: { paddingBottom: MEDIUM_PADDING },
  mdPb2: { paddingBottom: MEDIUM_PADDING * 2 },
  mdPb3: { paddingBottom: MEDIUM_PADDING * 3 },
  mdPb4: { paddingBottom: MEDIUM_PADDING * 4 },
  mdPb5: { paddingBottom: MEDIUM_PADDING * 5 },

  mdPl0: { paddingLeft: 0 },
  mdPl1: { paddingLeft: MEDIUM_PADDING },
  mdPl2: { paddingLeft: MEDIUM_PADDING * 2 },
  mdPl3: { paddingLeft: MEDIUM_PADDING * 3 },
  mdPl4: { paddingLeft: MEDIUM_PADDING * 4 },
  mdPl5: { paddingLeft: MEDIUM_PADDING * 5 },

  mdPx0: { paddingLeft: 0, paddingRight: 0 },
  mdPx1: {
    paddingLeft: MEDIUM_PADDING * 1,
    paddingRight: MEDIUM_PADDING * 1,
  },
  mdPx2: {
    paddingLeft: MEDIUM_PADDING * 2,
    paddingRight: MEDIUM_PADDING * 2,
  },
  mdPx3: {
    paddingLeft: MEDIUM_PADDING * 3,
    paddingRight: MEDIUM_PADDING * 3,
  },
  mdPx4: {
    paddingLeft: MEDIUM_PADDING * 4,
    paddingRight: MEDIUM_PADDING * 4,
  },
  mdPx5: {
    paddingLeft: MEDIUM_PADDING * 5,
    paddingRight: MEDIUM_PADDING * 5,
  },

  mdPy0: { paddingTop: 0, paddingBottom: 0 },
  mdPy1: {
    paddingTop: MEDIUM_PADDING * 1,
    paddingBottom: MEDIUM_PADDING * 1,
  },
  mdPy2: {
    paddingTop: MEDIUM_PADDING * 2,
    paddingBottom: MEDIUM_PADDING * 2,
  },
  mdPy3: {
    paddingTop: MEDIUM_PADDING * 3,
    paddingBottom: MEDIUM_PADDING * 3,
  },
  mdPy4: {
    paddingTop: MEDIUM_PADDING * 4,
    paddingBottom: MEDIUM_PADDING * 4,
  },
  mdPy5: {
    paddingTop: MEDIUM_PADDING * 5,
    paddingBottom: MEDIUM_PADDING * 5,
  },

  /*-------------------------------------------------
   * Margin
   *-----------------------------------------------*/
  mdM0: { margin: 0 },
  mdM1: { margin: MEDIUM_MARGIN },
  mdM2: { margin: MEDIUM_MARGIN * 2 },
  mdM3: { margin: MEDIUM_MARGIN * 3 },
  mdM4: { margin: MEDIUM_MARGIN * 4 },
  mdM5: { margin: MEDIUM_MARGIN * 5 },
  mdMAuto: { margin: "auto" },

  mdMt0: { marginTop: 0 },
  mdMt1: { marginTop: MEDIUM_MARGIN },
  mdMt2: { marginTop: MEDIUM_MARGIN * 2 },
  mdMt3: { marginTop: MEDIUM_MARGIN * 3 },
  mdMt4: { marginTop: MEDIUM_MARGIN * 4 },
  mdMt5: { marginTop: MEDIUM_MARGIN * 5 },
  mdMtAuto: { marginTop: "auto" },

  mdMr0: { marginRight: 0 },
  mdMr1: { marginRight: MEDIUM_MARGIN },
  mdMr2: { marginRight: MEDIUM_MARGIN * 2 },
  mdMr3: { marginRight: MEDIUM_MARGIN * 3 },
  mdMr4: { marginRight: MEDIUM_MARGIN * 4 },
  mdMr5: { marginRight: MEDIUM_MARGIN * 5 },
  mdMrAuto: { marginRight: "auto" },

  mdMb0: { marginBottom: 0 },
  mdMb1: { marginBottom: MEDIUM_MARGIN },
  mdMb2: { marginBottom: MEDIUM_MARGIN * 2 },
  mdMb3: { marginBottom: MEDIUM_MARGIN * 3 },
  mdMb4: { marginBottom: MEDIUM_MARGIN * 4 },
  mdMb5: { marginBottom: MEDIUM_MARGIN * 5 },
  mdMbAuto: { marginBottom: "auto" },

  mdMl0: { marginLeft: 0 },
  mdMl1: { marginLeft: MEDIUM_MARGIN },
  mdMl2: { marginLeft: MEDIUM_MARGIN * 2 },
  mdMl3: { marginLeft: MEDIUM_MARGIN * 3 },
  mdMl4: { marginLeft: MEDIUM_MARGIN * 4 },
  mdMl5: { marginLeft: MEDIUM_MARGIN * 5 },
  mdMlAuto: { marginLeft: "auto" },

  mdMx0: { marginLeft: 0, marginRight: 0 },
  mdMx1: { marginLeft: MEDIUM_MARGIN * 1, marginRight: MEDIUM_MARGIN * 1 },
  mdMx2: { marginLeft: MEDIUM_MARGIN * 2, marginRight: MEDIUM_MARGIN * 2 },
  mdMx3: { marginLeft: MEDIUM_MARGIN * 3, marginRight: MEDIUM_MARGIN * 3 },
  mdMx4: { marginLeft: MEDIUM_MARGIN * 4, marginRight: MEDIUM_MARGIN * 4 },
  mdMx5: { marginLeft: MEDIUM_MARGIN * 5, marginRight: MEDIUM_MARGIN * 5 },
  mdMxAuto: { marginLeft: "auto", marginRight: "auto" },

  mdMy0: { marginTop: 0, marginBottom: 0 },
  mdMy1: { marginTop: MEDIUM_MARGIN * 1, marginBottom: MEDIUM_MARGIN * 1 },
  mdMy2: { marginTop: MEDIUM_MARGIN * 2, marginBottom: MEDIUM_MARGIN * 2 },
  mdMy3: { marginTop: MEDIUM_MARGIN * 3, marginBottom: MEDIUM_MARGIN * 3 },
  mdMy4: { marginTop: MEDIUM_MARGIN * 4, marginBottom: MEDIUM_MARGIN * 4 },
  mdMy5: { marginTop: MEDIUM_MARGIN * 5, marginBottom: MEDIUM_MARGIN * 5 },
  mdMyAuto: { marginTop: "auto", marginBottom: "auto" },

  mdMN1: { margin: MEDIUM_MARGIN * -1 },
  mdMN2: { margin: MEDIUM_MARGIN * -2 },
  mdMN3: { margin: MEDIUM_MARGIN * -3 },
  mdMN4: { margin: MEDIUM_MARGIN * -4 },
  mdMN5: { margin: MEDIUM_MARGIN * -5 },

  mdMtN1: { marginTop: MEDIUM_MARGIN * -1 },
  mdMtN2: { marginTop: MEDIUM_MARGIN * -2 },
  mdMtN3: { marginTop: MEDIUM_MARGIN * -3 },
  mdMtN4: { marginTop: MEDIUM_MARGIN * -4 },
  mdMtN5: { marginTop: MEDIUM_MARGIN * -5 },

  mdMrN1: { marginRight: MEDIUM_MARGIN * -1 },
  mdMrN2: { marginRight: MEDIUM_MARGIN * -2 },
  mdMrN3: { marginRight: MEDIUM_MARGIN * -3 },
  mdMrN4: { marginRight: MEDIUM_MARGIN * -4 },
  mdMrN5: { marginRight: MEDIUM_MARGIN * -5 },

  mdMbN1: { marginBottom: MEDIUM_MARGIN * -1 },
  mdMbN2: { marginBottom: MEDIUM_MARGIN * -2 },
  mdMbN3: { marginBottom: MEDIUM_MARGIN * -3 },
  mdMbN4: { marginBottom: MEDIUM_MARGIN * -4 },
  mdMbN5: { marginBottom: MEDIUM_MARGIN * -5 },

  mdMlN1: { marginLeft: MEDIUM_MARGIN * -1 },
  mdMlN2: { marginLeft: MEDIUM_MARGIN * -2 },
  mdMlN3: { marginLeft: MEDIUM_MARGIN * -3 },
  mdMlN4: { marginLeft: MEDIUM_MARGIN * -4 },
  mdMlN5: { marginLeft: MEDIUM_MARGIN * -5 },

  mdMxN1: {
    marginLeft: MEDIUM_MARGIN * -1,
    marginRight: MEDIUM_MARGIN * -1,
  },
  mdMxN2: {
    marginLeft: MEDIUM_MARGIN * -2,
    marginRight: MEDIUM_MARGIN * -2,
  },
  mdMxN3: {
    marginLeft: MEDIUM_MARGIN * -3,
    marginRight: MEDIUM_MARGIN * -3,
  },
  mdMxN4: {
    marginLeft: MEDIUM_MARGIN * -4,
    marginRight: MEDIUM_MARGIN * -4,
  },
  mdMxN5: {
    marginLeft: MEDIUM_MARGIN * -5,
    marginRight: MEDIUM_MARGIN * -5,
  },

  mdMyN1: {
    marginTop: MEDIUM_MARGIN * -1,
    marginBottom: MEDIUM_MARGIN * -1,
  },
  mdMyN2: {
    marginTop: MEDIUM_MARGIN * -2,
    marginBottom: MEDIUM_MARGIN * -2,
  },
  mdMyN3: {
    marginTop: MEDIUM_MARGIN * -3,
    marginBottom: MEDIUM_MARGIN * -3,
  },
  mdMyN4: {
    marginTop: MEDIUM_MARGIN * -4,
    marginBottom: MEDIUM_MARGIN * -4,
  },
  mdMyN5: {
    marginTop: MEDIUM_MARGIN * -5,
    marginBottom: MEDIUM_MARGIN * -5,
  },

  /*-------------------------------------------------
   * Gap
   *-----------------------------------------------*/
  mdGap0: { gap: "0" },
  mdGap1: { gap: MEDIUM_SPACING * 1 },
  mdGap2: { gap: MEDIUM_SPACING * 2 },
  mdGap3: { gap: MEDIUM_SPACING * 3 },
  mdGap4: { gap: MEDIUM_SPACING * 4 },
  mdGap5: { gap: MEDIUM_SPACING * 5 },

  mdRowGap0: { rowGap: "0" },
  mdRowGap1: { rowGap: MEDIUM_SPACING * 1 },
  mdRowGap2: { rowGap: MEDIUM_SPACING * 2 },
  mdRowGap3: { rowGap: MEDIUM_SPACING * 3 },
  mdRowGap4: { rowGap: MEDIUM_SPACING * 4 },
  mdRowGap5: { rowGap: MEDIUM_SPACING * 5 },

  mdColGap0: { columnGap: "0" },
  mdColGap1: { columnGap: MEDIUM_SPACING * 1 },
  mdColGap2: { columnGap: MEDIUM_SPACING * 2 },
  mdColGap3: { columnGap: MEDIUM_SPACING * 3 },
  mdColGap4: { columnGap: MEDIUM_SPACING * 4 },
  mdColGap5: { columnGap: MEDIUM_SPACING * 5 },

  /**************************************************
   * Text
   *************************************************/
  mdTextStart: { textAlign: "left" },
  mdTextEnd: { textAlign: "right" },
  mdTextCenter: { textAlign: "center" },
  mdTextJustify: { textAlign: "justify" },

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
