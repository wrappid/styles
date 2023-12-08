/* eslint-disable */
import {
  DEFAULT_MARGIN,
  DEFAULT_PADDING,
  DEFAULT_SPACING,
  IMPORTANT,
  PX,
} from "./DefaultUtilityStyles";

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
   * Cursor
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
  mdP1: { padding: MEDIUM_PADDING + PX },
  mdP2: { padding: MEDIUM_PADDING * 2 + PX },
  mdP3: { padding: MEDIUM_PADDING * 3 + PX },
  mdP4: { padding: MEDIUM_PADDING * 4 + PX },
  mdP5: { padding: MEDIUM_PADDING * 5 + PX },

  mdPt0: { paddingTop: 0 },
  mdPt1: { paddingTop: MEDIUM_PADDING + PX },
  mdPt2: { paddingTop: MEDIUM_PADDING * 2 + PX },
  mdPt3: { paddingTop: MEDIUM_PADDING * 3 + PX },
  mdPt4: { paddingTop: MEDIUM_PADDING * 4 + PX },
  mdPt5: { paddingTop: MEDIUM_PADDING * 5 + PX },

  mdPr0: { paddingRight: 0 },
  mdPr1: { paddingRight: MEDIUM_PADDING + PX },
  mdPr2: { paddingRight: MEDIUM_PADDING * 2 + PX },
  mdPr3: { paddingRight: MEDIUM_PADDING * 3 + PX },
  mdPr4: { paddingRight: MEDIUM_PADDING * 4 + PX },
  mdPr5: { paddingRight: MEDIUM_PADDING * 5 + PX },

  mdPb0: { paddingBottom: 0 },
  mdPb1: { paddingBottom: MEDIUM_PADDING + PX },
  mdPb2: { paddingBottom: MEDIUM_PADDING * 2 + PX },
  mdPb3: { paddingBottom: MEDIUM_PADDING * 3 + PX },
  mdPb4: { paddingBottom: MEDIUM_PADDING * 4 + PX },
  mdPb5: { paddingBottom: MEDIUM_PADDING * 5 + PX },

  mdPl0: { paddingLeft: 0 },
  mdPl1: { paddingLeft: MEDIUM_PADDING + PX },
  mdPl2: { paddingLeft: MEDIUM_PADDING * 2 + PX },
  mdPl3: { paddingLeft: MEDIUM_PADDING * 3 + PX },
  mdPl4: { paddingLeft: MEDIUM_PADDING * 4 + PX },
  mdPl5: { paddingLeft: MEDIUM_PADDING * 5 + PX },

  mdPx0: { paddingLeft: 0, paddingRight: 0 },
  mdPx1: {
    paddingLeft: MEDIUM_PADDING * 1 + PX,
    paddingRight: MEDIUM_PADDING * 1 + PX,
  },
  mdPx2: {
    paddingLeft: MEDIUM_PADDING * 2 + PX,
    paddingRight: MEDIUM_PADDING * 2 + PX,
  },
  mdPx3: {
    paddingLeft: MEDIUM_PADDING * 3 + PX,
    paddingRight: MEDIUM_PADDING * 3 + PX,
  },
  mdPx4: {
    paddingLeft: MEDIUM_PADDING * 4 + PX,
    paddingRight: MEDIUM_PADDING * 4 + PX,
  },
  mdPx5: {
    paddingLeft: MEDIUM_PADDING * 5 + PX,
    paddingRight: MEDIUM_PADDING * 5 + PX,
  },

  mdPy0: { paddingTop: 0, paddingBottom: 0 },
  mdPy1: {
    paddingTop: MEDIUM_PADDING * 1 + PX,
    paddingBottom: MEDIUM_PADDING * 1 + PX,
  },
  mdPy2: {
    paddingTop: MEDIUM_PADDING * 2 + PX,
    paddingBottom: MEDIUM_PADDING * 2 + PX,
  },
  mdPy3: {
    paddingTop: MEDIUM_PADDING * 3 + PX,
    paddingBottom: MEDIUM_PADDING * 3 + PX,
  },
  mdPy4: {
    paddingTop: MEDIUM_PADDING * 4 + PX,
    paddingBottom: MEDIUM_PADDING * 4 + PX,
  },
  mdPy5: {
    paddingTop: MEDIUM_PADDING * 5 + PX,
    paddingBottom: MEDIUM_PADDING * 5 + PX,
  },

  /*-------------------------------------------------
   * Margin
   *-----------------------------------------------*/
  mdM0: { margin: 0 + IMPORTANT },
  mdM1: { margin: MEDIUM_MARGIN + PX + IMPORTANT },
  mdM2: { margin: MEDIUM_MARGIN * 2 + PX + IMPORTANT },
  mdM3: { margin: MEDIUM_MARGIN * 3 + PX + IMPORTANT },
  mdM4: { margin: MEDIUM_MARGIN * 4 + PX + IMPORTANT },
  mdM5: { margin: MEDIUM_MARGIN * 5 + PX + IMPORTANT },
  mdMAuto: { margin: "auto" + IMPORTANT },

  mdMt0: { marginTop: 0 + IMPORTANT },
  mdMt1: { marginTop: MEDIUM_MARGIN + PX + IMPORTANT },
  mdMt2: { marginTop: MEDIUM_MARGIN * 2 + PX + IMPORTANT },
  mdMt3: { marginTop: MEDIUM_MARGIN * 3 + PX + IMPORTANT },
  mdMt4: { marginTop: MEDIUM_MARGIN * 4 + PX + IMPORTANT },
  mdMt5: { marginTop: MEDIUM_MARGIN * 5 + PX + IMPORTANT },
  mdMtAuto: { marginTop: "auto" + IMPORTANT },

  mdMr0: { marginRight: 0 + IMPORTANT },
  mdMr1: { marginRight: MEDIUM_MARGIN + PX + IMPORTANT },
  mdMr2: { marginRight: MEDIUM_MARGIN * 2 + PX + IMPORTANT },
  mdMr3: { marginRight: MEDIUM_MARGIN * 3 + PX + IMPORTANT },
  mdMr4: { marginRight: MEDIUM_MARGIN * 4 + PX + IMPORTANT },
  mdMr5: { marginRight: MEDIUM_MARGIN * 5 + PX + IMPORTANT },
  mdMrAuto: { marginRight: "auto" + IMPORTANT },

  mdMb0: { marginBottom: 0 + IMPORTANT },
  mdMb1: { marginBottom: MEDIUM_MARGIN + PX + IMPORTANT },
  mdMb2: { marginBottom: MEDIUM_MARGIN * 2 + PX + IMPORTANT },
  mdMb3: { marginBottom: MEDIUM_MARGIN * 3 + PX + IMPORTANT },
  mdMb4: { marginBottom: MEDIUM_MARGIN * 4 + PX + IMPORTANT },
  mdMb5: { marginBottom: MEDIUM_MARGIN * 5 + PX + IMPORTANT },
  mdMbAuto: { marginBottom: "auto" + IMPORTANT },

  mdMl0: { marginLeft: 0 + IMPORTANT },
  mdMl1: { marginLeft: MEDIUM_MARGIN + PX + IMPORTANT },
  mdMl2: { marginLeft: MEDIUM_MARGIN * 2 + PX + IMPORTANT },
  mdMl3: { marginLeft: MEDIUM_MARGIN * 3 + PX + IMPORTANT },
  mdMl4: { marginLeft: MEDIUM_MARGIN * 4 + PX + IMPORTANT },
  mdMl5: { marginLeft: MEDIUM_MARGIN * 5 + PX + IMPORTANT },
  mdMlAuto: { marginLeft: "auto" + IMPORTANT },

  mdMx0: { marginLeft: 0 + IMPORTANT, marginRight: 0 + IMPORTANT },
  mdMx1: { marginLeft: MEDIUM_MARGIN * 1, marginRight: MEDIUM_MARGIN * 1 + PX + IMPORTANT },
  mdMx2: { marginLeft: MEDIUM_MARGIN * 2, marginRight: MEDIUM_MARGIN * 2 + PX + IMPORTANT },
  mdMx3: { marginLeft: MEDIUM_MARGIN * 3, marginRight: MEDIUM_MARGIN * 3 + PX + IMPORTANT },
  mdMx4: { marginLeft: MEDIUM_MARGIN * 4, marginRight: MEDIUM_MARGIN * 4 + PX + IMPORTANT },
  mdMx5: { marginLeft: MEDIUM_MARGIN * 5, marginRight: MEDIUM_MARGIN * 5 + PX + IMPORTANT },
  mdMxAuto: { marginLeft: "auto" + IMPORTANT, marginRight: "auto" + IMPORTANT },

  mdMy0: { marginTop: 0 + IMPORTANT, marginBottom: 0 + IMPORTANT },
  mdMy1: { marginTop: MEDIUM_MARGIN * 1, marginBottom: MEDIUM_MARGIN * 1 + PX + IMPORTANT },
  mdMy2: { marginTop: MEDIUM_MARGIN * 2, marginBottom: MEDIUM_MARGIN * 2 + PX + IMPORTANT },
  mdMy3: { marginTop: MEDIUM_MARGIN * 3, marginBottom: MEDIUM_MARGIN * 3 + PX + IMPORTANT },
  mdMy4: { marginTop: MEDIUM_MARGIN * 4, marginBottom: MEDIUM_MARGIN * 4 + PX + IMPORTANT },
  mdMy5: { marginTop: MEDIUM_MARGIN * 5, marginBottom: MEDIUM_MARGIN * 5 + PX + IMPORTANT },
  mdMyAuto: { marginTop: "auto" + IMPORTANT, marginBottom: "auto" + IMPORTANT },

  mdMN1: { margin: MEDIUM_MARGIN * -1 + PX + IMPORTANT },
  mdMN2: { margin: MEDIUM_MARGIN * -2 + PX + IMPORTANT },
  mdMN3: { margin: MEDIUM_MARGIN * -3 + PX + IMPORTANT },
  mdMN4: { margin: MEDIUM_MARGIN * -4 + PX + IMPORTANT },
  mdMN5: { margin: MEDIUM_MARGIN * -5 + PX + IMPORTANT },

  mdMtN1: { marginTop: MEDIUM_MARGIN * -1 + PX + IMPORTANT },
  mdMtN2: { marginTop: MEDIUM_MARGIN * -2 + PX + IMPORTANT },
  mdMtN3: { marginTop: MEDIUM_MARGIN * -3 + PX + IMPORTANT },
  mdMtN4: { marginTop: MEDIUM_MARGIN * -4 + PX + IMPORTANT },
  mdMtN5: { marginTop: MEDIUM_MARGIN * -5 + PX + IMPORTANT },

  mdMrN1: { marginRight: MEDIUM_MARGIN * -1 + PX + IMPORTANT },
  mdMrN2: { marginRight: MEDIUM_MARGIN * -2 + PX + IMPORTANT },
  mdMrN3: { marginRight: MEDIUM_MARGIN * -3 + PX + IMPORTANT },
  mdMrN4: { marginRight: MEDIUM_MARGIN * -4 + PX + IMPORTANT },
  mdMrN5: { marginRight: MEDIUM_MARGIN * -5 + PX + IMPORTANT },

  mdMbN1: { marginBottom: MEDIUM_MARGIN * -1 + PX + IMPORTANT },
  mdMbN2: { marginBottom: MEDIUM_MARGIN * -2 + PX + IMPORTANT },
  mdMbN3: { marginBottom: MEDIUM_MARGIN * -3 + PX + IMPORTANT },
  mdMbN4: { marginBottom: MEDIUM_MARGIN * -4 + PX + IMPORTANT },
  mdMbN5: { marginBottom: MEDIUM_MARGIN * -5 + PX + IMPORTANT },

  mdMlN1: { marginLeft: MEDIUM_MARGIN * -1 + PX + IMPORTANT },
  mdMlN2: { marginLeft: MEDIUM_MARGIN * -2 + PX + IMPORTANT },
  mdMlN3: { marginLeft: MEDIUM_MARGIN * -3 + PX + IMPORTANT },
  mdMlN4: { marginLeft: MEDIUM_MARGIN * -4 + PX + IMPORTANT },
  mdMlN5: { marginLeft: MEDIUM_MARGIN * -5 + PX + IMPORTANT },

  mdMxN1: {
    marginLeft: MEDIUM_MARGIN * -1 + PX + IMPORTANT,
    marginRight: MEDIUM_MARGIN * -1 + PX + IMPORTANT,
  },
  mdMxN2: {
    marginLeft: MEDIUM_MARGIN * -2 + PX + IMPORTANT,
    marginRight: MEDIUM_MARGIN * -2 + PX + IMPORTANT,
  },
  mdMxN3: {
    marginLeft: MEDIUM_MARGIN * -3 + PX + IMPORTANT,
    marginRight: MEDIUM_MARGIN * -3 + PX + IMPORTANT,
  },
  mdMxN4: {
    marginLeft: MEDIUM_MARGIN * -4 + PX + IMPORTANT,
    marginRight: MEDIUM_MARGIN * -4 + PX + IMPORTANT,
  },
  mdMxN5: {
    marginLeft: MEDIUM_MARGIN * -5 + PX + IMPORTANT,
    marginRight: MEDIUM_MARGIN * -5 + PX + IMPORTANT,
  },

  mdMyN1: {
    marginTop: MEDIUM_MARGIN * -1 + PX + IMPORTANT,
    marginBottom: MEDIUM_MARGIN * -1 + PX + IMPORTANT,
  },
  mdMyN2: {
    marginTop: MEDIUM_MARGIN * -2 + PX + IMPORTANT,
    marginBottom: MEDIUM_MARGIN * -2 + PX + IMPORTANT,
  },
  mdMyN3: {
    marginTop: MEDIUM_MARGIN * -3 + PX + IMPORTANT,
    marginBottom: MEDIUM_MARGIN * -3 + PX + IMPORTANT,
  },
  mdMyN4: {
    marginTop: MEDIUM_MARGIN * -4 + PX + IMPORTANT,
    marginBottom: MEDIUM_MARGIN * -4 + PX + IMPORTANT,
  },
  mdMyN5: {
    marginTop: MEDIUM_MARGIN * -5 + PX + IMPORTANT,
    marginBottom: MEDIUM_MARGIN * -5 + PX + IMPORTANT,
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
