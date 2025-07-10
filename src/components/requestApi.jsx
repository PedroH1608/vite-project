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

async function getPokemonDetails(url) {
    const response = await axios.get(url)
    return response.data
}

async function getPokemonTypes() {
    const response = await axios.get('https://pokeapi.co/api/v2/type')
    return response.data.results
}

async function getPokemonsByType(type) {
    const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`)
    return response.data.pokemon
}

export { getPokemons, getPokemonData, getPokemonDetails, getPokemonTypes, getPokemonsByType }