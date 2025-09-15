import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [tarefa, setTarefa] = useState("");
  const [listaTarefas, setListaTarefas] = useState([])

  useEffect(() =>{
    setListaTarefas(JSON.parse (
      localStorage.getItem("LISTA_TAREFA"))
    )
  }, [])

  useEffect(() => {
    localStorage.setItem("LISTA_TAREFA", JSON.stringify(listaTarefas))
  }, [listaTarefas])

  //Transforma em uma função.
  const adicionarTarefa = () => {

      if(tarefa.trim() === ''){
        alert("Informe uma Tarefa")
        return
      }

      const novaTarefa = {
        id : Date.now(),
        nome : tarefa,
        completada : false
      }

    setListaTarefas([...listaTarefas, novaTarefa])
    localStorage.setItem("LISTA_TAREFA", JSON.stringify(listaTarefas))

    alert("Adicionado com sucesso");
    setTarefa("");
  };

  const excluirTarefa = (id) => {

    setListaTarefas(listaTarefas.filter( (task) => task.id != id))
    localStorage.setItem("LISTA_TAREFA", JSON.stringify(listaTarefas))

  }

  const alterarSituacao = (id) =>{
    
    setListaTarefas(
      listaTarefas.map( (task) => (
        task.id == id ? {...task, completada:!task.completada} : task
      ))
    )

    localStorage.setItem("LISTA_TAREFA", JSON.stringify(listaTarefas))
  }

  return (
    <div className="todo-container">
      <h2>Lista de Tarefas ✅</h2>

      <p>Total tarefa : { listaTarefas.length || "Sem tarefas" }</p>


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
          <li key={task.id}
          style={{
            textDecoration: task.completada ? 'line-through' : 'none',
            color: task.completada ? 'gray' : 'black'
          }}>
            {task.nome}
            <div>
              <button onClick={()=> alterarSituacao(task.id)} className="complete-btn">✔</button>
              <button disabled={task.completada} onClick={() => excluirTarefa(task.id)}  className="delete-btn">❌</button>
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
o Map faz a idea de percorrer.

*/