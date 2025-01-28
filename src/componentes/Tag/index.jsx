import React from 'react';
import styled from "styled-components";
import Interagible from '../Interagible';
import Vidro from '../Vidro';
import { Tags } from '../Dados';


const Tag = styled.div`

height: 8vh;
width: 8vh;
margin: 0 1vh 0;
object-fit: contain;
border-radius: 20%;

@media (max-width: 600px) {
    height: 6vh;
    width: 6vh;
    margin: 0;
}

img {
    border-radius: 20%;
    height:100%;
    width: 100%;
}

`;

export default ({ tipo, abrir }) => {

    const qualTipo = (tipo) => {

        for (let i = 0; i < Tags.length; i++) {
            if (Tags[i].nome === tipo) {
                return { nome: Tags[i].nome, image: Tags[i].image, descricao: Tags[i].descricao, nivel: Tags[i].nivel };
            }
        }

    }

    let conteudoTag = qualTipo(tipo);

    const isAbrir = () => {
        abrir(conteudoTag);
    }


    return (
        <Interagible>

            <Tag onClick={isAbrir}>

                <Vidro $bordaCurva="20%">

                    <img src={conteudoTag.image} />
                </Vidro>


            </Tag>

        </Interagible>

    )
}