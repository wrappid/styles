/* eslint-disable sort-keys-fix/sort-keys-fix */
import { BaseStyle } from "../base/BaseStyle";
import {
  DEFAULT_BORDER,
  DEFAULT_BORDER_RADIUS,
  DEFAULT_BORDER_WIDTH,
  DEFAULT_MARGIN,
  DEFAULT_PADDING,
  DEFAULT_WORD_SPACING,
  DEFAULT_SHADOW_COLOR_RGB,
  DEFAULT_SPACING,
  IMPORTANT,
  PX_TAG,
  REM_TAG
} from "../base/constants";

export default class DefaultUtilityStyles extends BaseStyle {
  constructor() {
    super();

    this.style = {
      /**************************************************
       * Alignment
       *************************************************/
      alignItemsStart: {
        alignItems: "flex-start",
        display   : "flex",
      },
      alignItemsEnd: {
        alignItems: "flex-end",
        display   : "flex",
      },
      alignItemsCenter: {
        alignItems: "center",
        display   : "flex",
      },
      alignItemsBaseline: {
        alignItems: "baseline",
        display   : "flex",
      },
      alignItemsStretch: {
        alignItems: "stretch",
        display   : "flex",
      },

      alignContentStart: {
        alignContent: "flex-start",
        display     : "flex",
      },
      alignContentEnd: {
        alignContent: "flex-end",
        display     : "flex",
      },
      alignContentCenter: {
        alignContent: "center",
        display     : "flex",
      },
      alignContentBetween: {
        alignContent: "space-between",
        display     : "flex",
      },
      alignContentAround: {
        alignContent: "space-around",
        display     : "flex",
      },
      alignContentStretch: {
        alignContent: "stretch",
        display     : "flex",
      },

      alignSelfAuto : { alignSelf: "auto", display: "flex" },
      alignSelfStart: {
        alignSelf: "flex-start",
        display  : "flex",
      },
      alignSelfEnd: {
        alignSelf: "flex-end",
        display  : "flex",
      },
      alignSelfCenter: {
        alignSelf: "center",
        display  : "flex",
      },
      alignSelfBaseline: {
        alignSelf: "baseline",
        display  : "flex",
      },
      alignSelfStretch: {
        alignSelf: "stretch",
        display  : "flex",
      },

      justifyContentCenter: {
        display       : "flex",
        justifyContent: "center",
      },
      justifyContentFlexStart: {
        display       : "flex",
        justifyContent: "flex-start",
      },
      justifyContentFlexEnd: {
        display       : "flex",
        justifyContent: "flex-end",
      },
      justifyContentSpaceBetween: {
        display       : "flex",
        justifyContent: "space-between",
      },
      justifyContentSpaceAround: {
        display       : "flex",
        justifyContent: "space-around",
      },
      justifyContentSpaceEvenly: {
        display       : "flex",
        justifyContent: "space-evenly",
      },

      /**************************************************
       * Background
       *************************************************/
      bgBlack      : { backgroundColor: "black", color: "white" + IMPORTANT },
      bgWhite      : { backgroundColor: "white", color: "black" + IMPORTANT },
      bgTransparent: { backgroundColor: "transparent" + IMPORTANT },

      bgPrimary: {
        backgroundColor: this.theme?.palette?.primary?.main,
        color          : this.theme?.palette?.primary?.contrastText + IMPORTANT,
      },
      bgPrimaryLight: {
        backgroundColor: this.theme.palette?.primary?.light,
        color          : this.theme.palette?.primary?.contrastText + IMPORTANT,
      },
      bgPrimaryDark: {
        backgroundColor: this.theme.palette?.primary?.dark,
        color          : this.theme.palette?.primary?.contrastText + IMPORTANT,
      },

      bgSecondary: {
        backgroundColor: this.theme.palette?.secondary?.main,
        color          : this.theme.palette?.secondary?.contrastText + IMPORTANT,
      },
      bgSecondaryLight: {
        backgroundColor: this.theme.palette?.secondary?.light,
        color          : this.theme.palette?.secondary?.contrastText + IMPORTANT,
      },
      bgSecondaryDark: {
        backgroundColor: this.theme.palette?.secondary?.dark,
        color          : this.theme.palette?.secondary?.contrastText + IMPORTANT,
      },

      bgSuccess: {
        backgroundColor: this.theme.palette?.success?.main + IMPORTANT,
        color          : this.theme.palette?.success?.contrastText + IMPORTANT,
      },
      bgSuccessLight: {
        backgroundColor: this.theme.palette?.success?.light,
        color          : this.theme.palette?.success?.contrastText + IMPORTANT,
      },
      bgSuccessDark: {
        backgroundColor: this.theme.palette?.success?.dark,
        color          : this.theme.palette?.success?.contrastText + IMPORTANT,
      },

      bgError: {
        backgroundColor: this.theme.palette?.error?.main + IMPORTANT,
        color          : this.theme.palette?.error?.contrastText + IMPORTANT,
      },
      bgErrorLight: {
        backgroundColor: this.theme.palette?.error?.light,
        color          : this.theme.palette?.error?.contrastText + IMPORTANT,
      },
      bgErrorDark: {
        backgroundColor: this.theme.palette?.error?.dark,
        color          : this.theme.palette?.error?.contrastText + IMPORTANT,
      },

      bgWarning: {
        backgroundColor: this.theme.palette?.warning?.main + IMPORTANT,
        color          : this.theme.palette?.warning?.contrastText + IMPORTANT,
      },
      bgWarningLight: {
        backgroundColor: this.theme.palette?.warning?.light,
        color          : this.theme.palette?.warning?.contrastText + IMPORTANT,
      },
      bgWarningDark: {
        backgroundColor: this.theme.palette?.warning?.dark,
        color          : this.theme.palette?.warning?.contrastText + IMPORTANT,
      },

      bgInfo: {
        backgroundColor: this.theme.palette?.info?.main + IMPORTANT,
        color          : this.theme.palette?.info?.contrastText + IMPORTANT,
      },
      bgInfoLight: {
        backgroundColor: this.theme.palette?.info?.light,
        color          : this.theme.palette?.info?.contrastText + IMPORTANT,
      },
      bgInfoDark: {
        backgroundColor: this.theme.palette?.info?.dark,
        color          : this.theme.palette?.info?.contrastText + IMPORTANT,
      },

      bgGrey50  : { backgroundColor: this.theme.palette.grey["50"] + IMPORTANT },
      bgGrey100 : { backgroundColor: this.theme.palette.grey["100"] + IMPORTANT },
      bgGrey200 : { backgroundColor: this.theme.palette.grey["200"] + IMPORTANT },
      bgGrey300 : { backgroundColor: this.theme.palette.grey["300"] + IMPORTANT },
      bgGrey400 : { backgroundColor: this.theme.palette.grey["400"] + IMPORTANT },
      bgGrey500 : { backgroundColor: this.theme.palette.grey["500"] + IMPORTANT },
      bgGrey600 : { backgroundColor: this.theme.palette.grey["600"] + IMPORTANT },
      bgGrey700 : { backgroundColor: this.theme.palette.grey["700"] + IMPORTANT },
      bgGrey800 : { backgroundColor: this.theme.palette.grey["800"] + IMPORTANT },
      bgGrey900 : { backgroundColor: this.theme.palette.grey["900"] + IMPORTANT },
      bgGreyA100: { backgroundColor: this.theme.palette.grey.A100 + IMPORTANT },
      bgGreyA200: { backgroundColor: this.theme.palette.grey.A200 + IMPORTANT },
      bgGreyA400: { backgroundColor: this.theme.palette.grey.A400 + IMPORTANT },
      bgGreyA700: { backgroundColor: this.theme.palette.grey.A700 + IMPORTANT },

      bgDotGrid1: {
        backgroundSize:
          DEFAULT_SPACING + PX_TAG + " " + DEFAULT_SPACING + PX_TAG,
        backgroundImage:
          "radial-gradient(circle, #ccc 1px, rgba(0, 0, 0, 0) 1px)",
      },
      bgDotGrid2: {
        backgroundSize:
          DEFAULT_SPACING * 2 + PX_TAG + " " + DEFAULT_SPACING * 2 + PX_TAG,
        backgroundImage:
          "radial-gradient(circle, #ccc 1px, rgba(0, 0, 0, 0) 1px)",
      },
      bgDotGrid3: {
        backgroundSize:
          DEFAULT_SPACING * 3 + PX_TAG + " " + DEFAULT_SPACING * 3 + PX_TAG,
        backgroundImage:
          "radial-gradient(circle, #ccc 1px, rgba(0, 0, 0, 0) 1px)",
      },
      bgDotGrid4: {
        backgroundSize:
          DEFAULT_SPACING * 4 + PX_TAG + " " + DEFAULT_SPACING * 4 + PX_TAG,
        backgroundImage:
          "radial-gradient(circle, #ccc 1px, rgba(0, 0, 0, 0) 1px)",
      },
      bgDotGrid5: {
        backgroundSize:
          DEFAULT_SPACING * 5 + PX_TAG + " " + DEFAULT_SPACING * 5 + PX_TAG,
        backgroundImage:
          "radial-gradient(circle, #ccc 1px, rgba(0, 0, 0, 0) 1px)",
      },

      bgSquareGrid1: {
        backgroundSize:
          DEFAULT_SPACING + PX_TAG + " " + DEFAULT_SPACING + PX_TAG,
        backgroundImage:
          "linear-gradient(to right, #ccc 1px, rgba(0, 0, 0, 0) 1px), linear-gradient(to bottom, #ccc 1px, rgba(0, 0, 0, 0) 1px)",
      },
      bgSquareGrid2: {
        backgroundSize:
          DEFAULT_SPACING * 2 + PX_TAG + " " + DEFAULT_SPACING * 2 + PX_TAG,
        backgroundImage:
          "linear-gradient(to right, #ccc 1px, rgba(0, 0, 0, 0) 1px), linear-gradient(to bottom, #ccc 1px, rgba(0, 0, 0, 0) 1px)",
      },
      bgSquareGrid3: {
        backgroundSize:
          DEFAULT_SPACING * 3 + PX_TAG + " " + DEFAULT_SPACING * 3 + PX_TAG,
        backgroundImage:
          "linear-gradient(to right, #ccc 1px, rgba(0, 0, 0, 0) 1px), linear-gradient(to bottom, #ccc 1px, rgba(0, 0, 0, 0) 1px)",
      },
      bgSquareGrid4: {
        backgroundSize:
          DEFAULT_SPACING * 4 + PX_TAG + " " + DEFAULT_SPACING * 4 + PX_TAG,
        backgroundImage:
          "linear-gradient(to right, #ccc 1px, rgba(0, 0, 0, 0) 1px), linear-gradient(to bottom, #ccc 1px, rgba(0, 0, 0, 0) 1px)",
      },
      bgSquareGrid5: {
        backgroundSize:
          DEFAULT_SPACING * 5 + PX_TAG + " " + DEFAULT_SPACING * 5 + PX_TAG,
        backgroundImage:
          "linear-gradient(to right, #ccc 1px, rgba(0, 0, 0, 0) 1px), linear-gradient(to bottom, #ccc 1px, rgba(0, 0, 0, 0) 1px)",
      },

      bgGraphPaper1: {
        backgroundSize : "20px 20px",
        backgroundImage:
          "linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc), linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc)",
        backgroundColor: "#fff",
      },

      bgGraph: {
        background    : "linear-gradient(-90deg, rgba(0,0,0,.05) 1px, transparent 1px), linear-gradient(rgba(0,0,0,.05) 1px, transparent 1px), linear-gradient(-90deg, rgba(0, 0, 0, .04) 1px, transparent 1px), inear-gradient(rgba(0,0,0,.04) 1px, transparent 1px), inear-gradient(transparent 3px, #f2f2f2 3px, #f2f2f2 78px, transparent 78px), inear-gradient(-90deg, #aaa 1px, transparent 1px), inear-gradient(-90deg, transparent 3px, #f2f2f2 3px, #f2f2f2 78px, transparent 78px), inear-gradient(#aaa 1px, transparent 1px)",
        backgroundSize: "4px 4px, 4px 4px, 80px 80px, 80px 80px, 80px 80px, 80px 80px, 80px 80px, 80px 80px",
      },

      bgIsometricGrid: {
        backgroundSize : "20px 20px",
        backgroundImage:
          "linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc), linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc)",
        backgroundColor: "#fff",
      },

      /**************************************************
       * Gradient
       *************************************************/
      gradientLinearToBottom     : { backgroundImage: "linear-gradient(#ffffff26, #ffffffff)" },
      gradientLinearToTop        : { backgroundImage: "linear-gradient(to top, #ffffff26, #ffffffff)" },
      gradientLinearToRight      : { backgroundImage: "linear-gradient(to right, #ffffff26, #ffffffff)" },
      gradientLinearToLeft       : { backgroundImage: "linear-gradient(to left, #ffffff26, #ffffffff)" },
      gradientLinearToBottomRight: {
        backgroundImage:
          "linear-gradient(to bottom right, #ffffff26, #ffffffff)",
      },
      gradientLinearToBottomLeft: {
        backgroundImage:
          "linear-gradient(to bottom left, #ffffff26, #ffffffff)",
      },
      gradientLinearToTopRight: { backgroundImage: "linear-gradient(to top right, #ffffff26, #ffffffff)" },
      gradientLinearToTopLeft : { backgroundImage: "linear-gradient(to top left, #ffffff26, #ffffffff)" },

      gradientRadialCircle       : { backgroundImage: "radial-gradient(circle, #ffffff26, #ffffffff)" },
      gradientRadialEllipse      : { backgroundImage: "radial-gradient(ellipse, #ffffff26, #ffffffff)" },
      gradientRadialClosestSide  : { backgroundImage: "radial-gradient(closest-side, #ffffff26, #ffffffff)" },
      gradientRadialClosestCorner: {
        backgroundImage:
          "radial-gradient(closest-corner, #ffffff26, #ffffffff)",
      },
      gradientRadialFarthestSide  : { backgroundImage: "radial-gradient(farthest-side, #ffffff26, #ffffffff)" },
      gradientRadialFarthestCorner: {
        backgroundImage:
          "radial-gradient(farthest-corner, #ffffff26, #ffffffff)",
      },

      gradientRepeat  : { backgroundRepeat: "repeat" },
      gradientNoRepeat: { backgroundRepeat: "no-repeat" },
      gradientRepeatX : { backgroundRepeat: "repeat-x" },
      gradientRepeatY : { backgroundRepeat: "repeat-y" },
      gradientRound   : { backgroundSize: "100%" },
      gradientCover   : { backgroundSize: "cover" },
      gradientContain : { backgroundSize: "contain" },

      gradientConicFromTop: {
        backgroundImage:
          "conic-gradient(from 0deg at 50% 0%, #ffffff26, #ffffffff)",
      },
      gradientConicFromRight: {
        backgroundImage:
          "conic-gradient(from 90deg at 50% 0%, #ffffff26, #ffffffff)",
      },
      gradientConicFromBottom: {
        backgroundImage:
          "conic-gradient(from 180deg at 50% 0%, #ffffff26, #ffffffff)",
      },
      gradientConicFromLeft: {
        backgroundImage:
          "conic-gradient(from 270deg at 50% 0%, #ffffff26, #ffffffff)",
      },
      gradientConicFromTopRight: {
        backgroundImage:
          "conic-gradient(from 45deg at 50% 0%, #ffffff26, #ffffffff)",
      },
      gradientConicFromTopLeft: {
        backgroundImage:
          "conic-gradient(from 135deg at 50% 0%, #ffffff26, #ffffffff)",
      },
      gradientConicFromBottomRight: {
        backgroundImage:
          "conic-gradient(from 315deg at 50% 0%, #ffffff26, #ffffffff)",
      },
      gradientConicFromBottomLeft: {
        backgroundImage:
          "conic-gradient(from 225deg at 50% 0%, #ffffff26, #ffffffff)",
      },

      /**************************************************
       * Border
       *************************************************/
      border : { border: DEFAULT_BORDER },
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

      borderPrimary     : { borderColor: this.theme.palette?.primary?.main },
      borderPrimaryLight: { borderColor: this.theme.palette?.primary?.light },
      borderPrimaryDark : { borderColor: this.theme.palette?.primary?.dark },

      borderSecondary     : { borderColor: this.theme.palette?.secondary?.main },
      borderSecondaryLight: { borderColor: this.theme.palette?.secondary?.light },
      borderSecondaryDark : { borderColor: this.theme.palette?.secondary?.dark },

      borderSuccess     : { borderColor: this.theme.palette?.success?.main },
      borderSuccessLight: { borderColor: this.theme.palette?.success?.light },
      borderSuccessDark : { borderColor: this.theme.palette?.success?.dark },

      borderError     : { borderColor: this.theme.palette?.error?.main },
      borderErrorLight: { borderColor: this.theme.palette?.error?.light },
      borderErrorDark : { borderColor: this.theme.palette?.error?.dark },

      borderWarning     : { borderColor: this.theme.palette?.warning?.main },
      borderWarningLight: { borderColor: this.theme.palette?.warning?.light },
      borderWarningDark : { borderColor: this.theme.palette?.warning?.dark },

      borderInfo     : { borderColor: this.theme.palette?.info?.main },
      borderInfoLight: { borderColor: this.theme.palette?.info?.light },
      borderInfoDark : { borderColor: this.theme.palette?.info?.dark },

      borderGrey50  : { borderColor: this.theme.palette.grey["50"] },
      borderGrey100 : { borderColor: this.theme.palette.grey["100"] },
      borderGrey200 : { borderColor: this.theme.palette.grey["200"] },
      borderGrey300 : { borderColor: this.theme.palette.grey["300"] },
      borderGrey400 : { borderColor: this.theme.palette.grey["400"] },
      borderGrey500 : { borderColor: this.theme.palette.grey["500"] },
      borderGrey600 : { borderColor: this.theme.palette.grey["600"] },
      borderGrey700 : { borderColor: this.theme.palette.grey["700"] },
      borderGrey800 : { borderColor: this.theme.palette.grey["800"] },
      borderGrey900 : { borderColor: this.theme.palette.grey["900"] },
      borderGreyA100: { borderColor: this.theme.palette.grey.A100 },
      borderGreyA200: { borderColor: this.theme.palette.grey.A200 },
      borderGreyA400: { borderColor: this.theme.palette.grey.A400 },
      borderGreyA700: { borderColor: this.theme.palette.grey.A700 },

      borderBlack: { borderColor: "black" },
      borderWhite: { borderColor: "white" },

      border1: { borderWidth: DEFAULT_BORDER_WIDTH + PX_TAG },
      border2: { borderWidth: DEFAULT_BORDER_WIDTH * 2 + PX_TAG },
      border3: { borderWidth: DEFAULT_BORDER_WIDTH * 3 + PX_TAG },
      border4: { borderWidth: DEFAULT_BORDER_WIDTH * 4 + PX_TAG },
      border5: { borderWidth: DEFAULT_BORDER_WIDTH * 5 + PX_TAG },

      borderNone  : { borderStyle: "none" },
      borderDashed: { borderStyle: "dashed" },
      borderDotted: { borderStyle: "dotted" },
      borderDouble: { borderStyle: "double" },
      borderGroove: { borderStyle: "groove" },
      borderHidden: { borderStyle: "hidden" },
      borderInset : { borderStyle: "inset" },
      borderOutset: { borderStyle: "outset" },
      borderRidge : { borderStyle: "ridge" },
      borderSolid : { borderStyle: "solid" },

      borderRounded      : { borderRadius: DEFAULT_BORDER_RADIUS * 2 + PX_TAG + IMPORTANT },
      borderRounded0     : { borderRadius: 0 + IMPORTANT },
      borderRounded1     : { borderRadius: DEFAULT_BORDER_RADIUS + PX_TAG + IMPORTANT },
      borderRounded2     : { borderRadius: DEFAULT_BORDER_RADIUS * 2 + PX_TAG + IMPORTANT },
      borderRounded3     : { borderRadius: DEFAULT_BORDER_RADIUS * 3 + PX_TAG + IMPORTANT },
      borderRounded4     : { borderRadius: DEFAULT_BORDER_RADIUS * 4 + PX_TAG + IMPORTANT },
      borderRounded5     : { borderRadius: DEFAULT_BORDER_RADIUS * 5 + PX_TAG + IMPORTANT },
      borderRoundedCircle: { borderRadius: "50%" + IMPORTANT },
      borderRoundedPill  : { borderRadius: "50rem" + IMPORTANT },

      borderRoundedTop: {
        borderTopLeftRadius : DEFAULT_BORDER_RADIUS + PX_TAG + IMPORTANT,
        borderTopRightRadius: DEFAULT_BORDER_RADIUS + PX_TAG + IMPORTANT,
      },
      borderRoundedTop0: {
        borderTopLeftRadius : 0 + IMPORTANT,
        borderTopRightRadius: 0 + IMPORTANT,
      },
      borderRoundedTop1: {
        borderTopLeftRadius : DEFAULT_BORDER_RADIUS + PX_TAG + IMPORTANT,
        borderTopRightRadius: DEFAULT_BORDER_RADIUS + PX_TAG + IMPORTANT,
      },
      borderRoundedTop2: {
        borderTopLeftRadius : DEFAULT_BORDER_RADIUS * 2 + PX_TAG + IMPORTANT,
        borderTopRightRadius: DEFAULT_BORDER_RADIUS * 2 + PX_TAG + IMPORTANT,
      },
      borderRoundedTop3: {
        borderTopLeftRadius : DEFAULT_BORDER_RADIUS * 3 + PX_TAG + IMPORTANT,
        borderTopRightRadius: DEFAULT_BORDER_RADIUS * 3 + PX_TAG + IMPORTANT,
      },
      borderRoundedTop4: {
        borderTopLeftRadius : DEFAULT_BORDER_RADIUS * 4 + PX_TAG + IMPORTANT,
        borderTopRightRadius: DEFAULT_BORDER_RADIUS * 4 + PX_TAG + IMPORTANT,
      },
      borderRoundedTop5: {
        borderTopLeftRadius : DEFAULT_BORDER_RADIUS * 5 + PX_TAG + IMPORTANT,
        borderTopRightRadius: DEFAULT_BORDER_RADIUS * 5 + PX_TAG + IMPORTANT,
      },
      borderRoundedTopCircle: {
        borderTopLeftRadius : "50%" + IMPORTANT,
        borderTopRightRadius: "50%" + IMPORTANT,
      },
      borderRoundedTopPill: {
        borderTopLeftRadius : "50rem" + IMPORTANT,
        borderTopRightRadius: "50rem" + IMPORTANT,
      },

      borderRoundedEnd: {
        borderTopRightRadius   : DEFAULT_BORDER_RADIUS + PX_TAG + IMPORTANT,
        borderBottomRightRadius: DEFAULT_BORDER_RADIUS + PX_TAG + IMPORTANT,
      },
      borderRoundedEnd0: {
        borderTopRightRadius   : 0 + IMPORTANT,
        borderBottomRightRadius: 0 + IMPORTANT,
      },
      borderRoundedEnd1: {
        borderTopRightRadius   : DEFAULT_BORDER_RADIUS + PX_TAG + IMPORTANT,
        borderBottomRightRadius: DEFAULT_BORDER_RADIUS + PX_TAG + IMPORTANT,
      },
      borderRoundedEnd2: {
        borderTopRightRadius   : DEFAULT_BORDER_RADIUS * 2 + PX_TAG + IMPORTANT,
        borderBottomRightRadius: DEFAULT_BORDER_RADIUS * 2 + PX_TAG + IMPORTANT,
      },
      borderRoundedEnd3: {
        borderTopRightRadius   : DEFAULT_BORDER_RADIUS * 3 + PX_TAG + IMPORTANT,
        borderBottomRightRadius: DEFAULT_BORDER_RADIUS * 3 + PX_TAG + IMPORTANT,
      },
      borderRoundedEnd4: {
        borderTopRightRadius   : DEFAULT_BORDER_RADIUS * 4 + PX_TAG + IMPORTANT,
        borderBottomRightRadius: DEFAULT_BORDER_RADIUS * 4 + PX_TAG + IMPORTANT,
      },
      borderRoundedEnd5: {
        borderTopRightRadius   : DEFAULT_BORDER_RADIUS * 5 + PX_TAG + IMPORTANT,
        borderBottomRightRadius: DEFAULT_BORDER_RADIUS * 5 + PX_TAG + IMPORTANT,
      },
      borderRoundedEndCircle: {
        borderTopRightRadius   : "50%" + IMPORTANT,
        borderBottomRightRadius: "50%" + IMPORTANT,
      },
      borderRoundedEndPill: {
        borderTopRightRadius   : "50rem" + IMPORTANT,
        borderBottomRightRadius: "50rem" + IMPORTANT,
      },

      borderRoundedBottom: {
        borderBottomRightRadius: DEFAULT_BORDER_RADIUS + PX_TAG + IMPORTANT,
        borderBottomLeftRadius : DEFAULT_BORDER_RADIUS + PX_TAG + IMPORTANT,
      },
      borderRoundedBottom0: {
        borderBottomRightRadius: 0 + IMPORTANT,
        borderBottomLeftRadius : 0 + IMPORTANT,
      },
      borderRoundedBottom1: {
        borderBottomRightRadius: DEFAULT_BORDER_RADIUS + PX_TAG + IMPORTANT,
        borderBottomLeftRadius : DEFAULT_BORDER_RADIUS + PX_TAG + IMPORTANT,
      },
      borderRoundedBottom2: {
        borderBottomRightRadius: DEFAULT_BORDER_RADIUS * 2 + PX_TAG + IMPORTANT,
        borderBottomLeftRadius : DEFAULT_BORDER_RADIUS * 2 + PX_TAG + IMPORTANT,
      },
      borderRoundedBottom3: {
        borderBottomRightRadius: DEFAULT_BORDER_RADIUS * 3 + PX_TAG + IMPORTANT,
        borderBottomLeftRadius : DEFAULT_BORDER_RADIUS * 3 + PX_TAG + IMPORTANT,
      },
      borderRoundedBottom4: {
        borderBottomRightRadius: DEFAULT_BORDER_RADIUS * 4 + PX_TAG + IMPORTANT,
        borderBottomLeftRadius : DEFAULT_BORDER_RADIUS * 4 + PX_TAG + IMPORTANT,
      },
      borderRoundedBottom5: {
        borderBottomRightRadius: DEFAULT_BORDER_RADIUS * 5 + PX_TAG + IMPORTANT,
        borderBottomLeftRadius : DEFAULT_BORDER_RADIUS * 5 + PX_TAG + IMPORTANT,
      },
      borderRoundedBottomCircle: {
        borderBottomRightRadius: "50%" + IMPORTANT,
        borderBottomLeftRadius : "50%" + IMPORTANT,
      },
      borderRoundedBottomPill: {
        borderBottomRightRadius: "50rem" + IMPORTANT,
        borderBottomLeftRadius : "50rem" + IMPORTANT,
      },

      borderRoundedStart: {
        borderBottomLeftRadius: DEFAULT_BORDER_RADIUS + PX_TAG + IMPORTANT,
        borderTopLeftRadius   : DEFAULT_BORDER_RADIUS + PX_TAG + IMPORTANT,
      },
      borderRoundedStart0: {
        borderBottomLeftRadius: 0 + IMPORTANT,
        borderTopLeftRadius   : 0 + IMPORTANT,
      },
      borderRoundedStart1: {
        borderBottomLeftRadius: DEFAULT_BORDER_RADIUS + PX_TAG + IMPORTANT,
        borderTopLeftRadius   : DEFAULT_BORDER_RADIUS + PX_TAG + IMPORTANT,
      },
      borderRoundedStart2: {
        borderBottomLeftRadius: DEFAULT_BORDER_RADIUS * 2 + PX_TAG + IMPORTANT,
        borderTopLeftRadius   : DEFAULT_BORDER_RADIUS * 2 + PX_TAG + IMPORTANT,
      },
      borderRoundedStart3: {
        borderBottomLeftRadius: DEFAULT_BORDER_RADIUS * 3 + PX_TAG + IMPORTANT,
        borderTopLeftRadius   : DEFAULT_BORDER_RADIUS * 3 + PX_TAG + IMPORTANT,
      },
      borderRoundedStart4: {
        borderBottomLeftRadius: DEFAULT_BORDER_RADIUS * 4 + PX_TAG + IMPORTANT,
        borderTopLeftRadius   : DEFAULT_BORDER_RADIUS * 4 + PX_TAG + IMPORTANT,
      },
      borderRoundedStart5: {
        borderBottomLeftRadius: DEFAULT_BORDER_RADIUS * 5 + PX_TAG + IMPORTANT,
        borderTopLeftRadius   : DEFAULT_BORDER_RADIUS * 5 + PX_TAG + IMPORTANT,
      },
      borderRoundedStartCircle: {
        borderBottomLeftRadius: "50%" + IMPORTANT,
        borderTopLeftRadius   : "50%" + IMPORTANT,
      },
      borderRoundedStartPill: {
        borderBottomLeftRadius: "50rem" + IMPORTANT,
        borderTopLeftRadius   : "50rem" + IMPORTANT,
      },

      /**************************************************
       * Color
       *************************************************/
      textPrimary     : { color: this.theme.palette?.primary?.main + IMPORTANT },
      textPrimaryLight: { color: this.theme.palette?.primary?.light + IMPORTANT },
      textPrimaryDark : { color: this.theme.palette?.primary?.dark + IMPORTANT },

      textSecondary     : { color: this.theme.palette?.secondary?.main + IMPORTANT },
      textSecondaryLight: { color: this.theme.palette?.secondary?.light + IMPORTANT },
      textSecondaryDark : { color: this.theme.palette?.secondary?.dark + IMPORTANT },

      textSuccess     : { color: this.theme.palette?.success?.main + IMPORTANT },
      textSuccessLight: { color: this.theme.palette?.success?.light + IMPORTANT },
      textSuccessDark : { color: this.theme.palette?.success?.dark + IMPORTANT },

      textError     : { color: this.theme.palette?.error?.main + IMPORTANT },
      textErrorLight: { color: this.theme.palette?.error?.light + IMPORTANT },
      textErrorDark : { color: this.theme.palette?.error?.dark + IMPORTANT },

      textWarning     : { color: this.theme.palette?.warning?.main + IMPORTANT },
      textWarningLight: { color: this.theme.palette?.warning?.light + IMPORTANT },
      textWarningDark : { color: this.theme.palette?.warning?.dark + IMPORTANT },

      textInfo     : { color: this.theme.palette?.info?.main + IMPORTANT },
      textInfoLight: { color: this.theme.palette?.info?.light + IMPORTANT },
      textInfoDark : { color: this.theme.palette?.info?.dark + IMPORTANT },

      textBlack  : { color: "#000000" + IMPORTANT },
      textBlack50: { color: "#00000077" + IMPORTANT },
      textWhite  : { color: "#ffffff" + IMPORTANT },
      textWhite50: { color: "#ffffff77" + IMPORTANT },

      textReset: { color: "inherit" + IMPORTANT },

      textOpacity25 : { opacity: "0.25" + IMPORTANT },
      textOpacity50 : { opacity: "0.5" + IMPORTANT },
      textOpacity75 : { opacity: "0.75" + IMPORTANT },
      textOpacity100: { opacity: "1" + IMPORTANT },

      // -- textLight: {},
      // -- textDark: {},
      // -- textBody: {},
      // -- textMuted: {},
      // -- textBodySecondary: {},
      // -- textBodyTertiary: {},
      // -- textBodyEmphasis: {},
      // -- textPrimaryEmphasis: {},
      // -- textSecondaryEmphasis: {},
      // -- textSuccessEmphasis: {},
      // -- textInfoEmphasis: {},
      // -- textWarningEmphasis: {},
      // -- textDangerEmphasis: {},
      // -- textLightEmphasis: {},
      // -- textDarkEmphasis: {},

      /**************************************************
       * Cursor
       *************************************************/
      cursorAlias       : { cursor: "alias " },
      cursorAllScroll   : { cursor: "all-scroll " },
      cursorAuto        : { cursor: "auto" },
      cursorCell        : { cursor: "cell " },
      cursorColResize   : { cursor: "col-resize " },
      cursorContextMenu : { cursor: "context-menu" },
      cursorCopy        : { cursor: "copy " },
      cursorCrosshair   : { cursor: "crosshair " },
      cursorDefault     : { cursor: "default " },
      cursorEwResize    : { cursor: "ew-resize " },
      cursorEResize     : { cursor: "e-resize " },
      cursorGrab        : { cursor: "grab " },
      cursorGrabbing    : { cursor: "grabbing " },
      cursorHelp        : { cursor: "help " },
      cursorMove        : { cursor: "move " },
      cursorNResize     : { cursor: "n-resize " },
      cursorNeResize    : { cursor: "ne-resize " },
      cursorNeswResize  : { cursor: "nesw-resize" },
      cursorInitial     : { cursor: "initial " },
      cursorNoDrop      : { cursor: "no-drop " },
      cursorInherit     : { cursor: "inherit" },
      cursorNone        : { cursor: "none " },
      cursorNotAllowed  : { cursor: "not-allowed " },
      cursorNsResize    : { cursor: "ns-resize " },
      cursorNwResize    : { cursor: "nw-resize " },
      cursorNwseResize  : { cursor: "nwse-resize" },
      cursorPointer     : { cursor: "pointer " },
      cursorProgress    : { cursor: "progress " },
      cursorRowResize   : { cursor: "row-resize " },
      cursorSResize     : { cursor: "s-resize " },
      cursorSeResize    : { cursor: "se-resize " },
      cursorSwResize    : { cursor: "sw-resize " },
      cursorText        : { cursor: "text " },
      cursorURL         : { cursor: "URL " },
      cursorVerticalText: { cursor: "vertical-text" },
      cursorWResize     : { cursor: "w-resize " },
      cursorWait        : { cursor: "wait " },
      cursorZoomIn      : { cursor: "zoom-in" },
      cursorZoomOut     : { cursor: "zoom-out" },

      /**************************************************
       * Display
       *************************************************/
      displayInline     : { display: "inline" + IMPORTANT },
      displayInlineBlock: { display: "inline-block" + IMPORTANT },
      displayBlock      : { display: "block" + IMPORTANT + IMPORTANT },
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
      flexDirectionRow          : { flexDirection: "row" },
      flexDirectionColumn       : { flexDirection: "column" },
      flexDirectionRowReverse   : { flexDirection: "row-reverse" },
      flexDirectionColumnReverse: { flexDirection: "column-reverse" },
      flexFill                  : { flex: "1 1 auto" },
      flexGrow0                 : { flexGrow: "0" },
      flexGrow1                 : { flexGrow: "1" },
      flexShrink0               : { flexShrink: "0" },
      flexShrink1               : { flexShrink: "1" },
      flexWrapWrap              : { flexWrap: "wrap" },
      flexWrapNoWrap            : { flexWrap: "nowrap" },
      flexWrapWrapReverse       : { flexWrap: "wrap-reverse" },

      /**************************************************
       * Float
       *************************************************/
      floatStart: { float: "left" },
      floatEnd  : { float: "right" },
      floatNone : { float: "none" },

      /**************************************************
       * Interactions
       *************************************************/
      userSelectAll: {
        // -webkit-user-select: all !important;
        // -moz-user-select: all !important;
        userSelect: "all",
      },
      userSelectAuto: {
        // -webkit-user-select: auto !important;
        // -moz-user-select: auto !important;
        userSelect: "auto",
      },
      userSelectNone: {
        // -webkit-user-select: none !important;
        // -moz-user-select: none !important;
        userSelect: "none",
      },

      peNone: { pointerEvents: "none" },
      peAuto: { pointerEvents: "auto" },

      /**************************************************
       * Object Fit
       *************************************************/
      objectFitContain: {
        // -o-object-fit: contain !important;
        objectFit: "contain",
      },
      objectFitCover: {
        // -o-object-fit: cover !important;
        objectFit: "cover",
      },
      objectFitFill: {
        // -o-object-fit: fill !important;
        objectFit: "fill",
      },
      objectFitScale: {
        // -o-object-fit: scale-down !important;
        objectFit: "scale-down",
      },
      objectFitNone: {
        // -o-object-fit: none !important;
        objectFit: "none",
      },

      /**************************************************
       * Opacity
       *************************************************/
      opacity0  : { opacity: "0.00" },
      opacity5  : { opacity: "0.05" },
      opacity10 : { opacity: "0.10" },
      opacity15 : { opacity: "0.15" },
      opacity20 : { opacity: "0.20" },
      opacity25 : { opacity: "0.25" },
      opacity30 : { opacity: "0.30" },
      opacity35 : { opacity: "0.35" },
      opacity40 : { opacity: "0.40" },
      opacity45 : { opacity: "0.45" },
      opacity50 : { opacity: "0.50" },
      opacity55 : { opacity: "0.55" },
      opacity60 : { opacity: "0.60" },
      opacity65 : { opacity: "0.65" },
      opacity70 : { opacity: "0.70" },
      opacity75 : { opacity: "0.75" },
      opacity80 : { opacity: "0.80" },
      opacity85 : { opacity: "0.85" },
      opacity90 : { opacity: "0.90" },
      opacity95 : { opacity: "0.95" },
      opacity100: { opacity: "1.00" },

      /**************************************************
       * Overflow
       *************************************************/
      overflowAuto    : { overflow: "auto" },
      overflowHidden  : { overflow: "hidden" },
      overflowVisible : { overflow: "visible" },
      overflowScroll  : { overflow: "scroll" },
      overflowXAuto   : { overflowX: "auto" },
      overflowXHidden : { overflowX: "hidden" },
      overflowXVisible: { overflowX: "visible" },
      overflowXScroll : { overflowX: "scroll" },
      overflowYAuto   : { overflowY: "auto" },
      overflowYHidden : { overflowY: "hidden" },
      overflowYVisible: { overflowY: "visible" },
      overflowYScroll : { overflowY: "scroll" },

      /**************************************************
       * Position
       *************************************************/
      positionStatic  : { position: "static" },
      positionRelative: { position: "relative" },
      positionAbsolute: { position: "absolute" },
      positionFixed   : { position: "fixed" },
      positionSticky  : {
        // -- position: "-webkit-sticky",
        position: "sticky",
      },

      /**
       * @todo multiple value for same property
       */
      top0  : { top: "0" },
      top50 : { top: "50%" },
      top100: { top: "100%" },

      bottom0  : { bottom: "0" },
      bottom50 : { bottom: "50%" },
      bottom100: { bottom: "100%" },

      start0  : { left: "0" },
      start50 : { left: "50%" },
      start100: { left: "100%" },

      end0  : { right: "0" },
      end50 : { right: "50%" },
      end100: { right: "100%" },

      rotate15 : { transform: "rotate(15deg)" },
      rotate30 : { transform: "rotate(30deg)" },
      rotate45 : { transform: "rotate(45deg)" },
      rotate60 : { transform: "rotate(60deg)" },
      rotate75 : { transform: "rotate(75deg)" },
      rotate90 : { transform: "rotate(90deg)" },
      rotate120: { transform: "rotate(120deg)" },
      rotate180: { transform: "rotate(180deg)" },
      rotate270: { transform: "rotate(270deg)" },

      rotateN15 : { transform: "rotate(-15deg)" },
      rotateN30 : { transform: "rotate(-30deg)" },
      rotateN45 : { transform: "rotate(-45deg)" },
      rotateN60 : { transform: "rotate(-60deg)" },
      rotateN75 : { transform: "rotate(-75deg)" },
      rotateN90 : { transform: "rotate(-90deg)" },
      rotateN120: { transform: "rotate(-120deg)" },
      rotateN180: { transform: "rotate(-180deg)" },
      rotateN270: { transform: "rotate(-270deg)" },

      rotateX15 : { transform: "rotateX(15deg)" },
      rotateX30 : { transform: "rotateX(30deg)" },
      rotateX45 : { transform: "rotateX(45deg)" },
      rotateX60 : { transform: "rotateX(60deg)" },
      rotateX75 : { transform: "rotateX(75deg)" },
      rotateX90 : { transform: "rotateX(90deg)" },
      rotateX120: { transform: "rotateX(120deg)" },
      rotateX145: { transform: "rotateX(145deg)" },
      rotateX180: { transform: "rotateX(180deg)" },
      rotateX270: { transform: "rotateX(270deg)" },

      rotateXN15 : { transform: "rotateX(-15deg)" },
      rotateXN30 : { transform: "rotateX(-30deg)" },
      rotateXN45 : { transform: "rotateX(-45deg)" },
      rotateXN60 : { transform: "rotateX(-60deg)" },
      rotateXN75 : { transform: "rotateX(-75deg)" },
      rotateXN90 : { transform: "rotateX(-90deg)" },
      rotateXN120: { transform: "rotateX(-120deg)" },
      rotateXN145: { transform: "rotateX(-145deg)" },
      rotateXN180: { transform: "rotateX(-180deg)" },
      rotateXN270: { transform: "rotateX(-270deg)" },

      rotateY15 : { transform: "rotateY(15deg)" },
      rotateY30 : { transform: "rotateY(30deg)" },
      rotateY45 : { transform: "rotateY(45deg)" },
      rotateY60 : { transform: "rotateY(60deg)" },
      rotateY75 : { transform: "rotateY(75deg)" },
      rotateY90 : { transform: "rotateY(90deg)" },
      rotateY120: { transform: "rotateY(120deg)" },
      rotateY145: { transform: "rotateY(145deg)" },
      rotateY180: { transform: "rotateY(180deg)" },
      rotateY270: { transform: "rotateY(270deg)" },

      rotateYN15 : { transform: "rotateY(-15deg)" },
      rotateYN30 : { transform: "rotateY(-30deg)" },
      rotateYN45 : { transform: "rotateY(-45deg)" },
      rotateYN60 : { transform: "rotateY(-60deg)" },
      rotateYN75 : { transform: "rotateY(-75deg)" },
      rotateYN90 : { transform: "rotateY(-90deg)" },
      rotateYN120: { transform: "rotateY(-120deg)" },
      rotateYN145: { transform: "rotateY(-145deg)" },
      rotateYN180: { transform: "rotateY(-180deg)" },
      rotateYN270: { transform: "rotateY(-270deg)" },

      translateMiddle : { transform: "translate(-50%, -50%)" },
      translateMiddleX: { transform: "translateX(-50%)" },
      translateMiddleY: { transform: "translateY(-50%)" },

      fixedTop: {
        left    : "0",
        position: "fixed",
        right   : "0",
        top     : "0",
        zIndex  : "1030",
      },
      fixedBottom: {
        bottom  : "0",
        left    : "0",
        position: "fixed",
        right   : "0",
        zIndex  : "1030",
      },
      stickyTop: {
        // -- position: "-webkit-sticky",
        position: "sticky",
        top     : "0",
        zIndex  : "1020",
      },
      stickyBottom: {
        bottom  : "0",
        // -- position: "-webkit-sticky",
        position: "sticky",
        zIndex  : "1020",
      },

      /**************************************************
       * Shadows
       * @todo change color using theme
       *************************************************/
      shadow: {
        boxShadow:
          "0 0.5rem 1rem rgba(" +
          DEFAULT_SHADOW_COLOR_RGB +
          ", 0.15)" +
          IMPORTANT,
      },
      shadowSm: {
        boxShadow:
          "0 0.125rem 0.25rem rgba(" +
          DEFAULT_SHADOW_COLOR_RGB +
          ", 0.075)" +
          IMPORTANT,
      },
      shadowLg: {
        boxShadow:
          "0 1rem 3rem rgba(" +
          DEFAULT_SHADOW_COLOR_RGB +
          ", 0.175)" +
          IMPORTANT,
      },
      shadowNone: { boxShadow: "none" + IMPORTANT },

      /**************************************************
       * Sizing
       *************************************************/
      boxSizingBorderBox : { boxSizing: "border-box" },
      boxSizingContentBox: { boxSizing: "content-box" },
      boxSizingInherit   : { boxSizing: "inherit" },
      boxSizingInitial   : { boxSizing: "initial" },

      /*-------------------------------------------------
       * Width
       *-----------------------------------------------*/
      w25     : { width: "25%" },
      w50     : { width: "50%" },
      w75     : { width: "75%" },
      w100    : { width: "100%" },
      wAuto   : { width: "auto" },
      maxW25  : { maxWidth: "25%" },
      maxW50  : { maxWidth: "50%" },
      maxW75  : { maxWidth: "75%" },
      maxW100 : { maxWidth: "100%" },
      minW25  : { minWidth: "25%" },
      minW50  : { minWidth: "50%" },
      minW75  : { minWidth: "75%" },
      minW100 : { minWidth: "100%" },
      vw25    : { width: "25vw" },
      vw50    : { width: "50vw" },
      vw75    : { width: "75vw" },
      vw100   : { width: "100vw" },
      maxVw25 : { maxWidth: "25vw" },
      maxVw50 : { maxWidth: "50vw" },
      maxVw75 : { maxWidth: "75vw" },
      maxVw100: { maxWidth: "100vw" },
      minVw25 : { minWidth: "25vw" },
      minVw50 : { minWidth: "50vw" },
      minVw75 : { minWidth: "75vw" },
      minVw100: { minWidth: "100vw" },

      /*-------------------------------------------------
       * Height
       *-----------------------------------------------*/
      h25     : { height: "25%" },
      h50     : { height: "50%" },
      h75     : { height: "75%" },
      h100    : { height: "100%" },
      hAuto   : { height: "auto" },
      maxH25  : { maxHeight: "25%" },
      maxH50  : { maxHeight: "50%" },
      maxH75  : { maxHeight: "75%" },
      maxH100 : { maxHeight: "100%" },
      minH25  : { minHeight: "25%" },
      minH50  : { minHeight: "50%" },
      minH75  : { minHeight: "75%" },
      minH100 : { minHeight: "100%" },
      vh25    : { height: "25vh" },
      vh50    : { height: "50vh" },
      vh75    : { height: "75vh" },
      vh100   : { height: "100vh" },
      maxVh25 : { maxHeight: "25vh" },
      maxVh50 : { maxHeight: "50vh" },
      maxVh75 : { maxHeight: "75vh" },
      maxVh100: { maxHeight: "100vh" },
      minVh25 : { minHeight: "25vh" },
      minVh50 : { minHeight: "50vh" },
      minVh75 : { minHeight: "75vh" },
      minVh100: { minHeight: "100vh" },

      /**************************************************
       * Spacing
       *************************************************/
      /*-------------------------------------------------
       * Padding
       *-----------------------------------------------*/

      p0: { padding: 0 + PX_TAG + IMPORTANT },
      p1: { padding: DEFAULT_PADDING + PX_TAG + IMPORTANT },
      p2: { padding: DEFAULT_PADDING * 2 + PX_TAG + IMPORTANT },
      p3: { padding: DEFAULT_PADDING * 3 + PX_TAG + IMPORTANT },
      p4: { padding: DEFAULT_PADDING * 4 + PX_TAG + IMPORTANT },
      p5: { padding: DEFAULT_PADDING * 5 + PX_TAG + IMPORTANT },

      pt0: { paddingTop: 0 + PX_TAG + IMPORTANT },
      pt1: { paddingTop: DEFAULT_PADDING + PX_TAG + IMPORTANT },
      pt2: { paddingTop: DEFAULT_PADDING * 2 + PX_TAG + IMPORTANT },
      pt3: { paddingTop: DEFAULT_PADDING * 3 + PX_TAG + IMPORTANT },
      pt4: { paddingTop: DEFAULT_PADDING * 4 + PX_TAG + IMPORTANT },
      pt5: { paddingTop: DEFAULT_PADDING * 5 + PX_TAG + IMPORTANT },

      pr0: { paddingRight: 0 + PX_TAG + IMPORTANT },
      pr1: { paddingRight: DEFAULT_PADDING + PX_TAG + IMPORTANT },
      pr2: { paddingRight: DEFAULT_PADDING * 2 + PX_TAG + IMPORTANT },
      pr3: { paddingRight: DEFAULT_PADDING * 3 + PX_TAG + IMPORTANT },
      pr4: { paddingRight: DEFAULT_PADDING * 4 + PX_TAG + IMPORTANT },
      pr5: { paddingRight: DEFAULT_PADDING * 5 + PX_TAG + IMPORTANT },

      pb0: { paddingBottom: 0 + PX_TAG + IMPORTANT },
      pb1: { paddingBottom: DEFAULT_PADDING + PX_TAG + IMPORTANT },
      pb2: { paddingBottom: DEFAULT_PADDING * 2 + PX_TAG + IMPORTANT },
      pb3: { paddingBottom: DEFAULT_PADDING * 3 + PX_TAG + IMPORTANT },
      pb4: { paddingBottom: DEFAULT_PADDING * 4 + PX_TAG + IMPORTANT },
      pb5: { paddingBottom: DEFAULT_PADDING * 5 + PX_TAG + IMPORTANT },

      pl0: { paddingLeft: 0 + PX_TAG + IMPORTANT },
      pl1: { paddingLeft: DEFAULT_PADDING + PX_TAG + IMPORTANT },
      pl2: { paddingLeft: DEFAULT_PADDING * 2 + PX_TAG + IMPORTANT },
      pl3: { paddingLeft: DEFAULT_PADDING * 3 + PX_TAG + IMPORTANT },
      pl4: { paddingLeft: DEFAULT_PADDING * 4 + PX_TAG + IMPORTANT },
      pl5: { paddingLeft: DEFAULT_PADDING * 5 + PX_TAG + IMPORTANT },

      px0: {
        paddingLeft : 0 + PX_TAG + IMPORTANT,
        paddingRight: 0 + PX_TAG + IMPORTANT,
      },
      px1: {
        paddingLeft : DEFAULT_PADDING * 1 + PX_TAG + IMPORTANT,
        paddingRight: DEFAULT_PADDING * 1 + PX_TAG,
      },
      px2: {
        paddingLeft : DEFAULT_PADDING * 2 + PX_TAG + IMPORTANT,
        paddingRight: DEFAULT_PADDING * 2 + PX_TAG + IMPORTANT,
      },
      px3: {
        paddingLeft : DEFAULT_PADDING * 3 + PX_TAG + IMPORTANT,
        paddingRight: DEFAULT_PADDING * 3 + PX_TAG,
      },
      px4: {
        paddingLeft : DEFAULT_PADDING * 4 + PX_TAG + IMPORTANT,
        paddingRight: DEFAULT_PADDING * 4 + PX_TAG + IMPORTANT,
      },
      px5: {
        paddingLeft : DEFAULT_PADDING * 5 + PX_TAG + IMPORTANT,
        paddingRight: DEFAULT_PADDING * 5 + PX_TAG + IMPORTANT,
      },

      py0: {
        paddingBottom: 0 + PX_TAG + IMPORTANT,
        paddingTop   : 0 + PX_TAG + IMPORTANT,
      },
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

      /*-------------------------------------------------
       * Margin
       *-----------------------------------------------*/
      m0   : { margin: 0 + IMPORTANT },
      m1   : { margin: DEFAULT_MARGIN + PX_TAG + IMPORTANT },
      m2   : { margin: DEFAULT_MARGIN * 2 + PX_TAG + IMPORTANT },
      m3   : { margin: DEFAULT_MARGIN * 3 + PX_TAG + IMPORTANT },
      m4   : { margin: DEFAULT_MARGIN * 4 + PX_TAG + IMPORTANT },
      m5   : { margin: DEFAULT_MARGIN * 5 + PX_TAG + IMPORTANT },
      mAuto: { margin: "auto" + IMPORTANT },

      mt0   : { marginTop: 0 + IMPORTANT },
      mt1   : { marginTop: DEFAULT_MARGIN + PX_TAG + IMPORTANT },
      mt2   : { marginTop: DEFAULT_MARGIN * 2 + PX_TAG + IMPORTANT },
      mt3   : { marginTop: DEFAULT_MARGIN * 3 + PX_TAG + IMPORTANT },
      mt4   : { marginTop: DEFAULT_MARGIN * 4 + PX_TAG + IMPORTANT },
      mt5   : { marginTop: DEFAULT_MARGIN * 5 + PX_TAG + IMPORTANT },
      mtAuto: { marginTop: "auto" + IMPORTANT },

      mr0   : { marginRight: 0 + IMPORTANT },
      mr1   : { marginRight: DEFAULT_MARGIN + PX_TAG + IMPORTANT },
      mr2   : { marginRight: DEFAULT_MARGIN * 2 + PX_TAG + IMPORTANT },
      mr3   : { marginRight: DEFAULT_MARGIN * 3 + PX_TAG + IMPORTANT },
      mr4   : { marginRight: DEFAULT_MARGIN * 4 + PX_TAG + IMPORTANT },
      mr5   : { marginRight: DEFAULT_MARGIN * 5 + PX_TAG + IMPORTANT },
      mrAuto: { marginRight: "auto" + IMPORTANT },

      mb0   : { marginBottom: 0 + IMPORTANT },
      mb1   : { marginBottom: DEFAULT_MARGIN + PX_TAG + IMPORTANT },
      mb2   : { marginBottom: DEFAULT_MARGIN * 2 + PX_TAG + IMPORTANT },
      mb3   : { marginBottom: DEFAULT_MARGIN * 3 + PX_TAG + IMPORTANT },
      mb4   : { marginBottom: DEFAULT_MARGIN * 4 + PX_TAG + IMPORTANT },
      mb5   : { marginBottom: DEFAULT_MARGIN * 5 + PX_TAG + IMPORTANT },
      mbAuto: { marginBottom: "auto" + IMPORTANT },

      ml0   : { marginLeft: 0 + IMPORTANT },
      ml1   : { marginLeft: DEFAULT_MARGIN + PX_TAG + IMPORTANT },
      ml2   : { marginLeft: DEFAULT_MARGIN * 2 + PX_TAG + IMPORTANT },
      ml3   : { marginLeft: DEFAULT_MARGIN * 3 + PX_TAG + IMPORTANT },
      ml4   : { marginLeft: DEFAULT_MARGIN * 4 + PX_TAG + IMPORTANT },
      ml5   : { marginLeft: DEFAULT_MARGIN * 5 + PX_TAG + IMPORTANT },
      mlAuto: { marginLeft: "auto" + IMPORTANT },

      mx0: { marginLeft: 0, marginRight: 0 + IMPORTANT },
      mx1: {
        marginLeft : DEFAULT_MARGIN * 1 + PX_TAG + IMPORTANT,
        marginRight: DEFAULT_MARGIN * 1 + PX_TAG + IMPORTANT,
      },
      mx2: {
        marginLeft : DEFAULT_MARGIN * 2 + PX_TAG + IMPORTANT,
        marginRight: DEFAULT_MARGIN * 2 + PX_TAG + IMPORTANT,
      },
      mx3: {
        marginLeft : DEFAULT_MARGIN * 3 + PX_TAG + IMPORTANT,
        marginRight: DEFAULT_MARGIN * 3 + PX_TAG + IMPORTANT,
      },
      mx4: {
        marginLeft : DEFAULT_MARGIN * 4 + PX_TAG + IMPORTANT,
        marginRight: DEFAULT_MARGIN * 4 + PX_TAG + IMPORTANT,
      },
      mx5: {
        marginLeft : DEFAULT_MARGIN * 5 + PX_TAG + IMPORTANT,
        marginRight: DEFAULT_MARGIN * 5 + PX_TAG + IMPORTANT,
      },
      mxAuto: { marginLeft: "auto", marginRight: "auto" + IMPORTANT },

      my0: { marginBottom: 0, marginTop: 0 + IMPORTANT },
      my1: {
        marginBottom: DEFAULT_MARGIN * 1 + PX_TAG + IMPORTANT,
        marginTop   : DEFAULT_MARGIN * 1 + PX_TAG + IMPORTANT,
      },
      my2: {
        marginBottom: DEFAULT_MARGIN * 2 + PX_TAG + IMPORTANT,
        marginTop   : DEFAULT_MARGIN * 2 + PX_TAG + IMPORTANT,
      },
      my3: {
        marginBottom: DEFAULT_MARGIN * 3 + PX_TAG + IMPORTANT,
        marginTop   : DEFAULT_MARGIN * 3 + PX_TAG + IMPORTANT,
      },
      my4: {
        marginBottom: DEFAULT_MARGIN * 4 + PX_TAG + IMPORTANT,
        marginTop   : DEFAULT_MARGIN * 4 + PX_TAG + IMPORTANT,
      },
      my5: {
        marginBottom: DEFAULT_MARGIN * 5 + PX_TAG + IMPORTANT,
        marginTop   : DEFAULT_MARGIN * 5 + PX_TAG + IMPORTANT,
      },
      myAuto: {
        marginBottom: "auto" + IMPORTANT,
        marginTop   : "auto" + IMPORTANT,
      },

      mN1: { margin: DEFAULT_MARGIN * -1 + PX_TAG + IMPORTANT },
      mN2: { margin: DEFAULT_MARGIN * -2 + PX_TAG + IMPORTANT },
      mN3: { margin: DEFAULT_MARGIN * -3 + PX_TAG + IMPORTANT },
      mN4: { margin: DEFAULT_MARGIN * -4 + PX_TAG + IMPORTANT },
      mN5: { margin: DEFAULT_MARGIN * -5 + PX_TAG + IMPORTANT },

      mtN1: { marginTop: DEFAULT_MARGIN * -1 + PX_TAG + IMPORTANT },
      mtN2: { marginTop: DEFAULT_MARGIN * -2 + PX_TAG + IMPORTANT },
      mtN3: { marginTop: DEFAULT_MARGIN * -3 + PX_TAG + IMPORTANT },
      mtN4: { marginTop: DEFAULT_MARGIN * -4 + PX_TAG + IMPORTANT },
      mtN5: { marginTop: DEFAULT_MARGIN * -5 + PX_TAG + IMPORTANT },

      mrN1: { marginRight: DEFAULT_MARGIN * -1 + PX_TAG + IMPORTANT },
      mrN2: { marginRight: DEFAULT_MARGIN * -2 + PX_TAG + IMPORTANT },
      mrN3: { marginRight: DEFAULT_MARGIN * -3 + PX_TAG + IMPORTANT },
      mrN4: { marginRight: DEFAULT_MARGIN * -4 + PX_TAG + IMPORTANT },
      mrN5: { marginRight: DEFAULT_MARGIN * -5 + PX_TAG + IMPORTANT },

      mbN1: { marginBottom: DEFAULT_MARGIN * -1 + PX_TAG + IMPORTANT },
      mbN2: { marginBottom: DEFAULT_MARGIN * -2 + PX_TAG + IMPORTANT },
      mbN3: { marginBottom: DEFAULT_MARGIN * -3 + PX_TAG + IMPORTANT },
      mbN4: { marginBottom: DEFAULT_MARGIN * -4 + PX_TAG + IMPORTANT },
      mbN5: { marginBottom: DEFAULT_MARGIN * -5 + PX_TAG + IMPORTANT },

      mlN1: { marginLeft: DEFAULT_MARGIN * -1 + PX_TAG + IMPORTANT },
      mlN2: { marginLeft: DEFAULT_MARGIN * -2 + PX_TAG + IMPORTANT },
      mlN3: { marginLeft: DEFAULT_MARGIN * -3 + PX_TAG + IMPORTANT },
      mlN4: { marginLeft: DEFAULT_MARGIN * -4 + PX_TAG + IMPORTANT },
      mlN5: { marginLeft: DEFAULT_MARGIN * -5 + PX_TAG + IMPORTANT },

      mxN1: {
        marginLeft : DEFAULT_MARGIN * -1 + PX_TAG + IMPORTANT,
        marginRight: DEFAULT_MARGIN * -1 + PX_TAG + IMPORTANT,
      },
      mxN2: {
        marginLeft : DEFAULT_MARGIN * -2 + PX_TAG + IMPORTANT,
        marginRight: DEFAULT_MARGIN * -2 + PX_TAG + IMPORTANT,
      },
      mxN3: {
        marginLeft : DEFAULT_MARGIN * -3 + PX_TAG + IMPORTANT,
        marginRight: DEFAULT_MARGIN * -3 + PX_TAG + IMPORTANT,
      },
      mxN4: {
        marginLeft : DEFAULT_MARGIN * -4 + PX_TAG + IMPORTANT,
        marginRight: DEFAULT_MARGIN * -4 + PX_TAG + IMPORTANT,
      },

      mxN5: {
        marginLeft : DEFAULT_MARGIN * -5 + PX_TAG + IMPORTANT,
        marginRight: DEFAULT_MARGIN * -5 + PX_TAG + IMPORTANT,
      },

      myN1: {
        marginBottom: DEFAULT_MARGIN * -1 + PX_TAG + IMPORTANT,
        marginTop   : DEFAULT_MARGIN * -1 + PX_TAG + IMPORTANT,
      },
      myN2: {
        marginBottom: DEFAULT_MARGIN * -2 + PX_TAG + IMPORTANT,
        marginTop   : DEFAULT_MARGIN * -2 + PX_TAG + IMPORTANT,
      },
      myN3: {
        marginBottom: DEFAULT_MARGIN * -3 + PX_TAG + IMPORTANT,
        marginTop   : DEFAULT_MARGIN * -3 + PX_TAG + IMPORTANT,
      },
      myN4: {
        marginBottom: DEFAULT_MARGIN * -4 + PX_TAG + IMPORTANT,
        marginTop   : DEFAULT_MARGIN * -4 + PX_TAG + IMPORTANT,
      },
      myN5: {
        marginBottom: DEFAULT_MARGIN * -5 + PX_TAG + IMPORTANT,
        marginTop   : DEFAULT_MARGIN * -5 + PX_TAG + IMPORTANT,
      },

      /*-------------------------------------------------
       * Gap
       *-----------------------------------------------*/
      gap0: { gap: "0" },
      gap1: { gap: DEFAULT_SPACING * 1 },
      gap2: { gap: DEFAULT_SPACING * 2 },
      gap3: { gap: DEFAULT_SPACING * 3 },
      gap4: { gap: DEFAULT_SPACING * 4 },
      gap5: { gap: DEFAULT_SPACING * 5 },

      rowGap0: { rowGap: "0" },
      rowGap1: { rowGap: DEFAULT_SPACING * 1 },
      rowGap2: { rowGap: DEFAULT_SPACING * 2 },
      rowGap3: { rowGap: DEFAULT_SPACING * 3 },
      rowGap4: { rowGap: DEFAULT_SPACING * 4 },
      rowGap5: { rowGap: DEFAULT_SPACING * 5 },

      // -moz-column-gap: 0 !important;
      colGap0: { columnGap: "0" },
      colGap1: { columnGap: DEFAULT_SPACING * 1 },
      colGap2: { columnGap: DEFAULT_SPACING * 2 },
      colGap3: { columnGap: DEFAULT_SPACING * 3 },
      colGap4: { columnGap: DEFAULT_SPACING * 4 },
      colGap5: { columnGap: DEFAULT_SPACING * 5 },

      /**************************************************
       * Text
       *************************************************/
      textStart  : { textAlign: "left" + IMPORTANT },
      textEnd    : { textAlign: "right" + IMPORTANT },
      textCenter : { textAlign: "center" + IMPORTANT },
      textJustify: { textAlign: "justify" + IMPORTANT },

      textWeightLighter : { fontWeight: "lighter" + IMPORTANT },
      textWeightLight   : { fontWeight: "300" + IMPORTANT },
      textWeightNormal  : { fontWeight: "400" + IMPORTANT },
      textWeightMedium  : { fontWeight: "500" + IMPORTANT },
      textWeightSemibold: { fontWeight: "600" + IMPORTANT },
      textWeightBold    : { fontWeight: "700" + IMPORTANT },
      textWeightBolder  : { fontWeight: "bolder" + IMPORTANT },

      textStyleItalic: { fontStyle: "italic" + IMPORTANT },
      textStyleNormal: { fontStyle: "normal" + IMPORTANT },

      textDecorationNone       : { textDecoration: "none" + IMPORTANT },
      textDecorationUnderline  : { textDecoration: "underline" + IMPORTANT },
      textDecorationLineThrough: { textDecoration: "line-through" + IMPORTANT },

      textLowercase : { textTransform: "lowercase" + IMPORTANT },
      textUppercase : { textTransform: "uppercase" + IMPORTANT },
      textCapitalize: { textTransform: "capitalize" + IMPORTANT },

      textTopToBottom: { writingMode: "tb" },
      textBottomToTop: { writingMode: "tb", transform: "rotate(-180deg)" },

      textWrap  : { whiteSpace: "normal" + IMPORTANT },
      textNowrap: { whiteSpace: "nowrap" + IMPORTANT },
      textBreak : {
        wordBreak: "break-word" + IMPORTANT,
        wordWrap : "break-word" + IMPORTANT,
      },
      textTruncate: {
        overflow    : "hidden",
        textOverflow: "ellipsis",
        whiteSpace  : "nowrap",
      },

      /**************************************************
       * Vertical Align
       *************************************************/
      alignBaseline  : { verticalAlign: "baseline" },
      alignTop       : { verticalAlign: "top" },
      alignMiddle    : { verticalAlign: "middle" },
      alignBottom    : { verticalAlign: "bottom" },
      alignTextBottom: { verticalAlign: "text-bottom" },
      alignTextTop   : { verticalAlign: "text-top" },

      /**************************************************
       * Visibility
       *************************************************/
      visible  : { visibility: "visible" },
      invisible: { visibility: "hidden" },

      /**************************************************
       * zindex
       *************************************************/
      zN1             : { zIndex: "-1" },
      z0              : { zIndex: "0" },
      z1              : { zIndex: "1" },
      z2              : { zIndex: "2" },
      z3              : { zIndex: "3" },
      /**************************************************
       * Aspect Ratio
       *************************************************/
      aspectRatio1By1 : { aspectRatio: "1/1" },
      aspectRatio16By9: { aspectRatio: "16/9" }, // Mob Tab Web (landscape)
      aspectRatio9By16: { aspectRatio: "9/16" }, // Mob Tab (potrait)
      aspectRatio20By9: { aspectRatio: "20/9" }, // Mob (landscape)
      aspectRatio9By20: { aspectRatio: "9/20" }, // Mob (potrait)
      aspectRatio3By2 : { aspectRatio: "3/2" }, // Mob Tab (landscape)
      aspectRatio2By3 : { aspectRatio: "2/3" }, // Mob Tab (potrait)
      aspectRatio4By3 : { aspectRatio: "4/3" }, // Tab Web (landscape)
      aspectRatio3By4 : { aspectRatio: "3/4" }, // Tab Web (potrait)
      aspectRatio21By9: { aspectRatio: "21/9" }, // Galaxy Fold Web Folded (landscape)
      aspectRatio9By21: { aspectRatio: "9/21" }, // Galaxy Fold Web Folded (potrait)
      aspectRatio25By9: { aspectRatio: "25/9" }, // Galaxy Fold Web (landscape)
      aspectRatio9By25: { aspectRatio: "9/25" }, // Galaxy Fold Web (potrait)

      /**************************************************
       * Aspect Ratio
       *************************************************/
      fontWeight100    : { fontWeight: "100" },
      fontWeight200    : { fontWeight: "200" },
      fontWeight300    : { fontWeight: "300" },
      fontWeight400    : { fontWeight: "400" },
      fontWeight500    : { fontWeight: "500" },
      fontWeight600    : { fontWeight: "600" },
      fontWeight700    : { fontWeight: "700" },
      fontWeight800    : { fontWeight: "800" },
      fontWeight900    : { fontWeight: "900" },
      fontWeightnormal : { fontWeight: "normal" },
      fontWeightbold   : { fontWeight: "bold" },
      fontWeightbolder : { fontWeight: "bolder" },
      fontWeightlighter: { fontWeight: "lighter" },

      /**************************************************
       * Line Height
       *************************************************/
      lineHeightNormal : { lineHeight: "normal" },
      lineHeight2      : { lineHeight: "2" }, // number multiplied by the element's font size 
      lineHeight3      : { lineHeight: "3" },
      lineHeightInitial: { lineHeight: "initial" },
      lineHeightInherit: { lineHeight: "inherit" },

      /**************************************************
        * Word  Spacing
        *************************************************/
      wordSpacingNormal: { wordSpacing: "normal" },
      wordSpacing1     : { wordSpacing: DEFAULT_WORD_SPACING * 0.125 + REM_TAG }, // spacing number represent px, calculated in rem.
      wordSpacing2     : { wordSpacing: DEFAULT_WORD_SPACING * 0.25 + REM_TAG },
      wordSpacing3     : { wordSpacing: DEFAULT_WORD_SPACING * 0.375 + REM_TAG },
      wordSpacing4     : { wordSpacing: DEFAULT_WORD_SPACING * 0.5 + REM_TAG },
      wordSpacing5     : { wordSpacing: DEFAULT_WORD_SPACING * 0.625 + REM_TAG },
      wordSpacing6     : { wordSpacing: DEFAULT_WORD_SPACING * 0.75 + REM_TAG },
      wordSpacing7     : { wordSpacing: DEFAULT_WORD_SPACING * 0.875 + REM_TAG },
      wordSpacing8     : { wordSpacing: DEFAULT_WORD_SPACING + REM_TAG },
    };
  }
}
