import { useContext } from "react"
import { ThemeContext, themes } from "../theme-context"
import { Button } from "./button";

export const Header = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <header>
            <h1>Pokedex</h1>
            <Button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>Change Theme</Button>
        </header>
    );
};