let initialState = {
    pokeList:[],
    pokeDetails:{},
    loading:false,
    catchedPokemons:[],
    favorites:[]
}



const PokemonListReducer = (state =initialState ,action) => {

    switch(action.type){

        case "SET_LOADING":
            return {...state,loading:true}

        case "SET_POKEDETAILS":

             return {...state,
                    pokeDetails:action.payload,
                    loading:false}; 
                            
        case "SET_POKELIST":

            return {...state,
                    pokeList:action.payload,
                    loading:false}; 

        case "ADD_CATCHED":
            let catched = [...state.catchedPokemons,action.payload]

            console.log(catched)
            return {...state,
                catchedPokemons: catched,
                loading:false}
            
        case "RELEASE_POKEMON":

                   
            let catchedpokeIndex =state.catchedPokemons.indexOf(state.catchedPokemons.find((pokemon)=> pokemon.name===action.payload)) ;
            if(catchedpokeIndex>-1){
                state.catchedPokemons.splice(catchedpokeIndex,1)
            }   


            return{...state,
                catchedPokemons: state.catchedPokemons,
            loading:false}
        
        case "CLEAR_CATCHED":
            return {...state,
                catchedPokemons:[],
                loading:false}
       
        case "ADD_FAVORITE":
            // let currentFavs = new Set(state.favorites);
            // currentFavs.add(action.payload)
            // let favoritesList = Array.from(currentFavs)
            function isDistinct() {
            let currentFavs = state.favorites

                if(currentFavs.length>0){
                    for( let i = 0 ; i < currentFavs.length ; i++){
                       if(action.payload.name ===currentFavs[i].name) {
                           return false
                       } 

                    }
                    return true

                } else {
                    return true
                }
            }
            let favoritesList = [...state.favorites]
            if(isDistinct()){
                favoritesList.push(action.payload)
            } else{
                alert("Zaten favorilerde")
            }


            return {...state,
                favorites:favoritesList,
                loading:false
            }

        case "REMOVE_FAVORITE":
            let favoritesFiltered = []
            let favoritepokeIndex =state.favorites.indexOf(state.favorites.find((pokemon)=> pokemon.name===action.payload)) ;
            if(favoritepokeIndex>-1){
                state.favorites.splice(favoritepokeIndex,1)
                favoritesFiltered =state.favorites
            }   

            return {...state,
                   favorites:favoritesFiltered,
                   loading:false
                   }

        
        default:
            return state
    }
    



}

export default PokemonListReducer;