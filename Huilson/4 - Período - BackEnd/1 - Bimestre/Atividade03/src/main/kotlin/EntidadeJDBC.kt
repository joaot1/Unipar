package org.example.crud

import java.sql.Connection
import java.sql.DriverManager

class   EntidadeJDBC(
    val url: String,
    val usuario: String,
    val senha: String,

    ) {
    fun conectarComBanco(): Connection?{
        try{
            val conexao : Connection =
                DriverManager.getConnection(
                    this.url, this.usuario, this.senha
                )
            println("Conectou!")
            return  conexao
        }
        catch(erro : Exception){
            println(erro.printStackTrace())
        }
        return null
    }


}