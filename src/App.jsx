import { useState } from 'react';
import Navbar from './componentes/Navbar';
import { GlobalStyle } from './componentes/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { temaClaro, temaEscuro } from './componentes/UI/temas';
import MenuLateral from './componentes/MenuLateral';
import Background from './componentes/Background';


function App() {

  const [tema, setTema] = useState(temaEscuro);

  function TrocaTema(text) {
    if (text === "Modo Claro") {
      setTema(temaClaro);
    } else {
      setTema(temaEscuro);
    }
  }

  return (
    <>
      <ThemeProvider theme={tema}>
        <GlobalStyle />
        <Background>

          <Navbar TrocaTema={TrocaTema} />
          <MenuLateral />
        </Background>
      </ThemeProvider>

    </>

  );
}

export default App;
