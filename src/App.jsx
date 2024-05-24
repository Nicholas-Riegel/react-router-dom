import { useState } from 'react';
import PokemonList from './components/PokemonList';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import PokemonDetails from './components/PokemonDetails';
import PokemonForm from './components/PokemonForm';





const initialState = [
  { _id: 1, name: 'bulbasaur', weight: 69, height: 7 },
  { _id: 2, name: 'ivysaur', weight: 130, height: 10 },
  { _id: 3, name: 'venusaur', weight: 1000, height: 20 },
  { _id: 4, name: 'charmander', weight: 85, height: 6 },
  { _id: 5, name: 'charmeleon', weight: 190, height: 11 },
];

const App = () => {

  const [pokemonArray, setPokemonArray] = useState(initialState);

  const addPokemon = (newPokemonData) => {
    newPokemonData._id = pokemonArray.length + 1;
    setPokemonArray([...pokemonArray, newPokemonData]);
  };

  return (
    <>
      <NavBar />
      <h1>Pokemon!</h1>
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/pokemon" element={<PokemonList pokemonArray={pokemonArray} />} />
        <Route path="/pokemon/:pokemonId" element={<PokemonDetails pokemonArray={pokemonArray} />}/>
        <Route path="/pokemon/new" element={<PokemonForm addPokemon={addPokemon} />} />
        <Route path="*" element={<h2>Whoops, nothing here!</h2>} />
      </Routes>
    </>
  );
};

export default App;
