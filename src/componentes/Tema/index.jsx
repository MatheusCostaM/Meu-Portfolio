import { useState, useEffect } from 'react';
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
    max-width: 30%;
}

`

export default ({ TrocaTema, translate }) => {

    const [tema, setTema] = useState({ img: moon, text: translate("Modo Escuro") });

    function isTrocaTema() {
        if (tema.img === sun) {
            setTema({ img: moon, text: translate("Modo Escuro") });
        } else {
            setTema({ img: sun, text: translate("Modo Claro") });
        }
        TrocaTema(tema.text);
    }

    useEffect(() => {
        setTema({
            img: tema.img === sun ? sun : moon,
            text: translate(tema.img === sun ? "Modo Claro" : "Modo Escuro"),
        });
    }, [translate]);

    return (
        <Interagible>
            <Tema onClick={isTrocaTema}>
                <img src={tema.img} alt="" />
                <Text>{tema.text}</Text>
            </Tema>
        </Interagible>
    );
}