import React,{useState,useEffect} from 'react'
import { connect } from "react-redux";
import { removePokemon , addPokemonToFavorites , removePokemonFromFavorites} from "../../actions/PokemonListActions"
import Loading from '../loading/Loading';
import FavoriteCard from '../pokemonCard/FavoriteCard';

const Favorites = ({favorites , loading}) => {
    const [favList, setFavList] = useState(favorites)
useEffect(() => {
    setFavList(favorites)
  console.log(favorites)

}, [favorites])
    return (
        <div className=" d-flex flex-column container" style={{minHeight:"100vh"}}>
        <h1 className="fs-1 align-self-center mt-3 mb-3">Favorites</h1>
          <div className="row">
          {
              loading?<Loading/>:
              (favList.length>0? favList.map((pokemon,idx)=> {
                     return <FavoriteCard pokemon = {pokemon} key={idx}  addPokemonToFavorites={addPokemonToFavorites} removePokemonFromFavorites={removePokemonFromFavorites} />
                  })
                  :
                  <div className="d-flex justify-content-center">
                  <div class="alert alert-secondary w-50 d-flex flex-column align-items-center" role="alert">
                  <p>Come on! Every one has a favorite Pokemon.</p>
            </div>
              </div>
                 )
                  
              
          }
         
          </div>

       
      </div>
    )
}

const mapStateToProps = (state) => {
    return {
        favorites : state.pokeList.favorites,
        loading: state.pokeList.loading,
    };
  };
  
  export default connect(mapStateToProps, { 
    removePokemon,
    addPokemonToFavorites,
    removePokemonFromFavorites,
  })(Favorites);
  