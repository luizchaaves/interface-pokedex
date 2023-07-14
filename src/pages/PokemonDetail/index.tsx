import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getPokemon } from '../../services/api';
import { background } from '../../interfaces/backgroundByType';

import Loading from '../../components/Loading';
import Wrapper from '../../components/Wrapper';
import HeaderPokeDetail from '../../components/HeaderPokemonDetail';

import { Container, Content } from './styles';
import PokemonDescription from '../../components/PokemonDescription';
import Pokeball from '../../components/Pokeball';

const PokemonDetail = () => {
  const { name } = useParams();

  const { data, isLoading } = useQuery(
    ['Pokemon', name],
    () => getPokemon(name ? name : ''),
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
      {isLoading && <Loading />}
      <Container background={backgroundSelected}>
        <Wrapper>
          {data && (
            <>
              <HeaderPokeDetail pokemonName={data ? data.name : 'voltar'} />
              <Content>
                <Pokeball size={400} color="rgba(255,255,255, 0.1)" />
                <PokemonDescription pokemon={data} />
              </Content>
            </>
          )}
        </Wrapper>
      </Container>
    </>
  );
};

export default PokemonDetail;
