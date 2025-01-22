import { useState } from 'react';
import Navbar from './componentes/Navbar';
import { GlobalStyle } from './componentes/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { temaClaro, temaEscuro } from './componentes/UI/temas';
import MenuLateral from './componentes/MenuLateral';
import Background from './componentes/Background';
import Dashboard from './componentes/Dashboard';


function App() {

  const [tema, setTema] = useState(temaClaro);

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
        <Background />
        <main>
          <Navbar TrocaTema={TrocaTema} />
          <MenuLateral />
          <Dashboard />
        </main>
      </ThemeProvider>

    </>

  );
}

export default App;
