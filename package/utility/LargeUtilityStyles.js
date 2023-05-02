import {
	DEFAULT_MARGIN,
	DEFAULT_PADDING,
	DEFAULT_SPACING,
	IMPORTANT
} from "./DefaultUtilityStyles";

export const LARGE_MARGIN = DEFAULT_MARGIN;
export const LARGE_PADDING = DEFAULT_PADDING;
export const LARGE_SPACING = DEFAULT_SPACING;

export const largeUtilityStyles = {
	/**************************************************
   * Alignment
   *************************************************/
	lgAlignItemsStart   : { display: "flex", alignItems: "flex-start" + IMPORTANT },
	lgAlignItemsEnd     : { display: "flex", alignItems: "flex-end" + IMPORTANT },
	lgAlignItemsCenter  : { display: "flex", alignItems: "center" + IMPORTANT },
	lgAlignItemsBaseline: { display: "flex", alignItems: "baseline" + IMPORTANT },
	lgAlignItemsStretch : { display: "flex", alignItems: "stretch" + IMPORTANT },

	lgAlignContentStart  : { display: "flex", alignContent: "flex-start" + IMPORTANT },
	lgAlignContentEnd    : { display: "flex", alignContent: "flex-end" + IMPORTANT },
	lgAlignContentCenter : { display: "flex", alignContent: "center" + IMPORTANT },
	lgAlignContentBetween: { display: "flex", alignContent: "space-between" + IMPORTANT },
	lgAlignContentAround : { display: "flex", alignContent: "space-around" + IMPORTANT },
	lgAlignContentStretch: { display: "flex", alignContent: "stretch" + IMPORTANT },

	lgAlignSelfAuto    : { display: "flex", alignSelf: "auto" + IMPORTANT },
	lgAlignSelfStart   : { display: "flex", alignSelf: "flex-start" + IMPORTANT },
	lgAlignSelfEnd     : { display: "flex", alignSelf: "flex-end" + IMPORTANT },
	lgAlignSelfCenter  : { display: "flex", alignSelf: "center" + IMPORTANT },
	lgAlignSelfBaseline: { display: "flex", alignSelf: "baseline" + IMPORTANT },
	lgAlignSelfStretch : { display: "flex", alignSelf: "stretch" + IMPORTANT },

	lgJustifyContentCenter      : { display: "flex", justifyContent: "center" + IMPORTANT },
	lgJustifyContentFlexStart   : { display: "flex", justifyContent: "flex-start" + IMPORTANT },
	lgJustifyContentFlexEnd     : { display: "flex", justifyContent: "flex-end" + IMPORTANT },
	lgJustifyContentSpaceBetween: { display: "flex", justifyContent: "space-between" + IMPORTANT },
	lgJustifyContentSpaceAround : { display: "flex", justifyContent: "space-around" + IMPORTANT },
	lgJustifyContentSpaceEvenly : { display: "flex", justifyContent: "space-evenly" + IMPORTANT },

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
	lgDisplayInline     : { display: "inline" + IMPORTANT },
	lgDisplayInlineBlock: { display: "inline-block" + IMPORTANT },
	lgDisplayBlock      : { display: "block" + IMPORTANT },
	lgDisplayGrid       : { display: "grid" + IMPORTANT },
	lgDisplayTable      : { display: "table" + IMPORTANT },
	lgDisplayTableRow   : { display: "table-row" + IMPORTANT },
	lgDisplayTableCell  : { display: "table-cell" + IMPORTANT },
	lgDisplayFlex       : { display: "flex" + IMPORTANT },
	lgDisplayInlineFlex : { display: "inline-flex" + IMPORTANT },
	lgDisplayNone       : { display: "none" + IMPORTANT },

	/**************************************************
   * Flex
   *************************************************/
	lgFlexDirectionRow          : { flexDirection: "row" + IMPORTANT },
	lgFlexDirectionColumn       : { flexDirection: "column" + IMPORTANT },
	lgFlexDirectionRowReverse   : { flexDirection: "row-reverse" + IMPORTANT },
	lgFlexDirectionColumnReverse: { flexDirection: "column-reverse" + IMPORTANT },
	lgFlexFill                  : { flex: "1 1 auto" + IMPORTANT },
	lgFlexGrow0                 : { flexGrow: "0" + IMPORTANT },
	lgFlexGrow1                 : { flexGrow: "1" + IMPORTANT },
	lgFlexShrink0               : { flexShrink: "0" + IMPORTANT },
	lgFlexShrink1               : { flexShrink: "1" + IMPORTANT },
	lgFlexWrapWrap              : { flexWrap: "wrap" + IMPORTANT },
	lgFlexWrapNoWrap            : { flexWrap: "nowrap" + IMPORTANT },
	lgFlexWrapWrapReverse       : { flexWrap: "wrap-reverse" + IMPORTANT },

	/**************************************************
   * Float
   *************************************************/
	lgFloatStart: { float: "left" + IMPORTANT },
	lgFloatEnd  : { float: "right" + IMPORTANT },
	lgFloatNone : { float: "none" + IMPORTANT },

	/**************************************************
   * Interactions
   *************************************************/
	//NO SCREEN SIZE SPECIFIC STYLE AVAILABLE

	/**************************************************
   * Object Fit
   *************************************************/
	lgObjectFitContain: {
		// -o-object-fit: contain !important;
		objectFit: "contain" + IMPORTANT,
	},

	lgObjectFitCover: {
		// -o-object-fit: cover !important;
		objectFit: "cover" + IMPORTANT,
	},

	lgObjectFitFill: {
		// -o-object-fit: fill !important;
		objectFit: "fill" + IMPORTANT,
	},

	lgObjectFitScale: {
		// -o-object-fit: scale-down !important;
		objectFit: "scale-down" + IMPORTANT,
	},

	lgObjectFitNone: {
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
	lgP0: { padding: 0 + IMPORTANT },
	lgP1: { padding: LARGE_PADDING + IMPORTANT },
	lgP2: { padding: LARGE_PADDING * 2 + IMPORTANT },
	lgP3: { padding: LARGE_PADDING * 3 + IMPORTANT },
	lgP4: { padding: LARGE_PADDING * 4 + IMPORTANT },
	lgP5: { padding: LARGE_PADDING * 5 + IMPORTANT },

	lgPt0: { paddingTop: 0 + IMPORTANT },
	lgPt1: { paddingTop: LARGE_PADDING + IMPORTANT },
	lgPt2: { paddingTop: LARGE_PADDING * 2 + IMPORTANT },
	lgPt3: { paddingTop: LARGE_PADDING * 3 + IMPORTANT },
	lgPt4: { paddingTop: LARGE_PADDING * 4 + IMPORTANT },
	lgPt5: { paddingTop: LARGE_PADDING * 5 + IMPORTANT },

	lgPr0: { paddingRight: 0 + IMPORTANT },
	lgPr1: { paddingRight: LARGE_PADDING + IMPORTANT },
	lgPr2: { paddingRight: LARGE_PADDING * 2 + IMPORTANT },
	lgPr3: { paddingRight: LARGE_PADDING * 3 + IMPORTANT },
	lgPr4: { paddingRight: LARGE_PADDING * 4 + IMPORTANT },
	lgPr5: { paddingRight: LARGE_PADDING * 5 + IMPORTANT },

	lgPb0: { paddingBottom: 0 + IMPORTANT },
	lgPb1: { paddingBottom: LARGE_PADDING + IMPORTANT },
	lgPb2: { paddingBottom: LARGE_PADDING * 2 + IMPORTANT },
	lgPb3: { paddingBottom: LARGE_PADDING * 3 + IMPORTANT },
	lgPb4: { paddingBottom: LARGE_PADDING * 4 + IMPORTANT },
	lgPb5: { paddingBottom: LARGE_PADDING * 5 + IMPORTANT },

	lgPl0: { paddingLeft: 0 + IMPORTANT },
	lgPl1: { paddingLeft: LARGE_PADDING + IMPORTANT },
	lgPl2: { paddingLeft: LARGE_PADDING * 2 + IMPORTANT },
	lgPl3: { paddingLeft: LARGE_PADDING * 3 + IMPORTANT },
	lgPl4: { paddingLeft: LARGE_PADDING * 4 + IMPORTANT },
	lgPl5: { paddingLeft: LARGE_PADDING * 5 + IMPORTANT },

	lgPx0: { paddingLeft: 0 + IMPORTANT, paddingRight: 0 + IMPORTANT },
	lgPx1: {
		paddingLeft : LARGE_PADDING * 1 + IMPORTANT,
		paddingRight: LARGE_PADDING * 1 + IMPORTANT,
	},
	lgPx2: {
		paddingLeft : LARGE_PADDING * 2 + IMPORTANT,
		paddingRight: LARGE_PADDING * 2 + IMPORTANT,
	},
	lgPx3: {
		paddingLeft : LARGE_PADDING * 3 + IMPORTANT,
		paddingRight: LARGE_PADDING * 3 + IMPORTANT,
	},
	lgPx4: {
		paddingLeft : LARGE_PADDING * 4 + IMPORTANT,
		paddingRight: LARGE_PADDING * 4 + IMPORTANT,
	},
	lgPx5: {
		paddingLeft : LARGE_PADDING * 5 + IMPORTANT,
		paddingRight: LARGE_PADDING * 5 + IMPORTANT,
	},

	lgPy0: { paddingTop: 0 + IMPORTANT, paddingBottom: 0 + IMPORTANT },
	lgPy1: {
		paddingTop   : LARGE_PADDING * 1 + IMPORTANT,
		paddingBottom: LARGE_PADDING * 1 + IMPORTANT,
	},
	lgPy2: {
		paddingTop   : LARGE_PADDING * 2 + IMPORTANT,
		paddingBottom: LARGE_PADDING * 2 + IMPORTANT,
	},
	lgPy3: {
		paddingTop   : LARGE_PADDING * 3 + IMPORTANT,
		paddingBottom: LARGE_PADDING * 3 + IMPORTANT,
	},
	lgPy4: {
		paddingTop   : LARGE_PADDING * 4 + IMPORTANT,
		paddingBottom: LARGE_PADDING * 4 + IMPORTANT,
	},
	lgPy5: {
		paddingTop   : LARGE_PADDING * 5 + IMPORTANT,
		paddingBottom: LARGE_PADDING * 5 + IMPORTANT,
	},

	/*-------------------------------------------------
   * Margin
   *-----------------------------------------------*/
	lgM0   : { margin: 0 + IMPORTANT },
	lgM1   : { margin: LARGE_MARGIN + IMPORTANT },
	lgM2   : { margin: LARGE_MARGIN * 2 + IMPORTANT },
	lgM3   : { margin: LARGE_MARGIN * 3 + IMPORTANT },
	lgM4   : { margin: LARGE_MARGIN * 4 + IMPORTANT },
	lgM5   : { margin: LARGE_MARGIN * 5 + IMPORTANT },
	lgMAuto: { margin: "auto" + IMPORTANT },

	lgMt0   : { marginTop: 0 + IMPORTANT },
	lgMt1   : { marginTop: LARGE_MARGIN + IMPORTANT },
	lgMt2   : { marginTop: LARGE_MARGIN * 2 + IMPORTANT },
	lgMt3   : { marginTop: LARGE_MARGIN * 3 + IMPORTANT },
	lgMt4   : { marginTop: LARGE_MARGIN * 4 + IMPORTANT },
	lgMt5   : { marginTop: LARGE_MARGIN * 5 + IMPORTANT },
	lgMtAuto: { marginTop: "auto" + IMPORTANT },

	lgMr0   : { marginRight: 0 + IMPORTANT },
	lgMr1   : { marginRight: LARGE_MARGIN + IMPORTANT },
	lgMr2   : { marginRight: LARGE_MARGIN * 2 + IMPORTANT },
	lgMr3   : { marginRight: LARGE_MARGIN * 3 + IMPORTANT },
	lgMr4   : { marginRight: LARGE_MARGIN * 4 + IMPORTANT },
	lgMr5   : { marginRight: LARGE_MARGIN * 5 + IMPORTANT },
	lgMrAuto: { marginRight: "auto" + IMPORTANT },

	lgMb0   : { marginBottom: 0 + IMPORTANT },
	lgMb1   : { marginBottom: LARGE_MARGIN + IMPORTANT },
	lgMb2   : { marginBottom: LARGE_MARGIN * 2 + IMPORTANT },
	lgMb3   : { marginBottom: LARGE_MARGIN * 3 + IMPORTANT },
	lgMb4   : { marginBottom: LARGE_MARGIN * 4 + IMPORTANT },
	lgMb5   : { marginBottom: LARGE_MARGIN * 5 + IMPORTANT },
	lgMbAuto: { marginBottom: "auto" + IMPORTANT },

	lgMl0   : { marginLeft: 0 + IMPORTANT },
	lgMl1   : { marginLeft: LARGE_MARGIN + IMPORTANT },
	lgMl2   : { marginLeft: LARGE_MARGIN * 2 + IMPORTANT },
	lgMl3   : { marginLeft: LARGE_MARGIN * 3 + IMPORTANT },
	lgMl4   : { marginLeft: LARGE_MARGIN * 4 + IMPORTANT },
	lgMl5   : { marginLeft: LARGE_MARGIN * 5 + IMPORTANT },
	lgMlAuto: { marginLeft: "auto" + IMPORTANT },

	lgMx0   : { marginLeft: 0 + IMPORTANT, marginRight: 0 + IMPORTANT },
	lgMx1   : { marginLeft: LARGE_MARGIN * 1 + IMPORTANT, marginRight: LARGE_MARGIN * 1 + IMPORTANT },
	lgMx2   : { marginLeft: LARGE_MARGIN * 2 + IMPORTANT, marginRight: LARGE_MARGIN * 2 + IMPORTANT },
	lgMx3   : { marginLeft: LARGE_MARGIN * 3 + IMPORTANT, marginRight: LARGE_MARGIN * 3 + IMPORTANT },
	lgMx4   : { marginLeft: LARGE_MARGIN * 4 + IMPORTANT, marginRight: LARGE_MARGIN * 4 + IMPORTANT },
	lgMx5   : { marginLeft: LARGE_MARGIN * 5 + IMPORTANT, marginRight: LARGE_MARGIN * 5 + IMPORTANT },
	lgMxAuto: { marginLeft: "auto" + IMPORTANT, marginRight: "auto" + IMPORTANT },

	lgMy0   : { marginTop: 0 + IMPORTANT, marginBottom: 0 + IMPORTANT },
	lgMy1   : { marginTop: LARGE_MARGIN * 1 + IMPORTANT, marginBottom: LARGE_MARGIN * 1 + IMPORTANT },
	lgMy2   : { marginTop: LARGE_MARGIN * 2 + IMPORTANT, marginBottom: LARGE_MARGIN * 2 + IMPORTANT },
	lgMy3   : { marginTop: LARGE_MARGIN * 3 + IMPORTANT, marginBottom: LARGE_MARGIN * 3 + IMPORTANT },
	lgMy4   : { marginTop: LARGE_MARGIN * 4 + IMPORTANT, marginBottom: LARGE_MARGIN * 4 + IMPORTANT },
	lgMy5   : { marginTop: LARGE_MARGIN * 5 + IMPORTANT, marginBottom: LARGE_MARGIN * 5 + IMPORTANT },
	lgMyAuto: { marginTop: "auto" + IMPORTANT, marginBottom: "auto" + IMPORTANT },

	lgMN1: { margin: LARGE_MARGIN * -1 + IMPORTANT },
	lgMN2: { margin: LARGE_MARGIN * -2 + IMPORTANT },
	lgMN3: { margin: LARGE_MARGIN * -3 + IMPORTANT },
	lgMN4: { margin: LARGE_MARGIN * -4 + IMPORTANT },
	lgMN5: { margin: LARGE_MARGIN * -5 + IMPORTANT },

	lgMtN1: { marginTop: LARGE_MARGIN * -1 + IMPORTANT },
	lgMtN2: { marginTop: LARGE_MARGIN * -2 + IMPORTANT },
	lgMtN3: { marginTop: LARGE_MARGIN * -3 + IMPORTANT },
	lgMtN4: { marginTop: LARGE_MARGIN * -4 + IMPORTANT },
	lgMtN5: { marginTop: LARGE_MARGIN * -5 + IMPORTANT },

	lgMrN1: { marginRight: LARGE_MARGIN * -1 + IMPORTANT },
	lgMrN2: { marginRight: LARGE_MARGIN * -2 + IMPORTANT },
	lgMrN3: { marginRight: LARGE_MARGIN * -3 + IMPORTANT },
	lgMrN4: { marginRight: LARGE_MARGIN * -4 + IMPORTANT },
	lgMrN5: { marginRight: LARGE_MARGIN * -5 + IMPORTANT },

	lgMbN1: { marginBottom: LARGE_MARGIN * -1 + IMPORTANT },
	lgMbN2: { marginBottom: LARGE_MARGIN * -2 + IMPORTANT },
	lgMbN3: { marginBottom: LARGE_MARGIN * -3 + IMPORTANT },
	lgMbN4: { marginBottom: LARGE_MARGIN * -4 + IMPORTANT },
	lgMbN5: { marginBottom: LARGE_MARGIN * -5 + IMPORTANT },

	lgMlN1: { marginLeft: LARGE_MARGIN * -1 + IMPORTANT },
	lgMlN2: { marginLeft: LARGE_MARGIN * -2 + IMPORTANT },
	lgMlN3: { marginLeft: LARGE_MARGIN * -3 + IMPORTANT },
	lgMlN4: { marginLeft: LARGE_MARGIN * -4 + IMPORTANT },
	lgMlN5: { marginLeft: LARGE_MARGIN * -5 + IMPORTANT },

	lgMxN1: { marginLeft: LARGE_MARGIN * -1 + IMPORTANT, marginRight: LARGE_MARGIN * -1 + IMPORTANT },
	lgMxN2: { marginLeft: LARGE_MARGIN * -2 + IMPORTANT, marginRight: LARGE_MARGIN * -2 + IMPORTANT },
	lgMxN3: { marginLeft: LARGE_MARGIN * -3 + IMPORTANT, marginRight: LARGE_MARGIN * -3 + IMPORTANT },
	lgMxN4: { marginLeft: LARGE_MARGIN * -4 + IMPORTANT, marginRight: LARGE_MARGIN * -4 + IMPORTANT },
	lgMxN5: { marginLeft: LARGE_MARGIN * -5 + IMPORTANT, marginRight: LARGE_MARGIN * -5 + IMPORTANT },

	lgMyN1: { marginTop: LARGE_MARGIN * -1 + IMPORTANT, marginBottom: LARGE_MARGIN * -1 + IMPORTANT },
	lgMyN2: { marginTop: LARGE_MARGIN * -2 + IMPORTANT, marginBottom: LARGE_MARGIN * -2 + IMPORTANT },
	lgMyN3: { marginTop: LARGE_MARGIN * -3 + IMPORTANT, marginBottom: LARGE_MARGIN * -3 + IMPORTANT },
	lgMyN4: { marginTop: LARGE_MARGIN * -4 + IMPORTANT, marginBottom: LARGE_MARGIN * -4 + IMPORTANT },
	lgMyN5: { marginTop: LARGE_MARGIN * -5 + IMPORTANT, marginBottom: LARGE_MARGIN * -5 + IMPORTANT },

	/*-------------------------------------------------
   * Gap
   *-----------------------------------------------*/
	lgGap0: { gap: "0" + IMPORTANT },
	lgGap1: { gap: LARGE_SPACING * 1 + IMPORTANT },
	lgGap2: { gap: LARGE_SPACING * 2 + IMPORTANT },
	lgGap3: { gap: LARGE_SPACING * 3 + IMPORTANT },
	lgGap4: { gap: LARGE_SPACING * 4 + IMPORTANT },
	lgGap5: { gap: LARGE_SPACING * 5 + IMPORTANT },

	lgRowGap0: { rowGap: "0" + IMPORTANT },
	lgRowGap1: { rowGap: LARGE_SPACING * 1 + IMPORTANT },
	lgRowGap2: { rowGap: LARGE_SPACING * 2 + IMPORTANT },
	lgRowGap3: { rowGap: LARGE_SPACING * 3 + IMPORTANT },
	lgRowGap4: { rowGap: LARGE_SPACING * 4 + IMPORTANT },
	lgRowGap5: { rowGap: LARGE_SPACING * 5 + IMPORTANT },

	lgColGap0: { columnGap: "0" + IMPORTANT },
	lgColGap1: { columnGap: LARGE_SPACING * 1 + IMPORTANT },
	lgColGap2: { columnGap: LARGE_SPACING * 2 + IMPORTANT },
	lgColGap3: { columnGap: LARGE_SPACING * 3 + IMPORTANT },
	lgColGap4: { columnGap: LARGE_SPACING * 4 + IMPORTANT },
	lgColGap5: { columnGap: LARGE_SPACING * 5 + IMPORTANT },

	/**************************************************
   * Text
   *************************************************/
	lgTextStart  : { textAlign: "left" + IMPORTANT },
	lgTextEnd    : { textAlign: "right" + IMPORTANT },
	lgTextCenter : { textAlign: "center" + IMPORTANT },
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
