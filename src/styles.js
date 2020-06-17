import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardForm = styled.div`
  min-width: 600px;
  min-height: 400px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .card {
    width: 100%;
    height: 100%;
    padding-right: 120px;
    padding-left: 120px;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
