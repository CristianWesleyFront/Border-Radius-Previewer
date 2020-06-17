import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark as ColorTheme } from "react-syntax-highlighter/dist/esm/styles/hljs";

import "./App.css";

// Chamada de componentes
import Card from "./components/Card";
import { CardForm } from "./styles";

function App() {
  const [topRight, setTopRight] = useState("");
  const [topLeft, setTopLeft] = useState("");
  const [bottomRight, setBottomRight] = useState("");
  const [bottomLeft, setBottomLeft] = useState("");

  return (
    <div className="App">
      <CardForm className="cardForm">
        <div className="row">
          <input
            className="inputPreviewerBorderRadius"
            placeholder="Top-Left"
            value={topLeft}
            onChange={(e) => setTopLeft(e.target.value)}
          />
          <input
            className="inputPreviewerBorderRadius"
            placeholder="Top-Right"
            value={topRight}
            onChange={(e) => setTopRight(e.target.value)}
          />
        </div>
        <div className="card">
          <Card
            bottomRight={bottomRight}
            bottomLeft={bottomLeft}
            topRight={topRight}
            topLeft={topLeft}
          >
            <SyntaxHighlighter language="css" style={ColorTheme}>
              {`{
  border-top-left-radius: ${topLeft}px;
  border-top-right-radius: ${topRight}px;
  border-bottom-right-radius: ${bottomRight}px;
  border-bottom-left-radius: ${bottomLeft}px;
}`}
            </SyntaxHighlighter>
          </Card>
        </div>

        <div className="row">
          <input
            className="inputPreviewerBorderRadius"
            placeholder="Bot-Left"
            value={bottomLeft}
            onChange={(e) => setBottomLeft(e.target.value)}
          />
          <input
            className="inputPreviewerBorderRadius"
            placeholder="Bot-Right"
            value={bottomRight}
            onChange={(e) => setBottomRight(e.target.value)}
          />
        </div>
      </CardForm>
    </div>
  );
}

export default App;
