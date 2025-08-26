import entidades.Funcionario
import entidades.Servico
import enumeradores.Setor
import enumeradores.Sexo

fun main() {
    val instalacao : Servico = Servico(
        "Instalação",
        preco = "800,50".toBigDecimal(),
        "Empregado",
        funcionario = Funcionario(
            nome = "Joao",
            sexo = Sexo.MASCULINO,
            cpf = 90203434829,
            idade = 19,
            setor = Setor.FINANCEIRO
        )
    )
}