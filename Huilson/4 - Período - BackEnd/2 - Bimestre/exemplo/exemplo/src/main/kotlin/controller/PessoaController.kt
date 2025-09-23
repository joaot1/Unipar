package controller

import database.PessoaRepository
import model.Pessoa
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

/** Importações A cima */

//A anotação restController não pode usar VIEW, Basicamente para construir APIS
//Já a anotação Controller permite ter VIEW (telinha), para construir aplicações web

@RestController
@RequestMapping("/pessoa")

class PessoaController (
    private val pessoaRepository : PessoaRepository
    /** Uma injeção de dependência é necessária quando
     *  usamos uma classe externa, essa injeção (váriavel)
     *  deve ser privada, por uma questão de segurança
     *  */
) {
    @PostMapping
    fun cadastrarPessoa(@RequestBody pessoa: Pessoa)
    : ResponseEntity<Pessoa>{
        return ResponseEntity.ok(
            pessoaRepository.save<Pessoa>(pessoa)
        )
    }
}