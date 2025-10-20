import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [nomeExercicio, setNomeExercicio] = useState('')
  const [dataTreino, setDataTreino] = useState('')
  const [peso, setPeso] = useState('')
  const [repeticoes, setRepeticoes] = useState('')
  const [series, setSeries] = useState('')
  const [listaTreinos, setListaTreinos] = useState([])

  useEffect(() => {
    const treinoSalvos = JSON.parse(localStorage.getItem("LISTA_TREINOS")) || []
    setListaTreinos(treinoSalvos)
  }, [])

  useEffect(() => {
    localStorage.setItem("LISTA_TREINOS", JSON.stringify(listaTreinos))
  }, [listaTreinos])

  const adicionarTreino = () => {
    if (!nomeExercicio || !dataTreino || !peso || !repeticoes || !series) {
      alert("Preencha todos os campos!")
      return
    }

    const novoTreino = {
      id: Date.now(),
      nomeExercicio,
      dataTreino,
      peso: Number(peso),
      repeticoes: Number(repeticoes),
      series: Number(series)
    }

    setListaTreinos([...listaTreinos, novoTreino])
    setNomeExercicio('')
    setDataTreino('')
    setPeso('')
    setRepeticoes('')
    setSeries('')
  }

  const excluirTreino = (id) => {
    const novaLista = []
    for (let i = 0; i < listaTreinos.length; i++) {
      if (listaTreinos[i].id !== id) {
        novaLista.push(listaTreinos[i])
      }
    }
    setListaTreinos(novaLista)
  }

  let totalTreinos = listaTreinos.length
  let totalRepeticoes = 0
  let totalPesoLevantado = 0

  for (let i = 0; i < listaTreinos.length; i++) {
    totalRepeticoes += listaTreinos[i].repeticoes * listaTreinos[i].series
    totalPesoLevantado += listaTreinos[i].peso * listaTreinos[i].repeticoes * listaTreinos[i].series
  }

  const mediaPesoTreino = totalTreinos > 0 ? (totalPesoLevantado / totalTreinos).toFixed(2) : 0
  const mediaRepsTreino = totalTreinos > 0 ? (totalRepeticoes / totalTreinos).toFixed(2) : 0

  return (
    <div className="container">
      <h2>Controle de Treinos</h2>

      <div className="inputs">
        <input
          type="text"
          placeholder="Exercício"
          value={nomeExercicio}
          onChange={(e) => setNomeExercicio(e.target.value)}
        />
        <input
          type="date"
          value={dataTreino}
          onChange={(e) => setDataTreino(e.target.value)}
        />
        <input
          type="number"
          placeholder="Peso (kg)"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <input
          type="number"
          placeholder="Repetições"
          value={repeticoes}
          onChange={(e) => setRepeticoes(e.target.value)}
        />
        <input
          type="number"
          placeholder="Séries"
          value={series}
          onChange={(e) => setSeries(e.target.value)}
        />
        <button className="add" onClick={adicionarTreino}>+ Adicionar Treino</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Exercício</th>
            <th>Peso (kg)</th>
            <th>Séries</th>
            <th>Reps</th>
            <th>Total Reps</th>
            <th>Peso Total</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {(() => {
            const linhas = []
            for (let i = 0; i < listaTreinos.length; i++) {
              const t = listaTreinos[i]
              const totalReps = t.series * t.repeticoes
              const pesoTotal = t.peso * totalReps

              linhas.push(
                <tr key={t.id}>
                  <td>{t.dataTreino}</td>
                  <td>{t.nomeExercicio}</td>
                  <td>{t.peso}</td>
                  <td>{t.series}</td>
                  <td>{t.repeticoes}</td>
                  <td>{totalReps}</td>
                  <td>{pesoTotal}</td>
                  <td>
                    <button className="delete" onClick={() => excluirTreino(t.id)}>X</button>
                  </td>
                </tr>
              )
            }
            return linhas
          })()}
        </tbody>
      </table>

      <div className="resumo">
        <p><strong>Total Treinos:</strong> {totalTreinos}</p>
        <p><strong>Total Repetições:</strong> {totalRepeticoes}</p>
        <p><strong>Total Peso Levantado:</strong> {totalPesoLevantado} kg</p>
        <p><strong>Média Peso/Treino:</strong> {mediaPesoTreino} kg</p>
        <p><strong>Média Reps/Treino:</strong> {mediaRepsTreino} reps</p>
      </div>
    </div>
  )
}

export default App
