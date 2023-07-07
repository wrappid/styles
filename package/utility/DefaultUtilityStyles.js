import { getConfigurationObject } from "../helper/helper";
import { theme } from "../theme/theme";

const DEFAULT_BORDER_WIDTH = 1;
const DEFAULT_BORDER_STYLE = "solid";
const DEFAULT_BORDER_COLOR = "black";
const DEFAULT_BORDER =
  DEFAULT_BORDER_WIDTH + "px " + DEFAULT_BORDER_STYLE + " " + DEFAULT_BORDER_COLOR;

// -- const DEFAULT_SHADOW_COLOR = "black";
const DEFAULT_SHADOW_COLOR_RGB = "0,0,0";

const configuration = getConfigurationObject();

export const IMPORTANT = (configuration?.wrappid?.platform === "web") ? " !important" : "";
export const PX_TAG = (configuration?.wrappid?.platform === "web") ? "px" : "";
export const DEFAULT_MARGIN = 8;
export const DEFAULT_PADDING = 8;
export const DEFAULT_SPACING = 8;

export const defaultUtilityStyles = {
    
	alignContentAround: { alignContent: "space-around" + IMPORTANT, display: "flex" + IMPORTANT },
    
	alignContentBetween: { alignContent: "space-between" + IMPORTANT, display: "flex" + IMPORTANT },
    
	alignContentCenter: { alignContent: "center" + IMPORTANT, display: "flex" + IMPORTANT },
    
	alignContentEnd: { alignContent: "flex-end" + IMPORTANT, display: "flex" + IMPORTANT },
    
	alignContentStart: { alignContent: "flex-start" + IMPORTANT, display: "flex" + IMPORTANT },
    
	alignContentStretch: { alignContent: "stretch" + IMPORTANT, display: "flex" + IMPORTANT },
    
	alignItemsBaseline: { alignItems: "baseline" + IMPORTANT, display: "flex" + IMPORTANT },
    
	alignItemsCenter: { alignItems: "center" + IMPORTANT, display: "flex" + IMPORTANT },
    
	alignItemsEnd    : { alignItems: "flex-end" + IMPORTANT, display: "flex" + IMPORTANT },
	/**************************************************
   * Alignment
   *************************************************/
	alignItemsStart  : { alignItems: "flex-start" + IMPORTANT, display: "flex" + IMPORTANT },
	alignItemsStretch: { alignItems: "stretch" + IMPORTANT, display: "flex" + IMPORTANT },

	alignSelfAuto    : { alignSelf: "auto" + IMPORTANT, display: "flex" + IMPORTANT },
	alignSelfBaseline: { alignSelf: "baseline" + IMPORTANT, display: "flex" + IMPORTANT },
	alignSelfCenter  : { alignSelf: "center" + IMPORTANT, display: "flex" + IMPORTANT },
	alignSelfEnd     : { alignSelf: "flex-end" + IMPORTANT, display: "flex" + IMPORTANT },
	alignSelfStart   : { alignSelf: "flex-start" + IMPORTANT, display: "flex" + IMPORTANT },
	alignSelfStretch : { alignSelf: "stretch" + IMPORTANT, display: "flex" + IMPORTANT },
    
	bgBlack  : { backgroundColor: "black" + IMPORTANT },
	bgDefault: { backgroundColor: theme.palette.background.default + IMPORTANT },
    
	bgError: { backgroundColor: theme.palette.error.main + IMPORTANT },
    
	bgErrorDark: { backgroundColor: theme.palette.error.dark + IMPORTANT },
    
	bgErrorLight: { backgroundColor: theme.palette.error.light + IMPORTANT },
    
	bgInfo: { backgroundColor: theme.palette.info.main + IMPORTANT },
    
	bgInfoDark: { backgroundColor: theme.palette.info.dark + IMPORTANT },
    
	bgInfoLight  : { backgroundColor: theme.palette.info.light + IMPORTANT },
	/**************************************************
   * Background
   *************************************************/
	bgPrimary    : { backgroundColor: theme.palette.primary.main + IMPORTANT },
	bgPrimaryDark: { backgroundColor: theme.palette.primary.dark + IMPORTANT },

	bgPrimaryLight : { backgroundColor: theme.palette.primary.light + IMPORTANT },
	bgSecondary    : { backgroundColor: theme.palette.secondary.main + IMPORTANT },
	bgSecondaryDark: { backgroundColor: theme.palette.secondary.dark + IMPORTANT },

	bgSecondaryLight: { backgroundColor: theme.palette.secondary.light + IMPORTANT },
	bgSuccess       : { backgroundColor: theme.palette.success.main + IMPORTANT },
	bgSuccessDark   : { backgroundColor: theme.palette.success.dark + IMPORTANT },

	bgSuccessLight: { backgroundColor: theme.palette.success.light + IMPORTANT },
	bgTransparent : { backgroundColor: "transparent" + IMPORTANT },
	bgWarning     : { backgroundColor: theme.palette.warning.main + IMPORTANT },

	bgWarningDark : { backgroundColor: theme.palette.warning.dark + IMPORTANT },
	bgWarningLight: { backgroundColor: theme.palette.warning.light + IMPORTANT },
	bgWhite       : { backgroundColor: "white" + IMPORTANT + IMPORTANT },

	/**************************************************
   * Border
   *************************************************/
	border: { border: DEFAULT_BORDER + IMPORTANT },
    
	border0: { border: "none" + IMPORTANT },
    
	border1: { borderWidth: DEFAULT_BORDER_WIDTH + IMPORTANT },
    
	border2: { borderWidth: DEFAULT_BORDER_WIDTH * 2 + IMPORTANT },
    
	border3: { borderWidth: DEFAULT_BORDER_WIDTH * 3 + IMPORTANT },
    
	border4: { borderWidth: DEFAULT_BORDER_WIDTH * 4 + IMPORTANT },
    
	border5    : { borderWidth: DEFAULT_BORDER_WIDTH * 5 + IMPORTANT },
	borderBlack: { borderColor: "black" + IMPORTANT },

	borderBottom : { border: "unset", borderBottom: DEFAULT_BORDER + IMPORTANT },
	borderBottom0: { borderBottom: "none" + IMPORTANT },

	borderDashed: { borderStyle: "dashed" + IMPORTANT },
	borderDotted: { borderStyle: "dotted" + IMPORTANT },
	borderDouble: { borderStyle: "double" + IMPORTANT },
	borderEnd   : { border: "unset", borderRight: DEFAULT_BORDER + IMPORTANT },

	borderEnd0 : { borderRight: "none" + IMPORTANT },
	borderError: { borderColor: theme.palette.error.main + IMPORTANT },

	borderErrorDark : { borderColor: theme.palette.error.dark + IMPORTANT },
	borderErrorLight: { borderColor: theme.palette.error.light + IMPORTANT },
	borderGroove    : { borderStyle: "groove" + IMPORTANT },
	borderHidden    : { borderStyle: "hidden" + IMPORTANT },

	borderInfo     : { borderColor: theme.palette.info.main + IMPORTANT },
	borderInfoDark : { borderColor: theme.palette.info.dark + IMPORTANT },
	borderInfoLight: { borderColor: theme.palette.info.light + IMPORTANT },

	borderInset: { borderStyle: "inset" + IMPORTANT },
	borderLeft : { border: "unset", borderLeft: DEFAULT_BORDER + IMPORTANT },
	borderLeft0: { borderLeft: "none" + IMPORTANT },

	borderNone   : { borderStyle: "none" + IMPORTANT },
	borderOutset : { borderStyle: "outset" + IMPORTANT },
	borderPrimary: { borderColor: theme.palette.primary.main + IMPORTANT },

	borderPrimaryDark : { borderColor: theme.palette.primary.dark + IMPORTANT },
	borderPrimaryLight: { borderColor: theme.palette.primary.light + IMPORTANT },
	borderRidge       : { borderStyle: "ridge" + IMPORTANT },

	borderRight    : { border: "unset", borderRight: DEFAULT_BORDER + IMPORTANT },
	borderRight0   : { borderRight: "none" + IMPORTANT },
	borderSecondary: { borderColor: theme.palette.secondary.main + IMPORTANT },

	borderSecondaryDark : { borderColor: theme.palette.secondary.dark + IMPORTANT },
	borderSecondaryLight: { borderColor: theme.palette.secondary.light + IMPORTANT },
	borderSolid         : { borderStyle: "solid" + IMPORTANT },

	borderStart : { border: "unset", borderLeft: DEFAULT_BORDER + IMPORTANT },
	borderStart0: { borderLeft: "none" + IMPORTANT },

	borderSuccess     : { borderColor: theme.palette.success.main + IMPORTANT },
	borderSuccessDark : { borderColor: theme.palette.success.dark + IMPORTANT },
	borderSuccessLight: { borderColor: theme.palette.success.light + IMPORTANT },
	borderTop         : { border: "unset", borderTop: DEFAULT_BORDER + IMPORTANT },
	borderTop0        : { borderTop: "none" + IMPORTANT },
	borderWarning     : { borderColor: theme.palette.warning.main + IMPORTANT },
	borderWarningDark : { borderColor: theme.palette.warning.dark + IMPORTANT },
	borderWarningLight: { borderColor: theme.palette.warning.light + IMPORTANT },
	borderWhite       : { borderColor: "white" + IMPORTANT },
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
		bottom  : "0" + IMPORTANT,
		left    : "0" + IMPORTANT,
		position: "fixed" + IMPORTANT,
		right   : "0" + IMPORTANT,
		zIndex  : "1030" + IMPORTANT,
	},
    
	fixedTop: {
		left    : "0" + IMPORTANT,
		position: "fixed" + IMPORTANT,
		right   : "0" + IMPORTANT,
		top     : "0" + IMPORTANT,
		zIndex  : "1030" + IMPORTANT,
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
    
	justifyContentCenter: { display: "flex" + IMPORTANT, justifyContent: "center" + IMPORTANT },
    
	justifyContentFlexEnd: { display: "flex" + IMPORTANT, justifyContent: "flex-end" + IMPORTANT },
    
	justifyContentFlexStart: { display: "flex" + IMPORTANT, justifyContent: "flex-start" + IMPORTANT },
    
	justifyContentSpaceAround: { display: "flex" + IMPORTANT, justifyContent: "space-around" + IMPORTANT },
    
	justifyContentSpaceBetween: { display: "flex" + IMPORTANT, justifyContent: "space-between" + IMPORTANT },
    
	justifyContentSpaceEvenly: { display: "flex" + IMPORTANT, justifyContent: "space-evenly" + IMPORTANT },
    
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
    
	cursorAllScroll: { cursor: "all-scroll " + IMPORTANT },
    
	minH25: { minHeight: "25%" + IMPORTANT },
    
	cursorAuto: { cursor: "auto" + IMPORTANT },
    
	minH50: { minHeight: "50%" + IMPORTANT },
    
	cursorCell: { cursor: "cell " + IMPORTANT },
    
	minH75: { minHeight: "75%" + IMPORTANT },
    
	cursorColResize: { cursor: "col-resize " + IMPORTANT },
    
	minVh100: { minHeight: "100vh" + IMPORTANT },
    
	minVh25: { minHeight: "25vh" + IMPORTANT },
    
	cursorContextMenu: { cursor: "context-menu" + IMPORTANT },
    
	minVh50: { minHeight: "50vh" + IMPORTANT },
    
	minVh75: { minHeight: "75vh" + IMPORTANT },
    
	cursorCopy: { cursor: "copy " + IMPORTANT },
    
	minVw100: { minWidth: "100vw" + IMPORTANT },
    
	cursorCrosshair: { cursor: "crosshair " + IMPORTANT },
    
	minVw25: { minWidth: "25vw" + IMPORTANT },
    
	cursorDefault: { cursor: "default " + IMPORTANT },
    
	minVw50: { minWidth: "50vw" + IMPORTANT },
    
	cursorEResize: { cursor: "e-resize " + IMPORTANT },
    
	minVw75: { minWidth: "75vw" + IMPORTANT },
    
	cursorEwResize: { cursor: "ew-resize " + IMPORTANT },
    
	minW100: { minWidth: "100%" + IMPORTANT },
    
	cursorGrab: { cursor: "grab " + IMPORTANT },
    
	minW25: { minWidth: "25%" + IMPORTANT },
    
	cursorGrabbing: { cursor: "grabbing " + IMPORTANT },
    
	minW50: { minWidth: "50%" + IMPORTANT },
    
	cursorHelp: { cursor: "help " + IMPORTANT },
    
	minW75: { minWidth: "75%" + IMPORTANT },
    
	cursorMove: { cursor: "move " + IMPORTANT },
    
	ml0: { marginLeft: 0 + IMPORTANT },
    
	cursorNResize: { cursor: "n-resize " + IMPORTANT },
    
	ml1: { marginLeft: DEFAULT_MARGIN + PX_TAG + IMPORTANT },
    
	cursorNeResize: { cursor: "ne-resize " + IMPORTANT },
    
	ml2: { marginLeft: DEFAULT_MARGIN * 2 + PX_TAG + IMPORTANT },
    
	cursorNeswResize: { cursor: "nesw-resize" + IMPORTANT },
    
	ml3: { marginLeft: DEFAULT_MARGIN * 3 + PX_TAG + IMPORTANT },
    
	cursorInitial: { cursor: "initial " + IMPORTANT },
    
	ml4: { marginLeft: DEFAULT_MARGIN * 4 + PX_TAG + IMPORTANT },
    
	cursorNoDrop: { cursor: "no-drop " + IMPORTANT },
    
	ml5: { marginLeft: DEFAULT_MARGIN * 5 + PX_TAG + IMPORTANT },
    
	cursorInherit: { cursor: "inherit" + IMPORTANT },
    
	mlAuto: { marginLeft: "auto" + IMPORTANT },
    
	cursorNone: { cursor: "none " + IMPORTANT },
    
	mlN1: { marginLeft: DEFAULT_MARGIN * -1 + PX_TAG + IMPORTANT },
    
	cursorNotAllowed: { cursor: "not-allowed " + IMPORTANT },
    
	mlN2: { marginLeft: DEFAULT_MARGIN * -2 + PX_TAG + IMPORTANT },
    
	cursorNsResize: { cursor: "ns-resize " + IMPORTANT },
    
	mlN3: { marginLeft: DEFAULT_MARGIN * -3 + PX_TAG + IMPORTANT },
    
	cursorNwResize: { cursor: "nw-resize " + IMPORTANT },
    
	mlN4: { marginLeft: DEFAULT_MARGIN * -4 + PX_TAG + IMPORTANT },
    
	cursorNwseResize: { cursor: "nwse-resize" + IMPORTANT },
    
	mlN5: { marginLeft: DEFAULT_MARGIN * -5 + PX_TAG + IMPORTANT },
    
	cursorPointer: { cursor: "pointer " + IMPORTANT },
    
	mr0: { marginRight: 0 + IMPORTANT },
    
	cursorProgress: { cursor: "progress " + IMPORTANT },
    
	mr1: { marginRight: DEFAULT_MARGIN + PX_TAG + IMPORTANT },
    
	cursorRowResize: { cursor: "row-resize " + IMPORTANT },
    
	mr2: { marginRight: DEFAULT_MARGIN * 2 + PX_TAG + IMPORTANT },
    
	cursorSResize: { cursor: "s-resize " + IMPORTANT },
    
	mr3: { marginRight: DEFAULT_MARGIN * 3 + PX_TAG + IMPORTANT },
    
	cursorSeResize: { cursor: "se-resize " + IMPORTANT },
    
	mr4: { marginRight: DEFAULT_MARGIN * 4 + PX_TAG + IMPORTANT },
    
	cursorSwResize: { cursor: "sw-resize " + IMPORTANT },
    
	mr5: { marginRight: DEFAULT_MARGIN * 5 + PX_TAG + IMPORTANT },
    
	cursorText: { cursor: "text " + IMPORTANT },
    
	mrAuto: { marginRight: "auto" + IMPORTANT },
    
	cursorURL: { cursor: "URL " + IMPORTANT },
    
	mrN1: { marginRight: DEFAULT_MARGIN * -1 + PX_TAG + IMPORTANT },
    
	cursorVerticalText: { cursor: "vertical-text" + IMPORTANT },
    
	mrN2: { marginRight: DEFAULT_MARGIN * -2 + PX_TAG + IMPORTANT },
    
	cursorWResize: { cursor: "w-resize " + IMPORTANT },
    
	mrN3: { marginRight: DEFAULT_MARGIN * -3 + PX_TAG + IMPORTANT },
    
	cursorWait: { cursor: "wait " + IMPORTANT },
    
	mrN4: { marginRight: DEFAULT_MARGIN * -4 + PX_TAG + IMPORTANT },
    
	cursorZoomIn: { cursor: "zoom-in" + IMPORTANT },
    
	mrN5: { marginRight: DEFAULT_MARGIN * -5 + PX_TAG + IMPORTANT },
    
	cursorZoomOut: { cursor: "zoom-out" + IMPORTANT },
    
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
    
	textBlack: { color: "#000000" + IMPORTANT },
    
	overflowYHidden: { overflowY: "hidden" + IMPORTANT },
    
	textBlack50: { color: "#00000077" + IMPORTANT },
    
	overflowYScroll: { overflowY: "scroll" + IMPORTANT },
    
	textError: { color: theme.palette.error.main + IMPORTANT },
    
	overflowYVisible: { overflowY: "visible" + IMPORTANT },
    
	textErrorDark: { color: theme.palette.error.dark + IMPORTANT },
    
	/**************************************************
   * Spacing
   *************************************************/
	/*-------------------------------------------------
   * Padding
   *-----------------------------------------------*/
	p0: { padding: 0 + PX_TAG + IMPORTANT },

	textErrorLight: { color: theme.palette.error.light + IMPORTANT },

	textInfo: { color: theme.palette.info.main + IMPORTANT },

	p1: { padding: DEFAULT_PADDING + PX_TAG + IMPORTANT },

	textInfoDark: { color: theme.palette.info.dark + IMPORTANT },
    
	p2: { padding: DEFAULT_PADDING * 2 + PX_TAG + IMPORTANT },
    
	textInfoLight: { color: theme.palette.info.light + IMPORTANT },
    
	p3: { padding: DEFAULT_PADDING * 3 + PX_TAG + IMPORTANT },
    
	p4: { padding: DEFAULT_PADDING * 4 + PX_TAG + IMPORTANT },
    
	textOpacity100: { opacity: "1" + IMPORTANT },
    
	p5: { padding: DEFAULT_PADDING * 5 + PX_TAG + IMPORTANT },
    
	textOpacity25: { opacity: "0.25" + IMPORTANT },
    
	pb0: { paddingBottom: 0 + PX_TAG + IMPORTANT },
    
	pb1: { paddingBottom: DEFAULT_PADDING + PX_TAG + IMPORTANT },

	/**************************************************
   * Color
   *************************************************/
	textPrimary: { color: theme.palette.primary.main + IMPORTANT },
    
	pb2: { paddingBottom: DEFAULT_PADDING * 2 + PX_TAG + IMPORTANT },
    
	textPrimaryDark: { color: theme.palette.primary.dark + IMPORTANT },

	pb3: { paddingBottom: DEFAULT_PADDING * 3 + PX_TAG + IMPORTANT },
    
	pb4: { paddingBottom: DEFAULT_PADDING * 4 + PX_TAG + IMPORTANT },

	textPrimaryLight: { color: theme.palette.primary.light + IMPORTANT },

	pb5: { paddingBottom: DEFAULT_PADDING * 5 + PX_TAG + IMPORTANT },

	peAuto: { pointerEvents: "auto" + IMPORTANT },

	textSecondary: { color: theme.palette.secondary.main + IMPORTANT },

	peNone: { pointerEvents: "none" + IMPORTANT },

	pl0: { paddingLeft: 0 + PX_TAG + IMPORTANT },

	textSecondaryDark: { color: theme.palette.secondary.dark + IMPORTANT },

	pl1: { paddingLeft: DEFAULT_PADDING + PX_TAG + IMPORTANT },

	pl2: { paddingLeft: DEFAULT_PADDING * 2 + PX_TAG + IMPORTANT },

	textSecondaryLight: { color: theme.palette.secondary.light + IMPORTANT },

	pl3: { paddingLeft: DEFAULT_PADDING * 3 + PX_TAG + IMPORTANT },

	pl4: { paddingLeft: DEFAULT_PADDING * 4 + PX_TAG + IMPORTANT },

	textSuccess: { color: theme.palette.success.main + IMPORTANT },

	pl5: { paddingLeft: DEFAULT_PADDING * 5 + PX_TAG + IMPORTANT },

	textSuccessDark: { color: theme.palette.success.dark + IMPORTANT },

	positionAbsolute: { position: "absolute" + IMPORTANT },

	positionFixed: { position: "fixed" + IMPORTANT },

	textSuccessLight: { color: theme.palette.success.light + IMPORTANT },

	positionRelative: { position: "relative" + IMPORTANT },

	/**************************************************
   * Position
   *************************************************/
	positionStatic: { position: "static" + IMPORTANT },
    
	textWarning: { color: theme.palette.warning.main + IMPORTANT },
    
	/**
   * @todo multiple value for same property
   */
	positionSticky: {
		// -- position: "-webkit-sticky" + IMPORTANT, 
		position: "sticky" + IMPORTANT
	},
    
	textWarningDark: { color: theme.palette.warning.dark + IMPORTANT },
    
	pr0: { paddingRight: 0 + PX_TAG + IMPORTANT },
    
	textWarningLight: { color: theme.palette.warning.light + IMPORTANT },

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
    
	textWhite: { color: "#ffffff" + IMPORTANT },
    
	pr3: { paddingRight: DEFAULT_PADDING * 3 + PX_TAG + IMPORTANT },
    
	pr4: { paddingRight: DEFAULT_PADDING * 4 + PX_TAG + IMPORTANT },
    
	textWhite50: { color: "#ffffff77" + IMPORTANT },
    
	pr5: { paddingRight: DEFAULT_PADDING * 5 + PX_TAG + IMPORTANT },
    
	pt0: { paddingTop: 0 + PX_TAG + IMPORTANT },
    
	textOpacity50: { opacity: "0.5" + IMPORTANT },
    
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
		// -- position: "-webkit-sticky" + IMPORTANT,
		position: "sticky" + IMPORTANT,
		zIndex  : "1020" + IMPORTANT,
	},
    
	stickyTop: {
		// -- position: "-webkit-sticky" + IMPORTANT,
		position: "sticky" + IMPORTANT,
		top     : "0" + IMPORTANT,
		zIndex  : "1020" + IMPORTANT,
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
    
	textTruncate: { overflow: "hidden", textOverflow: "ellipsis" + IMPORTANT, whiteSpace: "nowrap" + IMPORTANT },
    
	textUppercase: { textTransform: "uppercase" + IMPORTANT },
    
	textWeightBold: { fontWeight: "bold" + IMPORTANT },
    
	textWeightLight: { fontWeight: "lighter" + IMPORTANT },
    
	textWeightNormal: { fontWeight: "normal" + IMPORTANT },
    
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
