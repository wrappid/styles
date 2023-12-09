/* eslint-disable */
import {
  DEFAULT_MARGIN,
  DEFAULT_PADDING,
  DEFAULT_SPACING,
  IMPORTANT,
  PX_TAG,
} from "../base/contants";

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
      lgP1: { padding: LARGE_PADDING + PX_TAG },
      lgP2: { padding: LARGE_PADDING * 2 + PX_TAG },
      lgP3: { padding: LARGE_PADDING * 3 + PX_TAG },
      lgP4: { padding: LARGE_PADDING * 4 + PX_TAG },
      lgP5: { padding: LARGE_PADDING * 5 + PX_TAG },

      lgPt0: { paddingTop: 0 },
      lgPt1: { paddingTop: LARGE_PADDING + PX_TAG },
      lgPt2: { paddingTop: LARGE_PADDING * 2 + PX_TAG },
      lgPt3: { paddingTop: LARGE_PADDING * 3 + PX_TAG },
      lgPt4: { paddingTop: LARGE_PADDING * 4 + PX_TAG },
      lgPt5: { paddingTop: LARGE_PADDING * 5 + PX_TAG },

      lgPr0: { paddingRight: 0 },
      lgPr1: { paddingRight: LARGE_PADDING + PX_TAG },
      lgPr2: { paddingRight: LARGE_PADDING * 2 + PX_TAG },
      lgPr3: { paddingRight: LARGE_PADDING * 3 + PX_TAG },
      lgPr4: { paddingRight: LARGE_PADDING * 4 + PX_TAG },
      lgPr5: { paddingRight: LARGE_PADDING * 5 + PX_TAG },

      lgPb0: { paddingBottom: 0 },
      lgPb1: { paddingBottom: LARGE_PADDING + PX_TAG },
      lgPb2: { paddingBottom: LARGE_PADDING * 2 + PX_TAG },
      lgPb3: { paddingBottom: LARGE_PADDING * 3 + PX_TAG },
      lgPb4: { paddingBottom: LARGE_PADDING * 4 + PX_TAG },
      lgPb5: { paddingBottom: LARGE_PADDING * 5 + PX_TAG },

      lgPl0: { paddingLeft: 0 },
      lgPl1: { paddingLeft: LARGE_PADDING + PX_TAG },
      lgPl2: { paddingLeft: LARGE_PADDING * 2 + PX_TAG },
      lgPl3: { paddingLeft: LARGE_PADDING * 3 + PX_TAG },
      lgPl4: { paddingLeft: LARGE_PADDING * 4 + PX_TAG },
      lgPl5: { paddingLeft: LARGE_PADDING * 5 + PX_TAG },

      lgPx0: { paddingLeft: 0, paddingRight: 0 },
      lgPx1: {
        paddingLeft: LARGE_PADDING * 1 + PX_TAG,
        paddingRight: LARGE_PADDING * 1 + PX_TAG,
      },
      lgPx2: {
        paddingLeft: LARGE_PADDING * 2 + PX_TAG,
        paddingRight: LARGE_PADDING * 2 + PX_TAG,
      },
      lgPx3: {
        paddingLeft: LARGE_PADDING * 3 + PX_TAG,
        paddingRight: LARGE_PADDING * 3 + PX_TAG,
      },
      lgPx4: {
        paddingLeft: LARGE_PADDING * 4 + PX_TAG,
        paddingRight: LARGE_PADDING * 4 + PX_TAG,
      },
      lgPx5: {
        paddingLeft: LARGE_PADDING * 5 + PX_TAG,
        paddingRight: LARGE_PADDING * 5 + PX_TAG,
      },

      lgPy0: { paddingTop: 0, paddingBottom: 0 },
      lgPy1: {
        paddingTop: LARGE_PADDING * 1 + PX_TAG,
        paddingBottom: LARGE_PADDING * 1 + PX_TAG,
      },
      lgPy2: {
        paddingTop: LARGE_PADDING * 2 + PX_TAG,
        paddingBottom: LARGE_PADDING * 2 + PX_TAG,
      },
      lgPy3: {
        paddingTop: LARGE_PADDING * 3 + PX_TAG,
        paddingBottom: LARGE_PADDING * 3 + PX_TAG,
      },
      lgPy4: {
        paddingTop: LARGE_PADDING * 4 + PX_TAG,
        paddingBottom: LARGE_PADDING * 4 + PX_TAG,
      },
      lgPy5: {
        paddingTop: LARGE_PADDING * 5 + PX_TAG,
        paddingBottom: LARGE_PADDING * 5 + PX_TAG,
      },

      /*-------------------------------------------------
      * Margin
      *-----------------------------------------------*/
      lgM0: { margin: 0 + IMPORTANT },
      lgM1: { margin: LARGE_MARGIN + PX_TAG + IMPORTANT },
      lgM2: { margin: LARGE_MARGIN * 2 + PX_TAG + IMPORTANT },
      lgM3: { margin: LARGE_MARGIN * 3 + PX_TAG + IMPORTANT },
      lgM4: { margin: LARGE_MARGIN * 4 + PX_TAG + IMPORTANT },
      lgM5: { margin: LARGE_MARGIN * 5 + PX_TAG + IMPORTANT },
      lgMAuto: { margin: "auto" + IMPORTANT },

      lgMt0: { marginTop: 0 + IMPORTANT },
      lgMt1: { marginTop: LARGE_MARGIN + PX_TAG + IMPORTANT },
      lgMt2: { marginTop: LARGE_MARGIN * 2 + PX_TAG + IMPORTANT },
      lgMt3: { marginTop: LARGE_MARGIN * 3 + PX_TAG + IMPORTANT },
      lgMt4: { marginTop: LARGE_MARGIN * 4 + PX_TAG + IMPORTANT },
      lgMt5: { marginTop: LARGE_MARGIN * 5 + PX_TAG + IMPORTANT },
      lgMtAuto: { marginTop: "auto" + IMPORTANT },

      lgMr0: { marginRight: 0 + IMPORTANT },
      lgMr1: { marginRight: LARGE_MARGIN + PX_TAG + IMPORTANT },
      lgMr2: { marginRight: LARGE_MARGIN * 2 + PX_TAG + IMPORTANT },
      lgMr3: { marginRight: LARGE_MARGIN * 3 + PX_TAG + IMPORTANT },
      lgMr4: { marginRight: LARGE_MARGIN * 4 + PX_TAG + IMPORTANT },
      lgMr5: { marginRight: LARGE_MARGIN * 5 + PX_TAG + IMPORTANT },
      lgMrAuto: { marginRight: "auto" + IMPORTANT },

      lgMb0: { marginBottom: 0 + IMPORTANT },
      lgMb1: { marginBottom: LARGE_MARGIN + PX_TAG + IMPORTANT },
      lgMb2: { marginBottom: LARGE_MARGIN * 2 + PX_TAG + IMPORTANT },
      lgMb3: { marginBottom: LARGE_MARGIN * 3 + PX_TAG + IMPORTANT },
      lgMb4: { marginBottom: LARGE_MARGIN * 4 + PX_TAG + IMPORTANT },
      lgMb5: { marginBottom: LARGE_MARGIN * 5 + PX_TAG + IMPORTANT },
      lgMbAuto: { marginBottom: "auto" + IMPORTANT },

      lgMl0: { marginLeft: 0 + IMPORTANT },
      lgMl1: { marginLeft: LARGE_MARGIN + PX_TAG + IMPORTANT },
      lgMl2: { marginLeft: LARGE_MARGIN * 2 + PX_TAG + IMPORTANT },
      lgMl3: { marginLeft: LARGE_MARGIN * 3 + PX_TAG + IMPORTANT },
      lgMl4: { marginLeft: LARGE_MARGIN * 4 + PX_TAG + IMPORTANT },
      lgMl5: { marginLeft: LARGE_MARGIN * 5 + PX_TAG + IMPORTANT },
      lgMlAuto: { marginLeft: "auto" + IMPORTANT },

      lgMx0: { marginLeft: 0, marginRight: 0 + IMPORTANT },
      lgMx1: {
        marginLeft: LARGE_MARGIN * 1 + PX_TAG + IMPORTANT,
        marginRight: LARGE_MARGIN * 1 + PX_TAG + IMPORTANT,
      },
      lgMx2: {
        marginLeft: LARGE_MARGIN * 2 + PX_TAG + IMPORTANT,
        marginRight: LARGE_MARGIN * 2 + PX_TAG + IMPORTANT,
      },
      lgMx3: {
        marginLeft: LARGE_MARGIN * 3 + PX_TAG + IMPORTANT,
        marginRight: LARGE_MARGIN * 3 + PX_TAG + IMPORTANT,
      },
      lgMx4: {
        marginLeft: LARGE_MARGIN * 4 + PX_TAG + IMPORTANT,
        marginRight: LARGE_MARGIN * 4 + PX_TAG + IMPORTANT,
      },
      lgMx5: {
        marginLeft: LARGE_MARGIN * 5 + PX_TAG + IMPORTANT,
        marginRight: LARGE_MARGIN * 5 + PX_TAG + IMPORTANT,
      },
      lgMxAuto: { marginLeft: "auto" + IMPORTANT, marginRight: "auto" + IMPORTANT },

      lgMy0: { marginTop: 0, marginBottom: 0 + IMPORTANT },
      lgMy1: {
        marginTop: LARGE_MARGIN * 1 + PX_TAG + IMPORTANT,
        marginBottom: LARGE_MARGIN * 1 + PX_TAG + IMPORTANT,
      },
      lgMy2: {
        marginTop: LARGE_MARGIN * 2 + PX_TAG + IMPORTANT,
        marginBottom: LARGE_MARGIN * 2 + PX_TAG + IMPORTANT,
      },
      lgMy3: {
        marginTop: LARGE_MARGIN * 3 + PX_TAG + IMPORTANT,
        marginBottom: LARGE_MARGIN * 3 + PX_TAG + IMPORTANT,
      },
      lgMy4: {
        marginTop: LARGE_MARGIN * 4 + PX_TAG + IMPORTANT,
        marginBottom: LARGE_MARGIN * 4 + PX_TAG + IMPORTANT,
      },
      lgMy5: {
        marginTop: LARGE_MARGIN * 5 + PX_TAG + IMPORTANT,
        marginBottom: LARGE_MARGIN * 5 + PX_TAG + IMPORTANT,
      },
      lgMyAuto: { marginTop: "auto" + IMPORTANT, marginBottom: "auto" + IMPORTANT },

      lgMN1: { margin: LARGE_MARGIN * -1 + PX_TAG + IMPORTANT },
      lgMN2: { margin: LARGE_MARGIN * -2 + PX_TAG + IMPORTANT },
      lgMN3: { margin: LARGE_MARGIN * -3 + PX_TAG + IMPORTANT },
      lgMN4: { margin: LARGE_MARGIN * -4 + PX_TAG + IMPORTANT },
      lgMN5: { margin: LARGE_MARGIN * -5 + PX_TAG + IMPORTANT },

      lgMtN1: { marginTop: LARGE_MARGIN * -1 + PX_TAG + IMPORTANT },
      lgMtN2: { marginTop: LARGE_MARGIN * -2 + PX_TAG + IMPORTANT },
      lgMtN3: { marginTop: LARGE_MARGIN * -3 + PX_TAG + IMPORTANT },
      lgMtN4: { marginTop: LARGE_MARGIN * -4 + PX_TAG + IMPORTANT },
      lgMtN5: { marginTop: LARGE_MARGIN * -5 + PX_TAG + IMPORTANT },

      lgMrN1: { marginRight: LARGE_MARGIN * -1 + PX_TAG + IMPORTANT },
      lgMrN2: { marginRight: LARGE_MARGIN * -2 + PX_TAG + IMPORTANT },
      lgMrN3: { marginRight: LARGE_MARGIN * -3 + PX_TAG + IMPORTANT },
      lgMrN4: { marginRight: LARGE_MARGIN * -4 + PX_TAG + IMPORTANT },
      lgMrN5: { marginRight: LARGE_MARGIN * -5 + PX_TAG + IMPORTANT },

      lgMbN1: { marginBottom: LARGE_MARGIN * -1 + PX_TAG + IMPORTANT },
      lgMbN2: { marginBottom: LARGE_MARGIN * -2 + PX_TAG + IMPORTANT },
      lgMbN3: { marginBottom: LARGE_MARGIN * -3 + PX_TAG + IMPORTANT },
      lgMbN4: { marginBottom: LARGE_MARGIN * -4 + PX_TAG + IMPORTANT },
      lgMbN5: { marginBottom: LARGE_MARGIN * -5 + PX_TAG + IMPORTANT },

      lgMlN1: { marginLeft: LARGE_MARGIN * -1 + PX_TAG + IMPORTANT },
      lgMlN2: { marginLeft: LARGE_MARGIN * -2 + PX_TAG + IMPORTANT },
      lgMlN3: { marginLeft: LARGE_MARGIN * -3 + PX_TAG + IMPORTANT },
      lgMlN4: { marginLeft: LARGE_MARGIN * -4 + PX_TAG + IMPORTANT },
      lgMlN5: { marginLeft: LARGE_MARGIN * -5 + PX_TAG + IMPORTANT },

      lgMxN1: {
        marginLeft: LARGE_MARGIN * -1 + PX_TAG + IMPORTANT,
        marginRight: LARGE_MARGIN * -1 + PX_TAG + IMPORTANT,
      },
      lgMxN2: {
        marginLeft: LARGE_MARGIN * -2 + PX_TAG + IMPORTANT,
        marginRight: LARGE_MARGIN * -2 + PX_TAG + IMPORTANT,
      },
      lgMxN3: {
        marginLeft: LARGE_MARGIN * -3 + PX_TAG + IMPORTANT,
        marginRight: LARGE_MARGIN * -3 + PX_TAG + IMPORTANT,
      },
      lgMxN4: {
        marginLeft: LARGE_MARGIN * -4 + PX_TAG + IMPORTANT,
        marginRight: LARGE_MARGIN * -4 + PX_TAG + IMPORTANT,
      },
      lgMxN5: {
        marginLeft: LARGE_MARGIN * -5 + PX_TAG + IMPORTANT,
        marginRight: LARGE_MARGIN * -5 + PX_TAG + IMPORTANT,
      },

      lgMyN1: {
        marginTop: LARGE_MARGIN * -1 + PX_TAG + IMPORTANT,
        marginBottom: LARGE_MARGIN * -1 + PX_TAG + IMPORTANT,
      },
      lgMyN2: {
        marginTop: LARGE_MARGIN * -2 + PX_TAG + IMPORTANT,
        marginBottom: LARGE_MARGIN * -2 + PX_TAG + IMPORTANT,
      },
      lgMyN3: {
        marginTop: LARGE_MARGIN * -3 + PX_TAG + IMPORTANT,
        marginBottom: LARGE_MARGIN * -3 + PX_TAG + IMPORTANT,
      },
      lgMyN4: {
        marginTop: LARGE_MARGIN * -4 + PX_TAG + IMPORTANT,
        marginBottom: LARGE_MARGIN * -4 + PX_TAG + IMPORTANT,
      },
      lgMyN5: {
        marginTop: LARGE_MARGIN * -5 + PX_TAG + IMPORTANT,
        marginBottom: LARGE_MARGIN * -5 + PX_TAG + IMPORTANT,
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
    }

