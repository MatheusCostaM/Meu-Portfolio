import React from 'react';
import Navbar from './componentes/Navbar';
import { GlobalStyle } from './componentes/GlobalStyle';
import MenuLateral from './componentes/MenuLateral';
import Background from './componentes/Background';


function App() {

  return (
    <>
      <GlobalStyle />
      <Background>

        <Navbar />
        <MenuLateral />
      </Background>
    </>

  );
}

export default App;
