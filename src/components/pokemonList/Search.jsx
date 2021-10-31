import React, {useState} from 'react'
import { connect } from "react-redux";
import { getSearched , getPokeListFromApi} from "../../actions/PokemonListActions";

const Search = ({getSearched ,setSearched ,getPokeListFromApi , pokeList }) => {

    const[keyword,setKeyword] = useState("")

    const isValid = (keyword) => {
     
      let filtered ;
     if(Array.isArray(pokeList)){
       filtered =pokeList.filter((pokemon) => {
        return pokemon.name.toLowerCase() === keyword.toLowerCase()
       })
     } else {
       filtered = []
     }
     
        if(filtered.length>0){
        return true
      } else{
        return false
      }
    
    }

    const onChange =(e) => {
        setKeyword(e.target.value);
        
        
      }


    const onSubmit = (e) => {
    e.preventDefault();
    if(keyword ===""  || !isValid(keyword)){
    setSearched(false)

      getPokeListFromApi(1);
    } else{
      
        setSearched(true)

        getSearched(keyword)
      
    
      
    }

    
}


    return (
        <form onSubmit={onSubmit}>
        <div className="d-flex flex-row justify-content-center mt-3">
          
            <input type="text" value={keyword} className="form-control w-50 rounded-pill" placeholder="Search" onChange={onChange}  />
          <div className="input-group-append">
           
          </div>
          
          
        </div></form>
    )
}

export default connect(null, { getSearched , getPokeListFromApi})(Search);

