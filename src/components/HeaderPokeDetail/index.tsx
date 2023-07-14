import BackButton from '../BackButton';
import { Container } from './styles';

interface Props {
  pokemonName: string;
}

const HeaderPokeDetail = ({ pokemonName }: Props) => {
  return (
    <Container>
      <BackButton />
      {pokemonName}
    </Container>
  );
};

export default HeaderPokeDetail;
