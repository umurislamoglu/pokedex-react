
import axios from "axios"

  
export const setLoading = () => ({
    type: "SET_LOADING"
})
  
  
export const setPokeList =(pokeList) => ({
    type: "SET_POKELIST",
    payload:pokeList

})



// export const setPokeDetailList =(pokeDetailedList) => ({
//     type: "SET_DETAILPOKELIST",
//     payload:pokeDetailedList

// })


export const setPokeDetails =(pokeDetails) => ({
    type: "SET_POKEDETAILS",
    payload:pokeDetails

})

export const addCatched =(pokemon) => ({
    type: "ADD_CATCHED",
    payload:pokemon

})
export const releasePokemon =(name) => ({
    type: "RELEASE_POKEMON",
    payload:name

})
export const clearCatched =() => ({
    type: "CLEAR_CATCHED",
    

})

export const addFavorites =(pokemon) => ({
    type: "ADD_FAVORITE",
    payload:pokemon

})



export const removeFromFavorites =(name) => ({
    type: "REMOVE_FAVORITE",
    payload:name

})




export const getPokeListFromApi = (pageNumber) => {
    
    let offset = 0
    
    if(pageNumber === 1){
        offset = 0
    } else {
        offset = (pageNumber-1)*50
    }
    return (dispatch) => {
        dispatch(setLoading())
        

         axios.request({
                method: 'GET',
                url: `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=50`,
               
              }).then(  function (response) {
                  let pokemons = response.data.results
                dispatch(setPokeList(pokemons))

                 
                })

            }}
        

export const  getSearched = (pokemonName) => {





    return (dispatch) => {
        dispatch(setLoading())

        axios.request({
            method: 'GET',
            url: `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
           
          }).then(  function (response) {
            let pokemons = response.data
          dispatch(setPokeList(pokemons))

           
          }).catch(function (error) {
                          alert("Bir hata oluştu")
                          console.log(error)
                        })
    }
}
        
       


// export const getDetailedPokeListFromApi = (arr) => {

//     return (dispatch) => {
//         // dispatch(setLoading());
//         const pokeDetailedList = [];
//         for( let i=0 ; i<arr.length ; i++) {

//             axios.request({
//                 method: 'GET',
//                 url: `${arr[i]}`,
//               }).then(function (response) {
//                 pokeDetailedList.push(response.data)
                    
//             }).catch(function (error) {
//                 console.error(error);
//             })

//         }

//         return dispatch(setPokeDetailList(pokeDetailedList));
      

//     }

// }

export const getPokeDetailsFromApi = (name) => {
    return (dispatch) => {
        dispatch(setLoading())

             axios.request({
                method: 'GET',
                url: `https://pokeapi.co/api/v2/pokemon/${name}`,
              }).then(function (response) {
                dispatch(setPokeDetails(response.data))
                    
            }).catch(function (error) {
                console.error(error);
            })

        

      

    }

}

export const addCatchedPokemon = (pokemon) => {
    return (dispatch) => {
        dispatch(setLoading())
        dispatch(addCatched(pokemon))



    }
}

export const removePokemon = (name) => {
    return (dispatch) => {
        dispatch(setLoading())
        dispatch(releasePokemon(name))
    }

}

export const clearPokemons = () => {
    return (dispatch) => {
        dispatch(clearCatched())
    }
}

export const addPokemonToFavorites = (pokemon) => {
    return (dispatch) => {
        dispatch(addFavorites(pokemon))
    }
}

export const removePokemonFromFavorites = (name) => {
    return (dispatch) => {
        dispatch(setLoading())

        dispatch(removeFromFavorites(name))
    }
}