import { Container, WaterMark } from './styles';
//@ts-ignore
import Photo from '../../001.png';
import PokemonId from './PokemonId';
import PokemonName from './PokemonName';
import PokemonPhoto from './PokemonPhoto';
import Pokeball from '../Pokeball';

const Card = () => {
  return (
    <Container>
      <WaterMark>
        <Pokeball size={64} color="rgba(255,255,255, 0.2)" />
      </WaterMark>
      <PokemonId id={10} />
      <PokemonPhoto pokemonName="Bulbassar" src={Photo} />
      <PokemonName name="Bulbassar" />
    </Container>
  );
};

export default Card;
