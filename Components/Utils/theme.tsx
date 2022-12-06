import { ColorSchemeName } from 'react-native'
export const getTheme = () => {
    const defaultTheme = {
        spacing: 8,
    }

    return defaultTheme
}
export type ITheme = ReturnType<typeof getTheme>

