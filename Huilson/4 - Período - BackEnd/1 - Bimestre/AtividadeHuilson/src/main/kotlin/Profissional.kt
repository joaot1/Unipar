package org.example.entidades

import java.math.BigDecimal

class Profissional (
    cpf: String,
    nome : String,
    idade : Int,
    sexo : String,
    val profissao: String,
    val salario: BigDecimal
) : Pessoa(
    cpf = cpf,
    idade = idade,
    nome = nome,
    sexo = sexo
)