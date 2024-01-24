/* eslint-disable no-console */
/* eslint-disable no-undef */

import { customConfig } from "../ConfigProvider";

export function getConfigurationObject() {
  console.log("-----------------------------------");
  console.log(customConfig);
  console.log("-----------------------------------");

  return customConfig;
}
