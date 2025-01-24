import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(270deg, ${({ theme }) => theme.luz} 25%, ${({ theme }) => theme.body} 75%);
    
  }

  main{
    display: flex;
    height: 100vh;
    flex-wrap: wrap;
    justify-content: end;
    z-index: 1;
  }

  a{
    text-decoration: none; 
  color: inherit; 
  cursor: pointer;
}
`;
