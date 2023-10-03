import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [pokemon, setPokemon] = useState([]);

    const fetchPokemon = () => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0')
            .then((serverObj) => {
                setPokemon(serverObj.data.results);
            })
            .catch((error) => console.log(error));
    };
    return (
        <>
            <h1>Axios Pokemon</h1>
            <button onClick={fetchPokemon}>Fetch Pokemon!</button>
            <ul>
                {pokemon.map((mon, idx) => {
                    return <li key={idx}>{mon.name}</li>;
                })}
            </ul>
        </>
    );
}

export default App;
