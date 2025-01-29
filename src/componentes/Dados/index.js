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
import Link from '../../assets/img/link.svg';
import Email from '../../assets/img/email.svg';
import Whatsapp from '../../assets/img/whatsapp.svg';

export const Tags = [
    { nome: "JavaScript", image: JavaScript, descricao: "Linguagem de programação essencial para criar interatividade e dinamismo em páginas web. Permite desenvolver funcionalidades avançadas, como animações, validação de formulários e integração com APIs.", nivel: 3 },
    { nome: "Bootstrap", image: Bootstrap, descricao: "Framework front-end que facilita o desenvolvimento de sites responsivos e otimizados para dispositivos móveis, oferecendo componentes pré-estilizados e prontos para uso.", nivel: 1 },
    { nome: "Css", image: Css, descricao: "Linguagem de estilo utilizada para definir a aparência e o layout de páginas web, como cores, fontes, margens e responsividade. Essencial para criar designs atrativos e personalizados.", nivel: 3 },
    { nome: "Html", image: Html, descricao: "Linguagem de marcação padrão para estruturar páginas web, definindo elementos como cabeçalhos, parágrafos, links e imagens. É a base de qualquer site.", nivel: 3 },
    { nome: "MySql", image: MySql, descricao: "Sistema de gerenciamento de banco de dados relacional popular e open-source, utilizado para armazenar e gerenciar dados de forma eficiente em aplicações web e outros sistemas.", nivel: 2 },
    { nome: "Node", image: Node, descricao: "Ambiente de execução para JavaScript no lado do servidor, permitindo a criação de aplicações escaláveis, como APIs e servidores web, com alta performance.", nivel: 2 },
    { nome: "Php", image: Php, descricao: "Linguagem de programação amplamente usada no desenvolvimento web, especialmente para criar aplicações dinâmicas e servidores backend.", nivel: 1 },
    { nome: "Python", image: Python, descricao: "Linguagem de programação versátil, reconhecida por sua simplicidade e aplicabilidade em áreas como desenvolvimento web, ciência de dados, automação e inteligência artificial.", nivel: 2 },
    { nome: "React", image: ReactJS, descricao: "Biblioteca JavaScript voltada para a construção de interfaces de usuário interativas e dinâmicas, utilizada amplamente no desenvolvimento de aplicações front-end modernas.", nivel: 2 },
    { nome: "Linkedin", image: Linkedin },
    { nome: "Github", image: Github },
    { nome: "Link", image: Link },
    { nome: "Whatsapp", image: Whatsapp },
    { nome: "Email", image: Email },
    { nome: "Site de Finanças", image: financasImg },
    { nome: "Portifólio", image: portifolioImg },
];


import financasImg from "../../assets/img/finance.svg";
import portifolioImg from "../../assets/img/portifolio.svg";


export const Projetos = [
    {
        nome: "Site de Finanças",
        descricao: "Desenvolvi um site de controle financeiro pessoal onde os usuários registram gastos, investimentos e renda, facilitando o planejamento e a organização das finanças.",
        site: "http://financemylife.byethost13.com/",
        image: financasImg,
        git: "https://github.com/MatheusCostaM/FinanceMyLife",
        tecnologias: ["JavaScript", "Css", "Html", "Php", "MySql"],
    },

    {
        nome: "Portifólio",
        descricao: "Desenvolvi um site portfólio para apresentar minhas experiências, projetos e habilidades nas tecnologias que domino.",
        site: "http://localhost:5173/",
        image: portifolioImg,
        git: "https://github.com/MatheusCostaM/MeuCV",
        tecnologias: ["React", "Node", "Bootstrap", "JavaScript", "Css", "Html"],
    },
];

import fatec from "../../assets/img/fatec.svg";
import alura from "../../assets/img/alura.svg";
import senai from "../../assets/img/senai.svg";
import senac from "../../assets/img/senac.svg";

export const Formacoes = [
    {
        curso: "Informática para Negócios",
        tipo: "Tecnólogo",
        imagem: fatec,
        unidade: "FATEC SBC",
        dataIni: "07/2022",
        dataFim: "06/2025",
    },
    {
        curso: "Python - Formação completa",
        tipo: "Curso",
        imagem: alura,
        unidade: "Alura",
        dataIni: "Indefinido",
        dataFim: "Indefinido",
    },
    {
        curso: "PHP",
        tipo: "Curso",
        imagem: alura,
        unidade: "Alura",
        dataIni: "Indefinido",
        dataFim: "Indefinido",
    },
    {
        curso: "JavaScript",
        tipo: "Curso",
        imagem: alura,
        unidade: "Alura",
        dataIni: "Indefinido",
        dataFim: "Indefinido",
    },
    {
        curso: "Web Designer - Frontend",
        tipo: "Curso",
        imagem: senai,
        unidade: "SENAI - Almirante Tamandaré",
        dataIni: "2022",
        dataFim: "2022",
    },
    {
        curso: "Lógica de Programação",
        tipo: "Curso",
        imagem: senac,
        unidade: "SENAC SBC",
        dataIni: "2020",
        dataFim: "2020",
    }
];

