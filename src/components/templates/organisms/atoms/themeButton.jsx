import styled from "styled-components";

export const ThemeButton = (props) => {
    return <ThemeButtonStyle {...props} />
};

const ThemeButtonStyle = styled.button`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.color};
  padding: 0.5rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
`