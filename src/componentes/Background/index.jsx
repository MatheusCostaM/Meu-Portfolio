import React from 'react';
import styled from "styled-components";
import Move from "../Move";
import Neon from "../Neon";

const Background = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  position: fixed;
  object-fit: contain;
  
`;

const Quadrado = styled.div`
width: 100vh;
height: 100vh;
`;

const Circulo = styled.div`
width: 100vh;
height: 100vh;
border-radius: 50%;
`;




export default ({ children }) => {
    return (
        <Background>
            <Move velocidade="21">
                <Neon><Circulo /></Neon>
            </Move>
            <Move velocidade="12">
                <Neon><Circulo /></Neon>
            </Move>
            <Move velocidade="6">
                <Neon><Circulo /></Neon>
            </Move>
            <Move velocidade="6">
                <Neon><Quadrado /></Neon>
            </Move>
            <Move velocidade="12">
                <Neon><Quadrado /></Neon>
            </Move>
            <Move velocidade="21">
                <Neon><Quadrado /></Neon>
            </Move>
            <Move velocidade="21">
                <Neon><Circulo /></Neon>
            </Move>
            <Move velocidade="6">
                <Neon><Circulo /></Neon>
            </Move>
            <Move velocidade="12">
                <Neon><Quadrado /></Neon>
            </Move>
            {children}
        </Background>
    );
};

