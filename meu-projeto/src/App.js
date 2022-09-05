import logo from './logo.svg';
import './App.css';
import './components/HelloWorld';
import HelloWord from './components/HelloWorld';
import SaveMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';



function App() {

  const name = 'AAAA';

// const url = "https://via.placeholder.com/150"
  return (
    <div className="App">
    {/* <h1> Projeto  </h1>
    <h2> Teste</h2>
    <p> Ola, {name}</p> */}
    {/* <img src={url} alt="Minha Imagem"/> */}

    <HelloWord/>
    <SaveMyName nome="Jonatas"/>
    <SaveMyName nome={name}/>
    <Frase/>
    <Pessoa nome="Jonatas"
     idade="18"
      profissao="Programador" 
      foto="https://via.placeholder.com/150"/>

<List/>
    </div>
  );
}

export default App;
