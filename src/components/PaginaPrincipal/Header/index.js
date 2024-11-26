import { FaUser, FaShoppingCart, FaTrash, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

const Header = ({ carrinho, removerDoCarrinho, adicionarAoCarrinho }) => {
  const navigate = useNavigate();
  const [showCarrinho, setShowCarrinho] = useState(true);
  const [dropdownVisible, setDropdownVisible] = useState(false); 

  // Função para aumentar a quantidade de um produto
  const aumentarQuantidade = (id) => {
    adicionarAoCarrinho(carrinho.find((item) => item.id === id));
  };

  // Função para diminuir a quantidade de um produto
  const diminuirQuantidade = (id) => {
    removerDoCarrinho(id);
  };

  return (
    <header>
      <nav className="nav-header">
        <img src="/images/logo.png" alt="Logo do RevRiders"></img>

        {/* Botão dropdown para telas menores */}
        <button
          className="dropdown-button"
          onClick={() => setDropdownVisible(!dropdownVisible)}
        >
          <FaBars/>
        </button>

        <ul className={`menu-list ${dropdownVisible ? "active" : ""}`}>
          <li>
            <a href="#motos-catalogo">Motos</a>
          </li>
          <li>
            <a href="#acessorios">Acessórios</a>
          </li>
          <li>
            <a href="#contatos">Contatos</a>
          </li>
          <li>
            <a href="#comprar">Comprar</a>
          </li>
        </ul>

          <span
            onClick={() => navigate("/login")}
            style={{ cursor: "pointer", color: "#fff", fontSize: "1.2rem" }}
            title="Login"
          >
            <FaUser />
          </span>

          <span
            style={{ cursor: "pointer", fontSize: "1.2rem", color: "#fff" }}
            title="Carrinho de Compras"
            onClick={() => setShowCarrinho(true)}
          >
            <FaShoppingCart />
            {carrinho.length > 0 && (
              <span className="carrinho-count">{carrinho.length}</span>
            )}
          </span>

          {/* Sidebar do Carrinho */}
          <div className={`sidebar-carrinho ${showCarrinho ? "aberto" : ""}`}>
            <button
              className="fechar-carrinho"
              onClick={() => setShowCarrinho(false)}
            >
              X
            </button>
            <h2>Seu Carrinho</h2>

            {carrinho.length > 0 ? (
              carrinho.map((item) => (
                <div key={item.id} className="carrinho-container">
                  <div className="carrinho-item">
                    <img src={item.imagem} alt={item.nome} />
                    <div className="carrinho-info">
                      <h4>{item.nome}</h4>
                      <p>R$ {item.preco * item.quantidade}</p>
                    </div>
                  </div>

                  <div className="controle-quantidade">
                    <div className="quantidade-btn">
                      <button onClick={() => diminuirQuantidade(item.id)}>
                        -
                      </button>
                      <span>{item.quantidade}</span>
                      <button onClick={() => aumentarQuantidade(item.id)}>
                        +
                      </button>
                    </div>

                    <div className="btn-trash">
                      <button
                        className="remove-btn"
                        onClick={() => removerDoCarrinho(item.id)}
                      >
                        <FaTrash fontSize={18} color="#000" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>O carrinho está vazio.</p>
            )}

            {carrinho.length > 0 ? (
              <div className="finalizar-compra-btn">
                <button type="button">Finalizar Compra</button>
              </div>
            ) : null}
          </div>

          {/* Overlay */}
          {showCarrinho && (
            <div
              className="overlay"
              onClick={() => setShowCarrinho(false)}
            ></div>
          )}
      </nav>
    </header>
  );
};

export default Header;
