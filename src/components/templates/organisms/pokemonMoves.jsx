import styled from 'styled-components';

export const PokemonMoves = ({ pokemon }) => {
    return (
        <PokemonMovesStyle>
            <h2>Moves</h2>
            {pokemon.moves.map((moveData, index) => (
                <li key={index}>
                    {moveData.move.name}
                </li>
            ))}
        </PokemonMovesStyle>
    )
}

const PokemonMovesStyle = styled.ul`
    display: flex;

`