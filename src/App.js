import { useState, useEffect } from 'react'
import Game from './components/Game';
import Header from './components/Header';

function App() {
  let pokemons = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '25.png', ]

  const MAX_POKEMONS = 10

  return (
    <div>
      <Header/>
      <Game/>
    </div>
  );
}

export default App;
