import { UPDATE_MODULE_DATA } from "./wrappidReducer";

export const updateModuleContextData =
    (module: string, data: { [key: string]: any }) =>
      (dispatch: (arg0: { payload: { data: { [key: string]: any; }; module: string; }; type: string; }) => void) => { 
        dispatch({
          payload: {
            data,
            module
          },
          type: UPDATE_MODULE_DATA
        });
      };