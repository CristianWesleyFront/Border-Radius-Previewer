import React from "react";

import { Content } from "./styles";

function Card(props) {
  return <Content {...props}>{props.children}</Content>;
}

export default Card;
