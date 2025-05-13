import { useState } from 'react';
import Navbar from '../componentes/Navbar';
import { GlobalStyle } from '../componentes/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { temaClaro, temaEscuro } from '../componentes/UI/temas';
import Background from '../componentes/Background';
import Tela from '../componentes/Tela';
import Text from '../componentes/Text';
import ImageSlider from '../componentes/ImageSlider';
import styled from 'styled-components';
import Interagible from '../componentes/Interagible';

import { useTranslation } from 'react-i18next';
import "../i18n/i18n";


const Conteudo = styled.div`
  width: 100vw;
  height: 93vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 5vh;
`;

const ConteudoText = styled.div`
  width: 70vw;
  height: 93vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 5vh;
`;

const Main = styled.div`
width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 5vh;
`;


const ERPProject = () => {
    const { t, i18n } = useTranslation();

    const [tema, setTema] = useState(temaClaro);

    const [tela, setTela] = useState({});

    const [menuLat, setMenuLat] = useState(false);

    const [lngAtual, setLngAtual] = useState("pt");

    const trocaLingua = (lng) => {
        i18n.changeLanguage(lng);
        setLngAtual(lng);
    }

    const abrir = (conteudo) => {

        setTela(conteudo);

    };

    const TrocaTema = (text) => {
        if (text === "Modo Claro" || text === "Light Mode") {
            setTema(temaClaro);
        } else {
            setTema(temaEscuro);
        }
    }

    const scroll = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "center" });
    };

    const abrirMenu = () => {
        menuLat ? setMenuLat(false) : setMenuLat(true);
    }

    return (
        <>
            <ThemeProvider theme={tema}>
                <GlobalStyle />
                <Background />
                <main>

                    <Tela conteudo={tela} translate={t} />
                    <Navbar TrocaTema={TrocaTema} abrir={abrir} scroll={scroll} trocaLingua={trocaLingua} menuLat={menuLat} abrirMenu={abrirMenu} lngAtual={lngAtual} translate={t} />

                    <Main>
                        <Conteudo>
                            <Interagible><a href="/"><Text tipoText="titulo2">Voltar para Home</Text></a></Interagible>
                            <Text>Projeto ERP</Text>
                            <ImageSlider />
                        </Conteudo>

                        <ConteudoText>
                            <Text tipoText="titulo2">Projeto para Plataforma de Orçamentos</Text>
                            <Text tipoText="titulo3">Este projeto consisti no desenvolvimento completo de um sistema voltado para gestão interna e facilitação de processos de uma empresa.
                                O backend do sistema foi desenvolvido utilizando Node.js, com a estruturação em Express.js para gerenciamento de rotas e middlewares. Optei por essa stack devido à sua leveza, flexibilidade e ampla adoção no mercado, o que facilita futuras integrações e manutenções.
                                A arquitetura do backend foi planejada seguindo os princípios de separação de responsabilidades (MVC - Model, View, Controller), o que facilita a escalabilidade e manutenibilidade do sistema. O projeto foi dividido nas seguintes camadas:
                            </Text>
                            <Text tipoText="titulo2">Autenticação e Segurança</Text>
                            <Text tipoText="titulo3">Implementei autenticação utilizando JSON Web Tokens (JWT), o que garante sessões seguras e stateless. Além disso, foram aplicadas práticas de segurança como:
                                Criptografia de senhas com bcrypt.
                                Validações de entrada para evitar injeção de código (SQL/NoSQL Injection).
                                Middleware para proteger rotas privadas e validar tokens.
                            </Text>
                            <Text tipoText="titulo2">Funcionalidades Principais</Text>
                            <Text tipoText="titulo3">Cadastro e login de usuários.</Text>
                            <Text tipoText="titulo3">Criação e edição de orçamentos.</Text>
                            <Text tipoText="titulo2">Conclusão</Text>
                            <Text tipoText="titulo3">Este projeto me permitiu aplicar na prática os conhecimentos de desenvolvimento moderno, com foco em boas práticas de código, segurança, escalabilidade e organização de API RESTful. A experiência foi fundamental para reforçar meu domínio em Node.js e toda a stack JavaScript do lado do servidor.</Text>

                        </ConteudoText>

                    </Main>
                </main>
            </ThemeProvider>
        </>

    );
};

export default ERPProject;

