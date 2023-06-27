import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Filters = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 500px) {
    & {
      flex-grow: 1;
    }
  }
`;
