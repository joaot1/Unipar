package org.example.entidades

import org.example.enumeradoras.Material

class CaixaDAgua (
    val material: Material,
    val capacidade: Double?,
    val altura: Double,
    val largura: Double,
    val profundida: Double,
    val marca: String,
)