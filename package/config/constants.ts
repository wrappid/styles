import { theme } from "../StylesProvider";

// mui - BREAKPOINTS
export const SMALL_WINDOW_WIDTH = theme?.breakpoints?.values?.sm;
export const MEDIUM_WINDOW_WIDTH = theme?.breakpoints?.values?.md;
export const LARGE_WINDOW_WIDTH = theme?.breakpoints?.values?.lg;
export const X_LARGE_WINDOW_WIDTH = theme?.breakpoints?.values?.xl;
// since XX_LARGE is not present in MUI-Breakpoints
// applying same width as X_LARGE
// so it could be supported later on
export const XX_LARGE_WINDOW_WIDTH = theme?.breakpoints?.values?.xl;

export interface CONFIG_TYPE{ 
    wrappid: any
}
