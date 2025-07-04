import styled from "styled-components";

export const ThemeButton = (props) => {
    return <ThemeButtonStyle {...props} />
};

const ThemeButtonStyle = styled.button`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.color};
  padding: 0.7rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
      font-weight: 700;
      transform: scale(1.15)
  }
`