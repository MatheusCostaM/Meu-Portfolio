import React from 'react';
import styled from "styled-components";
import Interagible from '../Interagible';
import Vidro from '../Vidro';
import JavaScript from '../../assets/img/js.svg';
import Bootstrap from '../../assets/img/bootstrap.svg';
import Css from '../../assets/img/css.svg';
import Html from '../../assets/img/html.svg';
import MySql from '../../assets/img/mysql.svg';
import Node from '../../assets/img/node.svg';
import Php from '../../assets/img/php.svg';
import Python from '../../assets/img/py.svg';
import ReactJS from '../../assets/img/react.svg';
import Linkedin from '../../assets/img/linkedin.svg';
import Github from '../../assets/img/github.svg';

const Tag = styled.div`

height: 8vh;
width: 8vh;
object-fit: contain;
border-radius: 20%;

*{
    height: 100%;
    width: 100%;
}

img {
    border-radius: 20%;
}
`;

export default ({ tipo }) => {

    const qualTipo = (tipo) => {

        switch (tipo) {
            case "JavaScript":
                return JavaScript;
            case "Bootstrap":
                return Bootstrap;
            case "Css":
                return Css;
            case "Html":
                return Html;
            case "MySql":
                return MySql;
            case "Node":
                return Node;
            case "Php":
                return Php;
            case "Python":
                return Python;
            case "React":
                return ReactJS;
            case "Linkedin":
                return Linkedin;
            case "Github":
                return Github;
        }
    }

    let svg = qualTipo(tipo);


    return (
        <Tag>
            <Interagible>
                <Vidro $bordaCurva="20%">
                    <img src={svg} />
                </Vidro>
            </Interagible>

        </Tag>
    )
}