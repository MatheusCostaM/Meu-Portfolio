import { useState, useEffect } from 'react';
import styled from "styled-components";
import Vidro from "../Vidro";
import Text from "../Text";
import Interagible from '../Interagible';
import X from "../../assets/img/x.svg";

const Tela = styled.div`

display: ${({ $visivel }) => ($visivel ? "flex" : "none")};
height: 90vh;
width: 70vw;
z-index: 3;
position: fixed;
left: 50%;
top: 50%;
transform: translate(-50%,-50%);

section{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 95%;
}

`;

const Top = styled.div`
  width: 90%;
  height: 15%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  img {
    height: 70%;
    max-width: 50px;
    object-fit: contain;
  }
`;


const Container = styled.div`

flex-direction: row;
justify-content: center;
display: flex;
width: 100%;
height: 85%;
align-items: center;

div{
    width:80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

section{
    width:40%;
}

`;

const Nivel = styled.div`

display: flex;
flex-direction: row !important;
justify-content: space-around;
align-items: center;
gap: 5%;
width: 100%;
height: 4vh;

`;

const Niveis = styled.div`

    height: 1.5vh;
    width: 15%;
    border: 1px solid ${({ theme }) => theme.corPrincipal};
    background-color: ${({ theme, $nivel }) => ($nivel ? theme.corPrincipal : "transparent")};

`;

const Pdf = styled.div`

display: flex;
width:100%;
flex-direction: column;
justify-content: flex-start;
flex-wrap: wrap;

img {
    max-width: 50px;
  }

`;



export default ({ conteudo }) => {

    const [tela, setTela] = useState(
        { conteudo: {}, visivel: false }
    )

    const [nivelAtivo, setNivelAtivo] = useState([false, false, false]);

    const fechar = () => {
        setTela({ conteudo: {}, visivel: false });
    }

    useEffect(() => {

        if (conteudo.nome !== "none" && conteudo.nome) {
            setTela({ conteudo: conteudo, visivel: true });
        }

        let niveis = [];

        for (let i = 0; i < 3; i++) {
            if (i < conteudo.nivel) {
                niveis[i] = true;
            } else {
                niveis[i] = false;
            }
        }

        setNivelAtivo(niveis);


    }, [conteudo]);

    return (
        <Tela $visivel={tela.visivel}>

            {tela.conteudo.pdf ? (
                <Pdf>
                    <iframe
                        src={tela.conteudo.pdf}
                        width="100%"
                        height="100%"
                        title="Currículo"
                    />
                    <Interagible>
                        <img src={X} onClick={fechar} />
                    </Interagible>

                </Pdf>
            ) : (
                <Vidro $bordaCurva="25px">
                    <section>
                        <Top>
                            <img src={tela.conteudo.image} alt={tela.conteudo.nome} />
                            <Text tipoText="titulo1">{tela.conteudo.nome}</Text>
                            <Interagible>
                                <img src={X} onClick={fechar} />
                            </Interagible>
                        </Top>
                        <Container>
                            <section>
                                <Text tipoText="titulo3">{tela.conteudo.descricao}</Text>
                            </section>
                            <section>
                                <div>
                                    <Text tipoText="titulo2">
                                        {(() => {
                                            switch (tela.conteudo.nivel) {
                                                case 1:
                                                    return "Básico";
                                                case 2:
                                                    return "Intermediário";
                                                case 3:
                                                    return "Avançado";
                                                default:
                                                    return "";
                                            }
                                        })()}
                                    </Text>
                                    <Nivel>
                                        {nivelAtivo.map((nivel, index) => {
                                            if (nivelAtivo[0] != false) {
                                                return (
                                                    <Niveis key={index} $nivel={nivel}></Niveis>
                                                )
                                            }
                                        })}
                                    </Nivel>
                                </div>
                            </section>
                        </Container>
                    </section>

                </Vidro>
            )}


        </Tela>
    );

}