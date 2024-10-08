/* eslint-disable */
import { BaseStyle } from "../base/BaseStyle";
import {
  DEFAULT_MARGIN,
  DEFAULT_PADDING,
  DEFAULT_SPACING,
  IMPORTANT,
  PX_TAG
} from "../base/constants";

export const SMALL_MARGIN = DEFAULT_MARGIN;
export const SMALL_PADDING = DEFAULT_PADDING;
export const SMALL_SPACING = DEFAULT_SPACING;

export default class SmallUtilityStyles extends BaseStyle {
  constructor() {
    super();

    this.style = {
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
      smJustifyContentFlexStart: {
        display: "flex",
        justifyContent: "flex-start"
      },
      smJustifyContentFlexEnd: { display: "flex", justifyContent: "flex-end" },
      smJustifyContentSpaceBetween: {
        display: "flex",
        justifyContent: "space-between"
      },
      smJustifyContentSpaceAround: {
        display: "flex",
        justifyContent: "space-around"
      },
      smJustifyContentSpaceEvenly: {
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
      smDisplayInline: { display: "inline" + IMPORTANT},
      smDisplayInlineBlock: { display: "inline-block" + IMPORTANT},
      smDisplayBlock: { display: "block" + IMPORTANT },
      smDisplayGrid: { display: "grid" + IMPORTANT},
      smDisplayTable: { display: "table" + IMPORTANT},
      smDisplayTableRow: { display: "table-row" + IMPORTANT},
      smDisplayTableCell: { display: "table-cell" + IMPORTANT},
      smDisplayFlex: { display: "flex" + IMPORTANT},
      smDisplayInlineFlex: { display: "inline-flex" + IMPORTANT},
      smDisplayNone: { display: "none" + IMPORTANT },

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
        objectFit: "contain"
      },

      smObjectFitCover: {
        // -o-object-fit: cover !important;
        objectFit: "cover"
      },

      smObjectFitFill: {
        // -o-object-fit: fill !important;
        objectFit: "fill"
      },

      smObjectFitScale: {
        // -o-object-fit: scale-down !important;
        objectFit: "scale-down"
      },

      smObjectFitNone: {
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
      smP0: { padding: 0 + IMPORTANT },
      smP1: { padding: SMALL_PADDING + PX_TAG + IMPORTANT },
      smP2: { padding: SMALL_PADDING * 2 + PX_TAG + IMPORTANT },
      smP3: { padding: SMALL_PADDING * 3 + PX_TAG + IMPORTANT },
      smP4: { padding: SMALL_PADDING * 4 + PX_TAG + IMPORTANT },
      smP5: { padding: SMALL_PADDING * 5 + PX_TAG + IMPORTANT },

      smPt0: { paddingTop: 0 },
      smPt1: { paddingTop: SMALL_PADDING + PX_TAG + IMPORTANT },
      smPt2: { paddingTop: SMALL_PADDING * 2 + PX_TAG + IMPORTANT },
      smPt3: { paddingTop: SMALL_PADDING * 3 + PX_TAG + IMPORTANT },
      smPt4: { paddingTop: SMALL_PADDING * 4 + PX_TAG + IMPORTANT },
      smPt5: { paddingTop: SMALL_PADDING * 5 + PX_TAG + IMPORTANT },

      smPr0: { paddingRight: 0 + IMPORTANT },
      smPr1: { paddingRight: SMALL_PADDING + PX_TAG + IMPORTANT },
      smPr2: { paddingRight: SMALL_PADDING * 2 + PX_TAG + IMPORTANT },
      smPr3: { paddingRight: SMALL_PADDING * 3 + PX_TAG + IMPORTANT },
      smPr4: { paddingRight: SMALL_PADDING * 4 + PX_TAG + IMPORTANT },
      smPr5: { paddingRight: SMALL_PADDING * 5 + PX_TAG + IMPORTANT },

      smPb0: { paddingBottom: 0 + IMPORTANT },
      smPb1: { paddingBottom: SMALL_PADDING + PX_TAG + IMPORTANT },
      smPb2: { paddingBottom: SMALL_PADDING * 2 + PX_TAG + IMPORTANT },
      smPb3: { paddingBottom: SMALL_PADDING * 3 + PX_TAG + IMPORTANT },
      smPb4: { paddingBottom: SMALL_PADDING * 4 + PX_TAG + IMPORTANT },
      smPb5: { paddingBottom: SMALL_PADDING * 5 + PX_TAG + IMPORTANT },

      smPl0: { paddingLeft: 0 + IMPORTANT },
      smPl1: { paddingLeft: SMALL_PADDING + PX_TAG + IMPORTANT },
      smPl2: { paddingLeft: SMALL_PADDING * 2 + PX_TAG + IMPORTANT },
      smPl3: { paddingLeft: SMALL_PADDING * 3 + PX_TAG + IMPORTANT },
      smPl4: { paddingLeft: SMALL_PADDING * 4 + PX_TAG + IMPORTANT },
      smPl5: { paddingLeft: SMALL_PADDING * 5 + PX_TAG + IMPORTANT },

      smPx0: { paddingLeft: 0 + IMPORTANT, paddingRight: 0 + IMPORTANT },
      smPx1: {
        paddingLeft: SMALL_PADDING * 1 + PX_TAG + IMPORTANT,
        paddingRight: SMALL_PADDING * 1 + PX_TAG + IMPORTANT
      },
      smPx2: {
        paddingLeft: SMALL_PADDING * 2 + PX_TAG + IMPORTANT,
        paddingRight: SMALL_PADDING * 2 + PX_TAG + IMPORTANT
      },
      smPx3: {
        paddingLeft: SMALL_PADDING * 3 + PX_TAG + IMPORTANT,
        paddingRight: SMALL_PADDING * 3 + PX_TAG + IMPORTANT
      },
      smPx4: {
        paddingLeft: SMALL_PADDING * 4 + PX_TAG + IMPORTANT,
        paddingRight: SMALL_PADDING * 4 + PX_TAG + IMPORTANT
      },
      smPx5: {
        paddingLeft: SMALL_PADDING * 5 + PX_TAG + IMPORTANT,
        paddingRight: SMALL_PADDING * 5 + PX_TAG + IMPORTANT
      },

      smPy0: { paddingTop: 0 + IMPORTANT, paddingBottom: 0 + IMPORTANT },
      smPy1: {
        paddingTop: SMALL_PADDING * 1 + PX_TAG + IMPORTANT,
        paddingBottom: SMALL_PADDING * 1 + PX_TAG + IMPORTANT
      },
      smPy2: {
        paddingTop: SMALL_PADDING * 2 + PX_TAG + IMPORTANT,
        paddingBottom: SMALL_PADDING * 2 + PX_TAG + IMPORTANT
      },
      smPy3: {
        paddingTop: SMALL_PADDING * 3 + PX_TAG + IMPORTANT,
        paddingBottom: SMALL_PADDING * 3 + PX_TAG + IMPORTANT
      },
      smPy4: {
        paddingTop: SMALL_PADDING * 4 + PX_TAG + IMPORTANT,
        paddingBottom: SMALL_PADDING * 4 + PX_TAG + IMPORTANT
      },
      smPy5: {
        paddingTop: SMALL_PADDING * 5 + PX_TAG + IMPORTANT,
        paddingBottom: SMALL_PADDING * 5 + PX_TAG + IMPORTANT
      },

      /*-------------------------------------------------
       * Margin
       *-----------------------------------------------*/
      smM0: { margin: 0 + IMPORTANT },
      smM1: { margin: SMALL_MARGIN + PX_TAG + IMPORTANT },
      smM2: { margin: SMALL_MARGIN * 2 + PX_TAG + IMPORTANT },
      smM3: { margin: SMALL_MARGIN * 3 + PX_TAG + IMPORTANT },
      smM4: { margin: SMALL_MARGIN * 4 + PX_TAG + IMPORTANT },
      smM5: { margin: SMALL_MARGIN * 5 + PX_TAG + IMPORTANT },
      smMAuto: { margin: "auto" + IMPORTANT },

      smMt0: { marginTop: 0 + IMPORTANT },
      smMt1: { marginTop: SMALL_MARGIN + PX_TAG + IMPORTANT },
      smMt2: { marginTop: SMALL_MARGIN * 2 + PX_TAG + IMPORTANT },
      smMt3: { marginTop: SMALL_MARGIN * 3 + PX_TAG + IMPORTANT },
      smMt4: { marginTop: SMALL_MARGIN * 4 + PX_TAG + IMPORTANT },
      smMt5: { marginTop: SMALL_MARGIN * 5 + PX_TAG + IMPORTANT },
      smMtAuto: { marginTop: "auto" + IMPORTANT },

      smMr0: { marginRight: 0 + IMPORTANT },
      smMr1: { marginRight: SMALL_MARGIN + PX_TAG + IMPORTANT },
      smMr2: { marginRight: SMALL_MARGIN * 2 + PX_TAG + IMPORTANT },
      smMr3: { marginRight: SMALL_MARGIN * 3 + PX_TAG + IMPORTANT },
      smMr4: { marginRight: SMALL_MARGIN * 4 + PX_TAG + IMPORTANT },
      smMr5: { marginRight: SMALL_MARGIN * 5 + PX_TAG + IMPORTANT },
      smMrAuto: { marginRight: "auto" + IMPORTANT },

      smMb0: { marginBottom: 0 + IMPORTANT },
      smMb1: { marginBottom: SMALL_MARGIN + PX_TAG + IMPORTANT },
      smMb2: { marginBottom: SMALL_MARGIN * 2 + PX_TAG + IMPORTANT },
      smMb3: { marginBottom: SMALL_MARGIN * 3 + PX_TAG + IMPORTANT },
      smMb4: { marginBottom: SMALL_MARGIN * 4 + PX_TAG + IMPORTANT },
      smMb5: { marginBottom: SMALL_MARGIN * 5 + PX_TAG + IMPORTANT },
      smMbAuto: { marginBottom: "auto" + IMPORTANT },

      smMl0: { marginLeft: 0 + IMPORTANT },
      smMl1: { marginLeft: SMALL_MARGIN + PX_TAG + IMPORTANT },
      smMl2: { marginLeft: SMALL_MARGIN * 2 + PX_TAG + IMPORTANT },
      smMl3: { marginLeft: SMALL_MARGIN * 3 + PX_TAG + IMPORTANT },
      smMl4: { marginLeft: SMALL_MARGIN * 4 + PX_TAG + IMPORTANT },
      smMl5: { marginLeft: SMALL_MARGIN * 5 + PX_TAG + IMPORTANT },
      smMlAuto: { marginLeft: "auto" + IMPORTANT },

      smMx0: { marginLeft: 0 + IMPORTANT, marginRight: 0 + IMPORTANT },
      smMx1: {
        marginLeft: SMALL_MARGIN * 1 + PX_TAG + IMPORTANT,
        marginRight: SMALL_MARGIN * 1 + PX_TAG + IMPORTANT
      },
      smMx2: {
        marginLeft: SMALL_MARGIN * 2 + PX_TAG + IMPORTANT,
        marginRight: SMALL_MARGIN * 2 + PX_TAG + IMPORTANT
      },
      smMx3: {
        marginLeft: SMALL_MARGIN * 3 + PX_TAG + IMPORTANT,
        marginRight: SMALL_MARGIN * 3 + PX_TAG + IMPORTANT
      },
      smMx4: {
        marginLeft: SMALL_MARGIN * 4 + PX_TAG + IMPORTANT,
        marginRight: SMALL_MARGIN * 4 + PX_TAG + IMPORTANT
      },
      smMx5: {
        marginLeft: SMALL_MARGIN * 5 + PX_TAG + IMPORTANT,
        marginRight: SMALL_MARGIN * 5 + PX_TAG + IMPORTANT
      },
      smMxAuto: {
        marginLeft: "auto" + IMPORTANT,
        marginRight: "auto" + IMPORTANT
      },

      smMy0: { marginTop: 0 + IMPORTANT, marginBottom: 0 + IMPORTANT },
      smMy1: {
        marginTop: SMALL_MARGIN * 1 + PX_TAG + IMPORTANT,
        marginBottom: SMALL_MARGIN * 1 + PX_TAG + IMPORTANT
      },
      smMy2: {
        marginTop: SMALL_MARGIN * 2 + PX_TAG + IMPORTANT,
        marginBottom: SMALL_MARGIN * 2 + PX_TAG + IMPORTANT
      },
      smMy3: {
        marginTop: SMALL_MARGIN * 3 + PX_TAG + IMPORTANT,
        marginBottom: SMALL_MARGIN * 3 + PX_TAG + IMPORTANT
      },
      smMy4: {
        marginTop: SMALL_MARGIN * 4 + PX_TAG + IMPORTANT,
        marginBottom: SMALL_MARGIN * 4 + PX_TAG + IMPORTANT
      },
      smMy5: {
        marginTop: SMALL_MARGIN * 5 + PX_TAG + IMPORTANT,
        marginBottom: SMALL_MARGIN * 5 + PX_TAG + IMPORTANT
      },
      smMyAuto: {
        marginTop: "auto" + IMPORTANT,
        marginBottom: "auto" + IMPORTANT
      },

      smMN1: { margin: SMALL_MARGIN * -1 + PX_TAG + IMPORTANT },
      smMN2: { margin: SMALL_MARGIN * -2 + PX_TAG + IMPORTANT },
      smMN3: { margin: SMALL_MARGIN * -3 + PX_TAG + IMPORTANT },
      smMN4: { margin: SMALL_MARGIN * -4 + PX_TAG + IMPORTANT },
      smMN5: { margin: SMALL_MARGIN * -5 + PX_TAG + IMPORTANT },

      smMtN1: { marginTop: SMALL_MARGIN * -1 + PX_TAG + IMPORTANT },
      smMtN2: { marginTop: SMALL_MARGIN * -2 + PX_TAG + IMPORTANT },
      smMtN3: { marginTop: SMALL_MARGIN * -3 + PX_TAG + IMPORTANT },
      smMtN4: { marginTop: SMALL_MARGIN * -4 + PX_TAG + IMPORTANT },
      smMtN5: { marginTop: SMALL_MARGIN * -5 + PX_TAG + IMPORTANT },

      smMrN1: { marginRight: SMALL_MARGIN * -1 + PX_TAG + IMPORTANT },
      smMrN2: { marginRight: SMALL_MARGIN * -2 + PX_TAG + IMPORTANT },
      smMrN3: { marginRight: SMALL_MARGIN * -3 + PX_TAG + IMPORTANT },
      smMrN4: { marginRight: SMALL_MARGIN * -4 + PX_TAG + IMPORTANT },
      smMrN5: { marginRight: SMALL_MARGIN * -5 + PX_TAG + IMPORTANT },

      smMbN1: { marginBottom: SMALL_MARGIN * -1 + PX_TAG + IMPORTANT },
      smMbN2: { marginBottom: SMALL_MARGIN * -2 + PX_TAG + IMPORTANT },
      smMbN3: { marginBottom: SMALL_MARGIN * -3 + PX_TAG + IMPORTANT },
      smMbN4: { marginBottom: SMALL_MARGIN * -4 + PX_TAG + IMPORTANT },
      smMbN5: { marginBottom: SMALL_MARGIN * -5 + PX_TAG + IMPORTANT },

      smMlN1: { marginLeft: SMALL_MARGIN * -1 + PX_TAG + IMPORTANT },
      smMlN2: { marginLeft: SMALL_MARGIN * -2 + PX_TAG + IMPORTANT },
      smMlN3: { marginLeft: SMALL_MARGIN * -3 + PX_TAG + IMPORTANT },
      smMlN4: { marginLeft: SMALL_MARGIN * -4 + PX_TAG + IMPORTANT },
      smMlN5: { marginLeft: SMALL_MARGIN * -5 + PX_TAG + IMPORTANT },

      smMxN1: {
        marginLeft: SMALL_MARGIN * -1 + PX_TAG + IMPORTANT,
        marginRight: SMALL_MARGIN * -1 + PX_TAG + IMPORTANT
      },
      smMxN2: {
        marginLeft: SMALL_MARGIN * -2 + PX_TAG + IMPORTANT,
        marginRight: SMALL_MARGIN * -2 + PX_TAG + IMPORTANT
      },
      smMxN3: {
        marginLeft: SMALL_MARGIN * -3 + PX_TAG + IMPORTANT,
        marginRight: SMALL_MARGIN * -3 + PX_TAG + IMPORTANT
      },
      smMxN4: {
        marginLeft: SMALL_MARGIN * -4 + PX_TAG + IMPORTANT,
        marginRight: SMALL_MARGIN * -4 + PX_TAG + IMPORTANT
      },
      smMxN5: {
        marginLeft: SMALL_MARGIN * -5 + PX_TAG + IMPORTANT,
        marginRight: SMALL_MARGIN * -5 + PX_TAG + IMPORTANT
      },

      smMyN1: {
        marginTop: SMALL_MARGIN * -1 + PX_TAG + IMPORTANT,
        marginBottom: SMALL_MARGIN * -1 + PX_TAG + IMPORTANT
      },
      smMyN2: {
        marginTop: SMALL_MARGIN * -2 + PX_TAG + IMPORTANT,
        marginBottom: SMALL_MARGIN * -2 + PX_TAG + IMPORTANT
      },
      smMyN3: {
        marginTop: SMALL_MARGIN * -3 + PX_TAG + IMPORTANT,
        marginBottom: SMALL_MARGIN * -3 + PX_TAG + IMPORTANT
      },
      smMyN4: {
        marginTop: SMALL_MARGIN * -4 + PX_TAG + IMPORTANT,
        marginBottom: SMALL_MARGIN * -4 + PX_TAG + IMPORTANT
      },
      smMyN5: {
        marginTop: SMALL_MARGIN * -5 + PX_TAG + IMPORTANT,
        marginBottom: SMALL_MARGIN * -5 + PX_TAG + IMPORTANT
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
      smTextJustify: { textAlign: "justify" + IMPORTANT }

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
