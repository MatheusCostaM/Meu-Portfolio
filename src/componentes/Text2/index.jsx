import React from 'react';
import styled from "styled-components";

const Text2 = styled.h2`

font-size: 3 rem;
color: white;

`

export default ({ children }) => {
    return (
        <Text2>
            {children}
        </Text2>
    )
}