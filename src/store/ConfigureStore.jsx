
import { createStore  , compose , applyMiddleware , combineReducers} from 'redux';
import thunk from "redux-thunk"
import PokemonListReducer from './../reducers/PokemonListReducer';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



export default function ConfigureStore()  {
    
    const store = createStore(
        combineReducers({pokeList : PokemonListReducer}),composeEnhancers(applyMiddleware(thunk)) );
    
    return store;
}
