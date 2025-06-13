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
  transition: all 0.3s ease;
  width: 10rem;
  margin: 1rem;

  &:hover {
  font-weight: 700;
  padding: 1rem;
  margin-bottom: 0;
  }
`