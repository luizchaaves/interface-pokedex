export interface IFetch {
  name: string;
  url: string;
}

// INTERFACE POKEMONS LIST

export interface IPokemonList {
  count: number;
  next: string;
  previous: any;
  results: IFetch[];
}

// INTERFACE POKEMONS NAME

export interface IPokemon {
  abilities: IAbility[];
  base_experience: number;
  forms: IFetch[];
  game_indices: IGameIndice[];
  height: number;
  held_items: IHeldItems[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: IMoves[];
  name: string;
  order: number;
  past_types: any[];
  species: IFetch;
  sprites: ISprites;
  stats: IStats[];
  types: ITypes[];
  weight: number;
}

export interface IAbility {
  ability: IFetch;
  is_hidden: boolean;
  slot: number;
}

export interface IGameIndice {
  game_index: number;
  version: IFetch;
}

export interface IHeldItems {
  item: IFetch;
  version_details: IVersionDetails[];
}

export interface IVersionDetails {
  rarity: number;
  version: IFetch;
}

export interface IMoves {
  move: IFetch;
  version_group_details: IVersionGroupDetails[];
}

export interface IVersionGroupDetails {
  level_learned_at: number;
  move_learn_method: IFetch;
  version_group: IFetch;
}

export interface ISprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: IOtherSprite;
  versions: any;
}

export interface IOtherSprite {
  dream_world: IDreamWorld;
  home: IHomeSprite;
  'official-artwork': IOfficialArtwork;
}

export interface IDreamWorld {
  front_default: string;
  front_female: any;
}

export interface IHomeSprite {
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

export interface IOfficialArtwork {
  front_default: string;
  front_shiny: string;
}

export interface IStats {
  base_stat: number;
  effort: number;
  stat: IFetch;
}

export interface ITypes {
  slot: number;
  type: IFetch;
}

// INTERFACE POKEMONS TYPE

export interface IPokemonsType {
  damage_relations: IDamageRelations;
  game_indices: IGameIndiceType[];
  generation: IFetch;
  id: number;
  move_damage_class: IFetch;
  moves: IFetch[];
  name: string;
  names: INames[];
  past_damage_relations: any[];
  pokemon: IPokemonType[];
}

export interface IDamageRelations {
  double_damage_from: IFetch[];
  double_damage_to: IFetch[];
  half_damage_from: IFetch[];
  half_damage_to: IFetch[];
  no_damage_from: any[];
  no_damage_to: IFetch[];
}

export interface IGameIndiceType {
  game_index: number;
  generation: IFetch;
}

export interface INames {
  language: IFetch;
  name: string;
}

export interface IPokemonType {
  pokemon: IFetch;
  slot: number;
}
