/* eslint-disable no-console */
/* eslint-disable no-undef */
// const NODE_ENV = process?.env?.NODE_ENV;
const NODE_ENV = "production";


import customConfig from "../../../../src/config.json";

export function getConfigurationObject() {
	/**
	 * @todo
	 *
	 * dynamic config object creation from .env and config.json
	 */
	if (process.env && Object.keys(process.env).length > 1) {
		let config = { wrappid: {}, theme: {} };
		let keys = Object.keys(process.env);

		for (let i = 0; i < keys.length; i++) {
			let key = keys[i];

			if (key.includes("REACT_APP_THEME_")) {
				/**
				 * @todo
				 * change .slice to length of the prefix
				 */
				config.theme = {
					...config.theme,
					[key.slice("REACT_APP_THEME_".length)]: process.env[key]
				};
			} else if (key.includes("REACT_APP_WRAPPID_")) {
				/**
				 * @todo
				 * change .slice to length of the prefix
				 */
				config.wrappid = {
					...config.wrappid,
					[key.slice("REACT_APP_WRAPPID_".length)]: process.env[key]
				};
			}
		}
		return config;
	}

	try {
		if (customConfig && customConfig[NODE_ENV]) {
			return customConfig[NODE_ENV];
		} else {
			return customConfig;
		}
	} catch (err) {
		console.log(".env file or config.json not found", err);
		return { theme: {} };
	}
}
