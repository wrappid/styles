import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { updateTheme } from "./base/BaseStyle";
import { ThemeManager } from "./base/ThemeManager";
import { AppStylesContext, ThemeContext } from "./config/contextHandler";
import { WrappidDataContext } from "./context/WrappidContext";
import DefaultSCStyles from "./styledComponents/DefaultSCStyles";
import LargeSCStyles from "./styledComponents/LargeSCStyles";
import MediumSCStyles from "./styledComponents/MediumSCStyles";
import SmallSCStyles from "./styledComponents/SmallSCStyles";
import XLargeSCStyles from "./styledComponents/XLargeSCStyles";
import XXLargeSCStyles from "./styledComponents/XXLargeSCStyles";
import { DEFAULT_THEME } from "./theme/theme";
import { DEFAULT_THEME_TYPES } from "./theme/themeType";
import DefaultUtilityStyles from "./utility/DefaultUtilityStyles";
import LargeUtilityStyles from "./utility/LargeUtilityStyles";
import MediumUtilityStyles from "./utility/MediumUtilityStyles";
import SmallUtilityStyles from "./utility/SmallUtilityStyles";
import XLargeUtilityStyles from "./utility/XLargeUtilityStyles";
import XXLargeUtilityStyles from "./utility/XXLargeUtilityStyles";

export let mergedDefaultStyles = {
  ...new DefaultUtilityStyles().style,
  ...new DefaultSCStyles().style,
};

export let mergedSmallStyles = {
  ...new SmallUtilityStyles().style,
  ...new SmallSCStyles().style,
};
export let mergedMediumStyles = {
  ...new MediumUtilityStyles().style,
  ...new MediumSCStyles().style,
};
export let mergedLargeStyles = {
  ...new LargeUtilityStyles().style,
  ...new LargeSCStyles().style,
};
export let mergedXLargeStyles = {
  ...new XLargeUtilityStyles().style,
  ...new XLargeSCStyles().style,
};
export let mergedXXLargeStyles = {
  ...new XXLargeUtilityStyles().style,
  ...new XXLargeSCStyles().style,
};

export let _coreStyles : any;
export let _appStyles : any;

export let theme = DEFAULT_THEME;

export const getMergedStyles = () => {
  return {
    mergedDefaultStyles,
    mergedLargeStyles,
    mergedMediumStyles,
    mergedSmallStyles,
    mergedXLargeStyles,
    mergedXXLargeStyles,
  };
};

export default function StylesProvider(props: {
  appStyles: any;
  coreStyles: any;
  children: any;
  themeID?: string;
}) {
  const { themeID, appStyles, coreStyles, children } = props;
  const [styleFiles, setStyles] = useState<any>({});
  const [providerId, setProviderId] = useState<any>(null);

  const [currentTheme, setCurrentTheme] = useState(theme);

  const { themes = {}, pageThemeID } = React.useContext(WrappidDataContext);
  const { userThemeID } = useSelector((state: any) => state?.app);

  const mergeJson = (oldJson:any = {}, newJson:any = {} ) => {
    const convertedJSON:any = { ...oldJson };

    if((Array.isArray(oldJson) && !Array.isArray(newJson)) || (!Array.isArray(oldJson) && Array.isArray(newJson)) ){
      throw new Error("JSON value type mismatch");
    }
    if(Array.isArray(oldJson) && Array.isArray(newJson)){
      return [...oldJson, ...newJson];
    }
    if(Object.keys(oldJson).length <= 0){
      return newJson;
    }
    for (const key in oldJson) {
      if(Object.prototype.hasOwnProperty.call(newJson, key)){
        const keyType = typeof oldJson[key];

        if(keyType === "object" ){
          convertedJSON[key] = mergeJson(oldJson[key], newJson[key]);
        } else {
          convertedJSON[key] = newJson[key];
        }
      } 
    }
    
    return convertedJSON;
  };

  useEffect(() => {
    const mergeTheme:DEFAULT_THEME_TYPES = { ...currentTheme };
    let tempTheme: any = {};

    if (themeID && Object.keys(themes).includes(themeID)) {
      tempTheme = themes[themeID]?.theme || {};
    } else if (pageThemeID && Object.keys(themes).includes(pageThemeID)) {
      tempTheme = themes[pageThemeID]?.theme || {};

    } else if (userThemeID && Object.keys(themes).includes(userThemeID)) {
      tempTheme = themes[userThemeID]?.theme || {};
    }
    const mergedTheme:any  = mergeJson(mergeTheme, tempTheme);
    
    setCurrentTheme(mergedTheme);
  }, [themes, themeID, userThemeID, pageThemeID]);

  useEffect(() => {
    updateTheme(theme);
    new ThemeManager().refreshTheme(theme);

    if (coreStyles && appStyles) {
      _appStyles = appStyles;
      _coreStyles = coreStyles;
    }
    const defaultStyles = new DefaultUtilityStyles().style;
    const defaultSCStyles = new DefaultSCStyles().style;
    const defaultCoreStyles = new _coreStyles.styles.default().style;
    const largeCoreStyles = new _coreStyles.styles.large().style;
    const mediumCoreStyles = new _coreStyles.styles.medium().style;
    const smallCoreStyles = new _coreStyles.styles.small().style;
    const xLargeCoreStyles = new _coreStyles.styles.xLarge().style;
    const xxLargeCoreStyles = new _coreStyles.styles.xxLarge().style;

    console.log(`appStyles=${appStyles}`);

    const defaultAppStyles = _appStyles.styles.default;

    const smStyle = new SmallUtilityStyles().style;
    const smScStyle = new SmallSCStyles().style;

    const mdStyle = new MediumUtilityStyles().style;
    const mdScStyle = new MediumSCStyles().style;

    const lgStyle = new LargeUtilityStyles().style;
    const lgScStyle = new LargeSCStyles().style;

    const xLgStyle = new XLargeUtilityStyles().style;
    const xLgScStyle = new XLargeSCStyles().style;

    const xxLgStyle = new XXLargeUtilityStyles().style;
    const xxLgScStyle = new XXLargeSCStyles().style;

    mergedDefaultStyles = {
      ...defaultStyles,
      ...defaultSCStyles,
      ...defaultCoreStyles,
      ...defaultAppStyles,
    };

    mergedSmallStyles = {
      ...smStyle,
      ...smScStyle,
      ...smallCoreStyles,
      ..._appStyles?.styles?.small,
    };
    mergedMediumStyles = {
      ...mdStyle,
      ...mdScStyle,
      ...mediumCoreStyles,
      ..._appStyles?.styles?.medium,
    };
    mergedLargeStyles = {
      ...lgStyle,
      ...lgScStyle,
      ...largeCoreStyles,
      ..._appStyles?.styles?.large,
    };
    mergedXLargeStyles = {
      ...xLgStyle,
      ...xLgScStyle,
      ...xLargeCoreStyles,
      ..._appStyles?.styles?.xLarge,
    };
    mergedXXLargeStyles = {
      ...xxLgStyle,
      ...xxLgScStyle,
      ...xxLargeCoreStyles,
      ..._appStyles?.styles?.xxLarge,
    };

    setStyles({
      mergedDefaultStyles,
      mergedLargeStyles,
      mergedMediumStyles,
      mergedSmallStyles,
      mergedXLargeStyles,
      mergedXXLargeStyles,
    });

    setProviderId("style-provider" + new Date());
  }, []);

  useEffect(() => {
    theme = { ...theme, ...currentTheme };
    updateTheme(theme);
    new ThemeManager().refreshTheme(theme);

    if (coreStyles && appStyles) {
      _appStyles = appStyles;
      _coreStyles = coreStyles;
    }
    const defaultStyles = new DefaultUtilityStyles().style;
    const defaultSCStyles = new DefaultSCStyles().style;
    const defaultCoreStyles = new _coreStyles.styles.default().style;
    const largeCoreStyles = new _coreStyles.styles.large().style;
    const mediumCoreStyles = new _coreStyles.styles.medium().style;
    const smallCoreStyles = new _coreStyles.styles.small().style;
    const xLargeCoreStyles = new _coreStyles.styles.xLarge().style;
    const xxLargeCoreStyles = new _coreStyles.styles.xxLarge().style;

    console.log(`appStyles=${appStyles}`);

    const defaultAppStyles = _appStyles.styles.default;

    const smStyle = new SmallUtilityStyles().style;
    const smScStyle = new SmallSCStyles().style;

    const mdStyle = new MediumUtilityStyles().style;
    const mdScStyle = new MediumSCStyles().style;

    const lgStyle = new LargeUtilityStyles().style;
    const lgScStyle = new LargeSCStyles().style;

    const xLgStyle = new XLargeUtilityStyles().style;
    const xLgScStyle = new XLargeSCStyles().style;

    const xxLgStyle = new XXLargeUtilityStyles().style;
    const xxLgScStyle = new XXLargeSCStyles().style;

    mergedDefaultStyles = {
      ...defaultStyles,
      ...defaultSCStyles,
      ...defaultCoreStyles,
      ...defaultAppStyles,
    };

    mergedSmallStyles = {
      ...smStyle,
      ...smScStyle,
      ...smallCoreStyles,
      ..._appStyles?.styles?.small,
    };
    mergedMediumStyles = {
      ...mdStyle,
      ...mdScStyle,
      ...mediumCoreStyles,
      ..._appStyles?.styles?.medium,
    };
    mergedLargeStyles = {
      ...lgStyle,
      ...lgScStyle,
      ...largeCoreStyles,
      ..._appStyles?.styles?.large,
    };
    mergedXLargeStyles = {
      ...xLgStyle,
      ...xLgScStyle,
      ...xLargeCoreStyles,
      ..._appStyles?.styles?.xLarge,
    };
    mergedXXLargeStyles = {
      ...xxLgStyle,
      ...xxLgScStyle,
      ...xxLargeCoreStyles,
      ..._appStyles?.styles?.xxLarge,
    };

    setStyles({
      mergedDefaultStyles,
      mergedLargeStyles,
      mergedMediumStyles,
      mergedSmallStyles,
      mergedXLargeStyles,
      mergedXXLargeStyles,
    });
    setProviderId("style-provider" + new Date());
  }, [currentTheme]);

  return theme && providerId ? (
    <AppStylesContext.Provider
      key={providerId}
      value={{ ...styleFiles, ...(theme || {}) }}
    >
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    </AppStylesContext.Provider>
  ) : null;
}
