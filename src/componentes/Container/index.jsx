import React from 'react';
import styled from "styled-components";


const Container = styled.div`

display: flex;
justify-content: center;
align-items: center;
width: 100%;
min-height: 100vh;
flex-direction: column;
text-align: center;

div {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


`;

export default ({ children, id }) => {

    return (
        <Container>
            <section id={id}>
                {children}
            </section>
        </Container>
    );

}