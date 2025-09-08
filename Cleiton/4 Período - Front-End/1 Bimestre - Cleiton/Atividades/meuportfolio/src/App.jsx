import './App.css'
import Header from './componentes/Header'
import Footer from './componentes/Footer'
import Card from './componentes/Card'
/* Imagens */
import prancha1 from "./img/prachasurf1.jpg"
import prancha2 from "./img/prachasurf2.jpg"

function App() {
  return (
    <div className='container'>
      <Header/>

      <main className='main'>
        <Card imagem={prancha1}
        titulo="Prancha Para Surf Profissional"
        descricao="Perfeita para ondas grandes e manobras com precisão"
        />
         <Card imagem={prancha2}
        titulo="Prancha De Surf Sligshot"
        descricao="É uma Prancha com respostas rápidas e manobras de explosão com um surf moderno e uma aparência clássica."
        />
      </main>

        <Footer/>
    </div>
  )
}

export default App
