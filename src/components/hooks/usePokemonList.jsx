import { useState, useEffect, useRef } from "react"
import { getPokemons, getPokemonData, getPokemonsByType } from "../requestApi"

export const usePokemonList = (selectedType = 'all', initialCount = 10) => {
    const [pokemonData, setPokemonData] = useState([])
    const [offset, setOffset] = useState(0)
    const [buttonVisible, setButtonVisible] = useState(true)

    const [loading, setLoading] = useState(false)
    const typePokemonListRef = useRef([])

    useEffect(() => {
        const fetchInitial = async () => {
            setLoading(true)
            setOffset(0)
            if (selectedType === 'all') {
                const pokemons = await getPokemons(initialCount, 0)
                const data = await Promise.all(pokemons.map(pokemon => getPokemonData(pokemon.name)))
                setPokemonData(data)
            } else {
                const typePokemons = await getPokemonsByType(selectedType)
                typePokemonListRef.current = typePokemons
                const slice = typePokemons.slice(0, initialCount)
                const data = await Promise.all(slice.map(pokemon => getPokemonData(pokemon.pokemon.name)))
                setPokemonData(data)
                setButtonVisible(typePokemons.length > initialCount)
            }
            setLoading(false)
        }
        fetchInitial()
    }, [selectedType])

    const handleGetMorePokemons = async () => {
        setLoading(true)
        const newOffset = offset + initialCount
        if (selectedType === 'all') {
            const pokemons = await getPokemons(initialCount, newOffset)
            const data = await Promise.all(pokemons.map(pokemon => getPokemonData(pokemon.name)))
            setPokemonData(prevData => [...prevData, ...data])
            setOffset(newOffset)
            setButtonVisible(data.length === initialCount)
        } else {
            const typePokemons = typePokemonListRef.current
            const slice = typePokemons.slice(newOffset, newOffset + initialCount)
            const data = await Promise.all(slice.map(pokemon => getPokemonData(pokemon.pokemon.name)))
            setPokemonData(prevData => [...prevData, ...data])
            setOffset(newOffset)
            setButtonVisible(newOffset + initialCount < typePokemons.length)
        }
        setLoading(false)
    }

    return {
        pokemonData,
        buttonVisible,
        handleGetMorePokemons,
        loading
    }
}