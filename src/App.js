import { BrowserRouter as Router} from 'react-router-dom';
import Header from './components/PaginaPrincipal/Header';  // Importe o Header
import AppRoutes from './routes/AppRoutes';
import { useState } from 'react';

function App() {

  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prevCarrinho) => {
      // Verificar se o produto já existe no carrinho
      const produtoExistente = prevCarrinho.find(item => item.id === produto.id);

      if (produtoExistente) {
        // Se o produto já existir, aumenta a quantidade
        return prevCarrinho.map(item =>
          item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
        );
      } else {
        // Caso contrário, adiciona o produto com quantidade 1
        return [...prevCarrinho, { ...produto, quantidade: 1, preco: parseFloat(produto.preco).toFixed(2)}];
      }
    });
  };

  const removerDoCarrinho = (id) => {
    setCarrinho((prevCarrinho) => {
      const produtoExistente = prevCarrinho.find(item => item.id === id);

      if (produtoExistente.quantidade > 1) {
        // Se a quantidade for maior que 1, diminui a quantidade
        return prevCarrinho.map(item =>
          item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item
        );
      } else {
        // Caso contrário, remove o produto
        return prevCarrinho.filter(item => item.id !== id);
      }
    });
  };

  return (
    <div className="App">
      <Router>
        <Header carrinho={carrinho} removerDoCarrinho={removerDoCarrinho} adicionarAoCarrinho={adicionarAoCarrinho}/>
        <AppRoutes adicionarAoCarrinho={adicionarAoCarrinho} />
      </Router>
    </div>
  );
}

export default App;
