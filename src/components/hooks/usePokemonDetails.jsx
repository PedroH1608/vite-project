import { useState, useEffect } from "react"
import { getPokemonDetails, getPokemonData } from "../requestApi"

export const usePokemonDetails = (name) => {
    const [pokemon, setPokemon] = useState(null)
    const [abilitiesDetails, setAbilitiesDetails] = useState([])

    useEffect(() => {
        const fetchPokemon = async () => {
            const pokemonData = await getPokemonData(name)
            setPokemon(pokemonData)

            const abilityPromises = pokemonData.abilities.map(ability =>
                getPokemonDetails(ability.ability.url)
            )

            const abilitiesData = await Promise.all(abilityPromises)
            setAbilitiesDetails(abilitiesData)
        }
        fetchPokemon()
    }, [name]);

    return { pokemon, abilitiesDetails }
}