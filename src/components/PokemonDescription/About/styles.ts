import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ContainerText = styled.div`
  display: inline-flex;

  span {
    color: ${(props) => props.theme.color.black};
    font-weight: 500;
  }
`;

export const Text = styled.p`
  width: 80px;
  color: ${(props) => props.theme.color.medium};
`;
