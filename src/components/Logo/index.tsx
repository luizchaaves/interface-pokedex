import usePagination from '../../hooks/usePagination';

import theme from '../../styles/theme';
import Pokeball from '../Pokeball';

import { Container, Text } from './styles';

const Logo = () => {
  const { backToHome } = usePagination();

  return (
    <Container onClick={() => backToHome()}>
      <Pokeball size={24} color={theme.color.dark} />
      <Text>Pokédex</Text>
    </Container>
  );
};

export default Logo;
