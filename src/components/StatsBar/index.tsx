import { Background, Progress } from './styles';

interface Props {
  background: string;
  value: number;
}

const StatsBar = ({ value, background }: Props) => {
  const width = value > 100 ? 100 : value;

  return (
    <Background>
      <Progress background={background} width={width} />
    </Background>
  );
};

export default StatsBar;
