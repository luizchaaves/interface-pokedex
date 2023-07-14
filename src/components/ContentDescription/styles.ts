import styled from 'styled-components';

export const Title = styled.div`
  margin-bottom: 16px;
  color: ${(props) => props.theme.color.black};
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  h3 {
    font-weight: 500;
    font-size: 22px;
    line-height: 200%;
  }
`;
