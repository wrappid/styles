import { theme } from "../theme/theme";

const DEFAULT_BORDER_WIDTH = 1;
const DEFAULT_BORDER_STYLE = "solid";
const DEFAULT_BORDER_COLOR = "black";
const DEFAULT_BORDER =
  DEFAULT_BORDER_WIDTH + "px " + DEFAULT_BORDER_STYLE + " " + DEFAULT_BORDER_COLOR; /* + IMPORTANT*/

const DEFAULT_SHADOW_COLOR = "black";
const DEFAULT_SHADOW_COLOR_RGB = "0,0,0";

export const IMPORTANT = " !important";
export const DEFAULT_MARGIN = 8;
export const DEFAULT_PADDING = 8;
export const DEFAULT_SPACING = 8;

export const defaultUtilityStyles = {
	/**************************************************
   * Alignment
   *************************************************/
	alignItemsStart   : { display: "flex", alignItems: "flex-start" + IMPORTANT },
	alignItemsEnd     : { display: "flex", alignItems: "flex-end" + IMPORTANT },
	alignItemsCenter  : { display: "flex", alignItems: "center" + IMPORTANT },
	alignItemsBaseline: { display: "flex", alignItems: "baseline" + IMPORTANT },
	alignItemsStretch : { display: "flex", alignItems: "stretch" + IMPORTANT },

	alignContentStart  : { display: "flex", alignContent: "flex-start" + IMPORTANT },
	alignContentEnd    : { display: "flex", alignContent: "flex-end" + IMPORTANT },
	alignContentCenter : { display: "flex", alignContent: "center" + IMPORTANT },
	alignContentBetween: { display: "flex", alignContent: "space-between" + IMPORTANT },
	alignContentAround : { display: "flex", alignContent: "space-around" + IMPORTANT },
	alignContentStretch: { display: "flex", alignContent: "stretch" + IMPORTANT },

	alignSelfAuto    : { display: "flex", alignSelf: "auto" + IMPORTANT },
	alignSelfStart   : { display: "flex", alignSelf: "flex-start" + IMPORTANT },
	alignSelfEnd     : { display: "flex", alignSelf: "flex-end" + IMPORTANT },
	alignSelfCenter  : { display: "flex", alignSelf: "center" + IMPORTANT },
	alignSelfBaseline: { display: "flex", alignSelf: "baseline" + IMPORTANT },
	alignSelfStretch : { display: "flex", alignSelf: "stretch" + IMPORTANT },

	justifyContentCenter      : { display: "flex", justifyContent: "center" + IMPORTANT },
	justifyContentFlexStart   : { display: "flex", justifyContent: "flex-start" + IMPORTANT },
	justifyContentFlexEnd     : { display: "flex", justifyContent: "flex-end" + IMPORTANT },
	justifyContentSpaceBetween: { display: "flex", justifyContent: "space-between" + IMPORTANT },
	justifyContentSpaceAround : { display: "flex", justifyContent: "space-around" + IMPORTANT },
	justifyContentSpaceEvenly : { display: "flex", justifyContent: "space-evenly" + IMPORTANT },

	/**************************************************
   * Background
   *************************************************/
	bgPrimary     : { backgroundColor: theme.palette.primary.main },
	bgPrimaryLight: { backgroundColor: theme.palette.primary.light },
	bgPrimaryDark : { backgroundColor: theme.palette.primary.dark },

	bgSecondary     : { backgroundColor: theme.palette.secondary.main },
	bgSecondaryLight: { backgroundColor: theme.palette.secondary.light },
	bgSecondaryDark : { backgroundColor: theme.palette.secondary.dark },

	bgSuccess     : { backgroundColor: theme.palette.success.main },
	bgSuccessLight: { backgroundColor: theme.palette.success.light },
	bgSuccessDark : { backgroundColor: theme.palette.success.dark },

	bgError     : { backgroundColor: theme.palette.error.main },
	bgErrorLight: { backgroundColor: theme.palette.error.light },
	bgErrorDark : { backgroundColor: theme.palette.error.dark },

	bgWarning     : { backgroundColor: theme.palette.warning.main },
	bgWarningLight: { backgroundColor: theme.palette.warning.light },
	bgWarningDark : { backgroundColor: theme.palette.warning.dark },

	bgInfo     : { backgroundColor: theme.palette.info.main },
	bgInfoLight: { backgroundColor: theme.palette.info.light },
	bgInfoDark : { backgroundColor: theme.palette.info.dark },

	bgBlack      : { backgroundColor: "black" },
	bgWhite      : { backgroundColor: "white" },
	bgTransparent: { backgroundColor: "transparent" },

	/**************************************************
   * Border
   *************************************************/
	border : { borderWidth: 2, borderColor: "red" },
	border0: { border: "none" },

	borderTop : { border: "unset", borderTop: DEFAULT_BORDER },
	borderTop0: { borderTop: "none" },

	borderEnd   : { border: "unset", borderRight: DEFAULT_BORDER },
	borderEnd0  : { borderRight: "none" },
	borderRight : { border: "unset", borderRight: DEFAULT_BORDER },
	borderRight0: { borderRight: "none" },

	borderBottom : { border: "unset", borderBottom: DEFAULT_BORDER },
	borderBottom0: { borderBottom: "none" },

	borderStart : { border: "unset", borderLeft: DEFAULT_BORDER },
	borderStart0: { borderLeft: "none" },
	borderLeft  : { border: "unset", borderLeft: DEFAULT_BORDER },
	borderLeft0 : { borderLeft: "none" },

	borderPrimary     : { borderColor: theme.palette.primary.main },
	borderPrimaryLight: { borderColor: theme.palette.primary.light },
	borderPrimaryDark : { borderColor: theme.palette.primary.dark },

	borderSecondary     : { borderColor: theme.palette.secondary.main },
	borderSecondaryLight: { borderColor: theme.palette.secondary.light },
	borderSecondaryDark : { borderColor: theme.palette.secondary.dark },

	borderSuccess     : { borderColor: theme.palette.success.main },
	borderSuccessLight: { borderColor: theme.palette.success.light },
	borderSuccessDark : { borderColor: theme.palette.success.dark },

	borderError     : { borderColor: theme.palette.error.main },
	borderErrorLight: { borderColor: theme.palette.error.light },
	borderErrorDark : { borderColor: theme.palette.error.dark },

	borderWarning     : { borderColor: theme.palette.warning.main },
	borderWarningLight: { borderColor: theme.palette.warning.light },
	borderWarningDark : { borderColor: theme.palette.warning.dark },

	borderInfo     : { borderColor: theme.palette.info.main },
	borderInfoLight: { borderColor: theme.palette.info.light },
	borderInfoDark : { borderColor: theme.palette.info.dark },

	borderBlack: { borderColor: "black" },
	borderWhite: { borderColor: "white" },

	border1: { borderWidth: DEFAULT_BORDER_WIDTH },
	border2: { borderWidth: DEFAULT_BORDER_WIDTH * 2 },
	border3: { borderWidth: DEFAULT_BORDER_WIDTH * 3 },
	border4: { borderWidth: DEFAULT_BORDER_WIDTH * 4 },
	border5: { borderWidth: DEFAULT_BORDER_WIDTH * 5 },

	/**************************************************
   * Color
   *************************************************/
	textPrimary     : { color: theme.palette.primary.main },
	textPrimaryLight: { color: theme.palette.primary.light },
	textPrimaryDark : { color: theme.palette.primary.dark },

	textSecondary     : { color: theme.palette.secondary.main },
	textSecondaryLight: { color: theme.palette.secondary.light },
	textSecondaryDark : { color: theme.palette.secondary.dark },

	textSuccess     : { color: theme.palette.success.main },
	textSuccessLight: { color: theme.palette.success.light },
	textSuccessDark : { color: theme.palette.success.dark },

	textError     : { color: theme.palette.error.main },
	textErrorLight: { color: theme.palette.error.light },
	textErrorDark : { color: theme.palette.error.dark },

	textWarning     : { color: theme.palette.warning.main },
	textWarningLight: { color: theme.palette.warning.light },
	textWarningDark : { color: theme.palette.warning.dark },

	textInfo     : { color: theme.palette.info.main },
	textInfoLight: { color: theme.palette.info.light },
	textInfoDark : { color: theme.palette.info.dark },

	textBlack  : { color: "#000000" },
	textBlack50: { color: "#00000077" },
	textWhite  : { color: "#ffffff" },
	textWhite50: { color: "#ffffff77" },

	// textLight: {},
	// textDark: {},
	// textBody: {},
	// textMuted: {},
	// textBodySecondary: {},
	// textBodyTertiary: {},
	// textBodyEmphasis: {},

	textReset: { color: "inherit" + IMPORTANT },

	textOpacity25 : { opacity: "0.25" },
	textOpacity50 : { opacity: "0.5" },
	textOpacity75 : { opacity: "0.75" },
	textOpacity100: { opacity: "1" },

	// textPrimaryEmphasis: {},
	// textSecondaryEmphasis: {},
	// textSuccessEmphasis: {},
	// textInfoEmphasis: {},
	// textWarningEmphasis: {},
	// textDangerEmphasis: {},
	// textLightEmphasis: {},
	// textDarkEmphasis: {},

	/**************************************************
   * Display
   *************************************************/
	displayInline     : { display: "inline" + IMPORTANT },
	displayInlineBlock: { display: "inline-block" + IMPORTANT },
	displayBlock      : { display: "block" + IMPORTANT },
	displayGrid       : { display: "grid" + IMPORTANT },
	displayTable      : { display: "table" + IMPORTANT },
	displayTableRow   : { display: "table-row" + IMPORTANT },
	displayTableCell  : { display: "table-cell" + IMPORTANT },
	displayFlex       : { display: "flex" + IMPORTANT },
	displayInlineFlex : { display: "inline-flex" + IMPORTANT },
	displayNone       : { display: "none" + IMPORTANT },

	/**************************************************
   * Flex
   *************************************************/
	flexDirectionRow          : { flexDirection: "row" + IMPORTANT },
	flexDirectionColumn       : { flexDirection: "column" + IMPORTANT },
	flexDirectionRowReverse   : { flexDirection: "row-reverse" + IMPORTANT },
	flexDirectionColumnReverse: { flexDirection: "column-reverse" + IMPORTANT },
	flexFill                  : { flex: "1 1 auto" + IMPORTANT },
	flexGrow0                 : { flexGrow: "0" + IMPORTANT },
	flexGrow1                 : { flexGrow: "1" + IMPORTANT },
	flexShrink0               : { flexShrink: "0" + IMPORTANT },
	flexShrink1               : { flexShrink: "1" + IMPORTANT },
	flexWrapWrap              : { flexWrap: "wrap" + IMPORTANT },
	flexWrapNoWrap            : { flexWrap: "nowrap" + IMPORTANT },
	flexWrapWrapReverse       : { flexWrap: "wrap-reverse" + IMPORTANT },

	/**************************************************
   * Float
   *************************************************/
	floatStart: { float: "left" + IMPORTANT },
	floatEnd  : { float: "right" + IMPORTANT },
	floatNone : { float: "none" + IMPORTANT },

	/**************************************************
   * Interactions
   *************************************************/
	userSelectAll: {
		// -webkit-user-select: all !important;
		// -moz-user-select: all !important;
		userSelect: "all" + IMPORTANT,
	},
	userSelectAuto: {
		// -webkit-user-select: auto !important;
		// -moz-user-select: auto !important;
		userSelect: "auto" + IMPORTANT,
	},
	userSelectNone: {
		// -webkit-user-select: none !important;
		// -moz-user-select: none !important;
		userSelect: "none" + IMPORTANT,
	},

	peNone: { pointerEvents: "none" + IMPORTANT },
	peAuto: { pointerEvents: "auto" + IMPORTANT },

	/**************************************************
   * Object Fit
   *************************************************/
	objectFitContain: {
		// -o-object-fit: contain !important;
		objectFit: "contain" + IMPORTANT,
	},

	objectFitCover: {
		// -o-object-fit: cover !important;
		objectFit: "cover" + IMPORTANT,
	},

	objectFitFill: {
		// -o-object-fit: fill !important;
		objectFit: "fill" + IMPORTANT,
	},

	objectFitScale: {
		// -o-object-fit: scale-down !important;
		objectFit: "scale-down" + IMPORTANT,
	},

	objectFitNone: {
		// -o-object-fit: none !important;
		objectFit: "none" + IMPORTANT,
	},

	/**************************************************
   * Opacity
   *************************************************/
	opacity0  : { opacity: "0.00" + IMPORTANT },
	opacity5  : { opacity: "0.05" + IMPORTANT },
	opacity10 : { opacity: "0.10" + IMPORTANT },
	opacity15 : { opacity: "0.15" + IMPORTANT },
	opacity20 : { opacity: "0.20" + IMPORTANT },
	opacity25 : { opacity: "0.25" + IMPORTANT },
	opacity30 : { opacity: "0.30" + IMPORTANT },
	opacity35 : { opacity: "0.35" + IMPORTANT },
	opacity40 : { opacity: "0.40" + IMPORTANT },
	opacity45 : { opacity: "0.45" + IMPORTANT },
	opacity50 : { opacity: "0.50" + IMPORTANT },
	opacity55 : { opacity: "0.55" + IMPORTANT },
	opacity60 : { opacity: "0.60" + IMPORTANT },
	opacity65 : { opacity: "0.65" + IMPORTANT },
	opacity70 : { opacity: "0.70" + IMPORTANT },
	opacity75 : { opacity: "0.75" + IMPORTANT },
	opacity80 : { opacity: "0.80" + IMPORTANT },
	opacity85 : { opacity: "0.85" + IMPORTANT },
	opacity90 : { opacity: "0.90" + IMPORTANT },
	opacity95 : { opacity: "0.95" + IMPORTANT },
	opacity100: { opacity: "1.00" + IMPORTANT },

	/**************************************************
   * Overflow
   *************************************************/
	overflowAuto    : { overflow: "auto" + IMPORTANT },
	overflowHidden  : { overflow: "hidden" + IMPORTANT },
	overflowVisible : { overflow: "visible" + IMPORTANT },
	overflowScroll  : { overflow: "scroll" + IMPORTANT },
	overflowXAuto   : { overflowX: "auto" + IMPORTANT },
	overflowXHidden : { overflowX: "hidden" + IMPORTANT },
	overflowXVisible: { overflowX: "visible" + IMPORTANT },
	overflowXScroll : { overflowX: "scroll" + IMPORTANT },
	overflowYAuto   : { overflowY: "auto" + IMPORTANT },
	overflowYHidden : { overflowY: "hidden" + IMPORTANT },
	overflowYVisible: { overflowY: "visible" + IMPORTANT },
	overflowYScroll : { overflowY: "scroll" + IMPORTANT },

	/**************************************************
   * Position
   *************************************************/
	positionStatic  : { position: "static" + IMPORTANT },
	positionRelative: { position: "relative" + IMPORTANT },
	positionAbsolute: { position: "absolute" + IMPORTANT },
	positionFixed   : { position: "fixed" + IMPORTANT },
	/**
   * @todo multiple value for same property
   */
	positionSticky  : { position: "-webkit-sticky" + IMPORTANT, position: "sticky" + IMPORTANT },

	top0  : { top: "0" + IMPORTANT },
	top50 : { top: "50%" + IMPORTANT },
	top100: { top: "100%" + IMPORTANT },

	bottom0  : { bottom: "0" + IMPORTANT },
	bottom50 : { bottom: "50%" + IMPORTANT },
	bottom100: { bottom: "100%" + IMPORTANT },

	start0  : { left: "0" + IMPORTANT },
	start50 : { left: "50%" + IMPORTANT },
	start100: { left: "100%" + IMPORTANT },

	end0  : { right: "0" + IMPORTANT },
	end50 : { right: "50%" + IMPORTANT },
	end100: { right: "100%" + IMPORTANT },

	translateMiddle : { transform: "translate(-50%, -50%)" + IMPORTANT },
	translateMiddleX: { transform: "translateX(-50%)" + IMPORTANT },
	translateMiddleY: { transform: "translateY(-50%)" + IMPORTANT },

	fixedTop: {
		position: "fixed",
		top     : "0",
		right   : "0",
		left    : "0",
		zIndex  : "1030",
	},

	fixedBottom: {
		position: "fixed",
		right   : "0",
		bottom  : "0",
		left    : "0",
		zIndex  : "1030",
	},

	stickyTop: {
		position: "-webkit-sticky",
		position: "sticky",
		top     : "0",
		zIndex  : "1020",
	},

	stickyBottom: {
		position: "-webkit-sticky",
		position: "sticky",
		bottom  : "0",
		zIndex  : "1020",
	},

	/**************************************************
   * Shadows
   * @todo change color using theme
   *************************************************/
	shadow    : { boxShadow: "0 0.5rem 1rem rgba(" + DEFAULT_SHADOW_COLOR_RGB + ", 0.15)" + IMPORTANT },
	shadowSm  : { boxShadow: "0 0.125rem 0.25rem rgba(" + DEFAULT_SHADOW_COLOR_RGB + ", 0.075)" + IMPORTANT },
	shadowLg  : { boxShadow: "0 1rem 3rem rgba(" + DEFAULT_SHADOW_COLOR_RGB + ", 0.175)" + IMPORTANT },
	shadowNone: { boxShadow: "none" + IMPORTANT },

	/**************************************************
   * Sizing
   *************************************************/
	/*-------------------------------------------------
   * Width
   *-----------------------------------------------*/
	w25  : { width: "25%" + IMPORTANT },
	w50  : { width: "50%" + IMPORTANT },
	w75  : { width: "75%" + IMPORTANT },
	w100 : { width: "100%" + IMPORTANT },
	wAuto: { width: "auto" + IMPORTANT },

	maxW25 : { maxWidth: "25%" + IMPORTANT },
	maxW50 : { maxWidth: "50%" + IMPORTANT },
	maxW75 : { maxWidth: "75%" + IMPORTANT },
	maxW100: { maxWidth: "100%" + IMPORTANT },

	minW25 : { minWidth: "25%" + IMPORTANT },
	minW50 : { minWidth: "50%" + IMPORTANT },
	minW75 : { minWidth: "75%" + IMPORTANT },
	minW100: { minWidth: "100%" + IMPORTANT },

	vw25 : { width: "25vw" + IMPORTANT },
	vw50 : { width: "50vw" + IMPORTANT },
	vw75 : { width: "75vw" + IMPORTANT },
	vw100: { width: "100vw" + IMPORTANT },

	maxVw25 : { maxWidth: "25vw" + IMPORTANT },
	maxVw50 : { maxWidth: "50vw" + IMPORTANT },
	maxVw75 : { maxWidth: "75vw" + IMPORTANT },
	maxVw100: { maxWidth: "100vw" + IMPORTANT },

	minVw25 : { minWidth: "25vw" + IMPORTANT },
	minVw50 : { minWidth: "50vw" + IMPORTANT },
	minVw75 : { minWidth: "75vw" + IMPORTANT },
	minVw100: { minWidth: "100vw" + IMPORTANT },

	/*-------------------------------------------------
   * Height
   *-----------------------------------------------*/
	h25  : { height: "25%" + IMPORTANT },
	h50  : { height: "50%" + IMPORTANT },
	h75  : { height: "75%" + IMPORTANT },
	h100 : { height: "100%" + IMPORTANT },
	hAuto: { height: "auto" + IMPORTANT },

	maxH25 : { maxHeight: "25%" + IMPORTANT },
	maxH50 : { maxHeight: "50%" + IMPORTANT },
	maxH75 : { maxHeight: "75%" + IMPORTANT },
	maxH100: { maxHeight: "100%" + IMPORTANT },

	minH25 : { minHeight: "25%" + IMPORTANT },
	minH50 : { minHeight: "50%" + IMPORTANT },
	minH75 : { minHeight: "75%" + IMPORTANT },
	minH100: { minHeight: "100%" + IMPORTANT },

	vh25 : { height: "25vh" + IMPORTANT },
	vh50 : { height: "50vh" + IMPORTANT },
	vh75 : { height: "75vh" + IMPORTANT },
	vh100: { height: "100vh" + IMPORTANT },

	maxVh25 : { maxHeight: "25vh" + IMPORTANT },
	maxVh50 : { maxHeight: "50vh" + IMPORTANT },
	maxVh75 : { maxHeight: "75vh" + IMPORTANT },
	maxVh100: { maxHeight: "100vh" + IMPORTANT },

	minVh25 : { minHeight: "25vh" + IMPORTANT },
	minVh50 : { minHeight: "50vh" + IMPORTANT },
	minVh75 : { minHeight: "75vh" + IMPORTANT },
	minVh100: { minHeight: "100vh" + IMPORTANT },

	/**************************************************
   * Spacing
   *************************************************/
	/*-------------------------------------------------
   * Padding
   *-----------------------------------------------*/
	p0: { padding: 0 + IMPORTANT },
	p1: { padding: DEFAULT_PADDING + IMPORTANT },
	p2: { padding: DEFAULT_PADDING * 2 + IMPORTANT },
	p3: { padding: DEFAULT_PADDING * 3 + IMPORTANT },
	p4: { padding: DEFAULT_PADDING * 4 + IMPORTANT },
	p5: { padding: DEFAULT_PADDING * 5 + IMPORTANT },

	pt0: { paddingTop: 0 + IMPORTANT },
	pt1: { paddingTop: DEFAULT_PADDING + IMPORTANT },
	pt2: { paddingTop: DEFAULT_PADDING * 2 + IMPORTANT },
	pt3: { paddingTop: DEFAULT_PADDING * 3 + IMPORTANT },
	pt4: { paddingTop: DEFAULT_PADDING * 4 + IMPORTANT },
	pt5: { paddingTop: DEFAULT_PADDING * 5 + IMPORTANT },

	pr0: { paddingRight: 0 + IMPORTANT },
	pr1: { paddingRight: DEFAULT_PADDING + IMPORTANT },
	pr2: { paddingRight: DEFAULT_PADDING * 2 + IMPORTANT },
	pr3: { paddingRight: DEFAULT_PADDING * 3 + IMPORTANT },
	pr4: { paddingRight: DEFAULT_PADDING * 4 + IMPORTANT },
	pr5: { paddingRight: DEFAULT_PADDING * 5 + IMPORTANT },

	pb0: { paddingBottom: 0 + IMPORTANT },
	pb1: { paddingBottom: DEFAULT_PADDING + IMPORTANT },
	pb2: { paddingBottom: DEFAULT_PADDING * 2 + IMPORTANT },
	pb3: { paddingBottom: DEFAULT_PADDING * 3 + IMPORTANT },
	pb4: { paddingBottom: DEFAULT_PADDING * 4 + IMPORTANT },
	pb5: { paddingBottom: DEFAULT_PADDING * 5 + IMPORTANT },

	pl0: { paddingLeft: 0 + IMPORTANT },
	pl1: { paddingLeft: DEFAULT_PADDING + IMPORTANT },
	pl2: { paddingLeft: DEFAULT_PADDING * 2 + IMPORTANT },
	pl3: { paddingLeft: DEFAULT_PADDING * 3 + IMPORTANT },
	pl4: { paddingLeft: DEFAULT_PADDING * 4 + IMPORTANT },
	pl5: { paddingLeft: DEFAULT_PADDING * 5 + IMPORTANT },

	px0: { paddingLeft: 0 + IMPORTANT, paddingRight: 0 + IMPORTANT },
	px1: {
		paddingLeft : DEFAULT_PADDING * 1 + IMPORTANT,
		paddingRight: DEFAULT_PADDING * 1 + IMPORTANT,
	},
	px2: {
		paddingLeft : DEFAULT_PADDING * 2 + IMPORTANT,
		paddingRight: DEFAULT_PADDING * 2 + IMPORTANT,
	},
	px3: {
		paddingLeft : DEFAULT_PADDING * 3 + IMPORTANT,
		paddingRight: DEFAULT_PADDING * 3 + IMPORTANT,
	},
	px4: {
		paddingLeft : DEFAULT_PADDING * 4 + IMPORTANT,
		paddingRight: DEFAULT_PADDING * 4 + IMPORTANT,
	},
	px5: {
		paddingLeft : DEFAULT_PADDING * 5 + IMPORTANT,
		paddingRight: DEFAULT_PADDING * 5 + IMPORTANT,
	},

	py0: { paddingTop: 0 + IMPORTANT, paddingBottom: 0 + IMPORTANT },
	py1: {
		paddingTop   : DEFAULT_PADDING * 1 + IMPORTANT,
		paddingBottom: DEFAULT_PADDING * 1 + IMPORTANT,
	},
	py2: {
		paddingTop   : DEFAULT_PADDING * 2 + IMPORTANT,
		paddingBottom: DEFAULT_PADDING * 2 + IMPORTANT,
	},
	py3: {
		paddingTop   : DEFAULT_PADDING * 3 + IMPORTANT,
		paddingBottom: DEFAULT_PADDING * 3 + IMPORTANT,
	},
	py4: {
		paddingTop   : DEFAULT_PADDING * 4 + IMPORTANT,
		paddingBottom: DEFAULT_PADDING * 4 + IMPORTANT,
	},
	py5: {
		paddingTop   : DEFAULT_PADDING * 5 + IMPORTANT,
		paddingBottom: DEFAULT_PADDING * 5 + IMPORTANT,
	},

	/*-------------------------------------------------
   * Margin
   *-----------------------------------------------*/
	m0   : { margin: 0 + IMPORTANT },
	m1   : { margin: DEFAULT_MARGIN + IMPORTANT },
	m2   : { margin: DEFAULT_MARGIN * 2 + IMPORTANT },
	m3   : { margin: DEFAULT_MARGIN * 3 + IMPORTANT },
	m4   : { margin: DEFAULT_MARGIN * 4 + IMPORTANT },
	m5   : { margin: DEFAULT_MARGIN * 5 + IMPORTANT },
	mAuto: { margin: "auto" + IMPORTANT },

	mt0   : { marginTop: 0 + IMPORTANT },
	mt1   : { marginTop: DEFAULT_MARGIN + IMPORTANT },
	mt2   : { marginTop: DEFAULT_MARGIN * 2 + IMPORTANT },
	mt3   : { marginTop: DEFAULT_MARGIN * 3 + IMPORTANT },
	mt4   : { marginTop: DEFAULT_MARGIN * 4 + IMPORTANT },
	mt5   : { marginTop: DEFAULT_MARGIN * 5 + IMPORTANT },
	mtAuto: { marginTop: "auto" + IMPORTANT },

	mr0   : { marginRight: 0 + IMPORTANT },
	mr1   : { marginRight: DEFAULT_MARGIN + IMPORTANT },
	mr2   : { marginRight: DEFAULT_MARGIN * 2 + IMPORTANT },
	mr3   : { marginRight: DEFAULT_MARGIN * 3 + IMPORTANT },
	mr4   : { marginRight: DEFAULT_MARGIN * 4 + IMPORTANT },
	mr5   : { marginRight: DEFAULT_MARGIN * 5 + IMPORTANT },
	mrAuto: { marginRight: "auto" + IMPORTANT },

	mb0   : { marginBottom: 0 + IMPORTANT },
	mb1   : { marginBottom: DEFAULT_MARGIN + IMPORTANT },
	mb2   : { marginBottom: DEFAULT_MARGIN * 2 + IMPORTANT },
	mb3   : { marginBottom: DEFAULT_MARGIN * 3 + IMPORTANT },
	mb4   : { marginBottom: DEFAULT_MARGIN * 4 + IMPORTANT },
	mb5   : { marginBottom: DEFAULT_MARGIN * 5 + IMPORTANT },
	mbAuto: { marginBottom: "auto" + IMPORTANT },

	ml0   : { marginLeft: 0 + IMPORTANT },
	ml1   : { marginLeft: DEFAULT_MARGIN + IMPORTANT },
	ml2   : { marginLeft: DEFAULT_MARGIN * 2 + IMPORTANT },
	ml3   : { marginLeft: DEFAULT_MARGIN * 3 + IMPORTANT },
	ml4   : { marginLeft: DEFAULT_MARGIN * 4 + IMPORTANT },
	ml5   : { marginLeft: DEFAULT_MARGIN * 5 + IMPORTANT },
	mlAuto: { marginLeft: "auto" + IMPORTANT },

	mx0   : { marginLeft: 0 + IMPORTANT, marginRight: 0 + IMPORTANT },
	mx1   : { marginLeft: DEFAULT_MARGIN * 1 + IMPORTANT, marginRight: DEFAULT_MARGIN * 1 + IMPORTANT },
	mx2   : { marginLeft: DEFAULT_MARGIN * 2 + IMPORTANT, marginRight: DEFAULT_MARGIN * 2 + IMPORTANT },
	mx3   : { marginLeft: DEFAULT_MARGIN * 3 + IMPORTANT, marginRight: DEFAULT_MARGIN * 3 + IMPORTANT },
	mx4   : { marginLeft: DEFAULT_MARGIN * 4 + IMPORTANT, marginRight: DEFAULT_MARGIN * 4 + IMPORTANT },
	mx5   : { marginLeft: DEFAULT_MARGIN * 5 + IMPORTANT, marginRight: DEFAULT_MARGIN * 5 + IMPORTANT },
	mxAuto: { marginLeft: "auto" + IMPORTANT, marginRight: "auto" + IMPORTANT },

	my0   : { marginTop: 0 + IMPORTANT, marginBottom: 0 + IMPORTANT },
	my1   : { marginTop: DEFAULT_MARGIN * 1 + IMPORTANT, marginBottom: DEFAULT_MARGIN * 1 + IMPORTANT },
	my2   : { marginTop: DEFAULT_MARGIN * 2 + IMPORTANT, marginBottom: DEFAULT_MARGIN * 2 + IMPORTANT },
	my3   : { marginTop: DEFAULT_MARGIN * 3 + IMPORTANT, marginBottom: DEFAULT_MARGIN * 3 + IMPORTANT },
	my4   : { marginTop: DEFAULT_MARGIN * 4 + IMPORTANT, marginBottom: DEFAULT_MARGIN * 4 + IMPORTANT },
	my5   : { marginTop: DEFAULT_MARGIN * 5 + IMPORTANT, marginBottom: DEFAULT_MARGIN * 5 + IMPORTANT },
	myAuto: { marginTop: "auto" + IMPORTANT, marginBottom: "auto" + IMPORTANT },

	mN1: { margin: DEFAULT_MARGIN * -1 + IMPORTANT },
	mN2: { margin: DEFAULT_MARGIN * -2 + IMPORTANT },
	mN3: { margin: DEFAULT_MARGIN * -3 + IMPORTANT },
	mN4: { margin: DEFAULT_MARGIN * -4 + IMPORTANT },
	mN5: { margin: DEFAULT_MARGIN * -5 + IMPORTANT },

	mtN1: { marginTop: DEFAULT_MARGIN * -1 + IMPORTANT },
	mtN2: { marginTop: DEFAULT_MARGIN * -2 + IMPORTANT },
	mtN3: { marginTop: DEFAULT_MARGIN * -3 + IMPORTANT },
	mtN4: { marginTop: DEFAULT_MARGIN * -4 + IMPORTANT },
	mtN5: { marginTop: DEFAULT_MARGIN * -5 + IMPORTANT },

	mrN1: { marginRight: DEFAULT_MARGIN * -1 + IMPORTANT },
	mrN2: { marginRight: DEFAULT_MARGIN * -2 + IMPORTANT },
	mrN3: { marginRight: DEFAULT_MARGIN * -3 + IMPORTANT },
	mrN4: { marginRight: DEFAULT_MARGIN * -4 + IMPORTANT },
	mrN5: { marginRight: DEFAULT_MARGIN * -5 + IMPORTANT },

	mbN1: { marginBottom: DEFAULT_MARGIN * -1 + IMPORTANT },
	mbN2: { marginBottom: DEFAULT_MARGIN * -2 + IMPORTANT },
	mbN3: { marginBottom: DEFAULT_MARGIN * -3 + IMPORTANT },
	mbN4: { marginBottom: DEFAULT_MARGIN * -4 + IMPORTANT },
	mbN5: { marginBottom: DEFAULT_MARGIN * -5 + IMPORTANT },

	mlN1: { marginLeft: DEFAULT_MARGIN * -1 + IMPORTANT },
	mlN2: { marginLeft: DEFAULT_MARGIN * -2 + IMPORTANT },
	mlN3: { marginLeft: DEFAULT_MARGIN * -3 + IMPORTANT },
	mlN4: { marginLeft: DEFAULT_MARGIN * -4 + IMPORTANT },
	mlN5: { marginLeft: DEFAULT_MARGIN * -5 + IMPORTANT },

	mxN1: {
		marginLeft : DEFAULT_MARGIN * -1 + IMPORTANT,
		marginRight: DEFAULT_MARGIN * -1 + IMPORTANT,
	},
	mxN2: {
		marginLeft : DEFAULT_MARGIN * -2 + IMPORTANT,
		marginRight: DEFAULT_MARGIN * -2 + IMPORTANT,
	},
	mxN3: {
		marginLeft : DEFAULT_MARGIN * -3 + IMPORTANT,
		marginRight: DEFAULT_MARGIN * -3 + IMPORTANT,
	},
	mxN4: {
		marginLeft : DEFAULT_MARGIN * -4 + IMPORTANT,
		marginRight: DEFAULT_MARGIN * -4 + IMPORTANT,
	},
	mxN5: {
		marginLeft : DEFAULT_MARGIN * -5 + IMPORTANT,
		marginRight: DEFAULT_MARGIN * -5 + IMPORTANT,
	},

	myN1: {
		marginTop   : DEFAULT_MARGIN * -1 + IMPORTANT,
		marginBottom: DEFAULT_MARGIN * -1 + IMPORTANT,
	},
	myN2: {
		marginTop   : DEFAULT_MARGIN * -2 + IMPORTANT,
		marginBottom: DEFAULT_MARGIN * -2 + IMPORTANT,
	},
	myN3: {
		marginTop   : DEFAULT_MARGIN * -3 + IMPORTANT,
		marginBottom: DEFAULT_MARGIN * -3 + IMPORTANT,
	},
	myN4: {
		marginTop   : DEFAULT_MARGIN * -4 + IMPORTANT,
		marginBottom: DEFAULT_MARGIN * -4 + IMPORTANT,
	},
	myN5: {
		marginTop   : DEFAULT_MARGIN * -5 + IMPORTANT,
		marginBottom: DEFAULT_MARGIN * -5 + IMPORTANT,
	},

	/*-------------------------------------------------
   * Gap
   *-----------------------------------------------*/
	gap0: { gap: "0" + IMPORTANT },
	gap1: { gap: DEFAULT_SPACING * 1 + IMPORTANT },
	gap2: { gap: DEFAULT_SPACING * 2 + IMPORTANT },
	gap3: { gap: DEFAULT_SPACING * 3 + IMPORTANT },
	gap4: { gap: DEFAULT_SPACING * 4 + IMPORTANT },
	gap5: { gap: DEFAULT_SPACING * 5 + IMPORTANT },

	rowGap0: { rowGap: "0" + IMPORTANT },
	rowGap1: { rowGap: DEFAULT_SPACING * 1 + IMPORTANT },
	rowGap2: { rowGap: DEFAULT_SPACING * 2 + IMPORTANT },
	rowGap3: { rowGap: DEFAULT_SPACING * 3 + IMPORTANT },
	rowGap4: { rowGap: DEFAULT_SPACING * 4 + IMPORTANT },
	rowGap5: { rowGap: DEFAULT_SPACING * 5 + IMPORTANT },

	// -moz-column-gap: 0 !important;
	colGap0: { columnGap: "0" + IMPORTANT },
	colGap1: { columnGap: DEFAULT_SPACING * 1 + IMPORTANT },
	colGap2: { columnGap: DEFAULT_SPACING * 2 + IMPORTANT },
	colGap3: { columnGap: DEFAULT_SPACING * 3 + IMPORTANT },
	colGap4: { columnGap: DEFAULT_SPACING * 4 + IMPORTANT },
	colGap5: { columnGap: DEFAULT_SPACING * 5 + IMPORTANT },

	/**************************************************
   * Text
   *************************************************/
	textStart  : { textAlign: "left" + IMPORTANT },
	textEnd    : { textAlign: "right" + IMPORTANT },
	textCenter : { textAlign: "center" + IMPORTANT },
	textJustify: { textAlign: "justify" + IMPORTANT },

	textWeightBold  : { fontWeight: "bold" },
	textWeightLight : { fontWeight: "lighter" },
	textWeightNormal: { fontWeight: "normal" },

	textDecorationNone       : { textDecoration: "none" + IMPORTANT },
	textDecorationUnderline  : { textDecoration: "underline" + IMPORTANT },
	textDecorationLineThrough: { textDecoration: "line-through" + IMPORTANT },

	textLowercase : { textTransform: "lowercase" + IMPORTANT },
	textUppercase : { textTransform: "uppercase" + IMPORTANT },
	textCapitalize: { textTransform: "capitalize" + IMPORTANT },

	textWrap    : { whiteSpace: "normal" + IMPORTANT },
	textNowrap  : { whiteSpace: "nowrap" + IMPORTANT },
	textBreak   : { wordWrap: "break-word" + IMPORTANT, wordBreak: "break-word" + IMPORTANT },
	textTruncate: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },

	/**************************************************
   * Vertical Align
   *************************************************/
	alignBaseline  : { verticalAlign: "baseline" + IMPORTANT },
	alignTop       : { verticalAlign: "top" + IMPORTANT },
	alignMiddle    : { verticalAlign: "middle" + IMPORTANT },
	alignBottom    : { verticalAlign: "bottom" + IMPORTANT },
	alignTextBottom: { verticalAlign: "text-bottom" + IMPORTANT },
	alignTextTop   : { verticalAlign: "text-top" + IMPORTANT },

	/**************************************************
   * Visibility
   *************************************************/
	visible  : { visibility: "visible" + IMPORTANT },
	invisible: { visibility: "hidden" + IMPORTANT },

	/**************************************************
   * zindex
   *************************************************/
	zN1: { zIndex: "-1" + IMPORTANT },
	z0 : { zIndex: "0" + IMPORTANT },
	z1 : { zIndex: "1" + IMPORTANT },
	z2 : { zIndex: "2" + IMPORTANT },
	z3 : { zIndex: "3" + IMPORTANT },
};
