import styled from 'styled-components';

export const PokemonAbilities = ({ pokemon, abilitiesDetails }) => {
    return (
        <PokemonAbilitiesStyle>
            <h2>Abilities</h2>
            <ul>
                {pokemon.abilities.map((abilityData, index) => {
                    const abilityDetail = abilitiesDetails[index]
                    const effects = abilityDetail.effect_entries.find( // find the effect entry with language 'en'
                        entry => entry.language.name === 'en'
                    )
                    return (
                        <li key={index}>
                            <h3>{abilityData.ability.name}</h3>
                            <p>{effects?.effect || 'No description available'}</p>
                        </li>
                    )
                })}
            </ul>
        </PokemonAbilitiesStyle>
    )
}

const PokemonAbilitiesStyle = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #0ff;

    h2 {
        margin-bottom: 1rem;
    }
`