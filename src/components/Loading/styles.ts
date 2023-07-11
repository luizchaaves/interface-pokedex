import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;

  & svg {
    animation: spin 3s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg) scale(1);
    }
    50% {
      transform: rotate(180deg) scale(1.3);
    }
    100% {
      transform: rotate(360deg) scale(1);
    }
  }
`;
