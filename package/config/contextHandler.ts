import { createContext } from "react";

export const AppStylesContext = createContext<any>({});
/**
 * CoreThemesContext holds all the themes provided by application
 */
export const StylesThemesContext = createContext<any>({});
export const ThemeContext = createContext<any>({});
export const UserThemeContext = createContext<any>(null);
export const CoreConfigRegistry = createContext<any>(null);

