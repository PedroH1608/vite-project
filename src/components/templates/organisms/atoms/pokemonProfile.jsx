import styled from 'styled-components';

// refatorar para molecules

export const PokemonProfile = ({ pokemon }) => {
    return (
        <PokemonProfileStyle>
            <h1>{pokemon.name}</h1>
            <PokemonTypeContainer>
                <h2>Type</h2>
                <PokemonTypes>
                    {pokemon.types.map((typeData, index) => (
                        <li key={index}>
                            {typeData.type.name}
                        </li>
                    ))}
                </PokemonTypes>
            </PokemonTypeContainer>
        </PokemonProfileStyle>
    );
}

const PokemonProfileStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #f0f;
    height: 100%;
    width: 100%;
    margin: 0 1rem;

    h1 {
        text-transform: capitalize;
        margin-bottom: 1rem;
        font-weight: 700;
    }
`

const PokemonTypeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
        margin-bottom: 1rem;
    }
`

const PokemonTypes = styled.ul`
    display: flex;

    li {
        display: flex;
        justify-content: center;
        background-color: #ccc;
        text-transform: uppercase;
        padding: 0.5rem 2.4rem;
        width: 4rem;
        border: 1px solid #000;
        border-radius: 5px;
    }
`