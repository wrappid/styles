import { WrapidDataType, wrappidData } from "./WrappidContext";

export const UPDATE_DATA = "UPDATE_DATA";
export const RESET_DATA = "RESET_DATA";
export const UPDATE_DEFAULT_THEME = "UPDATE_DEFAULT_THEME";
export const UPDATE_PAGE_THEME = "UPDATE_PAGE_THEME";

const wrappidReducer = (
  state: WrapidDataType = wrappidData,
  { type, payload }: { type: string; payload: object | string }
) => {
  switch (type) {
    case UPDATE_DATA: {
      if (typeof payload === "object") {
        return { ...state, ...payload };
      } else {
        return state;
      }
    }

    case UPDATE_DEFAULT_THEME: {
      if (typeof payload === "string" && Object.keys(state?.themes || {})?.includes(payload)) {
        return { ...state, config: { ...state.config, defaultTheme: payload } };
      } else {
        return state;
      }
    }

    case UPDATE_PAGE_THEME: {
      if (typeof payload === "string" && Object.keys(state?.themes || {})?.includes(payload)) {
        return { ...state, pageThemeID: payload };
      } else {
        return state;
      }
    }

    case RESET_DATA: {
      return wrappidData;
    }

    default: {
      throw Error(`Unknown action type: ${type}`);
    }
  }
};

export default wrappidReducer;
