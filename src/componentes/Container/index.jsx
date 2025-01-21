import React from 'react';
import styled from "styled-components";


const Container = styled.div`

display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
flex-direction: column;
text-align: center;

div {
    display: flex;
    flex-direction: row;
}


`;

export default ({ children }) => {

    return (
        <Container>
            {children}
        </Container>
    );

}