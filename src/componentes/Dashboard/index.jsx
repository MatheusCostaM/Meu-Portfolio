import React from 'react';
import styled from "styled-components";
import Container from '../Container';
import Text from '../Text';
import Tag from '../Tag';
import foto from '../../assets/img/foto.svg';
import Neon from '../Neon';
import Projeto from '../Projeto';
import MoveSimple from '../MoveSimple';
import Vidro from '../Vidro';
import { Projetos, Formacoes, Tecnologias } from '../Dados';

const Dashboard = styled.div`

width:82vw;
height: auto;
z-index: 1;

div{
    flex-wrap: wrap;
}

section{
    margin: 2vh 0 0;
}

@media (max-width: 600px) {
    width:100vw;

  }

@keyframes appear {
    from{
        opacity: 0;
        transform: translateY(600px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }



`



const Foto = styled.img`

margin-left: 2vw;
margin-right: 2vw;
box-shadow: 0px 0px 5px 3px #00cad1;
border-radius: 25%;

`

const Separador = styled.div`

height: 0.3vh;
width: 30vw;
background-color: white;
margin: 1vh;


@media (max-width: 600px) {
    width: 70vw;
}
`;

const Formacao = styled.div`


width: 70%;
margin: 2vw;

img{
    max-width: 250px;
    margin: 2vw;
}

div{
    justify-content: space-around !important;
}

@media (max-width: 600px) {
    width: 80vw;

    margin: 4vh 0 4vh;

    img{
        max-width: 200px;
        margin:0;
    }
}


`;

const CaixaText = styled.div`

margin: 2vw;
width:70%;

`

const Animador = styled.div`

width: 100%;

animation: appear linear;
        animation-timeline: view();
        animation-range: entry 0% cover 40%;

`

export default ({ abrir, translate }) => {

    return (
        <Dashboard>
            <Animador>
                <Container id="apresentacao">
                    <div>
                        <section>
                            <Neon><Separador /></Neon>
                            <Text tipoText="titulo1">MATHEUS COSTA</Text>
                            <Text tipoText="titulo2">{translate("Desenvolvedor Full-Stack")}</Text>
                            <Text tipoText="titulo3">{translate("Transforme seu projeto em realidade com soluções")}<br /> Full Stack de qualidade.</Text>
                            <Neon><Separador /></Neon>
                            <Text>{translate("Minhas Principais tecnologias.")}</Text>
                            <div>
                                {Tecnologias.map((tec, index) => (
                                    <Tag key={index} abrir={abrir} tipo={tec} />
                                ))}
                            </div>
                        </section>
                        <section>
                            <Foto src={foto} />
                            <Text tipoText="titulo3">{translate("Clique nos Links")}</Text>
                            <div>
                                <MoveSimple><a target="_blank" href="https://linkedin.com/in/matheus-costa-magalhães-de-almeida-40714921a"><Tag tipo="Linkedin" /></a></MoveSimple>
                                <MoveSimple><a target="_blank" href="https://github.com/MatheusCostaM"><Tag tipo="Github" /></a></MoveSimple>
                            </div>
                        </section>

                    </div>
                </Container>
            </Animador>

            <Container>
                {Projetos.map((projeto, index) => {
                    if (index === 0) {
                        return (
                            <Animador key={index}>
                                <Projeto nome={projeto.nome} abrir={abrir} id="projetos" translate={translate} />
                            </Animador>
                        );
                    } else {
                        return (
                            <Animador key={index}>
                                <Projeto nome={projeto.nome} abrir={abrir} translate={translate} />
                            </Animador>
                        );
                    }
                })}

            </Container>
            <Animador>
                <Container id="contato">
                    <Text>{translate("Entre em Contato e Vamos Trabalhar Juntos")}</Text>
                    <div>
                        <MoveSimple>
                            <a target="_blank" href="https://api.whatsapp.com/send?phone=5511947047934"><Tag tipo="Whatsapp" /></a>
                            <a target="_blank" href="mailto:matheuscosta_ma@outlook.com?"><Tag tipo="Email" /></a>
                        </MoveSimple>
                    </div>

                </Container>
            </Animador>
            <Container >
                <Animador>
                    <section>
                        <Text tipoText="titulo2">{translate("SOBRE MIM")}</Text>
                        <div id="sobre"></div>
                        <CaixaText>
                            <Text tipoText="titulo3">{translate("Atualmente atuo na área administrativa de uma escola da Prefeitura de São Bernardo do Campo. Estou em transição de carreira para a área de tecnologia, um campo pelo qual tenho grande interesse. Além do conhecimento adquirido na faculdade e em cursos especializados, estudo de forma autodidata.")}
                            </Text>
                        </CaixaText>
                        <Text>{translate("Formação Acadêmica")}</Text>
                    </section>
                </Animador>

                {Formacoes.map((formacoes, index) => (
                    <Animador key={index}>
                        <Formacao>
                            <Vidro $bordaCurva={"20px"}>
                                <img src={formacoes.imagem} />
                                <section>
                                    <Text tipoText="titulo3">{formacoes.unidade}</Text>
                                    <Text tipoText="titulo3">{translate(formacoes.tipo)} - {translate(formacoes.curso)}</Text>
                                    <Text tipoText="titulo3">{translate("Data de início: ")}{formacoes.dataIni}</Text>
                                    <Text tipoText="titulo3">{translate("Data de conclusão: ")}{formacoes.dataFim}</Text>
                                </section>
                            </Vidro>

                        </Formacao >
                    </Animador>
                ))}

            </Container>
            <Container />
        </Dashboard >
    )

}