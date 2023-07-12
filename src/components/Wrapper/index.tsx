import { ContainerWrapper } from './styles';

interface Props {
  children: React.ReactNode;
}

const Wrapper = ({ children }: Props) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Wrapper;
