import React from 'react';
import styled from "styled-components";
import Vidro from '../Vidro';
import Menu from '../Menu';
import Text from '../Text';
import menu from '../../assets/img/menu.svg';

const MenuLateral = styled.div`

display: flex;
justify-content: space-between;
width: ${({ $menuLat }) => ($menuLat ? "50vw" : "auto")};
height: ${({ $menuLat }) => ($menuLat ? "100vh" : "auto")};
position: fixed;
top: 50%;
  left: 2%;
  transform: translateY(-50%);
  z-index: 2;

  section {
    width: auto;
    height: 8vh;

    img{
        display: ${({ $menuLat }) => ($menuLat ? "flex" : "none")};
        width: 100%;
        height: 100%;
    }

    h2{
        display: ${({ $menuLat }) => ($menuLat ? "none" : "flex")};
    }
    
}

  @media (max-width: 1000px) {
    display: ${({ $menuLat }) => ($menuLat ? "flex" : "none")};

  }


`


export default ({ scroll, translate, menuLat, abrirMenu }) => {



    return (
        <MenuLateral $menuLat={menuLat}>
            <Vidro $bordaCurva={menuLat ? "" : "20px"} $blur={5}>
                <Menu $posicao="vertical">
                    <section>
                        <Text tipoText={menuLat ? "titulo2" : "titulo2"}>MENU</Text>
                        <img src={menu} onClick={abrirMenu} />
                    </section>
                    <Text tipoText={menuLat ? "titulo5" : "titulo3"} evento={() => scroll("apresentacao")}>{translate("APRESENTAÇÃO")}</Text>
                    <Text tipoText={menuLat ? "titulo5" : "titulo3"} evento={() => scroll("projetos")}>{translate("PROJETOS")}</Text>
                    <Text tipoText={menuLat ? "titulo5" : "titulo3"} evento={() => scroll("contato")}>{translate("CONTATO")}</Text>
                    <Text tipoText={menuLat ? "titulo5" : "titulo3"} evento={() => scroll("sobre")}>{translate("SOBRE")}</Text>
                </Menu>
            </Vidro>
        </MenuLateral >

    );
}
