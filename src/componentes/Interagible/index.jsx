import { useState } from 'react';
import styled from "styled-components";

const Interagible = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    cursor: pointer;

    /* Escala inicial e transição */
    & > * {
        transform: scale(0.7);
        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        border-radius: 20px;
    }

    /* Aumento da escala no hover */
    & > *:hover {
        transform: scale(0.8); 
        box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.5);
    }

    /* Película sobre a imagem (aparece ao clicar) */
    & > div::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        background-color: rgba(255, 255, 255, 0.1);
        transition: opacity 0.1s ease-in-out;
        opacity: ${({ isPressed }) => (isPressed ? 1 : 0)};
        pointer-events: none;
    }
`;

export default ({ children }) => {

    //cria constante para monitorar click
    const [isPressed, setIsPressed] = useState(false);

    //ao clickar a pelicula é abilitada
    const handleMouseDown = () => {
        setIsPressed(true);
    };

    //ao parar de clickar a pelicula é desabilitada
    const handleMouseUp = () => {
        setIsPressed(false);
    };

    return (
        <Interagible
            isPressed={isPressed}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <div>
                {children}
            </div>
        </Interagible>
    );
};
