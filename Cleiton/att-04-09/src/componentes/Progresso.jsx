// Criar um estado progresso que começa em 0
// dois button: +10% e 10% para alterar o valor.
// Mostre uma barra de progresso (<div>) com a largura proporcioanal ao estado.
// Nao permita que o estado passe de 100% ou fique abaixo de 0%.

import { useState } from "react";

function Progresso(){
    
    const[progresso, setProgresso] = useState(0)

 function aumentarTamanho(){
        if (progresso == 100) {
            return
        }else{
            setProgresso(progresso + 10)
        }
    }

    function diminuirTamanho (){
        if (progresso == 0) {
            return
        }else{
            setProgresso(progresso - 10)
        }
    }

    return(
        <div>  
            <div>
                <p>Aperte para aumentar de tamanho!</p>
                <button className="botaoAumentar" onClick={aumentarTamanho}> + 10%</button>
                <p>Aperte para diminuir de tamanho!</p>
                <button className="botaoDiminuir" onClick={diminuirTamanho}> - 10%</button>
            </div>
            <div>
                <div className="barraDeProgresso" style={{width: `${progresso}%`}}></div>
            </div> 
        </div>
    )
}

export default Progresso;