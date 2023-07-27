import { Container } from './styles';
import Logo from '../Logo';
// import {Filters} from './styles'
// import SearchBar from '../SearchBar';
// import Filter from '../Filter';

const Header = () => {
  return (
    <Container>
      <Logo />
      {/* <Filters>
        <SearchBar />
        <Filter />
      </Filters> */}
    </Container>
  );
};

export default Header;
