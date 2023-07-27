import { useState, useRef, useEffect } from 'react';
import { BsFilterLeft } from 'react-icons/bs';

import { Circle, Container, ContainerFilter, Option } from './styles';
import { getTypesPokemons } from '../../services/api';
import { IFetch } from '../../interfaces/interface';
import { background } from '../../interfaces/backgroundByType';

const Filter = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState<boolean>();
  const [types, setTypes] = useState<IFetch[]>();

  const getTypes = async () => {
    const types = await getTypesPokemons();
    setTypes(types.results);
  };

  const handleToggleFilter = () => {
    setShowMenu(!showMenu);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node))
      setShowMenu(false);
  };

  useEffect(() => {
    getTypes();
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  return (
    <Container ref={menuRef}>
      <Circle onClick={handleToggleFilter}>
        <BsFilterLeft />
      </Circle>
      <ContainerFilter className={showMenu ? 'show' : ''}>
        <Option
          /*@ts-ignore */
          borderColor={'#e6e6e6'}
        >
          All
        </Option>
        {types?.map((type) => (
          <Option
            key={type.name}
            /*@ts-ignore */
            borderColor={background[type.name]}
          >
            {type.name}
          </Option>
        ))}
      </ContainerFilter>
    </Container>
  );
};

export default Filter;
