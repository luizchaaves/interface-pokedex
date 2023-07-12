import { useQuery } from 'react-query';
import { getPokemon } from '../../services/api';

import { background } from '../../interfaces/backgroundByType';
import { Container, ContainerImage, WaterMark } from './styles';

import PokemonId from './PokemonId';
import PokemonName from './PokemonName';
import PokemonPhoto from '../PokemonPhoto';
import Pokeball from '../Pokeball';
import SkeletonCard from '../SkeletonCard';

import { useNavigate } from 'react-router-dom';

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

  const cardOnClick = (pokemonName: string) => {
    navigate(`/pokemon/${pokemonName}`);
  };

  /*@ts-ignore */
  const backgroundSelected = background[data?.types[0]?.type?.name];

  const navigate = useNavigate();
  return (
    <>
      {isLoading && <SkeletonCard />}
      {data && !isLoading && (
        <Container
          background={backgroundSelected}
          onClick={() => cardOnClick(data.name)}
        >
          <WaterMark>
            <Pokeball size={64} color="rgba(255,255,255, 0.2)" />
          </WaterMark>
          <PokemonId id={data.id} />
          <ContainerImage>
            <PokemonPhoto
              pokemonName={data.name}
              src={
                data?.sprites?.other?.dream_world?.front_default ||
                data?.sprites?.front_default
              }
              size={'96px'}
            />
          </ContainerImage>
          <PokemonName name={data.name} />
        </Container>
      )}
    </>
  );
};

export default Card;
