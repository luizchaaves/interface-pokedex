import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: fit-content;

  &:hover svg {
    transition: 0.3s;
    transform: scale(1.05);
  }
`;
