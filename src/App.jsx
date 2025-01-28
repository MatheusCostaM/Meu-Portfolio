import { useState } from 'react';
import Navbar from './componentes/Navbar';
import { GlobalStyle } from './componentes/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { temaClaro, temaEscuro } from './componentes/UI/temas';
import MenuLateral from './componentes/MenuLateral';
import Background from './componentes/Background';
import Dashboard from './componentes/Dashboard';
import Tela from './componentes/Tela';

import { useTranslation } from 'react-i18next';
import "./i18n/i18n";

const App = () => {

  const { t, i18n } = useTranslation();

  const [tema, setTema] = useState(temaClaro);

  const [tela, setTela] = useState({});

  const [menuLat, setMenuLat] = useState(false);

  const [lngAtual, setLngAtual] = useState("pt");

  const trocaLingua = (lng) => {
    i18n.changeLanguage(lng);
    setLngAtual(lng);
  }

  const abrir = (conteudo) => {

    setTela(conteudo);

  };

  const TrocaTema = (text) => {
    if (text === "Modo Claro" || text === "Light Mode") {
      setTema(temaClaro);
    } else {
      setTema(temaEscuro);
    }
  }

  const scroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const abrirMenu = () => {
    menuLat ? setMenuLat(false) : setMenuLat(true);
  }

  return (
    <>
      <ThemeProvider theme={tema}>
        <GlobalStyle />
        <Background />
        <main>
          <Tela conteudo={tela} translate={t} />
          <Navbar TrocaTema={TrocaTema} abrir={abrir} scroll={scroll} trocaLingua={trocaLingua} menuLat={menuLat} abrirMenu={abrirMenu} lngAtual={lngAtual} translate={t} />
          <MenuLateral scroll={scroll} menuLat={menuLat} abrirMenu={abrirMenu} translate={t} />
          <Dashboard abrir={abrir} translate={t} />
        </main>
      </ThemeProvider>

    </>

  );
}

export default App;
