import React, { useState } from 'react'

export default function App() {
  const [palavra, setPalavra] = useState( '' );

  return (
    <div>
      <h1>Inversor de palavras</h1>
      <input
         type="text"
         value={palavra}
         placeholder="Escreva alguma"
         onChange={e => setPalavra(e.target.value)}
      >
      </input>
      <p>
        <strong>{palavra.split("").reverse().join("")}</strong>
      </p>
    </div>
  );
};


