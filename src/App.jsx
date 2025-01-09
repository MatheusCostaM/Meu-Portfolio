import React from 'react';
import Move from './componentes/Move';
import Vidro from './componentes/Vidro';
import meuIcone from './assets/img/alura.svg';



function App() {

  return (
    <Vidro>
      <Move>
        <img src={meuIcone}></img>
      </Move>
    </Vidro>
  );
}

export default App;
