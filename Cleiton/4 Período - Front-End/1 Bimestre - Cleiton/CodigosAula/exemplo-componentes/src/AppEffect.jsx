import { useEffect, useState } from 'react';
import './app.css'

function AppEffect(){

   const [efeito, setEfeito] = useState(0);
   const [contador, setContador] = useState(0);
    
   //Executa uma vez
    useEffect(
        //Linha 7 é uma função. Efeito de callback que foi colocado na aplicação.
        () => {
            console.log("Evento disparado uma vez")
        },
        []
    )

    //Executa em cada mudança do estado efeito
    useEffect(
        () =>{
            console.warn("Executou o disparo do efeito")
        },
        [efeito]
    )

    //Executa em qualquer renderização
    useEffect(
        () => {
            console.error("Executa em toda renderização")
        },
    )

    return(
        <>
            <h1>Trabalhando com Hook UseEffect</h1>

            <button onClick={() => setEfeito(efeito + 1)}>Adicionar Efeito</button>

            <h2> Quantidade efeito : {efeito}</h2>

            <button onClick={() => setContador(contador + 1)}>Adicionar na contagem</button>
            <h2>Contagem : {contador}</h2>
        </>
    )
}

export default AppEffect;