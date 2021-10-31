import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getPokeListFromApi } from "../../actions/PokemonListActions";
import Loading from "./../loading/Loading";
import PaginationComponent from "./PaginationComponent";
import Pokemon from "./Pokemon";
import Search from "./Search";

const PokemonList = ({ getPokeListFromApi, pokeList , loading }) => {
  
 
  
  const [searched, setSearched] = useState(false);
  const [page, setPage] = useState(1);


  useEffect(() => {
    getPokeListFromApi(page);
  }, [getPokeListFromApi,page]);






  return (
    <div className="container">
      {loading ? (
        <Loading />
      ) : (
        <div className="d-flex flex-column  " style={{minHeight:"100vh"}}>
          <h1 className="fs-1 align-self-center mt-3 mb-3">Pokedex</h1>
          <Search setSearched={setSearched} pokeList= {pokeList} />
          <ul className="list-group list-group-flush">
            {searched ? (
              <Pokemon pokemonName={pokeList.name} />
            ) : (
              pokeList.map((pokemon, idx) => {
                return <Pokemon pokemonName={pokemon.name} key={idx} />;
              })
            )}
          </ul>
        </div>
      )}
<div className="d-flex justify-content-center p-5">
<PaginationComponent setPage={setPage} page={page}/>
</div>
     
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    pokeList: state.pokeList.pokeList,
    loading : state.pokeList.loading
  };
};

export default connect(mapStateToProps, { getPokeListFromApi })(PokemonList);
