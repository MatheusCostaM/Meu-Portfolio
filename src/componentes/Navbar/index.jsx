import React from 'react';
import styled from "styled-components";
import Vidro from '../Vidro'
import Menu from '../Menu'
import Interagible from '../Interagible'
import Text2 from '../Text2';
import Tema from '../Tema';
import Lingua from '../Lingua';

const Navbar = styled.div`

display: flex;
justify-content: space-between;
width:100vw;
height: 10vh;
position: fixed;

`

export default () => {
    return (

        <Navbar>
            <Vidro>
                <Tema />
                <Menu Posicao="horizontal">
                    <Interagible>
                        <Text2>CONTATO</Text2>
                    </Interagible>
                    <Interagible>
                        <Text2>SOBRE</Text2>
                    </Interagible>
                    <Interagible>
                        <Text2>CURRICULO</Text2>
                    </Interagible>
                </Menu>
                <Lingua />
            </Vidro>
        </Navbar>
    );
}