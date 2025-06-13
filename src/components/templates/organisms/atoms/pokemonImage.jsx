import styled from 'styled-components';

export const PokemonImage = ({ pokemon }) => {
    return (
        <PokemonImageStyle src={pokemon.sprites.versions?.['generation-iii']?.['ruby-sapphire']?.front_default} alt={pokemon.name} />
    )
}

const PokemonImageStyle = styled.img`
    height: 100%;
    background-color: ${props => props.$color};
    background-color: #ff0;
    width: 20%;
    padding: 1rem;
    border: 2px solid #000;
    border-radius: 50%;
`