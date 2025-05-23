import { useEffect, useState } from 'react'
import { getPokemons, getPokemonData } from '../requestApi'
import { Link } from 'react-router-dom'
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

  const PokemonCard = ({ pokemon }) => (
    <li key={pokemon.name}>
      <PokemonCardStyle to={`pokemon/${pokemon.name}`}>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <span>{pokemon.name}</span>
      </PokemonCardStyle>
    </li>
  )
  return (
    <>
      <PokedexContainer>
        <PokemonList>
          {pokemonData.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))}
        </PokemonList>
        {buttonVisible && (<button onClick={handleGetMorePokemons}>Carregar mais</button>)}
      </PokedexContainer>
    </>
  )
}

const PokedexContainer = styled.article`
 background-color: #f00;
`

const PokemonList = styled.ul`
  background-color: #0f0;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  height: 100%;
  gap: 1rem;
  padding: 1rem;
`

const PokemonCardStyle = styled(Link)`
  background-color: #00f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  
  &:hover {
    background-color: #ff0;
    cursor: pointer;
  }
`

export { PokemonsList }