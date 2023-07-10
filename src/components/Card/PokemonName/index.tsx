import { Container } from './styles';

interface Props {
  name: string;
}

const PokemonName = ({ name }: Props) => {
  return <Container>{name}</Container>;
};

export default PokemonName;
