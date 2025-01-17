import { useState, useEffect } from 'react';
import styled from "styled-components";

const Move = styled.div.attrs(props => ({
    style: {
        left: `${props.x}px`,
        top: `${props.y}px`,
    },
}))`
    /* Posição do children */
    display: flex;
    position: absolute;

    /* Tamanho da div */
    width: 30vw;
    height: 20vh;
    
    /* transição para o movimento */
    transition: left 0.4s ease-in-out;
    transition: top 0.4s ease-in-out;
  `;

function mudarLimite(limite) {

    //cria um calculo onde o limite pode aumentar ou reduzir.
    const novoLimite = limite + (((Math.floor(Math.random() * (limite / 2)) - limite / 4)) + limite / 2);
    return novoLimite;
}

function movimento(direcao, limite, posicao, velocidade, limiteFixo) {

    //analisa a direção setada, cria o movimento com a velocide e inverte a direção ao chegar no limite.
    if (direcao == "aumentar") {
        if (posicao < limite) {
            posicao += velocidade;
        } else {
            posicao -= velocidade;
            direcao = "diminuir";
            limite = mudarLimite(limiteFixo);
        }
    } else {
        //aqui o limite é dividido por 5 para criar um limite em outra direção.
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

    //cria os "states" de função.
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [limite, setLimite] = useState({ x: 150, y: 150, limite: 300 });
    const [direcao, setDireacao] = useState({ x: "aumentar", y: "aumentar" });

    useEffect(() => {

        //set um intervalo de 100mls para a ação.
        const interval = setInterval(() => {

            //seta a posição com base na atual (prev).
            setPosition((prev) => {

                //seta as novas variaveis com os states atuais que irão alterar os states
                let [newX, newY] = [prev.x, prev.y];
                let [newDirecaoX, newDirecaoY] = [direcao.x, direcao.y];
                let [newLimiteX, newLimiteY, limiteFixo] = [limite.x, limite.y, limite.limite];

                const velocidade = 0.5;

                let novosValores = [];

                //recebe os valores de x e passa para as variaveis de x.
                novosValores = movimento(newDirecaoX, newLimiteX, newX, velocidade, limiteFixo);
                [newDirecaoX, newLimiteX, newX] = novosValores;

                //recebe os valores de x e passa para as variaveis de x.
                novosValores = movimento(newDirecaoY, newLimiteY, newY, velocidade, limiteFixo);
                [newDirecaoY, newLimiteY, newY] = novosValores;

                //altera os "states"
                setDireacao({ x: newDirecaoX, y: newDirecaoY });
                setLimite({ x: newLimiteX, y: newLimiteY, limite: limiteFixo });

                //retorna as novas posições que vão para o style do obj
                return { x: newX, y: newY };
            });

        }, 100);

        //limpa o intervalo.
        return () => clearInterval(interval);

        //fecha o efeito e define direcao como o observavel 
    }, [direcao]);

    return (
        <Move x={position.x} y={position.y}>
            {children}
        </Move>
    );
};
