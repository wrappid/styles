/* eslint-disable */
import { BaseStyle } from "../base/BaseStyle";
import {
  DEFAULT_MARGIN,
  DEFAULT_PADDING,
  DEFAULT_SPACING,
  IMPORTANT,
  PX_TAG
} from "../base/constants";

export const XX_LARGE_MARGIN = DEFAULT_MARGIN;
export const XX_LARGE_PADDING = DEFAULT_PADDING;
export const XX_LARGE_SPACING = DEFAULT_SPACING;

export default class XXLargeUtilityStyles extends BaseStyle {
  constructor() {
    super();
    this.style = {
      /**************************************************
       * Alignment
       *************************************************/
      xxlAlignItemsStart: { display: "flex", alignItems: "flex-start" },
      xxlAlignItemsEnd: { display: "flex", alignItems: "flex-end" },
      xxlAlignItemsCenter: { display: "flex", alignItems: "center" },
      xxlAlignItemsBaseline: { display: "flex", alignItems: "baseline" },
      xxlAlignItemsStretch: { display: "flex", alignItems: "stretch" },

      xxlAlignContentStart: { display: "flex", alignContent: "flex-start" },
      xxlAlignContentEnd: { display: "flex", alignContent: "flex-end" },
      xxlAlignContentCenter: { display: "flex", alignContent: "center" },
      xxlAlignContentBetween: {
        display: "flex",
        alignContent: "space-between"
      },
      xxlAlignContentAround: { display: "flex", alignContent: "space-around" },
      xxlAlignContentStretch: { display: "flex", alignContent: "stretch" },

      xxlAlignSelfAuto: { display: "flex", alignSelf: "auto" },
      xxlAlignSelfStart: { display: "flex", alignSelf: "flex-start" },
      xxlAlignSelfEnd: { display: "flex", alignSelf: "flex-end" },
      xxlAlignSelfCenter: { display: "flex", alignSelf: "center" },
      xxlAlignSelfBaseline: { display: "flex", alignSelf: "baseline" },
      xxlAlignSelfStretch: { display: "flex", alignSelf: "stretch" },

      xxlJustifyContentCenter: { display: "flex", justifyContent: "center" },
      xxlJustifyContentFlexStart: {
        display: "flex",
        justifyContent: "flex-start"
      },
      xxlJustifyContentFlexEnd: { display: "flex", justifyContent: "flex-end" },
      xxlJustifyContentSpaceBetween: {
        display: "flex",
        justifyContent: "space-between"
      },
      xxlJustifyContentSpaceAround: {
        display: "flex",
        justifyContent: "space-around"
      },
      xxlJustifyContentSpaceEvenly: {
        display: "flex",
        justifyContent: "space-evenly"
      },

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
      xxlFlexDirectionRow: { flexDirection: "row" },
      xxlFlexDirectionColumn: { flexDirection: "column" },
      xxlFlexDirectionRowReverse: { flexDirection: "row-reverse" },
      xxlFlexDirectionColumnReverse: { flexDirection: "column-reverse" },
      xxlFlexFill: { flex: "1 1 auto" },
      xxlFlexGrow0: { flexGrow: "0" },
      xxlFlexGrow1: { flexGrow: "1" },
      xxlFlexShrink0: { flexShrink: "0" },
      xxlFlexShrink1: { flexShrink: "1" },
      xxlFlexWrapWrap: { flexWrap: "wrap" },
      xxlFlexWrapNoWrap: { flexWrap: "nowrap" },
      xxlFlexWrapWrapReverse: { flexWrap: "wrap-reverse" },

      /**************************************************
       * Float
       *************************************************/
      xxlFloatStart: { float: "left" },
      xxlFloatEnd: { float: "right" },
      xxlFloatNone: { float: "none" },

      /**************************************************
       * Interactions
       *************************************************/
      //NO SCREEN SIZE SPECIFIC STYLE AVAILABLE

      /**************************************************
       * Object Fit
       *************************************************/
      xxlObjectFitContain: {
        // -o-object-fit: contain !important;
        objectFit: "contain"
      },

      xxlObjectFitCover: {
        // -o-object-fit: cover !important;
        objectFit: "cover"
      },

      xxlObjectFitFill: {
        // -o-object-fit: fill !important;
        objectFit: "fill"
      },

      xxlObjectFitScale: {
        // -o-object-fit: scale-down !important;
        objectFit: "scale-down"
      },

      xxlObjectFitNone: {
        // -o-object-fit: none !important;
        objectFit: "none"
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
      xxlP1: { padding: XX_LARGE_PADDING + PX_TAG + IMPORTANT },
      xxlP2: { padding: XX_LARGE_PADDING * 2 + PX_TAG + IMPORTANT },
      xxlP3: { padding: XX_LARGE_PADDING * 3 + PX_TAG + IMPORTANT },
      xxlP4: { padding: XX_LARGE_PADDING * 4 + PX_TAG + IMPORTANT },
      xxlP5: { padding: XX_LARGE_PADDING * 5 + PX_TAG + IMPORTANT },

      xxlPt0: { paddingTop: 0 + IMPORTANT },
      xxlPt1: { paddingTop: XX_LARGE_PADDING + PX_TAG + IMPORTANT },
      xxlPt2: { paddingTop: XX_LARGE_PADDING * 2 + PX_TAG + IMPORTANT },
      xxlPt3: { paddingTop: XX_LARGE_PADDING * 3 + PX_TAG + IMPORTANT },
      xxlPt4: { paddingTop: XX_LARGE_PADDING * 4 + PX_TAG + IMPORTANT },
      xxlPt5: { paddingTop: XX_LARGE_PADDING * 5 + PX_TAG + IMPORTANT },

      xxlPr0: { paddingRight: 0 + IMPORTANT },
      xxlPr1: { paddingRight: XX_LARGE_PADDING + PX_TAG + IMPORTANT },
      xxlPr2: { paddingRight: XX_LARGE_PADDING * 2 + PX_TAG + IMPORTANT },
      xxlPr3: { paddingRight: XX_LARGE_PADDING * 3 + PX_TAG + IMPORTANT },
      xxlPr4: { paddingRight: XX_LARGE_PADDING * 4 + PX_TAG + IMPORTANT },
      xxlPr5: { paddingRight: XX_LARGE_PADDING * 5 + PX_TAG + IMPORTANT },

      xxlPb0: { paddingBottom: 0 },
      xxlPb1: { paddingBottom: XX_LARGE_PADDING + PX_TAG + IMPORTANT },
      xxlPb2: { paddingBottom: XX_LARGE_PADDING * 2 + PX_TAG + IMPORTANT },
      xxlPb3: { paddingBottom: XX_LARGE_PADDING * 3 + PX_TAG + IMPORTANT },
      xxlPb4: { paddingBottom: XX_LARGE_PADDING * 4 + PX_TAG + IMPORTANT },
      xxlPb5: { paddingBottom: XX_LARGE_PADDING * 5 + PX_TAG + IMPORTANT },

      xxlPl0: { paddingLeft: 0 + IMPORTANT },
      xxlPl1: { paddingLeft: XX_LARGE_PADDING + PX_TAG + IMPORTANT },
      xxlPl2: { paddingLeft: XX_LARGE_PADDING * 2 + PX_TAG + IMPORTANT },
      xxlPl3: { paddingLeft: XX_LARGE_PADDING * 3 + PX_TAG + IMPORTANT },
      xxlPl4: { paddingLeft: XX_LARGE_PADDING * 4 + PX_TAG + IMPORTANT },
      xxlPl5: { paddingLeft: XX_LARGE_PADDING * 5 + PX_TAG + IMPORTANT },

      xxlPx0: { paddingLeft: 0 + IMPORTANT, paddingRight: 0 + IMPORTANT },
      xxlPx1: {
        paddingLeft: XX_LARGE_PADDING * 1 + PX_TAG + IMPORTANT,
        paddingRight: XX_LARGE_PADDING * 1 + PX_TAG + IMPORTANT
      },
      xxlPx2: {
        paddingLeft: XX_LARGE_PADDING * 2 + PX_TAG + IMPORTANT,
        paddingRight: XX_LARGE_PADDING * 2 + PX_TAG + IMPORTANT
      },
      xxlPx3: {
        paddingLeft: XX_LARGE_PADDING * 3 + PX_TAG + IMPORTANT,
        paddingRight: XX_LARGE_PADDING * 3 + PX_TAG + IMPORTANT
      },
      xxlPx4: {
        paddingLeft: XX_LARGE_PADDING * 4 + PX_TAG,
        paddingRight: XX_LARGE_PADDING * 4 + PX_TAG + IMPORTANT
      },
      xxlPx5: {
        paddingLeft: XX_LARGE_PADDING * 5 + PX_TAG + IMPORTANT,
        paddingRight: XX_LARGE_PADDING * 5 + PX_TAG + IMPORTANT
      },

      xxlPy0: { paddingTop: 0 + IMPORTANT, paddingBottom: 0 + IMPORTANT },
      xxlPy1: {
        paddingTop: XX_LARGE_PADDING * 1 + PX_TAG + IMPORTANT,
        paddingBottom: XX_LARGE_PADDING * 1 + PX_TAG + IMPORTANT
      },
      xxlPy2: {
        paddingTop: XX_LARGE_PADDING * 2 + PX_TAG + IMPORTANT,
        paddingBottom: XX_LARGE_PADDING * 2 + PX_TAG + IMPORTANT
      },
      xxlPy3: {
        paddingTop: XX_LARGE_PADDING * 3 + PX_TAG + IMPORTANT,
        paddingBottom: XX_LARGE_PADDING * 3 + PX_TAG + IMPORTANT
      },
      xxlPy4: {
        paddingTop: XX_LARGE_PADDING * 4 + PX_TAG + IMPORTANT,
        paddingBottom: XX_LARGE_PADDING * 4 + PX_TAG + IMPORTANT
      },
      xxlPy5: {
        paddingTop: XX_LARGE_PADDING * 5 + PX_TAG + IMPORTANT,
        paddingBottom: XX_LARGE_PADDING * 5 + PX_TAG + IMPORTANT
      },

      /*-------------------------------------------------
       * Margin
       *-----------------------------------------------*/
      xxlM0: { margin: 0 + IMPORTANT },
      xxlM1: { margin: XX_LARGE_MARGIN + PX_TAG + IMPORTANT },
      xxlM2: { margin: XX_LARGE_MARGIN * 2 + PX_TAG + IMPORTANT },
      xxlM3: { margin: XX_LARGE_MARGIN * 3 + PX_TAG + IMPORTANT },
      xxlM4: { margin: XX_LARGE_MARGIN * 4 + PX_TAG + IMPORTANT },
      xxlM5: { margin: XX_LARGE_MARGIN * 5 + PX_TAG + IMPORTANT },
      xxlMAuto: { margin: "auto" + IMPORTANT },

      xxlMt0: { marginTop: 0 + IMPORTANT },
      xxlMt1: { marginTop: XX_LARGE_MARGIN + PX_TAG + IMPORTANT },
      xxlMt2: { marginTop: XX_LARGE_MARGIN * 2 + PX_TAG + IMPORTANT },
      xxlMt3: { marginTop: XX_LARGE_MARGIN * 3 + PX_TAG + IMPORTANT },
      xxlMt4: { marginTop: XX_LARGE_MARGIN * 4 + PX_TAG + IMPORTANT },
      xxlMt5: { marginTop: XX_LARGE_MARGIN * 5 + PX_TAG + IMPORTANT },
      xxlMtAuto: { marginTop: "auto" + IMPORTANT },

      xxlMr0: { marginRight: 0 + IMPORTANT },
      xxlMr1: { marginRight: XX_LARGE_MARGIN + PX_TAG + IMPORTANT },
      xxlMr2: { marginRight: XX_LARGE_MARGIN * 2 + PX_TAG + IMPORTANT },
      xxlMr3: { marginRight: XX_LARGE_MARGIN * 3 + PX_TAG + IMPORTANT },
      xxlMr4: { marginRight: XX_LARGE_MARGIN * 4 + PX_TAG + IMPORTANT },
      xxlMr5: { marginRight: XX_LARGE_MARGIN * 5 + PX_TAG + IMPORTANT },
      xxlMrAuto: { marginRight: "auto" + IMPORTANT },

      xxlMb0: { marginBottom: 0 + IMPORTANT },
      xxlMb1: { marginBottom: XX_LARGE_MARGIN + PX_TAG + IMPORTANT },
      xxlMb2: { marginBottom: XX_LARGE_MARGIN * 2 + PX_TAG + IMPORTANT },
      xxlMb3: { marginBottom: XX_LARGE_MARGIN * 3 + PX_TAG + IMPORTANT },
      xxlMb4: { marginBottom: XX_LARGE_MARGIN * 4 + PX_TAG + IMPORTANT },
      xxlMb5: { marginBottom: XX_LARGE_MARGIN * 5 + PX_TAG + IMPORTANT },
      xxlMbAuto: { marginBottom: "auto" + IMPORTANT },

      xxlMl0: { marginLeft: 0 + IMPORTANT },
      xxlMl1: { marginLeft: XX_LARGE_MARGIN + PX_TAG + IMPORTANT },
      xxlMl2: { marginLeft: XX_LARGE_MARGIN * 2 + PX_TAG + IMPORTANT },
      xxlMl3: { marginLeft: XX_LARGE_MARGIN * 3 + PX_TAG + IMPORTANT },
      xxlMl4: { marginLeft: XX_LARGE_MARGIN * 4 + PX_TAG + IMPORTANT },
      xxlMl5: { marginLeft: XX_LARGE_MARGIN * 5 + PX_TAG + IMPORTANT },
      xxlMlAuto: { marginLeft: "auto" + IMPORTANT },

      xxlMx0: { marginLeft: 0 + IMPORTANT, marginRight: 0 + IMPORTANT },
      xxlMx1: {
        marginLeft: XX_LARGE_MARGIN * 1 + PX_TAG + IMPORTANT,
        marginRight: XX_LARGE_MARGIN * 1 + PX_TAG + IMPORTANT
      },
      xxlMx2: {
        marginLeft: XX_LARGE_MARGIN * 2 + PX_TAG + IMPORTANT,
        marginRight: XX_LARGE_MARGIN * 2 + PX_TAG + IMPORTANT
      },
      xxlMx3: {
        marginLeft: XX_LARGE_MARGIN * 3 + PX_TAG + IMPORTANT,
        marginRight: XX_LARGE_MARGIN * 3 + PX_TAG + IMPORTANT
      },
      xxlMx4: {
        marginLeft: XX_LARGE_MARGIN * 4 + PX_TAG + IMPORTANT,
        marginRight: XX_LARGE_MARGIN * 4 + PX_TAG + IMPORTANT
      },
      xxlMx5: {
        marginLeft: XX_LARGE_MARGIN * 5 + PX_TAG + IMPORTANT,
        marginRight: XX_LARGE_MARGIN * 5 + PX_TAG + IMPORTANT
      },
      xxlMxAuto: {
        marginLeft: "auto" + IMPORTANT,
        marginRight: "auto" + IMPORTANT
      },

      xxlMy0: { marginTop: 0 + IMPORTANT, marginBottom: 0 + IMPORTANT },
      xxlMy1: {
        marginTop: XX_LARGE_MARGIN * 1 + PX_TAG + IMPORTANT,
        marginBottom: XX_LARGE_MARGIN * 1 + PX_TAG + IMPORTANT
      },
      xxlMy2: {
        marginTop: XX_LARGE_MARGIN * 2 + PX_TAG + IMPORTANT,
        marginBottom: XX_LARGE_MARGIN * 2 + PX_TAG + IMPORTANT
      },
      xxlMy3: {
        marginTop: XX_LARGE_MARGIN * 3 + PX_TAG + IMPORTANT,
        marginBottom: XX_LARGE_MARGIN * 3 + PX_TAG + IMPORTANT
      },
      xxlMy4: {
        marginTop: XX_LARGE_MARGIN * 4 + PX_TAG + IMPORTANT,
        marginBottom: XX_LARGE_MARGIN * 4 + PX_TAG + IMPORTANT
      },
      xxlMy5: {
        marginTop: XX_LARGE_MARGIN * 5 + PX_TAG + IMPORTANT,
        marginBottom: XX_LARGE_MARGIN * 5 + PX_TAG + IMPORTANT
      },
      xxlMyAuto: {
        marginTop: "auto" + IMPORTANT,
        marginBottom: "auto" + IMPORTANT
      },

      xxlMN1: { margin: XX_LARGE_MARGIN * -1 + PX_TAG + IMPORTANT },
      xxlMN2: { margin: XX_LARGE_MARGIN * -2 + PX_TAG + IMPORTANT },
      xxlMN3: { margin: XX_LARGE_MARGIN * -3 + PX_TAG + IMPORTANT },
      xxlMN4: { margin: XX_LARGE_MARGIN * -4 + PX_TAG + IMPORTANT },
      xxlMN5: { margin: XX_LARGE_MARGIN * -5 + PX_TAG + IMPORTANT },

      xxlMtN1: { marginTop: XX_LARGE_MARGIN * -1 + PX_TAG + IMPORTANT },
      xxlMtN2: { marginTop: XX_LARGE_MARGIN * -2 + PX_TAG + IMPORTANT },
      xxlMtN3: { marginTop: XX_LARGE_MARGIN * -3 + PX_TAG + IMPORTANT },
      xxlMtN4: { marginTop: XX_LARGE_MARGIN * -4 + PX_TAG + IMPORTANT },
      xxlMtN5: { marginTop: XX_LARGE_MARGIN * -5 + PX_TAG + IMPORTANT },

      xxlMrN1: { marginRight: XX_LARGE_MARGIN * -1 + PX_TAG + IMPORTANT },
      xxlMrN2: { marginRight: XX_LARGE_MARGIN * -2 + PX_TAG + IMPORTANT },
      xxlMrN3: { marginRight: XX_LARGE_MARGIN * -3 + PX_TAG + IMPORTANT },
      xxlMrN4: { marginRight: XX_LARGE_MARGIN * -4 + PX_TAG + IMPORTANT },
      xxlMrN5: { marginRight: XX_LARGE_MARGIN * -5 + PX_TAG + IMPORTANT },

      xxlMbN1: { marginBottom: XX_LARGE_MARGIN * -1 + PX_TAG + IMPORTANT },
      xxlMbN2: { marginBottom: XX_LARGE_MARGIN * -2 + PX_TAG + IMPORTANT },
      xxlMbN3: { marginBottom: XX_LARGE_MARGIN * -3 + PX_TAG + IMPORTANT },
      xxlMbN4: { marginBottom: XX_LARGE_MARGIN * -4 + PX_TAG + IMPORTANT },
      xxlMbN5: { marginBottom: XX_LARGE_MARGIN * -5 + PX_TAG + IMPORTANT },

      xxlMlN1: { marginLeft: XX_LARGE_MARGIN * -1 + PX_TAG + IMPORTANT },
      xxlMlN2: { marginLeft: XX_LARGE_MARGIN * -2 + PX_TAG + IMPORTANT },
      xxlMlN3: { marginLeft: XX_LARGE_MARGIN * -3 + PX_TAG + IMPORTANT },
      xxlMlN4: { marginLeft: XX_LARGE_MARGIN * -4 + PX_TAG + IMPORTANT },
      xxlMlN5: { marginLeft: XX_LARGE_MARGIN * -5 + PX_TAG + IMPORTANT },

      xxlMxN1: {
        marginLeft: XX_LARGE_MARGIN * -1 + PX_TAG + IMPORTANT,
        marginRight: XX_LARGE_MARGIN * -1 + PX_TAG + IMPORTANT
      },
      xxlMxN2: {
        marginLeft: XX_LARGE_MARGIN * -2 + PX_TAG + IMPORTANT,
        marginRight: XX_LARGE_MARGIN * -2 + PX_TAG + IMPORTANT
      },
      xxlMxN3: {
        marginLeft: XX_LARGE_MARGIN * -3 + PX_TAG + IMPORTANT,
        marginRight: XX_LARGE_MARGIN * -3 + PX_TAG + IMPORTANT
      },
      xxlMxN4: {
        marginLeft: XX_LARGE_MARGIN * -4 + PX_TAG + IMPORTANT,
        marginRight: XX_LARGE_MARGIN * -4 + PX_TAG + IMPORTANT
      },
      xxlMxN5: {
        marginLeft: XX_LARGE_MARGIN * -5 + PX_TAG + IMPORTANT,
        marginRight: XX_LARGE_MARGIN * -5 + PX_TAG + IMPORTANT
      },

      xxlMyN1: {
        marginTop: XX_LARGE_MARGIN * -1 + PX_TAG + IMPORTANT,
        marginBottom: XX_LARGE_MARGIN * -1 + PX_TAG + IMPORTANT
      },
      xxlMyN2: {
        marginTop: XX_LARGE_MARGIN * -2 + PX_TAG + IMPORTANT,
        marginBottom: XX_LARGE_MARGIN * -2 + PX_TAG + IMPORTANT
      },
      xxlMyN3: {
        marginTop: XX_LARGE_MARGIN * -3 + PX_TAG + IMPORTANT,
        marginBottom: XX_LARGE_MARGIN * -3 + PX_TAG + IMPORTANT
      },
      xxlMyN4: {
        marginTop: XX_LARGE_MARGIN * -4 + PX_TAG + IMPORTANT,
        marginBottom: XX_LARGE_MARGIN * -4 + PX_TAG + IMPORTANT
      },
      xxlMyN5: {
        marginTop: XX_LARGE_MARGIN * -5 + PX_TAG + IMPORTANT,
        marginBottom: XX_LARGE_MARGIN * -5 + PX_TAG + IMPORTANT
      },

      /*-------------------------------------------------
       * Gap
       *-----------------------------------------------*/
      xxlGap0: { gap: "0" },
      xxlGap1: { gap: XX_LARGE_SPACING * 1 },
      xxlGap2: { gap: XX_LARGE_SPACING * 2 },
      xxlGap3: { gap: XX_LARGE_SPACING * 3 },
      xxlGap4: { gap: XX_LARGE_SPACING * 4 },
      xxlGap5: { gap: XX_LARGE_SPACING * 5 },

      xxlRowGap0: { rowGap: "0" },
      xxlRowGap1: { rowGap: XX_LARGE_SPACING * 1 },
      xxlRowGap2: { rowGap: XX_LARGE_SPACING * 2 },
      xxlRowGap3: { rowGap: XX_LARGE_SPACING * 3 },
      xxlRowGap4: { rowGap: XX_LARGE_SPACING * 4 },
      xxlRowGap5: { rowGap: XX_LARGE_SPACING * 5 },

      xxlColGap0: { columnGap: "0" },
      xxlColGap1: { columnGap: XX_LARGE_SPACING * 1 },
      xxlColGap2: { columnGap: XX_LARGE_SPACING * 2 },
      xxlColGap3: { columnGap: XX_LARGE_SPACING * 3 },
      xxlColGap4: { columnGap: XX_LARGE_SPACING * 4 },
      xxlColGap5: { columnGap: XX_LARGE_SPACING * 5 },

      /**************************************************
       * Text
       *************************************************/
      xxlTextStart: { textAlign: "left" + IMPORTANT },
      xxlTextEnd: { textAlign: "right" + IMPORTANT },
      xxlTextCenter: { textAlign: "center" + IMPORTANT },
      xxlTextJustify: { textAlign: "justify" + IMPORTANT }

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
  }
}
