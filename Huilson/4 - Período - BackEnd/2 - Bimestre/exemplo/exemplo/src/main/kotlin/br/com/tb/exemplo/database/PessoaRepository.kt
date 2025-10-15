package br.com.tb.exemplo.database

import br.com.tb.exemplo.model.Pessoa
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface PessoaRepository : JpaRepository<Pessoa, Long> {
}