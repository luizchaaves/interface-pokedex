import styled from 'styled-components';

interface ContainerProps {
  background: string;
}

export const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 180px;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${({ background }) => background};
  overflow: hidden;
  position: relative;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 10px 3px;

  &:hover {
    transition: 0.3s;
    transform: scale(1.02);
  }

  @media (max-width: 450px) {
    & {
      width: 100%;
    }
  }
`;

export const WaterMark = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  transform: rotate(-20deg);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerImage = styled.div`
  position: absolute;
  top: 40px;
  left: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
