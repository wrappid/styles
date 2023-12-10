import { getMergedStyles } from "./StylesProvider";
import {
  LARGE_WINDOW_WIDTH,
  MEDIUM_WINDOW_WIDTH,
  SMALL_WINDOW_WIDTH,
  XX_LARGE_WINDOW_WIDTH,
  X_LARGE_WINDOW_WIDTH,
} from "./config/constants";

import { getConfigurationObject } from "./helper/helper";

import UtilityClasses from "./utility/UtilityClasses";

const { innerWidth: windowWidth } = window;

const UNITS = ["!important"];
const EXCEPTIONS = [
  "flexGrow",
  "flexShrink",
  "opacity",
  "top",
  "bottom",
  "left",
  "right",
  "zIndex",
  "fontWeight",
];

const sanitizeClassNames = (classNames: string[]): string[] => {
  // using set() method to create collections of unique values,
  // hence remove duplicates
  let sanitizedClassNames = <string[]>(
    Array.from(
      new Set(
        classNames && Array.isArray(classNames) ? classNames : [classNames]
      )
    )
  );
  return [...sanitizedClassNames];
};

export function addFlavor(styleObject: any) {
  let config = getConfigurationObject();
  // console.log("BEFORE FLAVOUR", styleObject, ", PLATFORM: ", config.wrappid.platform);

  if (config.wrappid.platform === "mobile") {
    let newStyleObject = <any>{};
    let keys = Object.keys(styleObject);

    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let val = styleObject[key];

      for (let j = 0; j < UNITS.length; j++) {
        // eslint-disable-next-line no-console
        //console.log("UNIT", UNITS[j]);
        if (val && typeof val === "string") {
          val = val.replace(UNITS[j], "");
        }
      }

      if (!isNaN(val) && !EXCEPTIONS.includes(key)) {
        val = val + "px";
      }

      if (key === "display") {
        if (val?.includes("flex")) {
          key = "flex";
          val = 1;
        } else {
          continue;
        }
      } else if (
        (key === "height" || key === "minHeight" || key === "maxHeight") &&
        val?.includes("vh")
      ) {
        continue;
      } else if (
        (key === "width" || key === "minWidth" || key === "maxWidth") &&
        val?.includes("vw")
      ) {
        continue;
      } else if (
        key === "position" &&
        (val === "fixed" ||
          val === "fixed " ||
          val === "sticky" ||
          val === "sticky ")
      ) {
        val = "absolute";
      } else if (key === "border" && (val === "unset" || val === "unset ")) {
        key = "border";
        val = "0px";
      } else if (key === "overflowY" || key === "overflowX") {
        continue;
      }

      // for rem
      // for fontSize
      if (key === "fontSize") {
        if (val.includes("rem")) {
          val = remToPx(val);
        }
      }

      // eslint-disable-next-line no-console
      //console.log("KEY:", key, "VAL:", val);
      newStyleObject[key] = val;
    }
    // console.log("AFTER FLAVOUR", newStyleObject);
    return newStyleObject;
  } else {
    return styleObject;
  }
}

export function getEffectiveStyle(classNames: any[]) {
  /**
   * Step 1: Get default styles(xs) for className
   * Step 2: Get all styles object filter by classNames and window.width
   */

  // console.log(
  //   "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&\nAPP STYLES\n&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&",
  //   appStyles,
  //   coreStyles
  // );

  let styles = getMergedStyles();
  let mergedDefaultStyles = styles?.mergedDefaultStyles;
  let mergedLargeStyles = styles?.mergedLargeStyles;
  let mergedMediumStyles = styles?.mergedMediumStyles;
  let mergedSmallStyles = styles?.mergedSmallStyles;
  let mergedXLargeStyles = styles?.mergedXLargeStyles;
  let mergedXXLargeStyles = styles?.mergedXXLargeStyles;

  let config = getConfigurationObject();

  classNames = sanitizeClassNames(classNames);

  if (config?.wrappid?.environment === "development") {
    classNames.push(UtilityClasses.DEV_BORDER);
  }

  let styleObject = {};

  classNames.forEach((className) => {
    /**
     * TODO: Framework related discussion needed
     *
     * 1. condition must have range
     * 2. only one condition will apply based on windowWidth
     *    a. we can have else if statements
     *    b. we can return if any one satisfied
     */

    // console.log(`Looking for className = ${className}`);

    // Get default styles
    if (getDefaultStyle(className, mergedDefaultStyles)) {
      styleObject = {
        ...styleObject,
        ...getDefaultStyle(className, mergedDefaultStyles),
      };
      // console.log(`Found any class in default for ${className}`);
      // // console.log(`IN SM ${className} ==`);
      // // console.log(styleObject);
    } else {
      // console.log(`Not found any class in default for ${className}`);
    }
    // Get windowWidth specific styles
    if (windowWidth >= SMALL_WINDOW_WIDTH) {
      if (getSmallStyle(className, mergedSmallStyles)) {
        styleObject = {
          ...styleObject,
          ...getSmallStyle(className, mergedSmallStyles),
        };
        // console.log(`Found any class in SM for ${className}`);
        // // console.log(`IN SM ${className} ==`);
        // // console.log(styleObject);
      } else {
        // console.log(`Not found any class in SM for ${className}`);
      }
    }
    if (windowWidth >= MEDIUM_WINDOW_WIDTH) {
      if (getMediumStyle(className, mergedMediumStyles)) {
        styleObject = {
          ...styleObject,
          ...getMediumStyle(className, mergedMediumStyles),
        };
        // console.log(`Found any class in MD for ${className}`);
        // // console.log(`IN MD ${className} ==`);
        // // console.log(styleObject);
      } else {
        // console.log(`Not found any class in MD for ${className}`);
      }
    }
    if (windowWidth >= LARGE_WINDOW_WIDTH) {
      if (getLargeStyle(className, mergedLargeStyles)) {
        styleObject = {
          ...styleObject,
          ...getLargeStyle(className, mergedLargeStyles),
        };
        // console.log(`Found any class in LG for ${className}`);
        // // console.log(`IN LG ${className} ==`);
        // // console.log(styleObject);
      } else {
        // console.log(`Not found any class in LG for ${className}`);
      }
    }
    if (windowWidth >= X_LARGE_WINDOW_WIDTH) {
      if (getXLargeStyle(className, mergedXLargeStyles)) {
        styleObject = {
          ...styleObject,
          ...getXLargeStyle(className, mergedXLargeStyles),
        };
        // console.log(`Found any class in XL for ${className}`);
        // // console.log(`IN XL ${className} ==`);
        // // console.log(styleObject);
      } else {
        // console.log(`Not found any class in XL for ${className}`);
      }
    }
    if (windowWidth >= XX_LARGE_WINDOW_WIDTH) {
      if (getXXLargeStyle(className, mergedXXLargeStyles)) {
        styleObject = {
          ...styleObject,
          ...getXXLargeStyle(className, mergedXXLargeStyles),
        };
        // console.log(`Found any class in XXL for ${className}`);
        // // console.log(`IN XXL ${className} ==`);
        // // console.log(styleObject);
      } else {
        // console.log(`Not found any class in XXL for ${className}`);
      }
    }
  });

  // console.log("Combined ==");
  // console.log(styleObject);
  let finalStyleObject = addFlavor(styleObject);

  // eslint-disable-next-line no-console
  // console.log(
  // 	"&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&\nAPP STYLES\n&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&",
  // 	finalStyleObject,
  // 	classNames
  // );

  return finalStyleObject;
}

const getDefaultStyle = (className: string | any, mergedStyles: any) => {
  // console.log("getDefaultStyle", mergedStyles);
  return mergedStyles[className];
};
const getSmallStyle = (className: string | any, mergedStyles: any) => {
  // console.log("getSmallStyle", mergedStyles);
  return mergedStyles[className];
};
const getMediumStyle = (className: string | any, mergedStyles: any) => {
  // console.log("getMediumStyle", mergedStyles);
  return mergedStyles[className];
};
const getLargeStyle = (className: string | any, mergedStyles: any) => {
  // console.log("getLargeStyle", mergedStyles);
  return mergedStyles[className];
};
const getXLargeStyle = (className: string | any, mergedStyles: any) => {
  // console.log("getXLargeStyle", mergedStyles);
  return mergedStyles[className];
};
const getXXLargeStyle = (className: string | any, mergedStyles: any) => {
  // console.log("getXXLargeStyle", mergedStyles);
  return mergedStyles[className];
};

// rem to px util
const remToPx = (remVal: any) => {
  const __root_Font_Size = 16;

  remVal = Number(remVal.substr(0, remVal.indexOf("rem")));

  return __root_Font_Size * remVal;
};
