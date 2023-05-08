import { theme } from "../theme/theme";

const DEFAULT_BORDER_WIDTH = 1;
const DEFAULT_BORDER_STYLE = "solid";
const DEFAULT_BORDER_COLOR = "black";
const DEFAULT_BORDER =
  DEFAULT_BORDER_WIDTH + "px " + DEFAULT_BORDER_STYLE + " " + DEFAULT_BORDER_COLOR;

// -- const DEFAULT_SHADOW_COLOR = "black";
const DEFAULT_SHADOW_COLOR_RGB = "0,0,0";

export const IMPORTANT = " !important";
export const PX_TAG = "px";
export const DEFAULT_MARGIN = 8;
export const DEFAULT_PADDING = 8;
export const DEFAULT_SPACING = 8;

export const defaultUtilityStyles = {
    
	alignContentAround: { alignContent: "space-around" + IMPORTANT, display: "flex" },
    
	alignContentBetween: { alignContent: "space-between" + IMPORTANT, display: "flex" },
    
	alignContentCenter: { alignContent: "center" + IMPORTANT, display: "flex" },
    
	alignContentEnd: { alignContent: "flex-end" + IMPORTANT, display: "flex" },
    
	alignContentStart: { alignContent: "flex-start" + IMPORTANT, display: "flex" },
    
	alignContentStretch: { alignContent: "stretch" + IMPORTANT, display: "flex" },
    
	alignItemsBaseline: { alignItems: "baseline" + IMPORTANT, display: "flex" },
    
	alignItemsCenter: { alignItems: "center" + IMPORTANT, display: "flex" },
    
	alignItemsEnd    : { alignItems: "flex-end" + IMPORTANT, display: "flex" },
	/**************************************************
   * Alignment
   *************************************************/
	alignItemsStart  : { alignItems: "flex-start" + IMPORTANT, display: "flex" },
	alignItemsStretch: { alignItems: "stretch" + IMPORTANT, display: "flex" },

	alignSelfAuto    : { alignSelf: "auto" + IMPORTANT, display: "flex" },
	alignSelfBaseline: { alignSelf: "baseline" + IMPORTANT, display: "flex" },
	alignSelfCenter  : { alignSelf: "center" + IMPORTANT, display: "flex" },
	alignSelfEnd     : { alignSelf: "flex-end" + IMPORTANT, display: "flex" },
	alignSelfStart   : { alignSelf: "flex-start" + IMPORTANT, display: "flex" },
	alignSelfStretch : { alignSelf: "stretch" + IMPORTANT, display: "flex" },
    
	bgBlack: { backgroundColor: "black" },
	bgDefault: { backgroundColor: theme.palette.background.default},
    
	bgError: { backgroundColor: theme.palette.error.main },
    
	bgErrorDark: { backgroundColor: theme.palette.error.dark },
    
	bgErrorLight: { backgroundColor: theme.palette.error.light },
    
	bgInfo: { backgroundColor: theme.palette.info.main },
    
	bgInfoDark: { backgroundColor: theme.palette.info.dark },
    
	bgInfoLight  : { backgroundColor: theme.palette.info.light },
	/**************************************************
   * Background
   *************************************************/
	bgPrimary    : { backgroundColor: theme.palette.primary.main },
	bgPrimaryDark: { backgroundColor: theme.palette.primary.dark },

	bgPrimaryLight : { backgroundColor: theme.palette.primary.light },
	bgSecondary    : { backgroundColor: theme.palette.secondary.main },
	bgSecondaryDark: { backgroundColor: theme.palette.secondary.dark },

	bgSecondaryLight: { backgroundColor: theme.palette.secondary.light },
	bgSuccess       : { backgroundColor: theme.palette.success.main },
	bgSuccessDark   : { backgroundColor: theme.palette.success.dark },

	bgSuccessLight: { backgroundColor: theme.palette.success.light },
	bgTransparent : { backgroundColor: "transparent" },
	bgWarning     : { backgroundColor: theme.palette.warning.main },

	bgWarningDark : { backgroundColor: theme.palette.warning.dark },
	bgWarningLight: { backgroundColor: theme.palette.warning.light },
	bgWhite       : { backgroundColor: "white" + IMPORTANT },

	/**************************************************
   * Border
   *************************************************/
	border: { border: DEFAULT_BORDER },
    
	border0: { border: "none" },
    
	border1: { borderWidth: DEFAULT_BORDER_WIDTH },
    
	border2: { borderWidth: DEFAULT_BORDER_WIDTH * 2 },
    
	border3: { borderWidth: DEFAULT_BORDER_WIDTH * 3 },
    
	border4: { borderWidth: DEFAULT_BORDER_WIDTH * 4 },
    
	border5    : { borderWidth: DEFAULT_BORDER_WIDTH * 5 },
	borderBlack: { borderColor: "black" },

	borderBottom : { border: "unset", borderBottom: DEFAULT_BORDER },
	borderBottom0: { borderBottom: "none" },

	borderDashed: { borderStyle: "dashed" },
	borderDotted: { borderStyle: "dotted" },
	borderDouble: { borderStyle: "double" },
	borderEnd   : { border: "unset", borderRight: DEFAULT_BORDER },

	borderEnd0 : { borderRight: "none" },
	borderError: { borderColor: theme.palette.error.main },

	borderErrorDark : { borderColor: theme.palette.error.dark },
	borderErrorLight: { borderColor: theme.palette.error.light },
	borderGroove    : { borderStyle: "groove" },
	borderHidden    : { borderStyle: "hidden" },

	borderInfo     : { borderColor: theme.palette.info.main },
	borderInfoDark : { borderColor: theme.palette.info.dark },
	borderInfoLight: { borderColor: theme.palette.info.light },

	borderInset: { borderStyle: "inset" },
	borderLeft : { border: "unset", borderLeft: DEFAULT_BORDER },
	borderLeft0: { borderLeft: "none" },

	borderNone   : { borderStyle: "none" },
	borderOutset : { borderStyle: "outset" },
	borderPrimary: { borderColor: theme.palette.primary.main },

	borderPrimaryDark : { borderColor: theme.palette.primary.dark },
	borderPrimaryLight: { borderColor: theme.palette.primary.light },
	borderRidge       : { borderStyle: "ridge" },

	borderRight    : { border: "unset", borderRight: DEFAULT_BORDER },
	borderRight0   : { borderRight: "none" },
	borderSecondary: { borderColor: theme.palette.secondary.main },

	borderSecondaryDark : { borderColor: theme.palette.secondary.dark },
	borderSecondaryLight: { borderColor: theme.palette.secondary.light },
	borderSolid         : { borderStyle: "solid" },

	borderStart : { border: "unset", borderLeft: DEFAULT_BORDER },
	borderStart0: { borderLeft: "none" },

	borderSuccess     : { borderColor: theme.palette.success.main },
	borderSuccessDark : { borderColor: theme.palette.success.dark },
	borderSuccessLight: { borderColor: theme.palette.success.light },
	borderTop         : { border: "unset", borderTop: DEFAULT_BORDER },
	borderTop0        : { borderTop: "none" },
	borderWarning     : { borderColor: theme.palette.warning.main },
	borderWarningDark : { borderColor: theme.palette.warning.dark },
	borderWarningLight: { borderColor: theme.palette.warning.light },
	borderWhite       : { borderColor: "white" },
	bottom0           : { bottom: "0" + IMPORTANT },

	bottom100: { bottom: "100%" + IMPORTANT },
	bottom50 : { bottom: "50%" + IMPORTANT },
    
	boxSizingBorderBox: { boxSizing: "border-box" + IMPORTANT },
    
	/**************************************************
   * Sizing
   *************************************************/
	boxSizingContentBox: { boxSizing: "content-box" + IMPORTANT },
    
	boxSizingInherit: { boxSizing: "inherit" + IMPORTANT },
    
	boxSizingInitial: { boxSizing: "initial" + IMPORTANT },
    
	displayBlock: { display: "block" + IMPORTANT },

	displayFlex: { display: "flex" + IMPORTANT },
    
	displayGrid: { display: "grid" + IMPORTANT },
    
	// -- textPrimaryEmphasis: {},
	// -- textSecondaryEmphasis: {},
	// -- textSuccessEmphasis: {},
	// -- textInfoEmphasis: {},
	// -- textWarningEmphasis: {},
	// -- textDangerEmphasis: {},
	// -- textLightEmphasis: {},
	// -- textDarkEmphasis: {},
	/**************************************************
   * Display
   *************************************************/
	displayInline: { display: "inline" + IMPORTANT },
    
	displayInlineBlock: { display: "inline-block" + IMPORTANT },
    
	displayInlineFlex: { display: "inline-flex" + IMPORTANT },
    
	displayNone: { display: "none" + IMPORTANT },
    
	displayTable: { display: "table" + IMPORTANT },
    
	displayTableCell: { display: "table-cell" + IMPORTANT },
    
	displayTableRow: { display: "table-row" + IMPORTANT },
    
	end0: { right: "0" + IMPORTANT },
    
	end100: { right: "100%" + IMPORTANT },
    
	end50: { right: "50%" + IMPORTANT },
    
	fixedBottom: {
		bottom  : "0",
		left    : "0",
		position: "fixed",
		right   : "0",
		zIndex  : "1030",
	},
    
	fixedTop: {
		left    : "0",
		position: "fixed",
		right   : "0",
		top     : "0",
		zIndex  : "1030",
	},
    
	flexDirectionColumn: { flexDirection: "column" + IMPORTANT },
    
	flexDirectionColumnReverse: { flexDirection: "column-reverse" + IMPORTANT },
    
	/**************************************************
   * Flex
   *************************************************/
	flexDirectionRow: { flexDirection: "row" + IMPORTANT },
    
	flexDirectionRowReverse: { flexDirection: "row-reverse" + IMPORTANT },
    
	flexFill: { flex: "1 1 auto" + IMPORTANT },
    
	flexGrow0: { flexGrow: "0" + IMPORTANT },
    
	flexGrow1: { flexGrow: "1" + IMPORTANT },
    
	flexShrink0: { flexShrink: "0" + IMPORTANT },
    
	flexShrink1: { flexShrink: "1" + IMPORTANT },
    
	flexWrapNoWrap: { flexWrap: "nowrap" + IMPORTANT },
    
	flexWrapWrap: { flexWrap: "wrap" + IMPORTANT },
    
	flexWrapWrapReverse: { flexWrap: "wrap-reverse" + IMPORTANT },
    
	floatEnd: { float: "right" + IMPORTANT },
    
	floatNone: { float: "none" + IMPORTANT },
    
	/**************************************************
   * Float
   *************************************************/
	floatStart: { float: "left" + IMPORTANT },
    
	h100: { height: "100%" + IMPORTANT },
    
	/*-------------------------------------------------
   * Height
   *-----------------------------------------------*/
	h25: { height: "25%" + IMPORTANT },
    
	h50: { height: "50%" + IMPORTANT },
    
	h75: { height: "75%" + IMPORTANT },
    
	hAuto: { height: "auto" + IMPORTANT },
    
	justifyContentCenter: { display: "flex", justifyContent: "center" + IMPORTANT },
    
	justifyContentFlexEnd: { display: "flex", justifyContent: "flex-end" + IMPORTANT },
    
	justifyContentFlexStart: { display: "flex", justifyContent: "flex-start" + IMPORTANT },
    
	justifyContentSpaceAround: { display: "flex", justifyContent: "space-around" + IMPORTANT },
    
	justifyContentSpaceBetween: { display: "flex", justifyContent: "space-between" + IMPORTANT },
    
	justifyContentSpaceEvenly: { display: "flex", justifyContent: "space-evenly" + IMPORTANT },
    
	/*-------------------------------------------------
   * Margin
   *-----------------------------------------------*/
	m0: { margin: 0 + IMPORTANT },
    
	m1: { margin: DEFAULT_MARGIN + PX_TAG + IMPORTANT },
    
	m2: { margin: DEFAULT_MARGIN * 2 + PX_TAG + IMPORTANT },
    
	m3: { margin: DEFAULT_MARGIN * 3 + PX_TAG + IMPORTANT },
    
	/*-------------------------------------------------
   * Gap
   *-----------------------------------------------*/
	gap0: { gap: "0" + IMPORTANT },
    
	m4: { margin: DEFAULT_MARGIN * 4 + PX_TAG + IMPORTANT },
    
	m5: { margin: DEFAULT_MARGIN * 5 + PX_TAG + IMPORTANT },
    
	mAuto: { margin: "auto" + IMPORTANT },
    
	gap1: { gap: DEFAULT_SPACING * 1 + IMPORTANT },
    
	mN1: { margin: DEFAULT_MARGIN * -1 + PX_TAG + IMPORTANT },
    
	gap2: { gap: DEFAULT_SPACING * 2 + IMPORTANT },
    
	mN2: { margin: DEFAULT_MARGIN * -2 + PX_TAG + IMPORTANT },
    
	gap3: { gap: DEFAULT_SPACING * 3 + IMPORTANT },
    
	mN3: { margin: DEFAULT_MARGIN * -3 + PX_TAG + IMPORTANT },
    
	gap4: { gap: DEFAULT_SPACING * 4 + IMPORTANT },
    
	mN4: { margin: DEFAULT_MARGIN * -4 + PX_TAG + IMPORTANT },
    
	gap5: { gap: DEFAULT_SPACING * 5 + IMPORTANT },
    
	mN5: { margin: DEFAULT_MARGIN * -5 + PX_TAG + IMPORTANT },
    
	// -moz-column-gap: 0 !important;
	colGap0: { columnGap: "0" + IMPORTANT },
    
	maxH100: { maxHeight: "100%" + IMPORTANT },
    
	maxH25: { maxHeight: "25%" + IMPORTANT },
    
	colGap1: { columnGap: DEFAULT_SPACING * 1 + IMPORTANT },
    
	maxH50: { maxHeight: "50%" + IMPORTANT },
    
	colGap2: { columnGap: DEFAULT_SPACING * 2 + IMPORTANT },
    
	maxH75: { maxHeight: "75%" + IMPORTANT },
    
	colGap3: { columnGap: DEFAULT_SPACING * 3 + IMPORTANT },
    
	maxVh100: { maxHeight: "100vh" + IMPORTANT },
    
	colGap4: { columnGap: DEFAULT_SPACING * 4 + IMPORTANT },
    
	maxVh25: { maxHeight: "25vh" + IMPORTANT },
    
	colGap5: { columnGap: DEFAULT_SPACING * 5 + IMPORTANT },
    
	maxVh50: { maxHeight: "50vh" + IMPORTANT },
    
	maxVh75: { maxHeight: "75vh" + IMPORTANT },
    
	maxVw100: { maxWidth: "100vw" + IMPORTANT },
    
	maxVw25: { maxWidth: "25vw" + IMPORTANT },
    
	maxVw50: { maxWidth: "50vw" + IMPORTANT },
    
	maxVw75: { maxWidth: "75vw" + IMPORTANT },
    
	maxW100: { maxWidth: "100%" + IMPORTANT },
    
	maxW25: { maxWidth: "25%" + IMPORTANT },
    
	maxW50: { maxWidth: "50%" + IMPORTANT },
    
	maxW75: { maxWidth: "75%" + IMPORTANT },
    
	mb0: { marginBottom: 0 + IMPORTANT },
    
	mb1: { marginBottom: DEFAULT_MARGIN + PX_TAG + IMPORTANT },
    
	/**************************************************
   * Vertical Align
   *************************************************/
	alignBaseline: { verticalAlign: "baseline" + IMPORTANT },
    
	mb2: { marginBottom: DEFAULT_MARGIN * 2 + PX_TAG + IMPORTANT },
    
	mb3: { marginBottom: DEFAULT_MARGIN * 3 + PX_TAG + IMPORTANT },
    
	alignMiddle: { verticalAlign: "middle" + IMPORTANT },
    
	mb4: { marginBottom: DEFAULT_MARGIN * 4 + PX_TAG + IMPORTANT },
    
	alignBottom: { verticalAlign: "bottom" + IMPORTANT },
    
	mb5: { marginBottom: DEFAULT_MARGIN * 5 + PX_TAG + IMPORTANT },
    
	mbAuto: { marginBottom: "auto" + IMPORTANT },
    
	alignTextBottom: { verticalAlign: "text-bottom" + IMPORTANT },
    
	mbN1: { marginBottom: DEFAULT_MARGIN * -1 + PX_TAG + IMPORTANT },
    
	alignTextTop: { verticalAlign: "text-top" + IMPORTANT },
    
	mbN2: { marginBottom: DEFAULT_MARGIN * -2 + PX_TAG + IMPORTANT },
    
	alignTop: { verticalAlign: "top" + IMPORTANT },
    
	mbN3: { marginBottom: DEFAULT_MARGIN * -3 + PX_TAG + IMPORTANT },
    
	invisible: { visibility: "hidden" + IMPORTANT },
    
	mbN4: { marginBottom: DEFAULT_MARGIN * -4 + PX_TAG + IMPORTANT },
    
	/**************************************************
   * cursor
   *************************************************/
	cursorAlias: { cursor: "alias " },
    
	mbN5: { marginBottom: DEFAULT_MARGIN * -5 + PX_TAG + IMPORTANT },
    
	minH100: { minHeight: "100%" + IMPORTANT },
    
	cursorAllScroll: { cursor: "all-scroll " },
    
	minH25: { minHeight: "25%" + IMPORTANT },
    
	cursorAuto: { cursor: "auto" },
    
	minH50: { minHeight: "50%" + IMPORTANT },
    
	cursorCell: { cursor: "cell " },
    
	minH75: { minHeight: "75%" + IMPORTANT },
    
	cursorColResize: { cursor: "col-resize " },
    
	minVh100: { minHeight: "100vh" + IMPORTANT },
    
	minVh25: { minHeight: "25vh" + IMPORTANT },
    
	cursorContextMenu: { cursor: "context-menu" },
    
	minVh50: { minHeight: "50vh" + IMPORTANT },
    
	minVh75: { minHeight: "75vh" + IMPORTANT },
    
	cursorCopy: { cursor: "copy " },
    
	minVw100: { minWidth: "100vw" + IMPORTANT },
    
	cursorCrosshair: { cursor: "crosshair " },
    
	minVw25: { minWidth: "25vw" + IMPORTANT },
    
	cursorDefault: { cursor: "default " },
    
	minVw50: { minWidth: "50vw" + IMPORTANT },
    
	cursorEResize: { cursor: "e-resize " },
    
	minVw75: { minWidth: "75vw" + IMPORTANT },
    
	cursorEwResize: { cursor: "ew-resize " },
    
	minW100: { minWidth: "100%" + IMPORTANT },
    
	cursorGrab: { cursor: "grab " },
    
	minW25: { minWidth: "25%" + IMPORTANT },
    
	cursorGrabbing: { cursor: "grabbing " },
    
	minW50: { minWidth: "50%" + IMPORTANT },
    
	cursorHelp: { cursor: "help " },
    
	minW75: { minWidth: "75%" + IMPORTANT },
    
	cursorMove: { cursor: "move " },
    
	ml0: { marginLeft: 0 + IMPORTANT },
    
	cursorNResize: { cursor: "n-resize " },
    
	ml1: { marginLeft: DEFAULT_MARGIN + PX_TAG + IMPORTANT },
    
	cursorNeResize: { cursor: "ne-resize " },
    
	ml2: { marginLeft: DEFAULT_MARGIN * 2 + PX_TAG + IMPORTANT },
    
	cursorNeswResize: { cursor: "nesw-resize" },
    
	ml3: { marginLeft: DEFAULT_MARGIN * 3 + PX_TAG + IMPORTANT },
    
	cursorInitial: { cursor: "initial " },
    
	ml4: { marginLeft: DEFAULT_MARGIN * 4 + PX_TAG + IMPORTANT },
    
	cursorNoDrop: { cursor: "no-drop " },
    
	ml5: { marginLeft: DEFAULT_MARGIN * 5 + PX_TAG + IMPORTANT },
    
	cursorInherit: { cursor: "inherit" },
    
	mlAuto: { marginLeft: "auto" + IMPORTANT },
    
	cursorNone: { cursor: "none " },
    
	mlN1: { marginLeft: DEFAULT_MARGIN * -1 + PX_TAG + IMPORTANT },
    
	cursorNotAllowed: { cursor: "not-allowed " },
    
	mlN2: { marginLeft: DEFAULT_MARGIN * -2 + PX_TAG + IMPORTANT },
    
	cursorNsResize: { cursor: "ns-resize " },
    
	mlN3: { marginLeft: DEFAULT_MARGIN * -3 + PX_TAG + IMPORTANT },
    
	cursorNwResize: { cursor: "nw-resize " },
    
	mlN4: { marginLeft: DEFAULT_MARGIN * -4 + PX_TAG + IMPORTANT },
    
	cursorNwseResize: { cursor: "nwse-resize" },
    
	mlN5: { marginLeft: DEFAULT_MARGIN * -5 + PX_TAG + IMPORTANT },
    
	cursorPointer: { cursor: "pointer " },
    
	mr0: { marginRight: 0 + IMPORTANT },
    
	cursorProgress: { cursor: "progress " },
    
	mr1: { marginRight: DEFAULT_MARGIN + PX_TAG + IMPORTANT },
    
	cursorRowResize: { cursor: "row-resize " },
    
	mr2: { marginRight: DEFAULT_MARGIN * 2 + PX_TAG + IMPORTANT },
    
	cursorSResize: { cursor: "s-resize " },
    
	mr3: { marginRight: DEFAULT_MARGIN * 3 + PX_TAG + IMPORTANT },
    
	cursorSeResize: { cursor: "se-resize " },
    
	mr4: { marginRight: DEFAULT_MARGIN * 4 + PX_TAG + IMPORTANT },
    
	cursorSwResize: { cursor: "sw-resize " },
    
	mr5: { marginRight: DEFAULT_MARGIN * 5 + PX_TAG + IMPORTANT },
    
	cursorText: { cursor: "text " },
    
	mrAuto: { marginRight: "auto" + IMPORTANT },
    
	cursorURL: { cursor: "URL " },
    
	mrN1: { marginRight: DEFAULT_MARGIN * -1 + PX_TAG + IMPORTANT },
    
	cursorVerticalText: { cursor: "vertical-text" },
    
	mrN2: { marginRight: DEFAULT_MARGIN * -2 + PX_TAG + IMPORTANT },
    
	cursorWResize: { cursor: "w-resize " },
    
	mrN3: { marginRight: DEFAULT_MARGIN * -3 + PX_TAG + IMPORTANT },
    
	cursorWait: { cursor: "wait " },
    
	mrN4: { marginRight: DEFAULT_MARGIN * -4 + PX_TAG + IMPORTANT },
    
	cursorZoomIn: { cursor: "zoom-in" },
    
	mrN5: { marginRight: DEFAULT_MARGIN * -5 + PX_TAG + IMPORTANT },
    
	cursorZoomOut: { cursor: "zoom-out" },
    
	mt0: { marginTop: 0 + IMPORTANT },
    
	mt1: { marginTop: DEFAULT_MARGIN + PX_TAG + IMPORTANT },
    
	mt2: { marginTop: DEFAULT_MARGIN * 2 + PX_TAG + IMPORTANT },
    
	mt3: { marginTop: DEFAULT_MARGIN * 3 + PX_TAG + IMPORTANT },
    
	mt4: { marginTop: DEFAULT_MARGIN * 4 + PX_TAG + IMPORTANT },
    
	/**************************************************
   * Object Fit
   *************************************************/
	objectFitContain: {
		// -o-object-fit: contain !important;
		objectFit: "contain" + IMPORTANT,
	},
    
	mt5: { marginTop: DEFAULT_MARGIN * 5 + PX_TAG + IMPORTANT },
    
	objectFitCover: {
		// -o-object-fit: cover !important;
		objectFit: "cover" + IMPORTANT,
	},
    
	mtAuto: { marginTop: "auto" + IMPORTANT },
    
	objectFitFill: {
		// -o-object-fit: fill !important;
		objectFit: "fill" + IMPORTANT,
	},
    
	mtN1: { marginTop: DEFAULT_MARGIN * -1 + PX_TAG + IMPORTANT },
    
	objectFitNone: {
		// -o-object-fit: none !important;
		objectFit: "none" + IMPORTANT,
	},
    
	mtN2: { marginTop: DEFAULT_MARGIN * -2 + PX_TAG + IMPORTANT },
    
	objectFitScale: {
		// -o-object-fit: scale-down !important;
		objectFit: "scale-down" + IMPORTANT,
	},
    
	mtN3: { marginTop: DEFAULT_MARGIN * -3 + PX_TAG + IMPORTANT },
    
	mtN4: { marginTop: DEFAULT_MARGIN * -4 + PX_TAG + IMPORTANT },
    
	/**************************************************
   * Opacity
   *************************************************/
	opacity0: { opacity: "0.00" + IMPORTANT },
    
	mtN5: { marginTop: DEFAULT_MARGIN * -5 + PX_TAG + IMPORTANT },
    
	opacity10: { opacity: "0.10" + IMPORTANT },
    
	mx0: { marginLeft: 0 + IMPORTANT, marginRight: 0 + IMPORTANT },
    
	opacity100: { opacity: "1.00" + IMPORTANT },
    
	mx1: {
		marginLeft : DEFAULT_MARGIN * 1 + PX_TAG + IMPORTANT,
		marginRight: DEFAULT_MARGIN * 1 + PX_TAG + IMPORTANT,
	},
    
	opacity15: { opacity: "0.15" + IMPORTANT },
    
	mx2: {
		marginLeft : DEFAULT_MARGIN * 2 + PX_TAG + IMPORTANT,
		marginRight: DEFAULT_MARGIN * 2 + PX_TAG + IMPORTANT,
	},
    
	opacity20: { opacity: "0.20" + IMPORTANT },
    
	mx3: {
		marginLeft : DEFAULT_MARGIN * 3 + PX_TAG + IMPORTANT,
		marginRight: DEFAULT_MARGIN * 3 + PX_TAG + IMPORTANT,
	},
    
	opacity25: { opacity: "0.25" + IMPORTANT },
    
	mx4: {
		marginLeft : DEFAULT_MARGIN * 4 + PX_TAG + IMPORTANT,
		marginRight: DEFAULT_MARGIN * 4 + PX_TAG + IMPORTANT,
	},
    
	opacity30: { opacity: "0.30" + IMPORTANT },
    
	mx5: {
		marginLeft : DEFAULT_MARGIN * 5 + PX_TAG + IMPORTANT,
		marginRight: DEFAULT_MARGIN * 5 + PX_TAG + IMPORTANT,
	},
    
	opacity35: { opacity: "0.35" + IMPORTANT },
    
	mxAuto: { marginLeft: "auto" + IMPORTANT, marginRight: "auto" + IMPORTANT },
    
	opacity40: { opacity: "0.40" + IMPORTANT },
    
	mxN1: {
		marginLeft : DEFAULT_MARGIN * -1 + PX_TAG + IMPORTANT,
		marginRight: DEFAULT_MARGIN * -1 + PX_TAG + IMPORTANT,
	},
    
	opacity45: { opacity: "0.45" + IMPORTANT },
    
	mxN2: {
		marginLeft : DEFAULT_MARGIN * -2 + PX_TAG + IMPORTANT,
		marginRight: DEFAULT_MARGIN * -2 + PX_TAG + IMPORTANT,
	},
    
	opacity5: { opacity: "0.05" + IMPORTANT },
    
	mxN3: {
		marginLeft : DEFAULT_MARGIN * -3 + PX_TAG + IMPORTANT,
		marginRight: DEFAULT_MARGIN * -3 + PX_TAG + IMPORTANT,
	},
    
	opacity50: { opacity: "0.50" + IMPORTANT },
    
	mxN4: {
		marginLeft : DEFAULT_MARGIN * -4 + PX_TAG + IMPORTANT,
		marginRight: DEFAULT_MARGIN * -4 + PX_TAG + IMPORTANT,
	},
    
	opacity55: { opacity: "0.55" + IMPORTANT },
    
	mxN5: {
		marginLeft : DEFAULT_MARGIN * -5 + PX_TAG + IMPORTANT,
		marginRight: DEFAULT_MARGIN * -5 + PX_TAG + IMPORTANT,
	},
    
	opacity60: { opacity: "0.60" + IMPORTANT },
    
	my0: { marginBottom: 0 + IMPORTANT, marginTop: 0 + IMPORTANT },
    
	opacity65: { opacity: "0.65" + IMPORTANT },
    
	my1: {
		marginBottom: DEFAULT_MARGIN * 1 + PX_TAG + IMPORTANT,
		marginTop   : DEFAULT_MARGIN * 1 + PX_TAG + IMPORTANT,
	},
    
	opacity70: { opacity: "0.70" + IMPORTANT },
    
	my2: {
		marginBottom: DEFAULT_MARGIN * 2 + PX_TAG + IMPORTANT,
		marginTop   : DEFAULT_MARGIN * 2 + PX_TAG + IMPORTANT,
	},
    
	opacity75: { opacity: "0.75" + IMPORTANT },
    
	my3: {
		marginBottom: DEFAULT_MARGIN * 3 + PX_TAG + IMPORTANT,
		marginTop   : DEFAULT_MARGIN * 3 + PX_TAG + IMPORTANT,
	},
    
	opacity80: { opacity: "0.80" + IMPORTANT },
    
	my4: {
		marginBottom: DEFAULT_MARGIN * 4 + PX_TAG + IMPORTANT,
		marginTop   : DEFAULT_MARGIN * 4 + PX_TAG + IMPORTANT,
	},
    
	opacity85: { opacity: "0.85" + IMPORTANT },
    
	my5: {
		marginBottom: DEFAULT_MARGIN * 5 + PX_TAG + IMPORTANT,
		marginTop   : DEFAULT_MARGIN * 5 + PX_TAG + IMPORTANT,
	},
    
	opacity90: { opacity: "0.90" + IMPORTANT },
    
	myAuto: { marginBottom: "auto" + IMPORTANT, marginTop: "auto" + IMPORTANT },
    
	opacity95: { opacity: "0.95" + IMPORTANT },
    
	myN1: {
		marginBottom: DEFAULT_MARGIN * -1 + PX_TAG + IMPORTANT,
		marginTop   : DEFAULT_MARGIN * -1 + PX_TAG + IMPORTANT,
	},
    
	myN2: {
		marginBottom: DEFAULT_MARGIN * -2 + PX_TAG + IMPORTANT,
		marginTop   : DEFAULT_MARGIN * -2 + PX_TAG + IMPORTANT,
	},
    
	/**************************************************
   * Overflow
   *************************************************/
	overflowAuto: { overflow: "auto" + IMPORTANT },
    
	myN3: {
		marginBottom: DEFAULT_MARGIN * -3 + PX_TAG + IMPORTANT,
		marginTop   : DEFAULT_MARGIN * -3 + PX_TAG + IMPORTANT,
	},
    
	overflowHidden: { overflow: "hidden" + IMPORTANT },
    
	myN4: {
		marginBottom: DEFAULT_MARGIN * -4 + PX_TAG + IMPORTANT,
		marginTop   : DEFAULT_MARGIN * -4 + PX_TAG + IMPORTANT,
	},
    
	overflowScroll: { overflow: "scroll" + IMPORTANT },
    
	myN5: {
		marginBottom: DEFAULT_MARGIN * -5 + PX_TAG + IMPORTANT,
		marginTop   : DEFAULT_MARGIN * -5 + PX_TAG + IMPORTANT,
	},
    
	overflowVisible: { overflow: "visible" + IMPORTANT },
    
	overflowXAuto: { overflowX: "auto" + IMPORTANT },
    
	overflowXHidden: { overflowX: "hidden" + IMPORTANT },
    
	overflowXScroll: { overflowX: "scroll" + IMPORTANT },
    
	overflowXVisible: { overflowX: "visible" + IMPORTANT },
    
	overflowYAuto: { overflowY: "auto" + IMPORTANT },
    
	textBlack: { color: "#000000" },
    
	overflowYHidden: { overflowY: "hidden" + IMPORTANT },
    
	textBlack50: { color: "#00000077" },
    
	overflowYScroll: { overflowY: "scroll" + IMPORTANT },
    
	textError: { color: theme.palette.error.main },
    
	overflowYVisible: { overflowY: "visible" + IMPORTANT },
    
	textErrorDark: { color: theme.palette.error.dark },
    
	/**************************************************
   * Spacing
   *************************************************/
	/*-------------------------------------------------
   * Padding
   *-----------------------------------------------*/
	p0: { padding: 0 + PX_TAG + IMPORTANT },

	textErrorLight: { color: theme.palette.error.light },

	textInfo: { color: theme.palette.info.main },

	p1: { padding: DEFAULT_PADDING + PX_TAG + IMPORTANT },

	textInfoDark: { color: theme.palette.info.dark },
    
	p2: { padding: DEFAULT_PADDING * 2 + PX_TAG + IMPORTANT },
    
	textInfoLight: { color: theme.palette.info.light },
    
	p3: { padding: DEFAULT_PADDING * 3 + PX_TAG + IMPORTANT },
    
	p4: { padding: DEFAULT_PADDING * 4 + PX_TAG + IMPORTANT },
    
	textOpacity100: { opacity: "1" },
    
	p5: { padding: DEFAULT_PADDING * 5 + PX_TAG + IMPORTANT },
    
	textOpacity25: { opacity: "0.25" },
    
	pb0: { paddingBottom: 0 + PX_TAG + IMPORTANT },
    
	pb1: { paddingBottom: DEFAULT_PADDING + PX_TAG + IMPORTANT },

	/**************************************************
   * Color
   *************************************************/
	textPrimary: { color: theme.palette.primary.main },
    
	pb2: { paddingBottom: DEFAULT_PADDING * 2 + PX_TAG + IMPORTANT },
    
	textPrimaryDark: { color: theme.palette.primary.dark },

	pb3: { paddingBottom: DEFAULT_PADDING * 3 + PX_TAG + IMPORTANT },
    
	pb4: { paddingBottom: DEFAULT_PADDING * 4 + PX_TAG + IMPORTANT },

	textPrimaryLight: { color: theme.palette.primary.light },

	pb5: { paddingBottom: DEFAULT_PADDING * 5 + PX_TAG + IMPORTANT },

	peAuto: { pointerEvents: "auto" + IMPORTANT },

	textSecondary: { color: theme.palette.secondary.main },

	peNone: { pointerEvents: "none" + IMPORTANT },

	pl0: { paddingLeft: 0 + PX_TAG + IMPORTANT },

	textSecondaryDark: { color: theme.palette.secondary.dark },

	pl1: { paddingLeft: DEFAULT_PADDING + PX_TAG + IMPORTANT },

	pl2: { paddingLeft: DEFAULT_PADDING * 2 + PX_TAG + IMPORTANT },

	textSecondaryLight: { color: theme.palette.secondary.light },

	pl3: { paddingLeft: DEFAULT_PADDING * 3 + PX_TAG + IMPORTANT },

	pl4: { paddingLeft: DEFAULT_PADDING * 4 + PX_TAG + IMPORTANT },

	textSuccess: { color: theme.palette.success.main },

	pl5: { paddingLeft: DEFAULT_PADDING * 5 + PX_TAG + IMPORTANT },

	textSuccessDark: { color: theme.palette.success.dark },

	positionAbsolute: { position: "absolute" + IMPORTANT },

	positionFixed: { position: "fixed" + IMPORTANT },

	textSuccessLight: { color: theme.palette.success.light },

	positionRelative: { position: "relative" + IMPORTANT },

	/**************************************************
   * Position
   *************************************************/
	positionStatic: { position: "static" + IMPORTANT },
    
	textWarning: { color: theme.palette.warning.main },
    
	/**
   * @todo multiple value for same property
   */
	positionSticky: {
		// -- position: "-webkit-sticky" + IMPORTANT, 
		position: "sticky" + IMPORTANT
	},
    
	textWarningDark: { color: theme.palette.warning.dark },
    
	pr0: { paddingRight: 0 + PX_TAG + IMPORTANT },
    
	textWarningLight: { color: theme.palette.warning.light },

	pr1: { paddingRight: DEFAULT_PADDING + PX_TAG + IMPORTANT },
    
	// -- textLight: {},
	// -- textDark: {},
	// -- textBody: {},
	// -- textMuted: {},
	// -- textBodySecondary: {},
	// -- textBodyTertiary: {},
	// -- textBodyEmphasis: {},
	textReset: { color: "inherit" + IMPORTANT },
    
	pr2: { paddingRight: DEFAULT_PADDING * 2 + PX_TAG + IMPORTANT },
    
	textWhite: { color: "#ffffff" },
    
	pr3: { paddingRight: DEFAULT_PADDING * 3 + PX_TAG + IMPORTANT },
    
	pr4: { paddingRight: DEFAULT_PADDING * 4 + PX_TAG + IMPORTANT },
    
	textWhite50: { color: "#ffffff77" },
    
	pr5: { paddingRight: DEFAULT_PADDING * 5 + PX_TAG + IMPORTANT },
    
	pt0: { paddingTop: 0 + PX_TAG + IMPORTANT },
    
	textOpacity50: { opacity: "0.5" },
    
	pt1: { paddingTop: DEFAULT_PADDING + PX_TAG + IMPORTANT },
    
	pt2: { paddingTop: DEFAULT_PADDING * 2 + PX_TAG + IMPORTANT },
    
	textOpacity75: { opacity: "0.75" },
    
	pt3: { paddingTop: DEFAULT_PADDING * 3 + PX_TAG + IMPORTANT },
    
	pt4: { paddingTop: DEFAULT_PADDING * 4 + PX_TAG + IMPORTANT },
    
	pt5: { paddingTop: DEFAULT_PADDING * 5 + PX_TAG + IMPORTANT },
    
	px0: { paddingLeft: 0 + PX_TAG + IMPORTANT, paddingRight: 0 + PX_TAG + IMPORTANT },
    
	px1: {
		paddingLeft : DEFAULT_PADDING * 1 + PX_TAG + IMPORTANT,
		paddingRight: DEFAULT_PADDING * 1 + PX_TAG + IMPORTANT,
	},
    
	px2: {
		paddingLeft : DEFAULT_PADDING * 2 + PX_TAG + IMPORTANT,
		paddingRight: DEFAULT_PADDING * 2 + PX_TAG + IMPORTANT,
	},
    
	px3: {
		paddingLeft : DEFAULT_PADDING * 3 + PX_TAG + IMPORTANT,
		paddingRight: DEFAULT_PADDING * 3 + PX_TAG + IMPORTANT,
	},
    
	px4: {
		paddingLeft : DEFAULT_PADDING * 4 + PX_TAG + IMPORTANT,
		paddingRight: DEFAULT_PADDING * 4 + PX_TAG + IMPORTANT,
	},
    
	px5: {
		paddingLeft : DEFAULT_PADDING * 5 + PX_TAG + IMPORTANT,
		paddingRight: DEFAULT_PADDING * 5 + PX_TAG + IMPORTANT,
	},
    
	py0: { paddingBottom: 0 + PX_TAG + IMPORTANT, paddingTop: 0 + PX_TAG + IMPORTANT },
    
	py1: {
		paddingBottom: DEFAULT_PADDING * 1 + PX_TAG + IMPORTANT,
		paddingTop   : DEFAULT_PADDING * 1 + PX_TAG + IMPORTANT,
	},
    
	py2: {
		paddingBottom: DEFAULT_PADDING * 2 + PX_TAG + IMPORTANT,
		paddingTop   : DEFAULT_PADDING * 2 + PX_TAG + IMPORTANT,
	},
    
	py3: {
		paddingBottom: DEFAULT_PADDING * 3 + PX_TAG + IMPORTANT,
		paddingTop   : DEFAULT_PADDING * 3 + PX_TAG + IMPORTANT,
	},
    
	py4: {
		paddingBottom: DEFAULT_PADDING * 4 + PX_TAG + IMPORTANT,
		paddingTop   : DEFAULT_PADDING * 4 + PX_TAG + IMPORTANT,
	},
    
	py5: {
		paddingBottom: DEFAULT_PADDING * 5 + PX_TAG + IMPORTANT,
		paddingTop   : DEFAULT_PADDING * 5 + PX_TAG + IMPORTANT,
	},
    
	rowGap0: { rowGap: "0" + IMPORTANT },
    
	rowGap1: { rowGap: DEFAULT_SPACING * 1 + IMPORTANT },
    
	rowGap2: { rowGap: DEFAULT_SPACING * 2 + IMPORTANT },
    
	rowGap3: { rowGap: DEFAULT_SPACING * 3 + IMPORTANT },
    
	rowGap4: { rowGap: DEFAULT_SPACING * 4 + IMPORTANT },
    
	rowGap5: { rowGap: DEFAULT_SPACING * 5 + IMPORTANT },
    
	/**************************************************
   * Shadows
   * @todo change color using theme
   *************************************************/
	shadow: { boxShadow: "0 0.5rem 1rem rgba(" + DEFAULT_SHADOW_COLOR_RGB + ", 0.15)" + IMPORTANT },
    
	/**************************************************
   * Interactions
   *************************************************/
	userSelectAll: {
		// -webkit-user-select: all !important;
		// -moz-user-select: all !important;
		userSelect: "all" + IMPORTANT,
	},
    
	shadowLg: { boxShadow: "0 1rem 3rem rgba(" + DEFAULT_SHADOW_COLOR_RGB + ", 0.175)" + IMPORTANT },
    
	shadowNone: { boxShadow: "none" + IMPORTANT },
    
	userSelectAuto: {
		// -webkit-user-select: auto !important;
		// -moz-user-select: auto !important;
		userSelect: "auto" + IMPORTANT,
	},
    
	shadowSm: { boxShadow: "0 0.125rem 0.25rem rgba(" + DEFAULT_SHADOW_COLOR_RGB + ", 0.075)" + IMPORTANT },
    
	start0: { left: "0" + IMPORTANT },
    
	userSelectNone: {
		// -webkit-user-select: none !important;
		// -moz-user-select: none !important;
		userSelect: "none" + IMPORTANT,
	},
    
	start100: { left: "100%" + IMPORTANT },
    
	start50: { left: "50%" + IMPORTANT },
    
	stickyBottom: {
		bottom  : "0",
		// -- position: "-webkit-sticky",
		position: "sticky",
		zIndex  : "1020",
	},
    
	stickyTop: {
		// -- position: "-webkit-sticky",
		position: "sticky",
		top     : "0",
		zIndex  : "1020",
	},
    
	textBreak: { wordBreak: "break-word" + IMPORTANT, wordWrap: "break-word" + IMPORTANT },
    
	textCapitalize: { textTransform: "capitalize" + IMPORTANT },
    
	textCenter: { textAlign: "center" + IMPORTANT },
    
	textDecorationLineThrough: { textDecoration: "line-through" + IMPORTANT },
    
	textDecorationNone: { textDecoration: "none" + IMPORTANT },
    
	textDecorationUnderline: { textDecoration: "underline" + IMPORTANT },
    
	textEnd: { textAlign: "right" + IMPORTANT },
    
	textJustify: { textAlign: "justify" + IMPORTANT },
    
	textLowercase: { textTransform: "lowercase" + IMPORTANT },
    
	textNowrap: { whiteSpace: "nowrap" + IMPORTANT },
    
	/**************************************************
   * Text
   *************************************************/
	textStart: { textAlign: "left" + IMPORTANT },
    
	textTruncate: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
    
	textUppercase: { textTransform: "uppercase" + IMPORTANT },
    
	textWeightBold: { fontWeight: "bold" },
    
	textWeightLight: { fontWeight: "lighter" },
    
	textWeightNormal: { fontWeight: "normal" },
    
	textWrap: { whiteSpace: "normal" + IMPORTANT },
    
	top0: { top: "0" + IMPORTANT },
    
	top100: { top: "100%" + IMPORTANT },
    
	top50: { top: "50%" + IMPORTANT },
    
	translateMiddle: { transform: "translate(-50%, -50%)" + IMPORTANT },
    
	translateMiddleX: { transform: "translateX(-50%)" + IMPORTANT },
    
	translateMiddleY: { transform: "translateY(-50%)" + IMPORTANT },
    
	vh100: { height: "100vh" + IMPORTANT },
    
	vh25: { height: "25vh" + IMPORTANT },
    
	vh50: { height: "50vh" + IMPORTANT },
    
	vh75: { height: "75vh" + IMPORTANT },
    
	/**************************************************
   * Visibility
   *************************************************/
	visible: { visibility: "visible" + IMPORTANT },
    
	vw100: { width: "100vw" + IMPORTANT },
    
	vw25: { width: "25vw" + IMPORTANT },
    
	vw50: { width: "50vw" + IMPORTANT },
    
	vw75: { width: "75vw" + IMPORTANT },
    
	w100: { width: "100%" + IMPORTANT },
    
	/*-------------------------------------------------
   * Width
   *-----------------------------------------------*/
	w25: { width: "25%" + IMPORTANT },
    
	w50: { width: "50%" + IMPORTANT },
    
	w75: { width: "75%" + IMPORTANT },
    
	wAuto: { width: "auto" + IMPORTANT },
    
	z0: { zIndex: "0" + IMPORTANT },
    
	z1: { zIndex: "1" + IMPORTANT },
    
	z2: { zIndex: "2" + IMPORTANT },
    
	z3 : { zIndex: "3" + IMPORTANT },
	/**************************************************
   * zindex
   *************************************************/
	zN1: { zIndex: "-1" + IMPORTANT },
};
