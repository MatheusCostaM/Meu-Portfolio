import React from 'react';
import styled from "styled-components";

const Vidro = styled.div`

    /* Centraliza os children */
    display: flex;
    justify-content: space-around;

    /* Estilo de espelho */
    background-color: white;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0px 0px 5px 1px rgba(0, 255, 255, 0.5);
    
    border: 1px solid rgba(0, 255, 255, 0.18);

    /* Tamanho da div */
    width: 100%;
    height: 100%;
    border-radius: ${({ $bordaCurva }) => $bordaCurva || '0px'};
`;

export default ({ children, $bordaCurva }) => {
    return (
        <Vidro $bordaCurva={$bordaCurva}>
            {children}
        </Vidro>
    );
};



