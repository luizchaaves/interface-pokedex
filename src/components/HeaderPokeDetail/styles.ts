import styled from 'styled-components';

export const Container = styled.header`
  text-transform: capitalize;
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
  color: ${(props) => props.theme.color.black};
  padding-bottom: 16px;
`;
