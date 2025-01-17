import { useState } from 'react';
import styled from "styled-components";
import Interagible from '../Interagible';

const InteragibleButton = styled.div`

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

    /* Escala inicial e transição */
    & > * {
        transition: box-shadow 0.3s ease-in-out;
        border-radius: 20px;
    }

    /* Aumento da escala no hover */
    & > *:hover { 
        box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.5);
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
        <InteragibleButton
            isPressed={isPressed}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <Interagible>
                {children}
            </Interagible>
        </InteragibleButton>
    );
};
