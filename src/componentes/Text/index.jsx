import React from 'react';
import styled from "styled-components";

const Text = styled.h2`

font-size: ${({ $tamanhoText }) => $tamanhoText}rem;
color: ${({ $tipoText, theme }) =>
        $tipoText === "titulo2" ? theme.corPrincipal : theme.txt};
margin: 1vh;

`

export default ({ children, tipoText }) => {

    const getTamanhoText = (tipoText) => {
        switch (tipoText) {
            case "titulo1":
                return 3;

            case "titulo2":
                return 2;

            case "titulo3":
                return 1;

            case "titulo4":
                return 0.5;

            default:
                return 1.5;

        }
    }


    const tamanhoText = getTamanhoText(tipoText);

    return (
        <Text $tamanhoText={tamanhoText} $tipoText={tipoText}>
            {children}
        </Text>
    )
}