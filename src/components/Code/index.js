import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark as ColorTheme } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Code(props) {
  const { text } = props;

  return (
    <SyntaxHighlighter language="css" style={ColorTheme}>
      {text}
    </SyntaxHighlighter>
  );
}

export default Code;
