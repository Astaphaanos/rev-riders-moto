import './Header.css';

const Header = () => {
    return (
        <header>
            <nav className='nav-header'>
                <img src='/images/logo.png' alt='Logo do RevRiders'></img>
                <ul>
                    <li><a href="#motos-catalogo">Motos</a></li>
                    <li><a href="#acessorios">Acessórios</a></li>
                    <li><a href="#contatos">Contatos</a></li>
                    <li><a href="#comprar">Comprar</a></li>
                    <span class="material-symbols-outlined">account_circle</span>
                </ul>
            </nav>
        </header>
    )
}

export default Header;