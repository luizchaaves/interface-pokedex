import React from 'react';
import { Container } from './styles';
import Pokeball from '../Pokeball';
import theme from '../../styles/theme';

const Loading = () => {
  return (
    <Container>
      <Pokeball size={100} color={theme.color.white} />
    </Container>
  );
};

export default Loading;
