import React from "react";

const PokemonInfo = ({name, base}) => {
    console.log(name);
    return (
        <div>
            <h1>{name.english}</h1>
            <table>
                {
                    Object.keys(base).map(key => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{base[key]}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )   
}

export default PokemonInfo;