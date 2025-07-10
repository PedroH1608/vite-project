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
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  
  img {
    height: 7rem;
    padding: 0.3rem;
  }

  span {
    text-transform: capitalize;
    font-size: 1rem;
  }
    
  &:hover {
    transform: scale(1.15);

    span {
      font-weight: 700;
      transition: font-weight 0.5s ease;
    }
  }

  @media (max-width: 1280px) {
    img {
      height: 5rem;
    }

    span {
      font-size: 0.8rem;
    }
  }
`