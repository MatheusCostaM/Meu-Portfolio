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
import Java from '../../assets/img/java.svg';
import PostgresSQL from '../../assets/img/PostgreSQL.svg';
import Nest from '../../assets/img/Nest.svg';

export const Tags = [
    { nome: "JavaScript", image: JavaScript, descricao: "Linguagem de programação essencial para criar interatividade e dinamismo em páginas web. Permite desenvolver funcionalidades avançadas, como animações, validação de formulários e integração com APIs.", nivel: 3 },
    { nome: "Java", image: Java, descricao: "Java é uma linguagem de programação versátil e amplamente utilizada no desenvolvimento de aplicações robustas e escaláveis. É ideal para sistemas corporativos, aplicações móveis (como Android) e soluções de servidores. Conhecida pela sua portabilidade e segurança, é uma escolha popular no mercado de tecnologia.", nivel: 2 },
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
    { nome: "PostgresSQL", image: PostgresSQL, descricao: "PostgreSQL é um banco de dados relacional de código aberto, conhecido pela robustez e flexibilidade. Ele suporta transações ACID, consultas complexas e é altamente escalável, sendo ideal para empresas de todos os tamanhos.", nivel: 2 },
    { nome: "Nest", image: Nest, descricao: "NestJS é um framework para backend em Node.js, construído com TypeScript. Ele usa Express (ou Fastify) como servidor HTTP e é ideal para criar aplicações escaláveis e de alto desempenho. Com uma arquitetura inspirada no Angular, facilita o desenvolvimento de APIs RESTful, GraphQL e microsserviços.", nivel: 2 }
];


import financasImg from "../../assets/img/finance.svg";
import portifolioImg from "../../assets/img/portifolio.svg";
import erpImg from "../../assets/img/erp.png";


export const Projetos = [
    {
        nome: "ERP empresa de logística",
        descricao: "Atualmente, estou desenvolvendo um projeto freelance no meu tempo livre: uma plataforma ERP voltada para uma empresa de logística. O sistema está sendo construído com uma arquitetura de microsserviços, o que garante modularidade, alta escalabilidade e facilidade de manutenção. ",
        site: "/ERPProject",
        image: erpImg,
        git: "",
        tecnologias: ["JavaScript", "Node", "React", "MySql"],
    },
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
        tecnologias: ["React", "JavaScript", "Css", "Html"],
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

export const Tecnologias = [
    "Java", "JavaScript", "Node", "MySql", "PostgresSQL", "Nest", "React",
]

