import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' // hook que retorna os parâmetros da URL
import { getPokemonDetails, getPokemonData } from '../requestApi'
import { usePokemonColor } from '../hooks/usePokemonColor'
import { Link } from 'react-router-dom'

const PokemonDetails = () => {
    const { name } = useParams() // usa o hook useParams para pegar o nome do pokemon da URL
    // useParams é um hook que retorna um objeto com os parâmetros da URL
    const [pokemon, setPokemon] = useState(null) // inicializa o pokemon como null
    // useState é um hook que retorna um array com dois elementos: o estado atual e uma função para atualizá-lo
    const [abilitiesDetails, setAbilitiesDetails] = useState([]) // inicializa o abilitiesDetails como um array vazio

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
    }, [name]) // roda quando o name atualizar

    if (!pokemon || abilitiesDetails.length === 0) { // se não tiver carregado ainda, retorna Loading
        return <span>Loading...</span>
    }
    // refatorar
    return (
        <div>
            <Link to='/'>Back</Link>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <span>{pokemon.name}</span>
            <ul>
                {pokemon.moves.map((moveData, index) => (
                    <li key={index}>
                        {moveData.move.name}
                    </li>
                ))}
            </ul>
            <ul>
                {pokemon.abilities.map((abilityData, index) => {
                    const abilityDetail = abilitiesDetails[index]
                    const effects = abilityDetail.effect_entries.find( // find the effect entry with language 'en'
                        entry => entry.language.name === 'en'
                    )
                    return (
                        <li key={index} className='ability'>
                            <strong>{abilityData.ability.name}</strong>
                            <p>{effects?.effect || 'No description available'}</p>
                        </li>
                    )
                })}
            </ul>
            <ul>
                {pokemon.types.map((typeData, index) => (
                    <li key={index}>
                        {typeData.type.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export { PokemonDetails }