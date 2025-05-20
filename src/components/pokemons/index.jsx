import { useEffect, useState } from 'react'
import { getPokemons, getPokemonData } from '../requestApi'
import { Link } from 'react-router-dom'

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
      <Link to={`pokemon/${pokemon.name}`} className="pokemon-card">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <span>{pokemon.name}</span>
      </Link>
    </li>
  )
  return (
    <>
      <header>
        <h1>Pokedex</h1>
      </header>
      <article className="pokedex-container">
        <ul className="pokemon-list">
          {pokemonData.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))}
        </ul>
        {buttonVisible && (<button onClick={handleGetMorePokemons}>Carregar mais</button>)}
      </article>
    </>
  )
}

export { PokemonsList }