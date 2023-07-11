import { useQuery } from 'react-query';

import { getPokemonsList } from '../../services/api';

import Header from '../../components/Header';
import List from '../../components/List';
import Loading from '../../components/Loading';

const Pokedex = () => {
  let limitPokemonsList = 15;
  // let offsetPokemonsList = limitPokemonsList * (page - 1);
  let offsetPokemonsList = 0;

  const { data, isLoading } = useQuery(
    ['PokemonsList', 1],
    () => getPokemonsList(limitPokemonsList, offsetPokemonsList),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  return (
    <>
      <Header />
      {isLoading && <Loading />}
      {data && !isLoading && <List pokemonsList={data.results} />}
    </>
  );
};

export default Pokedex;
