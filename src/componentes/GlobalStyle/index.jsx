import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

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
