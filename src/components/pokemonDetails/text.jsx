import React,{useEffect} from 'react'
import {getPokeDetailsFromApi ,addCatchedPokemon , removePokemon , clearPokemons , addPokemonToFavorites , removePokemonFromFavorites} from "../../actions/PokemonListActions"
import { connect } from "react-redux";
import Loading from '../loading/Loading';



const PokemonDetails = ({getPokeDetailsFromApi , pokeDetails , loading , addCatchedPokemon , removePokemon , catchedPokemons , clearPokemons , favorites ,addPokemonToFavorites , removePokemonFromFavorites}) => {
    
    const url = "https://pokeapi.co/api/v2/pokemon/8/"
    

    
    useEffect(() => {
        getPokeDetailsFromApi(url)
        
    }, [getPokeDetailsFromApi])


    const catchPokemon = () =>{

        // let pokes = [...catchedPokemons,pokeDetails]
        addCatchedPokemon(pokeDetails)  
        // console.log(catchedPokemons)
    }

    const releasePokemon = () =>{
        removePokemon(pokeDetails.name)
        console.log(catchedPokemons)
    }

    const clearPokes = () =>{
        clearPokemons()
        console.log(catchedPokemons)
    }

    const addFavorite = () => {
        addPokemonToFavorites(pokeDetails)
        console.log(favorites)

    }
    const removeFavorite = () => {
        removePokemonFromFavorites(pokeDetails)
        console.log(favorites)

    }
    
    return (
        <div>
            {loading? <Loading/>: <div>{pokeDetails.name}<button onClick={catchPokemon}>Catch</button><button onClick={releasePokemon}>Release</button><button onClick={clearPokes}>Clear</button><button onClick={addFavorite}>Add</button><button onClick={removeFavorite}>Remove</button></div>}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
      pokeDetails: state.pokeList.pokeDetails,
      loading : state.pokeList.loading,
      catchedPokemons : state.pokeList.catchedPokemons,
      favorites : state.pokeList.favorites,
    };
  };
  
  export default connect(mapStateToProps,{ getPokeDetailsFromApi , addCatchedPokemon , removePokemon , clearPokemons , addPokemonToFavorites, removePokemonFromFavorites })(PokemonDetails);



