import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ContainerText = styled.div`
  display: inline-flex;
  width: 100%;
  align-items: flex-start;

  > div {
    display: flex;
    align-items: center;
    gap: 16px;
    width: inherit;
  }

  span {
    color: ${(props) => props.theme.color.black};
    font-weight: 500;
  }
`;

export const Text = styled.p`
  min-width: 80px;
  width: 80px;
  color: ${(props) => props.theme.color.medium};
  text-transform: capitalize;
`;
