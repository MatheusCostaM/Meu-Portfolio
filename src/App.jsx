import React from 'react';
import Navbar from './componentes/Navbar';
import { GlobalStyle } from './componentes/GlobalStyle';
import MenuLateral from './componentes/MenuLateral';


function App() {

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <MenuLateral />
    </>

  );
}

export default App;
