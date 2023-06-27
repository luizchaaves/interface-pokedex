import { useState, useRef, useEffect } from 'react';
import { BsFilterLeft } from 'react-icons/bs';

import { Circle, Container, ContainerFilter, Option } from './styles';

const Filter = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState<boolean>();

  const handleToggleFilter = () => {
    setShowMenu(!showMenu);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node))
      setShowMenu(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  return (
    <Container ref={menuRef}>
      <Circle onClick={handleToggleFilter}>
        <BsFilterLeft />
      </Circle>
      <ContainerFilter className={showMenu ? 'show' : ''}>
        <Option>aaaaaaaaaaaaaaaa</Option>
        <Option>bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</Option>
        <Option>cccccccccccc</Option>
        <Option>dddddddddddddd</Option>
        <Option>eeeeeeeeeeeeeeeee</Option>
        <Option>ffffffffffffffff</Option>
        <Option>gggggggggggggg</Option>
        <Option>hhhhhhhhhhhhhhhh</Option>
        <Option>iiiiiiiiiiiiiiiiiii</Option>
        <Option>jjjjjjjjjjjjjjjj</Option>
      </ContainerFilter>
    </Container>
  );
};

export default Filter;
