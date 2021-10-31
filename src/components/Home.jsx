import React from 'react'

const Home = () => {
    return (
        <div className=" d-flex flex-column align-items-center" style={{minHeight:"100vh", background:"url(https://d.wattpad.com/story_parts/799408952/images/15d1e58d8c7420fd393949237219.jpg)" , backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",backgroundPosition:"center"}} >
 <main className="px-3 container">
    <h1 className="text-light mt-5">Pokedex</h1>
    <p className="lead text-light">The Pokédex (ポケモン図鑑; Pokemon Zukan; lit. "Illustrated Pokémon Encyclopedia") is an electronic device designed to catalogue and provide information regarding the various species of Pokémon featured in the Pokémon video game, anime and manga series. The name Pokédex is a neologism including "Pokémon" (which itself is a portmanteau of "pocket" and "monster") and "index". The Japanese name is simply "Pokémon Encyclopedia", as it can feature every Pokémon on it, depending on the Pokédex.</p>
    <p className="lead">
    </p>
  </main>

  <footer className="mt-auto text-white-50">
    <p>Pokemon Project for Ekinoks Software, by Umur İslamoğlu</p>
  </footer>
        </div>
    )
}

export default Home
