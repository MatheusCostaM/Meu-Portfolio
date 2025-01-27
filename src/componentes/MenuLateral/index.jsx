import React from 'react';
import styled from "styled-components";
import Vidro from '../Vidro';
import Menu from '../Menu';
import Text from '../Text';

const MenuLateral = styled.div`

display: flex;
justify-content: space-between;
width: 14vw;
height: 30vh;
position: fixed;
top: 50%;
  left: 2%;
  transform: translateY(-50%);
  z-index: 2;

`

export default ({ scroll, translate }) => {

    return (
        <MenuLateral>
            <Vidro $bordaCurva="20px" $blur={3}>
                <Menu $posicao="vertical">
                    <Text tipoText="titulo3" evento={() => scroll("apresentacao")}>{translate("APRESENTAÇÃO")}</Text>
                    <Text tipoText="titulo3" evento={() => scroll("projetos")}>{translate("PROJETOS")}</Text>
                    <Text tipoText="titulo3" evento={() => scroll("contato")}>{translate("CONTATO")}</Text>
                    <Text tipoText="titulo3" evento={() => scroll("sobre")}>{translate("SOBRE")}</Text>
                </Menu>
            </Vidro>
        </MenuLateral >

    );
}
