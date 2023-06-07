import React from 'react';
import './PokemonList.css'

export default function PokemonList({ pokemon, count }){
    return(
        <>
        <h1>Pokémon List</h1>
        <div className="main-div">
            <div className="num-div">
            {
                count.map(q => (
                    <div key={q}> <b>{q}.</b> </div>
                ))
            }
            </div>
            <div className="names-div">
            {
            pokemon.map(p => (
                <div key={p}> {p} </div>        
            ))}
            </div>
        </div>
        </>
    )
}