import React from 'react';
import styled from "styled-components";

const Neon = styled.div`

    div {
        border-radius: 2px;
        background-color: rgb(209, 255, 240);
        box-shadow: 0px 0px 5px 3px #00cad1;
    }

    h2 {
        color: rgb(209, 255, 240);
        text-shadow: 0px 0px 5px 3px #00cad1;
    }
`

export default ({ children }) => {
    return (
        <Neon>
            {children}
        </Neon>
    )
}