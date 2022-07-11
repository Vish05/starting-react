import React from "react";

const PokemonRows = ({pokemonrow, onSelect}) => {
    return (
        <tr>
            <td>{pokemonrow.name.english}</td>
            <td>{pokemonrow.type.join(', ')}</td>
            <td>
                <button onClick={() => onSelect(pokemonrow)}>Select!</button>    
            </td>
        </tr>
    )   
}

export default PokemonRows;