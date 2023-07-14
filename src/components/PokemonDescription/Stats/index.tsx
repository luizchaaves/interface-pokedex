import { IStats } from '../../../interfaces/interface';
import StatsBar from '../../StatsBar';
import { Container, ContainerText, Text } from './styles';

interface Props {
  stats: IStats[];
  background: string;
}

const PokemonStats = ({ stats, background }: Props) => {
  return (
    <Container>
      {stats.map((stat) => (
        <ContainerText key={stat.stat.name}>
          <Text>{stat.stat.name}:</Text>
          <div>
            <span>{stat.base_stat}</span>
            <StatsBar value={stat.base_stat} background={background} />
          </div>
        </ContainerText>
      ))}
    </Container>
  );
};

export default PokemonStats;
