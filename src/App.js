import Header from './components/Header';
import Home from './components/Home';
import Loja from './components/Loja';
import Catalogo from './components/Catalogo';
import Produtos from './components/Produtos';


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Loja/>
      <Catalogo/>
      <Produtos/>
    </div>
  );
}

export default App;
