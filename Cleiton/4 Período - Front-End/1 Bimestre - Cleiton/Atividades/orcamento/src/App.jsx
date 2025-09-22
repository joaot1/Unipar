import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [descricao, setDescricao] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [valorUnitario, setValorUnitario] = useState("");

  const [listaOrcamento, setListaOrcamento] = useState([]);

  // Calcula o valor total do item (quantidade * unitário)
  const valorTotal = Number(quantidade) * Number(valorUnitario);

  useEffect(() => {
    setListaOrcamento(JSON.parse(localStorage.getItem("LISTA_ORCAMENTO")) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem("LISTA_ORCAMENTO", JSON.stringify(listaOrcamento));
  }, [listaOrcamento]);

  const adicionarOrcamento = () => {
    if (descricao.trim() === "") {
      return;
    }

    const novoItem = {
      id: Date.now(),
      descricao,
      quantidade: Number(quantidade),
      valorUnitario: Number(valorUnitario),
      valorTotal,
    };

    setListaOrcamento([...listaOrcamento, novoItem]);

    localStorage.setItem("LISTA_ORCAMENTO", JSON.stringify(listaOrcamento));

    // limpa os inputs
    setDescricao("");
    setQuantidade("");
    setValorUnitario("");
  };

  const excluirTarefa = (id) => {
    setListaOrcamento(listaOrcamento.filter((task) => task.id !== id));

    localStorage.setItem("LISTA_ORCAMENTO", JSON.stringify(listaOrcamento));
  };

  const totalDaLista = listaOrcamento.reduce((acc, item) => {
    return acc + item.valorTotal;
  }, 0);

  return (
    <div className="todo-Container">
      <h2>Lista de Orçamento</h2>

      <div className="inputs">
        <input
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Descrição"
        />
        <input
          type="number"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
          placeholder="Quantidade"
        />
        <input
          type="number"
          value={valorUnitario}
          onChange={(e) => setValorUnitario(e.target.value)}
          placeholder="Valor Unitário"
        />
        <button onClick={adicionarOrcamento}>Adicionar</button>
      </div>

      <div className="tabela">
        <p>Descrição</p>
        <p>Qtd</p>
        <p>Unitário</p>
        <p>Total</p>
        <p>Ações</p>
      </div>

      <div className="lista">
        <ul>
          {listaOrcamento.map((informacao) => (
            <li key={informacao.id} className="organizar">
              <div className="coluna">
                <p>{informacao.descricao}</p>
              </div>
              <div className="coluna">
                <p>{informacao.quantidade}</p>
              </div>
              <div className="coluna">
                <p>R$ {informacao.valorUnitario.toFixed(2)}</p>
              </div>
              <div className="coluna">
                <p>R$ {informacao.valorTotal.toFixed(2)}</p>
              </div>
              <div className="coluna acao">
                <p>
                  <button
                    onClick={() => excluirTarefa(informacao.id)}
                    className="delete-btn"
                  >
                    ❌
                  </button>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="totalDaLista">
        <h3>Total do Orçamento: R$ {totalDaLista.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default App;
