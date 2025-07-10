import { useEffect, useState } from "react";
import { getPokemonTypes } from "../../../requestApi";
import styled from "styled-components";

export const PokemonTypeFilter = ({ selectedType, onTypeChange }) => {

    const [types, setTypes] = useState([]);
    
    useEffect(() => {
        const fetchTypes = async () => {
            const typesData = await getPokemonTypes();
            setTypes(typesData);
        };
        fetchTypes();
    }, []);

    return (
        <TypeFilter
            value={selectedType}
            onChange={(e) => onTypeChange(e.target.value)}
        >
            <option value="all">All Types</option>
            {types.map(type => (
                <option key={type.name} value={type.name}>
                    {type.name}
                </option>
            ))}
        </TypeFilter>
    );
}

const TypeFilter = styled.select`
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.color};
    transition: all 0.3s ease;
    padding: 0.5rem;
    border-radius: 0.25rem;
    cursor: pointer;
    width: 10rem;
    margin: 1rem;
    text-transform: capitalize;
`;