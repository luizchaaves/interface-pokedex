import styled from 'styled-components';

interface StyledProps {
  borderColor: string;
}

export const Container = styled.div`
  position: relative;
  display: inline-block;
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 10px -5px inset;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
`;

export const ContainerFilter = styled.div`
  position: absolute;
  right: 0;
  max-width: 200px;
  margin-top: 10px;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.color.white};
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 10px -5px inset;
  font-size: 12px;

  max-height: 0px;
  overflow-y: auto;
  opacity: 0;
  transition: opacity 300ms, max-height 300ms;
  pointer-events: none;
  z-index: 100;

  &.show {
    opacity: 1;
    max-height: 250px;
    pointer-events: auto;
  }
`;

export const Option = styled.div<StyledProps>`
  text-transform: capitalize;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  border-left: 5px solid ${({ borderColor }) => borderColor};

  &:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.color.light};
  }

  &:hover {
    transition: 0.3s;
    transform: scale(1.05);
  }
`;
