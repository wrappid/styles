import React from "react";

import {
  updateWrappidContext,
  wrappidData,
  WrappidDataContext,
  WrappidDispatchContext
} from "./WrappidContext";
import wrappidReducer, { UPDATE_DATA } from "./wrappidReducer";

export default function WrappidSyncer({
  children,
  data,
}: {
  children: any;
  data: object;
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
    updateWrappidContext(data);
    dispatch({ payload: data, type: UPDATE_DATA });
  }, [data]);

  React.useEffect(() => {
    /**
     * @todo
     * update (global/store/react)context value on (store/react)context change
     */
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