import React from 'react';
import styled from "styled-components";

const Text = styled.h2`

font-size: 3 rem;
color: ${({ theme }) => theme.txt};

`

export default ({ children }) => {
    return (
        <Text>
            {children}
        </Text>
    )
}