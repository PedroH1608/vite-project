import { useParams } from 'react-router-dom';
import { usePokemonDetails } from '../hooks/usePokemonDetails';
import { PokemonInfo } from './organisms/pokemonInfo';
import { PokemonMoves } from './organisms/pokemonMoves';
import styled from 'styled-components';

export const PokemonDetails = () => {
    const { name } = useParams()
    const { pokemon, abilitiesDetails } = usePokemonDetails(name)

    if (!pokemon || abilitiesDetails.length === 0) {
        return <span>Loading...</span>
    }

    return (
        <PokemonStyle>
            <PokemonContainer>
                <PokemonInfo pokemon={pokemon} abilitiesDetails={abilitiesDetails} />
                <PokemonMoves pokemon={pokemon} />
            </PokemonContainer>
        </PokemonStyle>
    )
}

const PokemonStyle = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: center;
`

const PokemonContainer = styled.article`
 display: flex;
 flex-direction: column;
 background-color: ${props => props.theme.containerBackground};
 height: 100%;
 width: 100%;
 padding: 2rem;
 margin: 2rem;
 transition: all 0.3s ease;
 box-shadow: 0 0 30px rgba(0,0,0,0.3);
`