import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { updateTheme } from "./base/BaseStyle";
import { ThemeManager } from "./base/ThemeManager";
import { AppStylesContext, ThemeContext } from "./config/contextHandler";
import DefaultSCStyles from "./styledComponents/DefaultSCStyles";
import LargeSCStyles from "./styledComponents/LargeSCStyles";
import MediumSCStyles from "./styledComponents/MediumSCStyles";
import SmallSCStyles from "./styledComponents/SmallSCStyles";
import XLargeSCStyles from "./styledComponents/XLargeSCStyles";
import XXLargeSCStyles from "./styledComponents/XXLargeSCStyles";
import { DEFAULT_THEME } from "./theme/theme";
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
}) {
  const { appStyles, coreStyles, children } = props;
  const [styleFiles, setStyles] = useState<any>({});
  const [providerId, setProviderId] = useState<any>(null);

  const userTheme = useSelector((state: any) => state?.app?.userTheme);

  useEffect(() => {
    theme = { ...DEFAULT_THEME, ...(userTheme || {}) };
    updateTheme(theme);
    new ThemeManager().refreshTheme(theme);
    const defaultStyles = new DefaultUtilityStyles().style;
    const defaultSCStyles = new DefaultSCStyles().style;
    const defaultCoreStyles = new coreStyles.styles.default().style;
    const largeCoreStyles = new coreStyles.styles.large().style;
    const mediumCoreStyles = new coreStyles.styles.medium().style;
    const smallCoreStyles = new coreStyles.styles.small().style;
    const xLargeCoreStyles = new coreStyles.styles.xLarge().style;
    const xxLargeCoreStyles = new coreStyles.styles.xxLarge().style;

    console.log(`appStyles=${appStyles}`);

    const defaultAppStyles = appStyles.styles.default;

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

    console.log(
      "THEME UPDATE",
      defaultStyles,
      defaultSCStyles,
      defaultCoreStyles,
      defaultAppStyles
    );

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
      ...appStyles?.styles?.small,
    };
    mergedMediumStyles = {
      ...mdStyle,
      ...mdScStyle,
      ...mediumCoreStyles,
      ...appStyles?.styles?.medium,
    };
    mergedLargeStyles = {
      ...lgStyle,
      ...lgScStyle,
      ...largeCoreStyles,
      ...appStyles?.styles?.large,
    };
    mergedXLargeStyles = {
      ...xLgStyle,
      ...xLgScStyle,
      ...xLargeCoreStyles,
      ...appStyles?.styles?.xLarge,
    };
    mergedXXLargeStyles = {
      ...xxLgStyle,
      ...xxLgScStyle,
      ...xxLargeCoreStyles,
      ...appStyles?.styles?.xxLarge,
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
    theme = { ...DEFAULT_THEME, ...(userTheme || {}) };
    updateTheme(theme);
    new ThemeManager().refreshTheme(theme);
    const defaultStyles = new DefaultUtilityStyles().style;
    const defaultSCStyles = new DefaultSCStyles().style;
    const defaultCoreStyles = new coreStyles.styles.default().style;
    const largeCoreStyles = new coreStyles.styles.large().style;
    const mediumCoreStyles = new coreStyles.styles.medium().style;
    const smallCoreStyles = new coreStyles.styles.small().style;
    const xLargeCoreStyles = new coreStyles.styles.xLarge().style;
    const xxLargeCoreStyles = new coreStyles.styles.xxLarge().style;

    console.log(`appStyles=${appStyles}`);

    const defaultAppStyles = appStyles.styles.default;

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
      ...appStyles?.styles?.small,
    };
    mergedMediumStyles = {
      ...mdStyle,
      ...mdScStyle,
      ...mediumCoreStyles,
      ...appStyles?.styles?.medium,
    };
    mergedLargeStyles = {
      ...lgStyle,
      ...lgScStyle,
      ...largeCoreStyles,
      ...appStyles?.styles?.large,
    };
    mergedXLargeStyles = {
      ...xLgStyle,
      ...xLgScStyle,
      ...xLargeCoreStyles,
      ...appStyles?.styles?.xLarge,
    };
    mergedXXLargeStyles = {
      ...xxLgStyle,
      ...xxLgScStyle,
      ...xxLargeCoreStyles,
      ...appStyles?.styles?.xxLarge,
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
  }, [userTheme]);

  return theme && providerId ? (
    <AppStylesContext.Provider
      key={providerId}
      value={{ ...styleFiles, ...(theme || {}) }}
    >
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    </AppStylesContext.Provider>
  ) : null;
}
