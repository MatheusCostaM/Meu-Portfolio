import React from 'react';
import styled from "styled-components";

const Menu = styled.div`

display: flex;
flex-direction: ${({ $posicao }) => (($posicao == "horizontal") ? "row" : "column")};
justify-content: space-around;
width: auto;
height: auto;
`

export default ({ children, $posicao }) => {


    return (
        <Menu $posicao={$posicao}>
            {children}
        </Menu>
    );
}