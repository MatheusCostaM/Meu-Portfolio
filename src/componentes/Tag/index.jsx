import React from 'react';
import styled from "styled-components";
import Interagible from '../Interagible';
import Vidro from '../Vidro';
import Text from '../Text';
import { Tags } from '../Dados';


const Tag = styled.div`

height: 8vh;
width: 8vh;
object-fit: contain;
border-radius: 20%;

img {
    border-radius: 20%;
    height:100%;
    width: 100%;
}

`;

export default ({ tipo }) => {

    const qualTipo = (tipo) => {

        for (let i = 0; i < Tags.length; i++) {
            if (Tags[i].nome === tipo) {
                return { nome: Tags[i].nome, image: Tags[i].image };
            }
        }

    }

    let conteudoTag = qualTipo(tipo);


    return (
        <Interagible>

            <Tag>

                <Vidro $bordaCurva="20%">

                    <img src={conteudoTag.image} />
                </Vidro>


            </Tag>

        </Interagible>

    )
}