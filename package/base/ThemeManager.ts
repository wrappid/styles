import { BaseStyle } from "./BaseStyle";

export class ThemeManager extends BaseStyle{
    refreshTheme(newTheme){
        this.theme = newTheme
    }
}