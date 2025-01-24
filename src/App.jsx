import { useState } from 'react';
import Navbar from './componentes/Navbar';
import { GlobalStyle } from './componentes/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { temaClaro, temaEscuro } from './componentes/UI/temas';
import MenuLateral from './componentes/MenuLateral';
import Background from './componentes/Background';
import Dashboard from './componentes/Dashboard';
import Tela from './componentes/Tela';


function App() {

  const [tema, setTema] = useState(temaClaro);

  const [tela, setTela] = useState({});

  const abrir = (conteudo) => {

    setTela(conteudo);

  };

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
          <Tela conteudo={tela} />
          <Navbar TrocaTema={TrocaTema} abrir={abrir} />
          <MenuLateral />
          <Dashboard abrir={abrir} />
        </main>
      </ThemeProvider>

    </>

  );
}

export default App;
