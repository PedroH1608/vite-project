import styled from 'styled-components';

export const PokemonMoves = ({ pokemon }) => {
    return (
        <PokemonMovesStyle>
            <h2>Moves</h2>
            <PokemonMovesList>
                {pokemon.moves.map((moveData, index) => (
                    <li key={index}>
                        {moveData.move.name}
                    </li>
                ))}
            </PokemonMovesList>
        </PokemonMovesStyle>
    )
}

const PokemonMovesStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    h2 {
        text-transform: capitalize;
        margin-bottom: 1rem;
        font-weight: 700;
        color: ${props => props.theme.color};
    }
`

const PokemonMovesList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    gap: 1rem;
    width: 100%;

    li {
        text-transform: capitalize;
        font-weight: 700;
        color: ${props => props.theme.color};
        background-color: ${props => props.theme.background};
        border-radius: 0.25rem;
        transition: background-color 0.3s ease;
        text-align: center;
    }
`