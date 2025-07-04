import styled from 'styled-components';

export const PokemonAbilities = ({ pokemon, abilitiesDetails }) => {
    return (
        <PokemonAbilitiesStyle>
            <h2>Abilities</h2>
            <ul>
                {pokemon.abilities.map((abilityData, index) => {
                    const abilityDetail = abilitiesDetails[index]
                    const effects = abilityDetail.effect_entries.find(
                        entry => entry.language.name === 'en')
                    return (
                        <PokemonAbility key={index}>
                            <h3>{abilityData.ability.name}</h3>
                            <p>{effects?.effect || 'No description available'}</p>
                        </PokemonAbility>
                    )
                })}
            </ul>
        </PokemonAbilitiesStyle>
    )
}

const PokemonAbilitiesStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 1rem;

    h2 {
        text-transform: capitalize;
        margin-bottom: 1rem;
        font-weight: 700;
        color: ${props => props.theme.color};
    }
`

const PokemonAbility = styled.li`
    display: flex;    
    flex-direction: column;
    margin-bottom: 1rem;

    h3 {
        text-transform: uppercase;
        font-weight: 700;
        color: ${props => props.theme.color};
    }

    p {
        margin: 0.5rem 0 0;
        color: ${props => props.theme.color};
    }
`