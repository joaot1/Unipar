import { useState } from "react";

function ControleNota(){

        const[nota, setNota] = useState("esperando nota")
        const[nome, setNome] = useState("esperando nome")
        const[situacao, setSituacao] = useState("situacao que se encontra")

        function addNota(event){
            const valor = event.target.value
            setNota(valor)
            if (valor >= 7){
                setSituacao("Aprovado")
            } else {
                setSituacao("Reprovado")
            }
        }

        function addNome(){
            setNome(event.target.value)
        }

    return(
        <div>
            <p>Informe sua Nota</p>
            <input onChange={addNota}></input>

            <p>Informe seu Nome</p>
            <input onChange={addNome}></input>

            <h4>Nome: {nome} Nota: {nota} </h4>
            <h4>Sua Situação: {situacao}</h4>
        </div>
    )
}

export default ControleNota;