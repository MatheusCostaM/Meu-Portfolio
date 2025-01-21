import React from 'react';
import styled from "styled-components";

const Text = styled.h2`

font-size: ${({ tamanhoText }) => tamanhoText}rem;
color: ${({ theme }) => theme.txt};

`

export default ({ children, tipoText }) => {

    const getTamanhoText = (tipoText) => {
        switch (tipoText) {
            case "titulo1":
                console.log(5);
                return 3;

            case "titulo2":
                console.log(3);
                return 2;

            case "titulo3":
                console.log(2);
                return 1;

            default:
                console.log("switch quebrado");
                return 1.5;

        }
    }


    const tamanhoText = getTamanhoText(tipoText);

    return (
        <Text tamanhoText={tamanhoText}>
            {children}
        </Text>
    )
}