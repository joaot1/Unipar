function Card({ imagem, titulo, descricao }){
    return(
        <div className="card">
            <img src={imagem} alt={titulo} className="card-imagem"/>
            <h2 className="card-titulo">{titulo}</h2>
            <p className="card-descricao">{descricao}</p>
        </div>
    )
}

export default Card;