import styled from 'styled-components';

export const Container = styled.div`
  width: 200px;
  height: 180px;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.color.white};
  overflow: hidden;
  position: relative;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 10px 3px;

  @media (max-width: 450px) {
    & {
      width: 100%;
    }
  }
`;

export const ContainerId = styled.div`
  padding: 8px;
  width: 100%;
  height: 34px;
  display: flex;
  justify-content: flex-end;
`;

export const ContainerName = styled.div`
  width: 100%;
  height: 73px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  overflow: hidden;
`;

export const ContainerPhoto = styled.div`
  width: 96px;
  height: 96px;
  position: absolute;
  top: 40px;
  border-radius: 8px;
`;
