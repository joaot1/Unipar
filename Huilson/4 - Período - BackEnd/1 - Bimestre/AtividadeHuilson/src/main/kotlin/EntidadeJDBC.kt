package org.example.crud

import java.sql.Connection
import java.sql.Driver
import java.sql.DriverManager



class EntidadeJDBC (
    //
    val url : String,
    val usuario : String,
    val senha : String
){
    fun conectarComBanco() : Connection?{
        //Palvra chave para conectar com o banco com java e kotlin.
        // Significado Quando precisa fazer algo que possa falhar
        try{
            val coneccao : Connection = DriverManager.getConnection(
                //Cada Banco tem o seu driver.
                this.url, this.usuario, this.senha
            )
            println("conectou!")
            return coneccao
        }catch (erro : Exception){
            println(erro.printStackTrace())
        }
        return null
    }
}