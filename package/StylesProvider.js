import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DEFAULT_THEME } from "./theme/theme";
import { defaultUtilityStyles } from "./utility/DefaultUtilityStyles";
import { smallUtilityStyles } from "./utility/SmallUtilityStyles";
import { defaultSCStyles } from "./styledComponents/DefaultSCStyles";
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

export let mergedDefaultStyles = {
	...defaultUtilityStyles,
	...defaultSCStyles,
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

export let theme = null;

export const getMergedStyles = () =>{
	return {
		mergedDefaultStyles,
		mergedSmallStyles,
		mergedMediumStyles,
		mergedLargeStyles,
		mergedXLargeStyles,
		mergedXXLargeStyles
	};
};

export default function StylesProvider(props) {
	const [styleFiles, setStyles] = useState({});
	const [providerId, setProviderId] = useState(null);

	const userTheme = useSelector(state=>state?.app?.userTheme);

	useEffect(() => {
		theme = { ...DEFAULT_THEME, ...(userTheme || {}) };
		mergedDefaultStyles = {
			...defaultUtilityStyles,
			...defaultSCStyles,
			...props.coreStyles?.styles?.default,
			...props.appStyles?.styles?.default,
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
		setProviderId("style-provider" + new Date());
	}, [userTheme]);

	// eslint-disable-next-line no-console
	console.log("******************************************");
	// eslint-disable-next-line no-console
	console.log("THEME STYLES: ", theme);
	// eslint-disable-next-line no-console
	console.log("******************************************");

	return theme && providerId ? (
		<AppStylesContext.Provider
			key={providerId}
			value={{ ...styleFiles, ...(theme || {}) }}
		>
			<ThemeContext.Provider value={theme}>
				{props.children}
			</ThemeContext.Provider>
		</AppStylesContext.Provider>
	) : null;
}
