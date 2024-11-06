import './Header.css';

const Header = () => {
    return (
        <header>
            <nav className='nav-header'>
                <img src='/images/logo.png' alt='Logo do RevRiders'></img>
                <ul>
                    <li>Motos</li>
                    <li>Acessórios</li>
                    <li>Nossa Visão</li>
                    <li>Comprar</li>
                    <span class="material-symbols-outlined">account_circle</span>
                </ul>
            </nav>
        </header>
    )
}

export default Header;