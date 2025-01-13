import { useEffect, useState } from 'react';
import styled from "styled-components";

const MoveSimple = styled.div`

/* Posição do children */
    display: flex;
    position: absolute;
    
& > * {
    /* transição para a escala */
    transition: transform 0.3s ease-in-out;

    /* Mudança de escala */
    transform: scale(${({ isMove }) => (isMove ? 1 : 0.95)});
}
`

export default ({ children }) => {

    const [isMove, setMove] = useState(true);

    useEffect(() => {

        let newIsMove = isMove;

        const interval = setInterval(() => {

            if (newIsMove) {
                newIsMove = false;
            } else {
                newIsMove = true;
            }
            setMove(newIsMove);
        }, 2000)

        return () => clearInterval(interval);
    });

    return (
        <MoveSimple isMove={isMove}>
            {children}
        </MoveSimple>
    );
}

