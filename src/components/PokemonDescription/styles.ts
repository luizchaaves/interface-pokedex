import styled from 'styled-components';

export const Box = styled.div`
  position: relative;
  height: 65%;
  background: #fff;
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px 16px 0px 0px;
  padding: 40px 40px 16px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 10px 3px;

  img {
    top: -180px;
    position: absolute;
    filter: drop-shadow(5px 10px 5px rgba(0, 0, 0, 0.8));
  }

  @media (max-width: 650px) {
    padding: 40px 20px 16px;
  }

  @media (max-width: 360px) {
    padding: 40px 4px 16px;
  }
`;

export const Container = styled.div`
  overflow-y: auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0px 16px;
`;
