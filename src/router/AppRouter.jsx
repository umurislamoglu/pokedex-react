import React from 'react'
import {  Route, Switch } from "react-router-dom";
import PokemonList from './../components/pokemonList/PokemonList';
import PokemonDetails from '../components/pokemonDetails/PokemonDetails';
import MyPokemons from './../components/Backpack/MyPokemons';
import Favorites from '../components/Favorites/Favorites';
import Home from '../components/Home';


const AppRouter = () => {
    return (
        <Switch>
            <Route exact path = "/" component= {Home}/>
            <Route exact path = "/pokemons" component= {PokemonList}/>
            <Route  exact path="/pokemons/:name" component={PokemonDetails}/>
            <Route path = "/myPokemons" component= {MyPokemons}/>
            <Route path = "/favorites" component= {Favorites}/>
            <Route/>
        </Switch>
            
    )
}

export default AppRouter
