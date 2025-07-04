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
  transform: scale(1.15);
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  }
`