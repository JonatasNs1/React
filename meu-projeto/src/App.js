import logo from './logo.svg';
import './App.css';
import './components/HelloWorld';
import HelloWord from './components/HelloWorld';
import SaveMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';





function App() {

  const meusItens=['react', 'view', 'angular']

  return (
    <div className="App">
      <h1> Renderização de listas</h1>
    <OutraLista itens={meusItens}/>
    <OutraLista itens={[]} />
    </div>
  );
}

export default App;
