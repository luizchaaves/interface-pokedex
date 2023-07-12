import { useQuery } from 'react-query';

import { getPokemonsList } from '../../services/api';
import usePagination from '../../hooks/usePagination';

import Header from '../../components/Header';
import List from '../../components/List';
import Loading from '../../components/Loading';
import Pagination from '../../components/Pagination';
import Wrapper from '../../components/Wrapper';

import { Content } from './styles';

const Pokedex = () => {
  const { page, nextPage, previousPage } = usePagination();

  let limitPokemonsList = 15;
  let offsetPokemonsList = limitPokemonsList * (page - 1);

  const { data, isLoading } = useQuery(
    ['PokemonsList', page],
    () => getPokemonsList(limitPokemonsList, offsetPokemonsList),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      staleTime: Infinity,
    }
  );

  return (
    <Wrapper>
      <Header />
      {isLoading && <Loading />}
      {data && !isLoading && (
        <Content>
          <List pokemonsList={data.results} />
          <Pagination
            page={page}
            nextPage={nextPage}
            previousPage={previousPage}
            itemsPerPage={limitPokemonsList}
            maxItems={data.count}
          />
        </Content>
      )}
    </Wrapper>
  );
};

export default Pokedex;
