import { useState } from 'react';
import styled from "styled-components";
import Text from '../Text';
import Interagible from '../Interagible';
import moon from '../../assets/img/moon.svg';
import sun from '../../assets/img/sun.svg';

const Tema = styled.div`

display: flex;
align-items: center;
justify-content: center;
width: auto;
height: 100%;
margin: 1vw;
width: 30vw;

* {
    margin: 1vw;
}

img {
    max-height: 80%;
    max-width: 15%;
}

`

export default ({ TrocaTema }) => {

    const [tema, setTema] = useState({ img: sun, text: "Modo Claro" });

    function isTrocaTema() {
        if (tema.img === sun) {
            setTema({ img: moon, text: "Modo Escuro" });
        } else {
            setTema({ img: sun, text: "Modo Claro" });
        }
        TrocaTema(tema.text);
    }

    return (
        <Interagible>
            <Tema onClick={isTrocaTema}>
                <img src={tema.img} alt="" />
                <Text>{tema.text}</Text>
            </Tema>
        </Interagible>
    );
}