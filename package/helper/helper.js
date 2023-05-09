/* eslint-disable no-console */
/* eslint-disable no-undef */
const NODE_ENV = process?.env?.NODE_ENV;

export function getConfigurationObject() {
  if (process.env && Object.keys(process.env).length > 1) {
    let config = { theme: {} };
    let keys = Object.keys(process.env);

    for (let i = 0; i < keys.length; i++) {
      if (keys.includes("REACT_APP_THEME_")) {
        config.theme = {
          ...config.theme,
          [keys[i].slice(16)]: process.env[keys[i]],
        };
      } else if (keys.includes("REACT_APP_")) {
        config = { ...config, [keys[i].slice(10)]: process.env[keys[i]] };
      }
    }
    return config;
  }

  let customConfig = null;

  try {
    let path = "../../../../src/config.json";

    console.log("PATH ", path);
    customConfig = require(p);
    if (customConfig && customConfig[NODE_ENV]) {
      return customConfig[NODE_ENV];
    } else {
      return customConfig;
    }
  } catch (err) {
    console.log(".env file or config.json not found");
    return {theme:{}}
  }
}
