import { useContext } from "react"
import { ThemeContext } from "../../context"
import { Button } from "./button";

export const Header = () => {

    const { themes } = useContext(ThemeContext)

    console.log('ThemeTogglerButton themes', themes);

    return (
        <header>
            <h1>Pokedex</h1>
            <Button>Change Theme</Button>
        </header>
    );
};