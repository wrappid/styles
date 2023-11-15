/* eslint-disable */
import {
  DEFAULT_MARGIN,
  DEFAULT_PADDING,
  DEFAULT_SPACING,
  IMPORTANT,
} from "./DefaultUtilityStyles";

export const SMALL_MARGIN = DEFAULT_MARGIN;
export const SMALL_PADDING = DEFAULT_PADDING;
export const SMALL_SPACING = DEFAULT_SPACING;

export const smallUtilityStyles = {
  /**************************************************
   * Alignment
   *************************************************/
  smAlignItemsStart: { display: "flex", alignItems: "flex-start" },
  smAlignItemsEnd: { display: "flex", alignItems: "flex-end" },
  smAlignItemsCenter: { display: "flex", alignItems: "center" },
  smAlignItemsBaseline: { display: "flex", alignItems: "baseline" },
  smAlignItemsStretch: { display: "flex", alignItems: "stretch" },

  smAlignContentStart: { display: "flex", alignContent: "flex-start" },
  smAlignContentEnd: { display: "flex", alignContent: "flex-end" },
  smAlignContentCenter: { display: "flex", alignContent: "center" },
  smAlignContentBetween: { display: "flex", alignContent: "space-between" },
  smAlignContentAround: { display: "flex", alignContent: "space-around" },
  smAlignContentStretch: { display: "flex", alignContent: "stretch" },

  smAlignSelfAuto: { display: "flex", alignSelf: "auto" },
  smAlignSelfStart: { display: "flex", alignSelf: "flex-start" },
  smAlignSelfEnd: { display: "flex", alignSelf: "flex-end" },
  smAlignSelfCenter: { display: "flex", alignSelf: "center" },
  smAlignSelfBaseline: { display: "flex", alignSelf: "baseline" },
  smAlignSelfStretch: { display: "flex", alignSelf: "stretch" },

  smJustifyContentCenter: { display: "flex", justifyContent: "center" },
  smJustifyContentFlexStart: { display: "flex", justifyContent: "flex-start" },
  smJustifyContentFlexEnd: { display: "flex", justifyContent: "flex-end" },
  smJustifyContentSpaceBetween: { display: "flex", justifyContent: "space-between" },
  smJustifyContentSpaceAround: { display: "flex", justifyContent: "space-around" },
  smJustifyContentSpaceEvenly: { display: "flex", justifyContent: "space-evenly" },

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
  smDisplayInline: { display: "inline" },
  smDisplayInlineBlock: { display: "inline-block" },
  smDisplayBlock: { display: "block" },
  smDisplayGrid: { display: "grid" },
  smDisplayTable: { display: "table" },
  smDisplayTableRow: { display: "table-row" },
  smDisplayTableCell: { display: "table-cell" },
  smDisplayFlex: { display: "flex" },
  smDisplayInlineFlex: { display: "inline-flex" },
  smDisplayNone: { display: "none" },

  /**************************************************
   * Flex
   *************************************************/
  smFlexDirectionRow: { flexDirection: "row" },
  smFlexDirectionColumn: { flexDirection: "column" },
  smFlexDirectionRowReverse: { flexDirection: "row-reverse" },
  smFlexDirectionColumnReverse: { flexDirection: "column-reverse" },
  smFlexFill: { flex: "1 1 auto" },
  smFlexGrow0: { flexGrow: "0" },
  smFlexGrow1: { flexGrow: "1" },
  smFlexShrink0: { flexShrink: "0" },
  smFlexShrink1: { flexShrink: "1" },
  smFlexWrapWrap: { flexWrap: "wrap" },
  smFlexWrapNoWrap: { flexWrap: "nowrap" },
  smFlexWrapWrapReverse: { flexWrap: "wrap-reverse" },

  /**************************************************
   * Float
   *************************************************/
  smFloatStart: { float: "left" },
  smFloatEnd: { float: "right" },
  smFloatNone: { float: "none" },

  /**************************************************
   * Interactions
   *************************************************/
  //NO SCREEN SIZE SPECIFIC STYLE AVAILABLE

  /**************************************************
   * Object Fit
   *************************************************/
  smObjectFitContain: {
    // -o-object-fit: contain !important;
    objectFit: "contain",
  },

  smObjectFitCover: {
    // -o-object-fit: cover !important;
    objectFit: "cover",
  },

  smObjectFitFill: {
    // -o-object-fit: fill !important;
    objectFit: "fill",
  },

  smObjectFitScale: {
    // -o-object-fit: scale-down !important;
    objectFit: "scale-down",
  },

  smObjectFitNone: {
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
  smP0: { padding: 0 },
  smP1: { padding: SMALL_PADDING },
  smP2: { padding: SMALL_PADDING * 2 },
  smP3: { padding: SMALL_PADDING * 3 },
  smP4: { padding: SMALL_PADDING * 4 },
  smP5: { padding: SMALL_PADDING * 5 },

  smPt0: { paddingTop: 0 },
  smPt1: { paddingTop: SMALL_PADDING },
  smPt2: { paddingTop: SMALL_PADDING * 2 },
  smPt3: { paddingTop: SMALL_PADDING * 3 },
  smPt4: { paddingTop: SMALL_PADDING * 4 },
  smPt5: { paddingTop: SMALL_PADDING * 5 },

  smPr0: { paddingRight: 0 },
  smPr1: { paddingRight: SMALL_PADDING },
  smPr2: { paddingRight: SMALL_PADDING * 2 },
  smPr3: { paddingRight: SMALL_PADDING * 3 },
  smPr4: { paddingRight: SMALL_PADDING * 4 },
  smPr5: { paddingRight: SMALL_PADDING * 5 },

  smPb0: { paddingBottom: 0 },
  smPb1: { paddingBottom: SMALL_PADDING },
  smPb2: { paddingBottom: SMALL_PADDING * 2 },
  smPb3: { paddingBottom: SMALL_PADDING * 3 },
  smPb4: { paddingBottom: SMALL_PADDING * 4 },
  smPb5: { paddingBottom: SMALL_PADDING * 5 },

  smPl0: { paddingLeft: 0 },
  smPl1: { paddingLeft: SMALL_PADDING },
  smPl2: { paddingLeft: SMALL_PADDING * 2 },
  smPl3: { paddingLeft: SMALL_PADDING * 3 },
  smPl4: { paddingLeft: SMALL_PADDING * 4 },
  smPl5: { paddingLeft: SMALL_PADDING * 5 },

  smPx0: { paddingLeft: 0, paddingRight: 0 },
  smPx1: {
    paddingLeft: SMALL_PADDING * 1,
    paddingRight: SMALL_PADDING * 1,
  },
  smPx2: {
    paddingLeft: SMALL_PADDING * 2,
    paddingRight: SMALL_PADDING * 2,
  },
  smPx3: {
    paddingLeft: SMALL_PADDING * 3,
    paddingRight: SMALL_PADDING * 3,
  },
  smPx4: {
    paddingLeft: SMALL_PADDING * 4,
    paddingRight: SMALL_PADDING * 4,
  },
  smPx5: {
    paddingLeft: SMALL_PADDING * 5,
    paddingRight: SMALL_PADDING * 5,
  },

  smPy0: { paddingTop: 0, paddingBottom: 0 },
  smPy1: {
    paddingTop: SMALL_PADDING * 1,
    paddingBottom: SMALL_PADDING * 1,
  },
  smPy2: {
    paddingTop: SMALL_PADDING * 2,
    paddingBottom: SMALL_PADDING * 2,
  },
  smPy3: {
    paddingTop: SMALL_PADDING * 3,
    paddingBottom: SMALL_PADDING * 3,
  },
  smPy4: {
    paddingTop: SMALL_PADDING * 4,
    paddingBottom: SMALL_PADDING * 4,
  },
  smPy5: {
    paddingTop: SMALL_PADDING * 5,
    paddingBottom: SMALL_PADDING * 5,
  },

  /*-------------------------------------------------
   * Margin
   *-----------------------------------------------*/
  smM0: { margin: 0 },
  smM1: { margin: SMALL_MARGIN },
  smM2: { margin: SMALL_MARGIN * 2 },
  smM3: { margin: SMALL_MARGIN * 3 },
  smM4: { margin: SMALL_MARGIN * 4 },
  smM5: { margin: SMALL_MARGIN * 5 },
  smMAuto: { margin: "auto" },

  smMt0: { marginTop: 0 },
  smMt1: { marginTop: SMALL_MARGIN },
  smMt2: { marginTop: SMALL_MARGIN * 2 },
  smMt3: { marginTop: SMALL_MARGIN * 3 },
  smMt4: { marginTop: SMALL_MARGIN * 4 },
  smMt5: { marginTop: SMALL_MARGIN * 5 },
  smMtAuto: { marginTop: "auto" },

  smMr0: { marginRight: 0 },
  smMr1: { marginRight: SMALL_MARGIN },
  smMr2: { marginRight: SMALL_MARGIN * 2 },
  smMr3: { marginRight: SMALL_MARGIN * 3 },
  smMr4: { marginRight: SMALL_MARGIN * 4 },
  smMr5: { marginRight: SMALL_MARGIN * 5 },
  smMrAuto: { marginRight: "auto" },

  smMb0: { marginBottom: 0 },
  smMb1: { marginBottom: SMALL_MARGIN },
  smMb2: { marginBottom: SMALL_MARGIN * 2 },
  smMb3: { marginBottom: SMALL_MARGIN * 3 },
  smMb4: { marginBottom: SMALL_MARGIN * 4 },
  smMb5: { marginBottom: SMALL_MARGIN * 5 },
  smMbAuto: { marginBottom: "auto" },

  smMl0: { marginLeft: 0 },
  smMl1: { marginLeft: SMALL_MARGIN },
  smMl2: { marginLeft: SMALL_MARGIN * 2 },
  smMl3: { marginLeft: SMALL_MARGIN * 3 },
  smMl4: { marginLeft: SMALL_MARGIN * 4 },
  smMl5: { marginLeft: SMALL_MARGIN * 5 },
  smMlAuto: { marginLeft: "auto" },

  smMx0: { marginLeft: 0, marginRight: 0 },
  smMx1: { marginLeft: SMALL_MARGIN * 1, marginRight: SMALL_MARGIN * 1 },
  smMx2: { marginLeft: SMALL_MARGIN * 2, marginRight: SMALL_MARGIN * 2 },
  smMx3: { marginLeft: SMALL_MARGIN * 3, marginRight: SMALL_MARGIN * 3 },
  smMx4: { marginLeft: SMALL_MARGIN * 4, marginRight: SMALL_MARGIN * 4 },
  smMx5: { marginLeft: SMALL_MARGIN * 5, marginRight: SMALL_MARGIN * 5 },
  smMxAuto: { marginLeft: "auto", marginRight: "auto" },

  smMy0: { marginTop: 0, marginBottom: 0 },
  smMy1: { marginTop: SMALL_MARGIN * 1, marginBottom: SMALL_MARGIN * 1 },
  smMy2: { marginTop: SMALL_MARGIN * 2, marginBottom: SMALL_MARGIN * 2 },
  smMy3: { marginTop: SMALL_MARGIN * 3, marginBottom: SMALL_MARGIN * 3 },
  smMy4: { marginTop: SMALL_MARGIN * 4, marginBottom: SMALL_MARGIN * 4 },
  smMy5: { marginTop: SMALL_MARGIN * 5, marginBottom: SMALL_MARGIN * 5 },
  smMyAuto: { marginTop: "auto", marginBottom: "auto" },

  smMN1: { margin: SMALL_MARGIN * -1 },
  smMN2: { margin: SMALL_MARGIN * -2 },
  smMN3: { margin: SMALL_MARGIN * -3 },
  smMN4: { margin: SMALL_MARGIN * -4 },
  smMN5: { margin: SMALL_MARGIN * -5 },

  smMtN1: { marginTop: SMALL_MARGIN * -1 },
  smMtN2: { marginTop: SMALL_MARGIN * -2 },
  smMtN3: { marginTop: SMALL_MARGIN * -3 },
  smMtN4: { marginTop: SMALL_MARGIN * -4 },
  smMtN5: { marginTop: SMALL_MARGIN * -5 },

  smMrN1: { marginRight: SMALL_MARGIN * -1 },
  smMrN2: { marginRight: SMALL_MARGIN * -2 },
  smMrN3: { marginRight: SMALL_MARGIN * -3 },
  smMrN4: { marginRight: SMALL_MARGIN * -4 },
  smMrN5: { marginRight: SMALL_MARGIN * -5 },

  smMbN1: { marginBottom: SMALL_MARGIN * -1 },
  smMbN2: { marginBottom: SMALL_MARGIN * -2 },
  smMbN3: { marginBottom: SMALL_MARGIN * -3 },
  smMbN4: { marginBottom: SMALL_MARGIN * -4 },
  smMbN5: { marginBottom: SMALL_MARGIN * -5 },

  smMlN1: { marginLeft: SMALL_MARGIN * -1 },
  smMlN2: { marginLeft: SMALL_MARGIN * -2 },
  smMlN3: { marginLeft: SMALL_MARGIN * -3 },
  smMlN4: { marginLeft: SMALL_MARGIN * -4 },
  smMlN5: { marginLeft: SMALL_MARGIN * -5 },

  smMxN1: { marginLeft: SMALL_MARGIN * -1, marginRight: SMALL_MARGIN * -1 },
  smMxN2: { marginLeft: SMALL_MARGIN * -2, marginRight: SMALL_MARGIN * -2 },
  smMxN3: { marginLeft: SMALL_MARGIN * -3, marginRight: SMALL_MARGIN * -3 },
  smMxN4: { marginLeft: SMALL_MARGIN * -4, marginRight: SMALL_MARGIN * -4 },
  smMxN5: { marginLeft: SMALL_MARGIN * -5, marginRight: SMALL_MARGIN * -5 },

  smMyN1: { marginTop: SMALL_MARGIN * -1, marginBottom: SMALL_MARGIN * -1 },
  smMyN2: { marginTop: SMALL_MARGIN * -2, marginBottom: SMALL_MARGIN * -2 },
  smMyN3: { marginTop: SMALL_MARGIN * -3, marginBottom: SMALL_MARGIN * -3 },
  smMyN4: { marginTop: SMALL_MARGIN * -4, marginBottom: SMALL_MARGIN * -4 },
  smMyN5: { marginTop: SMALL_MARGIN * -5, marginBottom: SMALL_MARGIN * -5 },

  /*-------------------------------------------------
   * Gap
   *-----------------------------------------------*/
  smGap0: { gap: "0" },
  smGap1: { gap: SMALL_SPACING * 1 },
  smGap2: { gap: SMALL_SPACING * 2 },
  smGap3: { gap: SMALL_SPACING * 3 },
  smGap4: { gap: SMALL_SPACING * 4 },
  smGap5: { gap: SMALL_SPACING * 5 },

  smRowGap0: { rowGap: "0" },
  smRowGap1: { rowGap: SMALL_SPACING * 1 },
  smRowGap2: { rowGap: SMALL_SPACING * 2 },
  smRowGap3: { rowGap: SMALL_SPACING * 3 },
  smRowGap4: { rowGap: SMALL_SPACING * 4 },
  smRowGap5: { rowGap: SMALL_SPACING * 5 },

  smColGap0: { columnGap: "0" },
  smColGap1: { columnGap: SMALL_SPACING * 1 },
  smColGap2: { columnGap: SMALL_SPACING * 2 },
  smColGap3: { columnGap: SMALL_SPACING * 3 },
  smColGap4: { columnGap: SMALL_SPACING * 4 },
  smColGap5: { columnGap: SMALL_SPACING * 5 },

  /**************************************************
   * Text
   *************************************************/
  smTextStart: { textAlign: "left" + IMPORTANT },
  smTextEnd: { textAlign: "right" + IMPORTANT },
  smTextCenter: { textAlign: "center" + IMPORTANT },
  smTextJustify: { textAlign: "justify" + IMPORTANT },

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
