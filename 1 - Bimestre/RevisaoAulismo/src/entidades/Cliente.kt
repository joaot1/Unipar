package entidades

import enumeradores.Sexo
import java.math.BigDecimal

class Cliente (
    nome : String,
    idade : Int,
    cpf : Long,
    sexo : Sexo,
    val email : String,
    val cidade : String,
    val salario : Int,
    val estado : String,
) : Pessoa (
    nome = nome,
    idade = idade,
    cpf = cpf,
    sexo = Sexo.MASCULINO
){
    //Atividade 8
    //COMPORTAMENTOS
    //Huilson

}