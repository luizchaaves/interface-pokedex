import theme from '../../styles/theme';
import Pokeball from '../Pokeball';
import { Container, Text } from './styles';

const Logo = () => {
  return (
    <Container>
      <Pokeball size={24} color={theme.color.dark} />
      <Text>Pokédex</Text>
    </Container>
  );
};

export default Logo;
