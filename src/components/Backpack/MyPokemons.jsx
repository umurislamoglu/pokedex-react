import React from "react";
import { connect } from "react-redux";
import {
  addCatchedPokemon,
  removePokemon,
  clearPokemons,
  addPokemonToFavorites,
  removePokemonFromFavorites,
} from "../../actions/PokemonListActions";
import Loading from "../loading/Loading";
import Card from "../pokemonCard/Card";

const MyPokemons = ({
  loading,
  catchedPokemons,
  clearPokemons,
  removePokemon,
  removePokemonFromFavorites,
  addPokemonToFavorites,
}) => {
  return (
    <div
      className=" d-flex flex-column container"
      style={{ minHeight: "100vh" }}
    >
      <h1 className="fs-1 align-self-center mt-3 mb-3">My Pokemons</h1>
      <div className="row">
        {loading ? (
          <Loading />
        ) : catchedPokemons.length > 0 ? (
          catchedPokemons.map((pokemon, idx) => {
            return (
              <Card
                pokemon={pokemon}
                key={idx}
                removePokemon={removePokemon}
                addPokemonToFavorites={addPokemonToFavorites}
                removePokemonFromFavorites={removePokemonFromFavorites}
              />
            );
          })
        ) : (
            <div className="d-flex justify-content-center">
                <div class="alert alert-secondary w-50 d-flex flex-column align-items-center" role="alert">
            <p>You didn't catched a pokemon yet.</p>
            <p className="fs-3">Gotta catch'em All</p> 
          </div>
            </div>
          
        )}
      </div>
      {catchedPokemons.length > 0 ? (
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-danger mt-5 mb-5 w-50"
            onClick={() => {
              clearPokemons();
            }}
          >
            Release All Pokemons
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    catchedPokemons: state.pokeList.catchedPokemons,
    loading: state.pokeList.loading,
  };
};

export default connect(mapStateToProps, {
  removePokemon,
  clearPokemons,
  addCatchedPokemon,
  addPokemonToFavorites,
  removePokemonFromFavorites,
})(MyPokemons);
