package entidades

import enumeradores.Setor
import enumeradores.Sexo
import java.math.BigDecimal

class Funcionario (
    nome: String = "",
    sexo : Sexo,
    cpf: Long,
    idade: Int,
    val setor : Setor
) : Pessoa(
    nome = nome,
    sexo = Sexo.MASCULINO,
    cpf = cpf,
    idade = idade,
){
    //Comportamentos do Profissional
    fun instalarCaixaDAgua(clt : Funcionario){
        if (clt.setor.equals(Setor.MONTAGEM)){
            println("Profissional Habilitado")
        }else{
            println("Profissional desqualificado")
        }
    }
    //Atividade 8
    //O Polimorfismo nada mais é sobre fazer a sobre escrita do metodo que está na superclasse.
    override fun receberConta(conta: Conta, aPagar : BigDecimal){
        conta.saldo = conta.saldo.subtract(aPagar)

    }

}