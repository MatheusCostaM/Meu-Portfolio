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
width: 80%;
margin: 2vw 0 2vw; 
height: 80vh;

div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

Section{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}
`;

export default ({ nome }) => {

    let titulo = "";
    let imagem = "";
    let descricao = "";
    let link = "";
    let git = "";

    for (let i = 0; i < Projetos.length; i++) {

        console.log(Projetos[i].nome);
        console.log(nome);

        if (Projetos[i].nome === nome) {
            titulo = Projetos[i].nome;
            imagem = Projetos[i].image;
            descricao = Projetos[i].descricao;
            link = Projetos[i].site;
            git = Projetos[i].git;
            console.log("foi", titulo);
            break;
        }

        console.log("projeto não encontrado");
    }

    return (

        <Projeto>
            <Vidro $bordaCurva={"25px"}>
                <section>
                    <div>
                        <Text tipo="titulo2">{titulo}</Text>
                        <a target="_blank" href={link}><Interagible><img src={imagem} /></Interagible></a>
                        <section>
                            <MoveSimple><a target="_blank" href={link}><Interagible><Tag tipo="Link" /></Interagible></a></MoveSimple>
                            <MoveSimple><a target="_blank" href={git}><Interagible><Tag tipo="Github" /></Interagible></a></MoveSimple>
                        </section>
                    </div>

                    <div>
                        <Text tipo="titulo3">{descricao}</Text>
                        <Text tipo="titulo3">Tecnologias utilizadas nesse projeto.</Text>
                        <section>
                            <Tag tipo="Php" />
                            <Tag tipo="MySql" />
                            <Tag tipo="Bootstrap" />
                            <Tag tipo="Css" />
                            <Tag tipo="Html" />
                        </section>
                    </div>
                </section>
            </Vidro >
        </Projeto>
    )
}