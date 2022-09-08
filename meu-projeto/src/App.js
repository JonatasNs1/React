import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa'
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

// router -> envolver a aplicacao
// routes -> dizer a area que altera
// route -> decreta o que é a rota, qual componente representa e qual path
// link -> redireciona para as paginas que tem no projeto

function App() {

  return (
    <Router>
       <NavBar/>
       
    <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/empresa' element={<Empresa/>} />
        <Route path='/contato' element={<Contato/>} />
    </Routes>
    
    <Footer/>
    </Router>
  );
}

export default App;
