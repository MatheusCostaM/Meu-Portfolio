import { useState, useEffect } from 'react';
import styled from "styled-components";
import Vidro from '../Vidro'
import Menu from '../Menu'
import Text from '../Text';
import Tema from '../Tema';
import Lingua from '../Lingua';
import Pdf from '/curriculo.pdf';
import PdfEng from '/curriculoEng.pdf';
import menu from '../../assets/img/menu.svg';

const Navbar = styled.div`

display: flex;
justify-content: space-between;
width:100vw;
height: 10vh;
position: fixed;
z-index: 2;
text-align: center;

section {
    display: none;
    width: 4vh;
    height: 4vh;
    position:absolute;
    top: 150%;
    left: 5%;

    img{
        width: 100%;
        height: 100%;
    }
    
}

@media (max-width: 1000px) {
    section{
        display: ${({ $menuLat }) => ($menuLat ? "none" : "flex")};
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
  }

`

export default ({ TrocaTema, abrir, trocaLingua, translate, abrirMenu, menuLat, lngAtual }) => {

    const [PDF, setPDF] = useState(Pdf);

    const abrirPdf = () => {
        abrir({ nome: "PDF", pdf: PDF });
    }

    useEffect(() => {
        if (lngAtual === "pt") {
            setPDF(Pdf);
        } else {
            setPDF(PdfEng);
        }

    }, [translate]);

    return (

        <Navbar $menuLat={menuLat}>
            <Vidro $blur={3}>
                <section onClick={abrirMenu}>
                    <Vidro>
                        <img src={menu} />
                    </Vidro>

                </section>
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