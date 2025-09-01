import { useState } from 'react';
import './App.css'

function App() {

  var nome = "Ygor";
  

  //Começo da utilização do Hook. Hook de estado para o nome.
  const [name, setName] = useState("Valor inicial");
 
  function mudarNome(event){
    nome = event.target.value;
    setName(event.target.value)
  }

  // Segundo Hook de estado utilizando useState para o sobrenome.
  const [lastedName, setName2] = useState("Valor inicial tbm")

  function mudarSobrenome(event){
    setName2(event.target.value)
  }
  
  return (
    <>
        <p>Informe seu nome</p>
        <input onChange={mudarNome}/>
        <p>{nome}</p>
        <p>Agora via useState : {name}</p>
        <input onChange={mudarSobrenome}/>
        <p> Sobrenome: {lastedName}</p>
    </>
  )
}

export default App

// O input onChange sempre vai capturar e mostrar as atualizações.
// Sempre que você precisar de uma variável que, ao mudar, reflita na interface, deve usar um Hook.