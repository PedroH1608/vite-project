import styled from "styled-components";

export const Container = (props) => {
    return (
        <ContainerStyle>
            {props.children}
        </ContainerStyle>
    );
}

const ContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.background};
    min-height: 100vh;
    width: 100%;
`