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

export default ({ TrocaTema, abrir, scroll }) => {

    const abrirPdf = () => {
        abrir({ nome: "PDF", pdf: Pdf });
    }

    return (

        <Navbar>
            <Vidro $blur={3}>
                <Tema TrocaTema={TrocaTema} />
                <Menu $posicao="horizontal">
                    <Text evento={() => scroll("contato", "center")}>Contato</Text>
                    <Text evento={() => scroll("sobre", "center")}>Sobre</Text>
                    <Text evento={abrirPdf}>CURRICULO</Text>
                </Menu>
                <Lingua />
            </Vidro>
        </Navbar>
    );
}