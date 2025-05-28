import { useContext } from "react"
import { ThemeContext } from "../theme-context"

export const Container = (props) => {

    const { theme } = useContext(ThemeContext)

    return (
        <div style={{ background: theme.background, minHeight: '100vh' }}>
            {props.children}
        </div>
    );
}