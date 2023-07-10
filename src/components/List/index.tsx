import React from 'react';
import { Container } from './styles';
import Card from '../Card';
import SkeletonCard from '../SkeletonCard';

const List = () => {
  return (
    <Container>
      <SkeletonCard />
      <Card />
      <Card />
    </Container>
  );
};

export default List;
