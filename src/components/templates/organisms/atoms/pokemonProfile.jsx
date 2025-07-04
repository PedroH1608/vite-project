import { usePokemonTypeColor } from '../../../hooks/usePokemonTypeColor';
import styled from 'styled-components';

// refatorar para molecules

export const PokemonProfile = ({ pokemon }) => {
    const typeColor = usePokemonTypeColor(pokemon);

    return (
        <PokemonProfileStyle>
            <h1>{pokemon.name}</h1>
            <PokemonTypeContainer>
                {pokemon.types.map((typeData, index) => (
                    <PokemonTypes key={index} $color={typeColor[index]}>
                        {typeData.type.name}
                    </PokemonTypes>
                ))}
            </PokemonTypeContainer>
        </PokemonProfileStyle>
    );
}

const PokemonProfileStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 1rem;

    h1 {
        text-transform: capitalize;
        margin-bottom: 1rem;
        font-weight: 700;
        color: ${props => props.theme.color};
    }
`

const PokemonTypeContainer = styled.ul`
    display: flex;
    justify-content: space-between;
`

const PokemonTypes = styled.li`
    display: flex;
    justify-content: center;
    background-color: ${props => props.$color};
    text-transform: uppercase;
    padding: 0.5rem 2.4rem;
    width: 4rem;
    border: 1px solid #000;
    border-radius: 5px;
    margin: 0.2rem;
    color: #fff;
    text-shadow: 0 0 5px rgba(0, 0, 0, 1);
    font-weight: 700;
`