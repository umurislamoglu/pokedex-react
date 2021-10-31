import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { removePokemonFromFavorites } from "../../actions/PokemonListActions";
import {  toast } from 'react-toastify';


const Hearth = ({
  pokemon,
  addPokemonToFavorites,
  removePokemonFromFavorites,
  favorites,
}) => {
  const [hearth, setHearth] = useState("bi bi-heart");


  useEffect(() => {
    let filtered = favorites.filter((res) => {
      return res.name === pokemon.name;
    });
    if (filtered.length > 0) {
      if (pokemon.name === filtered[0].name) {
        setHearth("bi bi-heart-fill");
      }
    }
  }, [hearth , pokemon.name , favorites]);


  const handleFavClick = (e) => {
    if (hearth === "bi bi-heart") {
      setHearth("bi bi-heart-fill");
      addPokemonToFavorites(pokemon);
      toast.warn('Pokemon added to favorites', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    } else if (hearth === "bi bi-heart-fill") {
      setHearth("bi bi-heart");
      removePokemonFromFavorites(pokemon.name);
      toast.error('Pokemon removed from favorites', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  };

  return (
    <span className="mx-3 fs-3" onClick={handleFavClick}>
      <i
        className={hearth}
        style={{ cursor: "pointer", color: `red` }}
      ></i>
    </span>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.pokeList.favorites,
  };
};

export default connect(mapStateToProps, { removePokemonFromFavorites })(Hearth);
