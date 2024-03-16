import React from "react";

// eslint-disable-next-line import/order
import { DEFAULT_THEME } from "../theme/theme";
import {
  updateWrappidContext,
  WrapidDataType,
  wrappidData,
  WrappidDataContext,
  WrappidDispatchContext
} from "./WrappidContext";
import wrappidReducer, { UPDATE_DATA } from "./wrappidReducer";

export let WrappidData: WrapidDataType = { ...wrappidData };

export default function WrappidSyncer({
  children,
  data,
}: {
  children: any;
  data: WrapidDataType;
}) {
  const [wrappidReducerState, dispatch] = React.useReducer(
    wrappidReducer,
    wrappidData
  );

  React.useEffect(() => {
    /**
     * @todo
     * update (global/store/react)context value
     */
    /* add default wrappid theme */
    data.themes = {
      ...data?.themes,
      wrappidTheme: { name: "Wrappid Theme", theme: DEFAULT_THEME },
    };
    data.defaultTheme = "wrappidTheme";
    updateWrappidContext(data);
    dispatch({ payload: data, type: UPDATE_DATA });
    WrappidData = data;
  }, [data]);

  React.useEffect(() => {
    /**
     * @todo
     * update (global/store/react)context value on (store/react)context change
     */
    console.log(wrappidReducerState);

    updateWrappidContext(wrappidReducerState);
  }, [wrappidReducerState]);

  return (
    <WrappidDataContext.Provider value={wrappidReducerState}>
      <WrappidDispatchContext.Provider value={dispatch}>
        {children}
      </WrappidDispatchContext.Provider>
    </WrappidDataContext.Provider>
  );
}
