import React, { useState } from 'react';

const Contador = () => {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  const decrementarContador = () => {
    setContador(contador - 1);
  };

  return (
    <div class="align-items-center text-center pt-4 pb-4 mb-4 col bg-light">
      <h2 class= "texto">Contador: {contador}</h2>
      <button type="button" class="btn btn-outline-info" onClick={incrementarContador}>Incrementar</button>
      <button type="button" class="btn btn-outline-info "onClick={decrementarContador}>Decrementar</button>
    </div>
  );
};

export default Contador;