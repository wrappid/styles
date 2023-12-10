/* eslint-disable no-console */
/* eslint-disable no-undef */

import { customConfig } from "../ConfigProvider";

// const NODE_ENV = process?.env?.NODE_ENV;
// const NODE_ENV = "production";

export function getConfigurationObject() {
  console.log("-----------------------------------");
  console.log(customConfig);
  console.log("-----------------------------------");

  return customConfig;
}
