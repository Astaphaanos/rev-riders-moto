import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();

    return (
        <header>
            <nav className='nav-header'>
                <img src='/images/logo.png' alt='Logo do RevRiders'></img>
                <ul>
                    <li><a href="#motos-catalogo">Motos</a></li>
                    <li><a href="#acessorios">Acessórios</a></li>
                    <li><a href="#contatos">Contatos</a></li>
                    <li><a href="#comprar">Comprar</a></li>
                    
                    <span
                    onClick={() => navigate('/login')}
                    style={{ cursor: 'pointer', color: '#fff', fontSize: '1.2rem' }}
                    title="Login">
                        <FaUser />
                    </span>

                    <span 
                    style={{ cursor: 'pointer', fontSize: '1.2rem', color: '#fff' }}
                    title="Carrinho de Compras">
                        <FaShoppingCart />
                    </span>
                </ul>
            </nav>
        </header>
    )
}

export default Header;