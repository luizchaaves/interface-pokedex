import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.color.white};
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 32px 8px 16px;
`;
