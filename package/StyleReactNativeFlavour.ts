import { IMPORTANT } from "./base/constants";
import { WrappidData } from "./context/WrappidSyncer";
import { StyleFlavour } from "./StyleFlavour";

export default class StyleReactNativeFlavour extends StyleFlavour {
  constructor() {
    super();
    this._name = "ReactNative";
  }

  /**
     * Adds platform specific flavour to styles by changing and/or updating cssProps
     * @param styles an object containing cssProps:values
     * @returns { flavouredStyles{cssProp1:value,cssProp2:value,...} an object containing cssProps:values in the platform specific flavour
     */
  addFlavour(styles: any): any {
    const { config } = WrappidData;

    if (config?.platform === "mobile") { // no constant for mobile available at config level
      console.log("styles" + JSON.stringify(styles, null, 2));

      // setting all styles into flavouredStyles,
      // to make sure that cssProps not processed are also returned at last
      let flavouredStyles = { ...styles };

      Object.keys(styles)?.forEach((cssProp, index) => {

        let cssValue = styles[cssProp];

        console.log("processing #" + index + ": " + cssProp + ": " + cssValue + "| ");

        let processedStyles = { [cssProp]: cssValue };

        // removing !important, because the CSS !important directive is not supported by React Native
        processedStyles = { ...this.removeImportant(cssProp, cssValue) };

        // Update cssValue to reflect the processed result for the next step
        cssValue = processedStyles[cssProp];

        // converting value for units (px,em,rem,vh/vw) to only number as units are not supported by React Native
        processedStyles = { ...this.convertUnitToNumber(cssProp, cssValue) };

        // Update cssValue to reflect the processed result for the next step
        cssValue = processedStyles[cssProp];

        // handling border related css properties
        processedStyles = { ...this.handleBorderProperties(cssProp, cssValue) };

        // Update cssValue to reflect the processed result for the next step
        cssValue = processedStyles[cssProp];

        processedStyles = { ...this.handlePositionProperties(cssProp, cssValue) };

        // Update cssValue to reflect the processed result for the next step
        cssValue = processedStyles[cssProp];

        // if (cssProp === this.__POSITION) {
        //   const positionVal =
        //     typeof val === this.__TYPE_OF_STRING ? val.trim() : val;
        //   const positionStyles = this.handlePositionProperty(
        //     positionVal,
        //     styles
        //   );

        // Handle overflow properties
        processedStyles = { ...this.handleOverflowProperties(cssProp, cssValue) };

        // Update cssValue to reflect the processed result for the next step
        cssValue = processedStyles[cssProp];

        // handle display
        processedStyles = { ...this.handleFlexDisplay(cssProp, cssValue) };

        // Update cssValue to reflect the processed result for the next step
        cssValue = processedStyles[cssProp];

        //   // Apply all position-related styles
        //   flavouredStyles = { ...flavouredStyles, ...positionStyles };
        // }

        // if (cssProp === this.__DISPLAY && val?.includes(this.__FLEX)) {
        //   const flexStyles = this.handleFlexDisplay(styles);

        //   // Apply flex styles to flavouredStyles
        //   Object.assign(flavouredStyles, flexStyles);
        // }

        // Assign the flavoured value back to the flavoured style object
        flavouredStyles = { ...flavouredStyles, ...processedStyles };
      });

      flavouredStyles = { ...this.removeNotSupportedCssProps(flavouredStyles) };

      // Return flavoured style object
      console.log("flavouredStyles" + JSON.stringify(flavouredStyles, null, 2));
      return flavouredStyles;
    } else {
      // Return original style object if not a mobile platform
      return styles;
    }
  }
  /**
   * 
   * @param cssProp 
   * @param cssValue 
   * @returns 
   */
  removeImportant(cssProp: string, cssValue: string): any {
    if (cssValue
      && typeof cssValue === this.__TYPE_OF_STRING
      && cssValue.includes(IMPORTANT)) {
      cssValue = cssValue.replace(IMPORTANT, this.__EMPTY_STRING);
    }
    return { [cssProp]: cssValue };
  }

  /**
   * 
   * @param cssProp 
   * @param cssValue 
   * @returns 
   */
  convertUnitToNumber(cssProp: string, cssValue: any): any {
    if (this.__UNITS_VALUES_KEYS.includes(cssProp)) {
      if (typeof cssValue === this.__TYPE_OF_STRING) {
        cssValue = this.unitToNumber(cssValue);
      }
    }
    return { [cssProp]: cssValue };
  }

  // handle border properties util
  handleBorderProperties(cssProp: string, cssValue: any): any {
    let returnStyle = { [cssProp]: cssValue };

    if (cssProp.startsWith(this.__BORDER)) {
      switch(true) {
        case cssProp === this.__BORDER:
          returnStyle = this.handleBorderBreakDown(cssProp, cssValue);
          break;

        case cssProp.endsWith(this.__STYLE):
          returnStyle = this.handleBorderStyle(cssProp, cssValue);
          break;

        case cssProp.endsWith(this.__RADIUS):
          returnStyle = this.handleBorderRadius(cssProp, cssValue);
          break;
      }
    }
    return { ...returnStyle };
  }

  //handle border if user give 3 value
  handleBorderBreakDown(cssProp: string, cssValue: any): any {
    if (cssValue === this.__UNSET || cssValue === this.__NONE) {
      return { borderWidth: this.__ZERO };
    } else {
      const [borderWidth, borderStyle, borderColor] = cssProp.split(" ");
      const borderWidthValue = this.unitToNumber(borderWidth.trim());
      const borderStyleValue = [this.__DOTTED, this.__DASHED, this.__SOLID].includes(borderStyle) ? borderStyle : this.__SOLID;
      const borderColorValue = borderColor;

      return { borderColor: borderColorValue, borderStyle: borderStyleValue, borderWidth: borderWidthValue };
    }
  }

  // handle border style
  handleBorderStyle(cssProp: string, cssValue: any): any {
    cssValue = [this.__DOTTED, this.__DASHED, this.__SOLID].includes(cssValue) ? cssValue : this.__SOLID;
    return { [cssProp]: cssValue };
  }

  // handle border styles
  handleBorderRadius(cssProp: string, cssValue: any): any {
    cssValue = parseFloat(cssValue);
    if (cssValue === 0) {
      return { [cssProp]: cssValue }; // Just apply borderRadius without overflow
    }
    // Many cases, if overflow has value in same styleclasses where border-radius is used, there can be a issue in react-native so we use overflow: hidden
    return { clipChildren: true, [cssProp]: cssValue, overflow: this.__HIDDEN }; 
  }

  // Function to handle position property and related styles
  handlePositionProperties (cssProp: string, cssValue: any): any {
    let positionStyles = { [cssProp]: cssValue };

    if (cssProp === this.__POSITION) {
      // Determine position type for React Native
      if (cssValue === this.__FIXED || cssValue === this.__STICKY) {
        // React Native doesn't support fixed or sticky; default to absolute
        positionStyles = { position: this.__ABSOLUTE };
      } else if (cssValue === this.__ABSOLUTE) {
        positionStyles = { position: cssValue };
      } else {
        // Default to relative if position is unknown
        positionStyles = { position: this.__RELATIVE };
      }

      // Copy top, bottom, left, right properties if they exist
      // this.__POSITION_CSS_PROPS.forEach((prop) => {
      //   if (styleObject[prop] !== undefined) {
      //     positionStyles[prop] = styleObject[prop];
      //   }
      // });
    }

    return { ...positionStyles };
  }

  /**
 * Handle overflow property for React Native
 * @param {string} cssProp 
 * @param {any} cssValue 
 * @returns {object} - Processed overflow style
 */
  handleOverflowProperties(cssProp: string, cssValue: any): any {
    let returnStyle = { [cssProp]: cssValue };

    // For React Native, handle overflow properly by setting valid values
    if (cssProp === "overflow") {
      switch (cssValue) {
        case "clip":
          returnStyle = { overflow: "hidden" };
          break;

        case "hidden":
          returnStyle = { overflow: cssValue };
          break;

        case "visible":
          returnStyle = { overflow: cssValue };
          break;

        case "scroll":
        // React Native doesn't support overflow: 'scroll' directly.
        // Use ScrollView for scrollable content instead.
          console.warn("React Native doesn't support overflow: 'scroll'. Use ScrollView instead.");
          returnStyle = { overflow: "visible" }; 
          break;

        case "auto":
        // Handle overflow: 'auto'
        // React Native doesn't have an exact equivalent for 'auto', 
        // so we can wrap the content with ScrollView to make it scrollable when needed.
          console.warn("React Native doesn't support overflow: 'auto'. Use ScrollView for auto scrolling.");
          returnStyle = { overflow: "visible" }; // Default behavior
          break;

        default:
          returnStyle = { overflow: "visible" }; // Default behavior in React Native
          break;
      }
    }

    return { ...returnStyle };
  }

  handleFlexDisplay (cssProp: string, cssValue: any): any {
    let returnStyle = { [cssProp]: cssValue };

    if (cssProp === this.__DISPLAY && !( cssValue?.includes(this.__NONE))) {
      returnStyle = { flex: 1 };
    } 
    return { ...returnStyle };
  }

  removeNotSupportedCssProps(flavouredStyles: any): any {

    // Object.keys(flavouredStyles)?.forEach((cssProp, index) => { //command as failed compilation error
    Object.keys(flavouredStyles)?.forEach((cssProp) => {

      const cssValue = flavouredStyles[cssProp];

      if (cssProp === this.__DISPLAY && !( cssValue?.includes(this.__NONE))) {
        delete flavouredStyles[cssProp];
      } 
    });
    return flavouredStyles;
  }
}  