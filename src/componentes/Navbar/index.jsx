import React from 'react';
import styled from "styled-components";
import Vidro from '../Vidro'
import Menu from '../Menu'
import Text from '../Text';
import Tema from '../Tema';
import Lingua from '../Lingua';
import Pdf from '/curriculo.pdf';

const Navbar = styled.div`

display: flex;
justify-content: space-between;
width:100vw;
height: 10vh;
position: fixed;
z-index: 2;

`

export default ({ TrocaTema, abrir }) => {

    const abrirPdf = () => {
        abrir({ nome: "PDF", pdf: Pdf });
    }

    return (

        <Navbar>
            <Vidro>
                <Tema TrocaTema={TrocaTema} />
                <Menu $posicao="horizontal">
                    <Text>CONTATO</Text>
                    <Text>SOBRE</Text>
                    <Text evento={abrirPdf}>CURRICULO</Text>
                </Menu>
                <Lingua />
            </Vidro>
        </Navbar>
    );
}