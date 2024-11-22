import Home from './Home';
import Loja from './Loja';
import Catalogo from './Catalogo';
import Banner from './Banner';
import Produtos from './Produtos';
import Contato from './Contato';
import Footer from './Footer';

function MainPage({ adicionarAoCarrinho }) {
  return (
    <>
      <Home />
      <Loja />
      <Catalogo adicionarAoCarrinho={adicionarAoCarrinho}/>
      <Banner />
      <Produtos adicionarAoCarrinho={adicionarAoCarrinho}/>
      <Contato />
      <Footer />
    </>
  );
}

export default MainPage;