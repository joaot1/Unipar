package org.example.ui

import org.example.crud.cadastrasCaixas

fun menu(){

    //Precisamos Colocar ele dentro de um Loop infinito entao vamos colocar dentro de um do para realizar isso
    do {
        println("1 - Cadastrar Caixa D'Agua")
        println("2 - Editar Caixa D'Agua")
        println("3 - Listar Caixas D'Agua")
        println("4 - Excluir Caixa D'Agua")
        println("0 - Sair")


        val opcao = readln().toInt()

        // When é utilizado para realizar as operação das opçoes do menu.
        when (opcao) {
            0 -> println("Adeus amigo!")
            1 -> cadastrasCaixas()
            2 -> println("Editando Caixa...")
            3 -> println("Lista Caixas...")
            4 -> println("Excluindo Caixas...")
            else -> println("Opcao Invalida")
        }
    }while (opcao != 0)
}