import { PokemonCard } from './atoms/pokemonCard';
import styled from 'styled-components';

export const PokemonList = ({ pokemonData }) => {
    return (
        <PokemonListStyle>
            {pokemonData.map((pokemon) => (
                <PokemonCard key={pokemon.name} pokemon={pokemon} />
            ))}
        </PokemonListStyle>
    )
}

const PokemonListStyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  height: 100%;
  gap: 0.5rem;
  list-style: none;
`