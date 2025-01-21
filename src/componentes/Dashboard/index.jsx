import React from 'react';
import styled from "styled-components";
import Container from '../Container';
import Text from '../Text';

const Dashboard = styled.div`

width:82vw;
height: auto;

`

export default () => {

    return (
        <Dashboard>
            <Container>
                <Text tipoText="titulo1">MATHEUS COSTA</Text>
                <Text tipoText="titulo2">Desenvolvedor Full-Stack</Text>
                <Text tipoText="titulo3">Transforme seu projeto em realidade com soluções <br /> Full Stack de qualidade.</Text>
                <Text>Tecnologias que domino.</Text>
            </Container>
            <Container><Text>sdafasdf</Text></Container>
            <Container><Text>sdafasdf</Text></Container>
        </Dashboard>
    );

}