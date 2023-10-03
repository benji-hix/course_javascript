import './App.css';
import { useState } from 'react';

function App() {
    const [pokemon, setPokemon] = useState([]);

    const fetchPokemon = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0')
            .then((res) => {
                // console.log(res)
                return res.json();
            })
            .then((json) => {
                setPokemon(json.results);
            })
            .catch((error) => console.log(error));
    };

    return (
        <>
            <button onClick={fetchPokemon}>Fetch Pokemon!</button>
          {/* <p>{JSON.stringify(pokemon)}</p> */}
            <ul>
              {
                pokemon.map((mon, idx) => {
                return <li key={idx}>{mon.name}</li>})
              }
            </ul>
        </>
    );
}

export default App;
