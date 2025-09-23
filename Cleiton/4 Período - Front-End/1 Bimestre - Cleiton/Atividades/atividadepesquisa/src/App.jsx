import React, { useRef, useLayoutEffect, useState } from 'react';

function App() {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (!ref.current) return;
    const w = ref.current.getBoundingClientRect().width;
    // só atualiza se mudou — evita render loop
    if (w !== width) setWidth(w);
  }, [width]); // observe a dependência: aqui comparamos antes de setar

  return (
    <div>
      <div ref={ref} style={{ padding: 12, border: '1px solid #ccc' }}>
        Conteúdo cujo tamanho vou medir
      </div>
      <p>Largura medida: {Math.round(width)}px</p>
    </div>
  );
}

export default App;