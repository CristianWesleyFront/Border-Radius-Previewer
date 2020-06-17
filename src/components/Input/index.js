import React from "react";

import { InputStyled } from "./styles";

function Input(props) {
  const { value, setFunction, placeholder } = props;

  const onChange = (value, callBack) => {
    if (/^[\d|.]+$/g.test(value) || value === "") {
      callBack(value);
    }
  };

  return (
    <InputStyled
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value, setFunction)}
    />
  );
}

export default Input;
