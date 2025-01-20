import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(360deg, ${({ theme }) => theme.luz} 25%, ${({ theme }) => theme.body} 75%);
  }
`;
