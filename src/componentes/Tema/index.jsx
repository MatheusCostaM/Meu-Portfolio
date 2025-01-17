import React from 'react';
import styled from "styled-components";
import Text2 from '../Text2';
import Interagible from '../Interagible'

const Tema = styled.div`

display: flex;
align-items: center;
justify-content: space-around;
width: auto;
height: 100%;
margin: 1vw;

`

export default () => {
    return (
        <Interagible>
            <Tema>
                <Text2>LUA</Text2>
                <Text2>Modo Noturno</Text2>
            </Tema>
        </Interagible>
    );
}