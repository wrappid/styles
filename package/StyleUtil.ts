import {
  LARGE_WINDOW_WIDTH,
  MEDIUM_WINDOW_WIDTH,
  SMALL_WINDOW_WIDTH,
  XX_LARGE_WINDOW_WIDTH,
  X_LARGE_WINDOW_WIDTH
} from "./config/constants";
import { WrappidData } from "./context/WrappidSyncer";
import { getMergedStyles } from "./StylesProvider";
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
  const sanitizedClassNames = <string[]>(
    Array.from(
      new Set(
        classNames && Array.isArray(classNames) ? classNames : [classNames]
      )
    )
  );

  return [...sanitizedClassNames];
};

export function addFlavor(styleObject: any) {
  const { config } = WrappidData;

  /**
   * @todo web cannot be go in else block
   */
  if (config?.platform === "mobile") {
    const newStyleObject = <any>{};
    const keys = Object.keys(styleObject);

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

  const styles = getMergedStyles();
  const mergedDefaultStyles = styles?.mergedDefaultStyles;
  const mergedLargeStyles = styles?.mergedLargeStyles;
  const mergedMediumStyles = styles?.mergedMediumStyles;
  const mergedSmallStyles = styles?.mergedSmallStyles;
  const mergedXLargeStyles = styles?.mergedXLargeStyles;
  const mergedXXLargeStyles = styles?.mergedXXLargeStyles;

  const { config } = WrappidData;

  classNames = sanitizeClassNames(classNames);

  if (config?.environment === "development") {
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

    // Get default styles
    if (getDefaultStyle(className, mergedDefaultStyles)) {
      styleObject = {
        ...styleObject,
        ...getDefaultStyle(className, mergedDefaultStyles),
      };

    // eslint-disable-next-line no-empty
    } else {}
    // Get windowWidth specific styles
    if (windowWidth >= SMALL_WINDOW_WIDTH) {
      if (getSmallStyle(className, mergedSmallStyles)) {
        styleObject = {
          ...styleObject,
          ...getSmallStyle(className, mergedSmallStyles),
        };
      // eslint-disable-next-line no-empty
      } else {}
    }
    if (windowWidth >= MEDIUM_WINDOW_WIDTH) {
      if (getMediumStyle(className, mergedMediumStyles)) {
        styleObject = {
          ...styleObject,
          ...getMediumStyle(className, mergedMediumStyles),
        };
        
      // eslint-disable-next-line no-empty
      } else {}
    }
    if (windowWidth >= LARGE_WINDOW_WIDTH) {
      if (getLargeStyle(className, mergedLargeStyles)) {
        styleObject = {
          ...styleObject,
          ...getLargeStyle(className, mergedLargeStyles),
        };
      // eslint-disable-next-line no-empty
      } else {}
    }
    if (windowWidth >= X_LARGE_WINDOW_WIDTH) {
      if (getXLargeStyle(className, mergedXLargeStyles)) {
        styleObject = {
          ...styleObject,
          ...getXLargeStyle(className, mergedXLargeStyles),
        };
      } else {
        // eslint-disable-next-line etc/no-commented-out-code
        // console.log(`Not found any class in XL for ${className}`);
      }
    }
    if (windowWidth >= XX_LARGE_WINDOW_WIDTH) {
      if (getXXLargeStyle(className, mergedXXLargeStyles)) {
        styleObject = {
          ...styleObject,
          ...getXXLargeStyle(className, mergedXXLargeStyles),
        };
      } else {
        // eslint-disable-next-line etc/no-commented-out-code
        // console.log(`Not found any class in XXL for ${className}`);
      }
    }
  });

  const finalStyleObject = addFlavor(styleObject);

  // eslint-disable-next-line no-console
  // console.log(
  // 	"&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&\nAPP STYLES\n&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&",
  // 	finalStyleObject,
  // 	classNames
  // );

  return finalStyleObject;
}

const getDefaultStyle = (className: string | any, mergedStyles: any) => {
  return mergedStyles[className];
};
const getSmallStyle = (className: string | any, mergedStyles: any) => {
  return mergedStyles[className];
};
const getMediumStyle = (className: string | any, mergedStyles: any) => {
  return mergedStyles[className];
};
const getLargeStyle = (className: string | any, mergedStyles: any) => {
  return mergedStyles[className];
};
const getXLargeStyle = (className: string | any, mergedStyles: any) => {
  return mergedStyles[className];
};
const getXXLargeStyle = (className: string | any, mergedStyles: any) => {
  return mergedStyles[className];
};

// rem to px util
const remToPx = (remVal: any) => {
  const __root_Font_Size = 16;

  remVal = Number(remVal.substr(0, remVal.indexOf("rem")));

  return __root_Font_Size * remVal;
};
