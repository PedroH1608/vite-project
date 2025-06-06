import { useContext } from "react"
import { ThemeContext, themes } from "../../theme-context"
import { ThemeButton } from "./atoms/themeButton";
export const Header = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <header>
            <h1>Pokedex</h1>
            <ThemeButton onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>Change Theme</ThemeButton>
        </header>
    );
};