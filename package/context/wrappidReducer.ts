import { WrapidDataType, wrappidData } from "./WrappidContext";

export const UPDATE_DATA = "UPDATE_DATA";
export const RESET_DATA = "RESET_DATA";
export const UPDATE_DEFAULT_THEME = "UPDATE_DEFAULT_THEME";

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
      if (typeof payload === "string") {
        return { ...state, defaultTheme: payload };
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
