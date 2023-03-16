import config from "./config/config";
import {
  ENV_DEV_MODE,
  LARGE_WINDOW_WIDTH,
  MEDIUM_WINDOW_WIDTH,
  SMALL_WINDOW_WIDTH,
  XX_LARGE_WINDOW_WIDTH,
  X_LARGE_WINDOW_WIDTH,
} from "./config/constants";
import CoreClasses from "./CoreClasses";
import { defaultCoreStyles } from "./default/DefaultCoreStyles";
import { largeCoreStyles } from "./default/LargeCoreStyles";
import { mediumCoreStyles } from "./default/MediumCoreStyles";
import { smallCoreStyles } from "./default/SmallCoreStyles";
import { xLargeCoreStyles } from "./default/XLargeCoreStyles";
import { xXLargeCoreStyles } from "./default/XXLargeCoreStyles";

const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

const sanitizeClassNames = (classNames) => {
  // TODO Sanitize class names - remove duplicates
  return classNames && Array.isArray(classNames) ? classNames : [classNames];
};

export function getEffectiveStyle(classNames) {
  /**
   * Step 1: Get default styles(xs) for className
   * Step 2: Get all styles object filter by classNames and window.width
   */

  classNames = sanitizeClassNames(classNames);

  if (config.environment === ENV_DEV_MODE) {
    classNames.push(CoreClasses.DEV_BORDER);
  }

  let styleObject = {};

  classNames.forEach((className, index) => {
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
    if (getDefaultStyle(className)) {
      styleObject = { ...styleObject, ...getDefaultStyle(className) };
      // console.log(`Found any class in default for ${className}`);
      // // console.log(`IN SM ${className} ==`);
      // // console.log(styleObject);
    } else {
      // console.log(`Not found any class in default for ${className}`);
    }
    // Get windowWidth specific styles
    if (windowWidth >= SMALL_WINDOW_WIDTH) {
      if (getSmallStyle(className)) {
        styleObject = { ...styleObject, ...getSmallStyle(className) };
        // console.log(`Found any class in SM for ${className}`);
        // // console.log(`IN SM ${className} ==`);
        // // console.log(styleObject);
      } else {
        // console.log(`Not found any class in SM for ${className}`);
      }
    }
    if (windowWidth >= MEDIUM_WINDOW_WIDTH) {
      if (getMediumStyle(className)) {
        styleObject = { ...styleObject, ...getMediumStyle(className) };
        // console.log(`Found any class in MD for ${className}`);
        // // console.log(`IN MD ${className} ==`);
        // // console.log(styleObject);
      } else {
        // console.log(`Not found any class in MD for ${className}`);
      }
    }
    if (windowWidth >= LARGE_WINDOW_WIDTH) {
      if (getLargeStyle(className)) {
        styleObject = { ...styleObject, ...getLargeStyle(className) };
        // console.log(`Found any class in LG for ${className}`);
        // // console.log(`IN LG ${className} ==`);
        // // console.log(styleObject);
      } else {
        // console.log(`Not found any class in LG for ${className}`);
      }
    }
    if (windowWidth >= X_LARGE_WINDOW_WIDTH) {
      if (getXLargeStyle(className)) {
        styleObject = { ...styleObject, ...getXLargeStyle(className) };
        // console.log(`Found any class in XL for ${className}`);
        // // console.log(`IN XL ${className} ==`);
        // // console.log(styleObject);
      } else {
        // console.log(`Not found any class in XL for ${className}`);
      }
    }
    if (windowWidth >= XX_LARGE_WINDOW_WIDTH) {
      if (getXXLargeStyle(className)) {
        styleObject = { ...styleObject, ...getXXLargeStyle(className) };
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

  return styleObject;
}

const getDefaultStyle = (className) => {
  return defaultCoreStyles[className];
};
const getSmallStyle = (className) => {
  return smallCoreStyles[className];
};
const getMediumStyle = (className) => {
  return mediumCoreStyles[className];
};
const getLargeStyle = (className) => {
  return largeCoreStyles[className];
};
const getXLargeStyle = (className) => {
  return xLargeCoreStyles[className];
};
const getXXLargeStyle = (className) => {
  return xXLargeCoreStyles[className];
};
