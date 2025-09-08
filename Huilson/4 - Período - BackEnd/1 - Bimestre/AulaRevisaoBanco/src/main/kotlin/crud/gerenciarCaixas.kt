package org.example.crud

import org.example.entidades.CaixaDAgua
import org.example.enumeradoras.Material

val conectar = EntidadeJDBC(
    url = "jdbc:postgresql://localhost:5432/postgres",
    usuario = "postgres",
    senha = "5432",
)

fun criarTabelaCaixa(){
    // Precisamos puxar no main para funcionar
    //Coloque o nome da tabela o mesmo nome da entidade.
    val sql = "CREATE TABLE IF NOT EXISTS CaixaDAgua" +
            " (id serial NOT NULL PRIMARY KEY," +
            " material varchar(255)," +
            " capacidade float," +
            " altura float," +
            " largura float," +
            " profundidade float" +
            ")"
//Cada coluna da tabela precisa ter o mesmo nome dos atributos da Entidade.

    val banco = conectar.conectarComBanco()
    val enviarParaBanco = banco!!.createStatement().execute(sql)
    // !! Para dizer que esse cara nunca vai ser null e dai precisamos criar uma afirmação e executar nosso sql

    println(enviarParaBanco) // Se retornar false ou 1, deu certo!

    banco.close() //Encerra a conexão com o banco.
}

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

    /*Salvar as variáveis agora dentro da classe
    Conecte os atributo da classe a variáveil que o usuário digitou*/


    val c = CaixaDAgua(
        material = material,
        capacidade = capacidade,
        altura = altura,
        largura = largura,
        profundidade = profundidade,
    )

    val banco = conectar.conectarComBanco()!!.prepareStatement(
        "INSERT INTO CaixaDAgua" +
         " (material, capacidade, altura, largura, profundidade)" +
         " VALUES (?, ?, ?, ?, ?)"
    )
        banco.setString(1, c.material.name)
        banco.setDouble(2, c.capacidade!!)
        banco.setDouble(3, c.altura)
        banco.setDouble(4, c.largura)
        banco.setDouble(5, c.profundidade)


        banco.executeUpdate()//Isso fará um COMMIT no banco.

        banco.close()//Fecha a transição
}

fun editarCaixas(){

}

fun listarCaixas(){

}

fun excluirCaixas(){

}