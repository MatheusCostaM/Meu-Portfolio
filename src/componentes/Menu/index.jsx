import React from 'react';
import styled from "styled-components";

const Menu = styled.div`

display: flex;
flex-direction: ${({ Posicao }) => ((Posicao == "horizontal") ? "row" : "column")};
justify-content: space-around;
width: auto;
height: auto;
`

export default ({ children, Posicao }) => {


    return (
        <Menu Posicao={Posicao}>
            {children}
        </Menu>
    );
}