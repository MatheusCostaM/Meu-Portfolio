import { useState } from 'react';
import styled from "styled-components";
import Text from '../Text';
import Interagible from '../Interagible';
import brazil from '../../assets/img/brazil.svg';
import usa from '../../assets/img/usa.svg';

const Lingua = styled.div`

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

export default ({ trocaLingua }) => {

    const [lingua, setTema] = useState({ img: brazil, text: "Português" });

    function isTrocaLingua() {
        if (lingua.img === brazil) {
            setTema({ img: usa, text: "English" });
            trocaLingua('en');
        } else {
            setTema({ img: brazil, text: "Português" });
            trocaLingua('pt');
        }
    }



    return (
        <Interagible>
            <Lingua onClick={isTrocaLingua}>
                <img src={lingua.img} alt="" />
                <Text>{lingua.text}</Text>
            </Lingua>
        </Interagible>
    );
}