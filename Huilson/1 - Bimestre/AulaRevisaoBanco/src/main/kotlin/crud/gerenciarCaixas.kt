package org.example.crud

import org.example.entidades.CaixaDAgua
import org.example.enumeradoras.Material

fun cadastrasCaixas(){

    println("Escolha o material do qual a caixa é composta:")
    println("1 - Plástico")
    println("2 - PVC")
    println("3 - Metal")
    println("4 - Argamassa")
    val opcao = readLine()!!.toInt()

    var material : Material
    when(opcao){
        1 -> material = Material.PLASTICO
        2 -> material = Material.PVC
        3 -> material = Material.METAL
        4 -> material = Material.ARGAMASSA
        else -> material = Material.PLASTICO
    }

    println("Capacidade da caixa em Litros:")
    val capacidade = readln().toDouble()

    println("Altura da caixa:")
    val altura = readln().toDouble()

    println("Qual a largura da caixa:")
    val largura = readln().toDouble()

    println("Qual a profundidade da caixa:")
    val profundidade = readln().toDouble()

    println("Qual a marca da caixa:")
    val marca = readln().toString()

    /*Salvar as variáveis agora dentro da classe
    Conecte os atributo da classe a variáveil que o usuário digitou*/
    
    CaixaDAgua(
        material = material,
        capacidade = capacidade,
        altura = altura,
        largura = largura,
        profundida = profundidade,
        marca = marca
    )
}

fun editarCaixas(){

}

fun listarCaixas(){

}

fun excluirCaixas(){

}