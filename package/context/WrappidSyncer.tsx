import React from "react";

// eslint-disable-next-line import/order
import { DEFAULT_THEME } from "../theme/theme";
import {
  WrapidDataType,
  WrappidDataContext,
  WrappidDispatchContext,
  updateWrappidContext,
  wrappidInitialData
} from "./WrappidContext";
import wrappidReducer, { UPDATE_DATA } from "./wrappidReducer";

export let WrappidData: WrapidDataType = { ...wrappidInitialData };

export default function WrappidSyncer({
  children,
  data,
}: {
  children: any;
  data: WrapidDataType;
}) {
  const [wrappidReducerState, dispatch] = React.useReducer(
    wrappidReducer,
    wrappidInitialData
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
    WrappidData = wrappidReducerState;
  }, [wrappidReducerState]);

  return (
    <WrappidDataContext.Provider value={wrappidReducerState}>
      <WrappidDispatchContext.Provider value={dispatch}>
        {children}
      </WrappidDispatchContext.Provider>
    </WrappidDataContext.Provider>
  );
}
