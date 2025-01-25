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

export default ({ scroll }) => {

    return (
        <MenuLateral>
            <Vidro $bordaCurva="20px" $blur={3}>
                <Menu $posicao="vertical">
                    <Text evento={() => scroll("apresentacao", "center")}>Apresentação</Text>
                    <Text evento={() => scroll("projetos", "start")}>Projetos</Text>
                    <Text evento={() => scroll("contato", "center")}>Contato</Text>
                </Menu>
            </Vidro>
        </MenuLateral >

    );
}
