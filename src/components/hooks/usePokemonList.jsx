import { useState, useEffect } from "react"
import { getPokemons, getPokemonData } from "../requestApi"

export const usePokemonList = (initialCount = 10) => {
    const [pokemonData, setPokemonData] = useState([])
    const [offset, setOffset] = useState(0)
    const [buttonVisible, setButtonVisible] = useState(true)

    const fetchPokemons = async (limit, currentOffset) => {
        const fetchedPokemons = await getPokemons(limit, currentOffset)
        const pokemonFetchPromises = fetchedPokemons.map(pokemon => getPokemonData(pokemon.name))
        return Promise.all(pokemonFetchPromises)
    }

    const handleGetPokemons = async () => {
        const pokemonData = await fetchPokemons(initialCount, 0)
        setPokemonData(pokemonData)
    }

    const handleGetMorePokemons = async () => {
        const newOffset = offset + initialCount
        const morePokemonData = await fetchPokemons(initialCount, newOffset)

        setPokemonData(prevData => [...prevData, ...morePokemonData])
        setOffset(newOffset)
        setButtonVisible(false)
    }

    useEffect(() => {
        handleGetPokemons()
    }, [])

    return {
        pokemonData,
        buttonVisible,
        handleGetMorePokemons
    }
}