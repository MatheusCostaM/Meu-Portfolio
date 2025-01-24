import React from 'react';
import styled from "styled-components";
import Container from '../Container';
import Text from '../Text';
import Tag from '../Tag';
import foto from '../../assets/img/foto.svg';
import Neon from '../Neon';
import Projeto from '../Projeto';
import MoveSimple from '../MoveSimple';

const Dashboard = styled.div`

width:82vw;
height: auto;
z-index: 1;

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

`;

export default ({ abrir }) => {

    return (
        <Dashboard>
            <Container>
                <div>
                    <section>
                        <Neon><Separador /></Neon>
                        <Text tipoText="titulo1">MATHEUS COSTA</Text>
                        <Text tipoText="titulo2">Desenvolvedor Full-Stack</Text>
                        <Text tipoText="titulo3">Transforme seu projeto em realidade com soluções <br /> Full Stack de qualidade.</Text>
                        <Neon><Separador /></Neon>
                        <Text>Tecnologias que domino.</Text>
                        <div>
                            <Tag abrir={abrir} tipo="JavaScript" />
                            <Tag abrir={abrir} tipo="Node" />
                            <Tag abrir={abrir} tipo="React" />
                            <Tag abrir={abrir} tipo="Python" />
                            <Tag abrir={abrir} tipo="Php" />
                            <Tag abrir={abrir} tipo="MySql" />
                            <Tag abrir={abrir} tipo="Bootstrap" />
                            <Tag abrir={abrir} tipo="Css" />
                            <Tag abrir={abrir} tipo="Html" />
                        </div>
                    </section>
                    <section>
                        <Foto src={foto} />
                        <Text tipoText="titulo3">Clique nos Links</Text>
                        <div>
                            <MoveSimple><a target="_blank" href="www.linkedin.com/in/matheus-costa-magalhães-de-almeida-40714921a"><Tag tipo="Linkedin" /></a></MoveSimple>
                            <MoveSimple><a target="_blank" href="https://github.com/MatheusCostaM"><Tag tipo="Github" /></a></MoveSimple>
                        </div>
                    </section>

                </div>
            </Container>

            <Container>
                <Projeto nome="Site de Finanças" abrir={abrir}></Projeto>
                <Projeto nome="Portifólio" abrir={abrir}></Projeto>
            </Container>
            <Container>
                <Text>Entre em Contato e Vamos Trabalhar Juntos</Text>
                <div>
                    <MoveSimple>
                        <Tag tipo="Whatsapp" />
                        <Tag tipo="Email" />
                    </MoveSimple>
                </div>

            </Container>
        </Dashboard>
    )

}