import React, { type Dispatch } from "react";

export type WrapidDataType = {
  config: object;
  themes?: { [key: string]: object };
  defaultTheme?: string;
};
export const wrappidData: WrapidDataType = {
  config      : {},
  defaultTheme: "wrappidTheme",
  themes      : {},
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
