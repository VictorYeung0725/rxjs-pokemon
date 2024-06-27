import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import { Pokemon, pokenMonWithPower$ } from './store';

const Search = () => {
  const [pokeMon, setPokemon] = useState<Pokemon[]>([]);
  const [searchPokeMon, setSearchPokeMon] = useState('');

  useEffect(() => {
    const sub = pokenMonWithPower$.subscribe(setPokemon);
    return sub.unsubscribe();
  }, []);

  const filterPokenmon = useMemo(() => {
    return pokeMon.filter((p) => {
      return p.name
        .toLocaleLowerCase()
        .includes(searchPokeMon.toLocaleLowerCase());
    });
  }, [pokeMon, searchPokeMon]);

  return (
    <div>
      <input
        type='text'
        value={searchPokeMon}
        onChange={(e) => setSearchPokeMon(e.target.value)}
      />
      <div>
        {filterPokenmon.map((p) => (
          <div key={p.id}>
            <strong>{p.name}</strong> - {p.power}
          </div>
        ))}
      </div>
    </div>
  );
};

function App() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
      <Search />
    </div>
  );
}

export default App;
