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

export default ({ TrocaTema, abrir, trocaLingua, translate }) => {

    const abrirPdf = () => {
        abrir({ nome: "PDF", pdf: Pdf });
    }

    return (

        <Navbar>
            <Vidro $blur={3}>
                <Tema TrocaTema={TrocaTema} translate={translate} />
                <Menu $posicao="horizontal">
                    <></>
                    <Text evento={abrirPdf}>{translate("CURRICULO")}</Text>
                </Menu>
                <Lingua trocaLingua={trocaLingua} />
            </Vidro>
        </Navbar>
    );
}