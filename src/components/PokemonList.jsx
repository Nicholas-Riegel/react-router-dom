import { Link } from 'react-router-dom';

const PokemonList = (props) => {
    return (
      <>
        <h2>Pokemon</h2>
        <ul>
          {props.pokemonArray.map((currentPokemon) => (
            <li key={currentPokemon._id}>
              <Link to={`/pokemon/${currentPokemon._id}`}>
                {currentPokemon.name}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  };
  
  export default PokemonList;
  