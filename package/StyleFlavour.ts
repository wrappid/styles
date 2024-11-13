import { WrappidData } from "./context/WrappidSyncer";

export abstract class StyleFlavour {
  __TYPE_OF_STRING = "string";
  __EMPTY_STRING = "";
  __REM = "rem";
  __EM = "em";
  __VW = "vw";
  __VH = "vh";
  __PX = "px";
  __PERCENTAGE = "%";
  __ROOT_FONT_SIZE = 16; // Default root font size for rem to px conversion
  __PARENT_FONT_SIZE = 14; // Example font size for em to px conversion
  __BORDER = "border";
  __BORDER_STYLE = "borderStyle";
  __BORDER_RADIUS = "borderRadius";
  __OVERFLOW = "overflow";
  __SOLID = "solid";
  __DASHED = "dashed";
  __DOTTED = "dotted";
  __UNSET = "unset";
  __ZERO = "0";
  __POSITION = "position";
  __FIXED = "fixed";
  __ABSOLUTE = "absolute";
  __RELATIVE = "relative";
  __STICKY = "sticky";
  __FLEX = "flex";
  __DISPLAY = "display";
  __NONE = "none";
  __HIDDEN = "hidden";
  __WIDTH = "width";
  __RADIUS = "Radius";
  __STYLE = "Style";
  __BORDER_WIDTH = "borderWidth";
  UNSUPPORTED_BORDER_STYLES = [
    "none",
    "hidden",
    "double",
    "groove",
    "ridge",
    "inset",
    "outset",
  ];
  __UNITS_VALUES_KEYS = [
    "height",
    "width",
    "maxHeight",
    "maxWidth",
    "minHeight",
    "minWidth",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "gap",
    "fontSize",
    "borderWidth",
    "borderRadius",
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
    "top",
    "bottom",
    "left",
    "right",
  ];
  __POSITION_CSS_PROPS = ["top", "bottom", "left", "right"];
  __FLEX_PROPS = [
    "flexDirection",
    "flexWrap",
    "justifyContent",
    "alignItems",
    "alignContent",
    "flexGrow",
    "flexShrink",
    "flexBasis",
  ];

  _name: string;
  _dimensions: any;

  constructor() {
    this._name = "";
    this._dimensions = WrappidData.dimensions;
  }

  protected handleBorderProperties(
    key: string,
    value: any
  ) {
    throw new Error("Method 'handleBorderProperties' must be implemented.");
  }

  protected handlePositionProperties(
    key: string,
    value: any,
    newStyleObject: any
  ) {
    throw new Error("Method 'handlePositionProperties' must be implemented.");
  }
  
  /**
   * Adds platform specific flavour to styles by changing and/or updating cssValues of cssProps
   * @param styles an object containing cssProps:values
   * @returns { any{cssProp1:value,cssProp2:value,...} an object containing cssProps:values in the platform specific flavour
   */
  public addFlavour(styles: any): any {
    throw new Error("Method 'addFlavour' must be implemented.");
  }

  // unit to number util
  protected unitToNumber = (unitVal: string) => {
    unitVal?.trim();
    const numericValue = parseFloat(unitVal);
    
    switch (true) {
      case unitVal.endsWith(this.__PX):
        return numericValue;

      case unitVal.endsWith(this.__REM):
        return numericValue * this.__ROOT_FONT_SIZE;

      case unitVal.endsWith(this.__EM):
        return numericValue * this.__PARENT_FONT_SIZE;

      case unitVal.endsWith(this.__VW):
        return this.viewportToNumber(unitVal, this.__VW);

      case unitVal.endsWith(this.__VH):
        return this.viewportToNumber(unitVal, this.__VH);

      case unitVal.endsWith(this.__PERCENTAGE):
        return unitVal;
      
      default:
        return numericValue; // Return the original value(only changed to number format) if no recognized unit is found
    }
  };

  // view port to number calculation util
  protected viewportToNumber = (value: string, unitType: string) => {
    const numericValue = parseFloat(value);

    switch (unitType) {
      case this.__VW:
        return (numericValue / 100) * this._dimensions.windowWidth;

      case this.__VH:
        return (numericValue / 100) * this._dimensions.windowHeight;

      default:
        throw new Error(
          "Invalid input: Please provide a value with 'vw' or 'vh'."
        );
    }
  };
}
