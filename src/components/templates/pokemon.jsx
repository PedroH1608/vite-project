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
            <div>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <div>
                    <h1>{pokemon.name}</h1>
                    <ul>
                        <h2>Type</h2>
                        {pokemon.types.map((typeData, index) => (
                            <li key={index}>
                                {typeData.type.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <ul>
                    <h2>Abilities</h2>
                    {pokemon.abilities.map((abilityData, index) => {
                        const abilityDetail = abilitiesDetails[index]
                        const effects = abilityDetail.effect_entries.find( // find the effect entry with language 'en'
                            entry => entry.language.name === 'en'
                        )
                        return (
                            <li key={index}>
                                <strong>{abilityData.ability.name}</strong>
                                <p>{effects?.effect || 'No description available'}</p>
                            </li>
                        )
                    })}
                </ul>
                <ul>
                    <h2>Moves</h2>
                    {pokemon.moves.map((moveData, index) => (
                        <li key={index}>
                            {moveData.move.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export { PokemonDetails }