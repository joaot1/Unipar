package org.example.ui

import org.example.crud.cadastrasCaixas
import org.example.crud.editarCaixas
import org.example.crud.excluirCaixas
import org.example.crud.listarCaixas

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
            1 -> cadastrasCaixas(0) //Sempre que for cadastrar uma caixa nova o ID será 0
            2 -> editarCaixas()
            3 -> listarCaixas()
            4 -> excluirCaixas()
            else -> println("Opcao Invalida")
        }
    }while (opcao != 0)
}