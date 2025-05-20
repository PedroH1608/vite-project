import axios from 'axios'

async function getPokemons(limit, offset) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    const pokemons = await response.data.results
    return pokemons
}

async function getPokemonData(name) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const pokemonData = await response.data
    return pokemonData
}

async function getPokemonAbilityDetails(url) {
    const response = await axios.get(url)
    return response.data
}

export { getPokemons, getPokemonData, getPokemonAbilityDetails }