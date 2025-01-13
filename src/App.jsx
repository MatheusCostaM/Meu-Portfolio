import React from 'react';
import Move from './componentes/Move';
import Vidro from './componentes/Vidro';
import meuIcone from './assets/img/alura.svg';
import Interagible from './componentes/Interagible';
import Neon from './componentes/Neon'
import MoveSimple from './componentes/MoveSimple';


function App() {

  return (
    <body>
      <Vidro>
        <MoveSimple>
          <Interagible>
            <img src={meuIcone}></img>
          </Interagible>
        </MoveSimple>
      </Vidro>
    </body>
  );
}

export default App;
