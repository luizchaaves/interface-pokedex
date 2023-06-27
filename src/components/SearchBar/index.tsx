import { useRef } from 'react';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { Bar, Icon, Input } from './styles';

const SearchBar = () => {
  const searchBar = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    if (searchBar.current) searchBar.current.focus();
  };

  return (
    <Bar>
      <Icon onClick={handleIconClick}>
        <HiOutlineMagnifyingGlass />
      </Icon>
      <Input placeholder="Pesquisar..." ref={searchBar} />
    </Bar>
  );
};

export default SearchBar;
