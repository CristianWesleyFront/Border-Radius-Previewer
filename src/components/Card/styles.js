import styled from "styled-components";

export const Content = styled.div`
  padding: 96px;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);

  width: 100%;
  height: 100%;

  border-bottom-right-radius: ${(props) => `${props.bottomRight}px`};
  border-bottom-left-radius: ${(props) => `${props.bottomLeft}px`};
  border-top-right-radius: ${(props) => `${props.topRight}px`};
  border-top-left-radius: ${(props) => `${props.topLeft}px`};

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  pre {
    border-radius: 8px;
  }
`;
