import React from 'react'
import { Link } from 'react-router-dom'


const Pokemon = ({pokemonName}) => {

    return (
        <li className="list-group-item d-flex text-capitalize mt-3 align-items-center bg-transparent ">
            <span className="">{pokemonName}</span>
            <Link to={`/pokemons/${pokemonName}`} className="btn btn-warning ms-auto align-self-center  ">Details</Link>
        </li>
    )
}

export default Pokemon
