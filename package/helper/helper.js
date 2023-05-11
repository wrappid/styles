/* eslint-disable no-console */
/* eslint-disable no-undef */
const NODE_ENV = process?.env?.NODE_ENV;

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
			if (keys.includes("REACT_APP_THEME_")) {
				/**
         * @todo
         * change .slice to length of the prefix
         */
				config.theme = {
					...config.theme,
					[keys[i].slice(16)]: process.env[keys[i]],
				};
			} else if (keys.includes("REACT_APP_WRAPPID_")) {
				/**
         * @todo
         * change .slice to length of the prefix
         */
				config.wrappid = { ...config.wrappid, [keys[i].slice(10)]: process.env[keys[i]] };
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
