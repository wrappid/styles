import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DEFAULT_THEME } from "./theme/theme";
import { DefaultUtilityStyles } from "./utility/DefaultUtilityStyles";
import { DefaultSCStyles } from "./styledComponents/DefaultSCStyles";
import { SmallUtilityStyles } from "./utility/SmallUtilityStyles";
import { SmallSCStyles } from "./styledComponents/SmallSCStyles";
import { MediumUtilityStyles } from "./utility/MediumUtilityStyles";
import { MediumSCStyles } from "./styledComponents/MediumSCStyles";
import { LargeUtilityStyles } from "./utility/LargeUtilityStyles";
import { LargeSCStyles } from "./styledComponents/LargeSCStyles";
import { XLargeUtilityStyles } from "./utility/XLargeUtilityStyles";
import { XLargeSCStyles } from "./styledComponents/XLargeSCStyles";
import { XXLargeUtilityStyles } from "./utility/XXLargeUtilityStyles";
import { XXLargeSCStyles } from "./styledComponents/XXLargeSCStyles";
import { AppStylesContext } from "./config/contextHandler";
import { ThemeContext } from "./config/contextHandler";
import { updateTheme } from "./base/BaseStyle";
import { ThemeManager } from "./base/ThemeManager";

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
		mergedSmallStyles,
		mergedMediumStyles,
		mergedLargeStyles,
		mergedXLargeStyles,
		mergedXXLargeStyles,
	};
};

export default function StylesProvider(props: any) {
	const [styleFiles, setStyles] = useState<any>({});
	const [providerId, setProviderId] = useState<any>(null);

	const userTheme = useSelector((state: any) => state?.app?.userTheme);

	useEffect(() => {
		theme = { ...DEFAULT_THEME, ...(userTheme || {}) };
		updateTheme(theme);
		new ThemeManager().refreshTheme(theme);
		let defStyle = new DefaultUtilityStyles().style;
		let defScStyle = new DefaultSCStyles().style;
		let defCoreStyle = new props.coreStyles.styles.default().style;
		let defAppStyle = new props.appStyles.styles.default().style;

		let smStyle = new SmallUtilityStyles().style;
		let smScStyle = new SmallSCStyles().style;
		
		let mdStyle = new MediumUtilityStyles().style;
		let mdScStyle = new MediumSCStyles().style;

		let lgStyle = new LargeUtilityStyles().style;
		let lgScStyle = new LargeSCStyles().style;

		let xLgStyle = new XLargeUtilityStyles().style;
		let xLgScStyle = new XLargeSCStyles().style;
		
		let xxLgStyle = new XXLargeUtilityStyles().style;
		let xxLgScStyle = new XXLargeSCStyles().style;

		console.log(
			"THEME UPDATE",
			defStyle,
			defScStyle,
			defCoreStyle,
			defAppStyle
		);

		mergedDefaultStyles = {
			...defStyle,
			...defScStyle,
			...defCoreStyle,
			...defAppStyle,
		};

		mergedSmallStyles = {
			...smStyle,
			...smScStyle,
			...props.coreStyles?.styles?.small,
			...props.appStyles?.styles?.small,
		};
		mergedMediumStyles = {
			...mdStyle,
			...mdScStyle,
			...props.coreStyles?.styles?.medium,
			...props.appStyles?.styles?.medium,
		};
		mergedLargeStyles = {
			...lgStyle,
			...lgScStyle,
			...props.coreStyles?.styles?.large,
			...props.appStyles?.styles?.large,
		};
		mergedXLargeStyles = {
			...xLgStyle,
			...xLgScStyle,
			...props.coreStyles?.styles?.xLarge,
			...props.appStyles?.styles?.xLarge,
		};
		mergedXXLargeStyles = {
			...xxLgStyle,
			...xxLgScStyle,
			...props.coreStyles?.styles?.xxLarge,
			...props.appStyles?.styles?.xxLarge,
		};
		setStyles({
			mergedDefaultStyles,
			mergedSmallStyles,
			mergedMediumStyles,
			mergedLargeStyles,
			mergedXLargeStyles,
			mergedXXLargeStyles,
		});

		setProviderId("style-provider" + new Date());
	}, []);

	useEffect(() => {
		theme = { ...DEFAULT_THEME, ...(userTheme || {}) };
		updateTheme(theme);
		new ThemeManager().refreshTheme(theme);
		let defStyle = new DefaultUtilityStyles().style;
		let defScStyle = new DefaultSCStyles().style;
		let defCoreStyle = new props.coreStyles.styles.default().style;
		let defAppStyle = new props.appStyles.styles.default().style;

		let smStyle = new SmallUtilityStyles().style;
		let smScStyle = new SmallSCStyles().style;
		
		let mdStyle = new MediumUtilityStyles().style;
		let mdScStyle = new MediumSCStyles().style;

		let lgStyle = new LargeUtilityStyles().style;
		let lgScStyle = new LargeSCStyles().style;

		let xLgStyle = new XLargeUtilityStyles().style;
		let xLgScStyle = new XLargeSCStyles().style;
		
		let xxLgStyle = new XXLargeUtilityStyles().style;
		let xxLgScStyle = new XXLargeSCStyles().style;

		mergedDefaultStyles = {
			...defStyle,
			...defScStyle,
			...defCoreStyle,
			...defAppStyle,
		};

		mergedSmallStyles = {
			...smStyle,
			...smScStyle,
			...props.coreStyles?.styles?.small,
			...props.appStyles?.styles?.small,
		};
		mergedMediumStyles = {
			...mdStyle,
			...mdScStyle,
			...props.coreStyles?.styles?.medium,
			...props.appStyles?.styles?.medium,
		};
		mergedLargeStyles = {
			...lgStyle,
			...lgScStyle,
			...props.coreStyles?.styles?.large,
			...props.appStyles?.styles?.large,
		};
		mergedXLargeStyles = {
			...xLgStyle,
			...xLgScStyle,
			...props.coreStyles?.styles?.xLarge,
			...props.appStyles?.styles?.xLarge,
		};
		mergedXXLargeStyles = {
			...xxLgStyle,
			...xxLgScStyle,
			...props.coreStyles?.styles?.xxLarge,
			...props.appStyles?.styles?.xxLarge,
		};
		setStyles({
			mergedDefaultStyles,
			mergedSmallStyles,
			mergedMediumStyles,
			mergedLargeStyles,
			mergedXLargeStyles,
			mergedXXLargeStyles,
		});
		setProviderId("style-provider" + new Date());
	}, [userTheme]);

	return theme && providerId ? (
		<AppStylesContext.Provider
			key={providerId}
			value={{ ...styleFiles, ...(theme || {}) }}>
			<ThemeContext.Provider value={theme}>
				{props.children}
			</ThemeContext.Provider>
		</AppStylesContext.Provider>
	) : null;
}
