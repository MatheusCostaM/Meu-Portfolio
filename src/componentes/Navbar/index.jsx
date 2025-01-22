import React from 'react';
import styled from "styled-components";
import Vidro from '../Vidro'
import Menu from '../Menu'
import Interagible from '../Interagible'
import Text from '../Text';
import Tema from '../Tema';
import Lingua from '../Lingua';

const Navbar = styled.div`

display: flex;
justify-content: space-between;
width:100vw;
height: 10vh;
position: fixed;
z-index: 2;

`

export default ({ TrocaTema }) => {
    return (

        <Navbar>
            <Vidro>
                <Tema TrocaTema={TrocaTema} />
                <Menu $posicao="horizontal">
                    <Interagible>
                        <Text>CONTATO</Text>
                    </Interagible>
                    <Interagible>
                        <Text>SOBRE</Text>
                    </Interagible>
                    <Interagible>
                        <Text>CURRICULO</Text>
                    </Interagible>
                </Menu>
                <Lingua />
            </Vidro>
        </Navbar>
    );
}