/* eslint-disable */
import { BaseStyle } from "../base/BaseStyle";
import {
  DEFAULT_MARGIN,
  DEFAULT_PADDING,
  DEFAULT_SPACING,
  IMPORTANT,
  PX_TAG
} from "../base/constants";

export const MEDIUM_MARGIN = DEFAULT_MARGIN;
export const MEDIUM_PADDING = DEFAULT_PADDING;
export const MEDIUM_SPACING = DEFAULT_SPACING;

export default class MediumUtilityStyles extends BaseStyle {
  constructor() {
    super();
    this.style = {
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
      mdJustifyContentFlexStart: {
        display: "flex",
        justifyContent: "flex-start"
      },
      mdJustifyContentFlexEnd: { display: "flex", justifyContent: "flex-end" },
      mdJustifyContentSpaceBetween: {
        display: "flex",
        justifyContent: "space-between"
      },
      mdJustifyContentSpaceAround: {
        display: "flex",
        justifyContent: "space-around"
      },
      mdJustifyContentSpaceEvenly: {
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
        objectFit: "contain"
      },

      mdObjectFitCover: {
        // -o-object-fit: cover !important;
        objectFit: "cover"
      },

      mdObjectFitFill: {
        // -o-object-fit: fill !important;
        objectFit: "fill"
      },

      mdObjectFitScale: {
        // -o-object-fit: scale-down !important;
        objectFit: "scale-down"
      },

      mdObjectFitNone: {
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
      mdP0: { padding: 0 },
      mdP1: { padding: MEDIUM_PADDING + PX_TAG },
      mdP2: { padding: MEDIUM_PADDING * 2 + PX_TAG },
      mdP3: { padding: MEDIUM_PADDING * 3 + PX_TAG },
      mdP4: { padding: MEDIUM_PADDING * 4 + PX_TAG },
      mdP5: { padding: MEDIUM_PADDING * 5 + PX_TAG },

      mdPt0: { paddingTop: 0 },
      mdPt1: { paddingTop: MEDIUM_PADDING + PX_TAG },
      mdPt2: { paddingTop: MEDIUM_PADDING * 2 + PX_TAG },
      mdPt3: { paddingTop: MEDIUM_PADDING * 3 + PX_TAG },
      mdPt4: { paddingTop: MEDIUM_PADDING * 4 + PX_TAG },
      mdPt5: { paddingTop: MEDIUM_PADDING * 5 + PX_TAG },

      mdPr0: { paddingRight: 0 },
      mdPr1: { paddingRight: MEDIUM_PADDING + PX_TAG },
      mdPr2: { paddingRight: MEDIUM_PADDING * 2 + PX_TAG },
      mdPr3: { paddingRight: MEDIUM_PADDING * 3 + PX_TAG },
      mdPr4: { paddingRight: MEDIUM_PADDING * 4 + PX_TAG },
      mdPr5: { paddingRight: MEDIUM_PADDING * 5 + PX_TAG },

      mdPb0: { paddingBottom: 0 },
      mdPb1: { paddingBottom: MEDIUM_PADDING + PX_TAG },
      mdPb2: { paddingBottom: MEDIUM_PADDING * 2 + PX_TAG },
      mdPb3: { paddingBottom: MEDIUM_PADDING * 3 + PX_TAG },
      mdPb4: { paddingBottom: MEDIUM_PADDING * 4 + PX_TAG },
      mdPb5: { paddingBottom: MEDIUM_PADDING * 5 + PX_TAG },

      mdPl0: { paddingLeft: 0 },
      mdPl1: { paddingLeft: MEDIUM_PADDING + PX_TAG },
      mdPl2: { paddingLeft: MEDIUM_PADDING * 2 + PX_TAG },
      mdPl3: { paddingLeft: MEDIUM_PADDING * 3 + PX_TAG },
      mdPl4: { paddingLeft: MEDIUM_PADDING * 4 + PX_TAG },
      mdPl5: { paddingLeft: MEDIUM_PADDING * 5 + PX_TAG },

      mdPx0: { paddingLeft: 0, paddingRight: 0 },
      mdPx1: {
        paddingLeft: MEDIUM_PADDING * 1 + PX_TAG,
        paddingRight: MEDIUM_PADDING * 1 + PX_TAG
      },
      mdPx2: {
        paddingLeft: MEDIUM_PADDING * 2 + PX_TAG,
        paddingRight: MEDIUM_PADDING * 2 + PX_TAG
      },
      mdPx3: {
        paddingLeft: MEDIUM_PADDING * 3 + PX_TAG,
        paddingRight: MEDIUM_PADDING * 3 + PX_TAG
      },
      mdPx4: {
        paddingLeft: MEDIUM_PADDING * 4 + PX_TAG,
        paddingRight: MEDIUM_PADDING * 4 + PX_TAG
      },
      mdPx5: {
        paddingLeft: MEDIUM_PADDING * 5 + PX_TAG,
        paddingRight: MEDIUM_PADDING * 5 + PX_TAG
      },

      mdPy0: { paddingTop: 0, paddingBottom: 0 },
      mdPy1: {
        paddingTop: MEDIUM_PADDING * 1 + PX_TAG,
        paddingBottom: MEDIUM_PADDING * 1 + PX_TAG
      },
      mdPy2: {
        paddingTop: MEDIUM_PADDING * 2 + PX_TAG,
        paddingBottom: MEDIUM_PADDING * 2 + PX_TAG
      },
      mdPy3: {
        paddingTop: MEDIUM_PADDING * 3 + PX_TAG,
        paddingBottom: MEDIUM_PADDING * 3 + PX_TAG
      },
      mdPy4: {
        paddingTop: MEDIUM_PADDING * 4 + PX_TAG,
        paddingBottom: MEDIUM_PADDING * 4 + PX_TAG
      },
      mdPy5: {
        paddingTop: MEDIUM_PADDING * 5 + PX_TAG,
        paddingBottom: MEDIUM_PADDING * 5 + PX_TAG
      },

      /*-------------------------------------------------
       * Margin
       *-----------------------------------------------*/
      mdM0: { margin: 0 + IMPORTANT },
      mdM1: { margin: MEDIUM_MARGIN + PX_TAG + IMPORTANT },
      mdM2: { margin: MEDIUM_MARGIN * 2 + PX_TAG + IMPORTANT },
      mdM3: { margin: MEDIUM_MARGIN * 3 + PX_TAG + IMPORTANT },
      mdM4: { margin: MEDIUM_MARGIN * 4 + PX_TAG + IMPORTANT },
      mdM5: { margin: MEDIUM_MARGIN * 5 + PX_TAG + IMPORTANT },
      mdMAuto: { margin: "auto" + IMPORTANT },

      mdMt0: { marginTop: 0 + IMPORTANT },
      mdMt1: { marginTop: MEDIUM_MARGIN + PX_TAG + IMPORTANT },
      mdMt2: { marginTop: MEDIUM_MARGIN * 2 + PX_TAG + IMPORTANT },
      mdMt3: { marginTop: MEDIUM_MARGIN * 3 + PX_TAG + IMPORTANT },
      mdMt4: { marginTop: MEDIUM_MARGIN * 4 + PX_TAG + IMPORTANT },
      mdMt5: { marginTop: MEDIUM_MARGIN * 5 + PX_TAG + IMPORTANT },
      mdMtAuto: { marginTop: "auto" + IMPORTANT },

      mdMr0: { marginRight: 0 + IMPORTANT },
      mdMr1: { marginRight: MEDIUM_MARGIN + PX_TAG + IMPORTANT },
      mdMr2: { marginRight: MEDIUM_MARGIN * 2 + PX_TAG + IMPORTANT },
      mdMr3: { marginRight: MEDIUM_MARGIN * 3 + PX_TAG + IMPORTANT },
      mdMr4: { marginRight: MEDIUM_MARGIN * 4 + PX_TAG + IMPORTANT },
      mdMr5: { marginRight: MEDIUM_MARGIN * 5 + PX_TAG + IMPORTANT },
      mdMrAuto: { marginRight: "auto" + IMPORTANT },

      mdMb0: { marginBottom: 0 + IMPORTANT },
      mdMb1: { marginBottom: MEDIUM_MARGIN + PX_TAG + IMPORTANT },
      mdMb2: { marginBottom: MEDIUM_MARGIN * 2 + PX_TAG + IMPORTANT },
      mdMb3: { marginBottom: MEDIUM_MARGIN * 3 + PX_TAG + IMPORTANT },
      mdMb4: { marginBottom: MEDIUM_MARGIN * 4 + PX_TAG + IMPORTANT },
      mdMb5: { marginBottom: MEDIUM_MARGIN * 5 + PX_TAG + IMPORTANT },
      mdMbAuto: { marginBottom: "auto" + IMPORTANT },

      mdMl0: { marginLeft: 0 + IMPORTANT },
      mdMl1: { marginLeft: MEDIUM_MARGIN + PX_TAG + IMPORTANT },
      mdMl2: { marginLeft: MEDIUM_MARGIN * 2 + PX_TAG + IMPORTANT },
      mdMl3: { marginLeft: MEDIUM_MARGIN * 3 + PX_TAG + IMPORTANT },
      mdMl4: { marginLeft: MEDIUM_MARGIN * 4 + PX_TAG + IMPORTANT },
      mdMl5: { marginLeft: MEDIUM_MARGIN * 5 + PX_TAG + IMPORTANT },
      mdMlAuto: { marginLeft: "auto" + IMPORTANT },

      mdMx0: { marginLeft: 0 + IMPORTANT, marginRight: 0 + IMPORTANT },
      mdMx1: {
        marginLeft: MEDIUM_MARGIN * 1,
        marginRight: MEDIUM_MARGIN * 1 + PX_TAG + IMPORTANT
      },
      mdMx2: {
        marginLeft: MEDIUM_MARGIN * 2,
        marginRight: MEDIUM_MARGIN * 2 + PX_TAG + IMPORTANT
      },
      mdMx3: {
        marginLeft: MEDIUM_MARGIN * 3,
        marginRight: MEDIUM_MARGIN * 3 + PX_TAG + IMPORTANT
      },
      mdMx4: {
        marginLeft: MEDIUM_MARGIN * 4,
        marginRight: MEDIUM_MARGIN * 4 + PX_TAG + IMPORTANT
      },
      mdMx5: {
        marginLeft: MEDIUM_MARGIN * 5,
        marginRight: MEDIUM_MARGIN * 5 + PX_TAG + IMPORTANT
      },
      mdMxAuto: {
        marginLeft: "auto" + IMPORTANT,
        marginRight: "auto" + IMPORTANT
      },

      mdMy0: { marginTop: 0 + IMPORTANT, marginBottom: 0 + IMPORTANT },
      mdMy1: {
        marginTop: MEDIUM_MARGIN * 1,
        marginBottom: MEDIUM_MARGIN * 1 + PX_TAG + IMPORTANT
      },
      mdMy2: {
        marginTop: MEDIUM_MARGIN * 2,
        marginBottom: MEDIUM_MARGIN * 2 + PX_TAG + IMPORTANT
      },
      mdMy3: {
        marginTop: MEDIUM_MARGIN * 3,
        marginBottom: MEDIUM_MARGIN * 3 + PX_TAG + IMPORTANT
      },
      mdMy4: {
        marginTop: MEDIUM_MARGIN * 4,
        marginBottom: MEDIUM_MARGIN * 4 + PX_TAG + IMPORTANT
      },
      mdMy5: {
        marginTop: MEDIUM_MARGIN * 5,
        marginBottom: MEDIUM_MARGIN * 5 + PX_TAG + IMPORTANT
      },
      mdMyAuto: {
        marginTop: "auto" + IMPORTANT,
        marginBottom: "auto" + IMPORTANT
      },

      mdMN1: { margin: MEDIUM_MARGIN * -1 + PX_TAG + IMPORTANT },
      mdMN2: { margin: MEDIUM_MARGIN * -2 + PX_TAG + IMPORTANT },
      mdMN3: { margin: MEDIUM_MARGIN * -3 + PX_TAG + IMPORTANT },
      mdMN4: { margin: MEDIUM_MARGIN * -4 + PX_TAG + IMPORTANT },
      mdMN5: { margin: MEDIUM_MARGIN * -5 + PX_TAG + IMPORTANT },

      mdMtN1: { marginTop: MEDIUM_MARGIN * -1 + PX_TAG + IMPORTANT },
      mdMtN2: { marginTop: MEDIUM_MARGIN * -2 + PX_TAG + IMPORTANT },
      mdMtN3: { marginTop: MEDIUM_MARGIN * -3 + PX_TAG + IMPORTANT },
      mdMtN4: { marginTop: MEDIUM_MARGIN * -4 + PX_TAG + IMPORTANT },
      mdMtN5: { marginTop: MEDIUM_MARGIN * -5 + PX_TAG + IMPORTANT },

      mdMrN1: { marginRight: MEDIUM_MARGIN * -1 + PX_TAG + IMPORTANT },
      mdMrN2: { marginRight: MEDIUM_MARGIN * -2 + PX_TAG + IMPORTANT },
      mdMrN3: { marginRight: MEDIUM_MARGIN * -3 + PX_TAG + IMPORTANT },
      mdMrN4: { marginRight: MEDIUM_MARGIN * -4 + PX_TAG + IMPORTANT },
      mdMrN5: { marginRight: MEDIUM_MARGIN * -5 + PX_TAG + IMPORTANT },

      mdMbN1: { marginBottom: MEDIUM_MARGIN * -1 + PX_TAG + IMPORTANT },
      mdMbN2: { marginBottom: MEDIUM_MARGIN * -2 + PX_TAG + IMPORTANT },
      mdMbN3: { marginBottom: MEDIUM_MARGIN * -3 + PX_TAG + IMPORTANT },
      mdMbN4: { marginBottom: MEDIUM_MARGIN * -4 + PX_TAG + IMPORTANT },
      mdMbN5: { marginBottom: MEDIUM_MARGIN * -5 + PX_TAG + IMPORTANT },

      mdMlN1: { marginLeft: MEDIUM_MARGIN * -1 + PX_TAG + IMPORTANT },
      mdMlN2: { marginLeft: MEDIUM_MARGIN * -2 + PX_TAG + IMPORTANT },
      mdMlN3: { marginLeft: MEDIUM_MARGIN * -3 + PX_TAG + IMPORTANT },
      mdMlN4: { marginLeft: MEDIUM_MARGIN * -4 + PX_TAG + IMPORTANT },
      mdMlN5: { marginLeft: MEDIUM_MARGIN * -5 + PX_TAG + IMPORTANT },

      mdMxN1: {
        marginLeft: MEDIUM_MARGIN * -1 + PX_TAG + IMPORTANT,
        marginRight: MEDIUM_MARGIN * -1 + PX_TAG + IMPORTANT
      },
      mdMxN2: {
        marginLeft: MEDIUM_MARGIN * -2 + PX_TAG + IMPORTANT,
        marginRight: MEDIUM_MARGIN * -2 + PX_TAG + IMPORTANT
      },
      mdMxN3: {
        marginLeft: MEDIUM_MARGIN * -3 + PX_TAG + IMPORTANT,
        marginRight: MEDIUM_MARGIN * -3 + PX_TAG + IMPORTANT
      },
      mdMxN4: {
        marginLeft: MEDIUM_MARGIN * -4 + PX_TAG + IMPORTANT,
        marginRight: MEDIUM_MARGIN * -4 + PX_TAG + IMPORTANT
      },
      mdMxN5: {
        marginLeft: MEDIUM_MARGIN * -5 + PX_TAG + IMPORTANT,
        marginRight: MEDIUM_MARGIN * -5 + PX_TAG + IMPORTANT
      },

      mdMyN1: {
        marginTop: MEDIUM_MARGIN * -1 + PX_TAG + IMPORTANT,
        marginBottom: MEDIUM_MARGIN * -1 + PX_TAG + IMPORTANT
      },
      mdMyN2: {
        marginTop: MEDIUM_MARGIN * -2 + PX_TAG + IMPORTANT,
        marginBottom: MEDIUM_MARGIN * -2 + PX_TAG + IMPORTANT
      },
      mdMyN3: {
        marginTop: MEDIUM_MARGIN * -3 + PX_TAG + IMPORTANT,
        marginBottom: MEDIUM_MARGIN * -3 + PX_TAG + IMPORTANT
      },
      mdMyN4: {
        marginTop: MEDIUM_MARGIN * -4 + PX_TAG + IMPORTANT,
        marginBottom: MEDIUM_MARGIN * -4 + PX_TAG + IMPORTANT
      },
      mdMyN5: {
        marginTop: MEDIUM_MARGIN * -5 + PX_TAG + IMPORTANT,
        marginBottom: MEDIUM_MARGIN * -5 + PX_TAG + IMPORTANT
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
      mdTextJustify: { textAlign: "justify" + IMPORTANT }

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
