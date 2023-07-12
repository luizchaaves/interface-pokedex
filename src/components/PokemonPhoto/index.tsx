import { Image } from './styles';

interface Props {
  pokemonName: string;
  src: string;
  size: string;
}

const PokemonPhoto = ({ pokemonName, src, size }: Props) => {
  return <Image src={src} alt={pokemonName} size={size} />;
};

export default PokemonPhoto;
