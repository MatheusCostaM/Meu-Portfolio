import React from 'react';
import styled from "styled-components";
import Text2 from '../Text2';
import Interagible from '../Interagible'

const Lingua = styled.div`

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
            <Lingua>
                <Text2>Pt</Text2>
                <Text2>Portugues</Text2>
            </Lingua>
        </Interagible>
    );
}