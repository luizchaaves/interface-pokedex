import { Container, ContainerText, Text } from './styles';

interface Props {
  height: number;
  weight: number;
}

const PokemonAbout = ({ height, weight }: Props) => {
  const heightFinal = height * 10;
  const weightFinal = weight / 10;

  return (
    <Container>
      <ContainerText>
        <Text>Height:</Text>
        <span>{heightFinal} cm</span>
      </ContainerText>
      <ContainerText>
        <Text>Weight:</Text>
        <span>{weightFinal} kg</span>
      </ContainerText>
    </Container>
  );
};

export default PokemonAbout;
