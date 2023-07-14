import { background } from '../../interfaces/backgroundByType';
import { ITypes } from '../../interfaces/interface';
import { Container, Pill } from './styles';

interface Props {
  types: ITypes[];
}

const TypeBadge = ({ types }: Props) => {
  return (
    <Container>
      {types.map((type) => (
        /*@ts-ignore */
        <Pill key={type.type.name} background={background[type.type.name]}>
          {type.type.name}
        </Pill>
      ))}
    </Container>
  );
};

export default TypeBadge;
