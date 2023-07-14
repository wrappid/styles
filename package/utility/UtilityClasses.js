/**************************************************
 * styleClass names for Utility Styles
 *************************************************/
const UtilityClasses = {
	DEV_BORDER: "devBorder",

	/**************************************************
	 * Alignment
	 *************************************************/
	ALIGNMENT: {
		ALIGN_ITEMS_START   : "alignItemsStart",
		ALIGN_ITEMS_END     : "alignItemsEnd",
		ALIGN_ITEMS_CENTER  : "alignItemsCenter",
		ALIGN_ITEMS_BASELINE: "alignItemsBaseline",
		ALIGN_ITEMS_STRETCH : "alignItemsStretch",

		ALIGN_CONTENT_START  : "alignContentStart",
		ALIGN_CONTENT_END    : "alignContentEnd",
		ALIGN_CONTENT_CENTER : "alignContentCenter",
		ALIGN_CONTENT_BETWEEN: "alignContentBetween",
		ALIGN_CONTENT_AROUND : "alignContentAround",
		ALIGN_CONTENT_STRETCH: "alignContentStretch",

		ALIGN_SELF_AUTO    : "alignSelfAuto",
		ALIGN_SELF_START   : "alignSelfStart",
		ALIGN_SELF_END     : "alignSelfEnd",
		ALIGN_SELF_CENTER  : "alignSelfCenter",
		ALIGN_SELF_BASELINE: "alignSelfBaseline",
		ALIGN_SELF_STRETCH : "alignSelfStretch",

		JUSTIFY_CONTENT_CENTER       : "justifyContentCenter",
		JUSTIFY_CONTENT_FLEX_START   : "justifyContentFlexStart",
		JUSTIFY_CONTENT_FLEX_END     : "justifyContentFlexEnd",
		JUSTIFY_CONTENT_SPACE_BETWEEN: "justifyContentSpaceBetween",
		JUSTIFY_CONTENT_SPACE_AROUND : "justifyContentSpaceAround",
		JUSTIFY_CONTENT_SPACE_EVENLY : "justifyContentSpaceEvenly",
		SM                           : {
			ALIGN_ITEMS_START   : "smAlignItemsStart",
			ALIGN_ITEMS_END     : "smAlignItemsEnd",
			ALIGN_ITEMS_CENTER  : "smAlignItemsCenter",
			ALIGN_ITEMS_BASELINE: "smAlignItemsBaseline",
			ALIGN_ITEMS_STRETCH : "smAlignItemsStretch",

			ALIGN_CONTENT_START  : "smAlignContentStart",
			ALIGN_CONTENT_END    : "smAlignContentEnd",
			ALIGN_CONTENT_CENTER : "smAlignContentCenter",
			ALIGN_CONTENT_BETWEEN: "smAlignContentBetween",
			ALIGN_CONTENT_AROUND : "smAlignContentAround",
			ALIGN_CONTENT_STRETCH: "smAlignContentStretch",

			ALIGN_SELF_AUTO    : "smAlignSelfAuto",
			ALIGN_SELF_START   : "smAlignSelfStart",
			ALIGN_SELF_END     : "smAlignSelfEnd",
			ALIGN_SELF_CENTER  : "smAlignSelfCenter",
			ALIGN_SELF_BASELINE: "smAlignSelfBaseline",
			ALIGN_SELF_STRETCH : "smAlignSelfStretch",

			JUSTIFY_CONTENT_CENTER       : "smJustifyContentCenter",
			JUSTIFY_CONTENT_FLEX_START   : "smJustifyContentFlexStart",
			JUSTIFY_CONTENT_FLEX_END     : "smJustifyContentFlexEnd",
			JUSTIFY_CONTENT_SPACE_BETWEEN: "smJustifyContentSpaceBetween",
			JUSTIFY_CONTENT_SPACE_AROUND : "smJustifyContentSpaceAround",
			JUSTIFY_CONTENT_SPACE_EVENLY : "smJustifyContentSpaceEvenly"
		},
		MD: {
			ALIGN_ITEMS_START   : "mdAlignItemsStart",
			ALIGN_ITEMS_END     : "mdAlignItemsEnd",
			ALIGN_ITEMS_CENTER  : "mdAlignItemsCenter",
			ALIGN_ITEMS_BASELINE: "mdAlignItemsBaseline",
			ALIGN_ITEMS_STRETCH : "mdAlignItemsStretch",

			ALIGN_CONTENT_START  : "mdAlignContentStart",
			ALIGN_CONTENT_END    : "mdAlignContentEnd",
			ALIGN_CONTENT_CENTER : "mdAlignContentCenter",
			ALIGN_CONTENT_BETWEEN: "mdAlignContentBetween",
			ALIGN_CONTENT_AROUND : "mdAlignContentAround",
			ALIGN_CONTENT_STRETCH: "mdAlignContentStretch",

			ALIGN_SELF_AUTO    : "mdAlignSelfAuto",
			ALIGN_SELF_START   : "mdAlignSelfStart",
			ALIGN_SELF_END     : "mdAlignSelfEnd",
			ALIGN_SELF_CENTER  : "mdAlignSelfCenter",
			ALIGN_SELF_BASELINE: "mdAlignSelfBaseline",
			ALIGN_SELF_STRETCH : "mdAlignSelfStretch",

			JUSTIFY_CONTENT_CENTER       : "mdJustifyContentCenter",
			JUSTIFY_CONTENT_FLEX_START   : "mdJustifyContentFlexStart",
			JUSTIFY_CONTENT_FLEX_END     : "mdJustifyContentFlexEnd",
			JUSTIFY_CONTENT_SPACE_BETWEEN: "mdJustifyContentSpaceBetween",
			JUSTIFY_CONTENT_SPACE_AROUND : "mdJustifyContentSpaceAround",
			JUSTIFY_CONTENT_SPACE_EVENLY : "mdJustifyContentSpaceEvenly"
		},
		LG: {
			ALIGN_ITEMS_START   : "lgAlignItemsStart",
			ALIGN_ITEMS_END     : "lgAlignItemsEnd",
			ALIGN_ITEMS_CENTER  : "lgAlignItemsCenter",
			ALIGN_ITEMS_BASELINE: "lgAlignItemsBaseline",
			ALIGN_ITEMS_STRETCH : "lgAlignItemsStretch",

			ALIGN_CONTENT_START  : "lgAlignContentStart",
			ALIGN_CONTENT_END    : "lgAlignContentEnd",
			ALIGN_CONTENT_CENTER : "lgAlignContentCenter",
			ALIGN_CONTENT_BETWEEN: "lgAlignContentBetween",
			ALIGN_CONTENT_AROUND : "lgAlignContentAround",
			ALIGN_CONTENT_STRETCH: "lgAlignContentStretch",

			ALIGN_SELF_AUTO    : "lgAlignSelfAuto",
			ALIGN_SELF_START   : "lgAlignSelfStart",
			ALIGN_SELF_END     : "lgAlignSelfEnd",
			ALIGN_SELF_CENTER  : "lgAlignSelfCenter",
			ALIGN_SELF_BASELINE: "lgAlignSelfBaseline",
			ALIGN_SELF_STRETCH : "lgAlignSelfStretch",

			JUSTIFY_CONTENT_CENTER       : "lgJustifyContentCenter",
			JUSTIFY_CONTENT_FLEX_START   : "lgJustifyContentFlexStart",
			JUSTIFY_CONTENT_FLEX_END     : "lgJustifyContentFlexEnd",
			JUSTIFY_CONTENT_SPACE_BETWEEN: "lgJustifyContentSpaceBetween",
			JUSTIFY_CONTENT_SPACE_AROUND : "lgJustifyContentSpaceAround",
			JUSTIFY_CONTENT_SPACE_EVENLY : "lgJustifyContentSpaceEvenly"
		},
		XL: {
			ALIGN_ITEMS_START   : "xlAlignItemsStart",
			ALIGN_ITEMS_END     : "xlAlignItemsEnd",
			ALIGN_ITEMS_CENTER  : "xlAlignItemsCenter",
			ALIGN_ITEMS_BASELINE: "xlAlignItemsBaseline",
			ALIGN_ITEMS_STRETCH : "xlAlignItemsStretch",

			ALIGN_CONTENT_START  : "xlAlignContentStart",
			ALIGN_CONTENT_END    : "xlAlignContentEnd",
			ALIGN_CONTENT_CENTER : "xlAlignContentCenter",
			ALIGN_CONTENT_BETWEEN: "xlAlignContentBetween",
			ALIGN_CONTENT_AROUND : "xlAlignContentAround",
			ALIGN_CONTENT_STRETCH: "xlAlignContentStretch",

			ALIGN_SELF_AUTO    : "xlAlignSelfAuto",
			ALIGN_SELF_START   : "xlAlignSelfStart",
			ALIGN_SELF_END     : "xlAlignSelfEnd",
			ALIGN_SELF_CENTER  : "xlAlignSelfCenter",
			ALIGN_SELF_BASELINE: "xlAlignSelfBaseline",
			ALIGN_SELF_STRETCH : "xlAlignSelfStretch",

			JUSTIFY_CONTENT_CENTER       : "xlJustifyContentCenter",
			JUSTIFY_CONTENT_FLEX_START   : "xlJustifyContentFlexStart",
			JUSTIFY_CONTENT_FLEX_END     : "xlJustifyContentFlexEnd",
			JUSTIFY_CONTENT_SPACE_BETWEEN: "xlJustifyContentSpaceBetween",
			JUSTIFY_CONTENT_SPACE_AROUND : "xlJustifyContentSpaceAround",
			JUSTIFY_CONTENT_SPACE_EVENLY : "xlJustifyContentSpaceEvenly"
		},
		XXL: {
			ALIGN_ITEMS_START   : "xxlAlignItemsStart",
			ALIGN_ITEMS_END     : "xxlAlignItemsEnd",
			ALIGN_ITEMS_CENTER  : "xxlAlignItemsCenter",
			ALIGN_ITEMS_BASELINE: "xxlAlignItemsBaseline",
			ALIGN_ITEMS_STRETCH : "xxlAlignItemsStretch",

			ALIGN_CONTENT_START  : "xxlAlignContentStart",
			ALIGN_CONTENT_END    : "xxlAlignContentEnd",
			ALIGN_CONTENT_CENTER : "xxlAlignContentCenter",
			ALIGN_CONTENT_BETWEEN: "xxlAlignContentBetween",
			ALIGN_CONTENT_AROUND : "xxlAlignContentAround",
			ALIGN_CONTENT_STRETCH: "xxlAlignContentStretch",

			ALIGN_SELF_AUTO    : "xxlAlignSelfAuto",
			ALIGN_SELF_START   : "xxlAlignSelfStart",
			ALIGN_SELF_END     : "xxlAlignSelfEnd",
			ALIGN_SELF_CENTER  : "xxlAlignSelfCenter",
			ALIGN_SELF_BASELINE: "xxlAlignSelfBaseline",
			ALIGN_SELF_STRETCH : "xxlAlignSelfStretch",

			JUSTIFY_CONTENT_CENTER       : "xxlJustifyContentCenter",
			JUSTIFY_CONTENT_FLEX_START   : "xxlJustifyContentFlexStart",
			JUSTIFY_CONTENT_FLEX_END     : "xxlJustifyContentFlexEnd",
			JUSTIFY_CONTENT_SPACE_BETWEEN: "xxlJustifyContentSpaceBetween",
			JUSTIFY_CONTENT_SPACE_AROUND : "xxlJustifyContentSpaceAround",
			JUSTIFY_CONTENT_SPACE_EVENLY : "xxlJustifyContentSpaceEvenly"
		}
	},

	/**************************************************
	 * Background
	 *************************************************/
	BG: {
		BG_PRIMARY      : "bgPrimary",
		BG_PRIMARY_LIGHT: "bgPrimaryLight",
		BG_PRIMARY_DARK : "bgPrimaryDark",

		BG_SECONDARY      : "bgSecondary",
		BG_SECONDARY_LIGHT: "bgSecondaryLight",
		BG_SECONDARY_DARK : "bgSecondaryDark",

		BG_SUCCESS      : "bgSuccess",
		BG_SUCCESS_LIGHT: "bgSuccessLight",
		BG_SUCCESS_DARK : "bgSuccessDark",

		BG_ERROR      : "bgError",
		BG_ERROR_LIGHT: "bgErrorLight",
		BG_ERROR_DARK : "bgErrorDark",

		BG_WARNING      : "bgWarning",
		BG_WARNING_LIGHT: "bgWarningLight",
		BG_WARNING_DARK : "bgWarningDark",

		BG_INFO      : "bgInfo",
		BG_INFO_LIGHT: "bgInfoLight",
		BG_INFO_DARK : "bgInfoDark",

		BG_BLACK      : "bgBlack",
		BG_WHITE      : "bgWhite",
		BG_TRANSPARENT: "bgTransparent"
	},

	/**************************************************
	 * Border
	 *************************************************/
	BORDER: {
		BORDER  : "border",
		BORDER_0: "border0",

		BORDER_TOP  : "borderTop",
		BORDER_TOP_0: "borderTop0",

		BORDER_END    : "borderEnd",
		BORDER_END_0  : "borderEnd0",
		BORDER_RIGHT  : "borderRight",
		BORDER_RIGHT_0: "borderRight0",

		BORDER_BOTTOM  : "borderBottom",
		BORDER_BOTTOM_0: "borderBottom0",

		BORDER_START  : "borderStart",
		BORDER_START_0: "borderStart0",
		BORDER_LEFT   : "borderLeft",
		BORDER_LEFT_0 : "borderLeft0",

		BORDER_PRIMARY      : "borderPrimary",
		BORDER_PRIMARY_LIGHT: "borderPrimaryLight",
		BORDER_PRIMARY_DARK : "borderPrimaryDark",

		BORDER_SECONDARY      : "borderSecondary",
		BORDER_SECONDARY_LIGHT: "borderSecondaryLight",
		BORDER_SECONDARY_DARK : "borderSecondaryDark",

		BORDER_SUCCESS      : "borderSuccess",
		BORDER_SUCCESS_LIGHT: "borderSuccessLight",
		BORDER_SUCCESS_DARK : "borderSuccessDark",

		BORDER_ERROR      : "borderError",
		BORDER_ERROR_LIGHT: "borderErrorLight",
		BORDER_ERROR_DARK : "borderErrorDark",

		BORDER_WARNING      : "borderWarning",
		BORDER_WARNING_LIGHT: "borderWarningLight",
		BORDER_WARNING_DARK : "borderWarningDark",

		BORDER_INFO      : "borderInfo",
		BORDER_INFO_LIGHT: "borderInfoLight",
		BORDER_INFO_DARK : "borderInfoDark",

		BORDER_BLACK: "borderBlack",
		BORDER_WHITE: "borderWhite",

		BORDER_1: "border1",
		BORDER_2: "border2",
		BORDER_3: "border3",
		BORDER_4: "border4",
		BORDER_5: "border5"
	},

	/**************************************************
	 * Color
	 *************************************************/
	COLOR: {
		TEXT_PRIMARY      : "textPrimary",
		TEXT_PRIMARY_LIGHT: "textPrimaryLight",
		TEXT_PRIMARY_DARK : "textPrimaryDark",

		TEXT_SECONDARY      : "textSecondary",
		TEXT_SECONDARY_LIGHT: "textSecondaryLight",
		TEXT_SECONDARY_DARK : "textSecondaryDark",

		TEXT_SUCCESS      : "textSuccess",
		TEXT_SUCCESS_LIGHT: "textSuccessLight",
		TEXT_SUCCESS_DARK : "textSuccessDark",

		TEXT_ERROR      : "textError",
		TEXT_ERROR_LIGHT: "textErrorLight",
		TEXT_ERROR_DARK : "textErrorDark",

		TEXT_WARNING      : "textWarning",
		TEXT_WARNING_LIGHT: "textWarningLight",
		TEXT_WARNING_DARK : "textWarningDark",

		TEXT_INFO      : "textInfo",
		TEXT_INFO_LIGHT: "textInfoLight",
		TEXT_INFO_DARK : "textInfoDark",

		TEXT_BLACK   : "textBlack",
		TEXT_BLACK_50: "textBlack50",
		TEXT_WHITE   : "textWhite",
		TEXT_WHITE_50: "textWhite50",

		TEXT_RESET: "textReset",

		TEXT_OPACITY_25 : "textOpacity25",
		TEXT_OPACITY_50 : "textOpacity50",
		TEXT_OPACITY_75 : "textOpacity75",
		TEXT_OPACITY_100: "textOpacity100"
	},

	/**************************************************
	 * Display
	 *************************************************/
	DISPLAY: {
		INLINE      : "displayInline",
		INLINE_BLOCK: "displayInlineBlock",
		BLOCK       : "displayBlock",
		GRID        : "displayGrid",
		TABLE       : "displayTable",
		TABLE_ROW   : "displayTableRow",
		TABLE_CELL  : "displayTableCell",
		FLEX        : "displayFlex",
		INLINE_FLEX : "displayInlineFlex",
		NONE        : "displayNone",

		SM: {
			INLINE      : "smDisplayInline",
			INLINE_BLOCK: "smDisplayInlineBlock",
			BLOCK       : "smDisplayBlock",
			GRID        : "smDisplayGrid",
			TABLE       : "smDisplayTable",
			TABLE_ROW   : "smDisplayTableRow",
			TABLE_CELL  : "smDisplayTableCell",
			FLEX        : "smDisplayFlex",
			INLINE_FLEX : "smDisplayInlineFlex",
			NONE        : "smDisplayNone"
		},
		MD: {
			INLINE      : "mdDisplayInline",
			INLINE_BLOCK: "mdDisplayInlineBlock",
			BLOCK       : "mdDisplayBlock",
			GRID        : "mdDisplayGrid",
			TABLE       : "mdDisplayTable",
			TABLE_ROW   : "mdDisplayTableRow",
			TABLE_CELL  : "mdDisplayTableCell",
			FLEX        : "mdDisplayFlex",
			INLINE_FLEX : "mdDisplayInlineFlex",
			NONE        : "mdDisplayNone"
		},
		LG: {
			INLINE      : "lgDisplayInline",
			INLINE_BLOCK: "lgDisplayInlineBlock",
			BLOCK       : "lgDisplayBlock",
			GRID        : "lgDisplayGrid",
			TABLE       : "lgDisplayTable",
			TABLE_ROW   : "lgDisplayTableRow",
			TABLE_CELL  : "lgDisplayTableCell",
			FLEX        : "lgDisplayFlex",
			INLINE_FLEX : "lgDisplayInlineFlex",
			NONE        : "lgDisplayNone"
		},
		XL: {
			INLINE      : "xlDisplayInline",
			INLINE_BLOCK: "xlDisplayInlineBlock",
			BLOCK       : "xlDisplayBlock",
			GRID        : "xlDisplayGrid",
			TABLE       : "xlDisplayTable",
			TABLE_ROW   : "xlDisplayTableRow",
			TABLE_CELL  : "xlDisplayTableCell",
			FLEX        : "xlDisplayFlex",
			INLINE_FLEX : "xlDisplayInlineFlex",
			NONE        : "xlDisplayNone"
		},
		XXL: {
			INLINE      : "xxlDisplayInline",
			INLINE_BLOCK: "xxlDisplayInlineBlock",
			BLOCK       : "xxlDisplayBlock",
			GRID        : "xxlDisplayGrid",
			TABLE       : "xxlDisplayTable",
			TABLE_ROW   : "xxlDisplayTableRow",
			TABLE_CELL  : "xxlDisplayTableCell",
			FLEX        : "xxlDisplayFlex",
			INLINE_FLEX : "xxlDisplayInlineFlex",
			NONE        : "xxlDisplayNone"
		}
	},

	/**************************************************
	 * Flex
	 *************************************************/
	FLEX: {
		DIRECTION_ROW           : "flexDirectionRow",
		DIRECTION_COLUMN        : "flexDirectionColumn",
		DIRECTION_ROW_REVERSE   : "flexDirectionRowReverse",
		DIRECTION_COLUMN_REVERSE: "flexDirectionColumnReverse",
		FILL                    : "flexFill",
		FLEX_GROW_0             : "flexGrow0",
		FLEX_GROW_1             : "flexGrow1",
		FLEX_SHRINK_0           : "flexShrink0",
		FLEX_SHRINK_1           : "flexShrink1",
		FLEX_WRAP_WRAP          : "flexWrapWrap",
		FLEX_WRAP_NO_WRAP       : "flexWrapNoWrap",
		FLEX_WRAP_WRAP_REVERSE  : "flexWrapWrapReverse",
		SM                      : {
			DIRECTION_ROW           : "smFlexDirectionRow",
			DIRECTION_COLUMN        : "smFlexDirectionColumn",
			DIRECTION_ROW_REVERSE   : "smFlexDirectionRowReverse",
			DIRECTION_COLUMN_REVERSE: "smFlexDirectionColumnReverse",
			FILL                    : "smFlexFill",
			FLEX_GROW_0             : "smFlexGrow0",
			FLEX_GROW_1             : "smFlexGrow1",
			FLEX_SHRINK_0           : "smFlexShrink0",
			FLEX_SHRINK_1           : "smFlexShrink1",
			FLEX_WRAP_WRAP          : "smFlexWrapWrap",
			FLEX_WRAP_NO_WRAP       : "smFlexWrapNoWrap",
			FLEX_WRAP_WRAP_REVERSE  : "smFlexWrapWrapReverse"
		},
		MD: {
			DIRECTION_ROW           : "mdFlexDirectionRow",
			DIRECTION_COLUMN        : "mdFlexDirectionColumn",
			DIRECTION_ROW_REVERSE   : "mdFlexDirectionRowReverse",
			DIRECTION_COLUMN_REVERSE: "mdFlexDirectionColumnReverse",
			FILL                    : "mdFlexFill",
			FLEX_GROW_0             : "mdFlexGrow0",
			FLEX_GROW_1             : "mdFlexGrow1",
			FLEX_SHRINK_0           : "mdFlexShrink0",
			FLEX_SHRINK_1           : "mdFlexShrink1",
			FLEX_WRAP_WRAP          : "mdFlexWrapWrap",
			FLEX_WRAP_NO_WRAP       : "mdFlexWrapNoWrap",
			FLEX_WRAP_WRAP_REVERSE  : "mdFlexWrapWrapReverse"
		},
		LG: {
			DIRECTION_ROW           : "lgFlexDirectionRow",
			DIRECTION_COLUMN        : "lgFlexDirectionColumn",
			DIRECTION_ROW_REVERSE   : "lgFlexDirectionRowReverse",
			DIRECTION_COLUMN_REVERSE: "lgFlexDirectionColumnReverse",
			FILL                    : "lgFlexFill",
			FLEX_GROW_0             : "lgFlexGrow0",
			FLEX_GROW_1             : "lgFlexGrow1",
			FLEX_SHRINK_0           : "lgFlexShrink0",
			FLEX_SHRINK_1           : "lgFlexShrink1",
			FLEX_WRAP_WRAP          : "lgFlexWrapWrap",
			FLEX_WRAP_NO_WRAP       : "lgFlexWrapNoWrap",
			FLEX_WRAP_WRAP_REVERSE  : "lgFlexWrapWrapReverse"
		},
		XL: {
			DIRECTION_ROW           : "xlFlexDirectionRow",
			DIRECTION_COLUMN        : "xlFlexDirectionColumn",
			DIRECTION_ROW_REVERSE   : "xlFlexDirectionRowReverse",
			DIRECTION_COLUMN_REVERSE: "xlFlexDirectionColumnReverse",
			FILL                    : "xlFlexFill",
			FLEX_GROW_0             : "xlFlexGrow0",
			FLEX_GROW_1             : "xlFlexGrow1",
			FLEX_SHRINK_0           : "xlFlexShrink0",
			FLEX_SHRINK_1           : "xlFlexShrink1",
			FLEX_WRAP_WRAP          : "xlFlexWrapWrap",
			FLEX_WRAP_NO_WRAP       : "xlFlexWrapNoWrap",
			FLEX_WRAP_WRAP_REVERSE  : "xlFlexWrapWrapReverse"
		},
		XXL: {
			DIRECTION_ROW           : "xxlFlexDirectionRow",
			DIRECTION_COLUMN        : "xxlFlexDirectionColumn",
			DIRECTION_ROW_REVERSE   : "xxlFlexDirectionRowReverse",
			DIRECTION_COLUMN_REVERSE: "xxlFlexDirectionColumnReverse",
			FILL                    : "xxlFlexFill",
			FLEX_GROW_0             : "xxlFlexGrow0",
			FLEX_GROW_1             : "xxlFlexGrow1",
			FLEX_SHRINK_0           : "xxlFlexShrink0",
			FLEX_SHRINK_1           : "xxlFlexShrink1",
			FLEX_WRAP_WRAP          : "xxlFlexWrapWrap",
			FLEX_WRAP_NO_WRAP       : "xxlFlexWrapNoWrap",
			FLEX_WRAP_WRAP_REVERSE  : "xxlFlexWrapWrapReverse"
		}
	},

	/**************************************************
	 * Float
	 *************************************************/
	FLOAT: {
		START: "floatStart",
		END  : "floatEnd",
		NONE : "floatNone",
		SM   : { START: "smFloatStart", END: "smFloatEnd", NONE: "smFloatNone" },
		MD   : { START: "mdFloatStart", END: "mdFloatEnd", NONE: "mdFloatNone" },
		LG   : { START: "lgFloatStart", END: "lgFloatEnd", NONE: "lgFloatNone" },
		XL   : { START: "xlFloatStart", END: "xlFloatEnd", NONE: "xlFloatNone" },
		XXL  : { START: "xxlFloatStart", END: "xxlFloatEnd", NONE: "xxlFloatNone" }
	},

	/**************************************************
	 * Interactions
	 *************************************************/
	INTERACTIONS: {
		USER_SELECT: {
			ALL : "userSelectAll",
			AUTO: "userSelectAuto",
			NONE: "userSelectNone"
		},
		POINTER_EVENT: {
			NONE: "peNone",
			AUTO: "peAuto"
		}
	},

	/**************************************************
	 * Object Fit
	 *************************************************/
	OBJECT_FIT: {
		CONTAIN: "objectFitContain",
		COVER  : "objectFitCover",
		FILL   : "objectFitFill",
		SCALE  : "objectFitScale",
		NONE   : "objectFitNone",
		SM     : {
			CONTAIN: "smObjectFitContain",
			COVER  : "smObjectFitCover",
			FILL   : "smObjectFitFill",
			SCALE  : "smObjectFitScale",
			NONE   : "smObjectFitNone"
		},
		MD: {
			CONTAIN: "mdObjectFitContain",
			COVER  : "mdObjectFitCover",
			FILL   : "mdObjectFitFill",
			SCALE  : "mdObjectFitScale",
			NONE   : "mdObjectFitNone"
		},
		LG: {
			CONTAIN: "lgObjectFitContain",
			COVER  : "lgObjectFitCover",
			FILL   : "lgObjectFitFill",
			SCALE  : "lgObjectFitScale",
			NONE   : "lgObjectFitNone"
		},
		XL: {
			CONTAIN: "xlObjectFitContain",
			COVER  : "xlObjectFitCover",
			FILL   : "xlObjectFitFill",
			SCALE  : "xlObjectFitScale",
			NONE   : "xlObjectFitNone"
		},
		XXL: {
			CONTAIN: "xxlObjectFitContain",
			COVER  : "xxlObjectFitCover",
			FILL   : "xxlObjectFitFill",
			SCALE  : "xxlObjectFitScale",
			NONE   : "xxlObjectFitNone"
		}
	},

	/**************************************************
	 * Opacity
	 *************************************************/
	OPACITY: {
		OPACITY_0  : "opacity0",
		OPACITY_5  : "opacity5",
		OPACITY_10 : "opacity10",
		OPACITY_15 : "opacity15",
		OPACITY_20 : "opacity20",
		OPACITY_25 : "opacity25",
		OPACITY_30 : "opacity30",
		OPACITY_35 : "opacity35",
		OPACITY_40 : "opacity40",
		OPACITY_45 : "opacity45",
		OPACITY_50 : "opacity50",
		OPACITY_55 : "opacity55",
		OPACITY_60 : "opacity60",
		OPACITY_65 : "opacity65",
		OPACITY_70 : "opacity70",
		OPACITY_75 : "opacity75",
		OPACITY_80 : "opacity80",
		OPACITY_85 : "opacity85",
		OPACITY_90 : "opacity90",
		OPACITY_95 : "opacity95",
		OPACITY_100: "opacity100"
	},

	/**************************************************
	 * Overflow
	 *************************************************/
	OVERFLOW: {
		OVERFLOW_AUTO     : "overflowAuto",
		OVERFLOW_HIDDEN   : "overflowHidden",
		OVERFLOW_VISIBLE  : "overflowVisible",
		OVERFLOW_SCROLL   : "overflowScroll",
		OVERFLOW_X_AUTO   : "overflowXAuto",
		OVERFLOW_X_HIDDEN : "overflowXHidden",
		OVERFLOW_X_VISIBLE: "overflowXVisible",
		OVERFLOW_X_SCROLL : "overflowXScroll",
		OVERFLOW_Y_AUTO   : "overflowYAuto",
		OVERFLOW_Y_HIDDEN : "overflowYHidden",
		OVERFLOW_Y_VISIBLE: "overflowYVisible",
		OVERFLOW_Y_SCROLL : "overflowYScroll"
	},

	/**************************************************
	 * Position
	 *************************************************/
	POSITION: {
		POSITION_STATIC  : "positionStatic",
		POSITION_RELATIVE: "positionRelative",
		POSITION_ABSOLUTE: "positionAbsolute",
		POSITION_FIXED   : "positionFixed",
		POSITION_STICKY  : "positionSticky",

		TOP_0  : "top0",
		TOP_50 : "top50",
		TOP_100: "top100",

		BOTTOM_0  : "bottom0",
		BOTTOM_50 : "bottom50",
		BOTTOM_100: "bottom100",

		START_0  : "start0",
		START_50 : "start50",
		START_100: "start100",

		END_0  : "end0",
		END_50 : "end50",
		END_100: "end100",

		TRANSLATE_MIDDLE  : "translateMiddle",
		TRANSLATE_MIDDLE_X: "translateMiddleX",
		TRANSLATE_MIDDLE_Y: "translateMiddleY",

		FIXED_TOP    : "fixedTop",
		FIXED_BOTTOM : "fixedBottom",
		STICKY_TOP   : "stickyTop",
		STICKY_BOTTOM: "stickyBottom"
	},

	/**************************************************
	 * Shadows
	 *************************************************/
	SHADOW: {
		NORMAL: "shadow",
		SMALL : "shadowSm",
		LARGE : "shadowLg",
		NONE  : "shadowNone"
	},

	/**************************************************
	 * Sizing
	 *************************************************/
	/*-------------------------------------------------
	 * Width
	 *-----------------------------------------------*/
	WIDTH: {
		W_25      : "w25",
		W_50      : "w50",
		W_75      : "w75",
		W_100     : "w100",
		W_AUTO    : "wAuto",
		MAX_W_25  : "maxW25",
		MAX_W_50  : "maxW50",
		MAX_W_75  : "maxW75",
		MAX_W_100 : "maxW100",
		MIN_W_25  : "minW25",
		MIN_W_50  : "minW50",
		MIN_W_75  : "minW75",
		MIN_W_100 : "minW100",
		VW_25     : "vw25",
		VW_50     : "vw50",
		VW_75     : "vw75",
		VW_100    : "vw100",
		MAX_VW_25 : "maxVw25",
		MAX_VW_50 : "maxVw50",
		MAX_VW_75 : "maxVw75",
		MAX_VW_100: "maxVw100",
		MIN_VW_25 : "minVw25",
		MIN_VW_50 : "minVw50",
		MIN_VW_75 : "minVw75",
		MIN_VW_100: "minVw100"
	},

	/*-------------------------------------------------
	 * Height
	 *-----------------------------------------------*/
	HEIGHT: {
		H_25      : "h25",
		H_50      : "h50",
		H_75      : "h75",
		H_100     : "h100",
		H_AUTO    : "hAuto",
		MAX_H_25  : "maxH25",
		MAX_H_50  : "maxH50",
		MAX_H_75  : "maxH75",
		MAX_H_100 : "maxH100",
		MIN_H_25  : "minH25",
		MIN_H_50  : "minH50",
		MIN_H_75  : "minH75",
		MIN_H_100 : "minH100",
		VH_25     : "vh25",
		VH_50     : "vh50",
		VH_75     : "vh75",
		VH_100    : "vh100",
		MAX_VH_25 : "maxVh25",
		MAX_VH_50 : "maxVh50",
		MAX_VH_75 : "maxVh75",
		MAX_VH_100: "maxVh100",
		MIN_VH_25 : "minVh25",
		MIN_VH_50 : "minVh50",
		MIN_VH_75 : "minVh75",
		MIN_VH_100: "minVh100"
	},

	/**************************************************
	 * Spacing
	 *************************************************/
	/*-------------------------------------------------
	 * Padding
	 *-----------------------------------------------*/
	PADDING: {
		P0 : "p0",
		P1 : "p1",
		P2 : "p2",
		P3 : "p3",
		P4 : "p4",
		P5 : "p5",
		PT0: "pt0",
		PT1: "pt1",
		PT2: "pt2",
		PT3: "pt3",
		PT4: "pt4",
		PT5: "pt5",
		PR0: "pr0",
		PR1: "pr1",
		PR2: "pr2",
		PR3: "pr3",
		PR4: "pr4",
		PR5: "pr5",
		PB0: "pb0",
		PB1: "pb1",
		PB2: "pb2",
		PB3: "pb3",
		PB4: "pb4",
		PB5: "pb5",
		PL0: "pl0",
		PL1: "pl1",
		PL2: "pl2",
		PL3: "pl3",
		PL4: "pl4",
		PL5: "pl5",
		PX0: "px0",
		PX1: "px1",
		PX2: "px2",
		PX3: "px3",
		PX4: "px4",
		PX5: "px5",
		PY0: "py0",
		PY1: "py1",
		PY2: "py2",
		PY3: "py3",
		PY4: "py4",
		PY5: "py5",
		SM : {
			P0 : "smP0",
			P1 : "smP1",
			P2 : "smP2",
			P3 : "smP3",
			P4 : "smP4",
			P5 : "smP5",
			PT0: "smPt0",
			PT1: "smPt1",
			PT2: "smPt2",
			PT3: "smPt3",
			PT4: "smPt4",
			PT5: "smPt5",
			PR0: "smPr0",
			PR1: "smPr1",
			PR2: "smPr2",
			PR3: "smPr3",
			PR4: "smPr4",
			PR5: "smPr5",
			PB0: "smPb0",
			PB1: "smPb1",
			PB2: "smPb2",
			PB3: "smPb3",
			PB4: "smPb4",
			PB5: "smPb5",
			PL0: "smPl0",
			PL1: "smPl1",
			PL2: "smPl2",
			PL3: "smPl3",
			PL4: "smPl4",
			PL5: "smPl5",
			PX0: "smPx0",
			PX1: "smPx1",
			PX2: "smPx2",
			PX3: "smPx3",
			PX4: "smPx4",
			PX5: "smPx5",
			PY0: "smPy0",
			PY1: "smPy1",
			PY2: "smPy2",
			PY3: "smPy3",
			PY4: "smPy4",
			PY5: "smPy5"
		}
	},

	/*-------------------------------------------------
	 * Margin
	 *-----------------------------------------------*/
	MARGIN: {
		M0     : "m0",
		M1     : "m1",
		M2     : "m2",
		M3     : "m3",
		M4     : "m4",
		M5     : "m5",
		M_AUTO : "mAuto",
		MT0    : "mt0",
		MT1    : "mt1",
		MT2    : "mt2",
		MT3    : "mt3",
		MT4    : "mt4",
		MT5    : "mt5",
		MT_AUTO: "mtAuto",
		MR0    : "mr0",
		MR1    : "mr1",
		MR2    : "mr2",
		MR3    : "mr3",
		MR4    : "mr4",
		MR5    : "mr5",
		MR_AUTO: "mrAuto",
		MB0    : "mb0",
		MB1    : "mb1",
		MB2    : "mb2",
		MB3    : "mb3",
		MB4    : "mb4",
		MB5    : "mb5",
		MB_AUTO: "mbAuto",
		ML0    : "ml0",
		ML1    : "ml1",
		ML2    : "ml2",
		ML3    : "ml3",
		ML4    : "ml4",
		ML5    : "ml5",
		ML_AUTO: "mlAuto",
		MX0    : "mx0",
		MX1    : "mx1",
		MX2    : "mx2",
		MX3    : "mx3",
		MX4    : "mx4",
		MX5    : "mx5",
		MX_AUTO: "mxAuto",
		MY0    : "my0",
		MY1    : "my1",
		MY2    : "my2",
		MY3    : "my3",
		MY4    : "my4",
		MY5    : "my5",
		MY_AUTO: "myAuto",
		M_N1   : "mN1",
		M_N2   : "mN2",
		M_N3   : "mN3",
		M_N4   : "mN4",
		M_N5   : "mN5",
		MT_N1  : "mtN1",
		MT_N2  : "mtN2",
		MT_N3  : "mtN3",
		MT_N4  : "mtN4",
		MT_N5  : "mtN5",
		MR_N1  : "mrN1",
		MR_N2  : "mrN2",
		MR_N3  : "mrN3",
		MR_N4  : "mrN4",
		MR_N5  : "mrN5",
		MB_N1  : "mbN1",
		MB_N2  : "mbN2",
		MB_N3  : "mbN3",
		MB_N4  : "mbN4",
		MB_N5  : "mbN5",
		ML_N1  : "mlN1",
		ML_N2  : "mlN2",
		ML_N3  : "mlN3",
		ML_N4  : "mlN4",
		ML_N5  : "mlN5",
		MX_N1  : "mxN1",
		MX_N2  : "mxN2",
		MX_N3  : "mxN3",
		MX_N4  : "mxN4",
		MX_N5  : "mxN5",
		MY_N1  : "myN1",
		MY_N2  : "myN2",
		MY_N3  : "myN3",
		MY_N4  : "myN4",
		MY_N5  : "myN5",
		SM     : {
			M0     : "smM0",
			M1     : "smM1",
			M2     : "smM2",
			M3     : "smM3",
			M4     : "smM4",
			M5     : "smM5",
			M_AUTO : "smMAuto",
			MT0    : "smMt0",
			MT1    : "smMt1",
			MT2    : "smMt2",
			MT3    : "smMt3",
			MT4    : "smMt4",
			MT5    : "smMt5",
			MT_AUTO: "smMtAuto",
			MR0    : "smMr0",
			MR1    : "smMr1",
			MR2    : "smMr2",
			MR3    : "smMr3",
			MR4    : "smMr4",
			MR5    : "smMr5",
			MR_AUTO: "smMrAuto",
			MB0    : "smMb0",
			MB1    : "smMb1",
			MB2    : "smMb2",
			MB3    : "smMb3",
			MB4    : "smMb4",
			MB5    : "smMb5",
			MB_AUTO: "smMbAuto",
			ML0    : "smMl0",
			ML1    : "smMl1",
			ML2    : "smMl2",
			ML3    : "smMl3",
			ML4    : "smMl4",
			ML5    : "smMl5",
			ML_AUTO: "smMlAuto",
			MX0    : "smMx0",
			MX1    : "smMx1",
			MX2    : "smMx2",
			MX3    : "smMx3",
			MX4    : "smMx4",
			MX5    : "smMx5",
			MX_AUTO: "smMxAuto",
			MY0    : "smMy0",
			MY1    : "smMy1",
			MY2    : "smMy2",
			MY3    : "smMy3",
			MY4    : "smMy4",
			MY5    : "smMy5",
			MY_AUTO: "smMyAuto",
			M_N1   : "smMN1",
			M_N2   : "smMN2",
			M_N3   : "smMN3",
			M_N4   : "smMN4",
			M_N5   : "smMN5",
			MT_N1  : "smMtN1",
			MT_N2  : "smMtN2",
			MT_N3  : "smMtN3",
			MT_N4  : "smMtN4",
			MT_N5  : "smMtN5",
			MR_N1  : "smMrN1",
			MR_N2  : "smMrN2",
			MR_N3  : "smMrN3",
			MR_N4  : "smMrN4",
			MR_N5  : "smMrN5",
			MB_N1  : "smMbN1",
			MB_N2  : "smMbN2",
			MB_N3  : "smMbN3",
			MB_N4  : "smMbN4",
			MB_N5  : "smMbN5",
			ML_N1  : "smMlN1",
			ML_N2  : "smMlN2",
			ML_N3  : "smMlN3",
			ML_N4  : "smMlN4",
			ML_N5  : "smMlN5",
			MX_N1  : "smMxN1",
			MX_N2  : "smMxN2",
			MX_N3  : "smMxN3",
			MX_N4  : "smMxN4",
			MX_N5  : "smMxN5",
			MY_N1  : "smMyN1",
			MY_N2  : "smMyN2",
			MY_N3  : "smMyN3",
			MY_N4  : "smMyN4",
			MY_N5  : "smMyN5"
		}
	},

	/*-------------------------------------------------
	 * Gap
	 *-----------------------------------------------*/
	GAP: {
		GAP_0    : "gap0",
		GAP_1    : "gap1",
		GAP_2    : "gap2",
		GAP_3    : "gap3",
		GAP_4    : "gap4",
		GAP_5    : "gap5",
		ROW_GAP_0: "rowGap0",
		ROW_GAP_1: "rowGap1",
		ROW_GAP_2: "rowGap2",
		ROW_GAP_3: "rowGap3",
		ROW_GAP_4: "rowGap4",
		ROW_GAP_5: "rowGap5",
		COL_GAP_0: "colGap0",
		COL_GAP_1: "colGap1",
		COL_GAP_2: "colGap2",
		COL_GAP_3: "colGap3",
		COL_GAP_4: "colGap4",
		COL_GAP_5: "colGap5",

		SM: {
			GAP_0    : "smGap0",
			GAP_1    : "smGap1",
			GAP_2    : "smGap2",
			GAP_3    : "smGap3",
			GAP_4    : "smGap4",
			GAP_5    : "smGap5",
			ROW_GAP_0: "smRowGap0",
			ROW_GAP_1: "smRowGap1",
			ROW_GAP_2: "smRowGap2",
			ROW_GAP_3: "smRowGap3",
			ROW_GAP_4: "smRowGap4",
			ROW_GAP_5: "smRowGap5",
			COL_GAP_0: "smColGap0",
			COL_GAP_1: "smColGap1",
			COL_GAP_2: "smColGap2",
			COL_GAP_3: "smColGap3",
			COL_GAP_4: "smColGap4",
			COL_GAP_5: "smColGap5"
		},
		MD: {
			GAP_0    : "mdGap0",
			GAP_1    : "mdGap1",
			GAP_2    : "mdGap2",
			GAP_3    : "mdGap3",
			GAP_4    : "mdGap4",
			GAP_5    : "mdGap5",
			ROW_GAP_0: "mdRowGap0",
			ROW_GAP_1: "mdRowGap1",
			ROW_GAP_2: "mdRowGap2",
			ROW_GAP_3: "mdRowGap3",
			ROW_GAP_4: "mdRowGap4",
			ROW_GAP_5: "mdRowGap5",
			COL_GAP_0: "mdColGap0",
			COL_GAP_1: "mdColGap1",
			COL_GAP_2: "mdColGap2",
			COL_GAP_3: "mdColGap3",
			COL_GAP_4: "mdColGap4",
			COL_GAP_5: "mdColGap5"
		},
		LG: {
			GAP_0    : "lgGap0",
			GAP_1    : "lgGap1",
			GAP_2    : "lgGap2",
			GAP_3    : "lgGap3",
			GAP_4    : "lgGap4",
			GAP_5    : "lgGap5",
			ROW_GAP_0: "lgRowGap0",
			ROW_GAP_1: "lgRowGap1",
			ROW_GAP_2: "lgRowGap2",
			ROW_GAP_3: "lgRowGap3",
			ROW_GAP_4: "lgRowGap4",
			ROW_GAP_5: "lgRowGap5",
			COL_GAP_0: "lgColGap0",
			COL_GAP_1: "lgColGap1",
			COL_GAP_2: "lgColGap2",
			COL_GAP_3: "lgColGap3",
			COL_GAP_4: "lgColGap4",
			COL_GAP_5: "lgColGap5"
		},
		XL: {
			GAP_0    : "xlGap0",
			GAP_1    : "xlGap1",
			GAP_2    : "xlGap2",
			GAP_3    : "xlGap3",
			GAP_4    : "xlGap4",
			GAP_5    : "xlGap5",
			ROW_GAP_0: "xlRowGap0",
			ROW_GAP_1: "xlRowGap1",
			ROW_GAP_2: "xlRowGap2",
			ROW_GAP_3: "xlRowGap3",
			ROW_GAP_4: "xlRowGap4",
			ROW_GAP_5: "xlRowGap5",
			COL_GAP_0: "xlColGap0",
			COL_GAP_1: "xlColGap1",
			COL_GAP_2: "xlColGap2",
			COL_GAP_3: "xlColGap3",
			COL_GAP_4: "xlColGap4",
			COL_GAP_5: "xlColGap5"
		},
		XXL: {
			GAP_0    : "xxlGap0",
			GAP_1    : "xxlGap1",
			GAP_2    : "xxlGap2",
			GAP_3    : "xxlGap3",
			GAP_4    : "xxlGap4",
			GAP_5    : "xxlGap5",
			ROW_GAP_0: "xxlRowGap0",
			ROW_GAP_1: "xxlRowGap1",
			ROW_GAP_2: "xxlRowGap2",
			ROW_GAP_3: "xxlRowGap3",
			ROW_GAP_4: "xxlRowGap4",
			ROW_GAP_5: "xxlRowGap5",
			COL_GAP_0: "xxlColGap0",
			COL_GAP_1: "xxlColGap1",
			COL_GAP_2: "xxlColGap2",
			COL_GAP_3: "xxlColGap3",
			COL_GAP_4: "xxlColGap4",
			COL_GAP_5: "xxlColGap5"
		}
	},

	/**************************************************
	 * Text
	 *************************************************/
	TEXT: {
		TEXT_START  : "textStart",
		TEXT_END    : "textEnd",
		TEXT_CENTER : "textCenter",
		TEXT_JUSTIFY: "textJustify",

		TEXT_WEIGHT_BOLD  : "textWeightBold",
		TEXT_WEIGHT_LIGHT : "textWeightLight",
		TEXT_WEIGHT_NORMAL: "textWeightNormal",

		TEXT_DECORATION_NONE        : "textDecorationNone",
		TEXT_DECORATION_UNDERLINE   : "textDecorationUnderline",
		TEXT_DECORATION_LINE_THROUGH: "textDecorationLineThrough",

		TEXT_LOWERCASE : "textLowercase",
		TEXT_UPPERCASE : "textUppercase",
		TEXT_CAPITALIZE: "textCapitalize",

		TEXT_WRAP    : "textWrap",
		TEXT_NOWRAP  : "textNowrap",
		TEXT_BREAK   : "textBreak",
		TEXT_TRUNCATE: "textTruncate",

		SM: {
			TEXT_START  : "smTextStart",
			TEXT_END    : "smTextEnd",
			TEXT_CENTER : "smTextCenter",
			TEXT_JUSTIFY: "smTextJustify"
		},
		MD: {
			TEXT_START  : "mdTextStart",
			TEXT_END    : "mdTextEnd",
			TEXT_CENTER : "mdTextCenter",
			TEXT_JUSTIFY: "mdTextJustify"
		},
		LG: {
			TEXT_START  : "lgTextStart",
			TEXT_END    : "lgTextEnd",
			TEXT_CENTER : "lgTextCenter",
			TEXT_JUSTIFY: "lgTextJustify"
		},
		XL: {
			TEXT_START  : "xlTextStart",
			TEXT_END    : "xlTextEnd",
			TEXT_CENTER : "xlTextCenter",
			TEXT_JUSTIFY: "xlTextJustify"
		},
		XXL: {
			TEXT_START  : "xxlTextStart",
			TEXT_END    : "xxlTextEnd",
			TEXT_CENTER : "xxlTextCenter",
			TEXT_JUSTIFY: "xxlTextJustify"
		}
	},

	/**************************************************
	 * Vertical Align
	 *************************************************/
	VERTICAL_ALIGN: {
		BASELINE   : "alignBaseline",
		TOP        : "alignTop",
		MIDDLE     : "alignMiddle",
		BOTTOM     : "alignBottom",
		TEXT_BOTTOM: "alignTextBottom",
		TEXT_TOP   : "alignTextTop"
	},

	/**************************************************
	 * Visibility
	 *************************************************/
	VISIBILITY: {
		VISIBLE  : "visible",
		INVISIBLE: "invisible"
	},
	/**************************************************
	 * zindex
	 *************************************************/
	z_index: {
		z_N1: "zN1",
		z_0 : "z0",
		z_1 : "z1",
		z_2 : "z2",
		z_3 : "z3"
	},
	LINK: {
		MUI             : "muiLink",
		PHONE_EMAIL_LINK: "phoneEmailLink"
	}
};

export default UtilityClasses;
