import { useQuery } from 'react-query';

import { getPokemonsList } from '../../services/api';

import Header from '../../components/Header';
import List from '../../components/List';
import Loading from '../../components/Loading';
import Pagination from '../../components/Pagination';
import usePagination from '../../hooks/usePagination';

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
    <>
      <Header />
      {isLoading && <Loading />}
      {data && !isLoading && (
        <div style={{ paddingBottom: '2rem' }}>
          <List pokemonsList={data.results} />
          <Pagination
            page={page}
            nextPage={nextPage}
            previousPage={previousPage}
            itemsPerPage={limitPokemonsList}
            maxItems={data.count}
          />
        </div>
      )}
    </>
  );
};

export default Pokedex;
