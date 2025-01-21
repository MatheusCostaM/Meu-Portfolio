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
  justify-content: end;
  
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
            <Move velocidade="7">
                <Neon><Circulo /></Neon>
            </Move>
            <Move velocidade="4">
                <Neon><Circulo /></Neon>
            </Move>
            <Move velocidade="2">
                <Neon><Circulo /></Neon>
            </Move>
            <Move velocidade="2">
                <Neon><Quadrado /></Neon>
            </Move>
            <Move velocidade="2">
                <Neon><Quadrado /></Neon>
            </Move>
            <Move velocidade="7">
                <Neon><Quadrado /></Neon>
            </Move>
            <Move velocidade="7">
                <Neon><Circulo /></Neon>
            </Move>
            <Move velocidade="4">
                <Neon><Circulo /></Neon>
            </Move>
            <Move velocidade="4">
                <Neon><Quadrado /></Neon>
            </Move>
            {children}
        </Background>
    );
};

