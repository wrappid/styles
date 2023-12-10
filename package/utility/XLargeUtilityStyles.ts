/* eslint-disable */
import { BaseStyle } from "../base/BaseStyle";
import {
  DEFAULT_MARGIN,
  DEFAULT_PADDING,
  DEFAULT_SPACING,
  IMPORTANT,
  PX_TAG,
} from "../base/contants";

export const X_LARGE_MARGIN = DEFAULT_MARGIN;
export const X_LARGE_PADDING = DEFAULT_PADDING;
export const X_LARGE_SPACING = DEFAULT_SPACING;

export class XLargeUtilityStyles extends BaseStyle {
  constructor(){
    super()

    this.style = {
      /**************************************************
         * Alignment
         *************************************************/
      xlAlignItemsStart: { display: "flex", alignItems: "flex-start" },
      xlAlignItemsEnd: { display: "flex", alignItems: "flex-end" },
      xlAlignItemsCenter: { display: "flex", alignItems: "center" },
      xlAlignItemsBaseline: { display: "flex", alignItems: "baseline" },
      xlAlignItemsStretch: { display: "flex", alignItems: "stretch" },

      xlAlignContentStart: { display: "flex", alignContent: "flex-start" },
      xlAlignContentEnd: { display: "flex", alignContent: "flex-end" },
      xlAlignContentCenter: { display: "flex", alignContent: "center" },
      xlAlignContentBetween: { display: "flex", alignContent: "space-between" },
      xlAlignContentAround: { display: "flex", alignContent: "space-around" },
      xlAlignContentStretch: { display: "flex", alignContent: "stretch" },

      xlAlignSelfAuto: { display: "flex", alignSelf: "auto" },
      xlAlignSelfStart: { display: "flex", alignSelf: "flex-start" },
      xlAlignSelfEnd: { display: "flex", alignSelf: "flex-end" },
      xlAlignSelfCenter: { display: "flex", alignSelf: "center" },
      xlAlignSelfBaseline: { display: "flex", alignSelf: "baseline" },
      xlAlignSelfStretch: { display: "flex", alignSelf: "stretch" },

      xlJustifyContentCenter: { display: "flex", justifyContent: "center" },
      xlJustifyContentFlexStart: { display: "flex", justifyContent: "flex-start" },
      xlJustifyContentFlexEnd: { display: "flex", justifyContent: "flex-end" },
      xlJustifyContentSpaceBetween: { display: "flex", justifyContent: "space-between" },
      xlJustifyContentSpaceAround: { display: "flex", justifyContent: "space-around" },
      xlJustifyContentSpaceEvenly: { display: "flex", justifyContent: "space-evenly" },

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
      xlDisplayInline: { display: "inline" },
      xlDisplayInlineBlock: { display: "inline-block" },
      xlDisplayBlock: { display: "block" },
      xlDisplayGrid: { display: "grid" },
      xlDisplayTable: { display: "table" },
      xlDisplayTableRow: { display: "table-row" },
      xlDisplayTableCell: { display: "table-cell" },
      xlDisplayFlex: { display: "flex" },
      xlDisplayInlineFlex: { display: "inline-flex" },
      xlDisplayNone: { display: "none" },

      /**************************************************
       * Flex
       *************************************************/
      xlFlexDirectionRow: { flexDirection: "row" },
      xlFlexDirectionColumn: { flexDirection: "column" },
      xlFlexDirectionRowReverse: { flexDirection: "row-reverse" },
      xlFlexDirectionColumnReverse: { flexDirection: "column-reverse" },
      xlFlexFill: { flex: "1 1 auto" },
      xlFlexGrow0: { flexGrow: "0" },
      xlFlexGrow1: { flexGrow: "1" },
      xlFlexShrink0: { flexShrink: "0" },
      xlFlexShrink1: { flexShrink: "1" },
      xlFlexWrapWrap: { flexWrap: "wrap" },
      xlFlexWrapNoWrap: { flexWrap: "nowrap" },
      xlFlexWrapWrapReverse: { flexWrap: "wrap-reverse" },

      /**************************************************
       * Float
       *************************************************/
      xlFloatStart: { float: "left" },
      xlFloatEnd: { float: "right" },
      xlFloatNone: { float: "none" },

      /**************************************************
       * Interactions
       *************************************************/
      //NO SCREEN SIZE SPECIFIC STYLE AVAILABLE

      /**************************************************
       * Object Fit
       *************************************************/
      xlObjectFitContain: {
        // -o-object-fit: contain !important;
        objectFit: "contain",
      },

      xlObjectFitCover: {
        // -o-object-fit: cover !important;
        objectFit: "cover",
      },

      xlObjectFitFill: {
        // -o-object-fit: fill !important;
        objectFit: "fill",
      },

      xlObjectFitScale: {
        // -o-object-fit: scale-down !important;
        objectFit: "scale-down",
      },

      xlObjectFitNone: {
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
      xlP0: { padding: 0 },
      xlP1: { padding: X_LARGE_PADDING + PX_TAG },
      xlP2: { padding: X_LARGE_PADDING * 2 + PX_TAG },
      xlP3: { padding: X_LARGE_PADDING * 3 + PX_TAG },
      xlP4: { padding: X_LARGE_PADDING * 4 + PX_TAG },
      xlP5: { padding: X_LARGE_PADDING * 5 + PX_TAG },

      xlPt0: { paddingTop: 0 },
      xlPt1: { paddingTop: X_LARGE_PADDING + PX_TAG },
      xlPt2: { paddingTop: X_LARGE_PADDING * 2 + PX_TAG },
      xlPt3: { paddingTop: X_LARGE_PADDING * 3 + PX_TAG },
      xlPt4: { paddingTop: X_LARGE_PADDING * 4 + PX_TAG },
      xlPt5: { paddingTop: X_LARGE_PADDING * 5 + PX_TAG },

      xlPr0: { paddingRight: 0 },
      xlPr1: { paddingRight: X_LARGE_PADDING + PX_TAG },
      xlPr2: { paddingRight: X_LARGE_PADDING * 2 + PX_TAG },
      xlPr3: { paddingRight: X_LARGE_PADDING * 3 + PX_TAG },
      xlPr4: { paddingRight: X_LARGE_PADDING * 4 + PX_TAG },
      xlPr5: { paddingRight: X_LARGE_PADDING * 5 + PX_TAG },

      xlPb0: { paddingBottom: 0 },
      xlPb1: { paddingBottom: X_LARGE_PADDING + PX_TAG },
      xlPb2: { paddingBottom: X_LARGE_PADDING * 2 + PX_TAG },
      xlPb3: { paddingBottom: X_LARGE_PADDING * 3 + PX_TAG },
      xlPb4: { paddingBottom: X_LARGE_PADDING * 4 + PX_TAG },
      xlPb5: { paddingBottom: X_LARGE_PADDING * 5 + PX_TAG },

      xlPl0: { paddingLeft: 0 },
      xlPl1: { paddingLeft: X_LARGE_PADDING + PX_TAG },
      xlPl2: { paddingLeft: X_LARGE_PADDING * 2 + PX_TAG },
      xlPl3: { paddingLeft: X_LARGE_PADDING * 3 + PX_TAG },
      xlPl4: { paddingLeft: X_LARGE_PADDING * 4 + PX_TAG },
      xlPl5: { paddingLeft: X_LARGE_PADDING * 5 + PX_TAG },

      xlPx0: { paddingLeft: 0, paddingRight: 0 },
      xlPx1: {
        paddingLeft: X_LARGE_PADDING * 1 + PX_TAG,
        paddingRight: X_LARGE_PADDING * 1 + PX_TAG,
      },
      xlPx2: {
        paddingLeft: X_LARGE_PADDING * 2 + PX_TAG,
        paddingRight: X_LARGE_PADDING * 2 + PX_TAG,
      },
      xlPx3: {
        paddingLeft: X_LARGE_PADDING * 3 + PX_TAG,
        paddingRight: X_LARGE_PADDING * 3 + PX_TAG,
      },
      xlPx4: {
        paddingLeft: X_LARGE_PADDING * 4 + PX_TAG,
        paddingRight: X_LARGE_PADDING * 4 + PX_TAG,
      },
      xlPx5: {
        paddingLeft: X_LARGE_PADDING * 5 + PX_TAG,
        paddingRight: X_LARGE_PADDING * 5 + PX_TAG,
      },

      xlPy0: { paddingTop: 0, paddingBottom: 0 },
      xlPy1: {
        paddingTop: X_LARGE_PADDING * 1 + PX_TAG,
        paddingBottom: X_LARGE_PADDING * 1 + PX_TAG,
      },
      xlPy2: {
        paddingTop: X_LARGE_PADDING * 2 + PX_TAG,
        paddingBottom: X_LARGE_PADDING * 2 + PX_TAG,
      },
      xlPy3: {
        paddingTop: X_LARGE_PADDING * 3 + PX_TAG,
        paddingBottom: X_LARGE_PADDING * 3 + PX_TAG,
      },
      xlPy4: {
        paddingTop: X_LARGE_PADDING * 4 + PX_TAG,
        paddingBottom: X_LARGE_PADDING * 4 + PX_TAG,
      },
      xlPy5: {
        paddingTop: X_LARGE_PADDING * 5 + PX_TAG,
        paddingBottom: X_LARGE_PADDING * 5 + PX_TAG,
      },

      /*-------------------------------------------------
      * Margin
      *-----------------------------------------------*/
      xlM0: { margin: 0 + IMPORTANT },
      xlM1: { margin: X_LARGE_MARGIN + PX_TAG + IMPORTANT },
      xlM2: { margin: X_LARGE_MARGIN * 2 + PX_TAG + IMPORTANT },
      xlM3: { margin: X_LARGE_MARGIN * 3 + PX_TAG + IMPORTANT },
      xlM4: { margin: X_LARGE_MARGIN * 4 + PX_TAG + IMPORTANT },
      xlM5: { margin: X_LARGE_MARGIN * 5 + PX_TAG + IMPORTANT },
      xlMAuto: { margin: "auto" + IMPORTANT },

      xlMt0: { marginTop: 0 + IMPORTANT },
      xlMt1: { marginTop: X_LARGE_MARGIN + PX_TAG + IMPORTANT },
      xlMt2: { marginTop: X_LARGE_MARGIN * 2 + PX_TAG + IMPORTANT },
      xlMt3: { marginTop: X_LARGE_MARGIN * 3 + PX_TAG + IMPORTANT },
      xlMt4: { marginTop: X_LARGE_MARGIN * 4 + PX_TAG + IMPORTANT },
      xlMt5: { marginTop: X_LARGE_MARGIN * 5 + PX_TAG + IMPORTANT },
      xlMtAuto: { marginTop: "auto" + IMPORTANT },

      xlMr0: { marginRight: 0 + IMPORTANT },
      xlMr1: { marginRight: X_LARGE_MARGIN + PX_TAG + IMPORTANT },
      xlMr2: { marginRight: X_LARGE_MARGIN * 2 + PX_TAG + IMPORTANT },
      xlMr3: { marginRight: X_LARGE_MARGIN * 3 + PX_TAG + IMPORTANT },
      xlMr4: { marginRight: X_LARGE_MARGIN * 4 + PX_TAG + IMPORTANT },
      xlMr5: { marginRight: X_LARGE_MARGIN * 5 + PX_TAG + IMPORTANT },
      xlMrAuto: { marginRight: "auto" + IMPORTANT },

      xlMb0: { marginBottom: 0 + IMPORTANT },
      xlMb1: { marginBottom: X_LARGE_MARGIN + PX_TAG + IMPORTANT },
      xlMb2: { marginBottom: X_LARGE_MARGIN * 2 + PX_TAG + IMPORTANT },
      xlMb3: { marginBottom: X_LARGE_MARGIN * 3 + PX_TAG + IMPORTANT },
      xlMb4: { marginBottom: X_LARGE_MARGIN * 4 + PX_TAG + IMPORTANT },
      xlMb5: { marginBottom: X_LARGE_MARGIN * 5 + PX_TAG + IMPORTANT },
      xlMbAuto: { marginBottom: "auto" + IMPORTANT },

      xlMl0: { marginLeft: 0 + IMPORTANT },
      xlMl1: { marginLeft: X_LARGE_MARGIN + PX_TAG + IMPORTANT },
      xlMl2: { marginLeft: X_LARGE_MARGIN * 2 + PX_TAG + IMPORTANT },
      xlMl3: { marginLeft: X_LARGE_MARGIN * 3 + PX_TAG + IMPORTANT },
      xlMl4: { marginLeft: X_LARGE_MARGIN * 4 + PX_TAG + IMPORTANT },
      xlMl5: { marginLeft: X_LARGE_MARGIN * 5 + PX_TAG + IMPORTANT },
      xlMlAuto: { marginLeft: "auto" + IMPORTANT },

      xlMx0: { marginLeft: 0 + IMPORTANT, marginRight: 0 + IMPORTANT },
      xlMx1: {
        marginLeft: X_LARGE_MARGIN * 1 + PX_TAG + IMPORTANT,
        marginRight: X_LARGE_MARGIN * 1 + PX_TAG + IMPORTANT,
      },
      xlMx2: {
        marginLeft: X_LARGE_MARGIN * 2 + PX_TAG + IMPORTANT,
        marginRight: X_LARGE_MARGIN * 2 + PX_TAG + IMPORTANT,
      },
      xlMx3: {
        marginLeft: X_LARGE_MARGIN * 3 + PX_TAG + IMPORTANT,
        marginRight: X_LARGE_MARGIN * 3 + PX_TAG + IMPORTANT,
      },
      xlMx4: {
        marginLeft: X_LARGE_MARGIN * 4 + PX_TAG + IMPORTANT,
        marginRight: X_LARGE_MARGIN * 4 + PX_TAG + IMPORTANT,
      },
      xlMx5: {
        marginLeft: X_LARGE_MARGIN * 5 + PX_TAG + IMPORTANT,
        marginRight: X_LARGE_MARGIN * 5 + PX_TAG + IMPORTANT,
      },
      xlMxAuto: { marginLeft: "auto" + IMPORTANT, marginRight: "auto" + IMPORTANT },

      xlMy0: { marginTop: 0 + IMPORTANT, marginBottom: 0 + IMPORTANT },
      xlMy1: {
        marginTop: X_LARGE_MARGIN * 1 + PX_TAG + IMPORTANT,
        marginBottom: X_LARGE_MARGIN * 1 + PX_TAG + IMPORTANT,
      },
      xlMy2: {
        marginTop: X_LARGE_MARGIN * 2 + PX_TAG + IMPORTANT,
        marginBottom: X_LARGE_MARGIN * 2 + PX_TAG + IMPORTANT,
      },
      xlMy3: {
        marginTop: X_LARGE_MARGIN * 3 + PX_TAG + IMPORTANT,
        marginBottom: X_LARGE_MARGIN * 3 + PX_TAG + IMPORTANT,
      },
      xlMy4: {
        marginTop: X_LARGE_MARGIN * 4 + PX_TAG + IMPORTANT,
        marginBottom: X_LARGE_MARGIN * 4 + PX_TAG + IMPORTANT,
      },
      xlMy5: {
        marginTop: X_LARGE_MARGIN * 5 + PX_TAG + IMPORTANT,
        marginBottom: X_LARGE_MARGIN * 5 + PX_TAG + IMPORTANT,
      },
      xlMyAuto: { marginTop: "auto" + IMPORTANT, marginBottom: "auto" + IMPORTANT },

      xlMN1: { margin: X_LARGE_MARGIN * -1 + PX_TAG + IMPORTANT },
      xlMN2: { margin: X_LARGE_MARGIN * -2 + PX_TAG + IMPORTANT },
      xlMN3: { margin: X_LARGE_MARGIN * -3 + PX_TAG + IMPORTANT },
      xlMN4: { margin: X_LARGE_MARGIN * -4 + PX_TAG + IMPORTANT },
      xlMN5: { margin: X_LARGE_MARGIN * -5 + PX_TAG + IMPORTANT },

      xlMtN1: { marginTop: X_LARGE_MARGIN * -1 + PX_TAG + IMPORTANT },
      xlMtN2: { marginTop: X_LARGE_MARGIN * -2 + PX_TAG + IMPORTANT },
      xlMtN3: { marginTop: X_LARGE_MARGIN * -3 + PX_TAG + IMPORTANT },
      xlMtN4: { marginTop: X_LARGE_MARGIN * -4 + PX_TAG + IMPORTANT },
      xlMtN5: { marginTop: X_LARGE_MARGIN * -5 + PX_TAG + IMPORTANT },

      xlMrN1: { marginRight: X_LARGE_MARGIN * -1 + PX_TAG + IMPORTANT },
      xlMrN2: { marginRight: X_LARGE_MARGIN * -2 + PX_TAG + IMPORTANT },
      xlMrN3: { marginRight: X_LARGE_MARGIN * -3 + PX_TAG + IMPORTANT },
      xlMrN4: { marginRight: X_LARGE_MARGIN * -4 + PX_TAG + IMPORTANT },
      xlMrN5: { marginRight: X_LARGE_MARGIN * -5 + PX_TAG + IMPORTANT },

      xlMbN1: { marginBottom: X_LARGE_MARGIN * -1 + PX_TAG + IMPORTANT },
      xlMbN2: { marginBottom: X_LARGE_MARGIN * -2 + PX_TAG + IMPORTANT },
      xlMbN3: { marginBottom: X_LARGE_MARGIN * -3 + PX_TAG + IMPORTANT },
      xlMbN4: { marginBottom: X_LARGE_MARGIN * -4 + PX_TAG + IMPORTANT },
      xlMbN5: { marginBottom: X_LARGE_MARGIN * -5 + PX_TAG + IMPORTANT },

      xlMlN1: { marginLeft: X_LARGE_MARGIN * -1 + PX_TAG + IMPORTANT },
      xlMlN2: { marginLeft: X_LARGE_MARGIN * -2 + PX_TAG + IMPORTANT },
      xlMlN3: { marginLeft: X_LARGE_MARGIN * -3 + PX_TAG + IMPORTANT },
      xlMlN4: { marginLeft: X_LARGE_MARGIN * -4 + PX_TAG + IMPORTANT },
      xlMlN5: { marginLeft: X_LARGE_MARGIN * -5 + PX_TAG + IMPORTANT },

      xlMxN1: {
        marginLeft: X_LARGE_MARGIN * -1 + PX_TAG + IMPORTANT,
        marginRight: X_LARGE_MARGIN * -1 + PX_TAG + IMPORTANT,
      },
      xlMxN2: {
        marginLeft: X_LARGE_MARGIN * -2 + PX_TAG + IMPORTANT,
        marginRight: X_LARGE_MARGIN * -2 + PX_TAG + IMPORTANT,
      },
      xlMxN3: {
        marginLeft: X_LARGE_MARGIN * -3 + PX_TAG + IMPORTANT,
        marginRight: X_LARGE_MARGIN * -3 + PX_TAG + IMPORTANT,
      },
      xlMxN4: {
        marginLeft: X_LARGE_MARGIN * -4 + PX_TAG + IMPORTANT,
        marginRight: X_LARGE_MARGIN * -4 + PX_TAG + IMPORTANT,
      },
      xlMxN5: {
        marginLeft: X_LARGE_MARGIN * -5 + PX_TAG + IMPORTANT,
        marginRight: X_LARGE_MARGIN * -5 + PX_TAG + IMPORTANT,
      },

      xlMyN1: {
        marginTop: X_LARGE_MARGIN * -1 + PX_TAG + IMPORTANT,
        marginBottom: X_LARGE_MARGIN * -1 + PX_TAG + IMPORTANT,
      },
      xlMyN2: {
        marginTop: X_LARGE_MARGIN * -2 + PX_TAG + IMPORTANT,
        marginBottom: X_LARGE_MARGIN * -2 + PX_TAG + IMPORTANT,
      },
      xlMyN3: {
        marginTop: X_LARGE_MARGIN * -3 + PX_TAG + IMPORTANT,
        marginBottom: X_LARGE_MARGIN * -3 + PX_TAG + IMPORTANT,
      },
      xlMyN4: {
        marginTop: X_LARGE_MARGIN * -4 + PX_TAG + IMPORTANT,
        marginBottom: X_LARGE_MARGIN * -4 + PX_TAG + IMPORTANT,
      },
      xlMyN5: {
        marginTop: X_LARGE_MARGIN * -5 + PX_TAG + IMPORTANT,
        marginBottom: X_LARGE_MARGIN * -5 + PX_TAG + IMPORTANT,
      },

      /*-------------------------------------------------
      * Gap
      *-----------------------------------------------*/
      xlGap0: { gap: "0" },
      xlGap1: { gap: X_LARGE_SPACING * 1 },
      xlGap2: { gap: X_LARGE_SPACING * 2 },
      xlGap3: { gap: X_LARGE_SPACING * 3 },
      xlGap4: { gap: X_LARGE_SPACING * 4 },
      xlGap5: { gap: X_LARGE_SPACING * 5 },

      xlRowGap0: { rowGap: "0" },
      xlRowGap1: { rowGap: X_LARGE_SPACING * 1 },
      xlRowGap2: { rowGap: X_LARGE_SPACING * 2 },
      xlRowGap3: { rowGap: X_LARGE_SPACING * 3 },
      xlRowGap4: { rowGap: X_LARGE_SPACING * 4 },
      xlRowGap5: { rowGap: X_LARGE_SPACING * 5 },

      xlColGap0: { columnGap: "0" },
      xlColGap1: { columnGap: X_LARGE_SPACING * 1 },
      xlColGap2: { columnGap: X_LARGE_SPACING * 2 },
      xlColGap3: { columnGap: X_LARGE_SPACING * 3 },
      xlColGap4: { columnGap: X_LARGE_SPACING * 4 },
      xlColGap5: { columnGap: X_LARGE_SPACING * 5 },

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
    }
  }
};
