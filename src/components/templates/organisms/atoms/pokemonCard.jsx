import { usePokemonColor } from "../../../hooks/usePokemonColor";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const PokemonCard = ({ pokemon }) => {
    const color = usePokemonColor(pokemon);
    return (
        <li key={pokemon.name}>
            <PokemonCardStyle to={`pokemon/${pokemon.name}`} $color={color}>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <span>{pokemon.name}</span>
            </PokemonCardStyle>
        </li>
    )
}

const PokemonCardStyle = styled(Link)`
  background-color: ${props => props.$color};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  transition: all 0.3s ease;
  padding: 0.5rem;
  
  &:hover {
    padding: 1.2rem;
  }
`