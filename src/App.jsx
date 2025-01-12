import React from 'react';
import Move from './componentes/Move';
import Vidro from './componentes/Vidro';
import meuIcone from './assets/img/alura.svg';
import Interagible from './componentes/Interagible';


function App() {

  return (
    <body>
      <Vidro>

        <Move>
          <Interagible>
            <img src={meuIcone}></img>
          </Interagible>
        </Move>

      </Vidro>
    </body>
  );
}

export default App;
