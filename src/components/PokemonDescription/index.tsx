import { IPokemon } from '../../interfaces/interface';
import PokemonPhoto from '../PokemonPhoto';
import { Box, Container, Content } from './styles';
import TypeBadge from '../TypeBadge';
import ContentDescription from '../ContentDescription';
import PokemonAbout from './About';
import PokemonStats from './Stats';
import { background } from '../../interfaces/backgroundByType';

interface Props {
  pokemon: IPokemon;
}

const PokemonDescription = ({ pokemon }: Props) => {
  /*@ts-ignore */
  const backgroundSelected = background[pokemon.types[0]?.type?.name];

  return (
    <Box>
      <PokemonPhoto
        pokemonName={pokemon.name}
        src={
          pokemon.sprites.other.dream_world.front_default ||
          pokemon.sprites.front_default
        }
        size={'200px'}
      />
      <Container>
        <Content>
          <TypeBadge types={pokemon.types} />
          <ContentDescription title="About">
            <PokemonAbout height={pokemon.height} weight={pokemon.weight} />
          </ContentDescription>
          <ContentDescription title="Stats">
            <PokemonStats
              stats={pokemon.stats}
              background={backgroundSelected}
            />
          </ContentDescription>
        </Content>
      </Container>
    </Box>
  );
};

export default PokemonDescription;
