import { Route, Routes } from 'react-router-dom';
import Pokedex from '../pages/Pokedex';

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Pokedex />} />
    </Routes>
  );
};

export default routes;
