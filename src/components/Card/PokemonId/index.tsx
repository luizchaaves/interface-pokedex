import { Container } from './styles';

interface Props {
  id: number;
}

const PokemonId = ({ id }: Props) => {
  return (
    <Container>
      <span>#{id}</span>
    </Container>
  );
};

export default PokemonId;
