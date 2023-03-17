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
  smAlignItemsStart: { display: "flex", alignItems: "flex-start" + IMPORTANT },
  smAlignItemsEnd: { display: "flex", alignItems: "flex-end" + IMPORTANT },
  smAlignItemsCenter: { display: "flex", alignItems: "center" + IMPORTANT },
  smAlignItemsBaseline: { display: "flex", alignItems: "baseline" + IMPORTANT },
  smAlignItemsStretch: { display: "flex", alignItems: "stretch" + IMPORTANT },

  smAlignContentStart: { display: "flex", alignContent: "flex-start" + IMPORTANT },
  smAlignContentEnd: { display: "flex", alignContent: "flex-end" + IMPORTANT },
  smAlignContentCenter: { display: "flex", alignContent: "center" + IMPORTANT },
  smAlignContentBetween: { display: "flex", alignContent: "space-between" + IMPORTANT },
  smAlignContentAround: { display: "flex", alignContent: "space-around" + IMPORTANT },
  smAlignContentStretch: { display: "flex", alignContent: "stretch" + IMPORTANT },

  smAlignSelfAuto: { display: "flex", alignSelf: "auto" + IMPORTANT },
  smAlignSelfStart: { display: "flex", alignSelf: "flex-start" + IMPORTANT },
  smAlignSelfEnd: { display: "flex", alignSelf: "flex-end" + IMPORTANT },
  smAlignSelfCenter: { display: "flex", alignSelf: "center" + IMPORTANT },
  smAlignSelfBaseline: { display: "flex", alignSelf: "baseline" + IMPORTANT },
  smAlignSelfStretch: { display: "flex", alignSelf: "stretch" + IMPORTANT },

  smJustifyContentCenter: { display: "flex", justifyContent: "center" + IMPORTANT },
  smJustifyContentFlexStart: { display: "flex", justifyContent: "flex-start" + IMPORTANT },
  smJustifyContentFlexEnd: { display: "flex", justifyContent: "flex-end" + IMPORTANT },
  smJustifyContentSpaceBetween: { display: "flex", justifyContent: "space-between" + IMPORTANT },
  smJustifyContentSpaceAround: { display: "flex", justifyContent: "space-around" + IMPORTANT },
  smJustifyContentSpaceEvenly: { display: "flex", justifyContent: "space-evenly" + IMPORTANT },

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
  smDisplayInline: { display: "inline" + IMPORTANT },
  smDisplayInlineBlock: { display: "inline-block" + IMPORTANT },
  smDisplayBlock: { display: "block" + IMPORTANT },
  smDisplayGrid: { display: "grid" + IMPORTANT },
  smDisplayTable: { display: "table" + IMPORTANT },
  smDisplayTableRow: { display: "table-row" + IMPORTANT },
  smDisplayTableCell: { display: "table-cell" + IMPORTANT },
  smDisplayFlex: { display: "flex" + IMPORTANT },
  smDisplayInlineFlex: { display: "inline-flex" + IMPORTANT },
  smDisplayNone: { display: "none" + IMPORTANT },

  /**************************************************
   * Flex
   *************************************************/
  smFlexDirectionRow: { flexDirection: "row" + IMPORTANT },
  smFlexDirectionColumn: { flexDirection: "column" + IMPORTANT },
  smFlexDirectionRowReverse: { flexDirection: "row-reverse" + IMPORTANT },
  smFlexDirectionColumnReverse: { flexDirection: "column-reverse" + IMPORTANT },
  smFlexFill: { flex: "1 1 auto" + IMPORTANT },
  smFlexGrow0: { flexGrow: "0" + IMPORTANT },
  smFlexGrow1: { flexGrow: "1" + IMPORTANT },
  smFlexShrink0: { flexShrink: "0" + IMPORTANT },
  smFlexShrink1: { flexShrink: "1" + IMPORTANT },
  smFlexWrapWrap: { flexWrap: "wrap" + IMPORTANT },
  smFlexWrapNoWrap: { flexWrap: "nowrap" + IMPORTANT },
  smFlexWrapWrapReverse: { flexWrap: "wrap-reverse" + IMPORTANT },

  /**************************************************
   * Float
   *************************************************/
  smFloatStart: { float: "left" + IMPORTANT },
  smFloatEnd: { float: "right" + IMPORTANT },
  smFloatNone: { float: "none" + IMPORTANT },

  /**************************************************
   * Interactions
   *************************************************/
  //NO SCREEN SIZE SPECIFIC STYLE AVAILABLE

  /**************************************************
   * Object Fit
   *************************************************/
  smObjectFitContain: {
    // -o-object-fit: contain !important;
    objectFit: "contain" + IMPORTANT,
  },

  smObjectFitCover: {
    // -o-object-fit: cover !important;
    objectFit: "cover" + IMPORTANT,
  },

  smObjectFitFill: {
    // -o-object-fit: fill !important;
    objectFit: "fill" + IMPORTANT,
  },

  smObjectFitScale: {
    // -o-object-fit: scale-down !important;
    objectFit: "scale-down" + IMPORTANT,
  },

  smObjectFitNone: {
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
  smP0: { padding: 0 + IMPORTANT },
  smP1: { padding: SMALL_PADDING + IMPORTANT },
  smP2: { padding: SMALL_PADDING * 2 + IMPORTANT },
  smP3: { padding: SMALL_PADDING * 3 + IMPORTANT },
  smP4: { padding: SMALL_PADDING * 4 + IMPORTANT },
  smP5: { padding: SMALL_PADDING * 5 + IMPORTANT },

  smPt0: { paddingTop: 0 + IMPORTANT },
  smPt1: { paddingTop: SMALL_PADDING + IMPORTANT },
  smPt2: { paddingTop: SMALL_PADDING * 2 + IMPORTANT },
  smPt3: { paddingTop: SMALL_PADDING * 3 + IMPORTANT },
  smPt4: { paddingTop: SMALL_PADDING * 4 + IMPORTANT },
  smPt5: { paddingTop: SMALL_PADDING * 5 + IMPORTANT },

  smPr0: { paddingRight: 0 + IMPORTANT },
  smPr1: { paddingRight: SMALL_PADDING + IMPORTANT },
  smPr2: { paddingRight: SMALL_PADDING * 2 + IMPORTANT },
  smPr3: { paddingRight: SMALL_PADDING * 3 + IMPORTANT },
  smPr4: { paddingRight: SMALL_PADDING * 4 + IMPORTANT },
  smPr5: { paddingRight: SMALL_PADDING * 5 + IMPORTANT },

  smPb0: { paddingBottom: 0 + IMPORTANT },
  smPb1: { paddingBottom: SMALL_PADDING + IMPORTANT },
  smPb2: { paddingBottom: SMALL_PADDING * 2 + IMPORTANT },
  smPb3: { paddingBottom: SMALL_PADDING * 3 + IMPORTANT },
  smPb4: { paddingBottom: SMALL_PADDING * 4 + IMPORTANT },
  smPb5: { paddingBottom: SMALL_PADDING * 5 + IMPORTANT },

  smPl0: { paddingLeft: 0 + IMPORTANT },
  smPl1: { paddingLeft: SMALL_PADDING + IMPORTANT },
  smPl2: { paddingLeft: SMALL_PADDING * 2 + IMPORTANT },
  smPl3: { paddingLeft: SMALL_PADDING * 3 + IMPORTANT },
  smPl4: { paddingLeft: SMALL_PADDING * 4 + IMPORTANT },
  smPl5: { paddingLeft: SMALL_PADDING * 5 + IMPORTANT },

  smPx0: { paddingLeft: 0 + IMPORTANT, paddingRight: 0 + IMPORTANT },
  smPx1: {
    paddingLeft: SMALL_PADDING * 1 + IMPORTANT,
    paddingRight: SMALL_PADDING * 1 + IMPORTANT,
  },
  smPx2: {
    paddingLeft: SMALL_PADDING * 2 + IMPORTANT,
    paddingRight: SMALL_PADDING * 2 + IMPORTANT,
  },
  smPx3: {
    paddingLeft: SMALL_PADDING * 3 + IMPORTANT,
    paddingRight: SMALL_PADDING * 3 + IMPORTANT,
  },
  smPx4: {
    paddingLeft: SMALL_PADDING * 4 + IMPORTANT,
    paddingRight: SMALL_PADDING * 4 + IMPORTANT,
  },
  smPx5: {
    paddingLeft: SMALL_PADDING * 5 + IMPORTANT,
    paddingRight: SMALL_PADDING * 5 + IMPORTANT,
  },

  smPy0: { paddingTop: 0 + IMPORTANT, paddingBottom: 0 + IMPORTANT },
  smPy1: {
    paddingTop: SMALL_PADDING * 1 + IMPORTANT,
    paddingBottom: SMALL_PADDING * 1 + IMPORTANT,
  },
  smPy2: {
    paddingTop: SMALL_PADDING * 2 + IMPORTANT,
    paddingBottom: SMALL_PADDING * 2 + IMPORTANT,
  },
  smPy3: {
    paddingTop: SMALL_PADDING * 3 + IMPORTANT,
    paddingBottom: SMALL_PADDING * 3 + IMPORTANT,
  },
  smPy4: {
    paddingTop: SMALL_PADDING * 4 + IMPORTANT,
    paddingBottom: SMALL_PADDING * 4 + IMPORTANT,
  },
  smPy5: {
    paddingTop: SMALL_PADDING * 5 + IMPORTANT,
    paddingBottom: SMALL_PADDING * 5 + IMPORTANT,
  },

  /*-------------------------------------------------
   * Margin
   *-----------------------------------------------*/
  smM0: { margin: 0 + IMPORTANT },
  smM1: { margin: SMALL_MARGIN + IMPORTANT },
  smM2: { margin: SMALL_MARGIN * 2 + IMPORTANT },
  smM3: { margin: SMALL_MARGIN * 3 + IMPORTANT },
  smM4: { margin: SMALL_MARGIN * 4 + IMPORTANT },
  smM5: { margin: SMALL_MARGIN * 5 + IMPORTANT },
  smMAuto: { margin: "auto" + IMPORTANT },

  smMt0: { marginTop: 0 + IMPORTANT },
  smMt1: { marginTop: SMALL_MARGIN + IMPORTANT },
  smMt2: { marginTop: SMALL_MARGIN * 2 + IMPORTANT },
  smMt3: { marginTop: SMALL_MARGIN * 3 + IMPORTANT },
  smMt4: { marginTop: SMALL_MARGIN * 4 + IMPORTANT },
  smMt5: { marginTop: SMALL_MARGIN * 5 + IMPORTANT },
  smMtAuto: { marginTop: "auto" + IMPORTANT },

  smMr0: { marginRight: 0 + IMPORTANT },
  smMr1: { marginRight: SMALL_MARGIN + IMPORTANT },
  smMr2: { marginRight: SMALL_MARGIN * 2 + IMPORTANT },
  smMr3: { marginRight: SMALL_MARGIN * 3 + IMPORTANT },
  smMr4: { marginRight: SMALL_MARGIN * 4 + IMPORTANT },
  smMr5: { marginRight: SMALL_MARGIN * 5 + IMPORTANT },
  smMrAuto: { marginRight: "auto" + IMPORTANT },

  smMb0: { marginBottom: 0 + IMPORTANT },
  smMb1: { marginBottom: SMALL_MARGIN + IMPORTANT },
  smMb2: { marginBottom: SMALL_MARGIN * 2 + IMPORTANT },
  smMb3: { marginBottom: SMALL_MARGIN * 3 + IMPORTANT },
  smMb4: { marginBottom: SMALL_MARGIN * 4 + IMPORTANT },
  smMb5: { marginBottom: SMALL_MARGIN * 5 + IMPORTANT },
  smMbAuto: { marginBottom: "auto" + IMPORTANT },

  smMl0: { marginLeft: 0 + IMPORTANT },
  smMl1: { marginLeft: SMALL_MARGIN + IMPORTANT },
  smMl2: { marginLeft: SMALL_MARGIN * 2 + IMPORTANT },
  smMl3: { marginLeft: SMALL_MARGIN * 3 + IMPORTANT },
  smMl4: { marginLeft: SMALL_MARGIN * 4 + IMPORTANT },
  smMl5: { marginLeft: SMALL_MARGIN * 5 + IMPORTANT },
  smMlAuto: { marginLeft: "auto" + IMPORTANT },

  smMx0: { marginLeft: 0 + IMPORTANT, marginRight: 0 + IMPORTANT },
  smMx1: { marginLeft: SMALL_MARGIN * 1 + IMPORTANT, marginRight: SMALL_MARGIN * 1 + IMPORTANT },
  smMx2: { marginLeft: SMALL_MARGIN * 2 + IMPORTANT, marginRight: SMALL_MARGIN * 2 + IMPORTANT },
  smMx3: { marginLeft: SMALL_MARGIN * 3 + IMPORTANT, marginRight: SMALL_MARGIN * 3 + IMPORTANT },
  smMx4: { marginLeft: SMALL_MARGIN * 4 + IMPORTANT, marginRight: SMALL_MARGIN * 4 + IMPORTANT },
  smMx5: { marginLeft: SMALL_MARGIN * 5 + IMPORTANT, marginRight: SMALL_MARGIN * 5 + IMPORTANT },
  smMxAuto: { marginLeft: "auto" + IMPORTANT, marginRight: "auto" + IMPORTANT },

  smMy0: { marginTop: 0 + IMPORTANT, marginBottom: 0 + IMPORTANT },
  smMy1: { marginTop: SMALL_MARGIN * 1 + IMPORTANT, marginBottom: SMALL_MARGIN * 1 + IMPORTANT },
  smMy2: { marginTop: SMALL_MARGIN * 2 + IMPORTANT, marginBottom: SMALL_MARGIN * 2 + IMPORTANT },
  smMy3: { marginTop: SMALL_MARGIN * 3 + IMPORTANT, marginBottom: SMALL_MARGIN * 3 + IMPORTANT },
  smMy4: { marginTop: SMALL_MARGIN * 4 + IMPORTANT, marginBottom: SMALL_MARGIN * 4 + IMPORTANT },
  smMy5: { marginTop: SMALL_MARGIN * 5 + IMPORTANT, marginBottom: SMALL_MARGIN * 5 + IMPORTANT },
  smMyAuto: { marginTop: "auto" + IMPORTANT, marginBottom: "auto" + IMPORTANT },

  smMN1: { margin: SMALL_MARGIN * -1 + IMPORTANT },
  smMN2: { margin: SMALL_MARGIN * -2 + IMPORTANT },
  smMN3: { margin: SMALL_MARGIN * -3 + IMPORTANT },
  smMN4: { margin: SMALL_MARGIN * -4 + IMPORTANT },
  smMN5: { margin: SMALL_MARGIN * -5 + IMPORTANT },

  smMtN1: { marginTop: SMALL_MARGIN * -1 + IMPORTANT },
  smMtN2: { marginTop: SMALL_MARGIN * -2 + IMPORTANT },
  smMtN3: { marginTop: SMALL_MARGIN * -3 + IMPORTANT },
  smMtN4: { marginTop: SMALL_MARGIN * -4 + IMPORTANT },
  smMtN5: { marginTop: SMALL_MARGIN * -5 + IMPORTANT },

  smMrN1: { marginRight: SMALL_MARGIN * -1 + IMPORTANT },
  smMrN2: { marginRight: SMALL_MARGIN * -2 + IMPORTANT },
  smMrN3: { marginRight: SMALL_MARGIN * -3 + IMPORTANT },
  smMrN4: { marginRight: SMALL_MARGIN * -4 + IMPORTANT },
  smMrN5: { marginRight: SMALL_MARGIN * -5 + IMPORTANT },

  smMbN1: { marginBottom: SMALL_MARGIN * -1 + IMPORTANT },
  smMbN2: { marginBottom: SMALL_MARGIN * -2 + IMPORTANT },
  smMbN3: { marginBottom: SMALL_MARGIN * -3 + IMPORTANT },
  smMbN4: { marginBottom: SMALL_MARGIN * -4 + IMPORTANT },
  smMbN5: { marginBottom: SMALL_MARGIN * -5 + IMPORTANT },

  smMlN1: { marginLeft: SMALL_MARGIN * -1 + IMPORTANT },
  smMlN2: { marginLeft: SMALL_MARGIN * -2 + IMPORTANT },
  smMlN3: { marginLeft: SMALL_MARGIN * -3 + IMPORTANT },
  smMlN4: { marginLeft: SMALL_MARGIN * -4 + IMPORTANT },
  smMlN5: { marginLeft: SMALL_MARGIN * -5 + IMPORTANT },

  smMxN1: { marginLeft: SMALL_MARGIN * -1 + IMPORTANT, marginRight: SMALL_MARGIN * -1 + IMPORTANT },
  smMxN2: { marginLeft: SMALL_MARGIN * -2 + IMPORTANT, marginRight: SMALL_MARGIN * -2 + IMPORTANT },
  smMxN3: { marginLeft: SMALL_MARGIN * -3 + IMPORTANT, marginRight: SMALL_MARGIN * -3 + IMPORTANT },
  smMxN4: { marginLeft: SMALL_MARGIN * -4 + IMPORTANT, marginRight: SMALL_MARGIN * -4 + IMPORTANT },
  smMxN5: { marginLeft: SMALL_MARGIN * -5 + IMPORTANT, marginRight: SMALL_MARGIN * -5 + IMPORTANT },

  smMyN1: { marginTop: SMALL_MARGIN * -1 + IMPORTANT, marginBottom: SMALL_MARGIN * -1 + IMPORTANT },
  smMyN2: { marginTop: SMALL_MARGIN * -2 + IMPORTANT, marginBottom: SMALL_MARGIN * -2 + IMPORTANT },
  smMyN3: { marginTop: SMALL_MARGIN * -3 + IMPORTANT, marginBottom: SMALL_MARGIN * -3 + IMPORTANT },
  smMyN4: { marginTop: SMALL_MARGIN * -4 + IMPORTANT, marginBottom: SMALL_MARGIN * -4 + IMPORTANT },
  smMyN5: { marginTop: SMALL_MARGIN * -5 + IMPORTANT, marginBottom: SMALL_MARGIN * -5 + IMPORTANT },

  /*-------------------------------------------------
   * Gap
   *-----------------------------------------------*/
  smGap0: { gap: "0" + IMPORTANT },
  smGap1: { gap: SMALL_SPACING * 1 + IMPORTANT },
  smGap2: { gap: SMALL_SPACING * 2 + IMPORTANT },
  smGap3: { gap: SMALL_SPACING * 3 + IMPORTANT },
  smGap4: { gap: SMALL_SPACING * 4 + IMPORTANT },
  smGap5: { gap: SMALL_SPACING * 5 + IMPORTANT },

  smRowGap0: { rowGap: "0" + IMPORTANT },
  smRowGap1: { rowGap: SMALL_SPACING * 1 + IMPORTANT },
  smRowGap2: { rowGap: SMALL_SPACING * 2 + IMPORTANT },
  smRowGap3: { rowGap: SMALL_SPACING * 3 + IMPORTANT },
  smRowGap4: { rowGap: SMALL_SPACING * 4 + IMPORTANT },
  smRowGap5: { rowGap: SMALL_SPACING * 5 + IMPORTANT },

  smColGap0: { columnGap: "0" + IMPORTANT },
  smColGap1: { columnGap: SMALL_SPACING * 1 + IMPORTANT },
  smColGap2: { columnGap: SMALL_SPACING * 2 + IMPORTANT },
  smColGap3: { columnGap: SMALL_SPACING * 3 + IMPORTANT },
  smColGap4: { columnGap: SMALL_SPACING * 4 + IMPORTANT },
  smColGap5: { columnGap: SMALL_SPACING * 5 + IMPORTANT },

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
