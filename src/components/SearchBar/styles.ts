import styled from 'styled-components';

export const Bar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  border: none;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 10px -5px inset;
  padding: 0.5rem 1rem;

  @media (max-width: 500px) {
    & {
      flex-grow: 1;
    }
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Input = styled.input`
  font-size: 12px;
  font-weight: 400;
  border: none;
  background: transparent;
  width: 100%;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
