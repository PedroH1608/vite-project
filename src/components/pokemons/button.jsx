import { useContext } from "react"
import { ThemeContext } from "../../context"

export const Button = (props) => {
    const { theme } = useContext(ThemeContext)

    return (
        <button {...props} style={{ background: theme.background, color: theme.color }} onClick={console.log('click')}/>
    );
};