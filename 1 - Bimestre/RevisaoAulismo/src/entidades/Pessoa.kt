package entidades

import enumeradores.Sexo
import java.math.BigDecimal

open class Pessoa (
    //Atributos repetidos do enteidade.Profissional e Entidade.Cliente vão aqui
    val nome : String,
    val cpf : Long,
    val sexo : Sexo,//Podemos utilizar o control + shift + r para usar em massa
    val idade : Int
){
    //Comportamentos
    // Para poder ser herdado Precisa do OPEN USAR HERANÇA
    open fun receberConta(conta: Conta, aReceber : BigDecimal){
        conta.saldo = conta.saldo.add(aReceber)

    }
}