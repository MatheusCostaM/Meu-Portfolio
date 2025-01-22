import { useState, useEffect } from 'react';
import styled from "styled-components";

const Move = styled.div.attrs(props => ({
    style: {
        left: `${props.x}px`,
        top: `${props.y}px`,
        transform: `rotate(${props.$rote}deg)`,
    },
}))`
/* Posição do children */
display: flex;
position: absolute;

/* transição para o movimento */
transition: left 0.4s ease-in-out, top 0.4s ease-in-out, transform 0.4s ease-in-out;
`;

function mudarRotation(newRotate, velocidade) {

    let resultado = newRotate + (parseFloat(velocidade)) / 10;

    if (resultado > 360) {
        resultado = resultado % 360;
    }

    return resultado;
}

function mudarLimite(limiteFixo) {
    return limiteFixo + (Math.floor(Math.random() * (limiteFixo / 2)) - limiteFixo / 4);
}

function movimento(direcao, limite, posicao, velocidade, limiteFixo) {
    if (direcao === "aumentar") {
        if (posicao < limite) {
            posicao += parseFloat(velocidade);
        } else {
            posicao -= parseFloat(velocidade);
            direcao = "diminuir";
            limite = mudarLimite(limiteFixo);
        }
    } else {
        if (posicao >= (0 - limite / 2)) {
            posicao -= parseFloat(velocidade);
        } else {
            posicao += parseFloat(velocidade);
            direcao = "aumentar";
        }
    }

    return [direcao, limite, posicao];
}

export default ({ children, velocidade }) => {
    const [rotation, setRotation] = useState(0);
    const [position, setPosition] = useState(() => {
        const iniPositionX = Math.floor(Math.random() * window.innerWidth);
        const iniPositionY = Math.floor(Math.random() * window.innerHeight);
        return { x: iniPositionX, y: iniPositionY };
    });
    const [direcao, setDirecao] = useState(() => {
        const iniDirectionX = (Math.random() < 0.5) ? "diminuir" : "aumentar";;
        const iniDirectionY = (Math.random() < 0.5) ? "diminuir" : "aumentar";;
        return { x: iniDirectionX, y: iniDirectionY };
    });
    const [limite, setLimite] = useState(() => {
        const limiteFixo = (window.innerWidth + window.innerHeight) / 2;
        return { x: window.innerWidth, y: window.innerHeight, limiteFixo };
    });

    useEffect(() => {
        const atualizarLimites = () => {
            const limiteFixo = (window.innerWidth + window.innerHeight) / 2;
            setLimite({ x: window.innerWidth, y: window.innerHeight, limiteFixo });
        };

        // Atualiza limites ao redimensionar a janela
        window.addEventListener("resize", atualizarLimites);

        const interval = setInterval(() => {
            setPosition((prev) => {
                let newRotate = rotation;
                let [newX, newY] = [prev.x, prev.y];
                let [newDirecaoX, newDirecaoY] = [direcao.x, direcao.y];
                let [newLimiteX, newLimiteY, limiteFixo] = [limite.x, limite.y, limite.limiteFixo];


                let novosValores;

                // Atualiza posição e direção em X
                novosValores = movimento(newDirecaoX, newLimiteX, newX, velocidade, limiteFixo);
                [newDirecaoX, newLimiteX, newX] = novosValores;

                // Atualiza posição e direção em Y
                novosValores = movimento(newDirecaoY, newLimiteY, newY, velocidade, limiteFixo);
                [newDirecaoY, newLimiteY, newY] = novosValores;

                newRotate = mudarRotation(newRotate, velocidade);

                setDirecao({ x: newDirecaoX, y: newDirecaoY });
                setLimite({ x: newLimiteX, y: newLimiteY, limiteFixo });
                setRotation(newRotate);

                return { x: newX, y: newY };
            });
        }, 300);

        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", atualizarLimites);
        };
    }, [direcao, limite, velocidade]);

    return (
        <Move x={position.x} y={position.y} $rote={rotation}>
            {children}
        </Move>
    );
};
