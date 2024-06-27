import React, { useEffect, useState } from 'react';
import './App.css';
import { rawPokeMon$ } from './store';

function App() {
  const [pokeMon, setPokemon] = useState();

  useEffect(() => {
    rawPokeMon$.subscribe(console.log);
  }, []);
  return <div></div>;
}

export default App;
