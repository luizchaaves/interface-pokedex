import { Route, Routes } from 'react-router-dom';
import Pokedex from '../pages/Pokedex';
import PokemonDetail from '../pages/PokemonDetail';

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Pokedex />} />
      <Route path="/pokemon/:name" element={<PokemonDetail />} />
    </Routes>
  );
};

export default routes;
