import { WrapidDataType, wrappidInitialData } from "./WrappidContext";

export const UPDATE_DATA = "UPDATE_DATA";
export const UPDATE_DEVELOPMENT_DATA = "UPDATE_DEVELOPMENT_DATA";
export const RESET_DATA = "RESET_DATA";
export const UPDATE_DEFAULT_THEME = "UPDATE_DEFAULT_THEME";
export const UPDATE_PAGE_THEME = "UPDATE_PAGE_THEME";
export const RESET_PAGE_THEME = "RESET_PAGE_THEME";
export const UPDATE_MODULE_DATA = "UPDATE_MODULE_DATA";

export type PayloadType = any;

const wrappidReducer = (
  state: WrapidDataType = wrappidInitialData,
  { type, payload }: { type: string; payload: PayloadType }
) => {
  switch (type) {
    case UPDATE_DATA: {
      if (typeof payload === "object") {
        return { ...state, ...payload };
      } else {
        return state;
      }
    }
      
    case UPDATE_DEVELOPMENT_DATA: {
      if (typeof payload === "object") {
        return { ...state, development: { ...state.development, ...payload } };
      } else {
        return state;
      }
    }

    case UPDATE_DEFAULT_THEME: {
      if (typeof payload === "string" && state?.themes?.find(theme => theme?.id === payload)) {
        return { ...state, config: { ...state.config, defaultTheme: payload } };
      } else {
        return state;
      }
    }

    case UPDATE_PAGE_THEME: {
      if (typeof payload === "string" && state?.themes?.find(theme => theme?.id === payload)) {
        return { ...state, pageThemeID: payload };
      } else {
        return state;
      }
    }

    case RESET_PAGE_THEME: {
      return { ...state, pageThemeID: undefined };
    }

    case UPDATE_MODULE_DATA: {
      if (typeof payload === "object"
        && Object.prototype.hasOwnProperty.call(payload, "module")
        && Object.prototype.hasOwnProperty.call(payload, "data")) {
        const { module, data }: { module: string; data: { [key: string]: any; }; } = payload;
        const modules: {[key: string]: {[key: string]: any;}}  = <{[key: string]: {[key: string]: any;}}>state.modules;
        
        let moduleData = { ...data };

        if (Object.keys(modules).length > 0
          && Object.prototype.hasOwnProperty.call(modules, module)
          && Object.keys(modules[module]).length > 0) {
          moduleData = { ...modules[module], ...moduleData };
        }

        return {
          ...state,
          modules: {
            ...modules,
            [module]: moduleData
          }
        };
      } else {
        return state;
      }
    }

    case RESET_DATA: {
      return wrappidInitialData;
    }

    default: {
      console.error(`Unknown action type: ${type}`);
      return state;
    }
  }
};

export default wrappidReducer;
