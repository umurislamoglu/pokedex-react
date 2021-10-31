import React, {  useEffect } from "react";
import {
  getPokeDetailsFromApi,
  addCatchedPokemon,
  addPokemonToFavorites,
  removePokemonFromFavorites,
} from "../../actions/PokemonListActions";
import { connect } from "react-redux";
import Loading from "../loading/Loading";
import Type from "./Type";
import Ability from "./Ability";
import Stat from "./Stat";
import Hearth from "./Hearth";
import {  toast } from 'react-toastify';

const PokemonDetails = ({
  getPokeDetailsFromApi,
  pokeDetails,
  loading,
  addCatchedPokemon,
  addPokemonToFavorites,
  removePokemonFromFavorites,
  match,
  history,
}) => {


  useEffect(() => {
    getPokeDetailsFromApi(match.params.name);
  }, [getPokeDetailsFromApi, match.params.name]);

  const handleClick = () => {
    addCatchedPokemon(pokeDetails);
    toast.success("  Good Job! You have catched a pokemon.", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  };

  return (
    <div className="container">
      {loading ? (
        <Loading />
      ) : (
        pokeDetails.sprites && (
          <div className="d-flex justify-content-center " style={{minHeight:"100vh"}}>
            <div className="col-md-4 col-sm-6 col-lg-4 w-75 mt-3">
              <div className="card mt-3 d-flex flex-column justify-content-center mb-5 shadow rounded bg-transparent">
                  <div className = "d-flex justify-content-center mb-3">
                  <img
                  loading="lazy"
                  src={pokeDetails.sprites.other.dream_world.front_default}
                  alt={pokeDetails.name}
                  className="w-75 rounded"
                />
                  </div>
                
                <div className="d-flex flex-row justify-content-between ">
                  <h3 className="card-text text-capitalize mx-3 fs-2">
                    {pokeDetails.name}
                  </h3>
                  <Hearth pokemon = {pokeDetails} addPokemonToFavorites={addPokemonToFavorites} removeFromFavorites={removePokemonFromFavorites}/>
                </div>
                <hr />
                <div className="mx-3">
                  <h5 className="mb-3">Types</h5>
                  {pokeDetails.types.map((t, idx) => {
                    return <Type typeName={t.type.name} key={idx} />;
                  })}
                </div>
                <div className="card-body">
                  <h5 className="mb-3">Attributes:</h5>
                  <p className="d-flex flex-row  ">
                    <span className="w-25">Height:</span> <span className="ms-3">{pokeDetails.height}</span>{" "}
                  </p>
                  <p className="d-flex flex-row">
                  <span className="w-25">Weight:</span><span className="ms-3">{pokeDetails.weight}</span>{" "}
                  </p>
                  <p className="d-flex flex-row">
                    <span className="w-25">Base experience:</span>
                    <span className="ms-3">{pokeDetails.base_experience}</span>{" "}
                  </p>
                  <div className="mb-3">
                    <h5>Abilities:</h5>
                    <ul className="list-group d-flex justify-content-center">
                      {pokeDetails.abilities.map((abilite, idx) => {
                        return (
                          <Ability ability={abilite.ability.name} key={idx} />
                        );
                      })}
                    </ul>
                  </div>
                  <div>
                    <h5 className="mb-3">Stats:</h5>
                    {pokeDetails.stats.map((statistics, idx) => {
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
                </div>

                <div className="card-footer d-flex flex-row bg-transparent">
                  <button
                    className="btn btn-success col-5 m-auto"
                    onClick={handleClick}
                  >
                    Catch!
                  </button>
                  <button
                    className="btn btn-outline-secondary col-5 m-auto"
                    onClick={() => history.goBack()}
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </div>
            
          </div>
        )
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    pokeDetails: state.pokeList.pokeDetails,
    loading: state.pokeList.loading,
  };
};

export default connect(mapStateToProps, {
  getPokeDetailsFromApi,
  addCatchedPokemon,
  addPokemonToFavorites,
  removePokemonFromFavorites,
})(PokemonDetails);
