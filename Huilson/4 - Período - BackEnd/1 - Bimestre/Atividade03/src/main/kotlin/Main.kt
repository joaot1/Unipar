/**
 * Nomes: João Antonio Tombini Bortolotti | RA: 60001145
 * Ygor Rafael De Moura Artuzo | RA: 60001113
 * Gabriel Henrique Mombelli | RA: 60002796
 * João Schmitz | RA: 60003036
 */

import java.math.BigDecimal
import java.sql.Connection
import java.sql.DriverManager
import java.sql.ResultSet


// URL de conexão: ajuste banco, usuário e senha
const val JDBC_URL = "jdbc:postgresql://localhost:5432/postgres"
const val USER = "postgres"
const val PASSWORD = "postgres"

fun main() {
    // 1. Criar tabela se não existir
    criarTabela()

    // 2. Inserir um produto (exemplo)
    val preco = BigDecimal("123.45")
    inserirProduto(preco)

    // 3. Listar produtos e imprimir como BigDecimal
    val precos = listarProdutos()
    println("Preços encontrados no banco:")
    precos.forEach { println(it) }
}

fun criarTabela() {
    val sql = """
        CREATE TABLE IF NOT EXISTS produto (
            id SERIAL PRIMARY KEY,
            preco VARCHAR(50) NOT NULL
        )
    """.trimIndent()

    DriverManager.getConnection(JDBC_URL, USER, PASSWORD).use { conn ->
        conn.createStatement().use { st ->
            st.execute(sql)
        }
    }
}

fun inserirProduto(preco: BigDecimal) {
    val sql = "INSERT INTO produto (preco) VALUES (?)"

    DriverManager.getConnection(JDBC_URL, USER, PASSWORD).use { conn ->
        conn.prepareStatement(sql).use { ps ->
            // salva como String no banco
            ps.setString(1, preco.toPlainString())
            ps.executeUpdate()
        }
    }
}

fun listarProdutos(): List<BigDecimal> {
    val sql = "SELECT preco FROM produto"
    val lista = mutableListOf<BigDecimal>()

    DriverManager.getConnection(JDBC_URL, USER, PASSWORD).use { conn ->
        conn.createStatement().use { st ->
            val rs: ResultSet = st.executeQuery(sql)
            while (rs.next()) {
                // lê como String e converte para BigDecimal
                val preco = rs.getString("preco").toBigDecimal()
                lista.add(preco)
            }
        }
    }
    return lista
}