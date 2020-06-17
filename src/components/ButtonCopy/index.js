import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ButtonStyled } from "./styles";

function ButtonCopy(props) {
  const { text } = props;

  const copyText = () => {
    //Cria um elemento input (pode ser um textarea)
    let inputTest = document.createElement("input");
    inputTest.value = text;
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

  return (
    <>
      <ButtonStyled onClick={copyText}>Copiar</ButtonStyled>
    </>
  );
}

export default ButtonCopy;
