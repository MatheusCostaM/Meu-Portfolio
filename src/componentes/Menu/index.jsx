import { useState } from 'react';
import styled from "styled-components";
import Interagible from '../Interagible';



const Menu = styled.div`

display: flex;
flex-direction: ${({ $posicao }) => (($posicao == "horizontal") ? "row" : "column")};
justify-content: space-around;
align-items: center;

width: auto;
height: auto;

`
const Item = styled.a`
  h2 {
    color: ${({ $isAtual, theme }) => ($isAtual ? theme.corPrincipal : theme.text)};
    transition: color 0.3s ease;
  }
`;

const ItemMenu = ({ children, onClick, isAtual }) => {
    return (
        <Item onClick={onClick} $isAtual={isAtual}><Interagible>{children}</Interagible></Item>
    );
}

export default ({ children, $posicao }) => {

    const [atualItem, setAtualItem] = useState(null);

    const trocaAtual = (index) => {
        setAtualItem(index);
    };

    return (
        <Menu $posicao={$posicao}>
            {children.map((item, index) => (
                <ItemMenu
                    key={index}
                    isAtual={atualItem === index}
                    onClick={() => {
                        trocaAtual(index)
                        if (item.props.evento) {
                            item.props.evento();
                        }
                    }}
                >
                    {item}
                </ItemMenu>
            ))
            }
        </Menu >
    );
}
