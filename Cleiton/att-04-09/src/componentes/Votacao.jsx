//  Crie 3 estados opcao a, b ,c : comecando em 0
//  3 botoes Votar na opcao: a, b, c
//  Cada botao vai apresentar apenas sua opcao
//  Mostre o placar na tela.

import { useState } from "react";

function Votacao(){

    const[opcaoA, setOpcaoA] = useState(0)
    const[opcaoB, setOpcaoB] = useState(0)
    const[opcaoC, SetOpcaoC] = useState(0)

    function votoA(){
        setOpcaoA(opcaoA +1)
    }

    function votoB(){
        setOpcaoB(opcaoB +1)
    }

    function votoC(){
        SetOpcaoC(opcaoC +1)
    }

    return(
        <div>
            <div> <h1>Vote na sua Opção!</h1> </div>
            <div>
                <button onClick={votoA}>Opção A</button>
                <button onClick={votoB}>Opção B</button>
                <button onClick={votoC}>Opção C</button>
            </div>
            <h4>Votos = A:{opcaoA} B:{opcaoB} C:{opcaoC} </h4>
        </div>
    )
}

export default Votacao;