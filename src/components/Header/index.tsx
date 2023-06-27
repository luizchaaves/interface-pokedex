import { Container, Filters } from './styles';
import Logo from '../Logo';
import SearchBar from '../SearchBar';
import Filter from '../Filter';

const Header = () => {
  return (
    <Container>
      <Logo />
      <Filters>
        <SearchBar />
        <Filter />
      </Filters>
    </Container>
  );
};

export default Header;
