import { useQuery } from 'react-query';
import { getPokemon } from '../../services/api';

import { background } from '../../interfaces/backgroundByType';
import { Container, WaterMark } from './styles';

import PokemonId from './PokemonId';
import PokemonName from './PokemonName';
import PokemonPhoto from './PokemonPhoto';
import Pokeball from '../Pokeball';
import SkeletonCard from '../SkeletonCard';

interface Props {
  pokemonName: string;
}

const Card = ({ pokemonName }: Props) => {
  const { data, isLoading } = useQuery(
    ['Pokemon', pokemonName],
    () => getPokemon(pokemonName),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      staleTime: Infinity,
    }
  );

  /*@ts-ignore */
  const backgroundSelected = background[data?.types[0]?.type?.name];

  return (
    <>
      {isLoading && <SkeletonCard />}
      {data && !isLoading && (
        <Container background={backgroundSelected}>
          <WaterMark>
            <Pokeball size={64} color="rgba(255,255,255, 0.2)" />
          </WaterMark>
          <PokemonId id={data.id} />
          <PokemonPhoto
            pokemonName={data.name}
            src={
              data?.sprites?.other?.dream_world?.front_default ||
              data?.sprites?.front_default
            }
          />
          <PokemonName name={data.name} />
        </Container>
      )}
    </>
  );
};

export default Card;
