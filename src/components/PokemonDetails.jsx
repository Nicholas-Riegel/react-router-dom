
import { useParams } from 'react-router-dom';

const PokemonDetails = (props) => {
    
    const { pokemonId } = useParams();

    const singlePokemon = props.pokemonArray.find((poke) => poke._id === Number(pokemonId));
  
    return (
      <>
        <h2>Pokemon Details</h2>
        <dl>
          <dt>Weight:</dt>
          <dd>{singlePokemon.weight}</dd>
          <dt>Height:</dt>
          <dd>{singlePokemon.height}</dd>
        </dl>
      </>
    );
  };
  
  export default PokemonDetails;
  