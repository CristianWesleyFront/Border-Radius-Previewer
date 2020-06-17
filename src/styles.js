import styled from "styled-components";

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

  .row {
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    input.inputPreviewerBorderRadius {
      width: 120px;
    }
  }
`;
