import { useState, useEffect } from 'react';
import styled from "styled-components";

const Move = styled.div.attrs(props => ({
    style: {
        left: `${props.x}px`,
        top: `${props.y}px`,
    },
}))`
    color: black;
    width: 30vw;
    height: 20vh;
    position: absolute;
    display: flex;
    transition: left 0.3s ease-in-out;
    transition: top 0.3s ease-in-out;
  `;

function mudarLimite(limite) {
    const novoLimite = limite + (((Math.floor(Math.random() * (limite / 2)) - limite / 4)) + limite / 2);
    return novoLimite;
}

function movimento(direcao, limite, posicao, velocidade, limiteFixo) {
    if (direcao == "aumentar") {
        if (posicao < limite) {
            posicao += velocidade;
        } else {
            posicao -= velocidade;
            direcao = "diminuir";
            limite = mudarLimite(limiteFixo);
        }
    } else {
        if (posicao >= (limite / 5)) {
            posicao -= velocidade;
        } else {
            posicao += velocidade;
            direcao = "aumentar";
        }
    }

    return [direcao, limite, posicao, velocidade, limiteFixo];

}
export default ({ children }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [limite, setLimite] = useState({ x: 5, y: 5, limite: 5 });
    const [direcao, setDireacao] = useState({ x: "aumentar", y: "aumentar" });

    useEffect(() => {
        const interval = setInterval(() => {
            setPosition((prev) => {

                let [newX, newY] = [prev.x, prev.y];
                let [newDirecaoX, newDirecaoY] = [direcao.x, direcao.y];
                let [newLimiteX, newLimiteY, limiteFixo] = [limite.x, limite.y, limite.limite];

                const velocidade = 0.5;

                let novosValores = [];

                novosValores = movimento(newDirecaoX, newLimiteX, newX, velocidade, limiteFixo);
                [newDirecaoX, newLimiteX, newX] = novosValores;

                novosValores = movimento(newDirecaoY, newLimiteY, newY, velocidade, limiteFixo);
                [newDirecaoY, newLimiteY, newY] = novosValores;

                setDireacao({ x: newDirecaoX, y: newDirecaoY });

                setLimite({ x: newLimiteX, y: newLimiteY, limite: limiteFixo });

                return { x: newX, y: newY };
            });
        }, 100);

        return () => clearInterval(interval);
    }, [direcao]);

    return (
        <Move x={position.x} y={position.y}>
            {children}
        </Move>
    );
};
