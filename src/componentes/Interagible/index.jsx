import React from 'react';
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
        transition: transform 0.3s ease-in-out, text-shadow 0.3s ease-in-out;
    
    }

    /* Aumento da escala no hover */
    & > *:hover {
        transform: scale(0.8); 
        text-shadow: 0px 0px 15px rgba(255, 255, 255, 0.5);
    }

    
`;

export default ({ children }) => {


    return (
        <Interagible>
            <div>
                {children}
            </div>
        </Interagible>
    );
};
