import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DEFAULT_THEME } from "./theme/theme";
import { DefaultUtilityStyles } from "./utility/DefaultUtilityStyles";
import { DefaultSCStyles } from "./styledComponents/DefaultSCStyles";
import { smallUtilityStyles } from "./utility/SmallUtilityStyles";
import { smallSCStyles } from "./styledComponents/SmallSCStyles";
import { mediumUtilityStyles } from "./utility/MediumUtilityStyles";
import { mediumSCStyles } from "./styledComponents/MediumSCStyles";
import { largeUtilityStyles } from "./utility/LargeUtilityStyles";
import { largeSCStyles } from "./styledComponents/LargeSCStyles";
import { xLargeUtilityStyles } from "./utility/XLargeUtilityStyles";
import { xLargeSCStyles } from "./styledComponents/XLargeSCStyles";
import { xXLargeUtilityStyles } from "./utility/XXLargeUtilityStyles";
import { xXLargeSCStyles } from "./styledComponents/XXLargeSCStyles";
import { AppStylesContext } from "./config/contextHandler";
import { ThemeContext } from "./config/contextHandler";
import { updateTheme } from "./base/BaseStyle";
import { ThemeManager } from "./base/ThemeManager";

export let mergedDefaultStyles = {
	...new DefaultUtilityStyles().getStyle(),
	...new DefaultSCStyles().getStyle(),
};

export let mergedSmallStyles = {
	...smallUtilityStyles,
	...smallSCStyles,
};
export let mergedMediumStyles = {
	...mediumUtilityStyles,
	...mediumSCStyles,
};
export let mergedLargeStyles = {
	...largeUtilityStyles,
	...largeSCStyles,
};
export let mergedXLargeStyles = {
	...xLargeUtilityStyles,
	...xLargeSCStyles,
};
export let mergedXXLargeStyles = {
	...xXLargeUtilityStyles,
	...xXLargeSCStyles,
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

export default function StylesProvider(props) {
	const [styleFiles, setStyles] = useState({});
	const [providerId, setProviderId] = useState(null);

	const userTheme = useSelector(state => state?.app?.userTheme);

	useEffect(() => {
		theme = { ...DEFAULT_THEME, ...(userTheme || {}) };
		updateTheme(theme);
		new ThemeManager().refreshTheme(theme);
		let defStyle = new DefaultUtilityStyles().getStyle();
		let defScStyle = new DefaultSCStyles().getStyle();
		let defCoreStyle = new props.coreStyles.styles.default().getStyle();
		let defAppStyle = new props.appStyles.styles.default().getStyle();

		// console.log(
		// 	"THEME UPDATE",
		// 	defStyle,
		// 	defScStyle,
		// 	defCoreStyle,
		// 	defAppStyle
		// );

		mergedDefaultStyles = {
			...defStyle,
			...defScStyle,
			...defCoreStyle,
			...defAppStyle,
		};

		mergedSmallStyles = {
			...smallUtilityStyles,
			...smallSCStyles,
			...props.coreStyles?.styles?.small,
			...props.appStyles?.styles?.small,
		};
		mergedMediumStyles = {
			...mediumUtilityStyles,
			...mediumSCStyles,
			...props.coreStyles?.styles?.medium,
			...props.appStyles?.styles?.medium,
		};
		mergedLargeStyles = {
			...largeUtilityStyles,
			...largeSCStyles,
			...props.coreStyles?.styles?.large,
			...props.appStyles?.styles?.large,
		};
		mergedXLargeStyles = {
			...xLargeUtilityStyles,
			...xLargeSCStyles,
			...props.coreStyles?.styles?.xLarge,
			...props.appStyles?.styles?.xLarge,
		};
		mergedXXLargeStyles = {
			...xXLargeUtilityStyles,
			...xXLargeSCStyles,
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
		let defStyle = new DefaultUtilityStyles().getStyle();
		let defScStyle = new DefaultSCStyles().getStyle();
		let defCoreStyle = new props.coreStyles.styles.default().getStyle();
		let defAppStyle = new props.appStyles.styles.default().getStyle();

		mergedDefaultStyles = {
			...defStyle,
			...defScStyle,
			...defCoreStyle,
			...defAppStyle,
		};

		mergedSmallStyles = {
			...smallUtilityStyles,
			...smallSCStyles,
			...props.coreStyles?.styles?.small,
			...props.appStyles?.styles?.small,
		};
		mergedMediumStyles = {
			...mediumUtilityStyles,
			...mediumSCStyles,
			...props.coreStyles?.styles?.medium,
			...props.appStyles?.styles?.medium,
		};
		mergedLargeStyles = {
			...largeUtilityStyles,
			...largeSCStyles,
			...props.coreStyles?.styles?.large,
			...props.appStyles?.styles?.large,
		};
		mergedXLargeStyles = {
			...xLargeUtilityStyles,
			...xLargeSCStyles,
			...props.coreStyles?.styles?.xLarge,
			...props.appStyles?.styles?.xLarge,
		};
		mergedXXLargeStyles = {
			...xXLargeUtilityStyles,
			...xXLargeSCStyles,
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
