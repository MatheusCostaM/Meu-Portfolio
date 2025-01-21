import React from 'react';
import styled from "styled-components";
import Vidro from '../Vidro'
import Menu from '../Menu'
import Interagible from '../Interagible'
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


`

export default () => {
    return (
        <MenuLateral>
            <Vidro $bordaCurva="20px">
                <Menu $posicao="vertical">
                    <Interagible>
                        <Text>Apresentação</Text>
                    </Interagible>
                    <Interagible>
                        <Text>Projetos</Text>
                    </Interagible>
                    <Interagible>
                        <Text>Contato</Text>
                    </Interagible>
                </Menu>
            </Vidro>
        </MenuLateral>

    );
}