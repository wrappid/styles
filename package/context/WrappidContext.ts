import React, { type Dispatch } from "react";

import { DEFAULT_THEME } from "../theme/theme";
import { DEFAULT_THEME_TYPES } from "../theme/themeType";

type WrappidConfigDatatype = {
  environment: string;
  platform: string;
  defaultRoute?: string;
  defaultAuthenticatedRoute?: string;
  defaultLayout?: string;
  defaultAuthenticatedLayout?: string;
  defaultTheme?: string;
  backendUrl?: string;
  webUrl?: string;
  drawerWidth?: number;
  miniDrawerWidth?: number;
  snackMessage?: boolean;
  otpLength?: number;
};

export type ThemeObjectType = { id: string, name: string, theme: DEFAULT_THEME_TYPES };

export type WrapidDataType = {
  config: WrappidConfigDatatype;
  development: {[key: string]: any}
  pageThemeID: string | undefined;
  themes?: ThemeObjectType[];
  modules?: {[key: string]: {[key: string]: any}};
};
export const wrappidInitialData: WrapidDataType = {
  config     : { defaultTheme: "WrappidTheme", environment: "devlopment", platform: "web" },
  development: {},
  modules    : {},
  pageThemeID: undefined,
  themes     : [{ id: "wrappidTheme", name: "Wrappid Theme", theme: DEFAULT_THEME }]
};

export const WrappidDataContext =
  React.createContext<WrapidDataType>(wrappidInitialData);

export const WrappidDispatchContext = React.createContext<
  Dispatch<{ type: string; payload: object | string }>
>(() => null);

const WrappidContext = { ...wrappidInitialData };

export const updateWrappidContext = (value: WrapidDataType) => {
  Object.assign(WrappidContext, value);
};
export const resetWrappidContext = () => {
  Object.assign(WrappidContext, wrappidInitialData);
};

export default WrappidContext;
