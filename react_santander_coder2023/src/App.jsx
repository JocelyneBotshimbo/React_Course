/*import MeuComponente  from "./components/MeuComponent"
function App() {
  return (
    <div>
      <h1>Estados e Eventos</h1>
      <MeuComponente/>
      <MeuBotao conteudo = 'me clique'/>
      <MeuBotao conteudo = 'depois aqui'/>
      <MeuBotao conteudo =' e por fim aqui' idade={2}/>

    </div>
 

  )
}

function MeuBotao(props){
  return(
    <button>{props.conteudo}</button>
  )
}


export default App*/

/*export default function App(){
  return(
    <div>
      <MeuContador/>
    </div>
  )
}*/

import MeuContador from "./MeuContador";
import MinhaList from "./components/MinhaLista";
import MinhaTarefa from "./components/MinhaTarefa";
export default function App () {
  return(
    <div>
      <MeuContador/>
      <MinhaList/>
      <MinhaTarefa/>
    </div>

  )
}
