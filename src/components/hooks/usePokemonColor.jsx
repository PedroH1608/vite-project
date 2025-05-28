import { useState, useEffect } from 'react';
import { getPokemonDetails } from '../requestApi';

const colorMap = {
    black: '#000000',
    blue: '#3D8BFF',
    brown: '#B8860B',
    gray: '#696969',
    green: '#228B22',
    pink: '#DB7093',
    purple: '#6A5ACD',
    red: '#FF6347',
    white: '#FFFFFF',
    yellow: '#FFD700'
};

export const usePokemonColor = (pokemon) => {
    const [color, setColor] = useState('');

    useEffect(() => {
        if (!pokemon) return;

        const fetchPokemonColor = async () => {
            const speciesData = await getPokemonDetails(pokemon.species.url);
            const colorName = speciesData.color.name;
            setColor(colorMap[colorName]);
        };

        fetchPokemonColor();
    }, [pokemon]);

    return color;
}