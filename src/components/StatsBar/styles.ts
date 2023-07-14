import styled from 'styled-components';

interface StyledProps {
  background: string;
  width: number;
}

export const Background = styled.div`
  width: 100%;
  height: 12px;
  background-color: ${(props) => props.theme.color.light};
  border-radius: 16px;
`;

export const Progress = styled.div<StyledProps>`
  width: ${({ width }) => width}%;
  height: 12px;
  background-color: ${({ background }) => background};
  border-radius: 16px;
`;
