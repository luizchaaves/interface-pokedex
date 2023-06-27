import styled from 'styled-components';

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
`;

export const Text = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${(props) => props.theme.color.dark};
`;
