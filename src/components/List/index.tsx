import { IFetch } from '../../interfaces/interface';
import Card from '../Card';

import { Container } from './styles';

interface Props {
  pokemonsList: IFetch[] | null;
}

const List = ({ pokemonsList }: Props) => {
  return (
    <Container>
      {pokemonsList?.map((pokemon) => (
        <Card key={pokemon.name} pokemonName={pokemon.name} />
      ))}
    </Container>
  );
};

export default List;
