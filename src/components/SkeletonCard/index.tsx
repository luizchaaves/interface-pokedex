import {
  Container,
  ContainerId,
  ContainerName,
  ContainerPhoto,
} from './styles';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonCard = () => {
  return (
    <Container>
      <ContainerId>
        <Skeleton duration={1} height={`100%`} width={50} />
      </ContainerId>
      <ContainerPhoto>
        <Skeleton duration={1} height={`100%`} width={`100%`} />
      </ContainerPhoto>
      <ContainerName>
        <Skeleton duration={1} height={`100%`} width={`100%`} />
      </ContainerName>
    </Container>
  );
};

export default SkeletonCard;
