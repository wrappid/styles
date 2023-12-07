/* eslint-disable */
import {
  DEFAULT_MARGIN,
  DEFAULT_PADDING,
  DEFAULT_SPACING,
  IMPORTANT,
  PX,
} from "./DefaultUtilityStyles";

export const LARGE_MARGIN = DEFAULT_MARGIN;
export const LARGE_PADDING = DEFAULT_PADDING;
export const LARGE_SPACING = DEFAULT_SPACING;

export const largeUtilityStyles = {
  /**************************************************
   * Alignment
   *************************************************/
  lgAlignItemsStart: { display: "flex", alignItems: "flex-start" },
  lgAlignItemsEnd: { display: "flex", alignItems: "flex-end" },
  lgAlignItemsCenter: { display: "flex", alignItems: "center" },
  lgAlignItemsBaseline: { display: "flex", alignItems: "baseline" },
  lgAlignItemsStretch: { display: "flex", alignItems: "stretch" },

  lgAlignContentStart: { display: "flex", alignContent: "flex-start" },
  lgAlignContentEnd: { display: "flex", alignContent: "flex-end" },
  lgAlignContentCenter: { display: "flex", alignContent: "center" },
  lgAlignContentBetween: { display: "flex", alignContent: "space-between" },
  lgAlignContentAround: { display: "flex", alignContent: "space-around" },
  lgAlignContentStretch: { display: "flex", alignContent: "stretch" },

  lgAlignSelfAuto: { display: "flex", alignSelf: "auto" },
  lgAlignSelfStart: { display: "flex", alignSelf: "flex-start" },
  lgAlignSelfEnd: { display: "flex", alignSelf: "flex-end" },
  lgAlignSelfCenter: { display: "flex", alignSelf: "center" },
  lgAlignSelfBaseline: { display: "flex", alignSelf: "baseline" },
  lgAlignSelfStretch: { display: "flex", alignSelf: "stretch" },

  lgJustifyContentCenter: { display: "flex", justifyContent: "center" },
  lgJustifyContentFlexStart: { display: "flex", justifyContent: "flex-start" },
  lgJustifyContentFlexEnd: { display: "flex", justifyContent: "flex-end" },
  lgJustifyContentSpaceBetween: { display: "flex", justifyContent: "space-between" },
  lgJustifyContentSpaceAround: { display: "flex", justifyContent: "space-around" },
  lgJustifyContentSpaceEvenly: { display: "flex", justifyContent: "space-evenly" },

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
  lgDisplayInline: { display: "inline" },
  lgDisplayInlineBlock: { display: "inline-block" },
  lgDisplayBlock: { display: "block" },
  lgDisplayGrid: { display: "grid" },
  lgDisplayTable: { display: "table" },
  lgDisplayTableRow: { display: "table-row" },
  lgDisplayTableCell: { display: "table-cell" },
  lgDisplayFlex: { display: "flex" },
  lgDisplayInlineFlex: { display: "inline-flex" },
  lgDisplayNone: { display: "none" },

  /**************************************************
   * Flex
   *************************************************/
  lgFlexDirectionRow: { flexDirection: "row" },
  lgFlexDirectionColumn: { flexDirection: "column" },
  lgFlexDirectionRowReverse: { flexDirection: "row-reverse" },
  lgFlexDirectionColumnReverse: { flexDirection: "column-reverse" },
  lgFlexFill: { flex: "1 1 auto" },
  lgFlexGrow0: { flexGrow: "0" },
  lgFlexGrow1: { flexGrow: "1" },
  lgFlexShrink0: { flexShrink: "0" },
  lgFlexShrink1: { flexShrink: "1" },
  lgFlexWrapWrap: { flexWrap: "wrap" },
  lgFlexWrapNoWrap: { flexWrap: "nowrap" },
  lgFlexWrapWrapReverse: { flexWrap: "wrap-reverse" },

  /**************************************************
   * Float
   *************************************************/
  lgFloatStart: { float: "left" },
  lgFloatEnd: { float: "right" },
  lgFloatNone: { float: "none" },

  /**************************************************
   * Interactions
   *************************************************/
  //NO SCREEN SIZE SPECIFIC STYLE AVAILABLE

  /**************************************************
   * Object Fit
   *************************************************/
  lgObjectFitContain: {
    // -o-object-fit: contain !important;
    objectFit: "contain",
  },

  lgObjectFitCover: {
    // -o-object-fit: cover !important;
    objectFit: "cover",
  },

  lgObjectFitFill: {
    // -o-object-fit: fill !important;
    objectFit: "fill",
  },

  lgObjectFitScale: {
    // -o-object-fit: scale-down !important;
    objectFit: "scale-down",
  },

  lgObjectFitNone: {
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
  lgP0: { padding: 0 },
  lgP1: { padding: LARGE_PADDING + PX },
  lgP2: { padding: LARGE_PADDING * 2 + PX },
  lgP3: { padding: LARGE_PADDING * 3 + PX },
  lgP4: { padding: LARGE_PADDING * 4 + PX },
  lgP5: { padding: LARGE_PADDING * 5 + PX },

  lgPt0: { paddingTop: 0 },
  lgPt1: { paddingTop: LARGE_PADDING + PX },
  lgPt2: { paddingTop: LARGE_PADDING * 2 + PX },
  lgPt3: { paddingTop: LARGE_PADDING * 3 + PX },
  lgPt4: { paddingTop: LARGE_PADDING * 4 + PX },
  lgPt5: { paddingTop: LARGE_PADDING * 5 + PX },

  lgPr0: { paddingRight: 0 },
  lgPr1: { paddingRight: LARGE_PADDING + PX },
  lgPr2: { paddingRight: LARGE_PADDING * 2 + PX },
  lgPr3: { paddingRight: LARGE_PADDING * 3 + PX },
  lgPr4: { paddingRight: LARGE_PADDING * 4 + PX },
  lgPr5: { paddingRight: LARGE_PADDING * 5 + PX },

  lgPb0: { paddingBottom: 0 },
  lgPb1: { paddingBottom: LARGE_PADDING + PX },
  lgPb2: { paddingBottom: LARGE_PADDING * 2 + PX },
  lgPb3: { paddingBottom: LARGE_PADDING * 3 + PX },
  lgPb4: { paddingBottom: LARGE_PADDING * 4 + PX },
  lgPb5: { paddingBottom: LARGE_PADDING * 5 + PX },

  lgPl0: { paddingLeft: 0 },
  lgPl1: { paddingLeft: LARGE_PADDING + PX },
  lgPl2: { paddingLeft: LARGE_PADDING * 2 + PX },
  lgPl3: { paddingLeft: LARGE_PADDING * 3 + PX },
  lgPl4: { paddingLeft: LARGE_PADDING * 4 + PX },
  lgPl5: { paddingLeft: LARGE_PADDING * 5 + PX },

  lgPx0: { paddingLeft: 0, paddingRight: 0 },
  lgPx1: {
    paddingLeft: LARGE_PADDING * 1 + PX,
    paddingRight: LARGE_PADDING * 1 + PX,
  },
  lgPx2: {
    paddingLeft: LARGE_PADDING * 2 + PX,
    paddingRight: LARGE_PADDING * 2 + PX,
  },
  lgPx3: {
    paddingLeft: LARGE_PADDING * 3 + PX,
    paddingRight: LARGE_PADDING * 3 + PX,
  },
  lgPx4: {
    paddingLeft: LARGE_PADDING * 4 + PX,
    paddingRight: LARGE_PADDING * 4 + PX,
  },
  lgPx5: {
    paddingLeft: LARGE_PADDING * 5 + PX,
    paddingRight: LARGE_PADDING * 5 + PX,
  },

  lgPy0: { paddingTop: 0, paddingBottom: 0 },
  lgPy1: {
    paddingTop: LARGE_PADDING * 1 + PX,
    paddingBottom: LARGE_PADDING * 1 + PX,
  },
  lgPy2: {
    paddingTop: LARGE_PADDING * 2 + PX,
    paddingBottom: LARGE_PADDING * 2 + PX,
  },
  lgPy3: {
    paddingTop: LARGE_PADDING * 3 + PX,
    paddingBottom: LARGE_PADDING * 3 + PX,
  },
  lgPy4: {
    paddingTop: LARGE_PADDING * 4 + PX,
    paddingBottom: LARGE_PADDING * 4 + PX,
  },
  lgPy5: {
    paddingTop: LARGE_PADDING * 5 + PX,
    paddingBottom: LARGE_PADDING * 5 + PX,
  },

  /*-------------------------------------------------
   * Margin
   *-----------------------------------------------*/
  lgM0: { margin: 0 + IMPORTANT },
  lgM1: { margin: LARGE_MARGIN + PX + IMPORTANT },
  lgM2: { margin: LARGE_MARGIN * 2 + PX + IMPORTANT },
  lgM3: { margin: LARGE_MARGIN * 3 + PX + IMPORTANT },
  lgM4: { margin: LARGE_MARGIN * 4 + PX + IMPORTANT },
  lgM5: { margin: LARGE_MARGIN * 5 + PX + IMPORTANT },
  lgMAuto: { margin: "auto" + IMPORTANT },

  lgMt0: { marginTop: 0 + IMPORTANT },
  lgMt1: { marginTop: LARGE_MARGIN + PX + IMPORTANT },
  lgMt2: { marginTop: LARGE_MARGIN * 2 + PX + IMPORTANT },
  lgMt3: { marginTop: LARGE_MARGIN * 3 + PX + IMPORTANT },
  lgMt4: { marginTop: LARGE_MARGIN * 4 + PX + IMPORTANT },
  lgMt5: { marginTop: LARGE_MARGIN * 5 + PX + IMPORTANT },
  lgMtAuto: { marginTop: "auto" + IMPORTANT },

  lgMr0: { marginRight: 0 + IMPORTANT },
  lgMr1: { marginRight: LARGE_MARGIN + PX + IMPORTANT },
  lgMr2: { marginRight: LARGE_MARGIN * 2 + PX + IMPORTANT },
  lgMr3: { marginRight: LARGE_MARGIN * 3 + PX + IMPORTANT },
  lgMr4: { marginRight: LARGE_MARGIN * 4 + PX + IMPORTANT },
  lgMr5: { marginRight: LARGE_MARGIN * 5 + PX + IMPORTANT },
  lgMrAuto: { marginRight: "auto" + IMPORTANT },

  lgMb0: { marginBottom: 0 + IMPORTANT },
  lgMb1: { marginBottom: LARGE_MARGIN + PX + IMPORTANT },
  lgMb2: { marginBottom: LARGE_MARGIN * 2 + PX + IMPORTANT },
  lgMb3: { marginBottom: LARGE_MARGIN * 3 + PX + IMPORTANT },
  lgMb4: { marginBottom: LARGE_MARGIN * 4 + PX + IMPORTANT },
  lgMb5: { marginBottom: LARGE_MARGIN * 5 + PX + IMPORTANT },
  lgMbAuto: { marginBottom: "auto" + IMPORTANT },

  lgMl0: { marginLeft: 0 + IMPORTANT },
  lgMl1: { marginLeft: LARGE_MARGIN + PX + IMPORTANT },
  lgMl2: { marginLeft: LARGE_MARGIN * 2 + PX + IMPORTANT },
  lgMl3: { marginLeft: LARGE_MARGIN * 3 + PX + IMPORTANT },
  lgMl4: { marginLeft: LARGE_MARGIN * 4 + PX + IMPORTANT },
  lgMl5: { marginLeft: LARGE_MARGIN * 5 + PX + IMPORTANT },
  lgMlAuto: { marginLeft: "auto" + IMPORTANT },

  lgMx0: { marginLeft: 0, marginRight: 0 + IMPORTANT },
  lgMx1: {
    marginLeft: LARGE_MARGIN * 1 + PX + IMPORTANT,
    marginRight: LARGE_MARGIN * 1 + PX + IMPORTANT,
  },
  lgMx2: {
    marginLeft: LARGE_MARGIN * 2 + PX + IMPORTANT,
    marginRight: LARGE_MARGIN * 2 + PX + IMPORTANT,
  },
  lgMx3: {
    marginLeft: LARGE_MARGIN * 3 + PX + IMPORTANT,
    marginRight: LARGE_MARGIN * 3 + PX + IMPORTANT,
  },
  lgMx4: {
    marginLeft: LARGE_MARGIN * 4 + PX + IMPORTANT,
    marginRight: LARGE_MARGIN * 4 + PX + IMPORTANT,
  },
  lgMx5: {
    marginLeft: LARGE_MARGIN * 5 + PX + IMPORTANT,
    marginRight: LARGE_MARGIN * 5 + PX + IMPORTANT,
  },
  lgMxAuto: { marginLeft: "auto" + IMPORTANT, marginRight: "auto" + IMPORTANT },

  lgMy0: { marginTop: 0, marginBottom: 0 + IMPORTANT },
  lgMy1: {
    marginTop: LARGE_MARGIN * 1 + PX + IMPORTANT,
    marginBottom: LARGE_MARGIN * 1 + PX + IMPORTANT,
  },
  lgMy2: {
    marginTop: LARGE_MARGIN * 2 + PX + IMPORTANT,
    marginBottom: LARGE_MARGIN * 2 + PX + IMPORTANT,
  },
  lgMy3: {
    marginTop: LARGE_MARGIN * 3 + PX + IMPORTANT,
    marginBottom: LARGE_MARGIN * 3 + PX + IMPORTANT,
  },
  lgMy4: {
    marginTop: LARGE_MARGIN * 4 + PX + IMPORTANT,
    marginBottom: LARGE_MARGIN * 4 + PX + IMPORTANT,
  },
  lgMy5: {
    marginTop: LARGE_MARGIN * 5 + PX + IMPORTANT,
    marginBottom: LARGE_MARGIN * 5 + PX + IMPORTANT,
  },
  lgMyAuto: { marginTop: "auto" + IMPORTANT, marginBottom: "auto" + IMPORTANT },

  lgMN1: { margin: LARGE_MARGIN * -1 + PX + IMPORTANT },
  lgMN2: { margin: LARGE_MARGIN * -2 + PX + IMPORTANT },
  lgMN3: { margin: LARGE_MARGIN * -3 + PX + IMPORTANT },
  lgMN4: { margin: LARGE_MARGIN * -4 + PX + IMPORTANT },
  lgMN5: { margin: LARGE_MARGIN * -5 + PX + IMPORTANT },

  lgMtN1: { marginTop: LARGE_MARGIN * -1 + PX + IMPORTANT },
  lgMtN2: { marginTop: LARGE_MARGIN * -2 + PX + IMPORTANT },
  lgMtN3: { marginTop: LARGE_MARGIN * -3 + PX + IMPORTANT },
  lgMtN4: { marginTop: LARGE_MARGIN * -4 + PX + IMPORTANT },
  lgMtN5: { marginTop: LARGE_MARGIN * -5 + PX + IMPORTANT },

  lgMrN1: { marginRight: LARGE_MARGIN * -1 + PX + IMPORTANT },
  lgMrN2: { marginRight: LARGE_MARGIN * -2 + PX + IMPORTANT },
  lgMrN3: { marginRight: LARGE_MARGIN * -3 + PX + IMPORTANT },
  lgMrN4: { marginRight: LARGE_MARGIN * -4 + PX + IMPORTANT },
  lgMrN5: { marginRight: LARGE_MARGIN * -5 + PX + IMPORTANT },

  lgMbN1: { marginBottom: LARGE_MARGIN * -1 + PX + IMPORTANT },
  lgMbN2: { marginBottom: LARGE_MARGIN * -2 + PX + IMPORTANT },
  lgMbN3: { marginBottom: LARGE_MARGIN * -3 + PX + IMPORTANT },
  lgMbN4: { marginBottom: LARGE_MARGIN * -4 + PX + IMPORTANT },
  lgMbN5: { marginBottom: LARGE_MARGIN * -5 + PX + IMPORTANT },

  lgMlN1: { marginLeft: LARGE_MARGIN * -1 + PX + IMPORTANT },
  lgMlN2: { marginLeft: LARGE_MARGIN * -2 + PX + IMPORTANT },
  lgMlN3: { marginLeft: LARGE_MARGIN * -3 + PX + IMPORTANT },
  lgMlN4: { marginLeft: LARGE_MARGIN * -4 + PX + IMPORTANT },
  lgMlN5: { marginLeft: LARGE_MARGIN * -5 + PX + IMPORTANT },

  lgMxN1: {
    marginLeft: LARGE_MARGIN * -1 + PX + IMPORTANT,
    marginRight: LARGE_MARGIN * -1 + PX + IMPORTANT,
  },
  lgMxN2: {
    marginLeft: LARGE_MARGIN * -2 + PX + IMPORTANT,
    marginRight: LARGE_MARGIN * -2 + PX + IMPORTANT,
  },
  lgMxN3: {
    marginLeft: LARGE_MARGIN * -3 + PX + IMPORTANT,
    marginRight: LARGE_MARGIN * -3 + PX + IMPORTANT,
  },
  lgMxN4: {
    marginLeft: LARGE_MARGIN * -4 + PX + IMPORTANT,
    marginRight: LARGE_MARGIN * -4 + PX + IMPORTANT,
  },
  lgMxN5: {
    marginLeft: LARGE_MARGIN * -5 + PX + IMPORTANT,
    marginRight: LARGE_MARGIN * -5 + PX + IMPORTANT,
  },

  lgMyN1: {
    marginTop: LARGE_MARGIN * -1 + PX + IMPORTANT,
    marginBottom: LARGE_MARGIN * -1 + PX + IMPORTANT,
  },
  lgMyN2: {
    marginTop: LARGE_MARGIN * -2 + PX + IMPORTANT,
    marginBottom: LARGE_MARGIN * -2 + PX + IMPORTANT,
  },
  lgMyN3: {
    marginTop: LARGE_MARGIN * -3 + PX + IMPORTANT,
    marginBottom: LARGE_MARGIN * -3 + PX + IMPORTANT,
  },
  lgMyN4: {
    marginTop: LARGE_MARGIN * -4 + PX + IMPORTANT,
    marginBottom: LARGE_MARGIN * -4 + PX + IMPORTANT,
  },
  lgMyN5: {
    marginTop: LARGE_MARGIN * -5 + PX + IMPORTANT,
    marginBottom: LARGE_MARGIN * -5 + PX + IMPORTANT,
  },

  /*-------------------------------------------------
   * Gap
   *-----------------------------------------------*/
  lgGap0: { gap: "0" },
  lgGap1: { gap: LARGE_SPACING * 1 },
  lgGap2: { gap: LARGE_SPACING * 2 },
  lgGap3: { gap: LARGE_SPACING * 3 },
  lgGap4: { gap: LARGE_SPACING * 4 },
  lgGap5: { gap: LARGE_SPACING * 5 },

  lgRowGap0: { rowGap: "0" },
  lgRowGap1: { rowGap: LARGE_SPACING * 1 },
  lgRowGap2: { rowGap: LARGE_SPACING * 2 },
  lgRowGap3: { rowGap: LARGE_SPACING * 3 },
  lgRowGap4: { rowGap: LARGE_SPACING * 4 },
  lgRowGap5: { rowGap: LARGE_SPACING * 5 },

  lgColGap0: { columnGap: "0" },
  lgColGap1: { columnGap: LARGE_SPACING * 1 },
  lgColGap2: { columnGap: LARGE_SPACING * 2 },
  lgColGap3: { columnGap: LARGE_SPACING * 3 },
  lgColGap4: { columnGap: LARGE_SPACING * 4 },
  lgColGap5: { columnGap: LARGE_SPACING * 5 },

  /**************************************************
   * Text
   *************************************************/
  lgTextStart: { textAlign: "left" + IMPORTANT },
  lgTextEnd: { textAlign: "right" + IMPORTANT },
  lgTextCenter: { textAlign: "center" + IMPORTANT },
  lgTextJustify: { textAlign: "justify" + IMPORTANT },

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
