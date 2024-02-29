import React, { type Dispatch } from "react";

import { DEFAULT_THEME } from "../theme/theme";
import { DEFAULT_THEME_TYPES } from "../theme/themeType";

export type WrapidDataType = {
  config: object | any;
  themes?: { [key: string]: { name: string; theme: DEFAULT_THEME_TYPES } };
};
export const wrappidData: WrapidDataType = {
  config: { defaultTheme: "WrappidTheme" },
  themes: { wrappidTheme: { name: "Wrappid Theme", theme: DEFAULT_THEME } },
};

export const WrappidDataContext =
  React.createContext<WrapidDataType>(wrappidData);

export const WrappidDispatchContext = React.createContext<
  Dispatch<{ type: string; payload: object | string }>
>(() => null);

const WrappidContext = { ...wrappidData };

export const updateWrappidContext = (value: object) => {
  Object.assign(WrappidContext, value);
};
export const resetWrappidContext = () => {
  Object.assign(WrappidContext, {});
};

export default WrappidContext;
