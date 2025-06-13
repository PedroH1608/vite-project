import { usePokemonList } from '../hooks/usePokemonList';
import { PokemonList } from './organisms/pokemonList';
import { LoadMoreButton } from './organisms/atoms/loadMoreButton';
import styled from 'styled-components';

export const Pokedex = () => {
  const { pokemonData, buttonVisible, handleGetMorePokemons } = usePokemonList()

  if (!pokemonData) {
    return <span>Loading...</span>
  }

  return (
    <PokedexContainer>
      <PokemonList pokemonData={pokemonData} />
      {buttonVisible && <LoadMoreButton onClick={handleGetMorePokemons} />}
    </PokedexContainer>
  )
}

const PokedexContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.containerBackground};
  height: 100%;
  padding: 2rem;
  margin: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 0 30px rgba(0,0,0,0.3);
`