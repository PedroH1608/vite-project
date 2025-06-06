import styled from "styled-components"

export const LoadMoreButton = ({ onClick }) => {
    return <LoadMoreButtonStyle onClick={onClick}>Carregar mais</LoadMoreButtonStyle>
}

const LoadMoreButtonStyle = styled.button`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.color};
  padding: 0.5rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
`