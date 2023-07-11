import { useNavigate } from 'react-router-dom';

import theme from '../../styles/theme';
import Pokeball from '../Pokeball';
import { Container, Text } from './styles';

const Logo = () => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate('/')}>
      <Pokeball size={24} color={theme.color.dark} />
      <Text>Pokédex</Text>
    </Container>
  );
};

export default Logo;
