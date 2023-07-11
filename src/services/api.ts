import axios from 'axios';
import { IPokemon, IPokemonList } from '../interfaces/interface';

const baseURL = 'https://pokeapi.co/api/v2/';

const api = axios.create({ baseURL });

export const getPokemonsList = async (
  limit: number,
  offset: number
): Promise<IPokemonList> => {
  const response = await api.get<IPokemonList>(
    `pokemon?limit=${limit}&offset=${offset}`
  );
  return response.data;
};

export const getPokemon = async (name: string): Promise<IPokemon> => {
  const response = await api.get<IPokemon>(`pokemon/${name}`);
  return response.data;
};

export const getPokemonByUrl = async (
  pokemonUrl: string
): Promise<IPokemon> => {
  const response = await axios.get(pokemonUrl);
  return response.data;
};
