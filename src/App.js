import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark as ColorTheme } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

// Chamada de componentes
import Card from "./components/Card";
import { CardForm } from "./styles";

function App() {
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

  const copyText = () => {
    //Cria um elemento input (pode ser um textarea)
    let inputTest = document.createElement("input");
    inputTest.value = result;
    //Anexa o elemento ao body
    document.body.appendChild(inputTest);
    //seleciona todo o texto do elemento
    inputTest.select();
    //executa o comando copy
    //aqui é feito o ato de copiar para a area de trabalho com base na seleção
    document.execCommand("copy");
    //remove o elemento
    document.body.removeChild(inputTest);

    return toast(" ✔ Copiado com sucesso !");
  };

  const onChange = (value, callBack) => {
    if (/^[\d|.]+$/g.test(value) || value === "") {
      callBack(value);
    }
  };

  return (
    <div className="App">
      <ToastContainer />
      <CardForm className="cardForm">
        <div className="row">
          <input
            className="inputPreviewerBorderRadius"
            placeholder="Top-Left"
            value={topLeft}
            onChange={(e) => onChange(e.target.value, setTopLeft)}
          />
          <input
            className="inputPreviewerBorderRadius"
            placeholder="Top-Right"
            value={topRight}
            onChange={(e) => onChange(e.target.value, setTopRight)}
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
              {result}
            </SyntaxHighlighter>
          </Card>
        </div>

        <div className="row">
          <input
            className="inputPreviewerBorderRadius"
            placeholder="Bot-Left"
            value={bottomLeft}
            onChange={(e) => onChange(e.target.value, setBottomLeft)}
          />
          <button className="button" onClick={copyText}>
            Copiar
          </button>
          <input
            className="inputPreviewerBorderRadius"
            placeholder="Bot-Right"
            value={bottomRight}
            onChange={(e) => onChange(e.target.value, setBottomRight)}
          />
        </div>
      </CardForm>
    </div>
  );
}

export default App;
