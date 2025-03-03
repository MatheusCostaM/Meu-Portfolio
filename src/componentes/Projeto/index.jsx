import React from 'react';
import styled from "styled-components";
import Interagible from '../Interagible';
import Text from '../Text';
import Vidro from '../Vidro';
import { Projetos } from '../Dados';
import Tag from '../Tag';
import MoveSimple from '../MoveSimple';

const Projeto = styled.div`

display: flex;
justify-content: space-around;
align-items: center;
width: 70vw;
margin: 4vw 0 4vw; 
min-height: 25%;

@media (max-width: 600px) {
    width: 90vw;
}


div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 0;
}

Section{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 1000px) {
        flex-wrap: wrap;
    }
    
}

img{
    max-width: 300px;
    @media (max-width: 600px) {
        max-width: 350px;
    }
}
`;

export default ({ nome, abrir, id, translate }) => {

    let titulo = "";
    let imagem = "";
    let descricao = "";
    let link = "";
    let git = "";
    let tecnologias = [];

    for (let i = 0; i < Projetos.length; i++) {

        if (Projetos[i].nome === nome) {
            titulo = Projetos[i].nome;
            imagem = Projetos[i].image;
            descricao = Projetos[i].descricao;
            link = Projetos[i].site;
            git = Projetos[i].git;
            tecnologias = Projetos[i].tecnologias;

            break;
        }

    }

    return (

        <Projeto>
            <Vidro $bordaCurva={"25px"}>
                <section id={id}>
                    <div>
                        <Text tipoText="titulo2">{translate(titulo)}</Text>
                        <a target="_blank" href={link}><Interagible><img src={imagem} /></Interagible></a>
                        <section>
                            <MoveSimple><a target="_blank" href={link}><Interagible><Tag tipo="Link" /></Interagible></a></MoveSimple>
                            <MoveSimple><a target="_blank" href={git}><Interagible><Tag tipo="Github" /></Interagible></a></MoveSimple>
                        </section>
                    </div>

                    <div>
                        <Text tipoText="titulo3">{translate(descricao)}</Text>
                        <Text tipoText="titulo3">{translate("Tecnologias utilizadas nesse projeto.")}</Text>
                        <section>
                            {tecnologias.map((tecno, index) => (
                                <Tag key={index} tipo={tecno} abrir={abrir} />
                            )


                            )}
                        </section>
                    </div>
                </section>
            </Vidro >
        </Projeto>
    )
}