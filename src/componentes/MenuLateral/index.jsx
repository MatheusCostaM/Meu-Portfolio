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

export default () => {

    return (
        <MenuLateral>
            <Vidro $bordaCurva="20px">
                <Menu $posicao="vertical">
                    <Text>Apresentação</Text>
                    <Text>Projetos</Text>
                    <Text>Contato</Text>
                </Menu>
            </Vidro>
        </MenuLateral >

    );
}
