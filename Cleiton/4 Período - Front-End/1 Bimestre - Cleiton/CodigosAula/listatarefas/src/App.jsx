import { useState } from "react";
import "./App.css";

function App() {
  const [tarefa, setTarefa] = useState("");
  const [listaTarefas, setListaTarefas] = useState([])

  //Transforma em uma função.
  const adicionarTarefa = () => {

      if(tarefa.trim() === ''){
        alert("Informe uma Tarefa")
        return
      }

      const novaTarefa = {
        id : Date.now(),
        nome : tarefa,
      }

    setListaTarefas([...listaTarefas, novaTarefa])

    alert("Adicionado com sucesso");
    setTarefa("");
  };

  return (
    <div className="todo-container">
      <h2>Lista de Tarefas ✅</h2>
      <div className="input-container">
        <input
          type="text"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
          placeholder="Digite uma Tarefa "
        />

        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      <ul>
        {listaTarefas.map((task) => (
          <li key={task.id}>
            {task.nome}
            <div>
              <button className="complete-btn">✔</button>
              <button className="delete-btn">❌</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

/*Onchange captura uma mudança que gera um evento.
Esse evento eu posso capturar ele e utilizar.
Na polarização {}. Aqui pode ser mapeado e utilizado minha lista. 
Sempre que quiser repetir algumas coisa sempre utilizamos um map.
Date.now(), -> esse cara vai criar um hash com data, hora o local atual.
*/