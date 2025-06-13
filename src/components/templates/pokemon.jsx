import { useParams } from 'react-router-dom';
import { usePokemonDetails } from '../hooks/usePokemonDetails';
import { Link } from 'react-router-dom';
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
        <div>
            <Link to='/'>Back</Link>
            <PokemonContainer>
                <PokemonInfo pokemon={pokemon} abilitiesDetails={abilitiesDetails} />
                <PokemonMoves pokemon={pokemon} />
            </PokemonContainer>
        </div>
    )
}

const PokemonContainer = styled.article`
 display: flex;
 flex-direction: column;
 background-color: ${props => props.theme.containerBackground};
 height: 100%;
 padding: 2rem;
 margin: 2rem;
 transition: all 0.3s ease;
 box-shadow: 0 0 30px rgba(0,0,0,0.3);
`