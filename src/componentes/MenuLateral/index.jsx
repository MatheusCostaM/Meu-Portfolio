import React from 'react';
import styled from "styled-components";
import Vidro from '../Vidro'
import Menu from '../Menu'
import Interagible from '../Interagible'
import Text2 from '../Text2';

const MenuLateral = styled.div`

display: flex;
justify-content: space-between;
width: 15vw;
height: 30vh;
position: fixed;
top: 50%;
  left: 2%;
  transform: translateY(-50%);


`

export default () => {
    return (
        <MenuLateral>
            <Vidro BordaCurva="20px">
                <Menu Posicao="vertical">
                    <Interagible>
                        <Text2>Apresentação</Text2>
                    </Interagible>
                    <Interagible>
                        <Text2>Projetos</Text2>
                    </Interagible>
                    <Interagible>
                        <Text2>Contato</Text2>
                    </Interagible>
                </Menu>
            </Vidro>
        </MenuLateral>

    );
}