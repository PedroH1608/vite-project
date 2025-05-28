import { createContext, useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

export const themes = {
    light: {
        background: '#ccc',
        containerBackground: '#fff',
        color: '#000',
    },
    dark: {
        background: '#000',
        containerBackground: '#333',
        color: '#fff',
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(themes.light)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <StyledThemeProvider theme={theme}>
                {props.children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    )
}