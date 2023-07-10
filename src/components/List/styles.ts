import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  gap: 1rem;
  padding: 1rem;

  @media (max-width: 1096px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 884px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 664px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
