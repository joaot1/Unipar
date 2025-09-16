/**
 * Nomes: João Antonio Tombini Bortolotti | RA: 60001145
 * Ygor Rafael De Moura Artuzo | RA: 60001113
 * Gabriel Henrique Mombelli | RA: 60002796
 * João Schmitz | RA: 60003036
 */

import java.math.BigDecimal

fun main() {
    // Simulando dados vindos do banco (VARCHAR)
    val idBanco = 1
    val nomeBanco = "Cadeira"
    val precoBanco = "199.90" // VARCHAR no banco

    // Conversão de String (VARCHAR) para BigDecimal
    val precoConvertido = BigDecimal(precoBanco)

    // Criando objeto Produto com o valor convertido
    val produto = Produto(idBanco, nomeBanco, precoConvertido)

    // Exibindo o objeto no console
    println(produto)
}
