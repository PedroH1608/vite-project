import { PokemonCard } from './atoms/pokemonCard';
import styled from 'styled-components';

export const PokemonList = ({ pokemonData, selectedType }) => {

    const filteredPokemon = pokemonData.filter(pokemon => {
        if (selectedType === 'all') return true;
        return pokemon.types.some(type => type.type.name === selectedType);
    });

    return (
        <PokemonListStyle>
            {filteredPokemon.map((pokemon) => (
                <PokemonCard key={pokemon.name} pokemon={pokemon} />
            ))}
        </PokemonListStyle>
    )
}

const PokemonListStyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  height: 100%;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }
`