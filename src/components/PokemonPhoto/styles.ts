import styled from 'styled-components';

interface StyledProps {
  size: string;
}

export const Image = styled.img<StyledProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  object-fit: contain;
`;
