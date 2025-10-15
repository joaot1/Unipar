import  { useReducer, useEffect, useRef, useMemo, useState } from "react";
import "./App.css";


///////////////////////////////////////////
// Estado inicial do jogo
///////////////////////////////////////////
const estadoInicial = {
  capital: 0,
  multiplicador: 1.0,
  caiu: false,
  rodando: false,
  parou: false,
  ganhou: null,
  multiplicadorLimite: null,
};

///////////////////////////////////////////
// Reducer -> controla mudanças de estado
///////////////////////////////////////////
function jogoReducer(estado, acao) {
  switch (acao.tipo) {
    case "DEFINIR_CAPITAL":
      return { ...estado, capital: acao.valor };
    case "DEFINIR_MULTIPLICADOR":
      return { ...estado, multiplicador: acao.valor };
    case "INICIAR_JOGO":
      return {
        ...estado,
        rodando: true,
        caiu: false,
        parou: false,
        ganhou: null,
        multiplicador: 1.0,
        multiplicadorLimite: acao.valor,
      };
    case "DEFINIR_CAIU":
      return { ...estado, caiu: true, rodando: false };
    case "PARAR_JOGO":
      return { ...estado, parou: true, rodando: false };
    case "JOGADOR_GANHOU":
      return { ...estado, ganhou: true };
    case "JOGADOR_PERDEU":
      return { ...estado, ganhou: false };
    case "RESETAR_JOGO":
      return { ...estadoInicial };
    default:
      return estado;
  }
}

///////////////////////////////////////////
// Componente principal do jogo
///////////////////////////////////////////
const App = () => {
  const [estado, despachar] = useReducer(jogoReducer, estadoInicial);
  const { capital, multiplicador, caiu, rodando, parou, ganhou, multiplicadorLimite } = estado;

  // Referências
  const intervaloRef = useRef(null);

  // Estado do gráfico (array simples de valores)
  const [dados, setDados] = useState([1]);

  // Sorteio do crash inicial
  const crashAleatorio = useMemo(() => {
    const min = 1.0;
    const max = 10.0;
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
  }, []);

  ///////////////////////////////////////////
  // Loop do multiplicador
  ///////////////////////////////////////////
  useEffect(() => {
    if (!rodando) return;

    intervaloRef.current = setInterval(() => {
      const proximoMultiplicador = parseFloat((estado.multiplicador * 1.02).toFixed(2));

      if (proximoMultiplicador >= estado.multiplicadorLimite) {
        clearInterval(intervaloRef.current);
        despachar({ tipo: "DEFINIR_CAIU" });
      } else {
        despachar({ tipo: "DEFINIR_MULTIPLICADOR", valor: proximoMultiplicador });
        setDados((anterior) => [...anterior, proximoMultiplicador]);
      }
    }, 100);

    return () => clearInterval(intervaloRef.current);
  }, [rodando, estado.multiplicador, estado.multiplicadorLimite]);

  ///////////////////////////////////////////
  // Funções de controle
  ///////////////////////////////////////////
  const iniciarJogo = () => {
    if (capital <= 0) {
      alert("Insira um valor válido para apostar.");
      return;
    }

    despachar({ tipo: "INICIAR_JOGO", valor: crashAleatorio });
    setDados([1]); // resetar gráfico
  };

  const pararJogo = () => {
    clearInterval(intervaloRef.current);
    despachar({ tipo: "PARAR_JOGO" });

    if (multiplicador < multiplicadorLimite) {
      despachar({ tipo: "JOGADOR_GANHOU" });
      alert(`✅ Você ganhou! x${multiplicador} = R$${(capital * multiplicador).toFixed(2)}`);
    } else {
      despachar({ tipo: "JOGADOR_PERDEU" });
      alert(`💥 Você perdeu! Crash em x${multiplicadorLimite}`);
    }
  };

  const resetarJogo = () => {
    despachar({ tipo: "RESETAR_JOGO" });
    window.location.reload();
  };

  ///////////////////////////////////////////
  // Renderização
  ///////////////////////////////////////////
  const largura = 600;
  const altura = 300;
  const escalaX = 20; // espaçamento entre pontos
  const escalaY = 20; // altura proporcional ao multiplicador

  return (
    <div className="jogo-container">
      <h1>💣 Jogo Crash</h1>

      {/* Tela inicial */}
      {!rodando && !parou && !caiu && (
        <div className="inicio-container">
          <input
            type="number"
            value={capital}
            onChange={(e) => despachar({ tipo: "DEFINIR_CAPITAL", valor: +e.target.value })}
            placeholder="Capital Inicial (R$)"
            min="0"
            step="0.01"
          />
          <button onClick={iniciarJogo}>🎮 Iniciar</button>
        </div>
      )}

      {/* Tela durante o jogo */}
      {rodando && (
        <>
          <p className="multiplicador-texto">
            Multiplicador: <strong>x{multiplicador}</strong>
          </p>
          <p>Aguardando... (o ponto de crash está oculto)</p>
          <button onClick={pararJogo}>🛑 Parar</button>
        </>
      )}

      {/* Gráfico + foguete */}
      <div className="grafico-container">
        <svg width={largura} height={altura} style={{ border: "1px solid #333", background: "#111" }}>
          {/* Linha do multiplicador */}
          <polyline
            fill="none"
            stroke="limegreen"
            strokeWidth="2"
            points={dados.map((valor, i) => `${i * escalaX},${altura - valor * escalaY}`).join(" ")}
          />

          {/* Foguete na última posição */}
          {dados.length > 0 && (
            <text
              x={(dados.length - 1) * escalaX}
              y={altura - multiplicador * escalaY}
              fontSize="20"
            >
              🚀
            </text>
          )}
        </svg>
      </div>

      {/* Tela quando crasha */}
      {caiu && !parou && (
        <div>
          <p className="crash-texto">💥 Crash em x{multiplicadorLimite}</p>
          <h2>Você perdeu R${capital.toFixed(2)}</h2>
          <button onClick={resetarJogo}>🔄 Tentar novamente</button>
        </div>
      )}

      {/* Tela final */}
      {ganhou !== null && (
        <div>
          {ganhou ? (
            <h2 className="ganhou-texto">
              ✅ Você ganhou R${(capital * multiplicador).toFixed(2)} (x{multiplicador})
            </h2>
          ) : (
            <h2 className="perdeu-texto">❌ Você perdeu! Crash em x{multiplicadorLimite}</h2>
          )}
          <button onClick={resetarJogo}>🔁 Jogar novamente</button>
        </div>
      )}
    </div>
  );
};

export default App;
