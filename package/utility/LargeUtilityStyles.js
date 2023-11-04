import {
	DEFAULT_MARGIN,
	DEFAULT_PADDING,
	DEFAULT_SPACING
} from "./DefaultUtilityStyles";

export const LARGE_MARGIN = DEFAULT_MARGIN;
export const LARGE_PADDING = DEFAULT_PADDING;
export const LARGE_SPACING = DEFAULT_SPACING;

export const largeUtilityStyles = {
	/**************************************************
   * Alignment
   *************************************************/
	lgAlignItemsStart   : { display: "flex", alignItems: "flex-start" },
	lgAlignItemsEnd     : { display: "flex", alignItems: "flex-end" },
	lgAlignItemsCenter  : { display: "flex", alignItems: "center" },
	lgAlignItemsBaseline: { display: "flex", alignItems: "baseline" },
	lgAlignItemsStretch : { display: "flex", alignItems: "stretch" },

	lgAlignContentStart  : { display: "flex", alignContent: "flex-start" },
	lgAlignContentEnd    : { display: "flex", alignContent: "flex-end" },
	lgAlignContentCenter : { display: "flex", alignContent: "center" },
	lgAlignContentBetween: { display: "flex", alignContent: "space-between" },
	lgAlignContentAround : { display: "flex", alignContent: "space-around" },
	lgAlignContentStretch: { display: "flex", alignContent: "stretch" },

	lgAlignSelfAuto    : { display: "flex", alignSelf: "auto" },
	lgAlignSelfStart   : { display: "flex", alignSelf: "flex-start" },
	lgAlignSelfEnd     : { display: "flex", alignSelf: "flex-end" },
	lgAlignSelfCenter  : { display: "flex", alignSelf: "center" },
	lgAlignSelfBaseline: { display: "flex", alignSelf: "baseline" },
	lgAlignSelfStretch : { display: "flex", alignSelf: "stretch" },

	lgJustifyContentCenter      : { display: "flex", justifyContent: "center" },
	lgJustifyContentFlexStart   : { display: "flex", justifyContent: "flex-start" },
	lgJustifyContentFlexEnd     : { display: "flex", justifyContent: "flex-end" },
	lgJustifyContentSpaceBetween: { display: "flex", justifyContent: "space-between" },
	lgJustifyContentSpaceAround : { display: "flex", justifyContent: "space-around" },
	lgJustifyContentSpaceEvenly : { display: "flex", justifyContent: "space-evenly" },

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
	lgDisplayInline     : { display: "inline" },
	lgDisplayInlineBlock: { display: "inline-block" },
	lgDisplayBlock      : { display: "block" },
	lgDisplayGrid       : { display: "grid" },
	lgDisplayTable      : { display: "table" },
	lgDisplayTableRow   : { display: "table-row" },
	lgDisplayTableCell  : { display: "table-cell" },
	lgDisplayFlex       : { display: "flex" },
	lgDisplayInlineFlex : { display: "inline-flex" },
	lgDisplayNone       : { display: "none" },

	/**************************************************
   * Flex
   *************************************************/
	lgFlexDirectionRow          : { flexDirection: "row" },
	lgFlexDirectionColumn       : { flexDirection: "column" },
	lgFlexDirectionRowReverse   : { flexDirection: "row-reverse" },
	lgFlexDirectionColumnReverse: { flexDirection: "column-reverse" },
	lgFlexFill                  : { flex: "1 1 auto" },
	lgFlexGrow0                 : { flexGrow: "0" },
	lgFlexGrow1                 : { flexGrow: "1" },
	lgFlexShrink0               : { flexShrink: "0" },
	lgFlexShrink1               : { flexShrink: "1" },
	lgFlexWrapWrap              : { flexWrap: "wrap" },
	lgFlexWrapNoWrap            : { flexWrap: "nowrap" },
	lgFlexWrapWrapReverse       : { flexWrap: "wrap-reverse" },

	/**************************************************
   * Float
   *************************************************/
	lgFloatStart: { float: "left" },
	lgFloatEnd  : { float: "right" },
	lgFloatNone : { float: "none" },

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
	lgP1: { padding: LARGE_PADDING },
	lgP2: { padding: LARGE_PADDING * 2 },
	lgP3: { padding: LARGE_PADDING * 3 },
	lgP4: { padding: LARGE_PADDING * 4 },
	lgP5: { padding: LARGE_PADDING * 5 },

	lgPt0: { paddingTop: 0 },
	lgPt1: { paddingTop: LARGE_PADDING },
	lgPt2: { paddingTop: LARGE_PADDING * 2 },
	lgPt3: { paddingTop: LARGE_PADDING * 3 },
	lgPt4: { paddingTop: LARGE_PADDING * 4 },
	lgPt5: { paddingTop: LARGE_PADDING * 5 },

	lgPr0: { paddingRight: 0 },
	lgPr1: { paddingRight: LARGE_PADDING },
	lgPr2: { paddingRight: LARGE_PADDING * 2 },
	lgPr3: { paddingRight: LARGE_PADDING * 3 },
	lgPr4: { paddingRight: LARGE_PADDING * 4 },
	lgPr5: { paddingRight: LARGE_PADDING * 5 },

	lgPb0: { paddingBottom: 0 },
	lgPb1: { paddingBottom: LARGE_PADDING },
	lgPb2: { paddingBottom: LARGE_PADDING * 2 },
	lgPb3: { paddingBottom: LARGE_PADDING * 3 },
	lgPb4: { paddingBottom: LARGE_PADDING * 4 },
	lgPb5: { paddingBottom: LARGE_PADDING * 5 },

	lgPl0: { paddingLeft: 0 },
	lgPl1: { paddingLeft: LARGE_PADDING },
	lgPl2: { paddingLeft: LARGE_PADDING * 2 },
	lgPl3: { paddingLeft: LARGE_PADDING * 3 },
	lgPl4: { paddingLeft: LARGE_PADDING * 4 },
	lgPl5: { paddingLeft: LARGE_PADDING * 5 },

	lgPx0: { paddingLeft: 0, paddingRight: 0 },
	lgPx1: {
		paddingLeft : LARGE_PADDING * 1,
		paddingRight: LARGE_PADDING * 1,
	},
	lgPx2: {
		paddingLeft : LARGE_PADDING * 2,
		paddingRight: LARGE_PADDING * 2,
	},
	lgPx3: {
		paddingLeft : LARGE_PADDING * 3,
		paddingRight: LARGE_PADDING * 3,
	},
	lgPx4: {
		paddingLeft : LARGE_PADDING * 4,
		paddingRight: LARGE_PADDING * 4,
	},
	lgPx5: {
		paddingLeft : LARGE_PADDING * 5,
		paddingRight: LARGE_PADDING * 5,
	},

	lgPy0: { paddingTop: 0, paddingBottom: 0 },
	lgPy1: {
		paddingTop   : LARGE_PADDING * 1,
		paddingBottom: LARGE_PADDING * 1,
	},
	lgPy2: {
		paddingTop   : LARGE_PADDING * 2,
		paddingBottom: LARGE_PADDING * 2,
	},
	lgPy3: {
		paddingTop   : LARGE_PADDING * 3,
		paddingBottom: LARGE_PADDING * 3,
	},
	lgPy4: {
		paddingTop   : LARGE_PADDING * 4,
		paddingBottom: LARGE_PADDING * 4,
	},
	lgPy5: {
		paddingTop   : LARGE_PADDING * 5,
		paddingBottom: LARGE_PADDING * 5,
	},

	/*-------------------------------------------------
   * Margin
   *-----------------------------------------------*/
	lgM0   : { margin: 0 },
	lgM1   : { margin: LARGE_MARGIN },
	lgM2   : { margin: LARGE_MARGIN * 2 },
	lgM3   : { margin: LARGE_MARGIN * 3 },
	lgM4   : { margin: LARGE_MARGIN * 4 },
	lgM5   : { margin: LARGE_MARGIN * 5 },
	lgMAuto: { margin: "auto" },

	lgMt0   : { marginTop: 0 },
	lgMt1   : { marginTop: LARGE_MARGIN },
	lgMt2   : { marginTop: LARGE_MARGIN * 2 },
	lgMt3   : { marginTop: LARGE_MARGIN * 3 },
	lgMt4   : { marginTop: LARGE_MARGIN * 4 },
	lgMt5   : { marginTop: LARGE_MARGIN * 5 },
	lgMtAuto: { marginTop: "auto" },

	lgMr0   : { marginRight: 0 },
	lgMr1   : { marginRight: LARGE_MARGIN },
	lgMr2   : { marginRight: LARGE_MARGIN * 2 },
	lgMr3   : { marginRight: LARGE_MARGIN * 3 },
	lgMr4   : { marginRight: LARGE_MARGIN * 4 },
	lgMr5   : { marginRight: LARGE_MARGIN * 5 },
	lgMrAuto: { marginRight: "auto" },

	lgMb0   : { marginBottom: 0 },
	lgMb1   : { marginBottom: LARGE_MARGIN },
	lgMb2   : { marginBottom: LARGE_MARGIN * 2 },
	lgMb3   : { marginBottom: LARGE_MARGIN * 3 },
	lgMb4   : { marginBottom: LARGE_MARGIN * 4 },
	lgMb5   : { marginBottom: LARGE_MARGIN * 5 },
	lgMbAuto: { marginBottom: "auto" },

	lgMl0   : { marginLeft: 0 },
	lgMl1   : { marginLeft: LARGE_MARGIN },
	lgMl2   : { marginLeft: LARGE_MARGIN * 2 },
	lgMl3   : { marginLeft: LARGE_MARGIN * 3 },
	lgMl4   : { marginLeft: LARGE_MARGIN * 4 },
	lgMl5   : { marginLeft: LARGE_MARGIN * 5 },
	lgMlAuto: { marginLeft: "auto" },

	lgMx0   : { marginLeft: 0, marginRight: 0 },
	lgMx1   : { marginLeft: LARGE_MARGIN * 1, marginRight: LARGE_MARGIN * 1 },
	lgMx2   : { marginLeft: LARGE_MARGIN * 2, marginRight: LARGE_MARGIN * 2 },
	lgMx3   : { marginLeft: LARGE_MARGIN * 3, marginRight: LARGE_MARGIN * 3 },
	lgMx4   : { marginLeft: LARGE_MARGIN * 4, marginRight: LARGE_MARGIN * 4 },
	lgMx5   : { marginLeft: LARGE_MARGIN * 5, marginRight: LARGE_MARGIN * 5 },
	lgMxAuto: { marginLeft: "auto", marginRight: "auto" },

	lgMy0   : { marginTop: 0, marginBottom: 0 },
	lgMy1   : { marginTop: LARGE_MARGIN * 1, marginBottom: LARGE_MARGIN * 1 },
	lgMy2   : { marginTop: LARGE_MARGIN * 2, marginBottom: LARGE_MARGIN * 2 },
	lgMy3   : { marginTop: LARGE_MARGIN * 3, marginBottom: LARGE_MARGIN * 3 },
	lgMy4   : { marginTop: LARGE_MARGIN * 4, marginBottom: LARGE_MARGIN * 4 },
	lgMy5   : { marginTop: LARGE_MARGIN * 5, marginBottom: LARGE_MARGIN * 5 },
	lgMyAuto: { marginTop: "auto", marginBottom: "auto" },

	lgMN1: { margin: LARGE_MARGIN * -1 },
	lgMN2: { margin: LARGE_MARGIN * -2 },
	lgMN3: { margin: LARGE_MARGIN * -3 },
	lgMN4: { margin: LARGE_MARGIN * -4 },
	lgMN5: { margin: LARGE_MARGIN * -5 },

	lgMtN1: { marginTop: LARGE_MARGIN * -1 },
	lgMtN2: { marginTop: LARGE_MARGIN * -2 },
	lgMtN3: { marginTop: LARGE_MARGIN * -3 },
	lgMtN4: { marginTop: LARGE_MARGIN * -4 },
	lgMtN5: { marginTop: LARGE_MARGIN * -5 },

	lgMrN1: { marginRight: LARGE_MARGIN * -1 },
	lgMrN2: { marginRight: LARGE_MARGIN * -2 },
	lgMrN3: { marginRight: LARGE_MARGIN * -3 },
	lgMrN4: { marginRight: LARGE_MARGIN * -4 },
	lgMrN5: { marginRight: LARGE_MARGIN * -5 },

	lgMbN1: { marginBottom: LARGE_MARGIN * -1 },
	lgMbN2: { marginBottom: LARGE_MARGIN * -2 },
	lgMbN3: { marginBottom: LARGE_MARGIN * -3 },
	lgMbN4: { marginBottom: LARGE_MARGIN * -4 },
	lgMbN5: { marginBottom: LARGE_MARGIN * -5 },

	lgMlN1: { marginLeft: LARGE_MARGIN * -1 },
	lgMlN2: { marginLeft: LARGE_MARGIN * -2 },
	lgMlN3: { marginLeft: LARGE_MARGIN * -3 },
	lgMlN4: { marginLeft: LARGE_MARGIN * -4 },
	lgMlN5: { marginLeft: LARGE_MARGIN * -5 },

	lgMxN1: { marginLeft: LARGE_MARGIN * -1, marginRight: LARGE_MARGIN * -1 },
	lgMxN2: { marginLeft: LARGE_MARGIN * -2, marginRight: LARGE_MARGIN * -2 },
	lgMxN3: { marginLeft: LARGE_MARGIN * -3, marginRight: LARGE_MARGIN * -3 },
	lgMxN4: { marginLeft: LARGE_MARGIN * -4, marginRight: LARGE_MARGIN * -4 },
	lgMxN5: { marginLeft: LARGE_MARGIN * -5, marginRight: LARGE_MARGIN * -5 },

	lgMyN1: { marginTop: LARGE_MARGIN * -1, marginBottom: LARGE_MARGIN * -1 },
	lgMyN2: { marginTop: LARGE_MARGIN * -2, marginBottom: LARGE_MARGIN * -2 },
	lgMyN3: { marginTop: LARGE_MARGIN * -3, marginBottom: LARGE_MARGIN * -3 },
	lgMyN4: { marginTop: LARGE_MARGIN * -4, marginBottom: LARGE_MARGIN * -4 },
	lgMyN5: { marginTop: LARGE_MARGIN * -5, marginBottom: LARGE_MARGIN * -5 },

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
	lgTextStart  : { textAlign: "left" },
	lgTextEnd    : { textAlign: "right" },
	lgTextCenter : { textAlign: "center" },
	lgTextJustify: { textAlign: "justify" },

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
