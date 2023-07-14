import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-top: 1rem;
`;

export const Button = styled.button`
  background: ${(props) => props.theme.color.dark};
  color: ${(props) => props.theme.color.white};
  padding: 1rem;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transition-duration: 0.3s;
    transform: scale(1.1);
  }

  &:disabled {
    cursor: no-drop;
    background: ${(props) => props.theme.color.medium};
  }

  &:disabled:hover {
    transform: scale(1);
  }
`;
