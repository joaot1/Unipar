//Importa o CSS
import './App.css'
//Importa as outras Páginas de Código.
import Corpo from './components/Corpo'
import Footer from './components/Footer'
import Header from './components/Header'

//Você Está criando seu componente chamado APP. Por padrão sempre é maiscúlo.
function App() {
 //Return retorna toda a parte visual do código e Ele só pode retornar um 1 elemento.
  return ( 
    <>
    <div className='card'>
        <Header titulo="oi card 1"/>
        <Corpo corpinho="oi corpinho 1"/>
        <Footer valorFinal="oi rodape 1"/>
    </div>

    <div className='card'>
        <Header titulo="oi card 2"/>
        <Corpo corpinho="oi corpinho 2"/>
        <Footer valorFinal="oi rodape 2"/>
    </div>
    </>
  )
}

//Você habilita o APP ser importado para outros componentes.
export default App



    // <> </> O fragment: Ele agrupa todos os elementos dentro dele.
    //Importamos o a página do outro componente Header utilizando este comando <Header/> que irá gerar o import Header from './components/Header'
    //Utilizamos as props para poder simplificar.