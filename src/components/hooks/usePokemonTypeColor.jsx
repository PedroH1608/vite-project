import { useState, useEffect } from 'react';

const colorMap = {
    normal: '#aa9',
    fighting: '#b54',
    flying: '#89f',
    poison: '#a59',
    ground: '#db5',
    rock: '#ba6',
    bug: '#ab2',
    ghost: '#66b',
    steel: '#aab',
    fire: '#f42',
    water: '#39f',
    grass: '#7c5',
    electric: '#fc3',
    psychic: '#f59',
    ice: '#6cf',
    dragon: '#76e',
    dark: '#754',
    fairy: '#e9e',
    stellar: '#77a697',
};

export const usePokemonTypeColor = (pokemon) => {
    const [typeColor, setTypeColor] = useState('');

    useEffect(() => {
        if (!pokemon) return;

        const fetchPokemonTypeColor = async () => {
            const color = pokemon.types.map(typeData => 
                colorMap[typeData.type.name]
            );
            setTypeColor(color);
        };

        fetchPokemonTypeColor();
    }, [pokemon]);

    return typeColor;
}