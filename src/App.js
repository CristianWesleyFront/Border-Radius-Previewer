import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";

// Chamada de componentes
import Card from "./components/Card";
import Code from "./components/Code";
import Input from "./components/Input";
import Button from "./components/ButtonCopy";
import { CardForm, Row, Content } from "./styles";

function App() {
  // State
  const [topRight, setTopRight] = useState(0);
  const [topLeft, setTopLeft] = useState(0);
  const [bottomRight, setBottomRight] = useState(0);
  const [bottomLeft, setBottomLeft] = useState(0);

  const result = `{
    border-top-left-radius: ${topLeft}px;
    border-top-right-radius: ${topRight}px;
    border-top-left-radius: ${bottomRight}px;
    border-bottom-left-radius: ${bottomLeft}px;
}`;

  const inputs = [
    {
      placeholder: "Top-Left",
      value: topLeft,
      setFunction: setTopLeft,
    },
    {
      placeholder: "Top-Right",
      value: topRight,
      setFunction: setTopRight,
    },
    {
      placeholder: "Bot-Left",
      value: bottomLeft,
      setFunction: setBottomLeft,
    },
    {
      placeholder: "Bot-Right",
      value: bottomRight,
      setFunction: setBottomRight,
    },
  ];

  return (
    <Content>
      <ToastContainer />
      <CardForm className="cardForm">
        <Row>
          <Input {...inputs[0]} />
          <Input {...inputs[1]} />
        </Row>
        <div className="card">
          <Card
            bottomRight={bottomRight}
            bottomLeft={bottomLeft}
            topRight={topRight}
            topLeft={topLeft}
          >
            <Code text={result} />
          </Card>
        </div>
        <Row>
          <Input {...inputs[2]} />
          <Button text={result} />
          <Input {...inputs[3]} />
        </Row>
      </CardForm>
    </Content>
  );
}

export default App;
