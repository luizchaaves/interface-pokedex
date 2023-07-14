import styled from 'styled-components';

interface StyledProps {
  background: string;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  padding: 8px;
`;

export const Pill = styled.div<StyledProps>`
  padding: 8px 16px;
  border-radius: 16px;
  background: ${({ background }) => background};
  width: fit-content;
  font-size: 12px;
  color: ${(props) => props.theme.color.white};
  font-weight: 500;
  text-transform: capitalize;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 5px 0px;
  overflow: hidden;
`;
