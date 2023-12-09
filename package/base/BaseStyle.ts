import { DEFAULT_THEME } from "../theme/theme"
import { DEFAULT_THEME_TYPES } from "../theme/themeType"

let baseTheme: DEFAULT_THEME_TYPES = DEFAULT_THEME

export function updateTheme(newTheme){
    baseTheme = {...newTheme}
}

export abstract class BaseStyle {
    theme: DEFAULT_THEME_TYPES
    style: any

    constructor(){
        this.theme = {...baseTheme}
    }

    getStyle(){
        return this.style
    }
} 