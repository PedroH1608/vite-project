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
    align-items: center;
    background-color: #f00;
`