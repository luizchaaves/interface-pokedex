import { useNavigate } from 'react-router-dom';

import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Container } from './styles';
import theme from '../../styles/theme';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(-1)}>
      <AiOutlineArrowLeft size={26} color={theme.color.black} />
    </Container>
  );
};

export default BackButton;
