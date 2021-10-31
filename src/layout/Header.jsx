import React,{useState} from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

const [dark, setDark] = useState(true)



  const handleDarkMode = (e) => {

    let app = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement

    if(dark){
      setDark(false)
    }else{
      setDark(true)
    }
 
    if(dark){
      app.style.backgroundColor = "#212529"
      app.style.color = "#fff"
      app.parentElement.backgroundColor = "#212529"
    } else{
      app.style.backgroundColor = "#fff"
      app.style.color = "#333"
      app.parentElement.backgroundColor = "#fff"
    }
  
  }





  return (
    <div>
          
  <nav className="navbar navbar-expand-md navbar-dark bg-dark py-3 " aria-label="Fourth navbar example" >
    <div className="container d-flex flex-row justify-content-between">
    <NavLink
            to="/"
            className="d-flex align-items-center  text-decoration-none"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png"
              alt="pokemon"
              style={{ height: "40px" }}
              className="bg-transparent"
            />
          </NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse ms-4" id="navbarsExample04">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
              <NavLink exact to="/pokemons" className="nav-link">
                Pokedex
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/mypokemons" className="nav-link">
                My Pokemons
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/favorites" className="nav-link">
                Favorites
              </NavLink>
            </li>
       
        </ul>
        <div className="form-check form-switch d-flex felx-row align-items-center justify-content-between" style={{width:"150px"}} >
            <input
              className="form-check-input "
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              style={{width:"50px", height:"25px"}}
              onChange={handleDarkMode}
            />
            <label className="form-check-label text-light">
              Dark Mode
            </label>
          </div>
      </div>
    </div>
    
  </nav>














{/* 

      <div className="container">
        <header className="d-flex justify-content-between py-3">
          
          <NavLink
            to="/"
            className="d-flex align-items-center  text-decoration-none"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png"
              alt="pokemon"
              style={{ height: "40px" }}
              className="bg-transparent"
            />
          </NavLink>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink exact to="/pokemons" className="nav-link">
                Pokedex
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/mypokemons" className="nav-link">
                My Pokemons
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/favorites" className="nav-link">
                Favorites
              </NavLink>
            </li>
          </ul>
          <div className="form-check form-switch d-flex felx-row align-items-center justify-content-between" style={{width:"150px"}} >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              style={{width:"50px", height:"25px"}}
              onChange={handleDarkMode}
            />
            <label className="form-check-label" for="flexSwitchCheckDefault">
              Dark Mode
            </label>
          </div>
        </header>
      </div> */}
    </div>
  );
};

export default Header;
