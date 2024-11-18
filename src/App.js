import Header from './components/Header';
import Home from './components/Home';
import Loja from './components/Loja';
import Catalogo from './components/Catalogo';
import Banner from './components/Banner';
import Produtos from './components/Produtos';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Loja/>
      <Catalogo/>
      <Banner/>
      <Produtos/>
      <Contato/>
      <Footer/>
    </div>
  );
}

export default App;
