/* eslint-disable */
import {
  DEFAULT_MARGIN,
  DEFAULT_PADDING,
  DEFAULT_SPACING,
  IMPORTANT,
  PX,
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
   * Cursor
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
  smP1: { padding: SMALL_PADDING + PX },
  smP2: { padding: SMALL_PADDING * 2 + PX },
  smP3: { padding: SMALL_PADDING * 3 + PX },
  smP4: { padding: SMALL_PADDING * 4 + PX },
  smP5: { padding: SMALL_PADDING * 5 + PX },

  smPt0: { paddingTop: 0 },
  smPt1: { paddingTop: SMALL_PADDING + PX },
  smPt2: { paddingTop: SMALL_PADDING * 2 + PX },
  smPt3: { paddingTop: SMALL_PADDING * 3 + PX },
  smPt4: { paddingTop: SMALL_PADDING * 4 + PX },
  smPt5: { paddingTop: SMALL_PADDING * 5 + PX },

  smPr0: { paddingRight: 0 },
  smPr1: { paddingRight: SMALL_PADDING + PX },
  smPr2: { paddingRight: SMALL_PADDING * 2 + PX },
  smPr3: { paddingRight: SMALL_PADDING * 3 + PX },
  smPr4: { paddingRight: SMALL_PADDING * 4 + PX },
  smPr5: { paddingRight: SMALL_PADDING * 5 + PX },

  smPb0: { paddingBottom: 0 },
  smPb1: { paddingBottom: SMALL_PADDING + PX },
  smPb2: { paddingBottom: SMALL_PADDING * 2 + PX },
  smPb3: { paddingBottom: SMALL_PADDING * 3 + PX },
  smPb4: { paddingBottom: SMALL_PADDING * 4 + PX },
  smPb5: { paddingBottom: SMALL_PADDING * 5 + PX },

  smPl0: { paddingLeft: 0 },
  smPl1: { paddingLeft: SMALL_PADDING + PX },
  smPl2: { paddingLeft: SMALL_PADDING * 2 + PX },
  smPl3: { paddingLeft: SMALL_PADDING * 3 + PX },
  smPl4: { paddingLeft: SMALL_PADDING * 4 + PX },
  smPl5: { paddingLeft: SMALL_PADDING * 5 + PX },

  smPx0: { paddingLeft: 0, paddingRight: 0 },
  smPx1: {
    paddingLeft: SMALL_PADDING * 1 + PX,
    paddingRight: SMALL_PADDING * 1 + PX,
  },
  smPx2: {
    paddingLeft: SMALL_PADDING * 2 + PX,
    paddingRight: SMALL_PADDING * 2 + PX,
  },
  smPx3: {
    paddingLeft: SMALL_PADDING * 3 + PX,
    paddingRight: SMALL_PADDING * 3 + PX,
  },
  smPx4: {
    paddingLeft: SMALL_PADDING * 4 + PX,
    paddingRight: SMALL_PADDING * 4 + PX,
  },
  smPx5: {
    paddingLeft: SMALL_PADDING * 5 + PX,
    paddingRight: SMALL_PADDING * 5 + PX,
  },

  smPy0: { paddingTop: 0, paddingBottom: 0 },
  smPy1: {
    paddingTop: SMALL_PADDING * 1 + PX,
    paddingBottom: SMALL_PADDING * 1 + PX,
  },
  smPy2: {
    paddingTop: SMALL_PADDING * 2 + PX,
    paddingBottom: SMALL_PADDING * 2 + PX,
  },
  smPy3: {
    paddingTop: SMALL_PADDING * 3 + PX,
    paddingBottom: SMALL_PADDING * 3 + PX,
  },
  smPy4: {
    paddingTop: SMALL_PADDING * 4 + PX,
    paddingBottom: SMALL_PADDING * 4 + PX,
  },
  smPy5: {
    paddingTop: SMALL_PADDING * 5 + PX,
    paddingBottom: SMALL_PADDING * 5 + PX,
  },

  /*-------------------------------------------------
   * Margin
   *-----------------------------------------------*/
  smM0: { margin: 0 + IMPORTANT },
  smM1: { margin: SMALL_MARGIN + PX + IMPORTANT },
  smM2: { margin: SMALL_MARGIN * 2 + PX + IMPORTANT },
  smM3: { margin: SMALL_MARGIN * 3 + PX + IMPORTANT },
  smM4: { margin: SMALL_MARGIN * 4 + PX + IMPORTANT },
  smM5: { margin: SMALL_MARGIN * 5 + PX + IMPORTANT },
  smMAuto: { margin: "auto" + IMPORTANT },

  smMt0: { marginTop: 0 + IMPORTANT },
  smMt1: { marginTop: SMALL_MARGIN + PX + IMPORTANT },
  smMt2: { marginTop: SMALL_MARGIN * 2 + PX + IMPORTANT },
  smMt3: { marginTop: SMALL_MARGIN * 3 + PX + IMPORTANT },
  smMt4: { marginTop: SMALL_MARGIN * 4 + PX + IMPORTANT },
  smMt5: { marginTop: SMALL_MARGIN * 5 + PX + IMPORTANT },
  smMtAuto: { marginTop: "auto" + IMPORTANT },

  smMr0: { marginRight: 0 + IMPORTANT },
  smMr1: { marginRight: SMALL_MARGIN + PX + IMPORTANT },
  smMr2: { marginRight: SMALL_MARGIN * 2 + PX + IMPORTANT },
  smMr3: { marginRight: SMALL_MARGIN * 3 + PX + IMPORTANT },
  smMr4: { marginRight: SMALL_MARGIN * 4 + PX + IMPORTANT },
  smMr5: { marginRight: SMALL_MARGIN * 5 + PX + IMPORTANT },
  smMrAuto: { marginRight: "auto" + IMPORTANT },

  smMb0: { marginBottom: 0 + IMPORTANT },
  smMb1: { marginBottom: SMALL_MARGIN + PX + IMPORTANT },
  smMb2: { marginBottom: SMALL_MARGIN * 2 + PX + IMPORTANT },
  smMb3: { marginBottom: SMALL_MARGIN * 3 + PX + IMPORTANT },
  smMb4: { marginBottom: SMALL_MARGIN * 4 + PX + IMPORTANT },
  smMb5: { marginBottom: SMALL_MARGIN * 5 + PX + IMPORTANT },
  smMbAuto: { marginBottom: "auto" + IMPORTANT },

  smMl0: { marginLeft: 0 + IMPORTANT },
  smMl1: { marginLeft: SMALL_MARGIN + PX + IMPORTANT },
  smMl2: { marginLeft: SMALL_MARGIN * 2 + PX + IMPORTANT },
  smMl3: { marginLeft: SMALL_MARGIN * 3 + PX + IMPORTANT },
  smMl4: { marginLeft: SMALL_MARGIN * 4 + PX + IMPORTANT },
  smMl5: { marginLeft: SMALL_MARGIN * 5 + PX + IMPORTANT },
  smMlAuto: { marginLeft: "auto" + IMPORTANT },

  smMx0: { marginLeft: 0 + IMPORTANT, marginRight: 0 + IMPORTANT },
  smMx1: {
    marginLeft: SMALL_MARGIN * 1 + PX + IMPORTANT,
    marginRight: SMALL_MARGIN * 1 + PX + IMPORTANT,
  },
  smMx2: {
    marginLeft: SMALL_MARGIN * 2 + PX + IMPORTANT,
    marginRight: SMALL_MARGIN * 2 + PX + IMPORTANT,
  },
  smMx3: {
    marginLeft: SMALL_MARGIN * 3 + PX + IMPORTANT,
    marginRight: SMALL_MARGIN * 3 + PX + IMPORTANT,
  },
  smMx4: {
    marginLeft: SMALL_MARGIN * 4 + PX + IMPORTANT,
    marginRight: SMALL_MARGIN * 4 + PX + IMPORTANT,
  },
  smMx5: {
    marginLeft: SMALL_MARGIN * 5 + PX + IMPORTANT,
    marginRight: SMALL_MARGIN * 5 + PX + IMPORTANT,
  },
  smMxAuto: { marginLeft: "auto" + IMPORTANT, marginRight: "auto" + IMPORTANT },

  smMy0: { marginTop: 0 + IMPORTANT, marginBottom: 0 + IMPORTANT },
  smMy1: {
    marginTop: SMALL_MARGIN * 1 + PX + IMPORTANT,
    marginBottom: SMALL_MARGIN * 1 + PX + IMPORTANT,
  },
  smMy2: {
    marginTop: SMALL_MARGIN * 2 + PX + IMPORTANT,
    marginBottom: SMALL_MARGIN * 2 + PX + IMPORTANT,
  },
  smMy3: {
    marginTop: SMALL_MARGIN * 3 + PX + IMPORTANT,
    marginBottom: SMALL_MARGIN * 3 + PX + IMPORTANT,
  },
  smMy4: {
    marginTop: SMALL_MARGIN * 4 + PX + IMPORTANT,
    marginBottom: SMALL_MARGIN * 4 + PX + IMPORTANT,
  },
  smMy5: {
    marginTop: SMALL_MARGIN * 5 + PX + IMPORTANT,
    marginBottom: SMALL_MARGIN * 5 + PX + IMPORTANT,
  },
  smMyAuto: { marginTop: "auto" + IMPORTANT, marginBottom: "auto" + IMPORTANT },

  smMN1: { margin: SMALL_MARGIN * -1 + PX + IMPORTANT },
  smMN2: { margin: SMALL_MARGIN * -2 + PX + IMPORTANT },
  smMN3: { margin: SMALL_MARGIN * -3 + PX + IMPORTANT },
  smMN4: { margin: SMALL_MARGIN * -4 + PX + IMPORTANT },
  smMN5: { margin: SMALL_MARGIN * -5 + PX + IMPORTANT },

  smMtN1: { marginTop: SMALL_MARGIN * -1 + PX + IMPORTANT },
  smMtN2: { marginTop: SMALL_MARGIN * -2 + PX + IMPORTANT },
  smMtN3: { marginTop: SMALL_MARGIN * -3 + PX + IMPORTANT },
  smMtN4: { marginTop: SMALL_MARGIN * -4 + PX + IMPORTANT },
  smMtN5: { marginTop: SMALL_MARGIN * -5 + PX + IMPORTANT },

  smMrN1: { marginRight: SMALL_MARGIN * -1 + PX + IMPORTANT },
  smMrN2: { marginRight: SMALL_MARGIN * -2 + PX + IMPORTANT },
  smMrN3: { marginRight: SMALL_MARGIN * -3 + PX + IMPORTANT },
  smMrN4: { marginRight: SMALL_MARGIN * -4 + PX + IMPORTANT },
  smMrN5: { marginRight: SMALL_MARGIN * -5 + PX + IMPORTANT },

  smMbN1: { marginBottom: SMALL_MARGIN * -1 + PX + IMPORTANT },
  smMbN2: { marginBottom: SMALL_MARGIN * -2 + PX + IMPORTANT },
  smMbN3: { marginBottom: SMALL_MARGIN * -3 + PX + IMPORTANT },
  smMbN4: { marginBottom: SMALL_MARGIN * -4 + PX + IMPORTANT },
  smMbN5: { marginBottom: SMALL_MARGIN * -5 + PX + IMPORTANT },

  smMlN1: { marginLeft: SMALL_MARGIN * -1 + PX + IMPORTANT },
  smMlN2: { marginLeft: SMALL_MARGIN * -2 + PX + IMPORTANT },
  smMlN3: { marginLeft: SMALL_MARGIN * -3 + PX + IMPORTANT },
  smMlN4: { marginLeft: SMALL_MARGIN * -4 + PX + IMPORTANT },
  smMlN5: { marginLeft: SMALL_MARGIN * -5 + PX + IMPORTANT },

  smMxN1: {
    marginLeft: SMALL_MARGIN * -1 + PX + IMPORTANT,
    marginRight: SMALL_MARGIN * -1 + PX + IMPORTANT,
  },
  smMxN2: {
    marginLeft: SMALL_MARGIN * -2 + PX + IMPORTANT,
    marginRight: SMALL_MARGIN * -2 + PX + IMPORTANT,
  },
  smMxN3: {
    marginLeft: SMALL_MARGIN * -3 + PX + IMPORTANT,
    marginRight: SMALL_MARGIN * -3 + PX + IMPORTANT,
  },
  smMxN4: {
    marginLeft: SMALL_MARGIN * -4 + PX + IMPORTANT,
    marginRight: SMALL_MARGIN * -4 + PX + IMPORTANT,
  },
  smMxN5: {
    marginLeft: SMALL_MARGIN * -5 + PX + IMPORTANT,
    marginRight: SMALL_MARGIN * -5 + PX + IMPORTANT,
  },

  smMyN1: {
    marginTop: SMALL_MARGIN * -1 + PX + IMPORTANT,
    marginBottom: SMALL_MARGIN * -1 + PX + IMPORTANT,
  },
  smMyN2: {
    marginTop: SMALL_MARGIN * -2 + PX + IMPORTANT,
    marginBottom: SMALL_MARGIN * -2 + PX + IMPORTANT,
  },
  smMyN3: {
    marginTop: SMALL_MARGIN * -3 + PX + IMPORTANT,
    marginBottom: SMALL_MARGIN * -3 + PX + IMPORTANT,
  },
  smMyN4: {
    marginTop: SMALL_MARGIN * -4 + PX + IMPORTANT,
    marginBottom: SMALL_MARGIN * -4 + PX + IMPORTANT,
  },
  smMyN5: {
    marginTop: SMALL_MARGIN * -5 + PX + IMPORTANT,
    marginBottom: SMALL_MARGIN * -5 + PX + IMPORTANT,
  },

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
