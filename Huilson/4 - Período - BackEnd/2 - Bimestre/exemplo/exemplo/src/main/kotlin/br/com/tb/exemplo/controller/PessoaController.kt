package br.com.tb.exemplo.controller

import br.com.tb.exemplo.database.PessoaRepository
import br.com.tb.exemplo.model.Pessoa
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
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

    @GetMapping
    fun buscarPessoas() : ResponseEntity<List<Pessoa>>{
        return ResponseEntity.ok(pessoaRepository.findAll())
    }

    @GetMapping("/{id}")
    fun buscarId(@PathVariable id : Long) : ResponseEntity<Pessoa>{
        val pessoa : Pessoa = pessoaRepository.findById(id).get()
        return if (pessoa != null){
            ResponseEntity.ok(pessoa)
        } else{
            ResponseEntity.notFound().build()
        }
    }

    @DeleteMapping("/{id}")
    fun excluirPessoa(@PathVariable id : Long): ResponseEntity<Void>{
        val pessoa = pessoaRepository.deleteById(id)
        return if (pessoa != null){
            ResponseEntity.noContent().build()
        } else{
            ResponseEntity.notFound().build()
        }
    }

}