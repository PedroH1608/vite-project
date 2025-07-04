import { useContext } from "react"
import { ThemeContext, themes } from "../../theme-context"
import { Link, useLocation } from 'react-router-dom';
import { ThemeButton } from "./atoms/themeButton";
import styled from 'styled-components';

export const Header = () => {

    const { theme, setTheme } = useContext(ThemeContext)
    const location = useLocation();

    return (
        <HeaderStyle>
            <BackButtonDiv>
                {location.pathname.startsWith('/pokemon/') && <BackButtonStyle to='/'>{'<'}</BackButtonStyle>}
            </BackButtonDiv>
            <ImageDiv>
                <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="PokeAPI Logo" />
            </ImageDiv>
            <ThemeButtonDiv>
                <ThemeButton onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>Change Theme</ThemeButton>
            </ThemeButtonDiv>
        </HeaderStyle>
    );
};

const HeaderStyle = styled.header`
    height: 5rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 1rem;
    background-color: ${props => props.theme.containerBackground};
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
`

const BackButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    padding: 1rem;
`

const BackButtonStyle = styled(Link)`
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.color};
    font-weight: 700;
    padding: 0.6rem 1rem;
    border-radius: 100%;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        font-size: 1.2rem;
        transform: scale(1.15);
    }
`

const ImageDiv = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;

    img {
        height: 100%;
        padding: 0.2rem 0;
    }
`

const ThemeButtonDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    padding: 1rem;
`