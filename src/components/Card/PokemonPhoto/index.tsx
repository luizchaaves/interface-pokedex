import { Container, Image } from './styles';

interface Props {
  pokemonName: string;
  src: string;
}

const PokemonPhoto = ({ pokemonName, src }: Props) => {
  return (
    <Container>
      <Image src={src} alt={pokemonName} />
    </Container>
  );
};

export default PokemonPhoto;
