import styled from "styled-components";

export const ButtonStyled = styled.button`
  cursor: pointer;
  width: 50px;
  height: 40px;
  background: #5f7064;
  border: 0;
  color: #fff;
  border-radius: 8px;
  font-weight: 400;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  line-height: 40px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(90%);
  }
`;
