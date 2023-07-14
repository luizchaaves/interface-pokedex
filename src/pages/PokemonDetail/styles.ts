import styled from 'styled-components';

interface StyledProps {
  background: string;
}

export const Container = styled.div<StyledProps>`
  background: ${({ background }) => background};
  height: 100%;
`;

export const Content = styled.div`
  height: calc(100% - 74px);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
  position: relative;

  svg {
    position: absolute;
    top: 0px;
    transform: rotate(-20deg);
  }
`;
