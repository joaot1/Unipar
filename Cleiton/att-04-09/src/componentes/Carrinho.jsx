// Ter um estado quantidade iniciando em 1
// Tenha um estado valor iniciando em 50 pila
// um botão para aumentar e outro para diminuir a quantidade
// Não permitir que a quantidade seja menor que 1 
// Mostre o valor total

import { useState } from "react";

function Carrinho(){

    const[quantidadeItem, setQntItem] = useState(1)
    const[valorItem, setPreco] = useState(50.00)

    function addItem(){
        setQntItem(quantidadeItem + 1)
        setPreco(valorItem + 50.00)
    }

    function removerItem(){
        if(quantidadeItem == 1){
            return
        } else {
            setQntItem (quantidadeItem - 1)
            setPreco (valorItem - 50.00)
        }
    }

    return(
        <div>
             <div>
                <h2>Itens no carrinho de compra: {quantidadeItem}</h2>
                <h2>Preço das compras: {valorItem}</h2>
             </div>
             <div>
                <button onClick={addItem}>Adicionar Item</button>
                <button onClick={removerItem}>Remover Item</button>
             </div>
        </div>
    )
}

export default Carrinho