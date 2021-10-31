import React from "react";
import Type from "../pokemonDetails/Type";
import Stat from "../pokemonDetails/Stat";
import Hearth from "../pokemonDetails/Hearth";
import {  toast } from 'react-toastify';


const Card = ({ pokemon, removePokemon, addPokemonToFavorites, removePokemonFromFavorites }) => {


  const releaseFromBag = () => {
    removePokemon(pokemon.name)
    toast.error('Pokemon released', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  return (
    pokemon.sprites && (
      <div
        className="card shadow rounded col-lg-4 col-md-6 col-sm-12 mx-auto mt-5 bg-transparent" 
        style={{ width: "25rem" }}
      >
        <img
          className="card-img-top"
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
          style={{ height: "20rem" }}
        />
        <div className="card-body">
            <div className="d-flex dlex-row align-items-center justify-content-between">
          <h5 className="card-title text-capitalize">{pokemon.name}</h5>
          <Hearth pokemon = {pokemon} addPokemonToFavorites = {addPokemonToFavorites} removePokemonFromFavorites = {removePokemonFromFavorites}  />
            </div>
          <div className="mt-2">
            {pokemon.types.map((t, idx) => {
              return <Type typeName={t.type.name} key={idx} />;
            })}
          </div>
          <div className="mt-2 mb-2">
            {pokemon.stats.map((statistics, idx) => {
              return (
                <Stat
                  key={idx}
                  statName={statistics.stat.name}
                  statValue={statistics.base_stat}
                  no={idx}
                />
              );
            })}
          </div>

         
         <button className="btn btn-outline-danger rounded mt-3 mb-2" onClick={releaseFromBag} >Release pokemon</button>
        </div>
      </div>
    )
  );
};

export default Card;
