import { useEffect, useState } from 'react'
import { getPokemons, getPokemonData } from '../requestApi'
import { Link } from 'react-router-dom'
import { usePokemonColor } from '../hooks/usePokemonColor'
import styled from 'styled-components'

const PokemonCount = 10


function PokemonsList() {
  const [pokemonData, setPokemonData] = useState([])
  const [offset, setOffset] = useState(0)
  const [buttonVisible, setButtonVisible] = useState(true)


  const fetchPokemons = async (limit, currentOffset) => {
    const fetchedPokemons = await getPokemons(limit, currentOffset)
    const pokemonFetchPromises = fetchedPokemons.map(pokemon => getPokemonData(pokemon.name))
    return Promise.all(pokemonFetchPromises)
  }


  const handleGetPokemons = async () => {
    const pokemonData = await fetchPokemons(PokemonCount, 0)
    setPokemonData(pokemonData)
  }

  const handleGetMorePokemons = async () => {
    const newOffset = offset + PokemonCount
    const morePokemonData = await fetchPokemons(PokemonCount, newOffset)

    setPokemonData(prevData => [...prevData, ...morePokemonData]) // cria um array com os pokemons antigos (:23) e os novos
    setOffset(newOffset)
    setButtonVisible(false)
  }


  useEffect(() => {
    handleGetPokemons()
  }, [])

  if (!pokemonData) { // se não tiver carregado ainda, retorna Loading
    return <span>Loading...</span>
  }

  const PokemonCard = ({ pokemon }) => {
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

  return (
    <PokedexContainer>
      <PokemonList>
        {pokemonData.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </PokemonList>
      {buttonVisible && (<button onClick={handleGetMorePokemons}>Carregar mais</button>)}
    </PokedexContainer>
  )
}

const PokedexContainer = styled.article`
 background-color: ${props => props.theme.containerBackground};
 height: 100%;
 padding: 2rem;
 margin: 2rem;
 transition: all 0.3s ease;
`

const PokemonList = styled.ul`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  height: 100%;
  gap: 0.5rem;
  list-style: none;
`

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

export { PokemonsList }