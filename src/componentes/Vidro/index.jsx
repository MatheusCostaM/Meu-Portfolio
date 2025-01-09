import React from 'react';
import styled from "styled-components";

const Vidro = styled.div`
    background-color: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    width: 100%;
    height: 100%;
`;

export default ({ children }) => {
    return (
        <Vidro>
            {children}
        </Vidro>
    );
};



