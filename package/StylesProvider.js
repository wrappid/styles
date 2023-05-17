import React from "react";
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

export let mergedDefaultStyles = {
	...defaultUtilityStyles,
	...defaultSCStyles
};

export let mergedSmallStyles = {
	...smallUtilityStyles,
	...smallSCStyles
};
export let mergedMediumStyles = {
	...mediumUtilityStyles,
	...mediumSCStyles
};
export let mergedLargeStyles = {
	...largeUtilityStyles,
	...largeSCStyles
};
export let mergedXLargeStyles = {
	...xLargeUtilityStyles,
	...xLargeSCStyles
};
export let mergedXXLargeStyles = {
	...xXLargeUtilityStyles,
	...xXLargeSCStyles
};

export default function StylesProvider(props) {
	React.useEffect(() => {
		mergedDefaultStyles = {
			...defaultUtilityStyles,
			...defaultSCStyles,
			...props.coreStyles?.styles?.default,
			...props.appStyles?.styles?.default
		};

		mergedSmallStyles = {
			...smallUtilityStyles,
			...smallSCStyles,
			...props.coreStyles?.styles?.small,
			...props.appStyles?.styles?.small
		};
		mergedMediumStyles = {
			...mediumUtilityStyles,
			...mediumSCStyles,
			...props.coreStyles?.styles?.medium,
			...props.appStyles?.styles?.medium
		};
		mergedLargeStyles = {
			...largeUtilityStyles,
			...largeSCStyles,
			...props.coreStyles?.styles?.large,
			...props.appStyles?.styles?.large
		};
		mergedXLargeStyles = {
			...xLargeUtilityStyles,
			...xLargeSCStyles,
			...props.coreStyles?.styles?.xLarge,
			...props.appStyles?.styles?.xLarge
		};
		mergedXXLargeStyles = {
			...xXLargeUtilityStyles,
			...xXLargeSCStyles,
			...props.coreStyles?.styles?.xxLarge,
			...props.appStyles?.styles?.xxLarge
		};
	}, []);

	return props.children;
}
