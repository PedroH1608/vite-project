import { PokemonImage } from './atoms/pokemonImage';
import { PokemonProfile } from './atoms/pokemonProfile';
import { PokemonAbilities } from './atoms/pokemonAbilities';
import styled from 'styled-components';

export const PokemonInfo = ({ pokemon, abilitiesDetails }) => {
    return (
        <PokemonInfoStyle>
            <PokemonImage pokemon={pokemon} />
            <PokemonProfile pokemon={pokemon} />
            <PokemonAbilities pokemon={pokemon} abilitiesDetails={abilitiesDetails} />
        </PokemonInfoStyle>
    )
}

const PokemonInfoStyle = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`